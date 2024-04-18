import { ChangeDetectionStrategy, Component, OnDestroy, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import gsap from 'gsap';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  private tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, yoyo: true });

  @ViewChild('title')
  set titleRef(ref: HTMLElement) {
    if (ref) {
      this.tl.add(gsap.from("#title", { duration: 1, opacity: 0, yPercent: 130, stagger: 0.06, ease: "power1.out" }), 1);
    }
  }

  @ViewChild('subtitle')
  set subtitleRef(ref: HTMLElement) {
    if (ref) {
      this.tl.add(gsap.from("#subtitle", { duration: 1, opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out" }), '>');
    }
  }

  ngOnDestroy(): void {
    this.tl.kill();
  }

  animate(): void {
    const tl = gsap.timeline();
    tl.to("#green", {duration: 1, x: 918})
      .to("#blue", {duration: 1, x: 918})
      .to("#orange", {duration: 1, x: 918})
  }
}
