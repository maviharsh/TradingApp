import React from 'react';

export default function Brokerage(){
    return(
        <div className='container px-5 mb-5 text-muted text-center'>
            <div className='row px-5 pb-5'>
                  <div className='col-4 '>
                     <img src='media/images/pricing0.svg' style={{width:"70%"}} className='mb-4'></img>
                     <h3 className='mb-4'>Free equity delivery</h3>
                     <p style={{fontSize:"17px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                  </div>

                  <div className='col-4'>
                     <img src='media/images/intradayTrades.svg' style={{width:"70%"}} className='mb-4'></img>
                     <h3 className='mb-4'>Intraday and F&O trades</h3>
                     <p style={{fontSize:"17px"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                  </div>

                  <div className='col-4 '>
                     <img src='media/images/pricingMF.svg' style={{width:"70%"}} className='mb-4'></img>
                     <h3 className='mb-4'>Free direct MF</h3>
                     <p style={{fontSize:"17px"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                  </div>
            </div>
            <hr />
        </div>
    )
}