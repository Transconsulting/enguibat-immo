import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  public mission=[
    {  
      titre: "sauvergardez l'argent",
      libelle: "En tant qu'expert, nous pouvons vous dire que la sauvegarde de l'argent est une mission importante pour toute entreprise, y compris une agence immobilière. En effet, la gestion financière efficace est l'un des piliers de la réussite de toute entreprise, et cela inclut la capacité à épargner de l'argent.",
      viewAll: false
    },
    {  
      titre: "belles idées",
      libelle: "En tant qu'expert, nous pouvons vous dire que la création de belles idées est une mission importante pour toute agence immobilière qui souhaite se démarquer dans un marché compétitif. Les belles idées sont des idées novatrices, créatives et inspirantes qui peuvent aider une agence immobilière à attirer des clients, à renforcer sa réputation et à développer son activité.",
      viewAll: false
    },
    {  
      titre: "collaboration",
      libelle: "En tant qu'expert, nous pouvons vous dire que la collaboration est une mission essentielle pour toute agence immobilière qui souhaite réussir dans un marché compétitif. La collaboration implique de travailler en équipe avec les membres de l'agence immobilière, les clients et les partenaires externes pour atteindre des objectifs communs",
      viewAll: false
    },
    {  
      titre: "Facile à trouver",
      libelle: "En tant qu'expert, nous pouvons vous dire que le lieu de travail ou bureau est une mission importante pour toute agence immobilière qui souhaite offrir un environnement de travail productif et agréable pour ses employés. Le choix du lieu de travail peut avoir un impact significatif sur la productivité, la créativité et le bien-être des employés, ainsi que sur l'image de l'entreprise auprès des clients et des partenaires commerciaux.",
      viewAll: false
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  changeTheViewAllStatus(tab: any,index: number){
    tab[index].viewAll = !tab[index].viewAll 
    // this.cdr.detectChanges()
  }
}
