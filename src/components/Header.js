import PropTypes from 'prop-types'

import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
       <header className='header'>
           <h1>{title}</h1>
           <h2 style={{color: 'red', backgroundColor: 'blue'}}></h2>
           <Button color='green' text='Add' onClick={onClick}/>
       </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'blue'
}

export default Header
