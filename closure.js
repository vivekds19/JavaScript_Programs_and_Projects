function outerFunction()
{
  let outerVariable=10;
  function innerFunction()
  {
    console.log(outerVariable);
  }
  return innerFunction;
}
outerFunction()();