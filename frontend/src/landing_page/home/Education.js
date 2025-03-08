import React from 'react';

export default function Education(){
    return(
        <div className='container p-5 mb-5'>
           <div className='row'>
                  <div className='col-6 py-5 p-5'>
                      <img src='media/images/education.svg' style={{width:"80%"}} ></img>
                  </div>
                  <div className='col-6 p-5'>
                         <h4 className='mb-4'>Free and open market education</h4>
                         <p className='mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                         <a href=''>Varsity -></a>
                         <p className='mt-4 mb-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href=''>TradingQ&A -></a>
                  </div>
           </div>
        </div>
    )
}