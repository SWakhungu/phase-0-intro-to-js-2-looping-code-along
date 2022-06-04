const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
    let i = 0 
    let messages = []
    while(i < names.length) {   
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    messages.push(message)
    i++
 }
    return messages
}

function countDown(number) {
    let i = number
    while(i>=0){
        console.log(i)
        i--
    }
}
