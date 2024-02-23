let xhr = new XMLHttpRequest();
xhr.open('GET', "./data/students.json");
xhr.send();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
}