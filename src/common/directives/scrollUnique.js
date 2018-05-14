function handler(event) {
    let scrollTop = this.scrollTop;
    let scrollHeight = this.scrollHeight;
    let height = this.clientHeight;

    if (scrollHeight <= height) {
        // 没有出现滚动条
        return;
    }

    let delta = (event.wheelDelta) ? event.wheelDelta : -(event.detail || 0);

    if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
        // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
        this.scrollTop = delta > 0? 0: scrollHeight;
        // 向上滚 || 向下滚
        event.preventDefault();
    }
}

let eventType = 'mousewheel';
// 火狐是DOMMouseScroll事件
if (document.mozHidden !== undefined) {
    eventType = 'DOMMouseScroll';
}

export default {
    bind(el) {
        el.addEventListener(eventType, handler);
    },
    unbind(el) {
        el.removeEventListener(eventType, handler)
    }
};