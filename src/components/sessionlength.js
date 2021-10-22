function SessionLength( { onclick, length} ) {

    return (
        <div className='session-length-container-outer'>
            <h3 id='session-label'>Session Length</h3>
            <div className='session-length-container-inner'>
                <div id='session-increment' className='click' onClick={onclick}>
                    <i id='sessionUp' className="fas fa-chevron-up"  ></i>
                </div>
                <p id='session-length' value={length} className='time'>{length}</p>
                <div id='session-decrement' className='click' onClick={onclick}>
                    <i id='sessionDown' className="fas fa-chevron-down" ></i>
                </div>
            </div>
        </div>
    )
}

export { SessionLength }