let urls = {};

let protocol = window.location.protocol;
let host = '';//window.location.host;
if (window.location.hostname === 'localhost') {//本地开发环境
    host = '192.1.6.230:8080';
} else {
    host = window.location.hostname + ':' + window.location.port;
}

// base Url 前端API调用地址
urls.baseApi = protocol + '//' + host;

export default urls;
