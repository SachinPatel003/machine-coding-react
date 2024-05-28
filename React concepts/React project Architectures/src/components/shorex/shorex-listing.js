import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { increment } from '../../redux/shorex/slice/counterSlice';
import { useGetTodoQuery } from '../../redux/shorex/api/todo';

function ShorexListing() {
  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()
  const { push } = useHistory()

  const { data, isLoading, isError } = useGetTodoQuery();

  if (isLoading) return <h1>Loading....</h1>

  if (isError) return <h1>Error....</h1>

  return (
    <div>
      <h1>ShoreX @ {count}</h1>
      <button type="button" onClick={() => push('/shorex/details')}>Move to details page</button>
      <button type="button" onClick={() => dispatch(increment())}>Inc</button>
      {data.map((d) => <h3 key={d.id}>{d.name}</h3>)}
    </div>
  )
}

export { ShorexListing }
