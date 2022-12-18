
import React, { useState } from 'react'
import Description from './ProductTab/Description';
import DetailsContainer from './ProductTab/DetailsContainer'; import ReviewContainer from './ProductTab/ReviewContainer';


const ProductTabContainer = () => {

    const [openTab, setOpenTab] = useState(0);
    const [tabClass, setTabClass] = useState('active');

    const opentabevent = (id) => {
        setOpenTab(id)
       // setTabClass('active')
    }


    return (
        <div className='ProductTabContainer'>
            <ul className="tabs">
                <li className={openTab === 0 ? tabClass:''} onClick={() => opentabevent(0)} >Description</li>
                <li className={openTab === 1 ? tabClass:''} onClick={() => opentabevent(1)}>Aditional Information</li>
                <li className={openTab === 2 ? tabClass:''} onClick={() => opentabevent(2)}>Review</li>
            </ul>
            <div className="tab_container">

                {openTab === 0 && <Description></Description> || openTab === 1 && <DetailsContainer></DetailsContainer> || openTab === 2 && <ReviewContainer></ReviewContainer>}
            </div>
        </div>
    )
}

export default ProductTabContainer