async function listarAlunos() {

    try {
        const response = await fetch('escola.json');
    
        if(!response.ok) {
            throw new Error('Erro ao carregar JSON' + response.status);
        }

        const dados = await response.json();
        const listaAlunos = document.getElementById('listaAlunos');
        listaAlunos = '';

        dados,listaAlunos.forEach(aluno => {

            const professor = dados.professores.find(p => p.id === aluno.professorId);

            const li = document.createElement('li');
            li.textContent = `ID ${aluno.id}, Nome`
        })
    }

    catch(error) {

    }

}
