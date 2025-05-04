let buttons = document.querySelectorAll('.calc-container .calc .buttons button')
let resultInput = document.querySelector('.calc-container .calc .result')

p = document.createElement('p')
resultInput.appendChild(p)
let value, prem, last, result, secondTime = false
let operator
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', ()=>{
        value = buttons[i].value
        if(secondTime == true){
            p.textContent = ""
            secondTime = false
        }
        if(!isNaN(value)){
            p.textContent += `${value}`
            last = parseInt(p.textContent)
        }else{
            if(value !== "="){
                prem = parseInt(p.textContent)
                operator = value
                last = undefined
                secondTime = true
            }
        }

        if(operator != undefined && last != undefined){
            switch(operator){
                case "+":
                    result = last + prem
                    break
                
                case "-":
                    result = prem - last
                    break

                case "x":
                    result = last * prem
                    break

                case "/":
                    result = prem / last
                    break
            }

            p.textContent = `${result}`
        }

        if(value == "="){
            if(prem == undefined){
                p.textContent = `${last}`
            }else{
                p.textContent = `${result}`
            }
        }
        

            
    })
}



