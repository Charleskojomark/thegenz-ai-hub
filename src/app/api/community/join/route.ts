import { NextResponse } from 'next/server';
import { pool, initDb } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      whatsapp,
      country,
      city,
      role,
      projectIntent
    } = body;

    // Validate required fields
    if (!fullName?.trim() || !email?.trim() || !whatsapp?.trim() || !country?.trim() || !role?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Please provide all required fields (Name, Email, WhatsApp, Country, and Role).' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    await initDb();

    // Check if member with this email already exists
    const existing = await pool.query(
      'SELECT id FROM community_members WHERE LOWER(email) = LOWER($1) LIMIT 1',
      [email.trim()]
    );

    if (existing.rows.length > 0) {
      // Update existing record with fresh info
      await pool.query(
        `UPDATE community_members 
         SET full_name = $1, whatsapp = $2, country = $3, city = $4, role = $5, project_intent = $6, status = 'active'
         WHERE id = $7`,
        [
          fullName.trim(),
          whatsapp.trim(),
          country.trim(),
          city?.trim() || null,
          role.trim(),
          projectIntent?.trim() || null,
          existing.rows[0].id
        ]
      );
    } else {
      // Insert new member
      await pool.query(
        `INSERT INTO community_members (full_name, email, whatsapp, country, city, role, project_intent, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7, 'active')`,
        [
          fullName.trim(),
          email.trim().toLowerCase(),
          whatsapp.trim(),
          country.trim(),
          city?.trim() || null,
          role.trim(),
          projectIntent?.trim() || null
        ]
      );
    }

    const redirectUrl = process.env.NEXT_PUBLIC_WHATSAPP_LINK || 'https://chat.whatsapp.com/';

    return NextResponse.json({
      success: true,
      message: 'Successfully registered for the community!',
      redirectUrl
    });
  } catch (error: any) {
    console.error('Error in community join API:', error);
    return NextResponse.json(
      { success: false, error: 'A database error occurred while registering. Please try again.' },
      { status: 500 }
    );
  }
}
