
export default function Review({ reviews }) {
    const { name, designation, review, img } = reviews;
    // console.log(name);
    return (
        <div class="card w-lg bg-base-100 shadow-2xl">
            <figure class="px-10 pt-10 ">
                <img class="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src={img} alt={name} />
            </figure>
            <div class="flex justify-center items-center mt-3">
                <h2 class="card-title">{name}</h2>
                <div class="badge badge-outline mt-1 ml-1">{designation}</div>
            </div>
            <div class="card-body items-center text-center">
                <p>{review}</p>
            </div>
        </div>
    )
}
