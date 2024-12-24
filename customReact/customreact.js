function customRender ( reactElement,container){
    const domElement = document.createElement(reactElement.type) //creating DOM Element <a>
    domElement.innerHTML=reactElement.children // set the inner HTML content
    /*domElement.setAttribute ('href',reactElement.props.href)  //(key,value)
    domElement.setAttribute('target',reactElement.props.target) */

    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}// container for where to be injected



const reactElement = {
    type : 'a', // type of element 
    props: { 
        href:'https://google.com',
        target: '_blank'
    },// property which is object
    children: 'Click me to visit google '
}

const mainContainer = document.querySelector('#root')

customRender (reactElement,mainContainer) 
//
// render method(add/inject) reactElement into the root i.e mainContainer