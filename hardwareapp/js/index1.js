'use strict';

  class App{
  constructor(){
 this.item = [
          {
          "name":"Powerful Cordless: Set of 45 Screw Driver & Drill Head Sets",
          "desc":"Cordless Screwdriver4x 50mm Screw Head Attachments 2x Drill Attachments 28x Screw Head Attachments 8x Socket Attachments Magnectic Screw Attachment Fixture User Manual Tool Box",
          "image":"css/img/first.jpg"
        },
        {
        "name":"Intel Boxed Core I5-6600K 3.50 GHz, 6 M Processor Cache 6 for LGA 1151 (BX80662I56600K)",
        "desc":"1x Intel Boxed Core I5-6600K 3.50 GHz, 6 M Processor Cache 6 for LGA 1151 (BX80662I56600K) with Corsair Hydro Series H100i v2 Extreme Performance Liquid CPU Cooler",
        "image":"css/img/second.jpg"
      },
      {
      "name":"Bosch 2608643045 TCT Saw Blade 356mm 6 1/4' x 20T Bore Size 20mm Wood (For GKS66X Use)",
      "desc":"	1x Bosch 2608643045 TCT Saw Blade 356mm 6 1/4' x 20T Bore Size 20mm Wood (For GKS66X Use)",
      "image":"css/img/3rd.jpg",
    },
    {
    "name":"Intel Original CPU Fan & Heatsink for Socket 775 Processor",
    "desc":"1 x Intel Original CPU Fan & Heatsink for Socket 775 Processor",
    "image":"css/img/4th.jpg",
  },
  {
  "name":"StarWAR illusion 3D Led night light Visual Home kitchen table Lamp Station - B",
  "desc":"	1 x StarWAR illusion 3D Led night light Visual Home kitchen table Lamp Station",
  "image":"css/img/5th.jpg",
},
];
this.media=[{
"img":"css/img/slide1.jpg",
"slogan":"Visit our hardware tools",
"caption":"Explore",
"alignment":"center-align",
"button":"btn-large waves-effect waves-light orange green-text text-darken-3 disabled",
"button_caption":"Soon to open"

},
{
  "img":"css/img/slide2.jpg",
  "caption":"Our Electrical Products",
  "slogan":"are one of the finest",
  "alignment":"left-align",
  "button":"btn-large waves-effect waves-light lime lighten-1 green-text text-darken-4 disabled",
  "button_caption":"Soon to open"
},
{
  "img":"css/img/slide3.jpg",
  "slogan":"are also accepted here",
  "caption":"COMPUTER HARDWARES",
  "alignment":"right-align",
  "button":"btn-large waves-effect waves-light cyan lighten-3 green-text text-darken-3 disabled",
  "button_caption":"Soon to open"
}		
];

}
render(html, component){
/* Override */
component.innerHTML += html;
}

reRender(html,component){
component.innerHTML = html;
} 

readHardw(){
let listHard = document.getElementById("hardInfo");
let html = ``;
for(let i=0;i<this.item.length;i++){
html += `<tr>
<td><img src="${this.item[i].image}"id="imgre"></td>
<td class="white-text">${this.item[i].name}</td>
<td>${this.item[i].desc}</td>
<td><a class="waves-effect waves-light btn" onclick="component.hardDetailsPage(${i})">More Details</a></td> 
</tr>`;       
}
listHard.innerHTML = html;
}


searchHard(){
    let txtSearchHard = document.getElementById("txtSearchHard");
    let hardInfo = document.getElementById("hardInfo");
  
    let html = ``;
    for(let i=0;i<this.item.length;i++){
      if(this.item[i].name.toLowerCase().includes(txtSearchHard.value)||this.item[i].name.toUpperCase().includes(txtSearchHard.value)||this.item[i].name.includes(txtSearchHard.value)){
        html += `
        <tr>
         <td><img src="${this.item[i].image} ></td>
          <td>${this.item[i].name}</td>
          <td>${this.item[i].desc}</td>
          <td><a class="waves-effect waves-light btn" onclick="component.hardDetailsPage(${i})">More Details</a></td> 
        </tr>`; 
      }
    }
    hardInfo.innerHTML = html;
  }


updateHard(key){
let n = document.getElementById('updateName');
let d = document.getElementById('updateDesc');

let i = this.item[key];
let item = {"name":n.value,"desc":d.value, "image":i.image, "link":i.link};

this.item[key] = item;
this.hardDetails(key);
}



hardDetails(key){
let details = document.getElementById("harddetails");
let html = ``;
for(let index=0;index<this.item.length;index++){
if(index==key){
html += `
<div id="harddetailssection">
  <div id="index-banner">
    <div class="section">
      <h5 id="header">${this.item[index].name}</h1>
        <br><br>
      </div>
    </div>
  </div>
    <div class="row">
      <div class="col s12 m12 l6">
        <img src="${this.item[index].image}" id="imgre">
      </div>
      <div class="section" >
        <div class="col s12 m12 l6" id="textBox">
          <p>${this.item[index].desc}</p>
          <a class="waves-effect waves-light btn" onclick="component.hardUpdateInput(${index})">Update</a>
          <a class="waves-effect waves-light btn" onclick="component.deleteHard(${index})">Delete</a>
          <a class="waves-effect waves-light btn" onclick="component.productsPage()">Back</a>
        </div>
      </div>
    </div>
  </div>
`;

}
}
details.innerHTML = html;
}


hardUpdateInput(val){
let html = `
<div id="harddetailssection">
  <div id="index-banner">
    <div class="section">
      <div class="row center">
        <input id="updateName" type="text" value="${this.item[val].name}" />
        <br><br>
      </div>
    </div>
  
  <div class="section">
    <div class="row">
      <div class="col s12 m12 l6">
        <img src="${this.item[val].image}"id="imgre">
      </div>
    
    <div class="section" >
      <div class="col s12 m12 l6" id="textBox">
        <input id="updateDesc" type="text" value="${this.item[val].desc}" />
           
      <a class="waves-effect waves-light btn" onclick="component.updateHard(${val})">Done</a></div> <br>
    </div>
</div>
  </div>
  `;
  this.reRender(`${html}`,document.getElementById('harddetailssection'));
}

deleteHard(key){   
let table = document.getElementById('hardInfo');
table.deleteRow(key);
this.item.splice(key,1);
this.productsPage(); 
}

createHard(){
let n = document.getElementById('createHard');
let d = document.getElementById('createDesc');
let i = document.getElementById('createImage');

let hard = {"name":n.value,"desc":d.value,"image":i.value};
this.item.push(hard);

n.value = d.value = i.value = ''; //Clear Fields
this.readHardw();
}
}


class Component extends App{
constructor(){
super();
}
landingPage(){
let html = `
<nav class="orange accent-3" role="navigation">
  <div class="nav-wrapper">
    <a href="#" class="brand-logo green-text hoverable"onclick="component.homepage()">XDHardware&Computer Components</a>
    <ul class="right hide-on-med-and-down">
      <li id="navlist"><a href="#homepage" onclick="component.homePage()">HOME</a></li>
      <li id="navlist"><a href="#products" onclick="component.productsPage()">PRODUCTS</a></li>
      <li id="navlist"><a href="#products" onclick="component.createproductsPage()">CREATE</a></li>
    </ul>

    <ul id="nav-mobile" class="side-nav">
      <li><a href="#">Navbar Link</a></li>
    </ul>
    <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
  </div>
</nav>


<div id="homepage">
  <div id="index-banner">
    <div id="index-banner" class="parallax-container">
      <div class="section no-pad-bot">
       <div class="container">
        <br><br>
        <h1 class="header center green-text text-darken-3">WELCOME SHOPPERS</h1>
        <div class="row center">

         <h5 class="header col s12 orange-text text-darken-3">Click Sign In if you already an account or Sign Up if you have no existing account</h5>

       </div>
       <div class="row center">
         <a href="#modal1" class="btn-large waves-effect waves-light transparent green-text modal-trigger" >SIGN IN</a>

       </div>
       <br><br>

     </div>
   </div>
   <div class="parallax"><img src="css/img/parallax.00_jpg_srz" ></div>
 </div>
<br>

<div class="section">
  <h4 class="green-text center-align">"No wonder you come never handy"</h4>
  <div class="section" id="section1">
    <p class="center-align">This site is for people serching hardwares and computer components. Though, this site still needs improvement, we are working hard to progress and please our customers.
      Thank your for your patience and cooperation. Have a good DAY! 
    </p>
  </div>
</div>
<div class="container">
<div class="slider">
  <ul class="slides">
   `;

   for(let i=0;i<this.media.length;i++){
   html += `
   <li>
    <img src="${this.media[i].img}"> <!-- random image -->
    <div class="caption ${this.media[i].alignment}">
     <h3 class=" orange-text text-lighten-3">${this.media[i].caption}</h3>
     <h5 class="light green-text text-lighten-1">${this.media[i].slogan}</h5>
     <div class="row center">
      <a href="#" id="submit" class="${this.media[i].button}">${this.media[i].button_caption}</a>
    </div>
  </div>
</li>
`;
}
html += `
</ul>
</div>

<footer class="page-footer green">
  <div class="row">
    <div class="col l6 s12">
      <center><a href="#" onclick="component.homepage()"><h5 class="white-text hoverable">XD Hardware&Computer Components</h5></a></center>
      <p class="center-align">Just another project for Chua in Object Oriented Programming Course<br>Copyright XDHardware 2016</p>
    </div>
    <div class="col l3 s12">
     <li><a href="#" onclick="component.homepage()"class="yellow-text hoverable">Home</a></li>
     <li><a href="#" onclick="component.productsPage()"class="yellow-text hoverable">Products</a></li>
   </ul>
 </div>
 <div class="col l3 s12">
  <img src="css/img/fblogo.png" class="hoverable"><a href="https://www.facebook.com/" ></a><br>
  <img src="css/img/twitlogo.png"class="hoverable"><a href="https://twitter.com/"></a><br>
  <img src="css/img/goologo.png"class="hoverable"><a href="g,ail.com"></a><br>
</ul>
</div>
</div>
</footer> 
</div>
</div>"
</div>
</div>


<div id="products">
    <div class="row">
      <div id="readpage" class="row marketing">
        <div class="col s12 m12 l12">
          <h1 class="center-align orange-text">Our Featured Products</h1>
          <table id="hardList" class="responsive-table bordered hoverable light blue">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search" id="txtSearchHard" oninput="component.searchHard()">
            </div>
            <tbody id="hardInfo"></tbody>
          </table>
          <br><br><br>
        </div>
      </div> 
      </div>          
<footer class="page-footer green">
  <div class="row">
    <div class="col l6 s12">
      <center><a href="#" onclick="component.homepage()"><h5 class="white-text hoverable">XD Hardware&Computer Components</h5></a></center>
      <p class="center-align">Just another project for Chua in Object Oriented Programming Course<br>Copyright XDHardware 2016</p>
    </div>
    <div class="col l3 s12">
     <li><a href="#" onclick="component.homepage()"class="yellow-text hoverable">Home</a></li>
     <li><a href="#" onclick="component.productsPage()"class="yellow-text hoverable">Products</a></li>
   </ul>
 </div>
 <div class="col l3 s12">
  <img src="css/img/fblogo.png" class="hoverable"><a href="https://www.facebook.com/" ></a><br>
  <img src="css/img/twitlogo.png"class="hoverable"><a href="https://twitter.com/"></a><br>
  <img src="css/img/goologo.png"class="hoverable"><a href="g,ail.com"></a><br>
</ul>
</div>
</div>
</footer> 
</div>
</div>

  <div id="harddetails">
  </div>

  <div id="createHardware">
   <div class="col s9 m12 l12">
        <h1 class="center-align">Share Your Information</h1>
        <div class="container">
          <br><br><br>
          <input id="createHard" type="text" placeholder="Name of the hardawre.." />
          <input id="createDesc" type="text" placeholder="Description of the hardware..." />
          <input id="createImage" type="text" placeholder="URL Image of the hardware (important!)..." />
          <a href="#!" class="waves-effect waves-light btn green" onclick="component.redirectCreate()">Submit</a>
        </div>

    </div>
  </div>

  <!-- Modal Structure -->
  <div id="modal1" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4 class ="green-text center-align">Sign In</h4>
      <form class="col s12">
      <div class="row center">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      </form> 
    <div class="modal-fixed-footer center-align">
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat green-text">Sign In</a>
    </div>
  </div>





`;
this.reRender(`${html}`,document.getElementById('app'));
$('#products').hide();
$('#homepage').show();
$('#createHardware').hide();
$('#modal1').show();
}

homePage(){
$('#homepage').show();
$('#products').hide();
$('#harddetails').hide();
$('#createHardware').hide();
$('#modal1').show();

}
productsPage(){
$('#homepage').hide();
$('#products').show();
$('#harddetails').hide();
$('#createHardware').hide();
}
hardDetailsPage(key){
$('#homepage').hide();
$('#products').hide();
$('#harddetails').show();
component.hardDetails(key);
}
createproductsPage(){
$('#homepage').hide();
$('#products').hide();
$('#harddetails').hide();
$('#createHardware').show();
$('#modal1').hide();

}
redirectCreate(){
$('#homepage').hide();
$('#products').show();
$('#harddetails').show();
$('#createHardware').hide();
component.createHard();

}

}



let component = new Component();
component.landingPage();
component.readHardw();