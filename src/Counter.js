import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,  } from './CounterSlice'

const Counter = () => {
    const count= useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
  return (
    <div>
        {count}
        <button onClick={()=>dispatch(increment())}>inc</button>
    </div>
  )
}

export default Counter