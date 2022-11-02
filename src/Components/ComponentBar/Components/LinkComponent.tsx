import './Component.css'

interface Props {
    link: string
    textContent: string
}

const LinkComponent: React.FC<Props> = ({ link, textContent }) => {
    return (
        <a href={link} className='Component Link' target={'_'}>
            {textContent}
        </a>
    )
}

export default LinkComponent