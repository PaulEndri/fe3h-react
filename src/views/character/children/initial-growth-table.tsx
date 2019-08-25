import React from "react";
import { IGrowthRate } from "../../../interfaces/iGrowthRate";
import { Grid, Progress, Responsive, Tab, SemanticCOLORS } from "semantic-ui-react";

interface Props {
    growths: IGrowthRate;
    type: "percentage" | "number" | "smallint";
}

interface iWIDTH {
    SHORT: 2 | 4;
    LONG: 8 | 4;
}

const IS_MOBILE = window.innerWidth <= Responsive.onlyMobile.maxWidth;

const WIDTHS: iWIDTH = {
    SHORT: IS_MOBILE ? 4 : 2,
    LONG: IS_MOBILE ? 8 : 4
};

const individualStatGrid = (name: string, percent: number, color: SemanticCOLORS, value: number) => [
    <Grid.Column width={WIDTHS.SHORT}>{name}</Grid.Column>,
    <Grid.Column width={WIDTHS.LONG}>
        <Progress percent={percent} color={color} />
    </Grid.Column>,
    <Grid.Column width={WIDTHS.SHORT}>{value}</Grid.Column>
];
export const InitialGrowthTable = ({ growths, type }: Props) => {
    const generatePercentColor = (value: number): SemanticCOLORS => {
        if (value <= 40) {
            return "red";
        } else if (value <= 66) {
            return "yellow";
        } else {
            return "green";
        }
    };

    const divisor = type === "percentage" ? 70 : 12;
    const percent = (v: number) => (type === "percentage" || type === "smallint" ? (v / divisor) * 100 : v);

    return (
        <Tab.Pane>
            <Grid columns={8} className="initial-growth-table">
                {Object.keys(growths).map((key: string) =>
                    individualStatGrid(
                        key,
                        percent(growths[key]),
                        generatePercentColor(percent(growths[key])),
                        growths[key]
                    )
                )}
            </Grid>
        </Tab.Pane>
    );
};

export default InitialGrowthTable;
