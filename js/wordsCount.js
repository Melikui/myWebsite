var txt = document.body.innerHTML;
var wordCount = document.getElementById('wordCount');
wordCount.innerHTML = txt.length;


var iconFontSize = document.getElementById('iconFontSize');
setInterval(function(){
    (iconFontSize.className == 'chageSize30') ? (iconFontSize.className = 'chageSize40'):(iconFontSize.className = 'chageSize30');
}, 300);



