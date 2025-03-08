import React from 'react';

export default function Stats(){
    return(
        <div className='container mt-5 px-5'>
              <div className='row'>
                   <div className='col-6 p-5'>
                        <h2 className='mb-5'>Trust with confidence</h2>
                        <h4>Customer-first always</h4>
                        <p className='mb-5'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments. </p>
                       <h4>No spam or gimmicks</h4>
                        <p className='mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                       <h4>The Zerodha universe</h4>
                       <p className='mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.                       </p>
                         <h4>
                         Do better with money</h4>
                         <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.                         </p>
                   </div>
                   
                   <div className='col-6 p-5'>
                       <img src='media/images/ecosystem.png' style={{width:"100%"}} className='float-right mb-3' alt='Ecosystem' />
                       <div className='text-center'>
                           <a className='mx-3'>Explore our products -> </a>
                           <a className='mx-3'>Try Kite demo -> </a>
                       </div>
                   </div>
              </div>
        </div>
    )
}