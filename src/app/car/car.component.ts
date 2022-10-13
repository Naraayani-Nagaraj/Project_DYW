import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit
{
  products: Array<Product> = [];
  storeMsg: string = ""
  deleteMsg: string = ""
  updateMsg: string = ""
  flag: boolean = false;
  pid: number = 0;
  price: number = 0;
  pname: String = "";
  category: String = "";
  url: String = "";

  dd: Date = new Date();

  constructor(public pserv: ProductService) { }

  ngOnInit(): void
  {
    this.loadProducts();
  }

  loadProducts(): void
  {
    this.pserv.loadProductDetails().subscribe(res => this.products = res);
    console.log('pro', this.products);
  }

  //storing car details
  storeProduct(productRef: NgForm)
  {
    console.log(productRef.value);
    this.pserv.storeProductDetails(productRef.value).subscribe(res => this.storeMsg = res, error => console.log(error), () => this.loadProducts());
    alert("Car detail Added Successfully");
  }

  //Deleting the car details
  deleteProduct(pid: number)
  {
    this.pserv.deleteProductDetails(pid).subscribe(res => this.deleteMsg = res, error => console.log(error), () => this.loadProducts())
  }

  //Updating the car details
  updateProduct(product: Product)
  {
    console.log(product);
    this.flag = true;
    this.pid = product.pid;
    this.price = product.price;
    this.category = product.category;
    this.pname = product.pname;
    this.url = product.url;
  }

  //updating the price of the car
  updateProductPrice()
  {
    //Array of objects
    let product = { "pid": this.pid, "price": this.price, "pname": this.pname, "category": this.category, "url": this.url };
    console.log(product);
    this.pserv.updateProductInfo(product).subscribe(result => this.updateMsg = result, error => console.log(error),
      () => {
        this.loadProducts();
        alert("Car price Updated Successfully");
        this.flag = false;
      })
  }
}
