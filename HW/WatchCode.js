var slider;
var whatsup;

var hand;
var img2;
var img3;
var img4;
var img5;
var img6;
var img8;
var img9;
var img10;
var img11;
var img12;
var img13;
var img14;
var img15;
var img16;
var img17;
var img18;
var img19;
var img20;
var img21
var myFont;
var imgX ;

var myLink;

var index=0;

function preload(){
  myFont=  loadFont('JosefinSans-SemiBold.ttf');
  hand = loadImage("hand-and-arm-hi.png"); //http://www.clker.com/clipart-hand-and-arm.html
  img2 = loadImage("1860.png"); //http://antiqwatch.com/old-watches/famous-american-railroad-pocket-watches.html
  img3 = loadImage("1870.png"); //http://camberwatches.com/press.html
  img4 = loadImage("1880.png"); //https://werden.deviantart.com/art/pocketwatch-182925540
  img5 = loadImage("1890.png"); //https://eveyd.deviantart.com/art/Antique-Vintage-Pocket-Watch-png-268108244
  img6 = loadImage("1900.png"); //http://www.pngmart.com/image/20100
  img7 = loadImage("1910.png"); //https://www.rubylane.com/item/576196-1405-007/Elgin-Antique-Ladies-Open-Face-Pocket
  img8 = loadImage("1920.png"); //http://www.montanawatch.com/1920/n21k0h7ln8ncsaqpalyq9ik81s3a4u
  img9 = loadImage("1930.png"); //http://www.pngmart.com/image/20100
  img10 = loadImage("1940.png"); //http://www.pngmart.com/image/20100
  img12 = loadImage("1950.png"); //http://www.pngmart.com/image/20100
  img13 = loadImage("1960.png"); //http://www.pngmart.com/image/20100
  img14 = loadImage("1970.png"); //https://fcbayern.com/shop/us/vintage-watch/21777/
  img15 = loadImage("1980.png"); //http://www.pngmart.com/image/20100
  img16 = loadImage("1990.png"); //http://www.pngmart.com/image/20100
  img17 = loadImage("2000.png"); //http://www.pngmart.com/image/20100
  img18 = loadImage("2010.png"); //http://www.pngmart.com/image/20100
  img19 = loadImage("2020.png"); //http://booredatwork.com/lenovo-magic-view-smartwatch-concept/
  img20 = loadImage("clear.png")//https://img00.deviantart.net/9bd7/i/2016/008/0/f/robotic_hand_by_digitalwideresource-d9n72vu.png
  img21 = loadImage("2030.png") //https://img00.deviantart.net/9bd7/i/2016/008/0/f/robotic_hand_by_digitalwideresource-d9n72vu.png
}
var button;



function setup() {
  createCanvas(2000,2000);
  background(184, 196, 216);
  textFont(myFont);
  slider = createSlider(1860, 2030,1860,10);
  image(hand, 350,150,800,300);
  imgX=[img2,img3,img4,img5,img6,img7,img8,img9,img10,img12,img13,img14,img15,img16,img17,img18,img19,img20];
  myLink = createA('https://www.youtube.com/watch?v=bYosgmZa25c','of a baby who is VERY excited about watch history!');
  myLink.style("font-size", "18px");
  myLink.style("color", "#ff0000");
  myLink.position(490,500);
  myLink.hide();

}

function hand(){
  image(hand, 350,150,800,300);
}

function draw() {
  background(184, 196, 216);
  textboxes();
  image(hand, 350,150,800,300);
  image(imgX[index%imgX.length],700,200,180,180);
  slider.position(600, 400);
  slider.style('width', '110px');
  whatsup = slider.value();
  var hi = map(whatsup,1860,2030,580,710);
  text(whatsup, hi, 400);
  slider.changed(changeWatch)
  textSize(40);
  text("The History Of The Watch",450,60)
  textSize(20);
  text("move the slider or click and use your arrow keys to explore the ~fascinating~ history!",290,100);
}

function changeWatch(){
  index = ((slider.value()-1860)/10);
  background(184, 196, 216);
}

function changeDate() {
slider.value(whatsup+10);
console.log(whatsup);
if (whatsup>2020){
  console.log("hi liv")
  whatsup=1850;
  changeDate();

  }
  index = index+1;
  background(184, 196, 216);
}

 function textboxes(){
 if (whatsup==1860){
   text("The 1860s saw the first development of the wristwatches. People began innovating clocks to be smaller and fit on one’s wrist, but didn’t officially make the wristwatch until 1868 when Patek Philippe of Patek Philippe & Co. made the first wristwatch.",400,450,550,800);
 fill(50);
   }
 if (whatsup==1870){
     text("The 1870s began the emergence of more complex wristwatches, not including the first split-second hands on them. Mechanics began making high-end luxury watches for sale to the public, using gold and silver plated gears.",400,450,550,800);
   fill(50);
 }
 if (whatsup==1880){
       text("This was a pretty boring decade for the usually thrilling world of watch history. So to make up for it, here's a video ",400,450,550,800);
     fill(50);
     myLink.show();
 } else{
      myLink.hide();
    }
  if (whatsup==1890){
         text("In the 1890s the wristwatch became popularised among the wealthy, politicians, and high-ranking military officials. They were still modeled off of the pocket watch, which was widely used and far more popular.",400,450,550,800);
       fill(50);
         }
 if (whatsup==1900){
           text("1904 Cartier makes the prototype for first wristwatch, Santos, officially bringing them into the high fashion and jewelry market",400,450,550,800);
         fill(50);
           }
 if (whatsup==1910){
             text("With the advent of WWI, soldiers are given wristwatches as a practical tool for war. They are colloquially known as “trench watches.",400,450,550,800);
           fill(50);
             }
if (whatsup==1920){
             text("After WWI, people kept their “trench watches” as mementos, and changed the band on which they were fastened as a symbol of remembrance to their time in the army. Rolex also createdthe first ever waterproof watch.",400,450,550,800);
             fill(50);
               }
 if (whatsup==1930){
                 text("The first stopwatch is invented along with the casual everyday watch. This is the first time watches were used not for high fashion, military, or workmen.",400,450,550,800);
               fill(50);
                 }
if (whatsup==1940){
                  text("Women’s watches became popularised in the aftermath of the suffrage movement, now being sold as jewelry for women as well as utilitarian pieces.",400,450,550,800);
                 fill(50);
               }
if (whatsup==1950){
                 text("The term “electric watch” becomes generic and popular, and referred to any watch powered by electricity rather than manual winding.",400,450,550,800);
                  fill(50);
              }
if (whatsup==1960){
                text("The first ‘scratchproof’ watch is made- consisting of hard metals and quartz instead of glass, they are the sturdiest watches to have ever been on the market.",400,450,550,800);
                  fill(50);
              }
  if (whatsup==1970){
                text("“Cheap as dirt” becomes applicable to watches as well, with higher quality watches being available to all.",400,450,550,800);
                 fill(50);
             }
  if (whatsup==1980){
                 text("The first plastic watch is introduced by Swatch, making them far more affordable, and marketing them as cheap and fashionable items of which people could own many different colors for different occasions. They also release a calculator watch onto the market.",400,450,550,800);
                  fill(50);
            }
  if (whatsup==1990){
                  text("Watch companies begin using space-age materials that are more durable, light, and long-lasting, such as titanium and carbon fiber.",400,450,550,800);
                   fill(50);
                          }
  if (whatsup==2000){
                  text("Watch companies begin using high-tech materials such as silicon in their watches, and adding more digital features.",400,450,550,800);
                    fill(50);
                     }
 if (whatsup==2010){
                  text("In 2015, the Apple Watch was released, being one of the first touch-screen watches to go on the market. It becomes extremely popular very quickly.",400,450,550,800);
                    fill(50);
                  }
 if (whatsup==2020){
                  text("The future of watches lies in more advanced touch-screen technology. Lenovo is working on a project entitled “Magic View Watch,” whose details have yet to be released except for this concept drawing.",400,450,550,800);
                    fill(50);
                  }
if (whatsup==2030){
                  text("The singularity has occured. Watches don't matter anymore. The robots have taken over. Time is nonlinear. Their understanding of time is far more complex than we could ever imagine. Prepare yourself and your families.",400,450,550,800);
                    fill(50);


                   }
}
