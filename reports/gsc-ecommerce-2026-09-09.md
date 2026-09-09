# Nemsi Media : suivi Search Console et page e-commerce

## Données fournies par le propriétaire

Exports Search Console du 9 septembre 2026, période de performance du 7 juin au 6 septembre 2026. La propriété couvre nemsimedia.ma. Les constats ci-dessous complètent l’audit initial ; la connexion directe de Search Console à OpenSEO n’est pas nécessaire pour lire ces exports.

- Ensemble du site : 14 clics et 1 742 impressions. Maroc : 13 clics et 1 623 impressions.
- Page `/fr/services/ecommerce-maroc` : 487 impressions, aucun clic, position moyenne 47,9. Aucun affichage enregistré du 31 août au 6 septembre dans l’export fourni ; la cause n’est pas établie.
- Requêtes de cette page : « site web pour commerce local maroc » (55 impressions, position 55,29), « ecommerce maroc » (44, position 31,23), « site e-commerce pour petite entreprise maroc » (40, position 77,12), « création site e-commerce maroc » (22, position 51,45).
- Ces nombres sont des impressions de la page pendant la période, pas des volumes mensuels de recherche. Les onglets du fichier filtré n’ont pas tous les mêmes totaux : Pages affiche 487 impressions, Pays et Appareils en totalisent chacun 391. Ne pas les additionner ou en déduire des parts exactes sans vérification.

## Faits vérifiés dans les captures Search Console

- Indexation au 4 septembre : 52 URL indexées et 32 non indexées, pour toutes les URL connues (périmètre différent du sitemap).
- Les 19 URL « explorées, actuellement non indexées » sont des ressources : 15 images, `/api/og`, 2 polices et le manifeste. Aucun article ou service dans cette liste.
- Les 8 URL « détectées, actuellement non indexées » sont 4 articles et 4 services. La date 1970 dans l’export ne constitue pas une date réelle d’exploration.
- `/ar/services/landing-page-maroc` : test en direct réussi et demande d’indexation confirmée par capture. Indexation effective encore non confirmée.
- Sitemap `https://www.nemsimedia.ma/sitemap.xml` lu avec succès le 9 septembre : 62 pages découvertes. Cela ne signifie pas 62 pages indexées.
- Les 5 URL avec redirection atteignent une page HTTP 200 lors du contrôle direct. Le domaine sans www renvoie un 307 vers www ; la racine HTTP passe par trois redirections. À améliorer au niveau du routage/hébergement, sans attribuer à ce seul point le classement observé.
- Page e-commerce française : indexée, canonical déclaré identique à celui choisi par Google, sitemap reconnu. Dernière exploration affichée : 4 août 2026, Googlebot smartphone, récupération réussie, exploration et indexation autorisées.
- Test en direct e-commerce réussi le 9 septembre. Le propriétaire indique avoir demandé une nouvelle indexation. Ce signalement ne confirme pas une nouvelle exploration achevée.
- Liens externes : aucun lien enregistré dans le rapport fourni. Ce n’est pas la preuve d’une absence totale de liens sur le Web.
- Aucune action manuelle ni aucun problème de sécurité détecté dans les rapports fournis.
- PageSpeed, page `/fr` : performance 96 mobile, 98 ordinateur ; SEO, accessibilité et bonnes pratiques 100. Aucune donnée d’expérience utilisateur disponible. Ces scores de laboratoire ne constituent pas des mesures terrain ni un score de classement.

## Modification locale de la page e-commerce française

Le titre principal « Création de site e-commerce au Maroc » correspond déjà au service et reste conservé. La description pour les résultats de recherche et l’introduction précisent le public : commerces locaux et petites entreprises. Le texte présente les décisions de catalogue, stock, paiement, livraison et administration. Quatre questions sont ajoutées : site vitrine ou boutique, petite entreprise, facteurs de budget et préparation d’un devis. Les réponses ne fixent ni prix, ni délai, ni résultat commercial non confirmé.

Le composant existant génère le texte visible et les données FAQ à partir des mêmes contenus. Aucun changement d’URL, de canonical ou de règles d’indexation. Les liens de la page d’accueil et le guide de choix des services préparés précédemment renforcent déjà l’accès à cette offre dans le code local.

**Statut : modifications locales, non déployées.** Le premier audit HTML décrit l’état antérieur aux exports Search Console ; le présent document consigne les informations plus récentes. Après publication, comparer des périodes complètes de même durée, en séparant données globales et requêtes de la page. Une demande d’indexation ne garantit ni date de passage de Google ni hausse de classement.
