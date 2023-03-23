// let myData = 'sdjhjf,asdssd,afd,dsf,fdsfs'
// let myArray = myData.split(',')
// console.log(myArray);//[0:'sdjhjf'1:'asdssd'2:'afd'3:'dsf'4:'fdsfs']
// let newArray = myArray.join(',')
// console.log(newArray);//sdjhjf,asdssd,afd,dsf,fdsfs
// //unshift  shift方法在数组首进行插入删除


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText='今天气温 34 摄氏度, :inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。'
const insertX = ['怪兽威利','大老爹','圣诞老人']
const insertY =['肯德基','迪士尼','乐园白宫']
const insertZ = ['自燃了','在人行道化成了一坨泥','变成一条鼻涕虫爬走了']

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}



randomize.addEventListener('click', result);


function result() {
  let newStory = ''
  
  newStory=storyText
  let xItem=randomValueFromArray(insertX)
  let yItem=randomValueFromArray(insertY)
  let zItem=randomValueFromArray(insertZ)
  newStory = newStory.replace(':inserta:',xItem)
  newStory = newStory.replace(':inserta:',xItem)
  newStory = newStory.replace(':insertb:',yItem)
  newStory = newStory.replace(':insertc:',zItem)

  

  if(customName.value !== '') {
    let name = customName.value;
    newStory=newStory.replace('李雷',name)
  }
  

  if(document.getElementById("american").checked) {
    let weight = Math.round(300);
    weight=weight.toString()+'千克'
    let temperature = Math.round(94);
    temperature= temperature.toString()+'华氏度'
    newStory=newStory.replace('34 摄氏度',temperature)
    newStory=newStory.replace('130 公斤',weight)

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
