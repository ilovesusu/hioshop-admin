module.exports = {
    devServer: {
        proxy: {
            '/v1/api': {
                target: 'http://8.210.52.153',
                // target: 'http://0.0.0.0:2727',
                ws: true,
                changOrigin: true,		//是否跨域
            }
        },
        port: 8080,
    },
    // assetsDir: "store"
};