
function customrender(reactEle,maincontainer){
    const ele=document.createElement(reactEle.type)
    ele.innerHTML=reactEle.children
    // ele.setAttribute('href',reactEle.props.href)
    // ele.setAttribute('target',reactEle.props.target)
    for (const prop in reactEle.props) {
        if (prop==='children') continue;
        
        ele.setAttribute(reactEle.props[prop])
    }
    maincontainer.appendChild(ele)
}
const reactEle={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'click me to visit'
}
const root=document.querySelector('#root');
customrender(reactEle,root)