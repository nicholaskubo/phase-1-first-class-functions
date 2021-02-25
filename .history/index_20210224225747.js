function receivesAFunction (callback){
    something(callback);
}

function returnsANamedFunction(){
    return function namedFunction(){
        console.log("Hi")
    }
}

function returnsAnAnonymousFunction(){
    return function() {
        console.log("Hello")
    }
}
