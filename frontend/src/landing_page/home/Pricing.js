import React from 'react';

export default function Pricing(){
    return(
        <div className='container '>
           <div className='row'>
                <div className='col-5 p-5 mx-5'>
                    <h1 className='mb-4'>Unbeatable pricing</h1>
                    <p className='mb-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=''>See pricing -></a>
                </div>
                <div className='col-5 p-5'>
                    <div className='row'>
                     <div className='text-center col-6 border border-dark rounded p-4'>
                        <h1>₹0</h1>
                        <p>Free equity delivery and direct mutual funds</p>
                     </div>
                     <div className='text-center col-6 border border-dark rounded p-4'>
                        <h1>₹20</h1>
                        <p>Intraday and F&O</p>
                     </div>
                     </div>
                </div>
           </div>
        </div>
    )
}