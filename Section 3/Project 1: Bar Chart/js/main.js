/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    Project 1 - Star Break Coffee
 */

const MARGIN = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 };
const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM;

// Width for the svg element
const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
  .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM);

// transform for the group element
const g = svg
  .append("g")
  .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

d3.csv("data/revenues.csv").then((data) => {
  data.forEach((d) => {
    d.revenue = Number(d.revenue);
    d.profit = Number(d.profit);
  });

  /*  CREATING SCALES FOR THE AXES   */
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.month))
    .range([0, WIDTH])
    .paddingInner(0.3)
    .paddingOuter(0.2);

  const yScale = d3
    .scaleLinear()
    .domain([d3.max(data, (d) => d.revenue), 0])
    .range([0, HEIGHT]);

  /*  END CREATING SCALES FOR AXES  */

  /*  CREATING AXES AND LABELS  */
  const leftAxis = d3
    .axisLeft(yScale)
    .ticks(6)
    .tickFormat((d) => d + "$");
  const bottomAxis = d3.axisBottom(xScale);

  // AXES
  g.append("g").attr("class", "left axis").call(leftAxis);
  g.append("g")
    .attr("class", "bottom axis")
    .attr("class", "bottom axis")
    .attr("transform", `translate(0, ${HEIGHT})`)
    .call(bottomAxis);

  // LABELS
  g.append("text")
    .attr("class", "x axis-label")
    .attr("x", WIDTH / 2)
    .attr("y", HEIGHT + 50)
    .attr("font-size", "18px")
    .attr("text-anchor", "middle")
    .text("Revenues By Month");

  // Y label
  g.append("text")
    .attr("class", "y axis-label")
    .attr("x", -(HEIGHT / 2))
    .attr("y", -60)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Revenue ($)");

  /*  END CREATING AXES AND LABELS  */

  const rects = g.selectAll("rect").data(data);

  rects
    .enter()
    .append("rect")
    .attr("y", (d) => yScale(d.revenue))
    .attr("x", (d) => xScale(d.month))
    .attr("width", xScale.bandwidth)
    .attr("height", (d) => HEIGHT - yScale(d.revenue))
    .attr("fill", "grey");
});
