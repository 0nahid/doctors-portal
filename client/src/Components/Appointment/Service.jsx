
export default function Service({ service, setTreatment }) {
    const { _id, name, slots } = service;
    console.log(_id, name);
    return (
        <div class="card w-96 bg-base-100 shadow-2xl text-center">
            <div class="card-body ">
                <h2 class="text-2xl font-bold">{name}</h2>
                <p>
                    {
                        slots.length > 0 ?
                            slots.map(slot => <span key={slot} class="badge badge-outline mt-1 ml-1">{slot}</span>)
                            :
                            <span class="badge badge-error badge-outline  mt-1 ml-1">Try another date or contact helpline.</span>
                    }
                </p>
                <p class="uppercase font-semibold">{slots.length} {slots.length > 1 ? 'spaces' : 'space'} avialable</p>
                <div class="card-actions justify-center">
                    <label for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)} class="btn btn-secondary text-white font-bold  modal-button">BOOK Appointment</label>
                </div>
            </div>
        </div>
    )
}
