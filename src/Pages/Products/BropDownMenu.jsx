import React, { useState } from 'react'

const BropDownMenu = () => {


  const [openFilter, setOpenFilter] = useState(false);
  
  return (
    <div className='BropDownMenu'>
      <div className="btn-group">
        <button type="button" onClick={() => setOpenFilter(!openFilter)} className="btn btn-listcoount" data-toggle="dropdown">Sory by</button>
        <div className={`dropdown-memu element ${openFilter ? "show" : ''}`}>
          <span className="dropdown-item" >Sort By</span>
        </div>
      </div>
    </div>
  )
}

export default BropDownMenu