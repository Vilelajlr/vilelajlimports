import { useEffect, useState } from "react";
import { Product } from "../../service/apiTypes";
import { getProduct } from "../../service/productApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";

export function MaisVendas() {
  const [maisVendidos, setMaisVendidos] = useState<Product[]>([]);

  const navigate = useNavigate();



  const handleDetails = (product: Product) => {
    navigate(`/products/${product.id}`);
};

  useEffect(() => {
    const handleMaisVendidos = async () => {
      const response = await getProduct();

      if (response) {
        const maisVendidos = response.results
          .sort((a: Product, b: Product) => b.sold_quantity - a.sold_quantity)
          .slice(0, 7);
        setMaisVendidos(maisVendidos);
        console.log(maisVendidos);
      }
    }

    handleMaisVendidos();
  }, []);

  // Configurações do React Slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Função para limitar o título
  const truncateTitle = (title: string) => {
    return title.length > 20 ? title.substring(0, 20) + "..." : title;
  };

  return (
    <section className="w-full py-10">


        <div className="my-20">
            <h1 className="text-3xl font-bold text-center text-gray-800">Mais Vendidos</h1>
        </div>



      <Slider {...settings}>
        {maisVendidos.map((maisVendido, index: number) => (
          <div key={index} className="p-2 cursor-pointer" onClick={() => handleDetails(maisVendido)}>
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
              <div className="w-[130px] h-[130px]">
                <img
                  src={maisVendido.thumbnail}
                  alt={maisVendido.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h1 className="text-lg font-semibold mt-2 text-center text-gray-800">
                {truncateTitle(maisVendido.title)}
              </h1>
              <span className="text-green-500 font-bold mt-1">
                R$ {maisVendido.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
