/*  Entendendo typescript na pratica

O que é typescript: é um superset conjunto de funcionalidades em cima de uma linguagem que seria o javascript
*/
type User = {
    name: string;
    email: string;
    address: {
        city: string;
        state?: string; // ? significa  que o state não é obrigatorio 
    }

}

function showWelcomeMessage(user: User) { // user: User siginifica que essa function que recebe user como parametro vai receber os types de User definidos acima
    return `welcome ${user.name}, you e-mail is ${user.email}. Your city is ${user.address.city}`;
}

showWelcomeMessage({
    name: 'Arthur bernardo',
    email: "dksoapdkpao@gmail.com",
    address: {
        city: "bh"
    }
})
// problemas do jascript

// adicionar Cidade - UF 
// se vc for fazer uma alteração vc n sabe se é user.city, user.cidade ou user.address.city essas são as desvantagens da tipagem dinamica.

// Vantagens de utilizar typescript

// definindo os types vc sabe exatamente oq essa funciton recebe, essas são as vantagens de se utilizar typescript, facilita não so na hora de fazer o código evitando erros
// mas tambem na hora de fazer a manutenção desse código, ou ate msm de adicionar algo novo