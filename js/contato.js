document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('contactForm');  
    const status = document.getElementById('statusMessagem');
    const botao = form.querySelector('.botao_commit');

    form.addEventListener('submit', async function(e){
        e.preventDefault();
        status.textContent = ''; 
        status.className = '';

        // Coleta os valores removendo os espaços em branco do início e fim
        const nome = document.getElementById('nomeInput').value.trim();
        const email = document.getElementById('email').value.trim();
        const assunto = document.getElementById('assunto').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        //Validação manual do JS
        if (!nome || !email || !mensagem) {
            status.textContent = 'Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem).'; 
            status.className = 'erro';
            return;
        }

        //Validação nativa do navegador (Garante o formato correto do e-mail ex: usuario@dominio.com)
        if (!form.checkValidity()){
            status.textContent = 'Por favor, insira um formato de e-mail válido.'; 
            status.className = 'erro';
            return;
        }

        //Desativa o botão para evitar cliques duplos durante o envio
        botao.disabled = true; 
        botao.textContent = 'Enviando...';

        const data = { nome, email, assunto, mensagem };

        try {   
            //Simula o tempo de envio da requisição
            await new Promise(r => setTimeout(r, 1000));
            form.reset();
            status.textContent = 'Mensagem enviada com sucesso!'; 
            status.className = 'successo';
        } catch(err) {
            status.textContent = 'Ocorreu um erro ao enviar. Tente novamente.'; 
            status.className = 'erro';
        } finally {
            botao.disabled = false; 
            botao.textContent = 'Enviar Mensagem';
        }
    });
});