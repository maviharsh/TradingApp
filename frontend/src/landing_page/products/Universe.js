import React from 'react';

export default function Universe(){
    return(

        <div className='container text-center px-5'>
           <p className='fs-5'>Want to know more about our technology stack? Check out the <a href='' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
            <div className='row p-5'>       
         <h2 className='mb-4 mt-5'>The Zerodha Universe</h2>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
            
            <div className='row py-5'>
                 <div className='col-4'>
                     <img src='media/images/smallcaseLogo.png' style={{width:"70%"}}></img>
                 </div>
                 <div className='col-4'>
                     <img src='media/images/streakLogo.png' style={{width:"65%"}}></img>
                 </div>
                 <div className='col-4'>
                      <img src='media/images/sensibullLogo.svg' style={{width:"70%"}}></img>
                 </div>
            </div>
            <div className='row py-5'>
            <div className='col-4'>
                     <img src="media/images/zerodhaFundhouse.png" style={{width:"65%"}}></img>
                 </div>
                 <div className='col-4'>
                     <img src='media/images/tijori.svg' style={{width:"65%"}}></img>
                 </div>
                 <div className='col-4'>
                      <img src='media/images/dittoLogo.png' style={{width:"65%"}}></img>
                 </div>
            </div>
            <button className='px-2 btn btn-primary fs-5' style={{width:"15%",margin:"0 auto"}}>Sign up now</button>
            </div>
        </div>

    )
}