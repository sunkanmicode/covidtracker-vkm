import React from 'react'
import "./statecase.css"

const StateCases = ({_id,state, confirmedCases, casesOnAdmission, discharged, death }) => {
  return (
    <div className="statecases">
        <div>
            <h3>{state}</h3>
        </div>
        <div>
            <h4>Confirm Cases: {confirmedCases}</h4>
        </div>
        <div>
            <h4>Cases On Admission: {casesOnAdmission}</h4>
        </div>
        <div>
            <h4>discharge: {discharged}</h4>
        </div>
        <div>
            <h4>death: {death}</h4>
        </div>

        
      
    </div>
  )
}

export default StateCases
