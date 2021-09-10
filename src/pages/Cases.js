import React from 'react'
import StateCases from './StateCases'

export default function Cases( { covidList}) {
    return (
        <div>
            <h1>Nigeria Covid Tracker</h1>
            <div>
                {covidList.map((list)=>{
                    return(
                        <StateCases key={list._id} {...list} />
                    )
                })}
            </div>
        </div>
    )
}

