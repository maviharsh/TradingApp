export default function Calculator(){
    return(
        <div className="container px-5 pt-5">
           <div className="row p-5">
              <div className="col-9">
                <div className="d-flex " style={{marginLeft:"125px"}}>
                <a href="" style={{textDecoration:"none"}} className="fs-5">Brokerage Calculator</a>
                </div>
                <ul className="mt-4">
                    <li className="mb-1 text-muted" style={{fontSize:"13px"}}>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li className="mb-1 text-muted" style={{fontSize:"13px"}}>Digital contract notes will be sent via e-mail.</li>
                    <li className="mb-1 text-muted" style={{fontSize:"13px"}}>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li className="mb-1 text-muted" style={{fontSize:"13px"}}>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li className="mb-1 text-muted" style={{fontSize:"13px"}}>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li className="text-muted" style={{fontSize:"13px"}}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                </ul>
              </div>
              <div className="col-2 text-center">
                  <a href="" style={{textDecoration:"none"}} className="fs-5">List of charges</a>
              </div>
           </div>
        </div>
    )
}