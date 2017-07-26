var appCalculadora = ( function(){
 
    var appName = 'Calculadora';
    var appVer = 'ver 1.0';

    //Declaracion de variables
    var num1 = 0;
    var num2 = 0;
    var count = 0;
    var opera;

    var buttons = document.getElementsByClassName('tecla');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            //alert(this.id);
            if(this.id == 'on'){
                darC();
                count = 0;
            } else if(this.id == 'punto'){
                darComa();
            } else if(this.id == 'igual'){
                esIgual();
            } else if(this.id == 'mas'){
                operar(1);
            } else if(this.id == 'menos'){
                operar(2);
            } else if(this.id == 'por'){
                operar(3);
            } else if(this.id == 'dividido'){
                operar(4);
            } else if(this.id == 'sign'){
                negativo();
            }   else {
                darNumero(this.id);
            }
        });
    }
    
        function darNumero(numero){
            if(num1==0 && num1 !== '0.'){
                num1 = numero;
            }else{
                num1 += numero;
            }
            count = num1.length;
            if(count <= 9){
                refrescar();
            }
                
        }

        function darComa(){
            if(num1 == 0) {
                num1 = '0.';
            } else if(num1.indexOf('.') == -1) {
                num1 += '.';
            }
            refrescar();
        }
    
        function negativo(){
            num1 *= -1;
            refrescar();
        }    

        function darC(){
            num1 = 0;
            num2 = 0;
            refrescar();
        }

        function operar(valor){
            if (num1 == 0){
                num1 = parseFloat(document.getElementById("display").value);
            }
            num2 = parseFloat(num1);
            num1= 0;
            opera = valor;
        }
    
        function esIgual(){
            num1 = parseFloat(num1);
            switch (opera){
                case 1:
                    num1 += num2;
                break;
                case 2:
                    num1 = num2 - num1;
                break;
                case 3:
                    num1 *= num2;
                break;
                case 4:
                    num1 = num2 / num1;
                break;
            }
            refrescar();
            num2 = parseFloat(num1);
            num1 = 0;
        }

        function refrescar(){
            alert(num1);
            document.getElementById('display').innerHTML = num1.substr(0,9);
        }    
    
  return {
    /*myMessage: function(){
        return foo + ' ' + bar;
    },
    darNumero: function(varNumero){
        if(varNumero1==0 && varNumero1 !== '0.'){
            varNumero1 = varNumero;
        }else{
            varNumero1 += varNumero;
        }
        appCalculadora.mostrar(varNumero1);
    },
    sum: function(param1,param2){
        return param1 + param2;
    },
    res: function(param1,param2){
        return param1 - param2;
    },
    div: function(param1,param2){
        return param1 / param2;
    },
    mult: function(param1,param2){
        return param1 * param2;
    }/*,
    mostrar: function(num1){
        document.getElementById('display').value = num1;
        alert(num1);
    }*/
  }
})();

 
/*console.log(appCalculadora.myMessage());
console.log(appCalculadora.sum(10,5));
console.log(appCalculadora.res(10,5));
console.log(appCalculadora.div(10,5));
console.log(appCalculadora.mult(10,5));*/