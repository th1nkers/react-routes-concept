import React from 'react'
import { Link } from 'react-router-dom'

const p = [
    {id: 'p1', title: '1'},
    {id: 'p3', title: '3'},
    {id: 'p2', title: '2'}
]

const Products = () => {
  return (
    <>
    <h1>The Products Page</h1>
    <ul>
      {p.map((p)=>{
        return <li key={p.id}>
            <Link to={p.id}>{p.title}</Link>
        </li>
      })}
    </ul>
    </>
  )
}

export default Products