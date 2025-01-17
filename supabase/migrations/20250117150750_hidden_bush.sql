/*
  # Create demo registrations table

  1. New Tables
    - `demo_registrations`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required, unique)
      - `club` (text, optional)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `demo_registrations` table
    - Add policy for authenticated service role to insert records
    - Add policy for authenticated service role to read records
*/

-- Create demo registrations table
CREATE TABLE IF NOT EXISTS demo_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  club text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE demo_registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service role to insert records
CREATE POLICY "Service role can insert demo registrations"
  ON demo_registrations
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy to allow service role to read records
CREATE POLICY "Service role can read demo registrations"
  ON demo_registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS demo_registrations_email_idx ON demo_registrations (email);