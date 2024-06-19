const form = document.querySelector(".form__container");
console.log(form);
form.addEventListener("submit",function(event){
    event.preventDefault()
    console.log("evento adicionado")
    const input_text = document.querySelector("#input-name");
    const input_selected = document.querySelector("#select-pet");
    console.log(input_text.value);
    console.log(input_selected.value);
})

const cButton = document.createElement("button");
cButton.id = "bLimpar";
cButton.classList.add("form__btn--submit");
cButton.innerText = "Limpar";
cButton.type = "reset";
const div  = document.querySelector("div");
div.appendChild(cButton);
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.gap = "12px";




