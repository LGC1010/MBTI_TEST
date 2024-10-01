// "use client";
// import { useEffect, useState } from "react";
// import { Champion } from "./../types/Champion";
import { getChampion } from "../utils/serverApi";
import Image from "next/image";

const Champion = async () => {
    // const [champion, setChampion] = useState<Champion[]>([]);
    // useEffect(() => {
    //     getChampion().then((data) => {
    //         const championArray = Object.values(data);
    //         setChampion(championArray);
    //     });
    // }, []);
    // console.log(champion);
    // const championArray = Object.values(data);
    // console.log(championArray);

    const data = await getChampion();

    return (
        <div>
            Champion
            <div>
                {data.map((champ) => {
                    return (
                        <div className="flex gap-2 w-[250px] border rounded-sm" key={champ.id}>
                            <div>{champ.id}</div>
                            <div>{champ.title}</div>
                            <Image
                                className="object-scale-down"
                                width={200}
                                height={200}
                                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champ.image.full}`}
                                alt={""}
                            ></Image>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Champion;
