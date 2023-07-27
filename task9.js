            function add(num1,num2){
                return num1+num2;
            }
            function subtract(num1,num2){
                return num1-num2;
            }
            function multiply(num1,num2){
                return num1*num2;
            }
            function divide(num1,num2){
                if(num1==0)return 0;
                else if(num2==0) return "impossible";
                else return num1/num2;
            }
            function myCalculator(operation,num1,num2){
                if(operation.toLowerCase()=="add")return add(num1,num2);
                else if(operation.toLowerCase()=="subtract")return subtract(num1,num2);
                else if(operation.toLowerCase()=="multiply")return multiply(num1,num2);
                else if(operation.toLowerCase()=="divide")return divide(num1,num2);
            }
            console.log(myCalculator("DIVuyt",1,0));
       