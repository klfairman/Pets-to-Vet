import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            


               
               <div className="card small">
            <ul className="collapsible">
                    <li>
                      <div className="collapsible-header"><i className="material-icons"></i>Pet 1</div>
                      <div className="collapsible-body">
                     <span>
                          
                            <div className="card large">
                                
                                <img src="/Users/liaramirez/Documents/Pets-to-Vet/client/public/medicalnotes/Sabrina-4648-1-sm.jpg" alt="Pet">
                                 


                                <div className="petinfo">
                                        Name:<p className="petname"></p>
                                        Gender:<p className="petgender"></p>
                                        Species:<p className="petspecies"></p>
                                        Breed:<p className="petbreed"></p>
                                        Date of Birth:<p className="dob"></p>
                                        Age:<p className ="petage"></p>
                                        Food:<p className="petfood"></p>
                                        Medication(s):<p className="petmeds"></p>
        
        
                                    </div>


                                    <div className="row">
                                            <div className="col s12">Household Pet(s):<p class="petsinhouse"> Canine, FS, 1y3m, Springer Spaniel -Rylie, Feline, MN, 10y2m, DSH -Pickels.</p></div>
                                    

                                                <div className="col s4">
                                                        Vaccines- 
                                                        <p></p>
                                                        Rabies:<p className="rabies">10/23/2020</p>
                                                </div>
                                                <div className="col s4">
                                                       DAPP:<p className="dapp">10/23/2020</p>Bordetella:<p className="bordetella">09/23/2019</p>
                                                </div>
                                                <div className="col s4">
                                                        Lepto:<p class="lepto">10/23/2019</p>Lyme:<p class="lyme">09/23/2019</p>
                                                </div>
                                                <a className="notesbutton waves-effect waves-light btn">Notes</a>
                                              </div>


                    </span></div>
                    </li>
                    <li>
                      <div className="collapsible-header"><i className="material-icons"></i>Pet 2</div>
                      <div className="collapsible-body">
                    <span>
                            <div className="card large">
                               
                            <img src="/Users/liaramirez/Documents/Pets-to-Vet/client/public/medicalnotes/Sabrina-4648-1-sm.jpg" alt="Pet">
                            <div className="petinfo">
                                Name:<p className="petname"></p>
                                Gender:<p className="petgender"></p>
                                Species:<p className="petspecies"></p>
                                Breed:<p className="petbreed"></p>
                                Date of Birth:<p className="dob"></p>
                                Age:<p className ="petage"></p>
                                Food:<p className="petfood"></p>
                                Medication(s):<p className="petmeds"></p>


                            </div>
                            <div className="shortbio">
                                
                                    
                                    </div>


                                    <div className="row">
                                            <div className="col s12">Household Pet(s)<p className="petsinhouse"> Canine, FS, 1y3m, Springer Spaniel -Rylie, Feline, MN, 10y2m, DSH -Pickels.</p></div>
                                    

                                                <div className="col s4">
                                                       <h2 className="vxtitle">Vaccines-</h2>
                                                        Rabies:<p className="rabies">10/23/2020</p>
                                                </div>
                                                <div className="col s4">
                                                       DAPP:<p className="dapp">10/23/2020</p>Bordetella:<p className="bordetella">09/23/2019</p>
                                                </div>
                                                <div className="col s4">
                                                        Lepto:<p className="lepto">10/23/2019</p>Lyme:<p className="lyme">09/23/2019</p>
                                                </div>
                                                <a className="notesbutton waves-effect waves-light btn">Notes</a>
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


































         </div>
      );
   }
}
export default App;