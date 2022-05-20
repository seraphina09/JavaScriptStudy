let p1 = Promise.resolve (3);
let p2 = 12345;

let p3 = new Promise ( (resolve , reject ) =>{
    setTimeout( () => {
    resolve("systemi");
    } ,100);
});

Promise.all ([p1,p2,p3])
    .then (values => {
        console.log(values);
    });