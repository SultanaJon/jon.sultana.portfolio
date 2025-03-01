create table "api"."auth" (
    "id" uuid not null default gen_random_uuid(),
    "token" text not null,
    "auth_type" text not null,
    "request_id" uuid not null,
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now()
);


create table "api"."collections" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "workspace_id" uuid not null,
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now()
);


create table "api"."requests" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "method" text not null,
    "endpoint" text not null,
    "collection_id" uuid not null,
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now()
);


create table "api"."responses" (
    "id" uuid not null default gen_random_uuid(),
    "code" integer not null,
    "status" text not null,
    "body" text,
    "request_id" uuid not null,
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now()
);


create table "api"."workspaces" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now()
);


CREATE UNIQUE INDEX auth_pkey ON api.auth USING btree (id);

CREATE UNIQUE INDEX auth_request_id_key ON api.auth USING btree (request_id);

CREATE UNIQUE INDEX collections_pkey ON api.collections USING btree (id);

CREATE UNIQUE INDEX requests_pkey ON api.requests USING btree (id);

CREATE UNIQUE INDEX responses_pkey ON api.responses USING btree (id);

CREATE UNIQUE INDEX responses_request_id_key ON api.responses USING btree (request_id);

CREATE UNIQUE INDEX workspaces_pkey ON api.workspaces USING btree (id);

alter table "api"."auth" add constraint "auth_pkey" PRIMARY KEY using index "auth_pkey";

alter table "api"."collections" add constraint "collections_pkey" PRIMARY KEY using index "collections_pkey";

alter table "api"."requests" add constraint "requests_pkey" PRIMARY KEY using index "requests_pkey";

alter table "api"."responses" add constraint "responses_pkey" PRIMARY KEY using index "responses_pkey";

alter table "api"."workspaces" add constraint "workspaces_pkey" PRIMARY KEY using index "workspaces_pkey";

alter table "api"."auth" add constraint "auth_request_id_fkey" FOREIGN KEY (request_id) REFERENCES api.requests(id) ON DELETE CASCADE not valid;

alter table "api"."auth" validate constraint "auth_request_id_fkey";

alter table "api"."auth" add constraint "auth_request_id_key" UNIQUE using index "auth_request_id_key";

alter table "api"."collections" add constraint "collections_workspace_id_fkey" FOREIGN KEY (workspace_id) REFERENCES api.workspaces(id) ON DELETE CASCADE not valid;

alter table "api"."collections" validate constraint "collections_workspace_id_fkey";

alter table "api"."requests" add constraint "requests_collection_id_fkey" FOREIGN KEY (collection_id) REFERENCES api.collections(id) ON DELETE CASCADE not valid;

alter table "api"."requests" validate constraint "requests_collection_id_fkey";

alter table "api"."responses" add constraint "responses_request_id_fkey" FOREIGN KEY (request_id) REFERENCES api.requests(id) ON DELETE CASCADE not valid;

alter table "api"."responses" validate constraint "responses_request_id_fkey";

alter table "api"."responses" add constraint "responses_request_id_key" UNIQUE using index "responses_request_id_key";

set check_function_bodies = off;

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

CREATE TRIGGER set_timestamp BEFORE UPDATE ON api.auth FOR EACH ROW EXECUTE FUNCTION api.update_timestamp();

CREATE TRIGGER set_timestamp BEFORE UPDATE ON api.collections FOR EACH ROW EXECUTE FUNCTION api.update_timestamp();

CREATE TRIGGER set_timestamp BEFORE UPDATE ON api.requests FOR EACH ROW EXECUTE FUNCTION api.update_timestamp();

CREATE TRIGGER set_timestamp BEFORE UPDATE ON api.responses FOR EACH ROW EXECUTE FUNCTION api.update_timestamp();

CREATE TRIGGER set_timestamp BEFORE UPDATE ON api.workspaces FOR EACH ROW EXECUTE FUNCTION api.update_timestamp();


