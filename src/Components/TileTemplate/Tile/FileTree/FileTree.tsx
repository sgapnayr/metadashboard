import { useState } from 'react'
import './FileTree.css'
import File from './File'

interface Props {
}

const FileTree: React.FC<Props> = ({ }) => {
    return (
        <div className='FileTree'>
            <File fileName={'Commercial'} />
            <File fileName={'Residential'} />
            <File fileName={'Residential'} />
        </div >
    )
}

export default FileTree