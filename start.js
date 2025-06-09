const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { VueLoaderPlugin } = require('vue-loader')

const webpackConfig = {
  mode: 'development',
  entry: {
    main: './src/index.vue'
  },
  output: {
    filename: '[name].js',
    library: {
      name: ['testCom'],
      type: 'var'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  externals: {
    vue: 'Vue'
  }
}
const compiler = webpack(webpackConfig)
compiler.hooks.done.tap('stats-handle-plugin', (stats) => {
  // stats 对象包含了所有编译后的文件信息
  compilerStats = stats.toJson()
  console.log('compilerStats: ', compilerStats?.entrypoints?.main);
})


const server = new WebpackDevServer({
  hot: 'only',
  allowedHosts: 'all',
  host: '0.0.0.0',
  client: {
    webSocketURL: {
      hostname: '127.0.0.1',
      pathname: '/ws',
      protocol: 'ws',
    },
    reconnect: 2,
    overlay: false,
  },
  server: 'http',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }
}, compiler);

server.start().then(() => {
  console.log('Webpack Dev Server is running');
})