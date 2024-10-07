"use client";
import { useEffect, useState } from "react";
import { Champion, RotateChamp, RotateChampData } from "./../types/Champion";
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
    const [rotateChamp, setRotateChamp] = useState<Number[]>([]);
    const [champ, setChamp] = useState<Champion[]>([]);

    useEffect(() => {
        getChampionRotation().then(setRotateChamp);
        getChampion().then(setChamp);
    }, []);
    console.log(rotateChamp);

    const rotateData = champ.filter((champ) => rotateChamp.includes(Number(champ.key)));
    console.log(champ);
    // console.log(rotateData);

    return (
        <div>
            {rotateData.map((data) => {
                return (
                    <div key={data.id}>
                        <Link href={`champions/${data.id}`}>
                            <Image
                                className="object-scale-down"
                                width={200}
                                height={200}
                                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${data.image.full}`}
                                alt={""}
                            ></Image>
                            <h3>{data.name}</h3>
                            <p>{data.title}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Rotate;
