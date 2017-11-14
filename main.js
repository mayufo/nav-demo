var initObj = init()
var keys = initObj.keys
var hash = initObj.hash
var nav = document.getElementById('nav')

createKeyboard(keys, hash)

// 初始化
function init () {
    var keys = [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ]
    var hash = {
        'c': 'www.cnblogs.com/mayufo/',
        'q': 'qq.com',
        'j': 'jirengu.com/live',
        'z': 'zhihu.com',
        't': 'taobao.com',
        'b': 'baidu.com',
        'g': 'google.com',
        'w': 'www.wunderlist.com/webapp#/lists/inbox',
        'x': 'xiedaimala.com/courses/ec3a5e28-02da-47d6-9226-927db23e82a2'
    }
    var localHash = JSON.parse(localStorage.getItem('hash') || 'null')
    hash = localHash ? localHash : hash
    return {
        keys: keys,
        hash: hash
    }
}
// 创建键盘
function createKbd(i, j) {
    var kbd = document.createElement('kbd')
    kbd.textContent = keys[i][j]
    kbd.id = keys[i][j]
    kbd.setAttribute('data', keys[i][j])
    kbd.onclick = function (e) {
        if (hash[e.target.id]) {
            window.open ('http://' + hash[e.target.id], '_black')
        }
    }
    return kbd
}
// 创建编辑按钮
function createEdit(i, j) {
    var editBtn = document.createElement('a')
    editBtn.id = 'edit-' + keys[i][j]
    editBtn.innerText = 'E'
    editBtn.onclick = function (e) {
        var url = prompt('请输入' + e.target.innerText + '位键对应网址')
        if (url) {
            hash[e.target.innerText] = url
            localStorage.setItem('hash', JSON.stringify(hash))
        }
        e.stopPropagation();
    }
    return editBtn
}
// 创建删除按钮
function createDel(i, j) {
    var delBtn = document.createElement('a')
    delBtn.id = 'del-' + keys[i][j]
    delBtn.innerText = 'D'
    delBtn.onclick = function (e) {
        hash[e.target.parentNode.id] = ''
        e.target.parentNode.childNodes[3].src=''
        e.stopPropagation();
    }
    return delBtn
}

function createImg(i, j) {
    var img =  document.createElement('img')
    if (hash[keys[i][j]]) {
        img.src = 'http://' + hash[keys[i][j]] + '/favicon.ico'
    } else {
        img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    img.onerror = function(xxx){
        xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    return img
}

function createKeyboard(keys, hash) {
    for (var i = 0, len = keys.length; i < len; i++) {
        var div = document.createElement('div')
        nav.appendChild(div)
        for(var j = 0, rowLen = keys[i].length; j < rowLen; j++) {
            var kbd = createKbd(i, j)
            var editBtn = createEdit(i, j)
            var delBtn = createDel(i, j)
            var img = createImg(i, j)
            kbd.appendChild(editBtn)
            kbd.appendChild(delBtn)
            div.appendChild(kbd)
            kbd.appendChild(img)
        }
    }
}


document.onkeypress = function (e) {
    if (hash[e.key]) {
        window.open ('http://' + hash[e.key], '_black')
    }
}


