interface Developer<T,X=null>{
    name:string;
    salary:number;
    device:{
        brand:string;
        model:string;
        releasedYear:string;
    };
    smartWatch:T;
    bike?:X;
}

interface PoorDevWatchModel{
    watchName:string;
    watchModel:string
}

const poorDeveloper:Developer<PoorDevWatchModel,{
    bikeName:string;
}>={
    name:'anto',
    salary:23,
    device:{
        brand:'walton',
        model:'23',
        releasedYear:'2023'
    },
    smartWatch:{
        watchName:'titan',
        watchModel:'y33'
    },
    bike:{
        bikeName:'r15'
    }
    
}

interface RichDevWatch{
    watchName:string;
    watchModel:string;
    watchPrice:string;
    madeIn:string;
}

const richDeveloper:Developer<RichDevWatch,{bikeName:string}>={
    name:'anto',
    salary:23,
    device:{
        brand:'walton',
        model:'23',
        releasedYear:'2023'
    },
    smartWatch:{
        watchName:'titan',
        watchModel:'y33',
        watchPrice:'$220',
        madeIn:'japan'
    },
    bike:{
        bikeName:'23'
    }
}