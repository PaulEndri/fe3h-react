import React from 'react';
import { Skill } from '../types/skill';
import { Image, Label, SemanticCOLORS } from 'semantic-ui-react';
import { Stat } from '../types/stat';

interface SkillProps {
    name: Skill | Stat,
    color?: SemanticCOLORS,
    label?: boolean,
    value?: any
}

export const SkillIcon = ({name, label, value, color = 'grey'}: SkillProps) => {
    const getSkillIcon = (name: string) => `${process.env.PUBLIC_URL}/assets/icons/${name.toLowerCase().replace(' ', '-')}.png`
    const img = <Image  height="25" width="25" inline src={getSkillIcon(name)} />;

    if (!label) {
        return img;
    }

    return (
        <Label image color={color}>
            {img}
            {value}
        </Label>
    )
}

export default SkillIcon;