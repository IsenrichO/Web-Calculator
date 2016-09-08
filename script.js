



window.onload = function() {


	var output_Bar = document.getElementById("output_Bar").children[0];

	var nums = document.getElementsByClassName("digit");
	document.addEventListener("click", function(evt) {
		if (evt.target.classList.contains("digit")) {
			output_Bar.value += evt.target.value;
		} else if (evt.target.classList.contains("operator")) {
			var newExpression = stageIntermediate(output_Bar.value + evt.target.value);
			output_Bar.value = output_Bar.defaultValue;
		} else if (evt.target === document.getElementsByName("equals")[0]) {
			let lastResult = document.getElementById("staging_Area").lastElementChild.textContent += output_Bar.value;
			output_Bar.value = eval(lastResult.substring(1));
				// output_Bar.value = output_Bar.defaultValue;

			lastResult += " = " + eval(lastResult.substring(1));
		}
		
	});
	


};


function stageIntermediate(val) {
	var stage = document.getElementById("staging_Area");

	var newIntermediate = document.createElement("P"),
		newIntermediate_Node = document.createTextNode("\u2771\xA0\xA0" + val);

	newIntermediate.appendChild(newIntermediate_Node);


	stage.appendChild(newIntermediate);
}
















































