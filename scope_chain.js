let a = 3;

function x() {
    let b = 5;

    function y() {
        let c = 7;
        
        function z() {
            console.log(a); // Logs 3
            console.log(b); // Logs 5
            console.log(c); // Logs 7
        }
        
        z();
    }
    
    y();
}

x();