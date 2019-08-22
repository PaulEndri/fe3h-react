/* tslint:disable */

import React from 'react';
import { IGrowthRate } from '../../../interfaces/iGrowthRate';
import {
    Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const COLORS = [
    'red',
    'blue',
    'cyan',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'teal',
    'aqua',
];

interface Props {
    statBlocks: IGrowthRate[],
    statBlockNames: string[]
}

const CharacterRadarChart = ({statBlocks, statBlockNames}: Props) => {
    const totals = {
        HP: [],
        STR: [],
        MAG: [],
        SPD: [],
        DEX: [],
        LCK: [],
        DEF: [],
        RES: [],
        CHA: []
    }
        
    statBlocks.forEach((stat) => {
        Object.keys(stat).forEach((key) => {
            totals[key].push(stat[key]);
        })
    })
    
    const data: any = Object.keys(totals).map((statName: string) => {
        const dataPoints = {}

        totals[statName].forEach((value: any, index: number) => {
            dataPoints[index + 1] = value;
        })

        return {
            statName,
            ...dataPoints,
            fullMark: 75
        };
    })
    return (<RadarChart cx={150} cy={125} outerRadius={100} width={300} height={300} data={data}> 
        <PolarGrid />
        <PolarAngleAxis dataKey="statName" />
        <PolarRadiusAxis angle={Math.PI * 9} domain={[0, 75]} />
        {statBlockNames.map((name, idx) => (
            <Radar name={name} dataKey={idx + 1} fill={COLORS[idx]} fillOpacity={0.6} />
        ))}
        <Legend />
    </RadarChart>)
}

export default CharacterRadarChart;