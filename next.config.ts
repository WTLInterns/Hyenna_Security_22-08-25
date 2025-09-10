import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure Turbopack resolves this workspace as the root and silences lockfile warnings
    root: __dirname,
  },
};

export default nextConfig;
