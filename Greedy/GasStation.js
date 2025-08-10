let gas = [4, 5, 7, 4],
  cost = [6, 6, 3, 5];

function gasStation(gas, cost) {
  let n = gas.length;
  let totalGas = 0;
  let totalCost = 0;
  let start = 0,
    currGas = 0;

  for (let i = 0; i < n; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    currGas += gas[i] - cost[i];

    if (currGas < 0) {
      // reset start
      start = i + 1;
      currGas = 0;
    }
  }
  return totalGas < totalCost ? -1 : start;
}

console.log(gasStation(gas, cost));
