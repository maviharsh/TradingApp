import React from 'react';

export default function RightSection({heading,para,link,image}){
    return(
        <div className='container p-5'>
          <div className='row'>
            <div className='col-4 p-5'>
                <h2 className='text-muted mb-4'>{heading}</h2>
                <p style={{fontSize:"17px"}}>{para}</p>
                <a href="" style={{textDecoration:"none"}}>{link}</a>
            </div>
            <div className='col-1'>

            </div>
            <div className='col-7'>
                 <img src={image} style={{width:"85%"}}></img>     
            </div>
          </div>
          </div>

    )
}