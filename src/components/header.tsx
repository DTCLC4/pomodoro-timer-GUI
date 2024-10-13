import React from 'react'

// Header component accepts a 'title' prop to display
const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    // Render the title inside an h1 element
    <h1>{title}</h1>
  )
}

export default Header
