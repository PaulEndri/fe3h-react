import React from 'react'
import { IGrowthRate } from '../../../interfaces/iGrowthRate';
import { Grid, Progress, Responsive, Tab, SemanticCOLORS, } from 'semantic-ui-react';


interface Props {
    growths: IGrowthRate,
    type: 'percentage' | 'number'
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

const individualStatGrid = (name: string, percent: number, color: SemanticCOLORS, value: number) => ([
        <Grid.Column width={WIDTHS.SHORT}>
            {name}
        </Grid.Column>,
        <Grid.Column width={WIDTHS.LONG}>
            <Progress percent={percent} color={color} />
        </Grid.Column>,
        <Grid.Column width={WIDTHS.SHORT}>
            {value}
        </Grid.Column>
])
export const InitialGrowthTable = ({growths, type}: Props) => {
    const generatePercentColor = (value: number): SemanticCOLORS => {
        const RED = type === 'percentage' ? 24 : 39;
        const YELLOW = type === 'percentage' ? 49 : 64;

        if (value <= RED) {
            return 'red';
        } else if (value <= YELLOW) {
            return 'yellow';
        } else {
            return 'green';
        }
    }

    const percent = (v: number) => type === 'percentage' ? (v / 70) * 100 : v;

    return (
        <Tab.Pane>
            <Grid columns={8} className="initial-growth-table">
                {Object.keys(growths).map((key: string) =>
                    individualStatGrid(key, percent(growths[key]), generatePercentColor(growths[key]), growths[key])
                )}
            </Grid>
        </Tab.Pane>

    )
}

export default InitialGrowthTable;