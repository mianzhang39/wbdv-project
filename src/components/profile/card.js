import React from "react";

const Card =({username})=>{
    return (
        <>
            <div className='card' style={{width: '18rem', margin: '15px'}}>
                <div className='card-body'>
                    <h5 className='card-title'>
                        {username}
                    </h5>
                </div>

            </div>
        </>

    )
}

export default Card