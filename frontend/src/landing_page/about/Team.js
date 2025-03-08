import React from 'react';

export default function Team(){
    return(
        <>
         <div className='container'>
            <div className='row p-5 '>
                <h2 className='text-center mb-5 p-5'>People</h2>
               <div className='col-1'></div> 
                <div className='col-4 text-center'>
                    <img src='media/images/nithinKamath.jpg' className='rounded-circle' style={{width:"70%"}}></img>
                   <p className='fs-4'>Nithin Kamath</p>
                   <p className='fw-light'>Founder, CEO</p>
                </div>
                <div className='col-5'>
                    <p className='text-muted'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p className='text-muted'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p className='text-muted'>Playing basketball is his zen.</p>
                    <p className='text-muted'>Connect on <a href='' style={{textDecoration:"none"}}>Homepage</a> / <a href='' style={{textDecoration:"none"}}>TradingQnA</a> / <a href='' style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
           </div>
         </div>

        </>
    )
}