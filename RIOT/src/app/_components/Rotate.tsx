"use client";
import { useEffect, useState } from "react";
import { Champion, RotateChampData } from "./../types/Champion";
import { getChampion } from "../utils/serverApi";
import Image from "next/image";
import Link from "next/link";

const getChampionRotation = async () => {
    const res = await fetch(
        "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-f42ef7ab-3d33-4cd3-844d-8c52372c879e"
    );
    const data: RotateChampData = await res.json();
    const datas = Object.values(data.freeChampionIds);
    return datas;
};

const Rotate = () => {
    const [rotateChamp, setRotateChamp] = useState<number[]>([]);
    const [champ, setChamp] = useState<Champion[]>([]);

    useEffect(() => {
        getChampionRotation().then(setRotateChamp);
        getChampion().then(setChamp);
    }, []);

    const rotateData = champ.filter((champ) => rotateChamp.includes(parseInt(champ.key)));

    return (
        <div className="bg-[#2b2a29] text-white p-6">
            <h2 className="text-center text-[32px] font-bold mb-[20px]">로테이션 챔피언</h2>
            <div className="grid grid-cols-5 gap-4">
                {rotateData.map((data) => {
                    return (
                        <div className="border rounded-sm" key={data.id}>
                            <Link className="block p-4 min-h-[250px]" href={`champions/${data.id}`}>
                                <Image
                                    className="object-scale-down"
                                    width={200}
                                    height={200}
                                    src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${data.image.full}`}
                                    alt={""}
                                ></Image>
                                <h3 className="text-[20px] mb-[4px] font-bold">{data.name}</h3>
                                <p>{data.title}</p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Rotate;
