function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    function namedFunction(){
        return `hello`;
    }
    return namedFunction
}