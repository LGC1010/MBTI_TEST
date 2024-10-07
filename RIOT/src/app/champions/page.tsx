import Image from "next/image";
import { getChampion } from "../utils/serverApi";
import Link from "next/link";

export default async function Champions() {
    const data = await getChampion();

    return (
        <div className="bg-[#2b2a29] text-white p-6">
            <h2 className="text-center text-[32px] font-bold mb-[20px]">챔피언 목록</h2>
            <div className="grid grid-cols-5 gap-4">
                {data.map((champ) => {
                    return (
                        <div className="border rounded-sm" key={champ.id}>
                            <Link className="block p-4 min-h-[250px]" href={`champions/${champ.id}`}>
                                <div className="text-[20px] mb-[4px] font-bold">{champ.id}</div>
                                <div>{champ.title}</div>
                                <div className="flex justify-center">
                                    <Image
                                        className="object-scale-down"
                                        width={160}
                                        height={160}
                                        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champ.image.full}`}
                                        alt={""}
                                    ></Image>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
