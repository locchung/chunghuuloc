var n = 874

// Time complexity: O(n)
// Space complexity: O(1)
function Sum1(num: number): number {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }

  return sum
}

// Time complexity: O(n)
// Space complexity: O(n)
function Sum2(num: number, sum = 0): number {
  if (num == 0) return sum
  sum+=num
  return Sum2(num-1, sum)
}

// Time complexity: O(1)
// Space complexity: O(1)
function Sum3(num: number): number {
  return Math.floor(num * (num + 1) / 2);
}

console.log("Sum1: ", Sum1(n));
console.log("Sum2: ", Sum2(n));
console.log("Sum3: ", Sum3(n));

// how to run: npx tsx problem4/threeSum.ts
