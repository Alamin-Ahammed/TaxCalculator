// Tax-desh
// ------------------------------------------------------------------------
// 3000 USD -> free
// 6000 USD -> 5%
// 10,000 USD -> 15%
// 20,000 USD -> 25%
// above that -> 30%
// minimum tax -> 50 USD
// if someone earns <= 3000 USD no minimum tax
//
//
//
//
//
// ------------------------------------------------------------------------
// travel allowance -> 500 USD without tax; above that -> add with income
// medical allowance -> 300 USD without tax; above that -> add with income
// housing allowance -> 1000 USD without tax; above that -> add with income
// ------------------------------------------------------------------------
// investment rebate -> 5% of investment will be returned
// ------------------------------------------------------------------------
//
//
// **** breakdown = simplification ****
// MVP - Minimum Viable Product

// input box for yearly income
// at each step -> look at how much money is left and calculate that accordingly
// after all steps -> check whether minimum is attained

function calculateTaxAmount(income) {
    const maxPercentage = 30;
    const minimumAmount = 50;
    const slabs = [
      { income: 3000, taxPercentage: 0 },
      { income: 6000, taxPercentage: 5 },
      { income: 10000, taxPercentage: 15 },
      { income: 20000, taxPercentage: 25 },
    ];
    if (income <= slabs[0].income) return 0;
    let totalTax = 0;

   for (let i = 0; i < slabs.length - 1; i++) {
    income -= slabs[i].income;
    let currentSlabIncome = slabs[i+1].income - slabs[i].income;

    if (income > 0) {
      let calculationAmount = 0;
      if (income <= currentSlabIncome) calculationAmount = income;
      else calculationAmount = currentSlabIncome;
      totalTax += (calculationAmount * slabs[i+1].taxPercentage) / 100;
    }

    if (i === slabs.length - 2 && income > 0) {
      totalTax += (calculationAmount * slabs[i+1].taxPercentage) / 100;
    }
   }
   
  
    // income -= currentSlabIncome;
    // currentSlabIncome = slabs[2].income - slabs[1].income;
    // if (income > 0) {
    //   // if more than current slab -> calculate only for current slab
    //   // else calculate on income
    //   let calculationAmount = 0;
    //   if (income <= currentSlabIncome) calculationAmount = income;
    //   else calculationAmount = currentSlabIncome;
    //   totalTax += (calculationAmount * slabs[2].taxPercentage) / 100;
    // }
  
    if (totalTax < minimumAmount) return minimumAmount;
    return totalTax;
  }


  function calculateTaxAmount(income) {
  if (income <= 3000) {
    return 0;
  }

  let totalTax = 0;
  income -= 3000;
  // 3000
  let currentSlab = 0;
  // 6000 - 5%
  if (income > 0) {
    if (income <= 3000) {
      currentSlab = income;
    } else {
      currentSlab = 3000;
    }
    totalTax += (currentSlab * 5) / 100;
  }

  income -= 3000;
  if (income > 0) {
    if (income <= 4000) {
        currentSlab = income
    }else{
      currentSlab = 4000;
    }
    totalTax += (currentSlab * 5) / 100;
  }

  return totalTax;
}

  
  // 500 usd -> 0
  // 3000 usd -> 0
  // 3100 usd -> 50
  // 5000 usd -> 100
  // 7000 usd -> 300 -> 3000 * .05 + 1000 * .15

