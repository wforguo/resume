module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://cloud-app.com.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
