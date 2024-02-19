// 마우스 오버하면 이미지가 바뀌도록
let img = document.querySelector('img');
let index = 2;
img.addEventListener("mouseover", () => {
    img.src = `images/pic-${index % 6 + 1}.jpg`;
    index++;
});

/* 
click	사용자가 동일한 요소 위에서 마우스 버튼을 눌렀다 땔 때
dblclick	두 번 눌렀다 땔 때
mousedown	마우스를 누르고 있을 때
mouseup	눌렀던 마우스 버튼을 땔 때
mousemove	마우스를 움직였을 때
mouseover	요소 위로 마우스를 움직였을 때
mouseout	요소 바깥으로 마우스를 움직였을 때
*/