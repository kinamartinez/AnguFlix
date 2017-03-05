/**
 * Created by karina on 02/03/17.
 */

app.service('allMovies', function () {

    var movies = [{
        movieName: "Lord of The Rings",
        movieImg: ("http://i0.kym-cdn.com/photos/images/original/000/205/306/animaatjes-lord-of-the-rings-73676.jpg"),
        movieYear: "2001",
        movieComment: "The Lord of the Rings (also promoted as The Lord of the Rings: The Motion Picture Trilogy) is a film series consisting of three high fantasy adventure films directed by Peter Jackson. They are based on the novel The Lord of the Rings by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring (2001), The Two Towers (2002) and The Return of the King (2003). They were distributed by New Line Cinema.",
        price: 10
    },
        {
            movieName: "Shawshank Redemption",
            movieImg: ("http://t0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm"),
            movieYear: "1994",
            movieComment: "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, and starring Tim Robbins and Morgan Freeman. Adapted from the Stephen King novella Rita Hayworth and Shawshank Redemption",
            price: 10
        },
        {
            movieName: "Eat Pray and Love",
            movieImg: ("https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Eat_pray_love_ver2.jpg/220px-Eat_pray_love_ver2.jpg"),
            movieYear: "2010",
            movieComment: "Eat Pray Love is a 2010 American romantic comedy-drama film starring Julia Roberts as Elizabeth Gilbert, based on Gilbert's best-selling memoir Eat, Pray, Love. Ryan Murphy co-wrote and directed the film, which opened in the United States on August 13, 2010.",
            price: 8
        },
        {
            movieName: "Inside Out",
            movieImg: ("https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Inside_Out_%282015_film%29_poster.jpg/220px-Inside_Out_%282015_film%29_poster.jpg"),
            movieYear: "2015",
            movieComment: "Riley Andersen is born in Minnesota and within her mind, five personifications of her basic emotions—Joy, Sadness, Fear, Disgust, and Anger—gradually come to life and influence her actions via a console in her mind's Headquarters. As she grows up, her experiences become memories, stored in colored orbs, which are sent into long-term memory each night. ",
            price: 9
        },
        {
            movieName: "Interstellar",
            movieImg: ("https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Interstellar_film_poster.jpg/220px-Interstellar_film_poster.jpg"),
            movieYear: "2014",
            movieComment: "Sometime in the 21st century, a series of crop blights on Earth threatens humanity's survival. Joseph Cooper, a widowed former NASA pilot, runs a farm with his father-in-law, son Tom, and daughter Murphy, who believes her bedroom is haunted by a poltergeist. Living in a post-truth society (Cooper is reprimanded at school for telling Murphy that the Apollo missions did indeed happen), Cooper encourages Murphy to carefully observe and record what she sees. They realize that a pattern of dust on the floor is created by gravity variations and are able to decode it as a set of geographic coordinates.",
            price: 8

        },

        {
            movieName: "Frozer",
            movieImg: ("https://lumiere-a.akamaihd.net/v1/images/homepage_hero_frozen_winter_18c81bd7.jpeg?region=0,0,480,240"),
            movieYear: "2013",
            movieComment: "Princess Elsa of Arendelle possesses cryokinetic magic, often using it to play with her younger sister Anna. After Elsa accidentally injures Anna with her magic, their parents, the King and Queen, rush both siblings to a colony of trolls led by Grand Pabbie. He heals Anna, but alters her memories to remove traces of Elsa’s magic, warning Elsa that she must learn to control her powers. The King and Queen isolate both sisters within the castle. Elsa shuts out Anna, causing a rift between them. Elsa suppresses her magic rather than mastering it, causing her to become more insecure. When the sisters are teenagers, their parents die at sea during a storm.",
            price: 7


        }];

    var myCollection = {budget:0, films: []};
    var yearArr = [1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
    var trashClicked = {content: false};
    var modalBudget = {content:false};

    var addToMyCollection = function (movie, cb) {
        if (myCollection.budget < movie.price) {
            return cb("You do not have enought money!")
        }

        for (var i = 0; i < myCollection.films.length; i++) {
            //      console.log(obj.movieName);
            if (myCollection.films[i].movieName === movie.movieName) {
                return cb("Already added")
            }
        }


        myCollection.films.push(movie);
        myCollection.budget -= movie.price;
        cb(null)

    };

    var test = function (myArg){
        console.log(myArg);
        myCollection.budget = myArg;
    }


    var removeMovie = function ($index) {
        myCollection.films.splice($index, 1)
    };

    var trashBtn = function () {
        console.log(trashClicked.content);
        if (!trashClicked.content) {
            trashClicked.content = true;

        }
        else {
            trashClicked.content = false;

        }
    };
    var years = function () {
        for (var i = 1980; i <= 2017; i++) {
            yearArr.push(i)
        }
        console.log(yearArr)
    };


    return {
        addToMyCollection: addToMyCollection,
        removeMovie: removeMovie,
        trashBtn: trashBtn,
        trashClicked: trashClicked,
        movies: movies,
        myCollection: myCollection,
        yearArr: yearArr,
        years: years,
        test: test

    }

})
;