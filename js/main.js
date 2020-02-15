window.onload = init

function init(){
    view.showComponent('portfolio')
}

$(document).ready(function () {
    var margin = 80;
    $(document).scroll(function () {
        var doc = document.documentElement;
        var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
        
        if (top + margin >= document.getElementById("img-page-top").offsetHeight) {
            let name = document.getElementById('name')
            name.style.fontSize = '25px'
            name.style.color = '#072142'

            let icon = document.getElementsByClassName('fab')
            icon[0].style.fontSize = '25px'
            icon[0].style.color = '#072142'
            icon[1].style.fontSize = '25px'
            icon[1].style.color = '#072142'
            icon[2].style.fontSize = '25px'
            icon[2].style.color = '#072142'
        } else {
            let name = document.getElementById('name')
            name.style.fontSize = '25px'
            name.style.color = '#fff'

            let icon = document.getElementsByClassName('fab')
            icon[0].style.fontSize = '25px'
            icon[0].style.color = '#fff'
            icon[1].style.fontSize = '25px'
            icon[1].style.color = '#fff'
            icon[2].style.fontSize = '25px'
            icon[2].style.color = '#fff'
        }
    });
});