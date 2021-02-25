function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    function namedFunction(){
        return `hi there`;
    }
    return namedFunction
}