import React, { useState, useEffect } from 'react'
import { MostTopTechQuery } from '../../generated/graphql'
import StyledCard from './styles'



interface Props {
    data:MostTopTechQuery,
}

const Card: React.FC<Props> = ({data, ...rest})=>{
    const [card, setCard] = useState({})
    if (!data.search ) {
        return <div>No trends available</div>;
    }

   const info = data.search.edges?.map(i=>{
       return i?.node
   })
//    useEffect(() => {
//      setCard({...card,info})
//    }, [info])

    return(
        <div>
                {info?.map((i)=>{
                if(i?.__typename === "Repository"){
                   return (
                   <StyledCard>
                       <p>Home Page:</p><span>{i.homepageUrl!==""?i.homepageUrl:""}</span>

                            <p>forkCount:</p> <span>{i.forkCount}</span>
                            <p>total issue:</p><span>{i.issues.__typename==="IssueConnection"? i.issues.totalCount:''}</span>
                   </StyledCard>
                   
                    )
                    // 
                }})}
        </div>
    )
}
export default Card