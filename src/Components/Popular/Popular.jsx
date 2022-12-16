import React from 'react'
import { popularData } from '../../Assets/StaticData/Data'
import Card from './popularcard/Card'
import './Popular.scss'

const Popular = () => {
  return (
    <div className='Popular-categories'>
       {popularData.map((item)=> <Card key={item.id} item={item} ></Card>)}
    </div>
  )
}

export default Popular