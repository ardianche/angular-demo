let arrayOfNumbers = [4, 3, 4, 3, 6, 7, 6, 7];
let paired_numbers = [];
let unpaired_numbers = [];

function checkArray(arrayOfNumbers) {
  arrayOfNumbers.forEach((item, index) => {
    let number_payload = {
      no_index: index,
      no_value: item
    };
    let filtered_array = arrayOfNumbers.filter(element => element === item);
    if (
      item === filtered_array[0] &&
      (filtered_array.length > 1 && filtered_array.length <= 2)
    ) {
      paired_numbers.push(number_payload);
    } else {
      unpaired_numbers.push(number_payload);
    }
  });
  return unpaired_numbers[unpaired_numbers.length - 1];
}

console.time("start");
let result = checkArray(arrayOfNumbers);
console.timeEnd("start");

console.log(
  "unpaired number : ",
  result["no_value"],
  "at index : ",
  result["no_index"]
);