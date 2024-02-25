```
# **************************************************************************** #
#                                                                              #
#                                                         .--.    No           #
#    README.md                                           |o_o |    Pain        #
#                                                        |:_/ |     No         #
#    By: YohanGH <YohanGH@proton.me>                    //    ''     Code      #
#                                                      (|     | )              #
#    Created: 2023/12/08 15:43:03 by YohanGH           '__   _/_               #
#    Updated: 2023/12/08 15:43:03 by YohanGH          (___)=(___)              #
#                                                                              #
# **************************************************************************** #
```
# Gestionnaire de Paquets Anki

## Description

Le projet "Gestionnaire de Paquets Anki Personnalisés" offre une solution innovante pour le stockage, la gestion et la personnalisation de paquets d'apprentissage Anki. Développé pour répondre aux besoins variés des apprenants dans de multiples domaines, ce gestionnaire permet aux utilisateurs de héberger une vaste collection de paquets créés spécifiquement pour couvrir différents sujets et thématiques.

L'objectif principal est de fournir une plateforme flexible où les utilisateurs peuvent non seulement accéder à une bibliothèque riche en contenu éducatif, mais aussi fusionner divers paquets pour créer une expérience d'apprentissage sur mesure. Cette fonctionnalité est particulièrement utile pour ceux qui souhaitent approfondir leurs connaissances dans des domaines spécifiques ou combiner des sujets pour une étude interdisciplinaire.

En plus de la récupération de paquets existants, les utilisateurs peuvent également contribuer à la bibliothèque en créant et en partageant leurs propres ensembles de cartes, enrichissant ainsi la communauté d'apprenants Anki. Que ce soit pour les étudiants, les professionnels ou les autodidactes, ce gestionnaire de paquets vise à rendre l'apprentissage plus accessible, organisé et personnalisé.

## Documentation

Pour des guides détaillés, des exemples et des informations sur la contribution au projet, veuillez consulter notre [Wiki](https://github.com/YohanGH/anki-package-manager/wiki).

## Langue des Cartes
Toutes les cartes de ce projet sont rédigées en français pour faciliter l'apprentissage pour les francophones.

## Disponibilité sur Anki
Les paquets sont également disponibles directement sur la plateforme Anki. Vous pouvez les trouver et les ajouter à votre collection via l'option d'ajout de deck communautaire d'Anki.

## Utilisation

###Création de Paquets

Le Gestionnaire de Paquets Anki Personnalisés facilite la création de paquets sur mesure avec une structure de question-réponse (Recto/Verso) ou avec des mots cachés. Voici les étapes pour créer vos propres paquets :

Choisir le Type de Paquet : Sélectionnez si vous souhaitez créer un paquet Recto/Verso traditionnel ou un paquet avec des mots cachés.
Saisir les Données : Entrez les informations de votre paquet. Pour un paquet Recto/Verso, saisissez la question (Recto) et la réponse correspondante (Verso). Pour des mots cachés, saisissez le texte avec les mots à cacher.
Personnalisation : Utilisez les options de personnalisation pour adapter l'apparence de vos cartes, comme le formatage du texte et l'ajout d'images ou de sons si nécessaire.
Sauvegarder le Paquet : Une fois que vous avez fini de saisir les données, sauvegardez le paquet pour l'ajouter à votre bibliothèque.

### Personnalisation avec CSS

Pour améliorer l'expérience utilisateur et rendre l'apprentissage plus agréable, notre gestionnaire permet une personnalisation avancée des cartes grâce à des styles CSS. Voici quelques exemples de personnalisation que vous pouvez appliquer :

Choix de la Police de Caractère : Modifiez la police de caractère pour une meilleure lisibilité ou pour correspondre à vos préférences esthétiques.
Couleurs et Arrière-plans : Choisissez les couleurs de texte et d'arrière-plan pour une meilleure distinction visuelle et un confort d'apprentissage.
Mise en Forme du Texte : Appliquez des styles comme le gras, l'italique ou le souligné pour mettre en évidence des informations clés.
Responsive Design : Assurez-vous que vos cartes sont bien présentées sur différents appareils, du smartphone à l'ordinateur de bureau.
Pour appliquer un style CSS, accédez à la section de personnalisation des cartes dans le gestionnaire et saisissez ou modifiez le code CSS selon vos besoins. Voici un exemple de base :

```css
.card {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333333;
}
```

Cet exemple définit une police de caractère, un arrière-plan, et une couleur de texte pour les cartes. Vous pouvez étendre ou modifier ces styles selon vos préférences.


## Arborescence

```
SampleDecks/
├── Cybersecurity
│   ├── Guide_Pare-Feux.apkg
│   ├── Guide_Wifi.apkg
│   ├── Profil_professionnels_cybersécurité.apkg
│   └── Vie_privée_et_confidentialité_des_données_sous_Windows10.apkg
├── Editors_Shortcuts
│   ├── MacOS
│   │   └── Raccoucis_MacOS.apkg
│   ├── Vim
│   │   └── Raccourcis_Vi_Vim.apkg
│   └── Zsh
│       └── Alias_ZSH.apkg
├── Education
│   └── Guides_pour_Parents_Enseignants.apkg
├── Personal_Development
│   ├── Algocratie.apkg
│   ├── Linkedin.apkg
│   ├── Mind_Map.apkg
│   ├── Raconter_une_histoire.apkg
│   └── Unique.apkg
└── Programming
    ├── Agile
    │   ├── Agile.apkg
    │   ├── Kanban.apkg
    │   └── Scrum.apkg
    ├── GestionDeProjet
    │   └── Tableau_de_bord.apkg
    ├── Shell
    │   └── Shell_Commands_MacOS.apkg
    ├── UX_and_Ergonomics
    │   ├── Design.apkg
    │   └── Ergonomie_web_UX_Design.apkg
    └── Web_Development
        ├── CSS
        │   └── CSS.apkg
        ├── Git
        │   └── Git.apkg
        ├── HTML
        │   └── HTML.apkg
        └── Markdown
            └── Markdown.apkg
```

## Licence

Ce projet est distribué sous la Licence Publique Générale GNU (GPL), ce qui garantit aux utilisateurs la liberté de partager et de changer toutes les versions du programme, pour veiller à ce que le logiciel soit libre pour tous ses utilisateurs. Pour plus de détails, veuillez consulter le fichier LICENSE dans le dépôt.


