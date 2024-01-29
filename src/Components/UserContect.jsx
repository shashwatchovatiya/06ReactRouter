import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserContect() {
 
    const {UserId} = useParams();

  return (
    <div className='text-4xl bg-gray-600 text-white p-4'>
      User :- {UserId}
    </div>
  )
}
