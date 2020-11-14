import React, { ReactElement } from 'react'

interface Props {
    name: string
    sprites: {
        [key: string]: string
    }
}

const Spirite = ({ name, sprites }: Props): ReactElement => {
    return <img src={sprites.front_default} alt={`Sprite of ${name}`} />
}

export default Spirite
