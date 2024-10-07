import Image from "next/image";
import { getItemList } from "../utils/serverApi";

export default async function Page() {
    const datas = await getItemList();
    const itemed = Object.keys(datas);

    return (
        <div>
            {itemed.map((key) => {
                return (
                    <div key={key}>
                        {datas[key].name}
                        <Image
                            className="object-scale-down"
                            width={200}
                            height={200}
                            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${datas[key].image.full}`}
                            alt={""}
                        ></Image>
                        {datas[key].name}
                        {datas[key].plaintext}
                    </div>
                );
            })}
        </div>
    );
}
