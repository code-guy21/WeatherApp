import _ from 'lodash';
import React from 'react';
import { Sparklines,SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

const average = (data) => {
    return _.round(_.sum(data)/data.length);
}

export default ({data,color,units}) => {

    return (
        <div>
            <Sparklines height={120} width={180} data={data} limit={5}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>Avg : {average(data)} {units}</div>
        </div>
    );
}