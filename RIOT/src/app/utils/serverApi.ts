"use server";

import { Champion, ChampionData } from "../types/Champion";

export async function getChampion() {
    const res = await fetch("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/en_US/champion.json", {
        next: {
            revalidate: 10,
        },
    });
    const data: ChampionData = await res.json();
    console.log(data);
    const datas = Object.values(data.data);

    return datas;
}
