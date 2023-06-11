import Image from "next/image";

type Game = {
  id: number;
  background_image: string;
  rating: number;
  name: string;
};

const getGames = async (): Promise<Game[]> => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();
  return data.results;
};

export default async function Shop() {
  const games = await getGames();
  return (
    <div className="xl:m-20 rounded-md grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {games.map((game) => (
        <div
          className="bg-white xs:col-span-6 sm:col-span-4 md:col-span-2 xl:col-span-1"
          key={game.id}
        >
          <h1>{game.name}</h1>
          <p className="font-bold text-sm mb-4">Rating: {game.rating}</p>
          <div className="aspect-video relative">
            <Image
              src={game.background_image}
              fill
              className="object-cover rounded-md"
              alt={game.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
