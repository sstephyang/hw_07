function random(m){
    var rnd = Math.floor(Math.random()*m+1); 
    return rnd;
}

function max(a,b){
   if (a>b) { var max=a; return max; } 
   else     { var max=b; return max; }
}

function lastChar(arr){
   var char=arr[arr.length-1]
   return char;
}

function squares(a,b){
   var squa = a*a+b*b;
   return squa;
}

function leapYear(y){
   if  (y%4===0 && y%100>0) { var YN="yes"; return YN; } 
   else                     { var YN="no";  return YN; }
}