import React from 'react';

export default function HeroHome(){
    return(
        <div className='container p-5'>
            <div className='row text-center'>       
                 <img className='mb-3' src='media/images/homeHero.png' style={{width:"60%",margin:"0 auto"}} />
                  <h1 className='mt-5'>Invest in everything</h1>
                  <p className='pb-4 fs-4'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                  <button className='p-2 btn btn-primary fs-5' style={{width:"15%",margin:"0 auto"}}>Sign up now</button>
            </div>
        </div>
    )
}