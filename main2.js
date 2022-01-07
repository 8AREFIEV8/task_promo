
function promo(num1, num2, num3, num4) {

   let input = document.querySelector('#input');
   let button  = document.querySelector('#button');
   let p = document.querySelector('p');


   button.addEventListener( 'click', (e) => {
    e.preventDefault();
    let inputValueArr = input.value.split('');
    let numArr = inputValueArr.map(Number);
    input.value = ''

       let sumOdd = 0;
       let sumPar = 0;

       for (let i = 0; i < numArr.length; i++) {
           if (numArr[i] % 2 === 0) {
               sumPar += numArr[i];
           } else {
               sumOdd +=  numArr[i];
           }
           if (sumOdd > sumPar) {
              return p.append(num1)
           }

       }


   })

    input.addEventListener('input', () => {
        if (input.value.length == 8) {
            button.disabled = false
        }
    })

        if (!input.value){
       input.style.border = '2px solid red';

    }



}
promo(100, 1000, 2000, 0);