import React from 'react'

const Total = ({parts}) => {
    var total = 0
    parts.map(part => total += part.exercises)
    return (
        <p>Total: {total}</p>
    )
}

export default Total;