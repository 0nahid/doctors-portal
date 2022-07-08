import appointment from "../../../assets/images/appointment.png"
export default function Contact() {
    return (
        <section style={{
            backgroundImage: `url(${appointment})`,
        }}
            class="rounded"
        >
            <div class="lg:w-2/6 md:w-1/2 text-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 ">
                <h1 class="text-center text-3xl mb-5">Contact US</h1>
                <div class="relative mb-4">
                    <label for="full-name" class="leading-7 text-sm ">Full Name</label>
                    <input type="text" id="full-name" name="full-name" class="w-full text-black rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm ">Email</label>
                    <input type="email" id="email" name="email" class="w-full text-black rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="relative mb-4">
                    <label for="message" class="leading-7 text-sm ">Message</label>
                    <input type="textarea" id="message" name="message" class="w-full text-black  rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">Submit</button>
            </div>
        </section>
    )
}
