import userEvent from '@testing-library/user-event'
import React, { useEffect, useState } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component';

const Main = () => {
    const [ input , setinput] = useState([])
    const [page , setpage] = useState(1)
    const datacheck = async ()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/photos")
           setinput( await res.json())
           console.log(input);

            
           
    }
    useEffect(()=>{
        datacheck()
    },[])
    return (
        <>
      
           {input.map((ele)=>{
              return(
                  <>
              


                        
                  <img src={ele.thumbnailUrl} alt="" />
              
                  </>
              )
           })}
        </>
    )
}

export default Main
