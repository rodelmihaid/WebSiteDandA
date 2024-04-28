import { Component, ElementRef } from '@angular/core';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(
    private el: ElementRef,
    private scrollService: ScrollServiceService
  ) {}

  scrollUp() {
    const up = this.el.nativeElement.querySelector('#up');
    if (up) {
      up.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollServicii() {
    const up = this.el.nativeElement.querySelector('#servicii');
    if (up) {
      up.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
