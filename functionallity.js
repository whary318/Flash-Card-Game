var animalNames = new Array("cat", "frog", "snake", "kangaroo", "spider", "crocodile", "human", "snail", "loin", "fox", "panda", "tigar", "lamp", "owl", "elephant", "tortoise", "ant", "lizard", "fly", "mosquito");
var picturesUrls = new Array("http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg", "https://upload.wikimedia.org/wikipedia/commons/5/55/Atelopus_zeteki1.jpg", 
"https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/R-Z/Super%20Snakes/Snakes-fangs.ngsversion.1413818001976.adapt.1900.1.jpg", 
"https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAzNy8wOTMvb3JpZ2luYWwva2FuZ2Fyb28uanBn", "https://www.healthline.com/hlcmsresource/images/spider-bites/642x361_Spider_Bites_Tarantula.jpg", 
"http://www.barenakedislam.com/wp-content/uploads/2015/07/hand.jpg", "http://www.trbimg.com/img-58b0dc48/turbine/la-pol-updates-everything-president-trump-touts-effort-to-combat-human-1487985615", 
"https://www.shadertoy.com/media/shaders/ld3Gz2.jpg", "http://www.goodnet.org/photos/620x0/17904.jpg", "http://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_fennec2.jpg", 
"http://ei.marketwatch.com//Multimedia/2016/09/04/Photos/ZH/MW-EV308_panda0_20160904203620_ZH.jpg?uuid=c44633e8-7300-11e6-9c04-0015c588dfa6", 
"https://www.blackpoolzoo.org.uk/sites/blackpoolzoo.org.uk/files/styles/carousel/public/animal/tiger1.png?itok=oCqGGfGm?itok=oCqGGfGm", "https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/400/1x/cbbc/lambs.jpg", 
"http://kids.sandiegozoo.org/sites/default/files/styles/landing_page_view/public/2017-07/animals-hero-burrowingowl.jpg?itok=riWfUhL3", 
"https://d31j74p4lpxrfp.cloudfront.net/sites/default/files/styles/landscape_driver_block/public/us_files/adult_and_infant_elephant_hub_page_3_0.jpg?itok=UG47LpoM", 
"http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_african_spurred_tortoise.jpg", "http://pestworldforkids.org/media/6378/Pavement-ant.jpg",
"http://animals.sandiegozoo.org/sites/default/files/2017-07/animals-lizard-redheadedrockagama.jpg", "https://cdn.thinglink.me/api/image/918955132966666242/1240/10/scaletowidth", 
"https://www.cdc.gov/features/stopmosquitoes/stopmosquitoes_456px.jpg");
var choices, mainPicture, correctChoice, submitButton, nextButton, labels;
var playerCounter = 0;
var gameCounter = 0;

document.writeln('<style rel="text/stylesheet">');
document.writeln('body { text-align: center;}');
document.writeln('</style>');

document.writeln('<p id="counters">Pictures shown: ' + gameCounter);
document.writeln('<br>Correct Answers: ' + playerCounter + '</p>');

document.writeln('<h1>what is in the picture?</h1>');
document.writeln('<div><img id="mainPicture" src="Blank.jpg" width = "50%"></div><br>');

document.writeln('<div>');
document.writeln('<form action="#">');
document.writeln('<input type="radio" name="answers" value="" /><label></label>');
document.writeln('<input type="radio" name="answers" value="" /><label></label>');
document.writeln('<input type="radio" name="answers" value="" /><label></label>');
document.writeln('<input type="radio" name="answers" value="" /><label></label><br>');
document.writeln('<input id="submitButton" type="button" value="correct answer" />');
document.writeln('<input id="changePicture" type="button" value="Next" />');
document.writeln('</form>');
document.writeln('</div>');

//to setup the functions of the webpage.
function start() {
    submitButton = document.getElementById("submitButton");
    nextButton = document.getElementById("changePicture");
    labels = document.getElementsByTagName("label");
    submitButton.addEventListener("click", submitionHandler);
    nextButton.addEventListener("click", nextPicture);
    choices = document.getElementsByName("answers");
    nextPicture();
}

//setting up the tasks for both buttons.
function submitionHandler() {
    if(choices[correctChoice].checked)
        playerCounter++;
    document.getElementsByTagName('label')[correctChoice].style.backgroundColor =  'yellow';
    updateCounter();
}
function nextPicture() {
    gameCounter++;
    updateCounter();

    mainPicture = Math.floor(Math.random() * (animalNames.length));
    setImage(mainPicture);
    correctChoice = Math.floor(Math.random() * 4);
    setChoices(correctChoice, mainPicture);
    
    for(i = 0; i < 4; i++){
        var otherchoices = Math.floor(1 + Math.random() * (animalNames.length - 1));
        if(i != correctChoice){
            if(choices[0].value != animalNames[otherchoices] && choices[1].value != animalNames[otherchoices] &&
                 choices[2].value != animalNames[otherchoices] && choices[3].value != animalNames[otherchoices])
                setChoices(i, otherchoices);
            else i--;
        }
    }
}

// to set both the image and the choices that go with it.
function setChoices(choiceNumber, choiceValue){
    choices[choiceNumber].setAttribute("value", animalNames[choiceValue]);
    labels[choiceNumber].innerHTML = animalNames[choiceValue];
    document.getElementsByTagName('label')[choiceNumber].style.backgroundColor =  'white';
}
function setImage(imgNumber){
    document.getElementById("mainPicture").src = picturesUrls[imgNumber];
}

//to update elements of the webpage.
function updateCounter() {
    document.getElementById("counters").innerHTML = 'Pictures shown: ' + gameCounter +
    '<br>Correct Answers: ' + playerCounter;
}

window.addEventListener("load", start);