import React from 'react'
import { MostTopTechQuery } from '../../generated/graphql'



interface Props {
    data:MostTopTechQuery,
}

const Card: React.FC<Props> = ({data, ...rest})=>{
    if (!data.search ) {
        return <div>No trends available</div>;
    }

   const info = data.search.edges?.map(i=>{
       return i?.node
   })

    return(
        <div>
                {info?.map((i)=>{
                if(i?.__typename === "Repository"){
                   return (
                   <div className="flex justify-center items-center">
                             <span>{i.forkCount}</span>
                            <span>{i.homepageUrl!==""?i.homepageUrl:""}</span>
                            <span>{i.issues.__typename==="IssueConnection"? i.issues.totalCount:''}</span>
                   </div>
                   
                    )
                    // 
                }})}
        </div>
    )
}
export default Card