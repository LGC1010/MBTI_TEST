import { getChampionDetail } from "@/app/utils/serverApi";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

type champId = {
    params: {
        id: string;
    };
};

export const generateMetadata = ({ params }: champId) => {
    return {
        title: `${params.id}`,
        description: "챔피언 상세페이지",
    };
};

const DetailPage = async ({ params }: champId) => {
    const data = await getChampionDetail();
    const dataId = data.filter((champ) => champ.id == params.id);
    return (
        <div className="relative">
            {dataId.map((champ) => {
                return (
                    <div key={champ.id} className="bg-[#2b2a29] relative h-[92vh]">
                        <Suspense fallback={<Loading />}>
                            <Image
                                className="object-cover"
                                fill
                                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`}
                                alt={""}
                            ></Image>
                        </Suspense>
                        <div className="ps_center w-[660px]">
                            <h2 className="font-bold text-[5rem]">{champ.name}</h2>
                            <p className="mt-2 mb-2 text-[1.4rem]">{champ.title}</p>
                            <p className="text-[1.2rem] mb-[10px]">{champ.blurb}</p>
                            <ul className="text-[1rem]">
                                <li>공격력: {champ.info.attack}</li>
                                <li>방어력: {champ.info.defense}</li>
                                <li>마법력: {champ.info.magic}</li>
                                <li>난이도: {champ.info.difficulty}</li>
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DetailPage;
