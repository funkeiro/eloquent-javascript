for(var i = 1; i <= 100; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    var x = '';
    x += i % 3 == 0 ? 'Fizz' : '';
    x += i % 5 == 0 ? 'Buzz' : '';
    console.log(x);
  } else {
    console.log(i)
  }
}
