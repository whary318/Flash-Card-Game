# Flash-Card-Game
This is a simple Flash card game where the player matches the creature's name to the picture.
The game consists of pictures and 4 options with one representing the picture.

This project is part of my web design course. 


## Releases

### Version 1 (JS Version)
Base version of the game. Done in HTML and JavaScript. All of the page is run on the client side.

#### How to use
* Go to Releases, select "JS version" and download the "Source code (zip)".
* Open the index file using your browser of choice.

#### Technologies
* HTML
* Javascript.
 
 ```All images used are not owned by me. Use links in the Functionality.js file for original sources.```


### Version 2 (PHP Version)
Second iteration of the game. Done in HTML, CSS, JavaScript, PHP, and MySQL. All of the page is compiled on the server side and sent to the client to run.

#### What you will need
* A server side software to run the PHP pages (or any other means to do so). I recommend using XAMPP
* A MySQL server to run the script in. XAMPP comes with a MySQL server in case you end up using it.
* You will need a way to run the script. Here are two ways you could do it.
   *  Use the PHPMyAdmin page and go the SQL page. you can enter the script there.
   *  Or you could use a standalone software such as MySQL Workbench

#### How to setup
* Have the needed software installed.
* Go to Releases, select "PHP version" and download the "Source code (zip)". 
* Navigate to where you installed XAMPP and then open "htdocs" folder.
* Unzip the files into the "htdocs" folder.
* Open the PHPMyAdmin page and navigate to SQL tab. 
* upload the .sql file and excute.
now you can simply open the webpage in your browser using "localhost".

#### Technologies
* HTML
* CSS
* Javascript.
* PHP
* MySQL
 
 ```All images used are not owned by me. Use links in the MYSQL_scripts.sql file for original sources.```

### Version 3 (AJAX Version)
This is the third and last iteration of the game. In this version, the only difference is that now the pages will load what it needs and not the whole page multiple times. (the server only compiles what is needed and sends it over)

#### How to setup
This version is basically the same as version 2 with the additional use of AJAX. For setup, please follow version 2's setup.

#### Technologies
* HTML
* CSS
* Javascript.
* PHP
* MySQL
* AJAX
 
 ```All images used are not owned by me. Use links in the MYSQL_scripts.sql file for original sources.```