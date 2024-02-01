

import { sum } from '../utils/functions';

class Main {
    constructor(){

    }
    static init(){
        const input1 = document.getElementById('input-1');
        const input2 = document.getElementById('input-2');
        const button = document.getElementById('button');
        const text = document.getElementById('text');
        
        button.addEventListener('click', () => {
            const sumResult =  sum(input1.value,input2.value);
            text.innerText = sumResult
            console.log('mudou2')
        });
    }
}
export default Main
// class Main2 extends Main {
//     constructor(){
//         super()
//     }
// }