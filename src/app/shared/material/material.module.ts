import { NgModule } from '@angular/core';

import { MatIconModule, MatDialogModule, MatInputModule, MatTabsModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MaterialComponents = [
  MatIconModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatInputModule,
  MatTabsModule
]
@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
