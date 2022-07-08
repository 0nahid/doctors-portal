import axios from 'axios';
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Service from './Service';
export default function AvailableAppointment({ date }) {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios(`services.json`)
            .then(res => {
                setServices(res.data)
            })
    }, [])
    return (
        <div>
            <h1 class="text-2xl text-primary text-center mt-5">Available Appointments on {format(date, 'PP')}  </h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                {services.map(service => <Service key={service._id} service={service} />)}
            </div>
        </div>
    )
}
