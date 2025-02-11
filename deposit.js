function depositProfit(deposit, rate, threshold) {
    
    let year = 1;
    let newAmount = 0;
    const growRate = rate / 100;
    
    newAmount = deposit + (deposit * growRate);
    
    while(newAmount < threshold){
        newAmount = newAmount + (newAmount * growRate);
        year++;
    }
    return year;
    //  write code here.
}
module.exports = depositProfit;



/**
* Test Suite 
*/
