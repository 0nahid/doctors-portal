import { format } from 'date-fns';
import React from 'react';

export default function BookingModal({ treatment, date , setTreatment }) {
    // console.log(treatment);
    const { _id, name, slots } = treatment;
    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const data = {  
            name,
            email,
            phone,
            slot,
            date,
            treatment: _id
        }
        console.log(data);
        setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-secondary">{name}</h3>
                    <form class="grid grid-col-1 gap-3 justify-items-center "
                        onSubmit={handleBooking}
                    >
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered input-secondary w-full max-w-xs" />
                        <select name="slot" class="select select-secondary w-full max-w-xs">
                            {slots.map(slot => <option  key={slot} value={slot}>{slot}</option>)}
                        </select>
                        <input required type="text" name="name" placeholder="Your name" class="input input-bordered input-secondary w-full max-w-xs" />
                        <input required type="email" name="email" placeholder="Your email" class="input input-bordered input-secondary w-full max-w-xs" />
                        <input required type="number" name="phone" placeholder="Your phone" class="input input-bordered input-secondary w-full max-w-xs" />
                        <input required type="Submit" placeholder="Type here" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </>
    )
}
