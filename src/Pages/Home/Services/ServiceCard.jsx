import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <>
            <div className="card w-[370px] bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: $ {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-square bg-red-500">
                            <IoIosArrowRoundForward />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;