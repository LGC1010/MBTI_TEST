import { StaticImageData } from "next/image";

export interface ChampionData {
    type: string;
    format: string;
    version: string;
    data: {
        [championName: string]: Champion;
    };
}

export interface Champion {
    id: string;
    image: {
        full: string;
    };
    name: string;
    title: string;
}
