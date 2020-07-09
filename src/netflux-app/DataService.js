export class DataService {

    static programmes = [
        {category : "film",
        id : 1,
        imageBig : "http://fr.web.img3.acsta.net/r_1280_720/pictures/15/10/13/15/12/514297.jpg",
        imageSmall : "http://fr.web.img4.acsta.net/r_1280_720/pictures/15/09/29/13/42/151291.jpg",
        title : "Forrest Gump", 
        rating : 4.6, 
        duration : 140,
        release : "5/10/1994", 
        description : "Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump.", 
        typeFilm : ["romance","drame","comédie"], 
        castingImage : ["http://fr.web.img6.acsta.net/r_1280_720/pictures/20/01/30/15/03/1454869.jpg", "http://fr.web.img3.acsta.net/r_1280_720/pictures/17/04/18/17/05/547640.jpg", "http://fr.web.img6.acsta.net/r_1280_720/pictures/17/05/18/10/54/541442.jpg", "http://fr.web.img2.acsta.net/r_1280_720/pictures/16/02/10/10/03/024816.jpg"], 
        castingNom : ["Tom Hanks", "Gary Sinise", "Robin Wright", "Mykelti Williamson"],
        nbrSaisons : 0,
        nbrEpisodes : 0},

        {category : "serie",
        id : 2,
        imageBig : "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/12/12/12/13/2421997.jpg",
        imageSmall : "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/12/10/12/41/2871222.jpg",
        title : "The Witcher", 
        rating : 4.0, 
        duration : 480,
        release : "2019", 
        description : "Adaptation Live de la saga littéraire du Sorceleur.Le sorceleur Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.", 
        typeFilm : ["aventure","fantastique"], 
        castingImage : ["http://fr.web.img6.acsta.net/r_1280_720/pictures/16/03/22/17/06/408269.jpg", "http://fr.web.img2.acsta.net/r_1280_720/pictures/19/12/19/11/32/4678376.jpg", "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/12/27/01/11/4338429.jpg", "http://fr.web.img5.acsta.net/r_1280_720/pictures/19/12/19/11/15/3593023.jpg"], 
        castingNom : ["Henry Cavill", "Freya Allan", "Anya Charlotra", "Joey Batey"],
        nbrSaisons : 2,
        nbrEpisodes : 16},
        
    ]

    static programme = undefined

    static favorisProgrammes = []
}