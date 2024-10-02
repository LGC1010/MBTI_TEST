"use client";
import { useEffect, useState } from "react";
import { getItemList } from "../utils/serverApi";
import { Item, ItemData } from "../types/Champion";
import Image from "next/image";

const fetchData = async () => {
    const res = await fetch("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json");
    const data: ItemData = await res.json();
    const datas = Object.values(data.data);
    return datas;
};

export default function Page() {
    const [state, setState] = useState<Item[]>([]);
    // const data = getItemList();
    useEffect(() => {
        fetchData().then(setState);
    }, []);

    console.log(state);

    return (
        <div>
            {state.map((item) => {
                return (
                    <div>
                        {item.name}
                        <Image
                            className="object-scale-down"
                            width={200}
                            height={200}
                            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
                            alt={""}
                        ></Image>
                        {item.plaintext}
                    </div>
                );
            })}
        </div>
    );
}
