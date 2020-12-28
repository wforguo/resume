import axios from "axios";

class request {
    constructor() {
        this.config = {
            baseURL: 'https://api.cloud-app.com.cn',
            timeout: 10000,
        };
    }
    request(options) {
        const config = Object.assign({}, this.config, options);
        const instance = axios.create();
        this.setInterceptors(instance);
        return instance(config); // 返回axios实例的执行结果
    }
    setInterceptors (instance) {
        instance.interceptors.request.use((config) => {
            return config;
        }, err => {
            return Promise.reject(err);
        });
        instance.interceptors.response.use((data) => {
            return Promise.resolve(data);
        }, (err) => {
            return Promise.resolve(err);
        })
    }
}

export default new request();
