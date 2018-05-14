/**
 * 滚动到指定id地点 不传id默认滚动到顶部 跳50次 6ms一跳
 * @offset {number} 差值  (正数表示滚动到距离元素上方多少  负数表示超出元素多少)
 */
export function toTop(id, offset) {
    let num = 50;
    let eachtime = 6;
    id = document.getElementById(id) || (document.body || document.documentElement);
    // 要滚动到的元素
    let t = id.offsetTop - (offset || 0);
    // 滚动条
    let b = document.body.scrollTop || document.documentElement.scrollTop;
    // 步进值
    let step = (t-b) / num;
    if (b < t) {
        scrollDown();
    } else {
        let newt = b - t;
        step = newt / num;
        scrollUp();
    }
    function scrollDown() {
        if (b < t) {
            b += step;
            document.body.scrollTop = b;
            document.documentElement.scrollTop = b;
            setTimeout(scrollDown, eachtime);
        } else {
            document.body.scrollTop = t;
            document.documentElement.scrollTop = t;
        }
    }
    function scrollUp() {
        if (b > t) {
            b -= step;
            document.body.scrollTop = b;
            document.documentElement.scrollTop = b;
            setTimeout(scrollUp, eachtime);
        } else {
            document.body.scrollTop = t;
            document.documentElement.scrollTop = t;
        }
    }
}
