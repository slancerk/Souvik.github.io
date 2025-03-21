// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

module.exports = nextConfig;
