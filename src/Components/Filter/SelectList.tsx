import React, { useEffect, useState } from "react";

import ReactSelect, {
    OptionTypeBase,
    Props as SelectProps,
    ValueType,
    ActionMeta,
} from "react-select";

import makeAnimated from "react-select/animated";

import {
    SearchLanguageQuery,
    useMostTopTechQuery,
    useSearchLanguageQuery,
} from "../../generated/graphql";

export interface OwnProps {
    handleSelected: (newSelect: String) => void;
}

interface Props extends OwnProps {
    language: SearchLanguageQuery;
}

const animatedComponents = makeAnimated();

type IOptionType  = {
    label: string;
    value: string;
}
const SelectList: React.FC<Props> = ({ language, handleSelected }) => {
    const [select, setSelect] = useState<{ value: string }>();

    const { data, error, loading } = useSearchLanguageQuery({
        variables: { queryString: String("language: ") },
    });

    const onChange = (value: ValueType<IOptionType>, _: ActionMeta<IOptionType>)=>{
       
            (value as IOptionType[])?.forEach((item) => {
                let string = item.value;
                let result = string.substring(string.lastIndexOf("/") + 1);
                console.log(result);
                localStorage.setItem("selected", result);
                handleSelected(result);
            });
        

    };

    const languageTrend: object[] = [];

    language.search.edges?.forEach((edge) => {
        if (typeof edge?.node === "object" && edge?.node !== null) {
            return Object.keys(edge?.node).forEach((key) => {
                if(edge?.node?.__typename === "Repository"){
                    languageTrend.push({
                        value: edge?.node?.nameWithOwner,
                        label: edge?.node?.nameWithOwner,
                    });
                }
            });
        }
    });

    return (
        <ReactSelect
            options={languageTrend}
            components={animatedComponents}
            isMulti
            className="basic-multi-select "
            classNamePrefix="select"
            onChange={onChange}
        />
    );
};
export default SelectList;

