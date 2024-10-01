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
    blurb: string | null;
    key: string | number;
    info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };
}

export interface RotateChampData {
    freeChampionIds: RotateChamp;
}

export interface RotateChamp {
    id: number;
}
