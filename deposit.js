function depositProfit(deposit, rate, threshold) {
    
    let i = 1;
    let newAmount = 0;
    const growRate = rate / 100;
    
    newAmount = deposit + (deposit * growRate);
    
    while(newAmount < threshold){
        newAmount = newAmount + (newAmount * growRate);
        i++;
    }
    return i;
    //  write code here.
}
module.exports = depositProfit;



/**
* Test Suite 
*/
