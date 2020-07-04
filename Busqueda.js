

function binarySearch(array, item){

var min = 0;
var max = array.length -1;


while(min <= max){
    var middle = Math.floor((min + max)/2);
    var guess = array[middle];
    if(guess === item){

return middle;

    }
    if(guess >= item )  {
            max = middle - 1;
    }else{
        min = middle +1;

    }
}
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,9], 8));
console.log(binarySearch([1,2,3,4,5,6,7,8], 5));