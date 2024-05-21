import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContentComponent } from './content/content.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentComponent],
  templateUrl: './app/content.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
