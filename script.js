// question 1:-
class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    get ratingMovie(){
        return this.rating;
    }
}
const obj=new Movie("Thunivu","sun production");
const obj1=new Movie("Casino Royale","Eon Productions","PG13")
console.log(obj.ratingMovie);
console.log(obj);  
console.log(obj1);

// question 2:-
class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    
    get radiusCircle(){
        return this.radius;   
    }
    set radiusCircle(radius){
        this.radius=radius;
    }

    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color=color;
    }

    get toString(){
        return `"Circle[radius=${this.radius},color=${this.color}]"`;
    }

    get areaCircle(){
        return Math.PI*this.radius*this.radius;
    }

    get CircumferenceCircle(){
        return 2*Math.PI*this.radius;
    }
}
let obj2=new circle("1.0","red");

console.log(obj2.radiusCircle);
obj2.radiusCircle="2.0";
console.log(obj2.radiusCircle);

console.log(obj2.colorCircle);
obj2.colorCircle="blue";
console.log(obj2.colorCircle);

console.log(obj2.toString);
console.log(obj2.areaCircle);
console.log(obj2.CircumferenceCircle);

// 3.Write a person class to hold all the details.:-
class Person{
    constructor(name,age,gender,salary){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.salary=salary;
    }
}
let Person1=new Person("Abi","20","male","100000");
let Person2=new Person("mani","21","male","200000");
let Person3=new Person("veera","22","male","300000");

console.log(`All person names are
"Person1":${Person1.name}
"Person2":${Person2.name}
"Person3":${Person3.name}`);

console.log(`all person ages are
"Person1":${Person1.age}
"Person2":${Person2.age}
"Person3":${Person3.age}`);

console.log(`all person gender are
"Person1":${Person1.gender}
"Person2":${Person2.gender}
"Person3":${Person3.gender}`);

console.log(`all person salary are
"Person1":${Person1.salary}
"Person2":${Person2.salary}
"Person3":${Person3.salary}`);

// 4.Write a calculate the uber price:-
class UberPrice{
    constructor(Km,price=50){
        this.price=price;
        this.Km=Km;
    }
    
    get Price(){
        return this.Km*this.price;
    }
}
const uber1=new UberPrice(5);
const uber2=new UberPrice(5,20)
console.log(uber1.Price);
console.log(uber2.Price);
