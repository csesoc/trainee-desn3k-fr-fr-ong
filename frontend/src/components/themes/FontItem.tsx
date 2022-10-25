interface FontItemProps {
    fontFamily: string
}

const FontItem = (props: FontItemProps) => {
    const changeFontBody = () => {
        const body = document.querySelector('html'); 
        if (body) {
            body.style.fontFamily = props.fontFamily;
        }
    }
    return (
        <div className="font-item" style={{fontFamily: props.fontFamily}} onClick={changeFontBody}>
            <h2>Aa</h2>
            <p>{props.fontFamily}</p>
        </div>
    )
}

export default FontItem;