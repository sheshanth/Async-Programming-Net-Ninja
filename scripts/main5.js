window.onload = function () {

    function gets(url) {

        return new Promise(function (resolve, reject) {

            let xhttp = new XMLHttpRequest()

            xhttp.open('GET', url, true)

            xhttp.onload = function () {
                if (xhttp.status == 200) {
                    resolve(JSON.parse(xhttp.response))
                }
                else {
                    reject(xhttp.statusText)
                }
            };

            xhttp.onerror = function () {
                reject(xhttp.statusText)
            }

            xhttp.send();

        })

    }

    let promise = gets('data/tweets.json')

    promise.then(function (tweets) {
        console.log(tweets);
        return gets('data/friends.json')
    }).then(function (friends) {
        console.log(friends);
        return gets('data/videos.json')
    }).then(function (videos) {
        console.log(videos);
    }).catch(function (error) {
        console.log(error);
    })

}