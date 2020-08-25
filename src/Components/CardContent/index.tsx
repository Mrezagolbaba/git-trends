import React, {useEffect, useState} from 'react'


import {useMostTopTechQuery} from '../../generated/graphql';
import Card from './Card';

interface Props {
    // repo:Array<any>,
    // data:MostTopTechQuery;
}

const CardContent: React.FC<Props> = ()=>{
   const value = localStorage.getItem('selected')
    const { data, error, loading } = useMostTopTechQuery({variables: { queryString: `language:${value}`}, });
    // @ts-ignore
   const {val,setval}= useState('')

    window.storage.onChanged.addListener(callback)

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