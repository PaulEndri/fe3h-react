import React from 'react'
import { IGrowthRate } from '../../../types/igrowthRate';
import { Grid, Progress, Responsive, } from 'semantic-ui-react';


interface Props {
    growths: IGrowthRate
};

interface iWIDTH {
    SHORT: 2|4,
    LONG:  8|4
};

const IS_MOBILE = window.innerWidth <= Responsive.onlyMobile.maxWidth;

const WIDTHS: iWIDTH = {
    SHORT: IS_MOBILE ? 4 : 2,
    LONG: IS_MOBILE ? 8 : 4
};

const generatePercentColor = (percent: number) => {
    if (percent <= 33) {
        return 'red';
    } else if (percent <= 66) {
        return 'yellow';
    } else {
        return 'green';
    }
}

const individualStatGrid = (name: string, percent: number, value: number) => ([
        <Grid.Column width={WIDTHS.SHORT}>
            {name}
        </Grid.Column>,
        <Grid.Column width={WIDTHS.LONG}>
            <Progress percent={percent} color={generatePercentColor(percent)} />
        </Grid.Column>,
        <Grid.Column width={WIDTHS.SHORT}>
            {value}
        </Grid.Column>
])
export const InitialGrowthTable = ({growths}: Props) => {
    return (
        <Grid columns={8} className="initial-growth-table">
            {Object.keys(growths).map((key: string) => {
                return individualStatGrid(key, (growths[key] / 70) * 100, growths[key])
            })}
        </Grid>
    )
}

export default InitialGrowthTable;