let height = document.querySelector("#height_in_cm");
let weight =document.querySelector("#weight_in_kg");
let calculateBMI= document.querySelector(".calculate");
let displayBMI =document.querySelector(".displayBMI");

calculateBMI.addEventListener("click", ()=> {
    let enteredHeight= parseInt(height.value);
    let enteredWeight = parseInt(weight.value);
    let heightInMeter= enteredHeight/100;
    let bmi= (enteredWeight/(heightInMeter*heightInMeter)).toFixed(2);
    if(Number.isNaN(bmi)){
        displayBMI.innerText="Enter Data!!"
    }else {
        displayBMI.innerText=bmi;
    }
    
})