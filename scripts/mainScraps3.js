window.onload = function () {
    let button1 = document.createElement('button')
    button1.textContent = "to Google..."
    document.body.appendChild(button1)

    window.addEventListener('click', function(event) {
        if(event.target == button1){
            let http = new XMLHttpRequest();
            http.open('GET', "https://www.google.com", true)
            http.send();
            http.onreadystatechange = function() {
                if(http.status == 200 && http.readyState == 4){
                    console.log(http.response);
                }
            }
        }
    })

}