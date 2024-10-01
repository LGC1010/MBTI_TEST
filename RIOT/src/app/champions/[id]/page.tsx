// "use client";
import { getChampionDetail } from "@/app/utils/serverApi";
import Image from "next/image";

type champId = {
    params: {
        id: string;
    };
};

const DetailPage = async ({ params }: champId) => {
    const data = await getChampionDetail();
    const dataId = data.filter((champ) => champ.id == params.id);
    console.log(dataId);
    return (
        <div>
            {dataId.map((champ) => {
                return (
                    <div key={champ.id}>
                        <h2>{champ.name}</h2>
                        <p>{champ.title}</p>
                        <Image
                            className="object-scale-down"
                            width={200}
                            height={200}
                            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champ.image.full}`}
                            alt={""}
                        ></Image>
                        <p>{champ.blurb}</p>
                        <ul>
                            <li>공격력{champ.info.attack}</li>
                            <li>방어력{champ.info.defense}</li>
                            <li>마법력{champ.info.magic}</li>
                            <li>난이도{champ.info.difficulty}</li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default DetailPage;
