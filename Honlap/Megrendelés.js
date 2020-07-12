function calcAmount() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber= parseInt(amountInput.value);
    amountNumber= isNaN(amountNumber) ? 0 : amountNumber; 
}

function showSumPrice (price = 1200, amountNumber = 1){
    if (amountNumber > 10){alert("Maximum 10 terméket vásárolhat!");}
    else if (amountNumber<1){alert("Minimum 1 terméket kell vásárolnia!");}
    else {showSumPrice = amountNumber * price;}
}
showSumPrice (price, amountNumber);
   
const szállítás = 500;

function SumPriceSzállítással (){
    let SumPriceSzállítással = document.querySelector("span.show-amount");
    if(showSumPrice < 5000){SumPriceSzállítással = showSumPrice + szállítás;}
    else if (showSumPrice >= 5000){SumPriceSzállítással=showSumPrice;}
     SumPriceSzállítással.innerHTML=SumPriceSzállítással;};
 SumPriceSzállítással();
