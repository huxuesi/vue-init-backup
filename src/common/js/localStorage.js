// localStorage 存
export function setStorage(key, value) {
    if( window.localStorage ){
        localStorage[key] = value
        return true
    }else{
        console.log('浏览器不支持localStorage')
        return ''
    }
}

// localStorage 取
export function getStorage(key) {
    if( window.localStorage ){
        return localStorage[key]
    }else{
        console.log('浏览器不支持localStorage')
        return ''
    }
}

// localStorage 删数组中的某个值
export function delStorage(key, value) {
    if( window.localStorage ){
        let arr = JSON.parse(localStorage[key])
        for( let v in arr ){
            if( arr[v] == value ){
                arr.splice(v,1)
            }
        }
        arr.length <= 0 ? arr = '' : arr = arr
        localStorage[key] = JSON.stringify(arr)
        return true
    }else{
        console.log('浏览器不支持localStorage')
        return ''
    }
}
