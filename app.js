const input = document.querySelector("#input");
const select = document.querySelector("#select");
const div = document.querySelector("#result")
let result1;


function Convert() {

    if (select.value === 'c2f') {
        // Convert Celsius to Fahrenheit
        result1 = (input.value * 9/5) + 32;
        div.innerHTML = `${input.value} °C is equal to ${result1} °F`;
        console.log(`${input.value} °C is equal to ${result1} °F`);
        
    } else if (select.value === 'f2c') {
        // Convert Fahrenheit to Celsius
        result1 = (input.value - 32) * 5/9;
       div.innerHTML  = `${input.value} °F is equal to ${result1} °C`;
       console.log(`${input.value} °F is equal to ${result1} °C`);
       
    } 
}
