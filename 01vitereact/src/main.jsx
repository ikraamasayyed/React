import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <>
            <App/>
            <h1>this is from MYAPP </h1>
        </>
    )
}

// const reactElement = {
//     type : 'a', // type of element 
//     props: { 
//         href:'https://google.com',
//         target: '_blank'
//     },// property which is object
//     children: 'Click me to visit google '
// }

//Creating through React & get injected by babel (transpiler)
const reactElement = React.createElement (
    'a',// 1st expected parameter is tag
    { href :'https://google.com', target: '_blank'}, // 2nd is object or attribute
    'Click me to visit google ', // children 
    <App/> // lastly Evaluated expression is expected where we inject variables
)// (type , key reference, prop)

createRoot(document.getElementById('root')).render(
    reactElement
 )// React render only one function or methode *bad practice : dont use () n call , it will work but no need*
