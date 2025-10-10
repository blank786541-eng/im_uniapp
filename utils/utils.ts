




function validValue(reg:RegExp,v:any){
   return reg.test(v);
}
function handleContextMenu(e){
    e.preventDefault();
}
export {
    validValue,handleContextMenu
}
