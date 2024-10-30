function git() {
    const user = document.getElementById('user').value;
    const resultado = document.querySelector('.resultado')

    resultado.innerHTML = '' // Limpa o resultado anterior

    // Verifica se o usuário foi fornecido
    if (!user) {
        resultado.innerHTML = '<br> Digite algum nome de usuário!'
        return;
    }

    fetch(`https://api.github.com/users/${user}/repos`)
        .then(async res => {
            if (!res.ok) {
                throw new Error('Usuário não encontrado')
            }
            let data = await res.json()

            // Cria uma string para armazenar todos os repositórios
            let repositorios = ''

            data.forEach(item => {
                repositorios += `  
                    <div class="repositorio">
                        Repositório: <a href="${item.html_url}" target="_blank"><b>${item.name}</b><br></a>
                    </div>
                `
            })

            resultado.innerHTML = repositorios; // Exibe todos os repositórios de uma vez
            
        })
        .catch(e => {
            resultado.innerHTML = `<br> O usuário <strong>${user}</strong>, não foi encontrado.`
        })
}
