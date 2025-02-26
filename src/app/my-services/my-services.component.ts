import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-my-services',
    imports: [],
    templateUrl: './my-services.component.html',
    styleUrl: './my-services.component.css'
})
export class MyServicesComponent implements AfterViewInit {
    @ViewChild('detalhes') detalhes!: ElementRef<HTMLDetailsElement>;
    @ViewChild('sumario') sumario!: ElementRef<HTMLElement>;

    constructor(private cdRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
        // Garante que as referências aos elementos foram carregadas
    }

    alteraBordas() {
        const detailsElement = this.detalhes.nativeElement;
        const summaryElement = this.sumario.nativeElement;

        if (detailsElement.open) {
            summaryElement.style.borderRadius = "20px 20px 0 0";
        } else {
            summaryElement.style.borderRadius = "20px";
        }

        // Força a detecção de mudança no Angular
        this.cdRef.detectChanges();
    }

    ////////////////// Segundo Assunto ////////////////////////

    @ViewChild('detalhesDois') detalhesDois!: ElementRef<HTMLDetailsElement>;
    @ViewChild('sumarioDois') sumarioDois!: ElementRef<HTMLElement>;

    alteraBordasDois() {
        const detailsElement = this.detalhesDois.nativeElement;
        const summaryElement = this.sumarioDois.nativeElement;

        if (detailsElement.open) {
            summaryElement.style.borderRadius = "20px 20px 0 0";
        } else {
            summaryElement.style.borderRadius = "20px";
        }

        // Força a detecção de mudança no Angular
        this.cdRef.detectChanges();
    }

    ////////////////// Terceiro Assunto ////////////////////////

    @ViewChild('detalhesTres') detalhesTres!: ElementRef<HTMLDetailsElement>;
    @ViewChild('sumarioTres') sumarioTres!: ElementRef<HTMLElement>;

    alteraBordasTres() {
        const detailsElement = this.detalhesTres.nativeElement;
        const summaryElement = this.sumarioTres.nativeElement;

        if (detailsElement.open) {
            summaryElement.style.borderRadius = "20px 20px 0 0";
        } else {
            summaryElement.style.borderRadius = "20px";
        }

        // Força a detecção de mudança no Angular
        this.cdRef.detectChanges();
    }

     ////////////////// Quarto Assunto ////////////////////////

     @ViewChild('detalhesQuatro') detalhesQuatro!: ElementRef<HTMLDetailsElement>;
     @ViewChild('sumarioQuatro') sumarioQuatro!: ElementRef<HTMLElement>;
 
     alteraBordasQuatro() {
         const detailsElement = this.detalhesQuatro.nativeElement;
         const summaryElement = this.sumarioQuatro.nativeElement;
 
         if (detailsElement.open) {
             summaryElement.style.borderRadius = "20px 20px 0 0";
         } else {
             summaryElement.style.borderRadius = "20px";
         }
 
         // Força a detecção de mudança no Angular
         this.cdRef.detectChanges();
     }
}
