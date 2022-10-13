import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ShortlistedService } from '../service/shortlisted.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit
{
  public productList: any;
  public filterCategory: any
  searchKey: string = "";

  constructor(private api: ApiService, private shortlistedService: ShortlistedService) { }

  ngOnInit(): void
  {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.category === 'Sedan' || a.category === 'Hatchback' || a.category === 'Convertible' || a.category === 'Coupe' || a.category === 'Minivan' || a.category === 'Sports Car' || a.category === 'Crossover SUV' || a.category === 'Off-road vehicle') { }
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList);
      });
    this.shortlistedService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  addtocart(product: any)
  {
    this.shortlistedService.addtoCart(product);
  }

  addtowishList(product:any)
  {
    console.log("wishlist");
    console.log(product);
    this.shortlistedService.addtowishlist(product)
  }

  filter(category: string)
  {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    })
  }

}
