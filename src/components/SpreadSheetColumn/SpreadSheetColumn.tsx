import { Timer } from '../';
import './SpreadSheetColumn.css';

interface IPropsSpreadSheetColumn {
  user: any,
  index: number
}

const SpreadSheetColumn: React.FC<IPropsSpreadSheetColumn> = ({user, index}) => {
  return(
    <div className='spread-sheet__column'>
      <div className='spread-sheet__row spread-sheet__row_header'>
        {
          user.timer ?
          <Timer indexUser={index - 1}/> :
          <></>
        }
      </div>
      <div className='spread-sheet__row spread-sheet__row_header'>Участник {index}</div>
      <div className='spread-sheet__row spread-sheet__row_center'>{user.row1}</div>
      <div className='spread-sheet__row spread-sheet__row_center'>{user.row2}</div>
      <div className='spread-sheet__row spread-sheet__row_center'>{user.row3}</div>
      <div className='spread-sheet__row spread-sheet__row_center'>{user.row4}</div>
      <div className='spread-sheet__row spread-sheet__row_center'>{user.row5}</div>
    </div>)
};

export { SpreadSheetColumn };