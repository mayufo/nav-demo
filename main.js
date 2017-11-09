var keys = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]

var nav = document.getElementById('nav')
var hash = {
    'q': 'qq.com'
}

for (var i = 0, len = keys.length; i < len; i++) {
    var div = document.createElement('div')
    nav.appendChild(div)
    for(var j = 0, rowLen = keys[i].length; j < rowLen; j++) {
        var kbd = document.createElement('kbd')
        var editBtn = document.createElement('a')
        var delBtn = document.createElement('a')

        kbd.textContent = keys[i][j]
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
            hash[e.target.innerText] = url
        }
        delBtn.onclick = function (e) {
            hash[e.target.innerText] = ''
        }
        kbd.onclick = function (e) {
            console.log(e.target.attributes[0].value)
            window.open ('http://' + hash[e.target.attributes[0].value], '_black')
        }
    }
}




document.onkeypress = function (e) {
    if (hash[e.key]) {
        window.open ('http://' + hash[e.key], '_black')
    }
}
