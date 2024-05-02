import Swal from "sweetalert2";

const BookingRow = ({ bookService, handleDelete, handleBookingConfirm }) => {
    const { amount, _id, customerName, status, date, service, img } = bookService;

    

    return (
        <>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="avatar">
                        <div className="rounded w-23 h-20 ">
                            {img && <img src={img} alt="image" />}
                        </div>
                    </div>
                </td>
                <td>
                    {customerName}
                </td>
                <td>{service}</td>
                <td>{date}</td>
                <td>{amount}</td>
                <th>
                    {
                        status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span>  :
                        <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
                </th>
            </tr>
        </>
    );
};

export default BookingRow;