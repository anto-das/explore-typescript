// union types

type userRole = 'admin' | 'user';

const getDashboard = (role:userRole) =>{
    if(role ==='admin'){
        console.log('admin dashboard')
    } else if(role === 'user'){
        console.log('user dashboard')
    }
}


// intersection types

type Employee ={
    id:number;
    name:string;
    role:string;
}

type Manager ={
    designation:string;
    team:number;
}

type EmployeeManager = Employee & Manager;

const teamLeader:EmployeeManager = {
    id:23,
    name:'anto',
    role:'employee',
    designation:'grow',
    team:23
}