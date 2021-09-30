/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    2.8 - Activity: Your first visualization!
 */

d3.json("./data/buildings.json")
  .then((data) => {
    data.forEach((d) => {
      // converting string to numeric
      d.height = Number(d.height);
    });

    const svg = d3
      .select("#chart-area")
      .append("svg")
      .attr("width", 4000)
      .attr("height", 400);

    const circles = svg.selectAll("rect").data(data);

    circles
      .enter()
      .append("rect")
      .attr("x", (d, i) => {
        return i * 100 + 200;
      })
      .attr("y", 100)
      .attr("width", 50)
      .attr("height", (d, i) => {
        return d.height;
      })
      .attr("fill", "grey");
  })
  .catch((error) => {
    console.log(error);
  });
