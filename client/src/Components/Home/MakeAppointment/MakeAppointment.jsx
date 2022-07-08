import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'
export default function MakeAppointment() {
    return (
        <section style={{
            backgroundImage: `url(${appointment})`,
        }} class="flex justify-center items-center rounded">
            <div class="flex-1 hidden lg:block">
                <img class="mt-[-200px]" src={doctor} alt="Doctor" />
            </div>
            <div class="flex-1 p-5">
                <h3 class="text-xl text-primary font-bold">Appointment</h3>
                <h2 class="text-3xl text-gray-100 font-semibold mb-3">Make an Appointment Today</h2>
                <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam corporis ab atque odio sapiente, facere laboriosam. Nisi excepturi ratione sit cumque ipsam! Commodi fugit possimus similique. Cupiditate, perspiciatis quod iste harum dolor omnis assumenda! Perferendis autem soluta cupiditate in omnis!</p>
                <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary mt-4 mb-2">GET STARTED</button>
            </div>
        </section>
    )
}
