function receivesAFunction (callback){
    callback();
}

function returnsANamedFunction(){
    function namedFunction(){
    }
}

function returnsAnAnonymousFunction(){
    return function()
}