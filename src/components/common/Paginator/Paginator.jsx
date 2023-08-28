import style from './css/Paginator.module.css';


const Paginator = ({ currentPage, onPageChange, totalUsersCount, pageSize }) => {
   let pagesCount = Math.ceil(totalUsersCount / pageSize);
   let buttons = [];

   for (let i = 0; i < 5; i++) {
      if (currentPage > 2 && pagesCount - currentPage >= 2) {
         buttons.push(currentPage + i - 2);
      } else if (currentPage === 2) {
         buttons.push(currentPage + i - 1);
      } else buttons.push(currentPage + i);
   };

   return (
      <div className={style.navButtons}>
         <button onClick={() => { if (currentPage > 1) onPageChange(currentPage - 1) }} className={currentPage > 1 ? style.arrowBack : style.arrowBackInactive}></button>
         {buttons.map(b => <button disabled={currentPage == b} onClick={() => { onPageChange(b) }}
            className={currentPage === b ? style.navButton_active : style.navButton}>{b}</button>
         )}
         <button onClick={() => { if (currentPage < pagesCount) onPageChange(currentPage + 1) }} className={currentPage < pagesCount ? style.arrowForward : style.arrowForwardInactive}></button>
      </div>
   )
}
export default Paginator;