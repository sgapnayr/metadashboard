import './ComponentBar.css'
import LinkComponent from './Components/LinkComponent'

function ComponentBar() {
    return (
        <div className='ComponentBar'>
            <LinkComponent
                link={'https://energynewsbeat.co/ep/'}
                textContent={' News Povided by Energy News Beat'} />
            <LinkComponent
                link={'https://sportsubmit.netlify.app/'}
                textContent={'Want a Custom Dashboard?'} />
        </div>
    )
}

export default ComponentBar