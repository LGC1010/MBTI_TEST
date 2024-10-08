"use server";

import { ChampionData, ItemData } from "../types/Champion";

const api = process.env.NEXT_PUBLIC_RIOT_API_KEY;

// API 버전
export async function getVersion() {
    const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
    const data = await res.json();
    return data;
}

// 챔피언 목록
export async function getChampion() {
    const version = await getVersion();
    const lastVersion = version[0];
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${lastVersion}/data/ko_KR/champion.json`, {
        next: {
            revalidate: 86400,
        },
    });
    const data: ChampionData = await res.json();
    const datas = Object.values(data.data);

    return datas;
}

// 챔피언 디테일
export async function getChampionDetail() {
    const version = await getVersion();
    const lastVersion = version[0];
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${lastVersion}/data/ko_KR/champion.json`, {});
    const data: ChampionData = await res.json();
    const datas = Object.values(data.data);

    return datas;
}

export async function getChampionRotation() {
    const res = await fetch(
        `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
    );
    const data = await res.json();

    return data;
}

export async function getItemList() {
    const version = await getVersion();
    const lastVersion = version[0];
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${lastVersion}/data/ko_KR/item.json`);
    const data: ItemData = await res.json();
    const datas = data.data;
    return datas;
}
