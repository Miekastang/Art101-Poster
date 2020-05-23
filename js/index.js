

//take the user input Title - form field
//var junction_font = new FontFace('Junction Regular', 'url(fonts/junction-regular.woff)');
//junction_font.load().then(function(loaded_face) {
//	document.fonts.add(loaded_face);
//  	document.body.style.fontFamily = '"Junction Regular", Arial';
//}).catch(function(error) {
	// error occurred
});
//set the font for the genra
function setfont(){
  // this loads a font into the javascript I think.
  var Romance = FontFace("family",url here);
  var Action = FontFace("family", url here)
  //blah blah
  //blah blah
	//this will give a number for the genra someone chooses
  var index= document.getElementById("genra").value;
	//this would set the fonts into an array
  var font= [Romance, Action , font3, font 4];
  index.style.font = font[index];

  }

}
  // create button function to submit
  var button = document.getElementById("submit");
    submit.addEventListener("click", function(){
      var movieName= document.getElementById("movie-name").value;
      var titleGenera = document.getElementById("genera").options.selectedIndex;
      var movieName= document.getElementById("movie-name").value;
      //assign fonts to values of genera
      var titleGenera = document.getElementById("genera").options.selectedIndex;



      console.log(movieName);
      console.log (titleGenera);
      console.log (chosenIMG);

      var outputEl = document.getElementById("output");
      var imageEl = document.createElement('img');
          imageEl.src =  chosenImage;
          outputEl.innerHTML = movieName + "</br>" + chosenIMG;
          outputEl.appendChild(imageEl);


    });

//Get poster image
var chosenIMG = "IMG_1916.JPG";
//Set image buttons as variables
var imgA = document.getElementById("one")
  imgA.addEventListener("click", function(){
    chosenIMG = "img/horrorV1.jpg"
  });
var imgB = document.getElementById("two")
      imgB.addEventListener("click", function(){
        chosenIMG = "img/romanticV2.jpg"
      });
var imgC = document.getElementById("three")
      imgC.addEventListener("click", function(){
         chosenIMG = "img/scifiV1.jpg"
      });
var imgD = document.getElementById("four")
      imgD.addEventListener("click", function(){
          chosenIMG = "img/superheroV1.jpg"
        });
var imgE = document.getElementById("five")
      imgE.addEventListener("click", function(){
         chosenIMG = "img/westernV2.jpg"
      });
var imgF = document.getElementById("six")
      imgF.addEventListener("click", function(){
         chosenIMG = "img/rainyV1.jpg"
      });





//Outputs




// Run
//button();
