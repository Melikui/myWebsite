// var xmlhttp;
// function Ajaxfun(url) {
//     console.log(111)
//     if (window.XMLHttpRequest) {
//         xmlhttp = new XMLHttpRequest();  //IE7+, Firefox, Chrome, Opera, Safari 代码
//     } else {
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");  //IE6, IE5 代码
//     }
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//             console.log(666)
//             document.getElementById("markdownBody").innerHTML = xmlhttp.responseText;
//         }
//     };
//     xmlhttp.open("GET", url, true);
//     xmlhttp.send();
// }




function Ajaxfun(url) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest;
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById('markdownBody').innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}