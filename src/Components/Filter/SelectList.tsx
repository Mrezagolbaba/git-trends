import React, {useEffect, useState} from 'react'

import ReactSelect,{
    OptionTypeBase,
    Props as SelectProps,
} from 'react-select'
import makeAnimated from 'react-select/animated';
import {SearchLanguageQuery, useSearchLanguageQuery} from '../../generated/graphql';

interface Props extends SelectProps<OptionTypeBase>{
    language:SearchLanguageQuery;
}
const animatedComponents = makeAnimated();
const SelectList: React.FC<Props> = ({language, ...rest})=>{
    const [select, setSelect] = useState<{ value:string }>()

    const { data, error, loading } = useSearchLanguageQuery({
        variables: { queryString: String('language: ') },
    });

    const onChange = (e: any) => {
        const data =  e
        console.log(data)
        data.map((i:any) => {
            localStorage.setItem('selected',i.value)
        })
        // @ts-ignore
        // localStorage.setItem('selected',select)
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