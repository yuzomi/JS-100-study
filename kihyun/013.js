function getNthPlanet(n) {
    const planet = ["수", "금", "지", "화", "목", "토", "천", "해"];

    if (!(n >= 1 && n <= 8)) {
        console.log(`${n}번째 행성은 없습니다! 1이상 8이하의 숫자를 입력하세요.`);
        return;
    }

    console.log(planet[n - 1]);
}

getNthPlanet(-7);
getNthPlanet(1);
