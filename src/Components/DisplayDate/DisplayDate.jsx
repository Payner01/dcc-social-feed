/* working on adding a date to each post */
const DisplayDate = () => {
    
    let showDate = new Date();
    let displayTodaysDate = showDate.getDate()+'/'+showDate.getDay()+'/'+showDate.getHours+'/'+showDate.getMinutes;
    let dateStamp = displayTodaysDate
    return ( 
        null
     );
}
 
export default DisplayDate;