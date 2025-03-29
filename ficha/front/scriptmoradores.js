const apiUrl = 'http://localhost:8339/moradores'

document.getElementById("morador-form").addEventListener("submit", async function (event) {
    event.preventDefault()

    const nome = document.getElementById("nome").value;
    const bloco = document.getElementById("bloco").value;
    const apartamento = document.getElementById("apartamento").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const status = document.getElementById("status").value;

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({ nome, bloco, apartamento, telefone, email, status})
    })

    if (response.ok) {
        document.getElementById('morador-form').reset()
        
    } else {
        alert('Erro ao adicionar morador!')
    }

    window.location.href = "http://front/tabmora.html";

})