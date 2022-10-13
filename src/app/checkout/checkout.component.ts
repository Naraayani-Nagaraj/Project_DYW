import { Component, OnInit } from '@angular/core';
import { ShortlistedDisplayService } from '../shortlisted-display.service';
import { DiscountService } from '../discount.service';
import { ShortlistedService } from '../service/shortlisted.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit
{
  public products: any = [];
  public grandTotal !: number;

  cat: string = "";

  public code !: string;
  public coupons: string[] = [];
  msg: string = "";
  discount1!: number;
  final1!: number;
  total!: number;

  constructor(private shortlistedService: ShortlistedService, private discountService: DiscountService, private shortlistDisplay: ShortlistedService) { }

  ngOnInit(): void
  {
    this.shortlistedService.getProducts().subscribe(res => {
      this.products = res;
      var myarr = JSON.stringify(res);
      this.grandTotal = this.shortlistedService.getTotalPrice();
    })
  }

  public switchCase: boolean = false;
  toggleButton()
  {
    this.switchCase = !this.switchCase;
  }

  applyCoupon()
  {
    if (this.grandTotal < 5000)
    {
      this.msg = "not applicable for coupon"
    }
    else
    {
      if (this.grandTotal >= 10000 && this.grandTotal <= 15000)
      {
        if (this.code == "RKM10")
        {
          this.msg = "discount of 10%";
          this.final1 = this.grandTotal - this.grandTotal * 0.1
        }
        else
        {
          this.msg = "not a valid coupon code"
        }
      }
      else if (this.grandTotal > 16000 && this.grandTotal < 30000)
      {
        if (this.code == "SRJ20")
        {
          this.msg = "discount of 20%"
          this.final1 = this.grandTotal - this.grandTotal * 0.2;
        }
        else
        {
          this.msg = "invalid coupon code"
        }
      }
      else if (this.grandTotal > 31000 && this.grandTotal < 50000)
      {
        if (this.code == "DEB15")
        {
          this.msg = "discount of 30%"
          this.final1 = this.grandTotal - this.grandTotal * 0.5
        }
        else
        {
          this.msg = "not a valid coupon code";
        }
      }
      else if (this.grandTotal > 51000 && this.grandTotal<100000)
      {
        if (this.code = "PAV30")
        {
          this.msg = "discount of 40%"
          this.final1 = this.grandTotal - this.grandTotal * 0.4
        }
        else
        {
          this.msg = "not a valid coupon code"
        }
      }
    }
  }
}
