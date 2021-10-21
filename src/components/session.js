function Session( {seconds, minutes, length, running, breakRef} ) {
    if (length < 10 && length >= 0) {
        length = '0' + length
    }
    return (
        <div className='session-container' style={ minutes === "00" ? { backgroundColor: "red" } : { backgroundColor: "#4f5d75"} }>
            <p id='timer-label'>{ breakRef.current ? "break" : "Session" }</p>
            <div id='time-left'>{ running ? `${minutes}:${seconds}`: `${length}:00`}</div>
            <audio id='beep' src='https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Electro%20and%20Synthetic/192[kb]clock_radio_alarm.wav.mp3'/>
        </div>
    )
}

export { Session }