import { useEffect, useState } from "react";
import { getProduct } from "../../service/productApi";
import { Product } from "../../service/apiTypes";

import { CiSquarePlus } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/action";

import "./style.css";
import { useNavigate } from "react-router";

export function ProductsCard() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        getProduct().then((response) => {
            if (response) {
                setProducts(response.results);
                setIsLoading(false);
            } else {
                console.log("Erro ao buscar produtos");
            }
        });
    }, []);

    const truncateTitle = (title: string) =>
        title.length > 20 ? title.substring(0, 35) + "..." : title;

    const handleAddToCart = (product: Product) => {
        dispatch(addProductToCart(product));
        console.log("Produto adicionado:", product); // Debug
    };

    const handleDetails = (product: Product) => {
        navigate(`/products/${product.id}`);
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (isLoading) {
        return <div className="loading"></div>;
    }

    return (
        <div className="py-20 pb-32">
            <h1 className="font-bold text-4xl text-center mb-20">Produtos</h1>

            <form className="w-[90%] sm:w-[30%] mb-10">
                <div className="flex relative pl-5 ">
                    <input
                        type="text"
                        placeholder="Pesquisar"
                        className="border-2 border-gray-300 rounded-md p-2 outline-none w-full"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <IoSearch
                        size={25}
                        className="absolute right-2 top-[50%] translate-y-[-50%]"
                    />
                </div>
            </form>

            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10 px-5">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col gap-8 items-center justify-center min-w-[250px] rounded-md py-10 drop-shadow shadow-lg transition hover:scale-105"
                    >
                        <div className="w-[130px] h-[130px]">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="text-start w-[80%] flex flex-col gap-3">
                            <h2 className="font-bold text-xl font-roboto">
                                {truncateTitle(product.title)}
                            </h2>
                            <span className="font-bold text-[1rem] font-roboto">
                                R$ {product.price.toFixed(2)} à vista
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <button
                                className="px-4 py-2 bg-black text-white font-bold rounded-md"
                                onClick={() => handleDetails(product)}
                            >
                                Ver Detalhes
                            </button>
                            <button onClick={() => handleAddToCart(product)}>
                                <abbr title="Adicionar ao Carrinho">
                                    <CiSquarePlus size={45} />
                                </abbr>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
