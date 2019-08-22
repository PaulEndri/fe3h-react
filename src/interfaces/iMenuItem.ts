export interface IMenuItem {
    name: string,
    to: string,
    key: string,
    children: IMenuItem[]
};