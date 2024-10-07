import Image from "next/image";
import { getItemList } from "../utils/serverApi";

export default async function Page() {
    const datas = await getItemList();
    const itemed = Object.keys(datas);

    return (
        <div className="bg-[#2b2a29] text-white p-6">
            <h2 className="text-center text-[32px] font-bold mb-[20px]">아이템 목록</h2>
            <div className="grid grid-cols-5 gap-4">
                {itemed.map((key) => {
                    return (
                        <div className="border p-4 rounded-sm bg-[#0b0302]" key={key}>
                            <Image
                                className="object-cover"
                                width={200}
                                height={200}
                                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${datas[key].image.full}`}
                                alt={""}
                            ></Image>
                            <strong className="text-[20px] mb-[4px] mt-[8px] block font-bold">{datas[key].name}</strong>
                            <p className="text">{datas[key].plaintext}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
