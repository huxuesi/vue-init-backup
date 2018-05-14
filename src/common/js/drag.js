/**
 * 拖拽移动
 * @param  {elementObjct} bar 鼠标点击控制拖拽的元素
 * @param {elementObjct}  target 移动的元素
 * @param {function}  callback 移动后的回调
 */
export function startDrag(bar, target, callback){
    var params = {
        right: 0,
        top: 0,
        currentX: 0,
        currentY: 0,
		flag: false,
		cWidth: document.body.clientWidth,
		cHeight: document.body.clientHeight,
		tWidth: target.offsetWidth,
		tHeight: target.offsetHeight
    };
    //获取相关CSS属性
    var getCss = function(o,key){
        return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key];
    };
	if(getCss(target, "right") !== "auto"){
		params.right = getCss(target, "right");
	}
	if(getCss(target, "top") !== "auto"){
		params.top = getCss(target, "top");
	}
	//o是移动对象
	bar.onmousedown = function(event){
		params.flag = true;
		if(!event){
			event = window.event;
			//防止IE文字选中
			bar.onselectstart = function(){
				return false;
			}
		}
		var e = event;
		params.currentX = e.clientX;
		params.currentY = e.clientY;

		document.onmousemove = function(event){
			//防止文字选中
			window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

			var e = event ? event: window.event;
			if( params.flag ){
				var nowX = e.clientX;
				var nowY = e.clientY;
				var disX = nowX - params.currentX;
				var disY = nowY - params.currentY;

				target.style.right = parseInt(params.right) - disX + "px";
				var targetStyleRight = parseInt(target.style.right)

				if (targetStyleRight <= 0) {
					target.style.right = 0;
				}
				if (targetStyleRight >= params.cWidth - params.tWidth) {
					target.style.right = params.cWidth - params.tWidth + 'px';
				}


				target.style.top = parseInt(params.top) + disY + "px";

				var targetStyleTop = parseInt(target.style.top)

				if (targetStyleTop <= 60) {
					target.style.top = '60px';
				}
				if (targetStyleTop >= params.cHeight - params.tHeight) {
					target.style.top = params.cHeight - params.tHeight + 'px';
				}
			}

			if (typeof callback == "function") {
				callback(parseInt(params.right) - disX, parseInt(params.top) + disY);
			}
		}

		document.onmouseup = function(){
			params.flag = false;
			if(getCss(target, "right") !== "auto"){
				params.right = getCss(target, "right");
			}
			if(getCss(target, "top") !== "auto"){
				params.top = getCss(target, "top");
			}

			document.onmousemove = null;
			document.onmouseup = null;
		};
	};
}
