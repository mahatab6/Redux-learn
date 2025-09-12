import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

export default function Counter() {
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Count: {count}</h1>
    <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>0</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
    </div>
  )
}
