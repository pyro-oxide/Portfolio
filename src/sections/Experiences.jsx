import React from 'react'
import { Timeline } from '../components/Timeline'
import { experiences } from '../constants'

const Experiences = () => {
  return (
    <section id="work">
      <div className="w-full">
          <Timeline 
          data={experiences}
          />
      </div>
    </section>
  )
}

export default Experiences