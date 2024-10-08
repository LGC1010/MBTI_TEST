import Image from "next/image";
import champ from "/public/img/champ.jpg";
import rotate from "/public/img/rotate.jpg";
import item from "/public/img/item.jpg";
import Link from "next/link";

export default function Home() {
    return (
        <div className="bg-[#2b2a29] flex items-center justify-center v min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div>
                <Link href={"/champions"}>
                    <Image width={600} src={champ} alt="" />
                    <p className="txt1">챔피언 목록</p>
                </Link>
            </div>
            <div>
                <Link href={"/items"}>
                    <Image width={600} src={item} alt="" />
                    <p className="txt1">아이템 목록</p>
                </Link>
            </div>
            <div>
                <Link href={"/rotation"}>
                    <Image width={600} src={rotate} alt="" />
                    <p className="txt1">챔피언 로테이션</p>
                </Link>
            </div>
        </div>
    );
}
