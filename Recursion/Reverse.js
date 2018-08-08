// 9. Write a function that reverses a string.
var reverse = function(string) {
  if(string === ""){
    return ""
  } else {
    return reverse(string.substring(1)) + string.charAt(0)
  }
};

console.log(reverse("Hello World"))