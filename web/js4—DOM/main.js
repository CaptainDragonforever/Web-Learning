const pics=['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg',];
for (let index = 0; index < pics.length; index++) {
    let img = document.createElement('img');
    img.setAttribute('src','images/'+pics[index]);
    
    let thum = document.querySelector('.thumb-bar')
    thum.appendChild(img)
    img.addEventListener('click',()=>{
        let show = document.querySelector('.displayed-img');
        show.setAttribute('src','images/'+pics[index]);
    })
}

let btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    let overlay = document.querySelector('.overlay')
    if (btn.getAttribute('class')==='dark') {
        btn.setAttribute('class','light');
        btn.textContent='Lighten';
        overlay.setAttribute('style','background-color: rgba(0,0,0,0.5);')
    }else{ 
            btn.setAttribute('class','dark');
            btn.textContent='Darken';
            overlay.setAttribute('style','background-color: rgba(0,0,0,0);')    
    }
})
