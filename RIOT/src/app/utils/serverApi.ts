"use server";

import { ChampionData, ItemData } from "../types/Champion";

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
    const datas = Object.values(data.data);

    return datas;
}

export async function getChampionRotation() {
    const res = await fetch(
        "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-c99b2e5e-2c31-4db9-b299-f314e92122cf"
    );
    const data = await res.json();

    return data;
}

export async function getItemList() {
    const res = await fetch("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json");
    const data: ItemData = await res.json();
    const datas = Object.values(data.data);
    return data;
}
