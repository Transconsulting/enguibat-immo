import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  public service=[
    {  
      titre: "Etudes Topographiques",
      libelle: "Les études topographiques sont une étape cruciale dans de nombreux projets de construction, d’aménagement ou de développement de terrain. Elle consiste à mesurer et à cartographier les caractéristiques physiques d’un terrain, telles que la topographie, l’altitude, la pente, la végétation, les cours d’eau et les zones humides.",
      viewAll: false
    },
    {
     titre: "Etudes Geo-Techniques",
     libelle: "Les études géotechniques des sols sont une étape essentielle dans tout projet de construction, quel que soit son envergure. Elles consistent à étudier les caractéristiques physiques et mécaniques du sol, afin de déterminer sa capacité à supporter les charges qui seront imposées par les fondations des bâtiments ou des ouvrages d'infrastructures.",
     viewAll: false
    },
    {
      titre: "Etudes Architecturaux",
      libelle: "Les études architecturales des plans sont cruciales pour tout projet de construction, car elles permettent de définir les caractéristiques et les détails techniques des bâtiments ou des ouvrages d'infrastructures à construire. Ces études incluent la conception des plans de construction, des élévations, des coupes et des détails constructifs.",
      viewAll: false
    },
    {
      titre: "Etudes De Metre Des Bâtiments",
      libelle: "Les études de métré des bâtiments sont une étape importante dans tout projet de construction ou de rénovation. Elles consistent à évaluer les quantités et les coûts des matériaux nécessaires pour la construction ou la rénovation d'un bâtiment, en se basant sur les plans techniques et les spécifications techniques."
    },
    {
      titre: "Etudes Technique Des Ouvrages",
      libelle: "Les études techniques des ouvrages sont d'une importance primordiale dans de nombreux domaines. Elles permettent de s'assurer que les projets de construction, de génie civil, d'architecture ou de tout autre domaine impliquant la conception et la réalisation d'ouvrages sont réalisés de manière sûre, efficace et durable.",
      viewAll: false
    },
    {
      titre: "Decoration",
      libelle: "En tant qu'expert, nous pouvons vous dire que les décorations intérieures et extérieures des bâtiments jouent un rôle clé dans la création d'un environnement attractif et fonctionnel. Les décorations intérieures permettent de créer une ambiance agréable, chaleureuse et fonctionnelle à l'intérieur des bâtiments. Les décorations extérieures permettent quant à elles de donner une image attractive et harmonieuse à l'extérieur des bâtiments.",
      viewAll: false
    },
    {
      titre: "Espace Vert",
      libelle: "En tant qu'expert, nous pouvons vous dire que les espaces verts à l'intérieur des maisons sont bénéfiques à de nombreux égards. Les plantes ont un effet positif sur la santé physique et mentale, ainsi que sur la qualité de l'air intérieur. Les espaces verts peuvent également contribuer à la réduction du stress et à l'amélioration de la qualité de vie",
      viewAll: false
      
    },
    {
      titre: "La Gestion Des Immobiliers",
      libelle: "La gestion des biens immobiliers est une pratique essentielle pour tout propriétaire ou investisseur immobilier. Cela implique la gestion de tous les aspects d'une propriété, y compris la maintenance, la location, la collecte de loyers et la gestion des finances.",
      viewAll: false
      
    }


  ]
  public service2=[
    {
      titre: "Etudes Technique Des Ouvrages",
      libelle: "Les études techniques des ouvrages sont d'une importance primordiale dans de nombreux domaines. Elles permettent de s'assurer que les projets de construction, de génie civil, d'architecture ou de tout autre domaine impliquant la conception et la réalisation d'ouvrages sont réalisés de manière sûre, efficace et durable.",
      viewAll: false
    },
    {
      titre: "Decoration",
      libelle: "En tant qu'expert, nous pouvons vous dire que les décorations intérieures et extérieures des bâtiments jouent un rôle clé dans la création d'un environnement attractif et fonctionnel. Les décorations intérieures permettent de créer une ambiance agréable, chaleureuse et fonctionnelle à l'intérieur des bâtiments. Les décorations extérieures permettent quant à elles de donner une image attractive et harmonieuse à l'extérieur des bâtiments.",
      viewAll: false
      
    },
    {
      titre: "Espace Vert",
      libelle: "En tant qu'expert, nous pouvons vous dire que les espaces verts à l'intérieur des maisons sont bénéfiques à de nombreux égards. Les plantes ont un effet positif sur la santé physique et mentale, ainsi que sur la qualité de l'air intérieur. Les espaces verts peuvent également contribuer à la réduction du stress et à l'amélioration de la qualité de vie",
      viewAll: false
    },
    {
      titre: "La Gestion Des Immobiliers",
      libelle: "La gestion des biens immobiliers est une pratique essentielle pour tout propriétaire ou investisseur immobilier. Cela implique la gestion de tous les aspects d'une propriété, y compris la maintenance, la location, la collecte de loyers et la gestion des finances.",
      viewAll: false
    }

  ]
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  changeTheViewAllStatus(tab: any,index: number){
    tab[index].viewAll = !tab[index].viewAll 
    // this.cdr.detectChanges()
  }
}
