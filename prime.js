function prime(num){   // function for the verification
 if(num<2){
       return num + " is not a prime number"
    }

   for(let i=2;i<num;i++){
    if(num%i===0){
        return num + " is not a prime number"
    }
  }
    return num +" is a prime number"
}

function show(){     // function to activate prime(num)
    var input= prompt("input a number to verify if it's a prime number")
    alert(prime(input))
}




function primelist(num){   // function for the list
    if(num<2){
          return num + " is not a prime number"+"<br>"
       }
   
      for(let i=2;i<num;i++){
       if(num%i===0){
           return num + " is not a prime number"+"<br>"
       }
     }
       return num +" is a prime number"+"<br>"
   }

function list(){     // function to activate primelist(num)
    let min = parseInt(document.querySelector("#min").value)
    let max = parseInt(document.querySelector("#max").value)
    for(let loop=min;loop<=max;loop++){
        document.write(primelist(loop))
        console.log(primelist(loop))
    }
}