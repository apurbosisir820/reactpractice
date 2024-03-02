// // Inheritance
let demo = document.querySelector('.demo')
// class cars {
//     constructor(name,color,price,kelo){
//         this.name=name;
//         this.color=color;
//         this.price=price;
//         this.kelo =kelo;
//     }
//     mycars(){
//     return this.color,this.name
    
//     }
    
// }
// class Motorcycle extends cars{
//     constructor(name,Colors,Prices,Kelos,bikename, bikecolor, bikecc, bikeModel){
//         super(name,Colors,Prices,Kelos)
//         this.bikename = bikename;
//         this.bikecolor = bikecolor;
//         this.bikecc = bikecc;
//         this.Model = bikeModel;
//     }
// }


// let bike1 = new Motorcycle('hoda','blue', 2200000,50,"hornet",'blue',160,2024)
// // let bike2 = new Motorcycle("Suziki","Red", 120000)
// console.log(bike1);
// demo.innerHTML += bike1.mycars();
// // console.log(bike2);

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return ' I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   const myCar = new Model("Ford", "Mustang");
//   demo.innerHTML += myCar.show()
// // console.log(myCar);

// ----------- Classes---;
// class fruits {
//     constructor(price,color,name){
//         this.fname = name;
//         this.fcolor = color;
//         this.fprice = price
//     }
//     showmathod(){
//         return this.fname +" "+ this.fcolor +" "+ this.fprice+"" + " is my favarit fol "
//     }

// }


// class vagitable extends fruits{
//     constructor(prices,color,name,item, price, weight){
//         super(prices,color,name)
//         this.vagitablename = item;
//         this.vagitableprice = price;
//         this.vagitableweight = weight;
//     }
//     showvagitable(){
//         return this.showmathod() + `${this.vagitablename} ${this.vagitableprice}${this.vagitableweight}`
//     }
// }
// let fruit = new vagitable('banana','yellow',10,'low','green','20kg')
// console.log(fruit);

// demo.innerHTML = fruit.showvagitable()

// ----Spered Oparetor---;
// let array = [1,5,3,6,5,2,8]
// let array1 = [9,7,30,60,55,22,48]
// let aarr = [10,20,30,4,50,60,70,80,90,100,110]
// let a = [...array,...array1,...aarr]
// demo.innerHTML = a
// console.log(a);
// ----reset operato---;
// function mybook(name,...booklist) {
//     return (name+booklist)
// }

// console.log(mybook("islamic"," English"," Bangla","islamic"," English"," Bangla",1,2,3,5));
let food = {
    rice : 'biriani',
    murgi : 'sunali',
    cow : "deshi",
    khasi : "paya"
}
let foods = {
    rices : 'birianis',
    murgis : 'sunalis',
    cows : "deshis",
    khasis : "payas"
}
console.log({...food,...foods});

