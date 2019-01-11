function isValidDate(date)
{
  // check if format is 'yyyy-mm-dd'
  if(!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
    return false;
  };
  // check if not future date
  if(new Date(date) > new Date()){
    return false;
  }
  // get date parts
  const splitDate = date.split('-');
  const day     = parseInt(splitDate[2]);
  const month   = parseInt(splitDate[1]);
  const year    = parseInt(splitDate[0]);
  // 
  if(month <= 0 || month > 12 || day < 0){
    return false;
  }
  const monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  // Adjust for leap years
  if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
  {
    monthLength[1] = 29;
  }
  if(day <= monthLength[month - 1]){
    return false;
  }

    return true;
}
