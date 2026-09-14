import { NextResponse } from 'next/server';
import { pool, initDb } from '@/lib/db';
import { verifyAdminSession } from '@/lib/adminAuth';

export async function GET() {
  if (!verifyAdminSession()) {
    return NextResponse.json({ success: false, error: 'Unauthorized access.' }, { status: 401 });
  }

  try {
    await initDb();

    // Fetch members
    const result = await pool.query(
      `SELECT id, full_name, email, whatsapp, country, city, role, project_intent, created_at, status
       FROM community_members
       ORDER BY created_at DESC`
    );

    const members = result.rows;

    // Compute KPI statistics
    const totalMembers = members.length;
    const countriesSet = new Set(members.map((m: any) => m.country?.trim().toLowerCase()).filter(Boolean));
    const technicalCount = members.filter((m: any) =>
      m.role?.toLowerCase().includes('engineer') || m.role?.toLowerCase().includes('developer')
    ).length;
    const problemOwnersCount = members.filter((m: any) =>
      m.role?.toLowerCase().includes('problem') || m.role?.toLowerCase().includes('domain')
    ).length;
    const studentsCount = members.filter((m: any) =>
      m.role?.toLowerCase().includes('student') || m.role?.toLowerCase().includes('learner')
    ).length;

    return NextResponse.json({
      success: true,
      members,
      stats: {
        totalMembers,
        countriesCount: countriesSet.size,
        technicalCount,
        problemOwnersCount,
        studentsCount
      }
    });
  } catch (error: any) {
    console.error('Error fetching admin members:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve community members from database.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  if (!verifyAdminSession()) {
    return NextResponse.json({ success: false, error: 'Unauthorized access.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Member ID is required.' }, { status: 400 });
    }

    await initDb();
    await pool.query('DELETE FROM community_members WHERE id = $1', [id]);

    return NextResponse.json({ success: true, message: 'Member deleted successfully.' });
  } catch (error: any) {
    console.error('Error deleting member:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete member.' }, { status: 500 });
  }
}
