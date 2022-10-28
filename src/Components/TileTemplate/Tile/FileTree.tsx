import { useState } from 'react'
import './FileTree.css'
import { FiArrowRight } from 'react-icons/fi'

interface Props {
    hasFileTree: boolean
}

const FileTree: React.FC<Props> = ({ hasFileTree }) => {
    const [fileTreeOpen, setFileTreeOpen] = useState<boolean>(false)

    const handleFileTree = () => {
        setFileTreeOpen(!fileTreeOpen)
    }

    return (
        <div className='FileTree'>
            <ul>
                <div className="File" onClick={handleFileTree}>
                    <div className="FileHeader">
                        <div className={fileTreeOpen ? 'FileTreeIconOpen' : 'FileTreeIcon'}><FiArrowRight /></div>
                        <div>Demographics</div>
                    </div>
                    <ul className={fileTreeOpen ? '' : 'HideFile'}>
                        <div className="SubFile">
                            <div className='FileTreeIcon'><FiArrowRight /></div>
                            <div>File 1</div>
                        </div>
                        <div className="SubFile">
                            <div className='FileTreeIcon'><FiArrowRight /></div>
                            <div>File 2</div>
                        </div>
                    </ul>
                </div>
            </ul>
        </div>
    )
}

export default FileTree