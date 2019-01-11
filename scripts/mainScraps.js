let input = document. createElement('input')
let paragraph = document.createElement('p')
let paragraph2 = document.createElement('p') 

paragraph2.textContent = "Accepted!"
paragraph2.style.color = "Green"
paragraph2.style.visibility = 'hidden'


document.body.appendChild(input)
document.body.appendChild(paragraph)
document.body.appendChild(paragraph2)

input.oninput = function() {
    //console.log(input.value);
    let t = input.value;
    if (Number(t)) {
        paragraph2.style.visibility = 'visible'
    }
    else {
        paragraph2.style.visibility = 'hidden'
    }
}