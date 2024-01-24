import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//Navbar, Header, Main, Footer
import { PortfolioNavbarComponent } from './portfolio-navbar/portfolio-navbar.component';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { PortfolioMainComponent } from './portfolio-main/portfolio-main.component';
import { PortfolioFooterComponent } from './portfolio-footer/portfolio-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PortfolioNavbarComponent,
    PortfolioHeaderComponent,
    PortfolioMainComponent,
    PortfolioFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Derya';
  surname = 'Deniz';
  title = 'portfolio';
}
