import Image from "next/image";
import { Card, CardDescription, CardTitle } from "../../../components/ui/card";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: object;
};

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};

export default async function Store() {
  const products = await getProducts();
  console.log(products);

  return (
    <main>
      <div className="xl:m-20 rounded-md grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.id}>
            <div className="bg-white p-8 xs:col-span-6 sm:col-span-4 md:col-span-2 xl:col-span-1">
              <h1>${product.price}</h1>
              <div className="aspect-video relative">
                <Image
                  src={product.image}
                  fill
                  className="object-cover rounded-xl"
                  alt={product.title}
                />
              </div>
              <CardTitle className="mt-2">{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
