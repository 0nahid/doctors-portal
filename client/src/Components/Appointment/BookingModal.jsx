import React from 'react';

export default function BookingModal({ treatment, date }) {
    console.log(treatment);
    const { _id, name, slots } = treatment;
    return (
        <>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-secondary">{name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </>
    )
}
