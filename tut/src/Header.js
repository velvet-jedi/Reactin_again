import React from 'react'

// const Header = (props) => {
  const Header = ({title}) => {

    // const headerStyle = {        
    //         backgroundColor: 'royalblue',
    //         color: '#fff'        
    // }

  return (
    <header 
    // style = {headerStyle}
    // style={{
    //     backgroundColor: 'mediumblue',
    //     color: '#fff'
    // }}
    >   <h1>{title}</h1>
        <h3>List of favorite physics topics</h3>
    </header>
  )
}

export default Header