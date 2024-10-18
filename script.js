function api(){

    const user = document.getElementById('user').value
    const resultado = document.querySelector('.resultado')

    resultado.innerHTML = ''

    fetch(`https://api.github.com/users/${user}/repos`)
        .then(async res => {

            let data = await res.json()

            data.map(item => {

                resultado.innerHTML = `<br> <strong>${ item.name }</strong>`

            })
        })
        .catch(e => {
            if(nome == 0){
                resultado.innerHTML = '<br> Digite algum nome de usúsario!'
            } else {
                resultado.innerHTML = `<br> O usúario <strong>${user}</strong>, não foi encontrado`
            }
            
        })
}