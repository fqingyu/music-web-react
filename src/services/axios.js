import originAxios from 'axios';

export default function request(option) {
    return new Promise((resolve, reject) => {

        const instance = originAxios.create({
            baseURL: 'https://netease-cloud-music-api-chi-navy.vercel.app/',
            timeout: 10000
        });

        instance.interceptors.request.use(config => {
            // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

            // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

            // 3.对请求的参数进行序列化(看服务器是否需要序列化)
            // config.data = qs.stringify(config.data)
            // console.log(config);

            // 4.等等
            return config
        }, err => {
            return err
        })

        instance.interceptors.response.use(response => {
            return response.data
        }, err => {
            console.log(err);
            if (err && err.response) {
                switch (err.response.status) {
                    case 400:
                        err.message = '请求错误'
                        break
                    case 401:
                        err.message = '未授权的访问'
                        break
                    default:
                        err.message = "其他错误信息"
                }
            }
            return err
        })

        instance(option).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}