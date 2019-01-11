let paragraph = document.createElement('p')
let paragraph2 = document.createElement('p') 
let input = document.createElement('input')

paragraph.textContent = "Enim elit occaecat esse aliquip ea nulla aliquip sint eiusmod. Qui duis culpa reprehenderit pariatur aute ut sunt cupidatat cupidatat. Lorem ex fugiat eiusmod aliqua aliquip dolore. Fugiat aliquip enim ad exercitation in ex aliqua incididunt nostrud. Consectetur ipsum laboris eu enim ipsum. Aute reprehenderit cillum pariatur amet consectetur velit minim Lorem dolor officia laborum magna sint ipsum."
paragraph2.textContent = "Enim elit occaecat esse aliquip ea nulla aliquip sint eiusmod. Qui duis culpa reprehenderit pariatur aute ut sunt cupidatat cupidatat. Lorem ex fugiat eiusmod aliqua aliquip dolore. Fugiat aliquip enim ad exercitation in ex aliqua incididunt nostrud. Consectetur ipsum laboris eu enim ipsum. Aute reprehenderit cillum pariatur amet consectetur velit minim Lorem dolor officia laborum magna sint ipsum."
document.body.appendChild(paragraph)
document.body.appendChild(paragraph2)
document.body.appendChild(input)

paragraph.addEventListener('click', () => {
    console.log('paragraph');
})

paragraph2.addEventListener('click', (event) => {
    console.log('paragraph2');
})

paragraph.addEventListener('dblclick', () => {
    console.log('dblclick');
})

input.onclick = function() {
    paragraph.style.visibility = 'hidden'
}

input.onfocus = function() {
    console.log('barry');
}

input.onblur = function() {
    console.log('Allen');
}

let sqWorker = new Worker('scripts/square/squareEvent.js')

sqWorker.addEventListener("message", event => {
    console.log("The worker responded:", event.data);
  });
  sqWorker.postMessage(10);
  sqWorker.postMessage(24);