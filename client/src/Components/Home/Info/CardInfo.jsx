
export default function CardInfo({ img, cardTitle, bg }) {
    return (
        <div class={`card lg:card-side shadow-xl bg-accent text-white p-5 ${bg} `}>
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    )
}
