import React from 'react'
import '/src/styles/Overview.css'
import {FcReading} from 'react-icons/fc'
import {FaHandsHelping} from 'react-icons/fa'
import {BsFillHouseHeartFill} from 'react-icons/bs'

export const Overview = () => {
  return (
    <div className='overview'>
      <div className='reading'>
        <h1>Reading</h1>
        <p>
          Every week, our high school volunteers, currently on Saturdays from 7:45 to 8:25 PM PST, we read books from our little library to young students K-5.
        </p>
        <FcReading size={60}/>
      </div>
      <div className='tutoring'>
        <h1>Tutoring</h1>
        <p>
          Every week, our high school volunteers, currently on Wednesdays during high-school club time from 3:25 to 4:10 PM, we tutor kids on various subjects or help them out with schoolwork!
        </p>
        <FaHandsHelping size={60}  color="#f3d945" />
      </div>
      <div className='projects'>
        <h1>Other Projects</h1>
        <p>
          We are always participating in local outreach or partnering with other non-profit organizations to support our mission of empowering education (ALP)!
        </p>
        <BsFillHouseHeartFill size={60} color="#f34b45"/>
      </div>
    </div>
  )
}
