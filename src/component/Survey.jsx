import React from 'react'

function Survey() {
  return (
    <div className='survey' style={{backgroundImage: `url("images/AudienceBG-NEW.png")`}}>
        <div style={{textAlign:"center"}}>
        <h2 style={{fontWeight:"600", fontSize:"20px"}}>Looking for targeted responses to your surveys?</h2>
        <p style={{color:"#FEFEFF", width:"640px", fontSize:"20px", fontWeight:"300"}}>Get the responses you need in minutes with SurveyMonkey Audience, our trusted panel of more than 175 million respondents from across the globe.</p>
        <button
          style={{
            backgroundColor: "#F7F8FA",
            color: "#333E48",
            fontWeight: "600",
            padding: "10px 30px",
            margin:"20px 0px",
            borderRadius: "5px",
          }}
        >
         Learn more
        </button>
        </div>
    </div>
  )
}

export default Survey