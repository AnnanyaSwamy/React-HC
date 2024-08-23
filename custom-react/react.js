function customRender(reactElement,reactContainer){
    // const newElement=document.createElement(reactElement.type);
    // newElement.innerHTML=reactElement.children;
    // newElement.setAttribute('href', reactElement.props.href);
    // newElement.setAttribute('type', reactElement.props.type);
    // reactContainer.appendChild(newElement);
    ///////////////////////////////////////////////////////
    const newElement=document.createElement(reactElement.type);
    for(prop in reactElement.props){
        newElement.setAttribute(prop, reactElement.props[prop]);
    }
    if(reactElement['children']!==undefined){
        newElement.innerHTML=(reactElement.children);
    }
    reactContainer.appendChild(newElement);
}


const reactElement={
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        type: '_blank'
    },
    children: 'Click me to go to Google'
}

const reactContainer=document.querySelector('#root');
customRender(reactElement, reactContainer);