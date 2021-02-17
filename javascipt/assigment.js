
function swap(num1,num2){
    var count=0;
    var len= num1.length;
    for(var i=0;i<len;i++){
        if(num1[i]!=num2[i]){
            count=count+1;
        }
    } 
    if(count%2==0){
        console.log(count/2);
    }
    else{
        console.log('cannot swap');
    }
}

swap('10011001','01100110');

