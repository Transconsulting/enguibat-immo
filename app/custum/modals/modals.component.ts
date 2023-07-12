import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalService } from 'src/app/_services/modal.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor(private dialog: MatDialog, private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    // Ajoutez ici la logique de fermeture du modal
    this.dialog.closeAll()
  }

}
