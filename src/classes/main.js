

import { sum } from '../utils/functions';
import {Input, Button, Div} from '../lib/elements'

class Main {
    constructor(){
        // Div({id:'text',isBody: true}, [
        //     Div({id:'text2'}),
        //     Div({id:'text3'}),
        //     Div({id:'text4'}),
        //     Div({id:'text5'},[
        //         Div({id:'text6'})
        //     ]),
        // ])
    }
    createElementsHTML(){
        Input({id:'input-1',isBody: true})
        Input({id:'input-2',isBody: true})
        Button({id:'button', text: 'Clicar',isBody: true})
        Div({id:'text',isBody: true})
    }
    init(){
        this.createElementsHTML()
        const input1 = document.getElementById('input-1');
        const input2 = document.getElementById('input-2');
        const button = document.getElementById('button');
        const text = document.getElementById('text');
        
        button.addEventListener('click', () => {
            const sumResult =  sum(input1.value,input2.value);
            text.innerText = sumResult
        });
    }
}
export default Main
// class Main2 extends Main {
//     constructor(){
//         super()
//     }
// }