export default {
  // '*.ts,*.vue': 'eslint --fix',
  // '*.{css,less,scss,jsx}': 'stylelint --fix --custom-syntax postcss-less',
  '*.{js,jsx,ts,css,less,json,md}': ['prettier --write'],
  '*.{css,less}': ['stylelint --fix --syntax less'],
};
