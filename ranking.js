let resultado = Ranking(324, 237)

    console.log(`O Herói tem um saldo de "${resultado}" e está no rank "${rank}!"`)

function Ranking(victories, defeats){

    let saldo = victories - defeats;

        switch(true){

            case victories < 10:
                rank = "Ferro"
            break;

            case victories <= 20:
                rank = "Bronze"
            break;
        
            case victories <= 50:
                rank = "Prata"
            break;
        
            case victories <= 80:
                rank = "Ouro"
            break;
        
            case victories <= 90:
                rank = "Diamante"
            break;
        
            case victories <= 100:
                rank = "Lendário"
            break;
        
            default:
                rank = "Imortal"
            break;
    }

    return saldo
}