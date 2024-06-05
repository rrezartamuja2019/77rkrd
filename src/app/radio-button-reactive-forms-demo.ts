import { Component, OnInit } from '@angular/core';
import { ImportsModule } from './imports';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'radio-button-reactive-forms-demo',
    templateUrl: './radio-button-reactive-forms-demo.html',
    standalone: true,
    imports: [ImportsModule],
})
export class RadioButtonReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    ngOnInit() {
        this.formGroup = new FormGroup({
            selectedCategory: new FormControl()
        });
    }
}