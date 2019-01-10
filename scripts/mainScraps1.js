let paragraph = document.createElement('p')
let paragraph2 = document.createElement('p') 

paragraph.textContent = "Enim elit occaecat esse aliquip ea nulla aliquip sint eiusmod. Qui duis culpa reprehenderit pariatur aute ut sunt cupidatat cupidatat. Lorem ex fugiat eiusmod aliqua aliquip dolore. Fugiat aliquip enim ad exercitation in ex aliqua incididunt nostrud. Consectetur ipsum laboris eu enim ipsum. Aute reprehenderit cillum pariatur amet consectetur velit minim Lorem dolor officia laborum magna sint ipsum."
paragraph2.textContent = "Enim elit occaecat esse aliquip ea nulla aliquip sint eiusmod. Qui duis culpa reprehenderit pariatur aute ut sunt cupidatat cupidatat. Lorem ex fugiat eiusmod aliqua aliquip dolore. Fugiat aliquip enim ad exercitation in ex aliqua incididunt nostrud. Consectetur ipsum laboris eu enim ipsum. Aute reprehenderit cillum pariatur amet consectetur velit minim Lorem dolor officia laborum magna sint ipsum."
document.body.appendChild(paragraph)
document.body.appendChild(paragraph2)

paragraph.addEventListener('click', () => {
    console.log('paragraph');
})

paragraph2.addEventListener('click', (event) => {
    console.log('paragraph2');
})

paragraph.addEventListener('dblclick', () => {
    console.log('dbClick');
})