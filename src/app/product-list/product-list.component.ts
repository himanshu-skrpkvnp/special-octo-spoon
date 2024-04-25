import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    // name : string = "iphone 13"  ;
    // price : number = 999 ;
    // color : string = 'Green' ;
    

     product = {
       name  : "iphone X" ,
       price : 789 ,
       color : "Black"  ,
       discount : 20 ,
       instock : 1  , 
     }

     getDiscountPrice() {

       var newprice =  this.product.price - ((this.product.price * this.product.discount)/100) ;
       return newprice ;

     }
     getstockmsg() {
        if ( this.product.instock > 1  ) return "Only "+ this.product.instock + " items left ... " ;
        return   "Only "+ this.product.instock + " item left ... Hurry "
     }
    
}
