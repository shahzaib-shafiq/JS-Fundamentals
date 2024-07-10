function varScoping() {
    var x = 1;

    if (true) {
        var x = 2;
        console.log(x); // will print 2
    }

    console.log(x); // will print 2
}

function letScoping() {
    let x = 1;

    if (true) {
        let x = 2;
        console.log(x); // will print 2
    }

    // In letScoping(), two distinct x variables are used – one appears in the main function body and another in the if block. This behavior remains the same if we replace the first let keyword with a var keyword


    function varAndLetScoping() {
        var x = 1;

        if (true) {
            let x = 2;
            console.log(x); // will print 2
        }

        console.log(x); // will print 1
    }

    console.log(x); // will print 1
}


function nestedScopeTest() {
    if (true) {
        var functionVariable = 1;
        let blockVariable = 2;

        console.log(functionVariable); // will print 1
        console.log(blockVariable); // will print 2

        if (true) {
            console.log(functionVariable); // will print 1
            console.log(blockVariable); // will print 2
        }
    }

    console.log(functionVariable); // will print 1
    console.log(blockVariable); // will throw an error
}

// Global variables
var x = 1;
let y = 2;
console.log(this.x); // will print 1
console.log(this.y); // will print undefined
