/*
  # Fix RLS policies for demo registrations table

  1. Changes
    - Enable RLS on demo_registrations table
    - Add policy for anonymous inserts
    - Add policy for authenticated reads
    - Add policy for service role full access

  2. Security
    - Allow anonymous users to register for demo
    - Restrict read access to authenticated users only
    - Grant full access to service role
*/

-- Enable Row Level Security
ALTER TABLE demo_registrations ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Service role can insert demo registrations" ON demo_registrations;
DROP POLICY IF EXISTS "Service role can read demo registrations" ON demo_registrations;

-- Allow anonymous users to insert records
CREATE POLICY "Anyone can register for demo"
  ON demo_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read records
CREATE POLICY "Authenticated users can read demo registrations"
  ON demo_registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow service role full access
CREATE POLICY "Service role has full access"
  ON demo_registrations
  USING (true)
  WITH CHECK (true);