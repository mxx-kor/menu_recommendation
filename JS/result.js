let hansik = ['냉면', '설렁탕', '갈비탕', '김치찌개', '닭볶음탕', '닭갈비', '불고기백반', '낙지볶음', '간장게장', '김밥', '떡볶이', '된장찌개', '칼국수']
let jungsik = ['탕수육', '깐풍기', '칠리새우', '짬뽕', '짜장면', '볶음밥', '유린기', '동파육', '잡채덮밥', '마파두부', '딤섬']
let illsik = ['초밥', '소바', '오코노미야끼', '돈부리', '돈까스', '우동', '라멘', '장어덮밥', '연어덮밥']
let yangsik = ['스테이크', '피자', '햄버거', '파스타', '치킨', '리조또', '샌드위치', '토스트', '샐러드']


function changeTitle() {
    document.querySelector('h1').innerHTML = "<h1>오늘 뭐먹지?</h1>";
    document.querySelector('h1').textContent = "오늘의 메뉴는...";
}

function changeP() {
    document.querySelector('p').innerHTML = "<p>먹고 싶은 메뉴를 클릭해주세요.</p>";
    document.querySelector('p').textContent = "이 메뉴가 좋겠네요!";
}

function randomItem(a) {
    const random = Math.floor(Math.random() * a.length);
    return a[random];
}

document.getElementById("btn1").addEventListener('click', reactionBtn1);
document.getElementById("btn2").addEventListener('click', reactionBtn2);
document.getElementById("btn3").addEventListener('click', reactionBtn3);
document.getElementById("btn4").addEventListener('click', reactionBtn4);


function deletebtns() {
    const btns = document.getElementById("btns");
    btns.remove();
}

function createDiv() {
    // 1. <div> element 만들기
    const newDiv = document.createElement('h2');
    
    // 2. <div>에 들어갈 text node 만들기
    const newText = document.createTextNode(`${randomItem()}`);
    
    // 3. <div>에 text node 붙이기
    newDiv.appendChild(newText);
    
    // 4. <body>에 1에서 만든 <div> element 붙이기
    document.body.appendChild(newDiv);
  } 

function reactionBtn1() {
    changeTitle();
    changeP()
    deletebtns();
    hansik = randomItem(hansik);
    const newH2 = document.createElement('h2');
    const newText = document.createTextNode(`"${hansik}"`);
    newH2.appendChild(newText);
    document.body.appendChild(newH2);
}

function reactionBtn2() {
    changeTitle();
    changeP()
    deletebtns();
    jungsik = randomItem(jungsik);
    const newH2 = document.createElement('h2');
    const newText = document.createTextNode(`"${jungsik}"`);
    newH2.appendChild(newText);
    document.body.appendChild(newH2);

}

function reactionBtn3() {
    changeTitle();
    changeP()
    deletebtns();
    illsik = randomItem(illsik);
    const newH2 = document.createElement('h2');
    const newText = document.createTextNode(`"${illsik}"`);
    newH2.appendChild(newText);
    document.body.appendChild(newH2);

}

function reactionBtn4() {
    changeTitle();
    changeP()
    deletebtns();
    yangsik = randomItem(yangsik);
    const newH2 = document.createElement('h2');
    const newText = document.createTextNode(`"${yangsik}"`);
    newH2.appendChild(newText);
    document.body.appendChild(newH2);

}



