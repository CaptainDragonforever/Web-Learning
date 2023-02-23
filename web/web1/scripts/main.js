let myimage = document.querySelector('img')

myimage.onclick = function() {
    let mysrc = myimage.getAttribute('src')
    if(mysrc === 'images/p1.png'){
        myimage.setAttribute('src','images/p2.png')
    } else {
        myimage.setAttribute('src','images/p1.png')
    }
}