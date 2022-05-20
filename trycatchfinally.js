

function sum(a, b){
    let sum;
    try{
        sum = a + b;
    } catch(e) {
        console.error(e);
        return null;
    } finally {
        console.log('Finally!');
    }
    return sum;
    }
    
    console.log('Start');
    
    console.log(sum(10, 8));
    console.log(sum(10, 8n));
    
    console.log('End');