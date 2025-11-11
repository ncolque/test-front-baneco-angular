import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_MODULES = [MatToolbarModule, MatButtonModule, MatIconModule];

@Component({
  selector: 'app-header',
  imports: [MATERIAL_MODULES],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
