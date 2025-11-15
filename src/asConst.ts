const userRole ={
    admin:'admin',
    editor:'editor',
    viewer:'viewer',
} as const;

const checkUserRole = (role:(typeof userRole)[ keyof typeof userRole]) =>{
    if(role === userRole.admin|| role ===userRole.editor){
        return true;
    } else{
        return false
    }
}

console.log(checkUserRole(userRole.admin))
// console.log(typeof userRole.admin)