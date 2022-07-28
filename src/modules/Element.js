
function Element(props) {
    return (
        <a className='element' href={props.link}>
                <figure className='element__image'>
                    <img className='element__img'src={props.image} alt="element image"/>
                </figure>
                <span className='element__title'>{props.title}</span>
                <span className='element__subtitle'>{props.subtitle}</span>
        </a>
    );
}

export default Element;