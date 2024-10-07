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
    key: string;
    info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };
}

export interface RotateChampData {
    freeChampionIds: number[];
    freeChampionIdsForNewPlayers: number[];
    maxNewPlayerLevel: number;
}

export interface ItemData {
    type: string;
    data: {
        [key: string]: Item;
    };
}

export interface Item {
    name: string;
    plaintext: string;
    image: {
        full: string;
    };
}
