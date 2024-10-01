"use server";

import { ChampionData } from "../types/Champion";

// 챔피언 목록
export async function getChampion() {
    const res = await fetch("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json", {
        next: {
            revalidate: 10,
        },
    });
    const data: ChampionData = await res.json();
    const datas = Object.values(data.data);

    return datas;
}

// 챔피언 디테일
export async function getChampionDetail() {
    const res = await fetch("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json", {});
    const data: ChampionData = await res.json();
    // console.log(data);
    const datas = Object.values(data.data);

    return datas;
}
