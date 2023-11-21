let form = document.getElementById("form")
let contenedor = document.getElementById("contenedor")
let select = document.getElementById("operacion")
let operacion = "suma"

select.addEventListener("change", (event)=>{
    operacion=event.target.value
})
form. addEventListener("submit", (event)=>{
    event.preventDefault()
    
    let num1=document.getElementById("num1").value
    let num2=document.getElementById("num2").value

    if  ( operacion==="suma") {
        contenedor.innerHTML=`<h2>${parseInt(num1)+parseInt(num2)}</h2>`
    } else if (operacion==="resta"){
        contenedor.innerHTML=`<h2>${parseInt(num1)-parseInt(num2)}</h2>`
        
    } else if( operacion==="multi"){
        contenedor.innerHTML=`<h2>${parseInt(num1)*parseInt(num2)}</h2>`

    }else if(operacion==="dividir"){
        contenedor.innerHTML=`<h2>${parseInt(num1)/parseInt(num2)}</h2>`

    }
        
    

// console.log (parseInt(num1) +parseInt (num2))

})

function sumar(){
    let n1= document.getElementById(`n1`).value
}  


let nombre = "linda"

console.log("hola " + nombre)

console.log(`hola ${nombre}`)

console.log('hola',nombre)
