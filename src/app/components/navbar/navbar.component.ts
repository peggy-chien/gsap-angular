import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  private ref = inject(ChangeDetectorRef);
  loggingIn = false;

  procceed(): void {
    this.loggingIn = true;
    setTimeout(() => {
      this.loggingIn = false;
      this.ref.markForCheck();
    }, 500);
    const tl = gsap.timeline();
    tl.to('.login-btn', {
        textContent: '',
        delay: 0.5,
        yPercent: -100
      })
      .to('.login-btn', {
        textContent: 'Sign Out',
        color: 'white',
        duration: 1.5,
        ease: 'bounce.out',
        yPercent: 0
      });
  }
}
