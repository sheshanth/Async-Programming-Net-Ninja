window.onload = function () {

    /* var fruits = ["banana", "apple", "pear"]
    fruits.forEach(
        (data) => {
            console.log(data);
        }
    )

    console.log("done"); */

    /* $.get("data/tweets.json", (data) => {
        console.log(data);
    })
    
    console.log("done"); */

    function handleError(jqXHR, textStatus, error){
        console.log(error);
    }

    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: function (data) {
            console.log(data);
            $.ajax({
                type: "GET",
                url: "data/friends.json",
                success: function (data) {
                    console.log(data);
                    $.ajax({
                        type: "GET",
                        url: "data/videos.json",
                        success: function (data) {
                            console.log(data);

                        },
                        error: handleError
                    })
                },
                error: handleError
            })
        },
        error: handleError
    })

    console.log("s");

}