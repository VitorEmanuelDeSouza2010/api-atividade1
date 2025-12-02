import s from './card.module.css'
import ttt from '/HP3.webp'

//export const Card = () => {
//    return(
//        <>
//            <img src={props.image} alt={props.name} />
//            <h2>{props.name}</h2>
//            <p>{props.species}</p>
//       </>
//    )
// }

export const Card = ({image, name, species, gender}) => {
    return(
        <div className={s.cardBackground}>
           {image ? <img className={s.cardImage} src={image} alt={name} /> : <img width={200} src={ttt} alt={name}/>}
            <h2 className={s.cardTitle}>{name}</h2>
            <p className={s.cardText}>{species}</p>
            <p className={s.cardText}>{gender}</p>
        </div>
    )
}
