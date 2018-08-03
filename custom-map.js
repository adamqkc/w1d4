var words = ["ground", "control", "to", "major", "tom"];

function customMap(array, callback) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]))
  }
  return newArray;
}

customMap(words, function(word) {
  return word.length;
})









