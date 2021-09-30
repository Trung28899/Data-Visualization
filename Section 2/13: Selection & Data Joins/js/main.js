/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    2.6 - Selections and data joins
 */

const data = [25, 20, 10, 12, 15];

const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400);

const circles = svg.selectAll("circle").data(data);

/*
	traversing through the array of data to 
	append a circle

	d is the value in data
	i is the index of the items
*/
circles
  .enter()
  .append("circle")
  .attr("cx", (d, i) => {
    console.log(d);
    console.log(i);
    return i * 100 + 50;
  })
  .attr("cy", 250)
  .attr("r", (d) => d)
  .attr("fill", "red");
