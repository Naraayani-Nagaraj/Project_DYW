import { Component, OnInit } from '@angular/core';
import { ShortlistedService } from '../service/shortlisted.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit
{
  public products: any = [];

  constructor(private shortlistedService: ShortlistedService) { }

  ngOnInit(): void
  {
    this.shortlistedService.getWishlist()
      .subscribe(res => {
        this.products = res;
      })
  }

  removeItem(product: any)
  {
    this.shortlistedService.removeWishListItem(product);
  }
}
