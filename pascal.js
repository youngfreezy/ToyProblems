//Using pascal's triangle to get all unique paths on a board, where only moves are down and to the right:

//generate Pascal's triangle.
function pascal(n) {
  function pascalHelper(n, arr) {
    if (n < 2) {
      return arr;
    }
    var prevTier = arr[arr.length - 1];
    var currTier = [1];
    for (var i = 1; i < prevTier.length; i++) {
      currTier[i] = prevTier[i] + prevTier[i - 1];
    }
    currTier.push(1);
    arr.push(currTier);
    return pascalHelper(n - 1, arr);
  }
  return pascalHelper(n, [
    [1]
  ]);
}


function getPaths(n) {

  if (n < 2) {
    return n;
  }

   else {
    var tri = pascal(n * 2);
    var oddElement = (n + (n - 2));
    var mid = Math.floor(tri[oddElement].length / 2);
    // console.log(oddElement);
    return tri[oddElement][mid];
  }

}
//observed pattern: triangle has to be twice as long as the number of paths.
console.log(getPaths(7));
//where combos are on pascal's triangle:
// 1x1 grid on the 1st line ===> 1
// 2x2 grid on 3rd line==> 2
// 3x3 grid on 5th line ===> 6
// 4x4 grid on 7th line ===> 20
// 5x5 grid on the 9th line ===> 70
// 6 x6 on the 11th line ===> 252