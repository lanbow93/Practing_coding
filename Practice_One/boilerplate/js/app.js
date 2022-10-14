let testArray = [0,1,2,3,3,3,3,1]
// indexOf 1st index | lastIndexOf - calculated last index
function count(arr) {
  let counter = 0;
  for (number of testArray) {
    if(testArray.indexOf(number) !== testArray.lastIndexOf(number))
    counter++;
  }
  console.log(counter)
}

count([0,1,2,3,3,3,3,1]);
