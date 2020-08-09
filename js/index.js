
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
