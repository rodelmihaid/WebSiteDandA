import { Component } from '@angular/core';

@Component({
  selector: 'app-servicii',
  templateUrl: './servicii.component.html',
  styleUrls: ['./servicii.component.css'],
})
export class ServiciiComponent {
  texte: string[] = [
    'Audit pentru rețelele sociale și website',
    'Setarea conturilor de Social Media (Instagram, Facebook, Tik-Tok, Youtube etc.',
    'Crearea strategiei comunicării de brand;',
    'Redactarea media planului lunar;',
    'Postarea de conținut relevant în funcție de cerințele clientului și ale pieței;',
    'Adaptarea conținutului în funcție de trendurile și tendințele de vizualizare din online;',
    'Crearea și implementarea de concepte și campanii de promovare online;',
    'Influencer Marketing;',
    'SEO (Search engine optimization);',
    'Creșterea engagement-ului și a numărului de urmăritori;',
    'Suport pentru clienți;',
    'Rapoarte lunare/trimestriale.',
  ];
}
