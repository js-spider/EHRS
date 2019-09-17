export default {
  cjs: 'rollup',
  esm: 'rollup',
  cssModules: true,
  // extractCSS: true,
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }],
  ]
}

