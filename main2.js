


function promo(num1, num2, num3, num4) {

   let input = document.querySelector('#input');
   let button  = document.querySelector('#button');
   let p = document.querySelector('p');



    button.addEventListener( 'click', (e) => {
    e.preventDefault();
    // input.value = '';

   let inputValueArr = input.value.split('');
        console.log(inputValueArr);
        for (const item of inputValueArr) {
            if (item[0] % 2 === 0) {
                console.log('true');
            }
        }

        // p.innerText = ''
    if (!input.value){
       input.style.border = '2px solid red';
       return p.append(num4)

    }





    })



}
promo(100, 1000, 2000, 0);