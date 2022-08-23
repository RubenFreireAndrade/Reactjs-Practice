import React from 'react'
import Calculator from './Calculator';

class AppContainer extends React.Component {
  render() {
    return (
      <div className='calculator-container'>
        <Calculator/>
      </div>
    )
  }
}

export default AppContainer;