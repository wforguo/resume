module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // url string to be parsed with the url module
                target: 'https://cloud-app.com.cn',
                // true/false, Default: false - changes the origin of the host header to the target URL
                changeOrigin: true,
                // object/function, rewrite target's url path. Object-keys will be used as RegExp to match paths.
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
