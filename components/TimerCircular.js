import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {variables} from "../constans/constans";
import {useEffect, useRef, useState} from "react";

const TimerCircular = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [mode, setMode] = useState("work"); // work/break/null

    const minutesLeftRef = useRef(minutes);
    const secondsLeftRef = useRef(seconds);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function switchMode() {
        const nextMode = modeRef.current === "work" ? "break" : "work";
        const nextMinute = nextMode === "work" ? 25 : 5;

        setMode(nextMode);
        modeRef.current = nextMode;

        setMinutes(nextMinute);
        minutesLeftRef.current = nextMinute;
    }

    const tick = () => {
        if (secondsLeftRef.current === 0) {
            if (minutesLeftRef.current !== 0) {
                minutesLeftRef.current--;
                secondsLeftRef.current = 59;
                setSeconds(secondsLeftRef.current);
                setMinutes(minutesLeftRef.current);
            } else {
                minutesLeftRef.current = displayMessage ? 24 : 4;
                secondsLeftRef.current = 59;

                setSeconds(secondsLeftRef.current);
                setMinutes(minutesLeftRef.current);
                setDisplayMessage(!displayMessage);
            }
        } else {
            secondsLeftRef.current--;
            setSeconds(secondsLeftRef.current);
        }
    };

    useEffect(() => {


        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            tick();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const totalSeconds = mode === "work" ? 25 * 60 : 5 * 60;
    console.log("seconds: minutes:", seconds, minutes * 60, totalSeconds);
    const percentage = Math.round(
        ((seconds + minutes * 60) / totalSeconds) * 100
    );
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div>
            <div>
                <CircularProgressbar
                    value={100 - percentage}
                    text={`${100 - percentage}%`}
                    styles={buildStyles({
                        textColor: variables.primary,
                        pathColor: variables.primary,
                        tailColor: variables.white,
                    })}
                />
                <button>Start</button>
                <button>Pause</button>
                <button>Reset</button>
                <button>Settings</button>
            </div>
            <div>
                {displayMessage
                    ? `Break Time ${timerMinutes}:${timerSeconds}`
                    : `${timerMinutes}:${timerSeconds}`}
            </div>
        </div>
    );
};

export default TimerCircular;
