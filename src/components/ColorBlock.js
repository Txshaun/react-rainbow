import React from 'react'

function ColorBlock(props){
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
        key={props.id}
            <p>{props.color}</p>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock
