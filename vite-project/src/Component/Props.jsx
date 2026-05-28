import React from 'react'

function Props(props) {
    return (
        <>
        <div style={{backgroundColor: '#ccc'}}>
            <h2>{props.name}</h2>
            <h2>{props.rollno}</h2>
            <h2>{props.course}</h2>
        </div>
        </>
    )
}
export default Props;