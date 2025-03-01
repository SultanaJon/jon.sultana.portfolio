CREATE TABLE api.requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    method TEXT NOT NULL,
    endpoint TEXT NOT NULL,
    collection_id UUID NOT NULL REFERENCES api.collections(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON api.requests
FOR EACH ROW
EXECUTE FUNCTION api.update_timestamp();