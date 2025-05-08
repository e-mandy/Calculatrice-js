//Apparition des chiffres

let screen = document.querySelector('.result input')

//Désactivation de l'input
screen.disabled = true


//Evènement sur le clique d'un bouton

let allButtons = document.querySelectorAll("button")
let value, last, prev, operator
let first = false

allButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        value = button.value

        if(first == true){
            screen.value = ""
            first = false
        }

        

        if(!isNaN(value)){
            screen.value += value
            last = parseFloat(screen.value)
            
        }else{

            //En cas de réinitialisation, on supprime toutes le données
            if(value == "C"){
                screen.value = ""
                operator = undefined
                first = false
            }else{
                if(value != "." && value != "="){
                    operator = value
                    first = true
                    prev = last
                    last = undefined
                }
            }
        }

        let result, temp
        if(last != undefined && operator != undefined && value != "="){
            
            switch(operator){
                case "+":
                    result = last + prev + (temp != undefined ? temp : 0)
                    break

                case "-":
                    result = prev - last
                    break
                
                case "x":
                    result = prev * last
                    break

                case "/":
                result = prev / last
                break
            }
            

            last = result
            result = undefined

        }

        if(value == "="){
            screen.value = last  
        }

    })
})