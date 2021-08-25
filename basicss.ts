// prmitive
let age:number;

age=12;

let userName:string='hello';

let bool:boolean=true;
let empty:boolean=false;

// reffrence  types (arrays , object)

let hobbies:string[];

hobbies=['play','cricket'];

let person:{
    name:string;
    age:number;
};

person={
    name:'Max',
    age:32,
    // village:'matara'
};


// arrays + ibjects
let peoples:{ // 1) declare
    name:string,
    age:number,
}[];

peoples=[{ // 2) assign value
  name:'Max',
  age:32,
  // village:'matara'
}];

// type inference 

let cource=45;

cource=78;

// union types

let car:number | string | object=`sfd`;

car={};

//Type Aliases
type Person={
    name:string,
    age:number,
}


let hero:Person={name:'dsf',
age:12,
}

let hero2:Person={name:'dsf',
age:12,
}

// functions  
function add(a:number,b:number): string | number{
    return a+b;
   
};

function x(value:any){
    console.log(value);
}
// generics
function insertBegining<T>(array:T[],value:T){
    const newArray=[value,...array];
    return newArray;
};

const demoArray=[1,2,3];

const arr=insertBegining(demoArray,-1); //[-1,1,2,3]
// arr[0].split('');
arr.map(i=>i);



