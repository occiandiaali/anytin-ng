import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { GeneratorComponent } from '../../components/generator/generator.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [GeneratorComponent, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatTooltipModule, TextFieldModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {

}
