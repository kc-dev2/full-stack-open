import React from 'react'

const Total = ({parts}) => {
    const total = parts.reduce((s,{exercises}) => {
        return s + exercises
    }, 0)

    return (
        <p>Total: {total}</p>
    )
}

export default Total;