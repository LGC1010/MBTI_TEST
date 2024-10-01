const DetailPage = ({
    params,
}: {
    params: {
        id: string;
    };
}) => {
    return <div>Detail 페이지 : {params.id}</div>;
};

export default DetailPage;
