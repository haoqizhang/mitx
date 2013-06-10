/* 
    calculate: evaluate the value of an arithmetic expression
*/
function calculate() {
    var input = $('#text1:first');
    var val = input.val(); // get input field from DOM
    var output = $('#text1_out:first');
    output.text(val)  
}    



