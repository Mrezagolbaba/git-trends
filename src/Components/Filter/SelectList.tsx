import React, {useEffect, useState} from 'react'

import ReactSelect,{
    OptionTypeBase,
    Props as SelectProps,
} from 'react-select'
import makeAnimated from 'react-select/animated';
import {SearchLanguageQuery, useMostTopTechQuery, useSearchLanguageQuery} from '../../generated/graphql';

export interface OwnProps {
    handleIdChange: (newSelect: String) => void;
}

interface Props extends OwnProps {
    language: SearchLanguageQuery;
}
const animatedComponents = makeAnimated();
const SelectList: React.FC<Props> = ({language})=>{

    const [select, setSelect] = useState<{ value:string }>()

    const { data, error, loading } = useSearchLanguageQuery({
        variables: { queryString: String('language: ') },
    });

    const onChange = (e: any) => {
        const data =  e
        console.log(data)
        data.map((i:any) => {
            localStorage.setItem('selected',i.value)
            handleIdChange(i.value)
        })
    };
    // @ts-ignore
    const languageTrend:object[] = []

   language.search.edges?.forEach(i=> Object.keys(i?.node as String).forEach(key=>{
       // @ts-ignore
            languageTrend.push({value:i.node.nameWithOwner,label:i.node.nameWithOwner })

    }))


    return(
        <ReactSelect
            options={languageTrend}
            components={animatedComponents}
            isMulti={true}
            className="basic-multi-select "
            classNamePrefix="select"
            onChange={onChange}
        />
    )
}
export default SelectList