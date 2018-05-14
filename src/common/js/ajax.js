/**
 * 请求统一处理
 * @param {method} 请求的方式
 * @param {url} 请求的url
 * @param {paramObj} 请求需要的参数
 * @param {loadingStr} 控制loading的变量的字符串形式，支持 obj.str 形式
 * @param {successFn} 请求成功的回调
 * @param {errFn} 请求有错的回调
 */
export function ajax(method, url, paramObj, loadingStr, successFn, errFn) {

    let get_param = '';

    // 参数处理
    if (typeof paramObj == 'function') {
        // 没有传paramObj、needspin
        errFn = loadingStr;
        successFn = paramObj;
        paramObj = undefined;
        loadingStr = undefined;
    } else if (typeof paramObj == 'string') {
        // 没有传paramObj
        errFn = successFn;
        successFn = loadingStr;
        loadingStr = paramObj;
        paramObj = undefined;
    } else if (typeof loadingStr == 'function'){
        // 没有传needspin
        errFn = successFn;
        successFn = loadingStr;
        loadingStr = undefined;
    }

    if (typeof paramObj == 'object' && paramObj != null) {
        // get请求参数格式化
        for (const key in paramObj) {
            const value = paramObj[key];
            get_param += `&${key}=${value}`;
        }
    }

    if (loadingStr) {
        loadingStr.split('.').length > 1 ? this[loadingStr.split('.')[0]][loadingStr.split('.')[1]] = true : this[loadingStr] = true;
    }

    let _method = method.toLowerCase();
    switch (_method) {
        case 'get':
            url = get_param? `${url}?${get_param.slice(1)}`: url;
            this.$http.get(url).then(response => {
                if (loadingStr) {
                    loadingStr.split('.').length > 1 ? this[loadingStr.split('.')[0]][loadingStr.split('.')[1]] = false : this[loadingStr] = false;
                }

                let data = response.data;

                if( data.retcode == $conf.RETCODE_OK ){
                    successFn && successFn(data);
                }else{
                    this.$Message.error(data.errmsg);
                    errFn && errFn(data);
                }
            }).catch(err => {
                if (loadingStr) {
                    loadingStr.split('.').length > 1 ? this[loadingStr.split('.')[0]][loadingStr.split('.')[1]] = false : this[loadingStr] = false;
                }

                // 未登录
                if (!this.$store.state.loginStatus) {
                    this.$Message.error('请先登录后再操作！');
                }

                console.log(err);

                errFn && errFn();
            });
            break;
        case 'post':
            // post请求一次只能存在一个
            if (window.isPosting) {
                return false;
            }
            window.isPosting = true;

            this.$http.post(url, paramObj).then(response => {
                if (loadingStr) {
                    loadingStr.split('.').length > 1 ? this[loadingStr.split('.')[0]][loadingStr.split('.')[1]] = false : this[loadingStr] = false;
                }

                window.isPosting = false;

                let data = response.data;
                if( data.retcode == $conf.RETCODE_OK ){
                    successFn && successFn(data);
                }else{
                    this.$Message.error(data.errmsg);
                    errFn && errFn(data);
                }
            }).catch(err => {
                if (loadingStr) {
                    loadingStr.split('.').length > 1 ? this[loadingStr.split('.')[0]][loadingStr.split('.')[1]] = false : this[loadingStr] = false;
                }

                window.isPosting = false;

                // 未登录
                if (!this.$store.state.loginStatus) {
                    this.$Message.error('请先登录后再操作！');
                }

                errFn && errFn();

                console.log(err);
            });
            break;
    }
}
