"use client";
import { useEffect, useState } from "react";

const fetchData = async () => {
    const res = await fetch(
        "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-8a6f112c-e35b-48d4-92ba-1a16ba20ab52"
    );
    const data = await res.json();
    console.log(data);

    return data;
};

const Rotate = () => {
    const [rotate, setRotate] = useState([]);

    useEffect(() => {
        fetchData()
            .then(setRotate)
            .catch((error) => {
                error;
            });
    }, []);
    console.log(rotate);
    return <div>Rotation</div>;
};

export default Rotate;
