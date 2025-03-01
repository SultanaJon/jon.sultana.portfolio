CREATE TABLE api.auth (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    token TEXT NOT NULL,
    auth_type TEXT NOT NULL,
    request_id UUID UNIQUE NOT NULL REFERENCES api.requests(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON api.auth
FOR EACH ROW
EXECUTE FUNCTION api.update_timestamp();