let jsonReqRes = new XMLHttpRequest();

/* jsonReqRes.onreadystatechange = function() {

    if(jsonReqRes.readyState == 4 && jsonReqRes.status == 200)
    console.log(JSON.parse(jsonReqRes.response));

} */

jsonReqRes.open("GET", "data/tweets.json", true);

jsonReqRes.send();

//let resp = jsonReqRes.response;

console.log(jsonReqRes.response);

console.log("test");


/* setTimeout(() => {
    console.log(JSON.parse(jsonReqRes.response))
}, 5000); */