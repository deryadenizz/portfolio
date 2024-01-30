import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//Font-awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faTimeline } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio-navbar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './portfolio-navbar.component.html',
  styleUrl: './portfolio-navbar.component.css',
})
export class PortfolioNavbarComponent implements OnInit {
  faHouse = faHouse;
  faBriefcase = faBriefcase;
  faTimeline = faTimeline;
  faUser = faUser;
  faEnvelope = faEnvelope;

  activeTab: number = 0;

  ngOnInit(): void {
    // Angular'ın kendi yöntemleri ile elemanları seçmek daha iyi
    const list: NodeListOf<HTMLElement> = document.querySelectorAll('.list');

    const setActiveTab = (index: number) => {
      list.forEach((item: HTMLElement) => item.classList.remove('active'));
      list[index].classList.add('active');
      this.activeTab = index;
    };

    list.forEach((item: HTMLElement, index: number) => {
      item.addEventListener('click', () => this.setActiveTab(index));
    });
  }

  setActiveTab(index: number): void {
    // setActiveTab fonksiyonunu yeniden düzenleme yapmadan kullanabiliriz
    const list: NodeListOf<HTMLElement> = document.querySelectorAll('.list');
    list.forEach((item: HTMLElement) => item.classList.remove('active'));
    list[index].classList.add('active');
    this.activeTab = index;
  }
}
