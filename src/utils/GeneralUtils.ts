
import log from "./Log";

export const getDateSql = (date : Date) => {
  date = new Date(date);
    if (date) {
      log(date)
      return date.getFullYear() + "-" + addCero(date.getMonth()+1) + "-" + addCero(date.getDate());
    }
    return "";
  }
  
  export const addCero = (str : string | number) => {
    str = (str.toString())
    if (str.length==1) {
      return "0" + str;
    } else if (str.length==0) {
      return "00";
    }
    return str;
  }
  export const existsInString = (text:string,searchText:string) : boolean => {
    return isForUpdate(text,searchText);
  }
  export const isForUpdate = (text:string,searchText:string) : boolean => {

    if (text && text!="" && text.split(",").includes(searchText)) {
      return true;
    } else {
      return false
    }
  }

  /**
 * 
 * @param dateString en bas a una fecha iso en string, devuelve la edad
 * @returns 
 */
export const getAgeFromDate = (dateString : string,ageInput?:number) => {
  if (dateString === null && isNull(ageInput)) {
    return null;
  }
  if (dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  } else {
    return ageInput;
  }
  
}

export function isNull(valor:any) {
  return (valor === null || valor === '' || typeof valor === 'undefined');
}

export function wait500ms(): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}