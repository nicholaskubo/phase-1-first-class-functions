function receivesAFunction (callback){
    something(callback);
}

function returnsANamedFunction(){
    return function namedFunction(){
    }
}

function returnsAnAnonymousFunction(){
    return function() 
}