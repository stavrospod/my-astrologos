import { NextResponse } from 'next/server';
import pool from '@/utils/db';

export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    return NextResponse.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    console.error('Database connection error:', err);
    return NextResponse.json({ success: false, error: 'Database connection failed' }, { status: 500 });
  }
}