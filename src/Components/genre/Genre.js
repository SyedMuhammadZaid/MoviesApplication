import React from 'react'
import './Genre.scss'
import { useSelector } from 'react-redux'


const Genre = ({data}) => {
  const {genres} = useSelector((state) => state?.home)
  return (
    <div className='genres'>
      {
        data.map((id)=>{
            return (
                <div className='genre' key={id}>
                    {
                        genres[id]?.name
                    }
                </div>
            )
        })
      }
    </div>
  )
}

export default Genre
