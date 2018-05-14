/**
 * 获取cookie的一项值
 * @cookies {string} cookie字符串
 * @name {string} cookie中一项的名称
 * 返回名称对应的值,没有匹配到name则返回空字符串
 * decodeURIComponent()
 */
export function getCookie(cookies, name) {
    let arr = cookies.split(';');
    let currentItem = '';
    arr.forEach(function (vlaue, index, arr) {
        if (vlaue.indexOf(name) !== -1) {
            currentItem = vlaue;
        }
    });
    if (currentItem !== '') {
        return currentItem.split('=')[1];
    } else {
        console.warn('没有设置cookie');
        return '';
    }
}
