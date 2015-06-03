//description of trampolines: http://raganwald.com/2013/03/28/trampolines-in-javascript.html
//factorial recursion

function repeat(operation, num) {
  if (num <= 0) return;
  return function(){
    operation();
    repeat(operation, --num);
  }
}

function trampoline(fn) {
  while(fn());
}

module.exports = function(operation, num) {
  return trampoline(repeat(operation, num));
}