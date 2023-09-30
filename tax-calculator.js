// Tax-desh
// ------------------------------------------------------------------------
// 3000 USD -> free
// 6000 USD -> 5%
// 10,000 USD -> 15%
// 20,000 USD -> 25%
// above that -> 30%
// minimum tax -> 50 USD
// if someone earns <= 3000 USD no minimum tax
/**
 *
 *
 */
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

// function calculateTaxAmount(income) {
//   const maxPercentage = 30;
//   const minimumAmount = 50;
//   const slabs = [
//     { income: 3000, taxPercentage: 0 },
//     { income: 6000, taxPercentage: 5 },
//     { income: 10000, taxPercentage: 15 },
//     { income: 20000, taxPercentage: 25 },
//   ];
//   if (income <= slabs[0].income) return 0;

//   let totalTax = 0;
//   income -= slabs[0].income;

//   if (income > 0) {
//     let taxableSallary = income;
//     for (let i = 0; i < slabs.length - 1; i++) {
//       if (taxableSallary < 1) {
//         break;
//       }
//       let currentSlabIncome = slabs[i + 1].income - slabs[i].income;
//       // if more than current slab -> calculate only for current slab
//       // else calculate on income
//       let calculationAmount = 0;
//       if (taxableSallary <= currentSlabIncome)
//         calculationAmount = taxableSallary;
//       else calculationAmount = currentSlabIncome;
//       totalTax += (calculationAmount * slabs[i + 1].taxPercentage) / 100;
//       taxableSallary -= currentSlabIncome;
//       if (i === slabs.length - 1 && taxableSallary > 0) {
//         totalTax +=
//           (taxableSallary * slabs[slabs.length - 1].taxPercentage) / 100;
//       }
//     }
//   }

//   if (totalTax < minimumAmount) return minimumAmount;
//   return totalTax;
// }

//6500


// 500 usd -> 0
// 3000 usd -> 0
// 3100 usd -> 50
// 5000 usd -> 100
// 7000 usd -> 300 -> 3000 * .05 + 1000 * .15

//first - geting the input from user.
//second - calculation of Tax.
// first



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
  income -= slabs[0].income;

  if (income > 0) {
    let taxableSallary = income;
    for (let i = 0; i < slabs.length - 1; i++) {
      if (taxableSallary < 1) {
        break;
      }
      totalTax += getTaxCalculated(slabs,taxableSallary,i);
      taxableSallary -= slabs[i + 1].income - slabs[i].income;
    }
  }

  function getTaxCalculated(slabs, taxableSallary,i) {
      // if more than current slab -> calculate only for current slab
      // else calculate on income
      let currentSlabIncome = slabs[i + 1].income - slabs[i].income;
      let calculationAmount = 0;
      let Tax = 0;
      if (taxableSallary <= currentSlabIncome)
        calculationAmount = taxableSallary;
      else calculationAmount = currentSlabIncome;
          Tax += (calculationAmount * slabs[i + 1].taxPercentage) / 100;
      if (i === slabs.length - 1 && taxableSallary > 0) {
          Tax +=
          (taxableSallary * slabs[slabs.length - 1].taxPercentage) / 100;
      }
      return Tax;
  }

  if (totalTax < minimumAmount) return minimumAmount;
  return totalTax;
}


// function calculateTaxAmount(income) {
//   const maxPercentage = 30;
//   const minimumAmount = 50;
//   const slabs = [
//     { income: 3000, taxPercentage: 0 },
//     { income: 6000, taxPercentage: 5 },
//     { income: 10000, taxPercentage: 15 },
//     { income: 20000, taxPercentage: 25 },
//   ];
//   if (income <= slabs[0].income) return 0;

//   let totalTax = 0;
//   let taxableSalary = income - slabs[0].income;

//   if (taxableSalary > 0) {
//     for (let i = 0; i < slabs.length - 1; i++) {
//       if (taxableSalary <= 0) {
//         break;
//       }
//       totalTax += getTaxCalculated(slabs, taxableSalary, i);
//       taxableSalary -= slabs[i + 1].income - slabs[i].income;
//     }
//   }

//   function getTaxCalculated(slabs, taxableSalary, i) {
//     let currentSlabIncome = slabs[i + 1].income - slabs[i].income;
//     let calculationAmount = Math.min(taxableSalary, currentSlabIncome);
//     let tax = (calculationAmount * slabs[i + 1].taxPercentage) / 100;
//     return tax;
//   }

//   if (totalTax < minimumAmount) return minimumAmount;
//   if (totalTax > maxPercentage * income) return maxPercentage * income;
//   return totalTax;
// }

