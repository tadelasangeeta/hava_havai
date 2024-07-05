import React from 'react'
import Dropdown from './Dropdown'
import List from './List'

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>Airports</li>
        <Dropdown
          title="All Airports"
          items={[
            'Indra Gandhi International Airport',
            'Dubai International Airport',
            'Others',
          ]}
        />
        <li>Services</li>
      </ul>
      <List
        title="Airports"
        items={[
          'Heathrow Airport',
          'Istanbul Airport',
          'Rajiv Gandhi International Airport',
        ]}
      />
      <List
        title="Country"
        items={['India', 'UAE', 'England', 'Turkey', 'Texas']}
      />
    </aside>
  )
}

export default Sidebar
