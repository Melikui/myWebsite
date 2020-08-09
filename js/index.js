
var oLiArray = document.getElementsByClassName('ele');
var Timer = null;
var oLiBg = oLiArray[oLiArray.length - 1];
for (var i = 0; i < oLiArray.length - 1; i++) {
    oLiArray[i].onmouseenter = function () {
        startMove(oLiBg, this.offsetLeft);
    }
}

function startMove(dom, target) {
    clearInterval(Timer);
    var a = 3;
    var iSpeed = 0;
    var u = 0.8;
    Timer = setInterval(function () {
        a = (target - dom.offsetLeft) / 5;
        iSpeed += a;
        iSpeed *= 0.8;
        if (Math.abs(iSpeed) < 1 && (target - dom.offsetLeft) < 1) {
            clearInterval(Timer);
            dom.style.left = target + 'px';
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}

// 首页时间展示区域函数----------------------------------------------------
// var presentTimeDiv = document.getElementsByClassName('presentTime')[0];
function fnTime(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var date = now.getDate();
    var day = now.getDay();
    var week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var nowTime = year+"<span>年</span>"+addZero(month)+"<span>月</span>"+addZero(date)+"<span>日</span>"+"&nbsp;&nbsp;"+week[day]+"&nbsp;&nbsp;"+addZero(hour)+"<span>时</span>"+addZero(minute)+"<span>分</span>"+addZero(second)+"<span>秒</span>";
    document.getElementsByClassName('presentTime')[0].innerHTML = nowTime;
}
function addZero(obj){
        if(obj<10) return "0" +""+ obj;
        else return obj;
}
setInterval(fnTime, 1000);