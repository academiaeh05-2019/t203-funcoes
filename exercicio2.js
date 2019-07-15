let filmes = [
    {titulo : 'Harry Potter', classificacao : 12},
    {titulo : 'As branquelas', classificacao: 16},
    {titulo: 'Rei Leão', classificacao: 10},
    {titulo : 'Interestelar', classificacao: 10},
    {titulo : 'Ninja Assassino', classificacao: 18},
    {titulo: 'John Wick', classificacao: 16},
    {titulo: 'Velozes e Furiosos', classificacao: 14}
]

// o usuario vai digitar a idade dele, a funcao tem que dizer quais filmes ele pode ver
// dica vcs vão ter que usar laco (for, while)
//pode usar o alert ou o console.log

// Exemplo de resolução com for... in
// for(let indice in filmes){
//   if(idade >= filmes[indice].classificacao){
//     console.log(filmes[indice].titulo);
//   }
// }

// Resolução com for... of
for(let filme of filmes){
  if(idade >= filme.classificacao){
    console.log(filme.titulo);
  }
}