function drawTree(n) {
    let tree = [];
    for (let i = n; i > 0; i--) {
        tree.unshift(" ".repeat(n - i) + "*".repeat(2 * i - 1));
    }
    let answer = tree.join("\n");
    console.log(answer);
}

drawTree(10);
