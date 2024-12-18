import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Product } from "../../service/apiTypes";

import { FaCartPlus } from "react-icons/fa";
import { addProductToCart } from "../../redux/cart/action";
import { useDispatch } from "react-redux";

interface ProductWithDetails extends Product {
    pictures: {
        id: string;
        url: string;
        secure_url: string;
        size: string;
        max_size: string;
    }[];
    attributes: {
        id: string;
        name: string;
        value_id: string | null;
        value_name: string;
    }[];
}

export function ProductsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductWithDetails>();
    const [images, setImages] = useState<ProductWithDetails["pictures"]>([]);
    const [imageCurrent, setImageCurrent] = useState("");

    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
            const data = await response.json();
            setProduct(data);
            setImages(data.pictures);
            setImageCurrent(data.pictures[0].secure_url);
            setIsLoading(false);
        }

        fetchProduct();
    }, [id]);

    const handleImageCurrent = (event: React.MouseEvent<HTMLImageElement>) => {
        const target = event.target as HTMLImageElement;
        setImageCurrent(target.src);
    };


    const formatPrice = (price: number) => {
        return price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }

    const handleAddToCart = () => {
        if (product) {
            dispatch(addProductToCart(product));
        }
    }

    

    return (
        <main className="pt-[10dvh] min-h-[100dvh]">
            {  isLoading ? ( <div className="loading"></div>) : (<div className=" py-14 md:py-32">
                {product && (
                    <div className="w-full max-w-[1440px] mx-auto px-4">
                        <div className="flex md:flex-row flex-col gap-8">
                            <div>
                                <div className="bg-backgound-whiteBack p-4 rounded-md">
                                    <div className="flex-1">
                                        <div className="w-full h-[200px] sm:h-[500px] rounded-lg flex items-center justify-center">
                                            <img
                                                src={imageCurrent}
                                                alt={product.title}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 mt-4">
                                        {images.map((picture) => (
                                            <img
                                                key={picture.id}
                                                src={picture.secure_url}
                                                alt={`Thumbnail of ${product.title}`}
                                                className={` w-[40px] h-[40px]   md:w-[80px] md:h-[80px] object-cover  rounded-md cursor-pointer ${imageCurrent === picture.secure_url ? "border-blue-500 border-2" : ""
                                                    }`}
                                                onClick={handleImageCurrent}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h1 className="text-2xl font-bold">{product.title}</h1>
                                <p className="text-xl text-gray-600 mt-14">
                                    <span className="text-green-600 font-semibold">{formatPrice(product.price)} à vista</span>{" "}
                                    <span className="text-sm block">(ou {formatPrice(product.price / 12)} em 12x sem juros)</span>
                                </p>


                                <div className="flex items-center justify-start gap-4 mt-20">
                                    <button className="py-4 px-2 bg-green-400 rounded-md font-bold font-roboto">
                                        Comprar
                                    </button>
                                    <button className="flex items-center justify-center gap-2 py-4 px-2 bg-backgound-whiteBack rounded-md font-bold font-roboto" onClick={handleAddToCart}>
                                        Adicionar ao carrinho <FaCartPlus size={20} color="blue"/>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="mt-20">
                            <h2 className="text-xl font-bold">Atributos do Produto</h2>
                            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                {product.attributes.map((attribute) => (
                                    <div key={attribute.id} className="flex flex-col gap-2">
                                        <span className="font-bold text-xl font-roboto">{attribute.name}</span>
                                        <span className="text-md">{attribute.value_name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        

                    </div>




                )}
            </div>) }
        </main>
    );
}
