CREATE TABLE api.responses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    code INTEGER NOT NULL,
    status TEXT NOT NULL,
    body TEXT,
    request_id UUID UNIQUE NOT NULL REFERENCES api.requests(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON api.responses
FOR EACH ROW
EXECUTE FUNCTION api.update_timestamp();