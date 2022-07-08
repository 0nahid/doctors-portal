import chair from '../../assets/images/chair.png'
export default function Banner() {
    return (
        <div class="hero md:min-h-screen mx-auto">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="w-full lg:max-w-lg  rounded-lg shadow-2xl " alt="banner" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">GET STARTED</button>
                </div>
            </div>
        </div>
    )
}
