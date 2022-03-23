module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/varible.scss";'
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/web-covid19/'
};