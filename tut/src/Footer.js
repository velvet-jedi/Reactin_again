import React from 'react'

const Footer = ({length}) => {

    const today = new Date();

  return (
    <footer>
        <p>{length} shelf {length === 1 ? 'book' : 'books'}</p>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer