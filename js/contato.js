document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('contactForm');  // Id são colocados em const
    const status = document.getElementById('statusMessagem');
    const botao = form.querySelector('.botao_commit');

    form.addEventListener('submit', async function(e){
        e.preventDefault();
        status.textContent=''; status.className='';
        if(!form.checkValidity()){
            status.textContent='Por favor, preencha os campos obrigatórios.'; status.className='erro';
            return;
        }
        botao.disabled = true; botao.textContent='Enviando...';
        const data = {
            nome: document.getElementById('nomeInput').value.trim(),  // Valores inseridos são coletados
            email: document.getElementById('email').value.trim(),
            assunto: document.getElementById('assunto').value.trim(),
            mensagem: document.getElementById('mensagem').value.trim()
        };
        try{   // Acusa se houve um erro na inserção de dados errados
            await new Promise(r=>setTimeout(r,1000));
            form.reset();
            status.textContent='Mensagem enviada com sucesso!'; status.className='successo';
        }catch(err){
            status.textContent='Ocorreu um erro ao enviar. Tente novamente.'; status.className='erro';
        }finally{
            botao.disabled = false; botao.textContent='Send message';
        }
    });
});