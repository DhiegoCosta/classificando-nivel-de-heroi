console.log("Olá, héroi! Bem vindo a guilda! Preciso que me informe seu nome e sua quantidade de XP(Por exemplo: 1.000XP = 1000)...")
console.log(" ")
let nomeDoHeroi = "Augustu"
let quantidadeDeXP = 100
let nivel
if(quantidadeDeXP<=1000){
    nivel = "Ferro"
}
else if(1001<=quantidadeDeXP<=2000){
    nivel = "Bronze"
}
else if(2001<=quantidadeDeXP<=5000){
    nivel = "Prata"
}
else if(5001<=quantidadeDeXP<=7000){
    nivel = "Ouro"
}
else if(7001<=quantidadeDeXP<=8000){
    nivel = "platina"
}
else if(8001<=quantidadeDeXP<=9000){
    nivel = "Ascendente"
}
else if(9001<=quantidadeDeXP<=1000){
    nivel = "Imortal"
}
else if(10001<=quantidadeDeXP){
    nivel = "Radiante"
}
else{
    nivel = "Indefinido..."
}
console.log("Seu nível é " + nivel)