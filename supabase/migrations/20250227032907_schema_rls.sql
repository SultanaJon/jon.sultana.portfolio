-- Enable RLS for all tables
ALTER TABLE api.workspaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE api.collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE api.requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE api.auth ENABLE ROW LEVEL SECURITY;
ALTER TABLE api.responses ENABLE ROW LEVEL SECURITY;

-- Grant select ability on our tables for the anon user.
GRANT SELECT ON api.workspaces TO anon;
GRANT SELECT ON api.collections TO anon;
GRANT SELECT ON api.requests TO anon;
GRANT SELECT ON api.responses TO anon;
GRANT SELECT ON api.auth TO anon;

CREATE POLICY anon_policy ON api.workspaces
FOR ALL
TO anon
USING (true);

CREATE POLICY anon_policy ON api.collections
FOR SELECT
TO anon
USING (true);

CREATE POLICY anon_policy ON api.requests
FOR SELECT
TO anon
USING (true);

CREATE POLICY anon_policy ON api.responses
FOR SELECT
TO anon
USING (true);

CREATE POLICY anon_policy ON api.auth
FOR SELECT
TO anon
USING (true);