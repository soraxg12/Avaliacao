const formulario = document.querySelector('#formularioFornecedores');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputProduto = document.querySelector('#produto');
const fornecedores = document.querySelector('#fornecedores');
const mensagens = document.querySelector('#mensagens');
const numero = document.querySelector('#numero');
let Email=[];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    if (inputNome.value === '' || inputEmail.value === '' || inputProduto.value === '' || numero.value === '') {
        mensagens.style.display = 'block';
        mensagens.style.background = 'red';
        mensagens.innerHTML = 'Preencha todos os campos!';
    } else {
        if(Email.indexOf(inputEmail.value)===-1){
            console.log('tudo certo')
            li.innerHTML = `Nome: ${inputNome.value} <br>Numero: ${numero.value} <br>Email: ${inputEmail.value} <br>Produto: ${inputProduto.value}`;
            Email.push(inputEmail.value); 
            fornecedores.appendChild(li);
        }else if(Email.indexOf(inputEmail.value)!==-1){
            console.log('elemento encontrado')
            alert('o email ja esta cadastrado !!!')
        }

       
        li.addEventListener('click', (e) => {
            const deletar = confirm('Você realmente gostaria de deletar este fornecedor?');
        
            if (deletar) {
                e.target.remove();
            }
        })

        
        mensagens.style.display = 'none';

        inputNome.value = '';
        inputEmail.value = '';
        inputProduto.value = '';
        numero.value = '';
    }
})
