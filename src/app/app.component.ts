import { Component } from '@angular/core';
import { Country } from './country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hover to see country colors (Not actual Colors)';

  countries: Country[] = [
    new Country("Shrekadonia", "English", "", "Shrek", ["red", "orange", "blue"]),
    new Country("Icantastan", "Icantaneese", "", "Jim", ["cyan", "purple", "blue"]),
    new Country("Roman Empire", "Latin", "", "Julius Caesar", ["orange", "yellow", "green"])
  ];

  displayColors(index: number){
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.border = `1px solid ${this.countries[index].colors[0]}`;
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.backgroundColor = `${this.countries[index].colors[1]}`;
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.color = `${this.countries[index].colors[2]}`;

  }

  defaultColors(index: number){
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.border = "none";
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.backgroundColor = "white";
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.color = "black";
  }
}
