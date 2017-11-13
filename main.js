var keys = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]

var nav = document.getElementById('nav')
var hash = {
    'c': 'www.cnblogs.com/mayufo/',
    'q': 'qq.com',
    'j': 'jirengu.com/live',
    'z': 'zhihu.com',
    'm': 'mayufo.github.io',
    't': 'taobao.com',
    'b': 'baidu.com',
    'g': 'google.com',
    'w': 'www.wunderlist.com/webapp#/lists/inbox',
    'x': 'xiedaimala.com/courses/ec3a5e28-02da-47d6-9226-927db23e82a2'
}

var localHash = JSON.parse(localStorage.getItem('hash') || 'null')

hash = localHash ? localHash : hash
for (var i = 0, len = keys.length; i < len; i++) {
    var div = document.createElement('div')
    nav.appendChild(div)
    for(var j = 0, rowLen = keys[i].length; j < rowLen; j++) {
        var kbd = document.createElement('kbd')
        var editBtn = document.createElement('a')
        var delBtn = document.createElement('a')

        kbd.textContent = keys[i][j]
        kbd.id = keys[i][j]
        kbd.setAttribute('data', keys[i][j])

        editBtn.id = 'edit-' + keys[i][j]
        delBtn.id = 'del-' + keys[i][j]

        editBtn.innerText = 'E'
        delBtn.innerText = 'D'

        kbd.appendChild(editBtn)
        kbd.appendChild(delBtn)
        div.appendChild(kbd)

        if (hash[keys[i][j]]) {
            var img = document.createElement('img')
            img.src = 'http://' + hash[keys[i][j]] + '/favicon.ico'
            kbd.appendChild(img)
        }

        editBtn.onclick = function (e) {
            var url = prompt('请输入' + e.target.innerText + '位键对应网址')
            if (url) {
                hash[e.target.innerText] = url
                localStorage.setItem('hash', JSON.stringify(hash))
            }
            e.stopPropagation();
        }
        delBtn.onclick = function (e) {
            hash[e.target.parentNode.innerText] = ''
            e.stopPropagation();
        }
        kbd.onclick = function (e) {
            console.log(hash[e.target.id], e.target.id, hash.w)
            if (hash[e.target.id]) {
                window.open ('http://' + hash[e.target.id], '_black')
            }
        }
    }
}




document.onkeypress = function (e) {
    // var active = document.getElementById(e.key)
    if (hash[e.key]) {
        window.open ('http://' + hash[e.key], '_black')
    }
}


