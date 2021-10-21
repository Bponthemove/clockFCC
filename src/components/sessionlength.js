function SessionLength( {onclickup, onclickdown, length} ) {

    return (
        <div className='session-length-container-outer'>
            <h3 id='session-label'>Session Length</h3>
            <div className='session-length-container-inner'>
                <p id='session-increment' className='click' onClick={onclickup}><i className="fas fa-chevron-up"></i></p>
                <p id='session-length' value={length} className='time'>{length}</p>
                <p id='session-decrement' className='click' onClick={onclickdown}><i className="fas fa-chevron-down"></i></p>
            </div>
        </div>
    )
}

export { SessionLength }