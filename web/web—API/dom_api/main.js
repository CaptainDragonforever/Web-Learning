const ul = document.querySelector('ul')
const ipt = document.querySelector('#item')
const btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    let text = ipt.value
    ipt.value=''
    let li = document.createElement('li')
    let span = document.createElement('span')
    let del = document.createElement('button')
    li.appendChild(span)
    li.appendChild(del)
    span.textContent=text
    del.textContent='Delete'
    ul.appendChild(li)
    del.addEventListener('click',()=>{
        ul.removeChild(li)
        ipt.focus()
    })
    ipt.focus()
})

