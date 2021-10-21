import React, { useState, useRef } from 'react'
import './App.css';
import { BreakLength } from './components/breaklength.js'
import { SessionLength } from './components/sessionlength';
import { Session } from './components/session';
import { Buttons } from './components/buttons';

function App() {
  const [lengthSession, setLengthSession] = useState(25)
  const [breakLength, setBreakLength] = useState(5)
  const [minutesLeft, setMinutesLeft] = useState(25)
  const [secondsLeft, setSecondsLeft] = useState('00')
  const [timerOn, setTimerOn] = useState(false) //false means its on play and true means pause
  const [running, setRunning] = useState(false) // is true when entire session is running, including break

  const timerIdRef = useRef(0)
  const breakRef = useRef(false)

  let audio

  function sessionLengthUpHandler() {
    if (lengthSession < 60) {
      setLengthSession(lengthSession + 1)
      setMinutesLeft(minutesLeft + 1)
    }
  }

  function sessionLengthDownHandler() {
    if (lengthSession > 1) {
      setLengthSession(lengthSession - 1)
      setMinutesLeft(minutesLeft - 1)
    }
  }

  function breakLengthUpHandler() {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1)
    }
  }

  function breakLengthDownHandler() {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1)
    }
  }

  function play(e) {
    audio = new Audio(document.querySelector('#beep').src)
    //if it is not running than switch running to true, this is the first time timer will run
    if (!running) {
      setRunning(!running)
    }
    //if timeron is false that means it as been paused, if timeron is still true means break has ended so no need to switch
    if (!timerOn) {
      setTimerOn(!timerOn)
    }

    if (!running && lengthSession < 10 && lengthSession > 0) {
      setMinutesLeft('0' + lengthSession)
    }
    
    let time
    
    if (timerIdRef.current === '') {
      //after pause
      time = minutesLeft * 60 + parseInt(secondsLeft) 
      console.log('paused');
    }
    if (running) {
      //after break so that session starts at 01:00 instead of 00:59, requirement
      time = minutesLeft * 60 + parseInt(secondsLeft) + 1
    } else {
      //at the first time of running
      time = lengthSession * 60
    } 
    
    timerIdRef.current = setInterval(() => {
      time--
      let minutes = Math.floor(time / 60)
      let seconds = time - (minutes * 60)
      if (minutes < 10 && minutes >= 0) {
        minutes = '0' + minutes
      }
      if (seconds < 10 && seconds >= 0) {
        seconds = '0' + seconds
      }
      if (minutes === -1) {
        stopInterval()
        return
      }
      setMinutesLeft(minutes)
      setSecondsLeft(seconds)
      
      if (minutes === '00' & seconds === '00') {
        audio.play()
      }
    }, 1000)
  }

  function stopInterval() {
    console.log(breakRef);
    clearInterval(timerIdRef.current)
    if (breakRef.current) {
      console.log(breakRef);
      breakRef.current = false
      play()
    } else {
      console.log(breakRef);
      breakRef.current = true
      theBreak()
    }
  }

  function pause() {
    console.log(audio);
    setTimerOn(!timerOn)
    clearInterval(timerIdRef.current)
    timerIdRef.current = ''
  }

  function theBreak() {
    let time = breakLength * 60 + 1
    timerIdRef.current = setInterval(() => {
      time--
      let minutes = Math.floor(time / 60)
      let seconds = time - (minutes * 60)
      if (minutes < 10 && minutes >= 0) {
        minutes = '0' + minutes
      }
      if (seconds < 10 && seconds >= 0) {
        seconds = '0' + seconds
      }
      if (minutes === -1) {
        stopInterval()
        return
      }
      setMinutesLeft(minutes)
      setSecondsLeft(seconds)
    }, 1000)
  }

  function reset() {
    audio = new Audio('')
    clearInterval(timerIdRef.current)
    setLengthSession(25)
    setBreakLength(5)
    setMinutesLeft(25)
    setSecondsLeft('00')
    setTimerOn(false)
    setRunning(false)

    breakRef.current = false
  }

  return (
    <div className='container-outer'>
      <h1>25 + 5 clock</h1>
      <div className='container-inner'>
        <div className='break-session-container'>
          <BreakLength onclickup={breakLengthUpHandler} onclickdown={breakLengthDownHandler} length={breakLength}/>
          <SessionLength onclickup={sessionLengthUpHandler} onclickdown={sessionLengthDownHandler} length={lengthSession}/>
        </div>
        <Session minutes={minutesLeft} seconds={secondsLeft} length={lengthSession} running={running} breakRef={breakRef}/>
        <Buttons play={play} reset={reset} pause={pause} timerOn={timerOn}/>
      </div>
      <footer>Oct 2021, Bponthemove</footer>
    </div>
  )
}

export default App;
