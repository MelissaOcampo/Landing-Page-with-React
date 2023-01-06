import React from "react"; 

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Cards = function () {
	return (
		<>
	<div className="card" style={{width: "18rem"}}>
  <img src="https://i.pinimg.com/originals/d4/6c/a0/d46ca0515a56e5cec3c140a736f86d42.jpg" className="card-img-top" alt=".."/>
  <div className="card-body">
    <h5 className="card-title">Very popular insect</h5>
    <p className="card-text">Lepidoptera, more commonly known as butterflies, are insects belonging to the order of homometabola, a group of higher insects, which, throughout their lives, undergo a series of complex transformations known as metamorphoses, and in which successive the embryo, larva, pupa and imago stages.</p>
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
</div>
	</>);
};

export default Cards;