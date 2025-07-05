// because we're sharing it between files, we can use the same function in both files
export function formatCurrency(priceCents){
    return (priceCents/100).toFixed(2);
};

export default formatCurrency;   //jo khali ek j vastu export karvi hoi ne tyarej kam lage aane imoprt saru dekhai {} vagar nu
//import formatCurrency from './utils/money.js';   aavi rite thase default thi