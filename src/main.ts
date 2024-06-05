import { bootstrapApplication } from '@angular/platform-browser';
    import { RadioButtonReactiveFormsDemo } from './app/radio-button-reactive-forms-demo';
    import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

    bootstrapApplication(RadioButtonReactiveFormsDemo, {
    providers: [provideAnimationsAsync()],
    }).catch((err) => console.error(err));