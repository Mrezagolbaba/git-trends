import React, {useEffect, useState} from 'react'


import {useMostTopTechQuery,MostTopTechQueryVariables,MostTopTechQuery} from '../../generated/graphql';
import Card from './Card';

interface OwnProps {
    value: string;
}

const CardContent: React.FC<OwnProps> = ({value}: OwnProps)=>{
   // const values = localStorage.getItem('selected')
    const { data, error, loading,refetch } = useMostTopTechQuery({variables: { queryString: `language:${value}`}, });
    React.useEffect(() => {
        refetch();
    }, [value]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }
    if (!data) {
        return <div>Select a language from drop Down </div>;
    }




    return <Card data={data} />;
}
export default CardContent