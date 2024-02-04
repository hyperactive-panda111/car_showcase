import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean; 
};

export interface SearchManufacturerProps {
    selected: string;
    setSelected: (manufacturer: string) => void;
};

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    model: string;
    transmission: string;
    make: string;
    year: number;
};

export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
};

export interface optionProps {
    title: string;
    value: string;
};

export interface CustomFilterProps {
    title: string;
    options: optionProps[];
    setFilter: any;
};

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (newLimit: number) => void;
};