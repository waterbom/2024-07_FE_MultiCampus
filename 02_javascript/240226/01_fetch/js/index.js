// fetch의 get 요청
// fetch("URL")
// fetch("URL", { method: 'GET', headers: ~~~ })

// fetch의 post 요청
// fetch("URL", { method: 'POST', body: ~~~, headers: ~~~ })


const url = `https://dummyjson.com/products/1`;


fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const resultDiv = document.querySelector('#result');
        resultDiv.innerText = data.brand
    })
