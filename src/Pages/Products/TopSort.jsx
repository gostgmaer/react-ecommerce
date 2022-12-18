import React, { useState } from 'react'
import { MdList, MdSdCard } from 'react-icons/md'
import BropDownMenu from './BropDownMenu';

const TopSort = () => {





    return (





        <div className='TopSort'>




            <div className="container">
                <div className='viewGroup'>
                    <button className="btn card"><MdSdCard></MdSdCard></button>
                    <button className="btn list"><MdList></MdList></button>
                </div>
                <div className="sortingGroup">

                    <BropDownMenu  ></BropDownMenu>
                    <BropDownMenu ></BropDownMenu>
                   
                </div>
            </div>
        </div>
    )
}

export default TopSort