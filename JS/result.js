
let food = {
    hansik: { 
        menu: ['냉면', '설렁탕', '갈비탕', '김치찌개', '닭볶음탕', '닭갈비', '불고기백반', '낙지볶음', '간장게장', '김밥', '떡볶이', '된장찌개', '칼국수']
    },
    jungsik: {
        menu: ['탕수육', '깐풍기', '칠리새우', '짬뽕', '짜장면', '볶음밥', '유린기', '동파육', '잡채덮밥', '마파두부', '딤섬']  
    },
    illsik: {
        menu: ['초밥', '소바', '오코노미야끼', '돈부리', '돈까스', '우동', '라멘', '장어덮밥', '연어덮밥']
    },    
    yangsik: {  
        menu: ['스테이크', '피자', '햄버거', '파스타', '치킨', '리조또', '샌드위치', '토스트', '샐러드']
    }
}

const Result = document.getElementById('result');
const target = document.getElementsByClassName('result-box');

function randomItem(a) {
    const random = Math.floor(Math.random() * a.length);
    return a[random];
}

console.log(document.getElementsByClassName('result-box').style.visibility);

document.getElementById("btn1").addEventListener('click', reactionBtn1);
document.getElementById("btn2").addEventListener('click', reactionBtn2);
document.getElementById("btn3").addEventListener('click', reactionBtn3);
document.getElementById("btn4").addEventListener('click', reactionBtn4);


function reactionBtn1() {
    let hansic = randomItem(food.hansik.menu);
    Result.innerText = `✨ ${hansic} ✨`
}


function reactionBtn2() {
    let jungsic = randomItem(food.jungsik.menu);
    Result.innerText = `✨ ${jungsic} ✨`
}


function reactionBtn3() {
    let illsic = randomItem(food.illsik.menu);
    Result.innerText = `✨ ${illsic} ✨`
}


function reactionBtn4() {
    let yangsic = randomItem(food.yangsik.menu);
    Result.innerText = `✨ ${yangsic} ✨`
}



