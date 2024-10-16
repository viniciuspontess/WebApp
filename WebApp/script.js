document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Exibir os dados no resultado
    document.getElementById('resultado').innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Senha:</strong> ${senha}</p>
    `;
    
    // Limpar o formulário
    document.getElementById('cadastroForm').reset();
});
