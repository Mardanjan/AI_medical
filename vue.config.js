const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV)

module.exports = {
    publicPath: '', // 相对于 HTML 页面（目录相同）
    devServer: {
        // open: true,
        port: 8066
    },
    // chainWebpack: config => {
    //     if (IS_PROD) {
    //       config.module
    //         .rule("images")
    //         .use("image-webpack-loader")
    //         .loader("image-webpack-loader")
    //         .options({
    //           mozjpeg: { progressive: true, quality: 65 },
    //           optipng: { enabled: false },
    //           pngquant: { quality: [0.65, 0.9], speed: 4 },
    //           gifsicle: { interlaced: false }
    //           // webp: { quality: 75 }
    //         })
    //     }
    //   }
  }