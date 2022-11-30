function getMean(nums){
    let numbers = convertToNumber(nums)
    let sum = 0
    for (let num of numbers) {
        sum += num
    }
    let average = sum/numbers.length
    return average;
}

function getMedian(nums){
    let numbers = convertToNumber(nums)
    const sorted = numbers.sort(function(a, b){return a-b});
    if (sorted.length % 2 == 0) {
        let index1 = (sorted.length/2);
        let index2 = index1 -1;
        return getMean([sorted[index1],sorted[index2]])
    } else {
        let index = ((sorted.length /2) -.5);
        return sorted[index]
    }
}

function getMode(nums){
    let numbers = convertToNumber(nums)
    const sorted = numbers.sort(function(a,b){return a-b});
    let numberObj = {}
    // make set to represent unique values
    let objKeys = new Set(numbers)
    // iterate through each KEY in set, count the # of occurences of certain key
    for (let key of objKeys) {
        let count = 0
        for (let i = 0; i<sorted.length; i++){
            if (key == sorted[i]) {
                count++
            }
        }  
        numberObj[key] = count;
    }
    // iterate through numberObj to find highest value in key/value pairs, return the key of highest value
        let highest = 0;
        let keyOutput = ""
        for (let key of Object.keys(numberObj)) {
        if (numberObj[key] > highest){
            highest = numberObj[key]
            keyOutput = key
        }
    }
   return keyOutput
}

function convertToNumber(nums) {
    numbers = []
    for (let num of nums){
        numbers.push(Number(num))
    }
    return numbers;
}
    
module.exports = {
    getMean,
    getMedian,
    getMode,
    convertToNumber
}