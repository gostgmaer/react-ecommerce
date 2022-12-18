import React from 'react'
import { Data } from '../../Assets/StaticData/productFile'



const LeftFilter = () => {

  let uniqueAges = Array.from(new Set(Data?.sampleData?.map((item) => item.Categories)));
  uniqueAges  = uniqueAges.filter(function(e){return e}); 
  console.log(uniqueAges);
  return (
    <div className='LeftFilter'>
      <div className="bycategories">
        <p className='left-heading'>Filter by Categories</p>
          <ul>
            {
              uniqueAges.map((item,index)=><li key={index}>{item}</li>)
            }
          </ul>
      </div>
      <div className="byprice">
        <div className="form-group">
          <p className='left-heading'>Filter by Price</p>
          <input type="range" className="form-control field" max={10000} value={2500} min={5} />
          <input type="text" value={2400} className='form-text field' />
        </div>
      </div>
    </div>
  )
}

export default LeftFilter