// Dicionário de alunos usando Objeto
let alunosObjeto = {};

// Função para adicionar um novo aluno ao dicionário
function adicionarAluno(id, nome, nota) {
    alunosObjeto[id] = { nome: nome, nota: nota };
}

// Função para buscar um aluno por id no dicionário
function buscarAlunoPorId(id) {
    return alunosObjeto[id] || null; // Retorna null se o aluno não for encontrado
}

// Função para calcular a média das notas dos alunos no dicionário
function calcularMediaNotas() {
    let totalNotas = 0;
    let numAlunos = 0;
    for (let id in alunosObjeto) {
        if (alunosObjeto.hasOwnProperty(id)) {
            totalNotas += alunosObjeto[id].nota;
            numAlunos++;
        }
    }
    if (numAlunos === 0) {
        return 0; // Retorna 0 se o dicionário estiver vazio
    }
    return totalNotas / numAlunos;
}

// Testando as funções
adicionarAluno(1, "João", 8);
adicionarAluno(2, "Maria", 7);
adicionarAluno(3, "Pedro", 6);

console.log("Aluno com id 2:", buscarAlunoPorId(2));
console.log("Média das notas dos alunos:", calcularMediaNotas());

//Nesta implementação, utilizamos um objeto alunosObjeto como um dicionário,
 //onde a chave é o ID do aluno e o valor é um objeto contendo nome e nota do aluno. 
 //As funções adicionarAluno, buscarAlunoPorId e calcularMediaNotas são implementadas conforme especificado, 
 //utilizando loops para percorrer o objeto de alunos e realizar as operações necessárias.