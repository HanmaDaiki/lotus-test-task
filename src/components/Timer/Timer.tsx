import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { switchUserAction } from '../../store/usersReducer';

import './Timer.css';

interface IPropsTimer {
  indexUser: number
}

const Timer: React.FC<IPropsTimer> = ({indexUser}) => {
  const dispatch = useDispatch();
   const [seconds, setSeconds] = useState<string>('00');
   const [minutes, setMinutes] = useState<string>('00');
   const [hours, setHours] = useState<string>('00');
   const [totalSeconds, setTotalSeconds] = useState<number>(120);

  useEffect(() => {
    if(totalSeconds === 0) {
      setTotalSeconds(120);
      dispatch(switchUserAction(indexUser));
    };
  }, [totalSeconds])

  setTimeout(() => {    
    if((totalSeconds - 1) % 60 < 10) {
      setSeconds(`0${(totalSeconds - 1) % 60}`)
    } else {
      setSeconds(`${(totalSeconds - 1) % 60}`)
    }

    if((totalSeconds - 1) / 60 % 60 < 10) {
      setMinutes(`0${Math.floor((totalSeconds - 1) / 60 % 60)}`)
    }
    setTotalSeconds(totalSeconds - 1);
  }, 1000);
  

  return(
    <div className='timer'>
      {hours}:{minutes}:{seconds}
    </div>
  );
};

export { Timer }