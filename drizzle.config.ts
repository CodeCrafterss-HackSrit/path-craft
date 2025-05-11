import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env.local" });

export default defineConfig({
  out: './migrations',
  schema: './integrations/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: `${process.env.NEXT_PUBLIC_DB_CONNECTION_STRING}`,
  },
});


