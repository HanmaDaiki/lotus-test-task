import { Warning, SpreadSheet } from '../';

import './Main.css';

const Main: React.FC = () => {
  return(
    <main className='main'>
      <Warning />
      <SpreadSheet />
    </main>
  );
}

export { Main };