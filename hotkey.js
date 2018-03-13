'use strict'

document.onkeydown=function (e) {
    e.preventDefault();    
    var key = window.event.keyCode;
    e=window.event||e;  
    if(key== 83 && e.ctrlKey){  
          /*延迟，兼容FF浏览器  */  
           setTimeout(function(){  
             alert('ctrl+s');   
          },1);   
           return false;        
       }
    if(key== 65 && e.ctrlKey){  
        /*延迟，兼容FF浏览器  */  
         setTimeout(function(){  
           alert('ctrl+a');   
        },1);   
         return false;        
     }
 
     if(key== 112){  
        /*延迟，兼容FF浏览器  */  
         setTimeout(function(){  
           alert('F1');   
        },1);   
         return false;        
     }
     if(key== 113){  
        /*延迟，兼容FF浏览器  */  
         setTimeout(function(){  
           alert('F2');   
        },1);   
         return false;        
     }
     if(key== 114){  
        /*延迟，兼容FF浏览器  */  
         setTimeout(function(){  
           alert('F3');   
        },1);   
         return false;        
     }                    
  };  