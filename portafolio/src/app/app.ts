import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Separator } from './components/separator/separator';
import { Home } from './components/home/home';


@Component({
  imports: [RouterOutlet,
            Navbar,
            About,
            Skills,
            Contact,
            Separator,
            Home

  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portafolio');
}
