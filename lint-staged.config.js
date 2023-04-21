module.exports = {
  // ... this mean any file with the extension of js, jsx,
  // ts, and tsx will be checked by eslint and formatted by prettier
  '**/*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --config ./.prettierrc.js --write',
  ],

  // ... this mean any file with the extension of css,
  // scss, md, html, and json will be formatted by prettier
  '**/*.{css,scss,md,html,json}': [
    'prettier --config ./.prettierrc.js --write',
  ],
};
