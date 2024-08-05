//Coletar dados do usuário
let nome = 'Jean'
let exp = 23111
let level = ''

//Processamento e comparação
if(exp <= 1000){
    level = 'Ferro'
}else if(exp <= 2000){
    level = 'Bronze'
}else if(exp <= 5000){
    level = 'Prata'
}else if(exp <= 7000){
    level = 'Ouro'
}else if(exp <= 8000){
    level = 'Platina'
}else if(exp <= 9000){
    level = 'Ascendente'
}else if(exp <= 10000){
    level = 'Imortal'
}else{
    level = 'Radiante'
}

//Exibição
console.log('O Herói de nome ' + nome + ' está no nível de ' + level)