import { IMenuItem } from "../interfaces/iMenuItem";
import houses from "./houses";

export const MenuData: IMenuItem[] = [
    {
        name: 'Home',
        to: '/',
        key: 'home',
        children: []
    },
    {
        name: 'Houses',
        to: '/',
        key: 'houses',
        children: houses.map((house) => ({
            name: house.name,
            to: `/house/${house.stub.toLowerCase()}`,
            key: `house-${house.stub.toLowerCase()}`,
            children: []
        }))
    },
    {
        name: 'Characters',
        to: '/characters',
        key: 'characters',
        children: [
            {
                name: 'Character List',
                to: '/characters',
                key: 'characters',
                children: []
            },
            {
                name: 'Recruitment Calculator',
                to: '/recruitment',
                key: 'characters-recruitment',
                children: []
            }
        ]
    },
    {
        name: 'Extra',
        to: '/',
        key: 'extra',
        children: [
            {
                name: 'Classes',
                to: '/classes',
                key: 'classes',
                children: []
            },
            // {
            //     name: 'Lost Items',
            //     to: '/lostItems',
            //     key: 'lostItems',
            //     children: []
            // }
        ]
    }
    
];

export default MenuData;