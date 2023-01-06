import React from "react"; 

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = function () {
	return (
		<>
	
	<div className="card">
  <div className="card-body">
    <h5 className="card-title">A Wram Welcome!</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero
aliquid similique quaerat nam nobis illo aspernatur vita fugiat numquam repellat.</p>
    <a href="#" className="btn btn-primary">Call to cation!</a>
  </div>
</div>
	</>);
};

export default Jumbotron;
