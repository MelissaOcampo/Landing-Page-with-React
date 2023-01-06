import React from "react"; 
import Navbar from "./Navbar.jsx"; 
import Jumbotron from "./Jumbotron.jsx"; 
import Cards from "./Cards.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = function () {
	return (
		<>	
	<Navbar/>
	<Jumbotron/>
	<div className="container text-center">
  <div className="row">
    <div className="col-md-3">
    <Cards/>
    </div>
    <div className="col-md-3">
	<Cards/>
    </div>
    <div className="col-md-3">
    <Cards/>
    </div>
	<div className="col-md-3">
    <Cards/>
    </div>
  </div>
</div>
	</>);
};

export default Home;
