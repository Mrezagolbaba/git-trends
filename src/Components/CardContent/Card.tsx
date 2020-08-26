import React from 'react'
import { MostTopTechQuery } from '../../generated/graphql'



interface Props {
    data:MostTopTechQuery,
}

const Card: React.FC<Props> = ({data, ...rest})=>{
    if (!data.search ) {
        return <div>No trends available</div>;
    }

    return(
        <div>
            <p>{data.search.repositoryCount}</p>
        </div>
    )
}
export default Card