
function promo(num1, num2, num3, num4) {

   let input = document.querySelector('#input');
   let button  = document.querySelector('#button');
   let p = document.querySelector('p');

   button.addEventListener( 'click', (e) => {
    e.preventDefault();
    let inputValueArr = input.value.split('');
    let numArr = inputValueArr.map(Number);
       console.log(numArr)
    input.value = '';
    p.innerText = '';
       let sumOdd = 0;
       let sumPar = 0;

       for (let i = 0; i < numArr.length; i++) {
           let caseFirstOneThousand = numArr[0] % 2 !== 0 && numArr[1] % 2 !== 0 &&
                                      numArr[2] % 2 === 0 || numArr[3] % 2 === 0 &&
                                      numArr[4] % 2 !== 0 && numArr[5] % 2 !== 0

           let caseSecondOneThousand = numArr[0] % 2 !== 0 && numArr[1] % 2 !== 0 &&
                                       numArr[2] % 2 === 0 && numArr[3] % 2 === 0 &&
                                       numArr[4] % 2 !== 0 && numArr[5] % 2 !== 0

           if (numArr[i] % 2 === 0) {
               sumPar += numArr[i];
           } else {
               sumOdd += numArr[i];
           }
           if (sumOdd < sumPar) {
               return  p.append(num1)
           }
           if (caseFirstOneThousand) {
               return p.append(num2)
           }
           if (caseSecondOneThousand) {
               return p.append(num2)
           }
           if (!sumOdd < sumPar) {
             return   p.append(num4)
           }
           if (!caseFirstOneThousand) {
               return   p.append(num4)
           }

       }

   })

    input.addEventListener('input', () => {

        if (input.value.length === 8) {
            button.disabled = false
        }else {
            button.disabled = true
        }
        if (!/^[0-9]+$/.test(input.value)) {
            button.disabled = true
        }
    })

        if (!input.value){
       input.style.border = '2px solid red';

    }
}
promo('Bonus:' + 100, 'Bonus:' + 1000, 'Bonus:' + 2000, 'Bonus:' + 0);