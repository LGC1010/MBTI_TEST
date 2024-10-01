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
    info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };
}
