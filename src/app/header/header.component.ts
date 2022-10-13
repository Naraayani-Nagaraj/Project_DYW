import { Component, OnInit } from '@angular/core';
import { ShortlistedService } from '../service/shortlisted.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
  public totalItem: number = 0;
  public searchTerm: string = '';

  constructor(private shortlistedService: ShortlistedService, public service: ProductService) { }

  ngOnInit(): void
  {
    this.shortlistedService.getProducts().subscribe(res => {
      this.totalItem = res.length;
    })
  }

  search(event: any)
  {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.shortlistedService.search.next(this.searchTerm);
  }

}
