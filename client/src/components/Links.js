import React from 'react'

const Links = ({menuState}) => {
  return (
    <div className={menuState ? 'Links-div' : 'Links-div-unmount'}>
        {/* <a href="http://" target="_blank" rel="noopener noreferrer">Home</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">About</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">Contact Us</a> */}
    </div>
  )
}

export default Links