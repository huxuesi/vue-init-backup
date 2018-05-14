/**
 * h5桌面通知
 * personal { id: id, name: name, value: value}
 * callback 回调函数
 */
export function h5webNotification(personal, callback) {
    if (window.Notification) {
        function popNotice() {
            if (Notification.permission == "granted") {
                var tit = personal.name + "说："
                var notification = new Notification( tit, {
                    body: personal.value,
                    icon: `${imgUrl}/uploads/avatar/${personal.id}.jpg`,
                    tag: personal.id,
                    renotify: true
                })
                // 点击通知弹窗打开面板 并切换到对应id
                notification.onclick = function(){
                    callback(notification)
                }
            }
        }
        if (Notification.permission == "granted") {
            popNotice()
        } else if (Notification.permission != "denied") {
            Notification.requestPermission(function (permission) {
              popNotice()
            })
        }
    } else {
        console.warn('浏览器不支持Notification')
    }
}
