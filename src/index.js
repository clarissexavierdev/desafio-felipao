// 1️⃣ Desafio Classificador de nível de Herói

let nome = "Adela";
console.log("Olá, " + nome + "! Bem-vindo(a) ao Classificador de nível de Diva Heroína do Pop!");

// Sua missão é atingir o nível máximo de Diva Heroína do Pop, que é o nível Diamante! E só assim, vai conseguri salvar a música pop da extinção!
// Para isso, você precisa passar por alguns desafios e conquistar pontos de experiência. Boa sorte!
// Chegou o momento de escolher para qual gravadora você quer trabalhar. Cada gravadora tem um nível de dificuldade diferente e, consequentemente, uma quantidade de pontos de experiência (xp) diferente. Escolha sabiamente!

// Aqui você deve escolher a gravadora que deseja trabalhar, substituindo o número 0 pelo número correspondente à gravadora desejada.

// Gravadoras disponíveis:
// 1️⃣ Sony Music Entertainment (XP: 999)
// 2️⃣ Warner Music Group (XP: 1001)
// 3️⃣ EMI Records (XP: 2000)
// 4️⃣ Universal Music Group (XP: 3000)
// 5️⃣ Republic Records (XP: 5000)
// 6️⃣ Atlantic Records (XP: 6000)

let gravadora = 6; // Substitua pelo número da gravadora desejada (1 a 6)

if (gravadora === 1) {
    console.log("Você escolheu a gravadora Sony Music, que é uma gravadora de dificuldade média. Você ganhará 999 pontos de experiência (xp)!");
} else if (gravadora === 2) {
    console.log("Você escolheu a gravadora Warner Music, que é uma gravadora de dificuldade média. Você ganhará 1001 pontos de experiência (xp)!");
} else if (gravadora === 3) {
    console.log("Você escolheu a gravadora EMI Records, que é uma gravadora de dificuldade alta. Você ganhará 1500 pontos de experiência (xp)!");
} else if (gravadora === 4) {
    console.log("Você escolheu a gravadora Universal Music, que é uma gravadora que investiu na Tour Internacional. Você ganhará 2000 pontos de experiência (xp)!");
} else if (gravadora === 5) {
    console.log("Você escolheu a gravadora Republic Records, que é a gravadora mais difícil de trabalhar. Você ganhará 3500 pontos de experiência (xp)!");
} else if (gravadora === 6) {
    console.log("Você escolheu a gravadora Atlantic Records, que é a gravadora mais difícil de trabalhar. Você ganhará 4000 pontos de experiência (xp)!");
} else if (gravadora === 7) {
    console.log("Você escolheu a gravadora Columbia Records, que é a gravadora mais difícil de trabalhar. Você ganhará 4500 pontos de experiência (xp)!");
}
else {
    console.log("Opção inválida. Por favor, escolha uma gravadora válida.");
}


let xp = 0;  // Inicializa a variável xp com 0
if (gravadora === 1) {
    xp = 999;
} else if (gravadora === 2) {
    xp = 1001;
} else if (gravadora === 3) {
    xp = 1500;
} else if (gravadora === 4) {
    xp = 2000;
} else if (gravadora === 5) {
    xp = 3500;
} else if (gravadora === 6) {
    xp = 4000;
} else if (gravadora === 7) {
    xp = 4500;
}

let premioConcedido = false;

while (!premioConcedido && xp >= 999 && xp < 1000) {
xp += 1000;
console.log("Parabéns! Você ganhou o Billboard Music Awards (+1000xp)! Atingiu " + xp + " pontos de experiência! Agora você é uma Diva Heroína do Pop nível Bronze!");
premioConcedido = true;
}
while (!premioConcedido && xp >= 1001 && xp < 1499) {
xp += 3501;
console.log("Parabéns! Você ganhou o MTV Video Music Awards (+4000xp)! Atingiu " + xp + " pontos de experiência! Agora você é uma Diva Heroína do Pop nível Prata!");
premioConcedido = true;
}
while (!premioConcedido && xp >= 1500 && xp < 1999) {
xp += 5001;
console.log("Parabéns!Você iniciou uma turnê nacional (+5001xp)! Atingiu " + xp + " pontos de experiência! Agora você é uma Diva Heroína do Pop nível Ouro!");
premioConcedido = true;
}
while (!premioConcedido && xp >= 2000 && xp < 3499) {
xp += 5001;
console.log("Parabéns! Você iniciou uma turnê internacional (+4000xp)! Atingiu " + xp + " pontos de experiência! Agora você é uma Diva Heroína do Pop nível Platina!");
premioConcedido = true;
}
while (!premioConcedido && xp >= 3500 && xp < 3999) {
xp += 5001;
console.log("Parabéns! Você ganhou o Grammy Latin Awards (+5000xp)! Atingiu " + xp + " pontos de experiência! Agora você é uma Diva Heroína do Pop nível Ascendente!");
premioConcedido = true;
}

while (!premioConcedido && xp >= 4000 && xp < 4399) {
xp += 6001;
console.log("Parabéns! Você ganhou o Grammy Awards Música do Ano (+4000xp)! Atingiu " + xp + " pontos de experiência! Agora você é uma Diva Heroína do Pop nível Imortal!");
premioConcedido = true;
}
while (!premioConcedido && xp >= 4500 && xp <= 10001) {
xp += 6001;
console.log("Parabéns! Você ganhou o Grammy Awards Albúm do Ano (+4000xp)! Atingiu " + xp + " pontos de experiência! Agora você é uma Diva Heroína do Pop nível Radiante!");
premioConcedido = true;
}
