let quadrado = document.querySelectorAll(".quadrado")
let control = 1

quadrado.forEach(element => {
    element.addEventListener("click", () => {
        if(element.innerHTML == '') {
            if(control % 2 == 0) {
                element.innerHTML = "X"
                
            }else {
                element.innerHTML = 'O'
            }
        }
        
        console.log(quadrado.keys())
        
        control++
        console.log(element)
      
    })
});

function um() {
    jgVelha.splice([1][1])
}


let jgVelha = [
    ['','',''],
    ['','',''],
    ['','',''],
]

cons