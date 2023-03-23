let obj=[
    {name:'姓名',class:'班级',password:'身份证号'},
    {name:'sd',class:'sdg',password:'123'},
    {name:'dd',class:'dfg',password:'345'},
    {name:'ss',class:'nfh',password:'567'},
    {name:'gg',class:'hjm',password:'567657'},
    {name:'姓fg',class:'sfd',password:'56767'},
]
let type1=document.querySelector('#p1')
type1.textContent=typeof(JSON.stringify(obj).replace(/name/g,'姓名'))
let type2=document.querySelector('#p2')
type2.textContent=typeof(JSON.parse( JSON.stringify(obj).replace(/name/g,'姓名')))

let type11=document.querySelector('#p11')
let type22=document.querySelector('#p22')
type11.textContent=JSON.stringify(obj).replace(/name/g,'姓名')
type22.textContent=JSON.parse( JSON.stringify(obj).replace(/name/g,'姓名'))
