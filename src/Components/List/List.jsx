import React, { useState, useEffect } from 'react'
import Loading from '../Loading/Loading'
import Item from '../Item/Item'
import axios from 'axios'

import './List.css'

const List = () => {
    const[data, setData] = useState([])
    const fetchData = async () =>{
        try{
            const url ="https://newsapi.org/v2/top-headlines"
            const params={
                    country:'us',
                    category:'business',
                    apiKey:'0b23c084ae634168b058e767855f0354'
            }
            const response = await axios.get(url, {params:params})
            setData(response.data.articles)
            console.log("DATA", data)
        }
        catch(error){
            console.log("Error\n", error)
        }
    }
    useEffect(()=>{fetchData()
    },[])

    useEffect(() => {
        console.log("DATA", data);
    }, [data]);

  return (
    <div className="listContainer">
        {data.length > 0 ?(
            <ul className='listItem'>
                {data.map((data)=>{
                    return(
                    <li key = {data.id}>
                        <Item author={data.author} title={data.title} imageUrl={data.urlToImage} publishedAt={data.publishedAt} />
                    </li>
                    )
                })}
            </ul>
        ):(
            <span><Loading/></span>
        )}
    </div>
  )
}

export default List