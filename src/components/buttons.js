function Buttons( {play, reset, pause, timerOn} ) {
    return(
        <div className='btn-container'>
            <div id='start_stop' onClick={timerOn ? pause : play}>
                <i className="far fa-play-circle fa-2x"></i>
                <i className="far fa-pause-circle fa-2x"></i>
            </div>
            <div id='reset' onClick={reset}><i className="fas fa-redo fa-2x"></i></div>
        </div>
    )
}

export { Buttons }