import React from 'react'
import { useHistory } from 'react-router-dom';
import { useGetTodoQuery } from '../../redux/shorex/api/todo';

function ShorexDetail() {
  const { push } = useHistory()

  const { data, isLoading, isError } = useGetTodoQuery();

  if (isLoading) return <h1>Loading....</h1>

  if (isError) return <h1>Error....</h1>

  return (
    <div>
      <h1>Shorex Detail</h1>

      <button type="button" onClick={() => push('/shorex/listing')}>Move to listing page</button>
      {data.map((d) => <h3 key={d.id}>{d.name}</h3>)}
    </div>
  )
}

export { ShorexDetail }
