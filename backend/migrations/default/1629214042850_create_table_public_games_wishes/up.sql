CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."games_wishes"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "game_id" uuid, "user_id" uuid,  "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id"), FOREIGN KEY (game_id) REFERENCES Games(id), FOREIGN KEY (user_id) REFERENCES Users(id) );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_games_wishes_updated_at"
BEFORE UPDATE ON "public"."games_wishes"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_games_wishes_updated_at" ON "public"."games_wishes" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
