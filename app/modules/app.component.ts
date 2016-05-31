import { Component } from '@angular/core';
@Component({
    selector: 'fun-app',
    template: '<h1>Base to implement in angular by {{author}}</h1>'
})
export class AppComponent {
    author = 'Gilmar Terceros';
}
