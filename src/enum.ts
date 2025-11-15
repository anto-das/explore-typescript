type userRole = "admin"|"viewer"|"editor"


const canEdit = (role:userRole)=>{
    if(role==='admin'){
        return true;
    }else{ return false}
}

console.log(canEdit('editor'))