// Classe Hero define um herói
class Hero {
    constructor(nome, idade, tipo){
        this.nome = nome      // nome do herói
        this.idade = idade    // idade do herói
        this.tipo = tipo      // tipo do herói (mago, guerreiro, etc.)
    }

    // Método atacar mostra o ataque do herói
    atacar(){
        let ataque;

        if(this.tipo.toLowerCase() == "mago"){
            ataque = "magia"
        } else if(this.tipo.toLowerCase() == "guerreiro"){
            ataque = "espada"
        } else if(this.tipo.toLowerCase() == "monge"){
            ataque = "artes marciais"
        } else if(this.tipo.toLowerCase() == "ninja"){
            ataque = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

// Criando o herói Gandalf do tipo monge
let heroStart = new Hero("Gandalf", 120, "Monge") // (Nome, Idade, Tipo)

// Faz o herói atacar
heroStart.atacar()
