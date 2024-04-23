import { defineConfig } from "@kubb/core";
import { definePlugin as createSwagger } from "@kubb/swagger";
import { definePlugin as createSwaggerTanstackQuery } from "@kubb/swagger-tanstack-query";
import { definePlugin as createSwaggerTS } from "@kubb/swagger-ts";

export default defineConfig({
  root: ".",
  input: {
    path: "./src/api/swagger.json",
  },
  output: {
    path: "./src/api/queries",
    clean: true,
  },
  plugins: [
    createSwagger({ output: false }),
    createSwaggerTS({}),
    createSwaggerTanstackQuery({
      output: {
        path: "./hooks",
      },
      client: {
        importPath: "~/api/client.ts",
      }
    }),
  ],
});
