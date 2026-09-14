import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyAdminSession, getExpectedSessionToken, ADMIN_COOKIE_NAME } from '@/lib/adminAuth';

export async function GET() {
  const isAuthenticated = verifyAdminSession();
  return NextResponse.json({ authenticated: isAuthenticated });
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const expectedPassword = process.env.ADMIN_PASSWORD || 'TheGenZ2026!Admin';

    if (!password || password !== expectedPassword) {
      return NextResponse.json(
        { success: false, error: 'Incorrect administrator password.' },
        { status: 401 }
      );
    }

    const token = getExpectedSessionToken();
    const cookieStore = cookies();
    cookieStore.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return NextResponse.json({ success: true, message: 'Authenticated successfully.' });
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { success: false, error: 'Server authentication error.' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const cookieStore = cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
  return NextResponse.json({ success: true, message: 'Logged out successfully.' });
}
