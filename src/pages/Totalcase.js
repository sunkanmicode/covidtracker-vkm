import React from 'react'
import "./totalcase.css"

const Totalcase = ( {data}) => {
  return (
    <div className="totalcase">
      <h1>COVID 19 TRACKER</h1>
      <div className="totalSampleTested">
          <h6>Total Sample Tested</h6>
          <p>{data.totalSamplesTested}</p>
      </div>
      <div className="totalConfirmedcases">
          <h6>Total Confirmed cases</h6>
        <p>{data.totalConfirmedCases}</p>
      </div>
      <div className="totalActiveCases">
          <h6> Total Active Cases </h6>
        <p>{data.totalActiveCases}</p>
      </div>
      <div className="discharged">
          <h6> Total discharged </h6>
        <p>{data.discharged}</p>
      </div>
      <div className="daeth">
          <h6> Total dedath </h6>
        <p>{data.death}</p>
      </div>

    </div>
  )
}

export default Totalcase
