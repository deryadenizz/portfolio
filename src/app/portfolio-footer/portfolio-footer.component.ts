import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-portfolio-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './portfolio-footer.component.html',
  styleUrl: './portfolio-footer.component.css',
})
export class PortfolioFooterComponent {
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
