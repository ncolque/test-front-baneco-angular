import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from '../../shared/components/header/header';
import { RouterLink, RouterOutlet } from '@angular/router';

const MATERIAL_MODULES = [MatSidenavModule, MatListModule, MatIconModule];

@Component({
  selector: 'app-admin-layout',
  imports: [MATERIAL_MODULES, Header, RouterOutlet, RouterLink],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {

}
