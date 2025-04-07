import type { NextConfig } from "next";
const dotenv = require('dotenv');
const path = require('path');

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login", 
        permanent: true,
      },
    ];
  },
};

const envFile = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV || 'development'}`);
dotenv.config({ path: envFile });

export default nextConfig;
