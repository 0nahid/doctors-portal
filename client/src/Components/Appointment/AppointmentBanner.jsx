import { format } from 'date-fns';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
export default function AppointmentBanner() {
    const [date, setDate] = useState(new Date());
    return (
        <div class="grid grid-cols-1 justify-items-center md:flex md:justify-around md:items-center " style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
        }} >
            <div class="shadow-2xl p-2 rounded-xl">
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
                <p>You've selected :{format(date,'PP')} </p>
            </div>
            <div>
                <img class="px-5 object-cover  md:h-64" src={chair} alt="" />
            </div>

        </div>
    )
}
