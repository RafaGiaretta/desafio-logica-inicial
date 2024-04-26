console.log("Desafio Inicial");

let nickUsuario = "Rafa Giaretta"
let xpHeroi = 9001;



function ranking(xp){
    if (xp < 1000){
        return ("Ferro")
    }
    if (xp >= 1000 && xp <= 2000){
        return ("Bronze")
    }
    if (xp > 2000 && xp <= 5000){
        return ("Bronze")
    }
    if (xp > 5000 && xp <= 6000){
        return ("Prata")
    }
    if (xp > 6000 && xp <= 7000){
        return ("Ouro")
    }
    if (xp > 7000 && xp <= 8000){
        return ("Ascendente")
    }
    if (xp > 8000 && xp <= 9000){
        return ("Imortal")
    }
    if (xp > 9000)
        return ("Radiante")
   
}

console.log("O Heroi de nome **"+ nickUsuario + "** esta no nivel de: **" + ranking(xpHeroi) + "**.")