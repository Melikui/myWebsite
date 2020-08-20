// JavaScript Document
function getE(ele) {
    return document.getElementById(ele);
}
var datalist = getE('datalist');
var result = getE('result');
var db = openDatabase('myData', '1.0', 'test database', 1024 * 1024);


if (!datalist) {
    datalist = document.createElement('dl');
    datalist.className = 'datalist';
    datalist.id = 'datalist';
    document.getElementById("mr-cont").appendChild(datalist);
}


db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS MsgData(name TEXT,msg TEXT,time INTEGER)', []);

})
// 删除留言信息-------------------------------
// function clear() {//删除留言信息
//     db.transaction(function (tx) {
//         tx.executeSql('DROP TABLE MsgData', []);
//     })
//     showAllData();
// }

var lyNane = document.getElementById('ly-name');
var lyMsg = document.getElementById('ly-msg');
getE('save').onclick = function () {//调用保存信息
    if (lyNane.value == '') {
        lyNane.value = "请输入你的个性昵称哦！";
        return false;
    }else if (lyMsg.value == '') {
        lyMsg.value =  "对面的朋友，既然来了，就留个言吧！";
        return false;
    }else if ((lyNane.value == "请输入你的个性昵称哦！")&&(lyMsg.value ==  "对面的朋友，既然来了，就留个言吧！")) {
        lyNane.value = "请输入你的个性昵称哦！";
        lyMsg.value =  "对面的朋友，既然来了，就留个言吧！";
        lyNane.value = null;
        lyMsg.value = null;
        return false;
    }else{
        saveData();
        lyNane.value = null;
        lyMsg.value = null;
    }
    return false;
}

function removeAllData() {//从数据库中删除
    for (var i = datalist.children.length - 1; i >= 0; i--) {
        datalist.removeChild(datalist.children[i]);
    }
}

function showData(row) {//在HTML页面中展示留言信息
    var dt = document.createElement('dt');
    dt.innerHTML = row.name;
    var dd = document.createElement('dd');
    dd.innerHTML = row.msg;
    var tt = document.createElement('tt');
    var t = new Date();
    t.setTime(row.time);
    var divlist = document.createElement('div');
    divlist.className = 'divlist';
    tt.innerHTML = t.toLocaleDateString() + " " + t.toLocaleTimeString();
    divlist.appendChild(dt);
    divlist.appendChild(dd);
    divlist.appendChild(tt);
    datalist.insertBefore(divlist, datalist.firstChild);
}

function showAllData() {//从数据库中提取留言信息
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS MsgData(name TEXT,msg TEXT,time INTEGER)', []);
        tx.executeSql('SELECT * FROM MsgData', [], function (tx, result) {
            removeAllData();
            for (var i = 0; i < result.rows.length; i++) {
                showData(result.rows.item(i));
            }
        });
    });
}

function addData(name, msg, time) {//向数据库中添加数据
    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO MsgData VALUES(?,?,?)', [name, msg, time], function (tx, result) {
            // alert("留言成功");
        },
            function (tx, error) {//添加失败提示
                alert(error.source + ':' + error.message);
            });
    });
}

function saveData() {//获取HTML中的数据
    var name = getE('ly-name').value;
    var msg = getE('ly-msg').value;
    var time = new Date().getTime();
    addData(name, msg, time);
    showAllData();
}
