let p = document.querySelector("p")
let input = document.querySelector("input")

const contacts = [
    { name: "Thiago", number: "(32) 99999-9999" },
    { name: "Michelly", number: "(32) 99999-9999" },
    { name: "Liz", number: "(32) 99999-9999" },
    { name: "Beatriz", number: "(32) 99999-9999" },
    { name: "Luna Maria", number: "(32) 99999-9999" },
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
