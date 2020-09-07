import * as React from 'react';
import {SearchLanguageQuery, useSearchLanguageQuery} from '../../generated/graphql';
// import './styles.js';
import SelectList, {OwnProps} from "./SelectList";


interface Props {
    handleSelected: (newSelect: String) => void;
}
const FilterContent =(props:Props) => {
    const { data, error, loading } = useSearchLanguageQuery({variables: { queryString: `language:`},});
    console.log(data,error)
        if (loading) {
            return <div className="flex ">Loading...</div>;
        }

        if (error || !data) {
            return <div>ERROR</div>;
        }

        return <SelectList language={data} handleSelected={props.handleSelected} />


};

export default FilterContent