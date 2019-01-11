window.onload = function () {

    function* ge() {
        let x = yield 10;
        console.log(x)
    }

    let t = ge();
    console.log(t.next());
    console.log(t.next("azpper"));

}

