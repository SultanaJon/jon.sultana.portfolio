CREATE SCHEMA IF NOT EXISTS "api";

CREATE TABLE api.workspaces (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE OR REPLACE FUNCTION api.update_timestamp()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$function$
;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON api.workspaces
FOR EACH ROW
EXECUTE FUNCTION api.update_timestamp();