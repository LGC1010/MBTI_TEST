import Image from "next/image";
import { getChampion } from "../utils/serverApi";
import Link from "next/link";

export default async function Champions() {
    const data = await getChampion();

    return (
        <div>
            Champion
            <div>
                {data.map((champ) => {
                    return (
                        <div className="flex gap-2 w-[250px] border rounded-sm" key={champ.id}>
                            <Link href={`champions/${champ.id}`}>
                                <div>{champ.id}</div>
                                <div>{champ.title}</div>
                                <Image
                                    className="object-scale-down"
                                    width={200}
                                    height={200}
                                    src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champ.image.full}`}
                                    alt={""}
                                ></Image>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
