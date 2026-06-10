// Botão de ação sustentável
document.getElementById("btnSustentavel").addEventListener("click", function() {
    const msg = document.getElementById("msgSustentavel");
    msg.textContent = "Parabéns! Você está contribuindo para um futuro mais sustentável 🌱";
});

// Formulário de contato
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("msgContato").textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
    this.reset();
});
