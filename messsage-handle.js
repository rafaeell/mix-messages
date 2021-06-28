const messageHandle = {

    messages : [
        ['Periodo da manhã','Periodo da tarde','Periodo da noite'],
        ['previsão de', 'alerta para','possibilidade de'],
        ['chuva','Nevasca','calor intenso']
    ],
    handleMessage(){
        let message = ''; 
        this.messages.forEach(element => {
            message += element[Math.floor(Math.random() * 3)] + ' ';
        });
        return message;
    },
    printMessage : function(){
        console.log(this.handleMessage());
    }
    
};

module.exports = messageHandle;