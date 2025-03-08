import React from 'react';

export default function HeroSupport(){
    return(
        <div style={{backgroundColor:"#387ed1"}}>
        <div className='container p-5 text-light'>
            <div className='row '>
                <div className='col-6'>
                     <h5 className='mb-5'>Support Portal</h5>
                     <p className='mb-4' style={{fontSize:"23px"}}>Search for an answer or browse help topics to create a ticket</p>
                     <form class="d-flex" role="search">
                         <input class="form-control me-2" type="search" placeholder="What is an NFO and how to apply for it on Coin app?" aria-label="Search" />
                          <button class="btn btn-light p-3" type="submit">Search</button>
                      </form>
                      <div className='py-3 mb-4'>
                      <a href='' className='text-light mt-4 p-2' style={{fontSize:"17px"}}>Track account opening</a>
                      <a href='' className='text-light mt-4 p-2' style={{fontSize:"17px"}}>Track segment activation</a>
                      <a href='' className='text-light mt-4 p-2' style={{fontSize:"17px"}}>Intraday margins</a>
                      
                      <div className='mt-2'>
                      <a href='' className='text-light mt-4 p-2' style={{fontSize:"17px"}}>Kite user manual</a>
                      </div>
                      </div>
                </div>
                <div className='col-5'>
                    <div className='d-flex justify-content-end'>
                      <a href='' className='text-light pb-5 mb-5' style={{fontSize:"18px"}}>Track tickets</a>
                      </div>
                      <h5>Featured</h5>
                      <div className='p-2'>
                      <ol>
                        <li className='mb-3'><a href='' className='text-light ul' style={{fontSize:"18px"}}>Rights Entitlements listing in July 2024</a></li>
                        <li><a href='' className='text-light ul' style={{fontSize:"18px"}}>Latest Intraday leverages and Square-off timings</a></li>
                      </ol>
                      </div>
                </div>
            </div>
        </div>
        </div>
    )
}