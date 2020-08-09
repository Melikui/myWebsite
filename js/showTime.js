// 首页时间展示区域函数----------------------------------------------------
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
function addZero(t){
        if(t<10) return "0" +""+ t;
        else return t;
}
setInterval(fnTime, 1000);




// 首页页脚时间区域函数----------------------------------------------------
var divTime = document.getElementsByClassName('webRunTime')[0];
function webRunTime() {
    window.setTimeout("webRunTime()", 1000);
    //开始时间
    beginDay = new Date("3/10/2020 00:00:00");
    //获取当前时间
    var today = new Date();
    var timeold = (today.getTime() - beginDay.getTime()); //总豪秒数
    var secondsold = Math.floor(timeold / 1000);          //总秒数
    var e_daysold = timeold / (24 * 60 * 60 * 1000);
    var daysold = Math.floor(e_daysold);                 //相差天数
    var e_hrsold = (e_daysold - daysold) * 24;
    var hrsold = Math.floor(e_hrsold);                   //相差小时数
    var e_minsold = (e_hrsold - hrsold) * 60;
    var minsold = Math.floor(e_minsold)                   //相差分钟数
    var seconds = Math.floor((e_minsold - minsold) * 60);  //相差秒数
    //将所获取的时间拼接到一起，再把值显示到页面
    divTime.innerHTML = "本站已安全运行 " + addZero(daysold) + " 天 " + addZero(hrsold) + " 小时 " + addZero(minsold) + " 分 " + addZero(seconds) + " 秒";
}
webRunTime();