function getData (callback) {
    return new Promise (function (resolve , reject) {
        $.get('url', function (response) {
            resolve(response)
        });
    });
}

getData().then (function (dataA) {
    console.log(dataA)
});


// AjaxでデータをRequestするとき
function getData () {
    return new Promise (function (resolve, reject) {
        $.get('utl', function (response ) {
            if (response) {
            }
            reject(new Error ("Request Failed"));
        });
    });
}

// getの結果によってResponse or error(catch)を出力
getData().then (function (data) {
    console.log (data);

}) .catch(function (err){
    console.log("errerrerr")
    console.log(err)
});

function getData() {
    return new Promise ({    });
}

getData()
    .then (function (data) {

    })
    .then (function() {

    })
    .then (function (){

    });


getData (userInfo)
    .then (parseValue) 
    .then (auth)
    .then (diaplay)

let userInfo = {
    id : 'merowi',
    pw : '123456'
}

function parseValue (){
    return new Promise ({
        //実行
    });
}

function auth () {
    return new Promise({
        //実行
    });
}
function diaplay () {
    return new Promise ({
        //実行
    })
}