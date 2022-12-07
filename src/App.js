import React from 'react'
import './index.css'
import Modal from './Modal'

function App() {
    const [open, setOpen] = React.useState(false)

    return (
        <div className='App'>
            <button onClick={() => setOpen(true)} className='open-modal-btn'>
                Натисни, щоб відкрити вікно
            </button>
            <Modal open={open} setOpen={setOpen} />
        </div>
    )
}

export default App
