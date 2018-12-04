

import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
export default App;




<div class="card medium">
<h1 class="pethealth">Pet Health</h1>




               
    <div class="card small">
            <ul class="collapsible">
                    <li>
                      <div class="collapsible-header"><i class="material-icons"></i>Pet 1</div>
                      <div class="collapsible-body">
                     <span>
                          
                            <div class="card large">
                                
                                <img src="/Users/liaramirez/Documents/Pets-to-Vet/client/public/medicalnotes/Sabrina-4648-1-sm.jpg" alt="Pet">
                                 


                                <div class="petinfo">
                                        Name:<p class="petname"></p>
                                        Gender:<p class="petgender"></p>
                                        Species:<p class="petspecies"></p>
                                        Breed:<p class="petbreed"></p>
                                        Date of Birth:<p class="dob"></p>
                                        Age:<p class ="petage"></p>
                                        Food:<p class="petfood"></p>
                                        Medication(s):<p class="petmeds"></p>
        
        
                                    </div>


                                    <div class="row">
                                            <div class="col s12">Household Pet(s):<p class="petsinhouse"> Canine, FS, 1y3m, Springer Spaniel -Rylie, Feline, MN, 10y2m, DSH -Pickels.</p></div>
                                    

                                                <div class="col s4">
                                                        Vaccines- 
                                                        <p></p>
                                                        Rabies:<p class="rabies">10/23/2020</p>
                                                </div>
                                                <div class="col s4">
                                                       DAPP:<p class="dapp">10/23/2020</p>Bordetella:<p class="bordetella">09/23/2019</p>
                                                </div>
                                                <div class="col s4">
                                                        Lepto:<p class="lepto">10/23/2019</p>Lyme:<p class="lyme">09/23/2019</p>
                                                </div>
                                                <a class="notesbutton waves-effect waves-light btn">Notes</a>
                                              </div>


                    </span></div>
                    </li>
                    <li>
                      <div class="collapsible-header"><i class="material-icons"></i>Pet 2</div>
                      <div class="collapsible-body">
                    <span>
                            <div class="card large">
                               
                            <img src="/Users/liaramirez/Documents/Pets-to-Vet/client/public/medicalnotes/Sabrina-4648-1-sm.jpg" alt="Pet">
                            <div class="petinfo">
                                Name:<p class="petname"></p>
                                Gender:<p class="petgender"></p>
                                Species:<p class="petspecies"></p>
                                Breed:<p class="petbreed"></p>
                                Date of Birth:<p class="dob"></p>
                                Age:<p class ="petage"></p>
                                Food:<p class="petfood"></p>
                                Medication(s):<p class="petmeds"></p>


                            </div>
                            <div class="shortbio">
                                
                                    
                                    </div>


                                    <div class="row">
                                            <div class="col s12">Household Pet(s)<p class="petsinhouse"> Canine, FS, 1y3m, Springer Spaniel -Rylie, Feline, MN, 10y2m, DSH -Pickels.</p></div>
                                    

                                                <div class="col s4">
                                                       <h2 class="vxtitle">Vaccines-</h2>
                                                        Rabies:<p class="rabies">10/23/2020</p>
                                                </div>
                                                <div class="col s4">
                                                       DAPP:<p class="dapp">10/23/2020</p>Bordetella:<p class="bordetella">09/23/2019</p>
                                                </div>
                                                <div class="col s4">
                                                        Lepto:<p class="lepto">10/23/2019</p>Lyme:<p class="lyme">09/23/2019</p>
                                                </div>
                                                <a class="notesbutton waves-effect waves-light btn">Notes</a>
                                              </div>
                                                    





                                  </div>
                    
                    </span></div>
                    </li>
                    <li>
                      <div class="collapsible-header"><i class="material-icons"></i>Pet 3</div>
                      <div class="collapsible-body">
                          
                 <span>
                     
                        <div class="card large">
                                
                        <img src="/Users/liaramirez/Documents/Pets-to-Vet/client/public/medicalnotes/Sabrina-4648-1-sm.jpg" alt="Pet">
                       
                        <div class="petinfo">
                                Name:<p class="petname"></p>
                                Gender:<p class="petgender"></p>
                                Species:<p class="petspecies"></p>
                                Breed:<p class="petbreed"></p>
                                Date of Birth:<p class="dob"></p>
                                Age:<p class ="petage"></p>
                                Food:<p class="petfood"></p>
                                Medication(s):<p class="petmeds"></p>


                            </div>

                           


                            <div class="row">
                                    <div class="col s12">Household Pet(s):<p class="petsinhouse"> Canine, FS, 1y3m, Springer Spaniel -Rylie, Feline, MN, 10y2m, DSH -Pickels.</p></div>
                            

                                        <div class="col s4">
                                           
                                        
                                                 Rabies:
                                             
                                        <p class="rabies">10/23/2020</p>
                                        </div>
                                        <div class="col s4">
                                               DAPP:<p class="dapp">10/23/2020</p>Bordetella:<p class="bordetella">09/23/2019</p>
                                        </div>
                                        <div class="col s4">
                                                Lepto:<p class="lepto">10/23/2019</p>Lyme:<p class="lyme">09/23/2019</p>
                                        </div>
                                        <a class="notesbutton waves-effect waves-light btn">Notes</a>
                                      </div>


                              </div>



                </span></div>
                    </li>
                  </ul>
                        
    <a class="addpet waves-effect waves-light btn-large">+ Add Pet</a>


    </div>
    </div>
                
</body>
<script>
 document.addEventListener('DOMContentLoaded', function() {
    var options = {

    };
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });


  var optio
</script>



































<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>  

<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

  <!-- Load our React component. -->
  <script src="like_button.js"></script>
</body>
</html>