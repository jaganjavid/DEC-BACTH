import React from 'react'

const Header = ({text, bgColor}) => {

    // console.log(props);
    const headerStyle = {
        backgroundColor:bgColor,
        color:"#ffffff"
    }

  return (
     <header style={headerStyle}>
        <div className='container'>
            <h1>{text}</h1>
        </div>
     </header>
  )
}


export default Header