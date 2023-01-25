var numeros = 100

for(var i = 1; i <= 100; i++)
{
  
  if( esDivisible(i,3) && esDivisible(i,5) )
  {
    console.log("fizzbuzz");
    continue
  }
  if( esDivisible(i,3))
  {
    console.log("fizz");
  }
  if(esDivisible(i,5))
  {
    console.log("buzz");
  }
  else if  ( i % 3 != 0 && i % 5 != 0)
  {
    console.log(i);
  }

}

function esDivisible( numero, divisor)
{
  if ( numero % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }

}

console.log( )
