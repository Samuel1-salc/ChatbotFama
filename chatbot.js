// leitor de qr code

function start(){

    console.log('iniciado');
    const qrcode = require('qrcode');
    const fs = require('fs');
    const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
    const client = new Client();
    if (fs.existsSync('qr.png')) {
        fs.unlinkSync('qr.png');
        console.log('QR Code antigo apagado');
    }
    
    // serviço de leitura do qr code
    client.on('qr', qr => {
        qrcode.toFile('qr.png', qr, {
            width: 300,
            margin: 4
        }, (err) => {
            if (err) throw err;
            console.log('QR Code salvo como qr.png');
           
        });
       
    });
    client.on('ready', () => {
        console.log('Tudo certo! WhatsApp conectado.');
    });
    // E inicializa tudo 
    client.initialize();
    
    const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra
    
    // Funil
    
    client.on('message', async msg => {
    
        if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {
    
            const chat = await msg.getChat();
    
            await delay(2000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
            const contact = await msg.getContact(); //Pegando o contato
            const name = contact.pushname; //Pegando o nome do contato
            await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ' Sou o assistente virtual Fama Empreendimetos. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Compras\n2 - Comercial\n3 - Financeiro\n4 - Rh'); //Primeira mensagem de texto
            
            //await delay(3000); //delay de 3 segundos
            //await chat.sendStateTyping(); // Simulando Digitação
            //await delay(5000); //Delay de 5 segundos
        
            
        }
    
    
    
    
        if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
            const chat = await msg.getChat();
    
    
            await delay(2000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, 'Você  será redirecionado para o setor de *compras* após clicar no link abaixo\n\nO responsavel pelo setor, *Alexandre* irá atende-lo');
    
            await delay(2000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, 'Link do setor Compras:');
    
            await delay(2000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, 'https://wa.me/message/3YMYLO7P2IZZI1');
    
            await delay(2000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, '5 - voltar para o menu');
    
    
        }
    
        if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
            const chat = await msg.getChat();
    
    
            await delay(2000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, 'Você será redirecionado para o setor do *comercial* após clicar no link abaixo\n\n\n\nOs responsáveis pelo setor,*Alessandra* ou *Kelly* iram atende-lo:');
    
            await delay(2000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, 'Link: https://wa.me/message/WVH42LVUS3E6N1');
    
            await delay(2000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, '5 - Voltar para o menu');
        }
    
        if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
            const chat = await msg.getChat();
    
    
            await delay(2000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, 'Você  será redirecionado para o setor do *Financeiro* após clicar no link abaixo\n\nO responsavel pelo setor, *Tina* irá atende-lo:');
            
            await delay(2000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, 'Link:https://wa.me/message/LZPMECAGSWEME1');
    
            await delay(2000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, '5 - voltar para o menu');
    
        }
    
        if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
            const chat = await msg.getChat();
    
            await delay(2000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, 'Você  será redirecionado para o setor de *Rh* após clicar no link abaixo\n\nO responsavel pelo setor, *Simone* irá atende-lo');
    
    
            await delay(2000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, 'Link: https://wa.me/message/X2I3KJCENP6EI1');
    
            
            await delay(2000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, '5 voltar para o menu');
    
            
    
    
    
        }
    
        if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
            const chat = await msg.getChat();
    
            await delay(2000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(1000);
            await client.sendMessage(msg.from, 'Sou o assistente virtual Fama Empreendimetos. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Compras\n2 - Comercial\n3 - Financeiro\n4 - Rh');
    
        }
    
    
    
    
    
    
    
    
    });
    
    }
    module.exports = {start};
    