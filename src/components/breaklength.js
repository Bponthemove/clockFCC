function BreakLength( {onclickup, onclickdown, length} ) {

    return (
        <div className='break-container-outer'>
            <h3 id='break-label'>Break Length</h3>
            <div className='break-container-inner'>
                <p id='break-increment' className='click' onClick={onclickup}><i className="fas fa-chevron-up"></i></p>
                <p id='break-length' value={length} className='time'>{length}</p>
                <p id='break-decrement' className='click' onClick={onclickdown}><i className="fas fa-chevron-down"></i></p>
            </div>
        </div>
    )
}

export { BreakLength }