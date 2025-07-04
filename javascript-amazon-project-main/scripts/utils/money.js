// because we're sharing it between files, we can use the same function in both files
export function formatCurrency(priceCents){
    return (priceCents/100).toFixed(2);
};