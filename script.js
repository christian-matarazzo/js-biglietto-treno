

/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 
*/







/* Ask to the user age and route length, add in console */

/* 

tools 

-prompt to let user interact
-'const' to store not variable values
-'let' to store variable values
-if/else if/else to give discount values condition and output
- `` backtick for final output
-'.toFixed' function to "force" only 2 decimal numbers after dot

*/


const route_length = Number(prompt("Please, add your km route length (number only)"))
const user_age = Number(prompt("Please, add your age here (number only)"))

console.log(route_length, user_age);


/* 
Calculate the travel price by this criteria:
0.21 € for km (- discount if there is)
*/

const price_for_km = 0.21 

let travel_price = route_length * price_for_km 


console.log(travel_price)



/* add a 20% discount IF user is < 18 and console log

ELSE IF user is > 65 add 40% and console log

ELSE give final price output

*/

if (user_age < 18) {

let discount_20 = travel_price * 20 / 100

let final_price = travel_price - discount_20

console.log("Your 20% discount is applied")

const final_output = final_price.toFixed(2)

console.log(`Your ticket final price is: ${final_output}`)


}

else if (user_age > 65) {

    let discount_40 = travel_price * 40 / 100

    
let final_price = travel_price - discount_40

    console.log("Your 40% discount is applied")

    const final_output = final_price.toFixed(2)


console.log(`Your ticket final price is : ${final_output}`)
    
} 

else {

    console.log("There are no suitable discount.")

    const final_output = travel_price.toFixed(2)


console.log(`Your ticket final price is: ${final_output}`)
}



