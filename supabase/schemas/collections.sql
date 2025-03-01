CREATE TABLE api.collections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    workspace_id UUID NOT NULL REFERENCES api.workspaces(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON api.collections
FOR EACH ROW
EXECUTE FUNCTION api.update_timestamp();