const n = prompt('숫자를 입력하세요.')

for(let i = 1; i <= n; i++) {
    let tree = "";
    for(let k = 1; k < n - i; k++){
        tree += " ";        
    }
    for (let j = 1; j <= i*2-1 ; j++){
        tree += "*";
    }
    console.log(tree);
}