import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const workTime = 27 * 60
  const breakTime = 3 * 60

  const [time, setTime] = useState(workTime)
  const [isWork, setIsWork] = useState(true)
  const [isRunning, setIsRunning] = useState(false)
  const [roundCount, setRoundCount] = useState(0)

  const tickSound = useRef(null)


  useEffect(() => {
    let timer

    if (isRunning) {
      timer = setInterval(() => {

        if (tickSound.current) {
          tickSound.current.currentTime = 0
          tickSound.current.play()
        }


        setTime(prev => {
          if (prev <= 1) {
            // Timer khatam → toggle work/break
            if (isWork) {
              setIsWork(false)
              return breakTime
            } else {
              setIsWork(true)
              setRoundCount(r => r + 1) // ek round complete
              return workTime
            }
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [isRunning, isWork])



  const minutes = Math.floor(time / 60)
  const seconds = time % 60


  return (
    <div className='bg-black w-screen h-screen flex flex-col items-center justify-center'>

      {/* count the round */}
      <div className='bg-gray-950 h-[8%] m-4 w-[35%] rounded-full flex justify-center items-center'>
        <h2 className='text-xl text-gray-300 font-bold'>
          Count : {roundCount}
        </h2>
      </div>

      {/* timer display */}
      <div className='h-[70%] w-[85%] flex flex-col justify-center items-center '>
        <div className='bg-gray-900 rounded-2xl flex justify-center items-center text-white text-6xl font-mono h-[70%] m-2 w-full'>
          {String(minutes).padStart(2, '0')}
        </div>
        <div className='bg-gray-900 rounded-2xl flex justify-center items-center text-white text-6xl font-mono h-[70%] m-2 w-full'>
          {String(seconds).padStart(2, '0')}
        </div>
      </div>

      {/* start-stop button */}
      <div className='bg-gray-950 h-[10%] m-4 w-[30%] rounded-full flex justify-center items-center'>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning
            ? <i className="ri-stop-circle-line text-5xl text-white"></i>
            : <i className="ri-play-circle-line text-5xl text-white"></i>
          }
        </button>
      </div>

    </div>
  )
}

export default App
