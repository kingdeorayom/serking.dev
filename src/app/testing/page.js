async function getData() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_STEAM_API_URL}?key=${process.env.NEXT_PUBLIC_STEAM_API_KEY}&steamid=${process.env.NEXT_PUBLIC_STEAM_USER_ID}&format=json`,
        {
            next: { revalidate: 10 },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response.json();
}

export default async function Testing() {
    const data = await getData();

    console.log(data.response);

    return (
        <div className="flex flex-wrap">
            <p className="text-xs text-wrap">{JSON.stringify(data)}</p>
        </div>
    );
}
