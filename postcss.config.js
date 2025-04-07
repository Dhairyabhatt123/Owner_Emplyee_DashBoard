import tailwindcssPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

/** @type {import('postcss').Config} */
export default {
  plugins: [
    tailwindcssPostcss({
      config: './tailwind.config.js',
    }),
    autoprefixer,
  ],
};
