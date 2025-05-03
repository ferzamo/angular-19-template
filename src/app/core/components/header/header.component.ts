import { Component, ElementRef, HostListener, inject, Input, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AppStore } from '../../store/app.store';
import { AvatarModule } from 'primeng/avatar';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, AvatarModule, TranslatePipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public readonly store = inject(AppStore);
  public showMenu = false;

  @Input() public menuItems: { label: string; url: string; icon: string }[] = [];
  @ViewChild('menuRef') public menuRef!: ElementRef;

  @HostListener('document:click', ['$event'])
  public handleOutsideClick(event: MouseEvent): void {
    if (this.showMenu && this.menuRef && !this.menuRef.nativeElement.contains(event.target)) {
      this.showMenu = false;
    }
  }

  public toggleMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.showMenu = !this.showMenu;
  }
}
