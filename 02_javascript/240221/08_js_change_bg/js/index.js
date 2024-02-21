window.addEventListener('load', () => {
    // const bgCount = 5;
    // let randomNum = Math.floor(Math.random() * bgCount) + 1
    // document.body.style.backgroundImage = `url(./images/bg-${randomNum}.jpg)`

    
    const imgArr = ['bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg', 'bg-4.jpg', 'bg-5.jpg'];
    let randomNum = Math.floor(Math.random() * imgArr.length);
    document.body.style.backgroundImage = `url(./images/${imgArr[randomNum]})`
})