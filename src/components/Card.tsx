import '../style/global.css'

type CardProps = {
    name: string;
    picture: string;
    abilities: string[];
}

export default function Card ({ name, picture, abilities }: CardProps) {
    return (
        <div className="Card">
            <link rel="stylesheet" href="/static/global.css" />
            <h2 class="Card__name">{name}</h2>
            <img class="Card__picture" src={picture} alt={`profile picture of ${name}`} />
            <ul class="Card__abilities">
            {
                abilities.map(ability => (
                    <li class="Card__ability">{ability}</li>
                ))
            }
            </ul>
        </div>
    )
}