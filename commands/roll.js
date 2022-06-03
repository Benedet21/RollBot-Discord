module.exports = {
    name: 'roll',
    description: 'rolagem de dados',
    execute (message, args){
        let x1 = message.content.split(' ').slice(1)
        let x2 = x1.toString().split('d').join(',').split('+').split(',').split(',')
        let j
        for (j =0; j < x2.length; j++){
            if(x2[j] === ''){
                x2.split(j,1);
                j--;
            }
        }
        let diceTotal = 0;
        let diceRoll;
        let i;
        let Total;
        if (args == '') return message.channel.send('')
        if (!x2[1]){
            diceRoll = Math.floor(Math.random() * x2[0]) + 1;
            message.channel.send('result :' + diceRoll)
            return;
        }
        if (isNaN(x2[0])) return message.channel.send(x2[0] + 'não é um número')
        if (isNaN(x2[0])) return message.channel.send(x2[1] + 'não é um número')
        if (x2[2]){
            if (x2[0] > 20) return message.channel.send('')
            if (x2[1] > 100) return message.channel.send('')
            for (i = 1; i <= x2[0]; i++){
                diceRoll = Math.floor(Math.random() * x2[1]) + 1;
                message.channel.send('roll: ' + i + ': ' + diceRoll);
                diceTotal = dicetotal + diceRoll
            }
            message.channel.send('Dice total: ' + diceTotal)
        }
        else if (isNaN(x2[2])) return message.channel.send(x2[2] + 'não é um número')   
        else{
            for (i = 1; i <=x2[0]; i++){
                diceRoll = Math.floor(Math.random() * x2[1]) + 1;
                message.channel.send('roll: ' + i + ': ' + diceRoll);
                diceTotal = dicetotal + diceRoll
            }
            Total = diceTotal + parseInt(x2[2])
            message.channel.send('Dice Total: ' + diceTotal)
            message.hannel.send('Grand Total: ' + Total)
        }
    }
};