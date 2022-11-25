import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent implements OnInit, OnDestroy, AfterViewInit {
  public menuInactiveDesktop!: boolean;
  public menuActiveMobile!: boolean;
  public dropdownActive!: boolean;
  documentClickListener!: () => void;
  menuClick!: boolean;
  topMenuButtonClick!: boolean;
  constructor(public renderer: Renderer2) {}

  ngOnDestroy(): void {
    if (this.documentClickListener) {
      this.documentClickListener();
    }
  }
  ngAfterViewInit(): void {
    this.documentClickListener = this.renderer.listen(
      'body',
      'click',
      (event) => {
        // if (!this.isDesktop()) {
        //     if (!this.menuClick) {
        //         this.menuActiveMobile = false;
        //     }
        // }

        if (!this.topMenuButtonClick) {
          this.dropdownActive = false;
        }

        this.topMenuButtonClick = false;
        this.menuClick = false;
      }
    );
  }

  ngOnInit(): void {}

  toggleMenu(event: Event) {
    this.menuClick = true;
    if (this.isDesktop()) {
      this.menuInactiveDesktop = !this.menuInactiveDesktop;
      if (this.menuInactiveDesktop) {
        this.menuActiveMobile = false;
      }
    } else {
      this.menuActiveMobile = !this.menuActiveMobile;
      if (this.menuActiveMobile) {
        this.menuInactiveDesktop = false;
      }
    }

    event.preventDefault();
  }

  toggleDropdownMenu(event: Event) {
    this.topMenuButtonClick = true;

    this.dropdownActive = !this.dropdownActive;

    event.preventDefault();
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }
}
