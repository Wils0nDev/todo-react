import  React  from "react";
export function useLocalStorage(itemName,initialValue){

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    React.useEffect(()=>{
    let localStorageItem = localStorage.getItem(itemName);
    let parseItem;

      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parseItem = initialValue;
      }else{
        parseItem = JSON.parse(localStorageItem)
      }
    });
    
  
    const saveItem = (newItem)=>{
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem)
    }
    return [item,saveItem];
  }