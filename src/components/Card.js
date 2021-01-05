import React, {useState} from 'react';

export function Card() {
    const[name, setName] = useState("Test")

    return(
        <div className="card-wrapper">
            {name || 'My Card'}
        </div>
    )
}

