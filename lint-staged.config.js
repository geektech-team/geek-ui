export default {
  '*.{js,jsx,ts,vue,css,less,json,md}': ['prettier --write'],
  '*.{js,ts,vue}': ['eslint --fix'],
  '*.{css,less}': ['stylelint --fix --custom-syntax postcss-less'],
};
