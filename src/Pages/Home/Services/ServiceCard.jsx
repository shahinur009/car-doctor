import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <>
            <div className="card w-[370px] bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: $ {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/book/${_id}`}>
                            <button className="btn btn-square bg-red-500">
                                <IoIosArrowRoundForward />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;