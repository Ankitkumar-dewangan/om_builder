-- ==============================================================================
-- OM SUNBUILD - Supabase Database Schema for Admin Authentication & Enquiries
-- ==============================================================================
-- Run this script in your Supabase Dashboard -> SQL Editor
-- URL: https://supabase.com/dashboard/project/ufkdpkpukwutoqmhrvdb/sql

-- 1. Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT DEFAULT 'Admin',
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable RLS on admin_users table
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow anon read for admin_users" ON admin_users;
DROP POLICY IF EXISTS "Allow anon insert for admin_users" ON admin_users;
DROP POLICY IF EXISTS "Allow anon update for admin_users" ON admin_users;

-- Allow REST API access with anon key for authentication
CREATE POLICY "Allow anon read for admin_users" ON admin_users FOR SELECT USING (true);
CREATE POLICY "Allow anon insert for admin_users" ON admin_users FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anon update for admin_users" ON admin_users FOR UPDATE USING (true);

-- 3. Ensure enquiries table has status column and proper RLS policies
ALTER TABLE IF EXISTS enquiries ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new';

-- Enable RLS on enquiries if not already enabled
ALTER TABLE IF EXISTS enquiries ENABLE ROW LEVEL SECURITY;

-- Ensure full access policies on enquiries for reading, updating, and deleting in the dashboard
DROP POLICY IF EXISTS "Allow public insert for enquiries" ON enquiries;
DROP POLICY IF EXISTS "Allow select for enquiries" ON enquiries;
DROP POLICY IF EXISTS "Allow update for enquiries" ON enquiries;
DROP POLICY IF EXISTS "Allow delete for enquiries" ON enquiries;

CREATE POLICY "Allow public insert for enquiries" ON enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow select for enquiries" ON enquiries FOR SELECT USING (true);
CREATE POLICY "Allow update for enquiries" ON enquiries FOR UPDATE USING (true);
CREATE POLICY "Allow delete for enquiries" ON enquiries FOR DELETE USING (true);

-- 4. Automatic timestamp trigger for admin_users
CREATE OR REPLACE FUNCTION update_admin_users_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_admin_users_updated_at ON admin_users;
CREATE TRIGGER trg_admin_users_updated_at
  BEFORE UPDATE ON admin_users
  FOR EACH ROW
  EXECUTE FUNCTION update_admin_users_timestamp();

-- ==============================================================================
-- Schema ready! Next, create your admin user using:
-- node scripts/create-admin.mjs <username> <password>
-- ==============================================================================
