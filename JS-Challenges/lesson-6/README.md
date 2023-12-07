# JS CHALLENGE

typeof 15; // Prediction: number
typeof 5.5; // Prediction: number
typeof NaN; // Prediction: undef, INCORRECT gives number
typeof "hello"; // Prediction: string
typeof true; // Prediction: boolean
typeof (1 != 2); // Prediction: boolean
"hamburger" + "s"; // Prediction: string
"hamburgers" - "s"; // Prediction: undef, INCORRECT gives number
"1" + "3"; // Prediction: string
"1" - "3"; // Prediction: undef, INCORRECT gives number
"johnny" + 5; // Prediction: string
"johnny" - 5; // Prediction: undef
99 \* "luftbaloons"; // Prediction: undef, INCORRECT gives NaN

## Challenge 2

2 == "2"; Prediction: true
2 === 2; Prediction: true
2 === "2"; Prediction: false
"2" + 3 == 23; Prediction: true
"2" + 3 === 5; Prediction: false
10 % 3; Prediction: 1
10 % 3 === 1; Prediction: true
(100 % 7) % 5; Prediction: 0, Answer: 2
(100 % 7) % 5 !== 0; Prediction: false, Answer: true
(100 % 7) % 9 == 2; Prediction: false, Answer: true
!(10 % 2); Prediction: NaN
!!!!((10 % 7) % 3); Prediction: true
10 % 3 === -1 % 2; Prediction: false

(892783 != "89278" + 3) == 0; Prediction: true
true && false; Prediction = false
false || true; Prediction = true
true || false; Prediction = true
true || false; Prediction = true
true || false + true; Prediction = true
true \* false && false + true; Prediction: 0
10 && 123 && -1 && 3; Prediction: 3 because negative numbers are truthy
10 && 123 && 0 && 3; Prediction: 0
(10 && (123 || "") && parseInt("Roisin")) || NaN
3 && "Calum" && ("" || 26); 26 because all truthy, trird, trecond
3 && "Remi" && (null || 86 \_ 0 || ("" + 1 && "Cat" + "Dog")); "CatDog" // don't forget to give it string
