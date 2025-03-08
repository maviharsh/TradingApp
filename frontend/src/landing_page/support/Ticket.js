import React from 'react';

export default function Ticket(){
    return(
        <div className='container p-5'>
            <div className='row'>
                 <p className='fs-4 mb-4 text-muted'>To create a ticket, select a relevant topic</p>
                 <div className='col-4'>
                        <div className='d-flex p-3'>
                        <img src='media/images/plus-solid.svg' style={{width:"15px"}}></img><a href='' className='mx-2 fs-5' style={{textDecoration:"none",color:"black"}}>Account Opening</a>
                        </div>
                        <ul style={{listStyle:"none"}} className='d-flex flex-column gap-2'>
                            <li><a href=''className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Getting started</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Online</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Offline</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Charges</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Company, Partnership and HUF</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Non Resident Indian (NRI)</a></li>
                        </ul>
                        
                        <div className='d-flex p-3'>
                        <img src='media/images/server-solid.svg' style={{width:"15px"}}></img><a href='' className='mx-2 fs-5' style={{textDecoration:"none",color:"black"}}>Funds</a>
                        </div>
                        <ul style={{listStyle:"none"}} className='d-flex flex-column gap-2'>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Fund withdrawal</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Adding funds</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Adding bank accounts</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>eMandates</a></li>
                        </ul>
                 </div>

                 <div className='col-4'>
                 <div className='d-flex p-3'>
                 <img src='media/images/user-solid.svg' style={{width:"15px"}}></img><a href='' className='mx-2 fs-5' style={{textDecoration:"none",color:"black"}}> Your Zerodha Account</a>
                 </div>
                        <ul style={{listStyle:"none"}} className='d-flex flex-column gap-2'>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Login credentials</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Your Profile</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Account modification and segment addition</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>CMR & DP ID</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Nomination</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Transfer and conversion of shares</a></li>
                        </ul>
                    
                        <div className='d-flex p-3'>
                        <img src='media/images/o-solid.svg' style={{width:"15px"}}></img><a href='' className='mx-2 fs-5' style={{textDecoration:"none",color:"black"}}> Console</a>
                        </div>
                        <ul style={{listStyle:"none"}} className='d-flex flex-column gap-2'>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>IPO</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Portfolio</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Funds statement</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Profile</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Reports</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Referral program</a></li>
                        </ul>
                 </div>
                 
                 <div className='col-4'>
                 <div className='d-flex p-3'>
                 <img src='media/images/chart-simple-solid.svg' style={{width:"15px"}}></img><a href='' className='mx-2 fs-5' style={{textDecoration:"none",color:"black"}}>Trading and Markets</a>
                 </div>
                        <ul style={{listStyle:"none"}} className='d-flex flex-column gap-2'>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Trading FAQs</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Kite</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Margins</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Product and order types</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Corporate actions</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Kite features</a></li>
                        </ul>
 
                        <div className='d-flex p-3'>
                        <img src='media/images/coins-solid.svg' style={{width:"15px"}}></img><a href='' className='mx-2 fs-5' style={{textDecoration:"none",color:"black"}}>Coin</a>
                        </div>
                        <ul style={{listStyle:"none"}} className='d-flex flex-column gap-2'>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Understanding mutual funds and Coin</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Coin app</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Coin web</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>Transactions and reports</a></li>
                            <li><a href='' className='p-2' style={{textDecoration:"none",fontSize:"14px"}}>National Pension Scheme (NPS)</a></li>
                        </ul>
                 </div>
            </div>
        </div>
    )
}