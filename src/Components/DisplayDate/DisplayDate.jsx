
const DisplayDate = () => {
    
    let showDate = new Date();
    let displayTodaysDate = showDate.getDate()+'/'+showDate.getDay()+'/'+showDate.getHours+'/'+showDate.getMinutes;
    let dateStamp = displayTodaysDate
    return ( 
        {dateStamp}
     );
}
 
export default DisplayDate;