<!DOCTYPE HTML>
<html>
<script>
const f = function(b) 
{
if(b === 0)
return 1;

return b * f(b - 1);
   };

const factorial = function(m)
  {
    console.log(f(m));
};
  factorial(10);
  </script>
  </html>
