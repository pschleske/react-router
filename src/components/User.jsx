import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const { id } = useParams();

    return (
        <div>
            {/* plus sign converts string to number */}
            {+id === 5 ?
                <h1>Mambo #{id}</h1> :
                <h1>User #{id}</h1>
            }
        </div>
    )
}
