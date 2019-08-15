import React from 'react'
import { IGrowthRate } from '../../../types/igrowthRate';
import { Grid, Progress, } from 'semantic-ui-react';

interface Props {
    growths: IGrowthRate
};

const generatePercentColor = (percent: number) => {
    if (percent <= 25) {
        return 'red';
    } else if (percent < 50) {
        return 'yellow';
    } else {
        return 'green';
    }
}

const individualStatGrid = (name: string, percent: number) => ([
        <Grid.Column width={2}>
            {name}
        </Grid.Column>,
        <Grid.Column width={4}>
            <Progress percent={percent} color={generatePercentColor(percent)} />
        </Grid.Column>,
        <Grid.Column width={2}>
            {percent}
        </Grid.Column>
])
export const InitialGrowthTable = ({growths}: Props) => {
    return (
        <Grid columns={8} className="initial-growth-table">
            {Object.keys(growths).map((key: string) => {
                return individualStatGrid(key, growths[key])
            })}
        </Grid>
    )
}

export default InitialGrowthTable;