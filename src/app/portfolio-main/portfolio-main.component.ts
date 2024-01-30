import { Component } from '@angular/core';
//Font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-portfolio-main',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './portfolio-main.component.html',
  styleUrl: './portfolio-main.component.css',
})
export class PortfolioMainComponent {
  faPalette = faPalette;
  faClock = faClock;
  faCloudSunRain = faCloudSunRain;
}
