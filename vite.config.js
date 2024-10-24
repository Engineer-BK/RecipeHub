// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/RecipeHub/",
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dynamically set base for production builds
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/RecipeHub/" : "/", // Adjust base for GitHub Pages
});
