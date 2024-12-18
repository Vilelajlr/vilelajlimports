import  { useEffect, useState } from "react";
import Slider from "react-slick";
import { getReviews } from "../../service/mockReviwes";
import { Review } from "../../service/apiTypes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ReviewsCarousel() {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await getReviews();
            setReviews(response);
        };

        fetchReviews();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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

    return (
        <section className="w-full px-5 py-10">
            <div className="my-20">
            <h1 className="text-3xl font-bold text-center text-gray-800">Avaliações dos Clientes</h1>
        </div>
            <Slider
                {...settings}
                className="flex" 
            >
                {reviews.map((review) => (
                    <div key={review.id} className="px-2 "> 
                        <div className="p-4 flex flex-col items-center w-full h-[400px] bg-white rounded-lg shadow-md">
                            <div className="flex items-center gap-10 justify-center">
                                <img
                                    src={review.user.photo}
                                    alt={review.user.name}
                                    className="w-16 h-16 rounded-full mb-4"
                                />
                                <h3 className="font-bold text-lg">{review.user.name}</h3>
                            </div>
                            <div className="w-32 h-32 my-10">
                                <img
                                    src={review.product_photo}
                                    alt={review.product}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                            <p className="text-gray-600 text-center text-sm italic">
                                "{review.comment}"
                            </p>
                            <div className="mt-2">{"⭐".repeat(review.rating)}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
