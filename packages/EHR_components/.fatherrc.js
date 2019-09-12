export default {
  cjs: 'rollup',
  esm: 'rollup',
  cssModules: {
    generateScopedName: 'EHR_[name]__[local]___[hash:base64:5]',
  },
  extractCSS: true,
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }],
  ]
}

