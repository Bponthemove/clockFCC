function BreakLength( { onclick, length} ) {

    return (
        <div className='break-container-outer'>
            <h3 id='break-label'>Break Length</h3>
            <div className='break-container-inner'>
                <div id='break-increment' className='click' onClick={onclick}>
                    <i id ='breakUp' className="fas fa-chevron-up" ></i>
                </div>
                <p id='break-length' value={length} className='time'>{length}</p>
                <div id='break-decrement' className='click' onClick={onclick}>
                    <i id='breakDown' className="fas fa-chevron-down" ></i>
                </div>
            </div>
        </div>
    )
}

export { BreakLength }