import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const Booking = () => {

    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([]);

    const url = (`http://localhost:5000/booking?email=${user?.email}`)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    const handleDelete = id => {
        const proceed = confirm('Are You sure want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('delete successfully')
                        const remaining = booking.filter(bookService => bookService._id !== id);
                        setBooking(remaining);
                    }
                })


        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/booking/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // updated state
                    const remaining = booking.filter(booking => booking._id !==id);
                    const updated = booking.find(booking=>booking._id ===id)
                    updated.status = 'confirm'
                    const newBooking = [updated, ...remaining];
                    setBooking(newBooking)
                }
            })
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">Your Booking: {booking.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Customer Name</th>
                            <th>Service Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(bookService => <BookingRow key={bookService._id} bookService={bookService}
                                handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}>
                            </BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;