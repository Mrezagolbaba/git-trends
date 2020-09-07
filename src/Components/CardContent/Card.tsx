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
console.log(info)
    return(
        <div>



            {/* {} */}
            {/*})}*/}
        </div>
    )
}
export default Card