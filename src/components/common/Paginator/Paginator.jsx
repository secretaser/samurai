import style from './css/Paginator.module.css';


const Paginator = ({ currentPage, onPageChange, totalItemsCount, pageSize }) => {
   let pagesCount = Math.ceil(totalItemsCount / pageSize);
   let buttons = [];
   let topBorder;
   let bottomBorder;
   let buttonsCount = 5;

   if (buttonsCount >= pagesCount) {
      bottomBorder = 1;
      topBorder = pagesCount;
      buttonsCount = pagesCount
   } else {
      if (buttonsCount % 2) {
         topBorder = currentPage + Math.floor(buttonsCount / 2);
         bottomBorder = currentPage - Math.floor(buttonsCount / 2);
      } else {
         topBorder = currentPage + buttonsCount / 2;
         bottomBorder = currentPage - buttonsCount / 2 + 1;
      }
   }

   for (let i = bottomBorder; i <= topBorder; i++) {
      if (bottomBorder < 1) {
         topBorder = topBorder - bottomBorder + 1;
         bottomBorder = 1;
         i = 1;
         buttons[i] = i;
         continue;
      }
      if (topBorder > pagesCount) {
         bottomBorder = bottomBorder - topBorder - 1;
         topBorder = pagesCount;
         i = bottomBorder;
         buttons[i] = i;
         continue;
      }
      buttons[i] = i
   }

   return (
      <div className={style.navButtons}>
         <button disabled={currentPage == 1} onClick={() => { currentPage > buttonsCount ? onPageChange(currentPage - buttonsCount) : onPageChange(1) }} className={currentPage > 1 ? style.arrowBack : style.arrowBackInactive}></button>

         {buttons.map(b => <button
            disabled={currentPage == b}
            onClick={() => { onPageChange(b) }}
            className={currentPage === b ? style.navButton_active : style.navButton}>{b}</button>
         )}

         <button disabled={currentPage == pagesCount} onClick={() => { currentPage < pagesCount - buttonsCount ? onPageChange(currentPage + buttonsCount) : onPageChange(pagesCount) }} className={currentPage < pagesCount ? style.arrowForward : style.arrowForwardInactive}></button>
      </div>
   )
}
export default Paginator;