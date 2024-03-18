import CustomImage from "@/components/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}
const ProductsDetailes = async ({ params: { id } }: Props) => {
  try {
    const res = await fetch(
      `https://65f3d0ff105614e654a13150.mockapi.io/products/${id}`
    );
    const product = await res.json();
    return (
      <div className="max-w-5xl  mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
        <CustomImage product={product} />
        <div className="divide-2">
          <div className="space-y-2 pb-8">
            <h1 className="text-2xl md:4xl font-bold">{product.title}</h1>
            <h2 className="text-xl md:text-3xl font-bold text-gray-500">
              {product.price}$
            </h2>
            <p className="line-clamp-5 text-sm">{product?.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default ProductsDetailes;
