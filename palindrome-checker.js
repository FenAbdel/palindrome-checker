function palindrome(str) {
  let arr = str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  arr = arr.toLowerCase().split("");
  for (let i = 0; i < arr.length - 1 / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
      break;
    }
  }
  return true;
  
}

// check if the function worked
palindrome("eye");