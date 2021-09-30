/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    2.4 - Adding SVGs with D3
 */
// works like javascript selector

// svg is the element. Search google for javascript svg element
// See Basic of SVG
const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400);

svg
  .append("circle")
  .attr("cx", 200)
  .attr("cy", 250)
  .attr("r", 100)
  .attr("fill", "purple");

svg
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("height", 100)
  .attr("width", 100)
  .attr("fill", "red");
