const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce(batteries)

function batteries(total, batches) {
    return batches + total  
}
console.log(totalBatteries)