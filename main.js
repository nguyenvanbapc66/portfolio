let body = document.getElementById('body')
let imageTop = document.getElementById('img-page-top')
body.onclick = () => {
    let width = imageTop.clientWidth
    let height = imageTop.clientHeight
    console.log(width, height, body.scrollHeight)
}