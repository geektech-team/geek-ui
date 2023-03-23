// tab缩进大小,默认为2

module.exports = {
  // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  singleQuote: true,
  // 分号
  semi: false,
  // 尾部逗号
  trailingComma: 'es5',
  printWidth: 120,
  // 对象&数组是否追加空格
  bracketSpacing: true,
  // 行尾逗号,默认none,可选 none|es5|all
  // es5 包括es5中的数组、对象
  // all 包括函数对象等所有可选
  trailingComma: 'all',
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: 'avoid',
};
