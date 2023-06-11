const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.querySelector('#nome');
  const id = document.querySelector('#id');
  const tipoCliente = document.querySelector('#tipo_cliente');
  const endereco = document.querySelector('#endereco');
  const cep = document.querySelector('#cep');
  const dataNascimento = document.querySelector('#data_nascimento');
  const vendedor = document.querySelector('#vendedor');
  const limiteCredito = document.querySelector('#limite_credito');
 
  try {
    if (!nome.value || !id.value || !tipoCliente.value || !endereco.value || !cep.value || !dataNascimento.value || !vendedor.value || !limiteCredito.value) {
      throw new Error('Por favor, preencha todos os campos.');
    }

    // Armazena as informações em cookies :)
    document.cookie = `nome=${nome.value}`;
    document.cookie = `id=${id.value}`;

    alert('Cadastro realizado com sucesso!');
    form.reset();
  } catch (error) {
    alert(error.message);
  }

});
