import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notFound',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './notFound.component.html',
  styleUrl: './notFound.component.scss',
})
export class NotFoundComponent {}
