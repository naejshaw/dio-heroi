// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
// 
// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída
// 
// Ao final deve se exibir uma mensagem:
// 
// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada

class Character{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

        if(this.tipo === "guerreiro"){
        	this.ataque = "espada"
        }else if(this.tipo === "mago"){
        	this.ataque = "magia"
        }else if(this.tipo === "monge"){
        	this.ataque = "artes marciais"
        }else if(this.tipo === "ninja"){
        	this.ataque = "shuriken"
        }
    }

    atacar(){
        console.log(`O ${this.nome}, da classe ${this.tipo}, atacou usando ${this.ataque}!`)
    }
}

let char = new Character('Jean', 30, 'monge')
char.atacar()
char = new Character('Jean', 30, 'guerreiro')
char.atacar()
char = new Character('Jean', 30, 'ninja')
char.atacar()
char = new Character('Jean', 30, 'mago')
char.atacar()