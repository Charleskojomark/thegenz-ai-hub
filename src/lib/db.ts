import { Pool } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL || '';

const globalForDb = global as unknown as { pool: Pool | undefined };

export const pool = globalForDb.pool ?? new Pool({ connectionString });

if (process.env.NODE_ENV !== 'production') {
  globalForDb.pool = pool;
}

let tableInitialized = false;

export async function initDb() {
  if (tableInitialized) return;

  const query = `
    CREATE TABLE IF NOT EXISTS community_members (
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      whatsapp VARCHAR(50) NOT NULL,
      country VARCHAR(100) NOT NULL,
      city VARCHAR(100),
      role VARCHAR(100) NOT NULL,
      project_intent TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      status VARCHAR(50) DEFAULT 'active'
    );
    CREATE INDEX IF NOT EXISTS idx_community_members_email ON community_members(email);
    CREATE INDEX IF NOT EXISTS idx_community_members_created_at ON community_members(created_at DESC);
  `;

  try {
    await pool.query(query);
    tableInitialized = true;
  } catch (err) {
    console.error('Failed to initialize database table:', err);
    throw err;
  }
}
