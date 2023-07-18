import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalsComponent } from '../custum/modals/modals.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  theStatus: string
  constructor(
    private dialog: MatDialog,
  ) { }

  openModal(succesOrError: any): void {
    this.theStatus= succesOrError
    const dialogRef = this.dialog.open(ModalsComponent,{
      width:'auto',
      height: 'auto',
      id: succesOrError
    });

    dialogRef.afterClosed().subscribe(result => {
      // Ajoutez ici la logique à exécuter après la fermeture du modal
    });
  }
}
