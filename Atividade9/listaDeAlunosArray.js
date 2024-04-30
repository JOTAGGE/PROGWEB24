// Lista de alunos usando Array
let alunosArray = [];

// Função para adicionar um novo aluno à lista
function adicionarAluno(id, nome, nota) {
    alunosArray.push({ id: id, nome: nome, nota: nota });
}

// Função para buscar um aluno por id na lista
function buscarAlunoPorId(id) {
    for (let aluno of alunosArray) {
        if (aluno.id === id) {
            return aluno;
        }
    }
    return null; // Retorna null se o aluno não for encontrado
}

// Função para calcular a média das notas dos alunos na lista
function calcularMediaNotas() {
    if (alunosArray.length === 0) {
        return 0; // Retorna 0 se a lista estiver vazia
    }
    let totalNotas = 0;
    for (let aluno of alunosArray) {
        totalNotas += aluno.nota;
    }
    return totalNotas / alunosArray.length;
}

// Testando as funções
adicionarAluno(1, "João", 8);
adicionarAluno(2, "Maria", 7);
adicionarAluno(3, "Pedro", 6);

console.log("Aluno com id 2:", buscarAlunoPorId(2));
console.log("Média das notas dos alunos:", calcularMediaNotas());

//Nessa implementação, utilizamos um array alunosArray para armazenar os objetos representando os alunos.
//As funções adicionarAluno, buscarAlunoPorId e calcularMediaNotas são implementadas conforme especificado,
//utilizando loops para percorrer o array de alunos e realizar as operações necessárias.