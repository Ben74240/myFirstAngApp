import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriété Title qui ressemble beaucoup à une variable
  title = 'This is my title from TypeScript';

  nb = 0;

  // méthode alert() qui ressemble à une fontion
  alert() {
    //on peut déclarer des constantes et des variables ds les méthodes
    const message = 'this is a message';
    // on peut utiliser tous les outils de JS dans les méthodes
    console.log(message);

    this.nb++;

    console.log('You \'ve clicked:', this.nb + ' time');
    
    alert(message);
  }
}
