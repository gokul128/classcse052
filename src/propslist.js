import React from 'react'

function Demo(props)
{
    return(
        <>
        My name is {props.name}
        </>
    )
}
export default function List() {
    const list=["mango","orange","apple"];
    return(
        <div>{list.map((item)=><Demo name={item}></Demo>)}</div>
    )
}
