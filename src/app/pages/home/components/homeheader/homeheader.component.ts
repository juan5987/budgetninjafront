import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.sass']
})
export class HomeheaderComponent implements OnInit {
  @Input() isMenuOpened!:boolean;

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.isMenuOpened = this.service.isMenuOpenedGetter;
  }

  handleToggleMenu():void {
    this.isMenuOpened = !this.isMenuOpened;
    this.service.isMenuOpenedSetter = !this.service.isMenuOpenedGetter;
  }

  openLoginModal():void {
    this.service.isLoginModalOpenedSetter = true;
  }
}
