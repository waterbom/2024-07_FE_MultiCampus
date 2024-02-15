let sum = 0;

for(let i = 1; i <= 10; i++) {
    if (i == 5) {
        // break; 10 (1+2+3+4)
        // continue; 50 (1+2+3+4 + 6+7+8+9)
        continue;
    }
    sum += i;
}

document.write(`<h1>${sum}</h1>`);