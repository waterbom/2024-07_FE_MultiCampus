document.addEventListener('DOMContentLoaded', () => {
    const resultSpan = document.querySelector('#result');
    const startDay = new Date("2024-02-21"); // 시작일
    const endDay = new Date(); // 종료일

    // 시작일부터 종료일까지의 기간을 계산 (밀리초)
    let subTime = endDay.getTime() - startDay.getTime();
    let subDay = Math.ceil(subTime / (1000 * 60 * 60 * 24));
    resultSpan.innerText = subDay;
})