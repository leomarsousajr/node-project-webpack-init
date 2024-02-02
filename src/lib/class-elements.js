// elementos HTML
class CreateElements {
    body=null
    constructor(){
        console.log('CreateElement Class')
        this.body = document.querySelector('body')
    }
    __atributes(element, {id, className}){
        
        if(Array.isArray(className)){
            className.forEach(class_ => {
                element.classList.add(class_)
            });
        }
        if(id){
            element.setAttribute("id", id );
        }

        return element;
    }
    __addInBody(element,isBody){
        if(isBody){
            this.body.appendChild(element)
        }
    }
    __addContent(element,content){
       if(Array.isArray(content)){
            content.forEach(content_ => {
                element.appendChild(content_)
            });
        }
    }
    input({id, className, type, isBody}){
        let element = document.createElement('input');
        element = this.__atributes(element,{id, className})
        element.setAttribute('type',type??'text')
        this.__addInBody(element,isBody)
        return element;
    }
    button({id, className, text, isBody}, content){
        let element = document.createElement('button');
        element = this.__atributes(element,{id, className});
        element.innerText = text ?? 'Button';
        this.__addInBody(element,isBody)
        this.__addContent(element,content)
        return element;
    }
    div({id, className, html, isBody}, content){
        let element = document.createElement('div');
        element = this.__atributes(element,{ id, className});
        element.innerHTML= html ?? '';
        this.__addInBody(element, isBody)
        this.__addContent(element, content)
        return element;
        
    }
}

export default CreateElements