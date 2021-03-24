CREATE DATABASE animalgame;

SHOW DATABASES;

USE animalgame;

CREATE TABLE images(
	id INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(30) NOT NULL,
    Link VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
    );

INSERT INTO `images` (`Name`, `Link`) VALUES ('cat', 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg');
INSERT INTO `images` (`Name`, `Link`) VALUES ('frog', 'https://upload.wikimedia.org/wikipedia/commons/5/55/Atelopus_zeteki1.jpg');
INSERT INTO `images` (`Name`, `Link`) VALUES ('snake', 'https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/R-Z/Super%20Snakes/Snakes-fangs.ngsversion.1413818001976.adapt.1900.1.jpg');
INSERT INTO `images` (`Name`, `Link`) VALUES ('kangaroo', 'https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAzNy8wOTMvb3JpZ2luYWwva2FuZ2Fyb28uanBn');
INSERT INTO `images` (`Name`, `Link`) VALUES ('spider', 'https://www.healthline.com/hlcmsresource/images/spider-bites/642x361_Spider_Bites_Tarantula.jpg');
INSERT INTO `images` (`Name`, `Link`) VALUES ('crocodile', 'http://www.barenakedislam.com/wp-content/uploads/2015/07/hand.jpg');
INSERT INTO `images` (`Name`, `Link`) VALUES ('human', 'http://www.trbimg.com/img-58b0dc48/turbine/la-pol-updates-everything-president-trump-touts-effort-to-combat-human-1487985615');
INSERT INTO `images` (`Name`, `Link`) VALUES ('snail', 'https://www.shadertoy.com/media/shaders/ld3Gz2.jpg');
INSERT INTO `images` (`Name`, `Link`) VALUES ('loin', 'http://www.goodnet.org/photos/620x0/17904.jpg');
INSERT INTO `images` (`Name`, `Link`) VALUES ('fox', 'http://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_fennec2.jpg');
INSERT INTO `images` (`Name`, `Link`) VALUES ('panda', 'http://ei.marketwatch.com//Multimedia/2016/09/04/Photos/ZH/MW-EV308_panda0_20160904203620_ZH.jpg?uuid=c44633e8-7300-11e6-9c04-0015c588dfa6');
INSERT INTO `images` (`Name`, `Link`) VALUES ('tigar', 'https://www.blackpoolzoo.org.uk/sites/blackpoolzoo.org.uk/files/styles/carousel/public/animal/tiger1.png?itok=oCqGGfGm?itok=oCqGGfGm');
INSERT INTO `images` (`Name`, `Link`) VALUES ('lamp', 'https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/400/1x/cbbc/lambs.jpg');
INSERT INTO `images` (`Name`, `Link`) VALUES ('owl', 'http://kids.sandiegozoo.org/sites/default/files/styles/landing_page_view/public/2017-07/animals-hero-burrowingowl.jpg?itok=riWfUhL3');
INSERT INTO `images` (`Name`, `Link`) VALUES ('elephant', 'https://d31j74p4lpxrfp.cloudfront.net/sites/default/files/styles/landscape_driver_block/public/us_files/adult_and_infant_elephant_hub_page_3_0.jpg?itok=UG47LpoM');
INSERT INTO `images` (`Name`, `Link`) VALUES ('tortoise', 'http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_african_spurred_tortoise.jpg');
INSERT INTO `images` (`Name`, `Link`) VALUES ('ant', 'http://pestworldforkids.org/media/6378/Pavement-ant.jpg');
INSERT INTO `images` (`Name`, `Link`) VALUES ('lizard', 'http://animals.sandiegozoo.org/sites/default/files/2017-07/animals-lizard-redheadedrockagama.jpg');
INSERT INTO `images` (`Name`, `Link`) VALUES ('fly', 'https://cdn.thinglink.me/api/image/918955132966666242/1240/10/scaletowidth');
INSERT INTO `images` (`Name`, `Link`) VALUES ('mosquito', 'https://www.cdc.gov/features/stopmosquitoes/stopmosquitoes_456px.jpg');

CREATE USER 'WaelAlghamdi'@'localhost' 
  IDENTIFIED BY 'w12345w';

GRANT all  ON AnimalGame.* 
  TO 'WaelAlghamdi'@'localhost';

select * from images;


