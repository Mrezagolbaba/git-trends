import * as React from 'react';
import {useSearchLanguageQuery} from '../../generated/graphql';
// import './styles.js';
import SelectList from "./SelectList";


const FilterContent =() => {
    const { data, error, loading } = useSearchLanguageQuery();
        if (loading) {
            return <div className="flex ">Loading...</div>;
        }

        if (error || !data) {
            return <div>ERROR</div>;
        }


        return <SelectList language={data} />


};

export default FilterContent