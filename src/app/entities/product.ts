
export class Product {
   
    constructor(
    public name:string,
    public author:string,
    public price:number,
    public description:string,
    public imgUrl:string,
    public category:string,
    public availability:boolean,
    public date?:string,
    public id?:number){}

  
}

let test1 = new Product(
  "je suis un titre intéressant",
  14.99,
  "a book",
  "https://spark.adobe.com/images/landing/examples/architecture-book-cover.jpg",
  "Valerien",
  "architecture",
  true,
  "01-09-1999")