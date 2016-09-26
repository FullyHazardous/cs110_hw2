<!DOCTYPE HTML> 
<html>
<script> 
const f = function(stars, spaces) {
  if (spaces === 0) {
    return "";
  }
  return  stars + f(stars, spaces - 1);
};
const TriangleStars = function(lines) {
   const looper = function(m) {
       if (m > 1) {
           looper(m-1);
       }
       console.log(f(' ', lines-m) + f('*', (m*2)-1));
	   
   };
   looper(lines); 
};
TriangleStars(5); 
</script>
</html>