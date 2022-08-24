import React from 'react'
import Calculator from './Calculator';

class AppContainer extends React.Component {
  render() {
    return (
      <>
        <div className='background'>
          <h1 className='title'>THIS IS YOUR TAX CALCULATOR!</h1>
            <Calculator/>
        </div>
      </>
    )
  }
}
export default AppContainer;