import React from 'react'

const Button = (props) => {
    const {
        name
    } = props

    return (
        <div>
            <Button color="danger" outline>{name}</Button>
        </div>
    )
}

export default Button