import React, {useEffect, useState} from 'react'


import {useMostTopTechQuery} from '../../generated/graphql';
import Card from './Card';

interface OwnProps {
    value: String;
}

const CardContent: React.FC<OwnProps> = ({value}: OwnProps)=>{
   // const value = localStorage.getItem('selected')
    const { data, error, loading } = useMostTopTechQuery({variables: { queryString: `language:${value}`}, });


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }
    if (!data) {
        return <div>Select a language from drop Down </div>;
    }

    // data.search.edges?.forEach(i=> Object.keys(i.node).forEach(key=>{
    //     // @ts-ignore
    //     if(i?.node&& typeof i?.node[key]==="object"&&i.node[key]?.__typename==="Language") {
    //         // @ts-ignore
    //         languageTrend.push({value:i.node[key]?.name,label:i.node[key]?.name})
    //     }
    // }))


    return <Card data={data} />;
}
export default CardContent