/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [maxProfit, buy] = [0, prices[0]];
    for(let i=0; i<prices.length; i++){
        maxProfit = Math.max(maxProfit, prices[i] - buy);
        buy = Math.min(buy, prices[i]);
    }
    return maxProfit;
};