import React, {useState} from 'react'

const Dropdown = ({title, items}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen ? '↑' : '↓'}
      </div>
      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
