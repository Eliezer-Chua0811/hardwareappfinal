'use strict';

class App{
	constructor(){
    this.bio = [ 
      {
        "image":"img/beethoven.jpg",
        "name":"Ludwig Van Beethoven",
        "occupation":"Pianist, Composer",
        "birthday":"December 16, 1770",
        "death":"March 26,1827",
        "placeofbirth":"Bonn, Germany",
        "placeofdeath":"Vienna, Austria"
        
      },
      {
        "image":"img/mozart.jpg",
        "name":"Wolfgang Amadeus Mozart",
        "occupation":"Pianist, Composer",
        "birthday":"January 27, 1756",
        "death":"December 5,1791",
        "placeofbirth":"Salzburg Austria",
        "placeofdeath":"Vienna, Austria"
        
      },
      {
        "image":"img/bach.jpg",
        "name":"Johann Sebastian Bach",
        "occupation":"Composer",
        "birthday":"March 31, 1685",
        "death":"July 28, 1750",
        "placeofbirth":"Eisenach, Thuringia, Germany",
        "placeofdeath":"Leipzig, Germany"
        
      }
    ];
    this.pianolist = [
      {
        "artist":"Franz Liszt",
        "title":"Libestraume",
        "link":"component.pianoSheet(0)" 
      },
      {
        "artist":"Ludwig Van Beethoven",
        "title":"Fur Elise",
        "link":"component.pianoSheet(1)"
      },
      {
        "artist":"Ludwig Van Beethoven",
        "title":"Moonlight Sonata (First Movement)",
        "link":"component.pianoSheet(2)"
      },
      {
        "artist":"Ludwig Van Beethoven",
        "title":"Ode To Joy",
        "link":"component.pianoSheet(3)" 
      },
      {
        "artist":"Wolfgang Amadeus Mozart",
        "title":"Ah, vous dirai-je Maman",
        "link":"component.pianoSheet(4)" 
      },
      {
        "artist":"Wolfgang Amadeus Mozart",
        "title":"Turkish March",
        "link":"component.pianoSheet(5)"
      }
    ];

    this.pianopreview=[
      {
        "title":"Libestraume",
        "artist":"Franz Liszt",
        "scorekey":"Ab major",
        "timesig":"4/4",
        "duration":"4:00",
        "pages":"3",
        "diff":"Intermediate",
        "price":"Php 250.00",
        "image":"img/Sheets/Piano/liszt_libestraume.png",
        "id":"0",
        "instrument":"Piano"
      },
      {
        "title":"Fur Elise",
        "artist":"Ludwig Van Beethoven",
        "scorekey":"A minor",
        "timesig":"3/8",
        "duration":"2:58",
        "pages":"4",
        "diff":"Intermediate",
        "price":"Php 200.00",
        "image":"img/Sheets/Piano/beethoven_furelise.png",
        "id":"1",
        "instrument":"Piano"
      },
      {
        "title":"Moonlight Sonata (1st Movement)",
        "artist":"Ludwig Van Beethoven",
        "scorekey":"C# minor",
        "timesig":"4/4",
        "duration":"6:38",
        "pages":"4",
        "diff":"Intermediate",
        "price":"Php 250.00",
        "image":"img/Sheets/Piano/beethoven_moonlight.png",
        "id":"2",
        "instrument":"Piano"
      },
      {
        "title":"Ode To Joy",
        "artist":"Ludwig Van Beethoven",
        "scorekey":"D major",
        "timesig":"4/4",
        "duration":"2:00",
        "pages":"1",
        "diff":"Beginner",
        "price":"Php 50.00",
        "image":"img/Sheets/Piano/beethoven_ode.png",
        "id":"3",
        "instrument":"Piano"
      },
      {
        "title":"Ah, vous dirai-je Maman",
        "artist":"Wolfgang Amadeus Mozart",
        "scorekey":"G major",
        "timesig":"2/4",
        "duration":"9:30",
        "pages":"8",
        "diff":"Intermediate",
        "price":"Php 450.00",
        "image":"img/Sheets/Piano/mozart_twinkle.png",
        "id":"4",
        "instrument":"Piano"
      },
      {
        "title":"Turkish March",
        "artist":"Wolfgang Amadeus Mozart",
        "scorekey":"C major",
        "timesig":"2/4",
        "duration":"1:37",
        "pages":"1",
        "diff":"Easy",
        "price":"Php 100.00",
        "image":"img/Sheets/Piano/mozart_turkishmarch.jpg",
        "id":"5",
        "instrument":"Piano"
      }
    ];

    this.violinlist = [
      {
        "artist":"Alexander Borodin",
        "title":"String Quartet No.2",
        "link":"component.violinSheet(0)" 
      },
      {
        "artist":"Johann Sebastian Bach",
        "title":"Air on G String",
        "link":"component.violinSheet(1)"
      },
      {
        "artist":"Ludwig Van Beethoven",
        "title":"Violin Concerto Rondo &quot;Kreutzer&quot;",
        "link":"component.violinSheet(2)"
      },
      {
        "artist":"Johann Pachelbel",
        "title":"Canon in D",
        "link":"component.violinSheet(3)" 
      },
      {
        "artist":"Camille Saint-Saens",
        "title":"Introduction and Rondo Capriccioso",
        "link":"component.violinSheet(4)" 
      }
    ];
    this.violinpreview=[
      {
        "title":"String Quartet No. 2",
        "artist":"Alexander Borodin",
        "scorekey":"A major",
        "timesig":"3/4",
        "duration":"3:00",
        "pages":"3",
        "diff":"Intermediate",
        "price":"Php 250.00",
        "image":"img/Sheets/Violin/borodin_quartet.png",
        "id":"0",
        "instrument":"Violin"
      },
      {
        "title":"Air on G String",
        "artist":"Johann Sebastian Bach",
        "scorekey":"G major",
        "timesig":"4/4",
        "duration":"4:36",
        "pages":"4",
        "diff":"Intermediate",
        "price":"Php 300.00",
        "image":"img/Sheets/Violin/bach_air.jpg",
        "id":"1",
        "instrument":"Violin"
      },
      {
        "title":"Violin Concerto Rondo &quot;Kreutzer&quot;",
        "artist":"Ludwig Van Beethoven",
        "scorekey":"D major",
        "timesig":"4/4",
        "duration":"13:38",
        "pages":"14",
        "diff":"Hard",
        "price":"Php 600.00",
        "image":"img/Sheets/Violin/beethoven_kreutzer.jpg",
        "id":"2",
        "instrument":"Violin"
      },
      {
        "title":"Canon in D",
        "artist":"Johann Pachelbel",
        "scorekey":"D major",
        "timesig":"4/4",
        "duration":"4:30",
        "pages":"3",
        "diff":"Easy",
        "price":"Php 150.00",
        "image":"img/Sheets/Violin/pachelbel_canoninD.png",
        "id":"3",
        "instrument":"Violin"
      },
      {
        "title":"Introduction and Rondo Capriccioso",
        "artist":"Camille Saint-Saens",
        "scorekey":"C major",
        "timesig":"2/4",
        "duration":"6:27",
        "pages":"6",
        "diff":"Hard",
        "price":"Php 300.00",
        "image":"img/Sheets/Violin/saintsaens_capr.png",
        "id":"4",
        "instrument":"Violin"

      }
    ];
    this.cart=[];


	}
	render(html, component){
		component.innerHTML += html;
	}
  
  reRender(html, component){
    component.innerHTML = html;
  } 

  readSong(){
    let listPiano = document.getElementById("pianolist");
    let html = ``;
    for(let i=0;i<this.pianolist.length;i++){
      html += `<tr>
          <td>${this.pianolist[i].artist}</td>
          <td>${this.pianolist[i].title}</td>
          <td><a class="waves-effect waves-light btn" onclick="${this.pianolist[i].link}">More Details</a></td> 
        </tr>`;       
    }
    listPiano.innerHTML = html;
  }
  readSong2(){
    let listViolin = document.getElementById("violinlist");
    let html = ``;
    for(let i=0;i<this.violinlist.length;i++){
      html += `<tr>
          <td>${this.violinlist[i].artist}</td>
          <td>${this.violinlist[i].title}</td>
          <td><a class="waves-effect waves-light btn" onclick="${this.violinlist[i].link}">More Details</a></td> 
        </tr>`;       
    }
    listViolin.innerHTML = html;
  }


  searchPianoSong(){
    let txtSearchPianoSong = document.getElementById("txtSearchPianoSong");
    let listPiano = document.getElementById("pianolist");
  
    let html = ``;
    for(let i=0;i<this.pianolist.length;i++){
      if(this.pianolist[i].artist.toLowerCase().includes(txtSearchPianoSong.value)||this.pianolist[i].title.toLowerCase().includes(txtSearchPianoSong.value)||this.pianolist[i].artist.toUpperCase().includes(txtSearchPianoSong.value)||this.pianolist[i].title.toUpperCase().includes(txtSearchPianoSong.value)||this.pianolist[i].artist.includes(txtSearchPianoSong.value)||this.pianolist[i].title.includes(txtSearchPianoSong.value)){
        html += `<tr>
          <td>${this.pianolist[i].artist}</td>
          <td>${this.pianolist[i].title}</td>
          <td><a class="waves-effect waves-light btn" onclick="${this.pianolist[i].link}">More Details</a></td> 
        </tr>`; 
      }
    }
    listPiano.innerHTML = html;
  }
  searchViolinSong(){
    let txtSearchViolinSong = document.getElementById("txtSearchViolinSong");
    let listViolin = document.getElementById("violinlist");
  
    let html = ``;
    for(let i=0;i<this.violinlist.length;i++){
      if(this.violinlist[i].artist.toLowerCase().includes(txtSearchViolinSong.value)||this.violinlist[i].title.toLowerCase().includes(txtSearchViolinSong.value)||this.violinlist[i].artist.toUpperCase().includes(txtSearchViolinSong.value)||this.violinlist[i].title.toUpperCase().includes(txtSearchViolinSong.value)||this.violinlist[i].artist.includes(txtSearchViolinSong.value)||this.violinlist[i].title.includes(txtSearchViolinSong.value)){
        html += `<tr>
          <td>${this.violinlist[i].artist}</td>
          <td>${this.violinlist[i].title}</td>
          <td><a class="waves-effect waves-light btn" onclick="${this.violinlist[i].link}">More Details</a></td> 
        </tr>`; 
      }
    }
    listViolin.innerHTML = html;
  }


  pianoSheetDetails(key){
    let details = document.getElementById("pianosheet");
    let html = ``;
    for(let index=0;index<this.pianopreview.length;index++){
      if(index==key){
        html += `
          <div id="index-banner">
                <div class="section">
                  <div class="container">
                    <br><br>
                    <div class="row center" id="headLine">
                      <h1 id="header">${this.pianopreview[index].title}</h1>
                      <br><br>
                    </div>
                  </div>
                </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col s12 m12 l6" id="image-preview">
                  <img src="${this.pianopreview[index].image}">
                </div>
                    <div class="section" >
                      <div class="col s12 m12 l6" id="textBox">
                            <p>Artist: ${this.pianopreview[index].artist}<br>
                              Score Key: ${this.pianopreview[index].scorekey}<br>
                              Time Signature: ${this.pianopreview[index].timesig}<br>
                              Duration: ${this.pianopreview[index].duration}<br>
                              Number of Pages: ${this.pianopreview[index].pages}<br>
                              Difficulty: ${this.pianopreview[index].diff}<br>
                              Price:
                            </p>
                            <p id="price">${this.pianopreview[index].price}</p>
                            <a href="#modal1" data-target="modal1" class="waves-effect waves-light btn modal-trigger" id="modalbtn" onclick="component.shoppingListAdd('${this.pianopreview[index].artist}','${this.pianopreview[index].title}','${this.pianopreview[index].instrument}')"><i class="material-icons right" id="shop_cart">shopping_cart</i>Add to Cart</a>
                            <a class="waves-effect waves-light btn" onclick="component.pianoSheetPage()">Back</a>
                      </div>
                    </div>
              </div>
            </div>
        `;

      }
    }
    details.innerHTML = html;
  }

  violinSheetDetails(key){
    let details = document.getElementById("violinsheet");
    let html = ``;
    for(let index=0;index<this.violinpreview.length;index++){
      if(index==key){
        html += `
          <div id="index-banner">
                <div class="section">
                  <div class="container">
                    <br><br>
                    <div class="row center" id="headLine">
                      <h1 id="header">${this.violinpreview[index].title}</h1>
                      <br><br>
                    </div>
                  </div>
                </div>
            </div>

            <div class="container">
              <div class="row">
                <div class="col s12 m12 l6" id="image-preview">
                  <img src="${this.violinpreview[index].image}">
                </div>
                    <div class="section" >
                      <div class="col s12 m12 l6" id="textBox">
                            <p>Artist: ${this.violinpreview[index].artist}<br>
                              Score Key: ${this.violinpreview[index].scorekey}<br>
                              Time Signature: ${this.violinpreview[index].timesig}<br>
                              Duration: ${this.violinpreview[index].duration}<br>
                              Number of Pages: ${this.violinpreview[index].pages}<br>
                              Difficulty: ${this.violinpreview[index].diff}<br>
                              Price:
                            </p>
                            <p id="price">${this.violinpreview[index].price}</p>
                            <a href="#modal1" data-target="modal1" class="waves-effect waves-light btn modal-trigger" id="modalbtn" onclick="component.shoppingListAdd('${this.violinpreview[index].artist}','${this.violinpreview[index].title}','${this.violinpreview[index].instrument}')"><i class="material-icons right" id="shop_cart">shopping_cart</i>Add to Cart</a>
                            <a class="waves-effect waves-light btn" onclick="component.violinSheetPage()">Back</a>
                      </div>
                    </div>
              </div>
            </div>
        `;

      }
    }
    details.innerHTML = html;
  }

  searchCartSong(){
    let txtSearchCartSong = document.getElementById("txtSearchCartSong");
    let listCart = document.getElementById("shoplist");
  
    let html = ``;
    for(let i=0;i<this.cart.length;i++){
      if(this.cart[i].artist.toLowerCase().includes(txtSearchCartSong.value)||this.cart[i].title.toLowerCase().includes(txtSearchCartSong.value)||this.cart[i].artist.toUpperCase().includes(txtSearchCartSong.value)||this.cart[i].title.toUpperCase().includes(txtSearchCartSong.value)||this.cart[i].instrument.toUpperCase().includes(txtSearchCartSong.value)||this.cart[i].instrument.toLowerCase().includes(txtSearchCartSong.value)||this.cart[i].artist.includes(txtSearchCartSong.value)||this.cart[i].title.includes(txtSearchCartSong.value)||this.cart[i].instrument.includes(txtSearchCartSong.value)){
        html += `<tr>
        <td>${this.cart[i].artist}</td>
        <td>${this.cart[i].title}</td>
        <td>${this.cart[i].instrument}</td>
        <td><a href="#!" id="action" onclick="component.deleteSheet(${i})"><i class="material-icons">delete</i></a></td>
        </tr>`; 
      }
    }
    if(!txtSearchCartSong.value){
      component.cartInventory();
    }
    else{
      listCart.innerHTML = html;
    }
  }
  shoppingListAdd(artist, title, instrument){
    let shopcart = {"artist":artist,"title":title, "instrument":instrument};
    this.cart.push(shopcart);
    component.cartInventory();
    //component.cartAlert();
  }

  cartInventory(){
    let idName="row";
    let listShop = document.getElementById("shoplist");
    let html =``;
    for(let index=0; index<this.cart.length; index++){
     html +=`
      <tr id="${idName+index}">
        <td>${this.cart[index].artist}</td>
        <td>${this.cart[index].title}</td>
        <td>${this.cart[index].instrument}</td>
        <td><a href="#!" id="action" onclick="component.sheetUpdateInput(${index})"><i class="material-icons">mode_edit</i></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#!" id="action" onclick="component.deleteSheet(${index})"><i class="material-icons">delete</i></a></td>
      </tr>
    `;
    }
    this.reRender(`${html}`,listShop);
  }

  updateSheet(key){
    let var_artist = document.getElementById('updateArtist');
    let var_title = document.getElementById('updateTitle');
    let var_instrument = document.getElementById('updateInstrument');
    let sheet = {"artist":var_artist.value,"title":var_title.value,"instrument":var_instrument.value};
    this.cart[key] = sheet;
    this.cartInventory();
  }

  sheetUpdateInput(val){
    let idNameRow="row"+val;
    let html = `
      <tr>
       <td><input id="updateArtist" type="text" value="${this.cart[val].artist}" /></td>
       <td><input id="updateTitle" type="text" value="${this.cart[val].title}" /></td>
       <td><input id="updateInstrument" type="text" value="${this.cart[val].instrument}" /></td>
       <td><a href="#!" onclick="component.updateSheet(${val})"><i class="small material-icons">done</i></a><td>
      </tr>
      `;
      this.reRender(`${html}`,document.getElementById(`${idNameRow}`));
  }
  deleteSheet(key){   
    let table = document.getElementById('shoplist');
    table.deleteRow(key);
    this.cart.splice(key,1);

    
    this.cartInventory()
  }
  createSheet(){
    let var_artist = document.getElementById('txtAddArtist');
    let var_title = document.getElementById('txtAddTitle');
    let var_instrument = document.getElementById('txtAddInstrument');

    let piece = {"artist":var_artist.value,"title":var_title.value,"instrument":var_instrument.value};
    this.cart.push(piece);

    var_artist.value = var_title.value = var_instrument.value = '';
    this.cartInventory();
  }


}

class Component extends App{
	constructor(){
		super();
	}

	indexPage(){
			let html = `
			<nav id="nav" class="white" role="navigation">
        <div class="nav-wrapper container">
          <ul class="right hide-on-med-and-down">
            <li id="navlist1"><a href="#" onclick="component.homePage()">HOME</a></li>
            <li id="navlist2"><a href="#" onclick="component.sheetPage()">SHEETS</a></li>
            <li id="navlist4"><a href="#" onclick="component.homePage()"><i class="small material-icons">person_pin</i></a></li>
            <li id="navlist5"><a href="#" onclick="component.shoppingCartPage()"><i class="small material-icons">shopping_cart</i></a></li>
          </ul>

          <ul id="nav-mobile" class="side-nav">
            <div id="mat-icons" class="row center">
            <li id="list"><a href="#" onclick="component.homePage()">HOME</a></li>
            <li id="list"><a href="#" onclick="component.sheetPage()">SHEETS</a></li>
            <a href="#" id="list"><i class="small material-icons">person_pin</i></a>
            <a href="#" id="list" onclick="component.shoppingCartPage()"><i class="small material-icons">shopping_cart</i></a>
          </div>
          </ul>
          <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
          
        </div>
      </nav>

      <div id="indexpage">
          <div id="index-banner">
            <div class="section no-pad-bot">
              <div class="container">
                <br><br>
                <div class="row center" id="apollo">
                  <img src="img/apollossymphony_black.png" alt="Apollo's Symphony" id="apolloimage">
                </div>
                <div class="row center" id="lookbox">
                  <center><a href="#" onclick="component.sheetPage()"><p id="look">Take A Look</p></a></center>
                </div>
                <br><br>

              </div>
            </div>
          </div>
          <div class="parallax-container valign-wrapper">
            <div class="section no-pad-bot">
              <div class="container">
                <div class="row center">
                  <h5 class="header col s12 light" id="divText">Indulge the melody within these papers</h5>
                </div>
              </div>
            </div>
            <div class="parallax"><img src="img/index_background.jpg" alt="Unsplashed background img 2"></div>
          </div>

          <div class="container">
            <div class="section">

              <div class="row">
                <div class="col s12 center">
                  <h3><i class="mdi-content-send brown-text"></i></h3>
                  <h4 id="header">About Us</h4>
                  <p class="left-align light" id="about-text">Experience the variety of virtuosos in Apollo&apos;s Symphony, a music sheet website, where a copy of the masterpieces of all the different famous composers in centuries. This experience is a proposal to imagine the beauty of life, an acceptance of where and what we are living in our own shoes just to synchronize the harmony around ourselves to contribute peace and love to the humankind. Music is freedom.</p>
                </div>
              </div>

            </div>
          </div>


          <div class="parallax-container valign-wrapper">
            <div class="section no-pad-bot">
              <div class="container">
                <div class="row center">
                  <h5 class="header col s12 light" id="divText">A collection of famous composers&apos; majestic masterpieces</h5>
                </div>
              </div>
            </div>
            <div class="parallax"><img src="img/famouscomposers.jpg" alt="Unsplashed background img 3"></div>
          </div>

          <div class="container">
            <div class="section">
             <div class="row">
                <div class="col s12 center">
                  <h2 id="header_index">Famous Composers</h2>
            `;


            for(let index=0; this.bio.length>index; index++){
              html +=`
             
                  <div class="card horizontal">
                    <div class="card-image">
                      <img src="${this.bio[index].image}">
                    </div>
                    <div class="card-stacked">
                      <div class="card-content" id="cardContent">
                        <h5><b>${this.bio[index].name}</b></h1>
                        <p>
                          Occupation: ${this.bio[index].occupation}<br>
                          Birth Date: ${this.bio[index].birthday}<br>
                          Death Date: ${this.bio[index].death}<br>
                          Place of Birth: ${this.bio[index].placeofbirth}<br>
                          Place of Death: ${this.bio[index].placeofdeath}<br>
                        </p>
                      </div>
                      <div class="sheetfont">
                        <a href="#" onclick="component.sheetPage()">Sheets</a>
                      </div>
                    </div>
                  </div>
                  `;
          }


            html += `
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="fixed-action-btn">
            <a href="#nav" id="anchorbutton" class="btn-floating btn-large black">
              <i class="large material-icons waves-effect waves-light">navigation</i>
            </a>
          </div>
      </div>

      <div id="sheetpage">
        <div id="index-banner">
            <div class="section no-pad-bot">
              <div class="container">
                <br><br>
                <div class="row center" id="headLine">
                  <h1 id="header">Instruments</h1>
                </div>
                <br><br>

              </div>
            </div>
          </div>
         <div class="container">
            <div class="section">

              <div class="row">
                <div class="col s12 center">
                  <h3><i class="mdi-content-send brown-text"></i></h3>
                  <p class="left-align light" id="about-text">Apollo&apos;s Symphony has the piano sheet music you&apos;re searching for. Masterpieces made by Ludwig Van Beethoven, Franz Liszt and many more composers you can find in here. Finding sheet music for the piano has never been easier, and with its extensive catalog, you are sure to find what you need.</p>
                </div>
              </div>

            </div>
          </div>
            <div id="parallax_sheet" class="parallax-container valign-wrapper">
              <div class="section no-pad-bot">
                <div class="container">
                  <div class="row center">  
                    <a href="#" onclick="component.pianoSheetPage()">
                     <h5 class="header col s12 light" id="divHeader">Piano</h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="parallax"><img src="img/sheet_piano.jpg" alt="Piano Sheets"></div>
            </div>

           <div class="container">
            <div class="section">

              <div class="row">
                <div class="col s12 center">
                  <h3><i class="mdi-content-send brown-text"></i></h3>
                  <p class="left-align light" id="about-text">Apollo&apos;s Symphony also has the violin sheet music. Famous composers such as Johann Sebastian Bach and Saint-Saens compositions are here and you can purchase them here in any minute. Be ready for playing their soothing masterpieces and you can feel their majestic presence of music.</p>
                  </div>
              </div>

            </div>
           </div>
             <div id="parallax_sheet" class="parallax-container valign-wrapper">
              <div class="section no-pad-bot">
                <div class="container">
                  <div class="row center">  
                    <a href="#">
                     <h5 class="header col s12 light" id="divHeader" onclick="component.violinSheetPage()">Violin</h5>
                    </a>
                  </div>
                </div>
              </div>
              <div class="parallax"><img src="img/sheet_violin.jpg" alt="Violin Sheets"></div>
            </div>
          

          <div class="container">
            <div class="section">

        

            </div>
          </div>
      </div>

      <div id="pianosheetpage">

          <div id="index-banner">
              <div class="section">
                <div class="container">
                  <br><br>
                  <div class="row center" id="headLine">
                    <h1 id="header">Piano</h1>
                    <br><br>
                  </div>
                </div>
              </div>
          </div>


          <div class="container">
            <div class="section">
             <input oninput="component.searchPianoSong()" id="txtSearchPianoSong" type="text" placeholder="Search music score here..." />
            </div>
          </div>


                <table class="bordered centered highlight">
                  <thead>
                    <tr>
                      <th data-field="id">Artist</th>
                      <th data-field="name">Title</th>
                    </tr>
                  </thead>
                  <tbody id="pianolist">          
                  </tbody>
                </table>
        <br><br><br>
      </div>

      <div id="pianosheet">                  
      </div>

      <div id="violinsheetpage">
         <div id="index-banner">
              <div class="section">
                <div class="container">
                  <br><br>
                  <div class="row center" id="headLine">
                    <h1 id="header">Piano</h1>
                    <br><br>
                  </div>
                </div>
              </div>
          </div>


          <div class="container">
            <div class="section">
             <input oninput="component.searchViolinSong()" id="txtSearchViolinSong" type="text" placeholder="Search music score here..." />
            </div>
          </div>


            <table class="bordered centered highlight">
              <thead>
                <tr>
                  <th data-field="id">Artist</th>
                  <th data-field="name">Title</th>
                </tr>
              </thead>
              <tbody id="violinlist">          
              </tbody>
            </table>
        <br><br><br>
      </div>

      <div id="violinsheet">
      </div>
      
      <div id="shoppingcart">
        <div id="index-banner">
              <div class="section no-pad-bot">
                <div class="container">
                  <br><br>
                  <div class="row center" id="headLine">
                    <h1 id="header">Shopping Cart</h1>
                  </div>
                  <br><br>

                </div>
              </div>
        </div>

        <div class="container">
            <div class="section">
             <input oninput="component.searchCartSong()" id="txtSearchCartSong" type="text" placeholder="Search music score here..." />
            </div>
        </div>

        <table class="bordered centered highlight">
          <thead>
            <tr>
              <th data-field="id">Artist</th>
              <th data-field="name">Title</th>
              <th data-field="instrument">Instrument</th>
              <th data-field="action">Action</th>
            </tr>
          </thead>
          <tbody id="shoplist">
          </tbody>
        </table>
        <br><br><br>
        <div class="section">
        </div >
          <div class="container">
            <p id="cart-text">If you didn&apos;t find what you&apos;re looking for, preorder now by entering the title of the score below and its artist/composer. The price will be Php 100.00 per page.</p>
            <form>
             <input id="txtAddArtist" type="text" placeholder="Enter artist here..." />
             <input id="txtAddTitle" type="text" placeholder="Enter title here..." />
             <input id="txtAddInstrument" type="text" placeholder="Enter instrument here..." />
             <a class="waves-effect waves-light btn" onclick="component.createSheet()">Enter</a>
            </form>
          </div>
        </div>
        <br><br><br>
      </div>




      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4 id="modalheader">Added to Cart</h4>
          <p id="modaltext">Thank you.</p>
        </div>
      </div> 

      <footer class="page-footer white">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <center><a href="#" onclick="component.homePage()" id="footerimage"><img src="img/apollossymphony_black.png" width="60%" height="60%"></a></center>
              <p id="footertext2">I am a college student working on this project like its my full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


            </div>
            <div class="col l3 s12">
              <h5 id="header">Sitemap</h5>
              <ul id="footertext2">
                <li><a href="#" onclick="component.homePage()">Home</a></li>
                <li><a href="#" onclick="component.sheetPage()">Sheet</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="col l3 s12">
              <h5 id="header">Instruments</h5>
              <ul id="footertext2"> 
                <li><a href="#" onclick="component.pianoSheetPage()">Piano</a></li>
                <li><a href="#">Violin</a></li>
              </ul>
            </div>
          </div>
        </div>
       <br>
       <br>
       <br>
      </footer>
  			`;
        this.reRender(`${html}`,document.getElementById('app'));
        
	}



  homePage(){
    $('#indexpage').show();
    $('#sheetpage').hide();
    $('#pianosheetpage').hide();
    $('#violinsheetpage').hide();
    $('#shoppingcart').hide();

    $('#pianosheet').hide();
    $('#violinsheet').hide();

  }
  sheetPage(){
      $('#indexpage').hide();
      $('#sheetpage').show();
      $('#pianosheetpage').hide();
      $('#violinsheetpage').hide();
      $('#shoppingcart').hide();

      $('#pianosheet').hide();
      $('#violinsheet').hide();

  }
  pianoSheetPage(){
    $('#indexpage').hide();
    $('#sheetpage').hide();
    $('#pianosheetpage').show();
    $('#violinsheetpage').hide();
    $('#shoppingcart').hide();

    $('#pianosheet').hide();
    $('#violinsheet').hide();

  }
  pianoSheet(key){
   $('#indexpage').hide();
   $('#sheetpage').hide();
   $('#pianosheetpage').hide();
   $('#violinsheetpage').hide(); 
   $('#shoppingcart').hide();  

   $('#pianosheet').show();
   $('#violinsheet').hide();

   component.pianoSheetDetails(key);
  }

  violinSheetPage(){
    $('#indexpage').hide();
    $('#sheetpage').hide();
    $('#pianosheetpage').hide();
    $('#violinsheetpage').show();
    $('#shoppingcart').hide();

    $('#pianosheet').hide();
    $('#violinsheet').hide();
  }
  violinSheet(key){
   $('#indexpage').hide();
   $('#sheetpage').hide();
   $('#pianosheetpage').hide();
   $('#violinsheetpage').hide(); 
   $('#shoppingcart').hide();  

   $('#pianosheet').hide();
   $('#violinsheet').show();

   component.violinSheetDetails(key);
  }

  shoppingCartPage(){
    $('#indexpage').hide();
    $('#sheetpage').hide();
    $('#pianosheetpage').hide();
    $('#violinsheetpage').hide();
    $('#shoppingcart').show();

    $('#pianosheet').hide();   
    $('#violinsheet').hide();   
  }
}

let component = new Component();
component.indexPage();
component.readSong();
component.readSong2();