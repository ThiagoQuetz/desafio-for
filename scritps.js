let p = document.querySelector("p")
let input = document.querySelector("input")

const contacts = [
    { name: "Thiago", number: "(32) 99999-9991" },
    { name: "Michelly", number: "(32) 99999-9992" },
    { name: "Liz", number: "(32) 99999-9993" },
    { name: "Beatriz", number: "(32) 99999-9994" },
    { name: "Luna Maria", number: "(32) 99999-9995" },
    { name: "Maria", number: "(32) 99999-9996" },
    { name: "Joana", number: "(32) 99999-9997" },
    { name: "Pedro", number: "(32) 99999-9998" },
    { name: "Marisia", number: "(32) 99999-9999" },
    { name: "Heitor", number: "(32) 99999-9910" },
    { name: "Cacilda", number: "(32) 99999-9911" },
    { name: "Carminha", number: "(32) 99999-9912" },
    { name: "Weliton", number: "(32) 99999-9913" },
    { name: "Elizi", number: "(32) 99999-9914" },
]

function search() {

    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = `Nome: ${contacts[i].name} <br> Tel: ${contacts[i].number}`

            break
        } else {
            p.innerHTML = "Contato não encontrado"
        }
    }
}
