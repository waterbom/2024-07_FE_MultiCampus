// 학과 선택 시, alert으로 과 알려주기
let selectMajor = document.querySelector('#major');

selectMajor.onchange = () => {
    let major = selectMajor.options[selectMajor.selectedIndex];
    console.log(major.innerText, major.value);
    document.querySelector('#majorName').value = major.value;
    if (major.value) {
        document.querySelector('#majorName').readOnly = true;
    } else {
        document.querySelector('#majorName').readOnly = false;
    }
}

let btn = document.querySelector('#send');
btn.onclick = () => {
    let subjectRadio = document.querySelector("input[name='subject']:checked");
    console.log(subjectRadio);

    let mailingCheck = document.querySelectorAll("input[name='mailing']:checked");
    console.log(mailingCheck);

    let result = "";
    result += subjectRadio.value + ", ";
    for (let i in mailingCheck) {
        result += mailingCheck[i].value + ", ";
    }
    // for (let e of mailingCheck) {
    //     result += e.value + ", ";
    // }
    // mailingCheck.forEach(e => {
    //     result += e.value + ", ";
    // })
    alert(result);
}

