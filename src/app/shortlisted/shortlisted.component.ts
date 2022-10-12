import { Component, OnInit } from '@angular/core';
import { ShortlistedService } from '../service/shortlisted.service';
import { ShortlistedDisplayService } from '../shortlisted-display.service';

@Component({
  selector: 'app-shortlisted',
  templateUrl: './shortlisted.component.html',
  styleUrls: ['./shortlisted.component.css']
})
export class ShortlistedComponent implements OnInit
{
  public products: any = [];
  public grandTotal !: number;

  constructor(private shortlistedService: ShortlistedService, private shortlistedDisplyService: ShortlistedDisplayService) { }

  ngOnInit(): void
  {
    this.shortlistedService.getProducts().subscribe(res => {
      console.log(res);
      this.products = res;
      this.grandTotal = this.shortlistedService.getTotalPrice();
    })
  }

  checking()
  {
    this.shortlistedService.getProducts().subscribe(res => {
      console.log("The elements after clicking checking is");
      console.log(res);
      console.log(res.length-1);
      res.forEach((element: any) => {
        this.shortlistedDisplyService.storeCartDetails(element).subscribe(p => {
          console.log(p);
        }, error => {
          console.log(error);
        })
      });
    })
  }

  //Removing item from cart
  removeItem(product: any)
  {
    this.shortlistedService.removeCartItem(product);
  }

  //empty cart
  emptycart()
  {
    this.shortlistedService.removeAllCart();
  }

  //updating cart with the products
  updatecart()
  {
    this.grandTotal = this.shortlistedService.getTotalPrice();
    this.grandTotal = this.grandTotal;
  }

  //quantity increasing
  inc(product: any)
  {
    product.quantity +=1;
    this.updatecart();
  }

  //quantity decreasing
  dec(product: any)
  {
    if(product.quantity != 1)
    {
      product.quantity -= 1;
      this.updatecart();
    }
  }
}
