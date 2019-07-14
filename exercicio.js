// Criar um programa que avalia uma proposta de empréstimo.
//    O programa recebe: idade do cliente, quanto dinheiro ele quer emprestar, quanto ele ganha por mês.

//    REGRAS para aceita o empréstimo:
//    - Entre 22 e 55 anos;
//    - Valor a partir de 1000 reais;
//    - Valor não pode ultrapassar 15x o que ele recebe

//    RESPONDER: ACEITO OU NÃO ACEITO

//    EXTRA:
//    - Perguntar também a quantidade de parcelas (3 a 20 vezes) e calcular juros de 8% ao mês (COMPOSTO)
//    RESPONDER VALOR TOTAL DO EMPRESTIMO E VALOR Da PARCELA.

function emprestimo(idade, valorEmprestimo, salario, qtdParcelas){
    if(idade < 22 || idade > 55|| valorEmprestimo < 1000 || valorEmprestimo > salario * 15 || qtdParcelas < 3 || qtdParcelas > 20){
        console.log('Não aceito');
    }
    else{
        console.log('Aceito');
        let montante;
        montante = valorEmprestimo * (1 + 0.08) ** qtdParcelas;
        montante = montante.toFixed(2);
        let parcela = montante/qtdParcelas;
        parcela = parcela.toFixed(2);
        console.log(`O valor total do empréstimo é de ${montante} e o valor da parcela é de ${parcela}`);
    }
}