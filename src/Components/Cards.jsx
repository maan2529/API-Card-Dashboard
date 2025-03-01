import React, { useContext } from 'react';
import Card from './Card'
import { MyContext } from '../utils/Context';
import Loading from './Loading';
import { useLocation } from 'react-router-dom';
function Cards() {
    let [data] = useContext(MyContext);
    let filterdata = [...data];
    let distinct_category = data.reduce((acc, cv) => [...acc, cv.category], [])
    distinct_category = [...new Set(distinct_category)]


    const { search } = useLocation();
    const category = decodeURIComponent(search.split("=")[1])

   

    if (category != 'undefined') {
        filterdata = filterdata.filter(d => d.category === category)
        
    }


    return (
        <>
            {(filterdata.length > 0) ?
                filterdata.map((d, idx) => <Card key={idx} data={d} index={idx} ></Card>)
                : <Loading />}
        </>


    )
}

export default Cards;