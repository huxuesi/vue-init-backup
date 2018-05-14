function handler(e){
    let code = e.keyCode;
    let aNum = [110, 8, 190]; // 110--数字键的点 8--退格 190--主键的点
    let isNum = code > 47 && code < 58 || code > 95 && code < 106 || aNum.includes(code);
    if (!isNum) {
        e.preventDefault();
    }
}

export default {
    bind(el) {
        el.addEventListener('keydown', handler);
    },
    unbind(el) {
        el.removeEventListener('keydown', handler)
    }
};