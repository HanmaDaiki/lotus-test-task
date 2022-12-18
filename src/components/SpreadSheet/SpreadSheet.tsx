import { useSelector, useDispatch } from 'react-redux/es/exports';

import { SpreadSheetColumn } from '../SpreadSheetColumn/SpreadSheetColumn';
import {switchUserAction} from '../../store/usersReducer'

import './SpreadSheet.css';

const SpreadSheet: React.FC = () => {
  const users = useSelector((state: any) => state.usersReducer.users);  


  return(
    <div className='spread-sheet'>
        <div className='spread-sheet__column'>
          <div className='spread-sheet__row spread-sheet__row_header'>ХОД</div>
          <div className='spread-sheet__row spread-sheet__row_header'>ПАРАМЕТРЫ И ТРЕБОВАНИЯ </div>
          <div className='spread-sheet__row'>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</div>
          <div className='spread-sheet__row'>Срок изготовления лота, дней</div>
          <div className='spread-sheet__row'>Гарантийные обязательства, мес</div>
          <div className='spread-sheet__row'>Условия оплаты</div>
          <div className='spread-sheet__row'>Стоимость изготовления лота, руб (без НДС)</div>
        </div>
        {
          users.map((user: any, index: number) => {
            return <SpreadSheetColumn key={index} user={user} index={index+1}/>
          })
        }
      </div>
  );
};

export { SpreadSheet };