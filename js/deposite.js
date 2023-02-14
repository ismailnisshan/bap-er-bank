// 1.  add evenlistener to the deposte button
//  2. get deposte amount from the depsote field
//  2.5 make sure convert deposite amount to a number type
// 3 clear the deposite input field after getting the value
// 4.  get the previous deposite total
// 5. calculate new deposte total and set the value to the deposite total
// 6. get current balance
//  7 calculate the new blance and set it to the total balance element







// step:1
document.getElementById('btn-deposite').addEventListener('click',function(){
    // step:2
   const depositeField=document.getElementById('deposite-field') ;
   const newDepositeAmountString=depositeField.value;
   const newDepositeAmount=parseFloat(newDepositeAmountString);
 
  

//    step-3
   depositeField.value='';
//    step:4
const depositeTotalElement=document.getElementById('deposite-total');
 const previousDepositeTotalString=depositeTotalElement.innerText;
 const previousDepositeTotal=parseFloat(previousDepositeTotalString);

//  step:5
const newDepositeTotal=previousDepositeTotal+newDepositeAmount;
depositeTotalElement.innerText=newDepositeTotal;

// step:6
const balanceTotalElement=document.getElementById('Balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBlanceTotal=parseFloat(previousBalanceTotalString);


// step :7
const newBalanceTotal=previousBlanceTotal+newDepositeTotal;
balanceTotalElement.innerText=newBalanceTotal;
})