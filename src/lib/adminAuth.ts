import { cookies } from 'next/headers';
import crypto from 'crypto';

const ADMIN_COOKIE_NAME = 'thegenz_admin_session';

function getSecretHash(): string {
  const secret = process.env.ADMIN_SESSION_SECRET || 'thegenz_default_secret_key_2026';
  const password = process.env.ADMIN_PASSWORD || 'TheGenZ2026!Admin';
  return crypto.createHash('sha256').update(`${secret}:${password}`).digest('hex');
}

export function verifyAdminSession(): boolean {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    if (!token) return false;
    return token === getSecretHash();
  } catch {
    return false;
  }
}

export function getExpectedSessionToken(): string {
  return getSecretHash();
}

export { ADMIN_COOKIE_NAME };
