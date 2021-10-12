/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    Project 2 - Gapminder Clone
 */

const MARGIN = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 };
const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM;

// Setting up the chart area
const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
  .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM);

// Setting up the parents chart
const g = svg
  .append("g")
  .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

// Setting Up Labels:
// X label
g.append("text")
  .attr("class", "x axis-label")
  .attr("x", WIDTH / 2)
  .attr("y", HEIGHT + 50)
  .attr("font-size", "15px")
  .attr("text-anchor", "middle")
  .text("GDP Per Capital ($)");

// Y label
const yLabel = g
  .append("text")
  .attr("class", "y axis-label")
  .attr("x", -(HEIGHT / 2))
  .attr("y", -60)
  .attr("font-size", "15px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Life Expectancy (Years)");

// Setting up scales:
const x = d3.scaleLinear().range([0, WIDTH]);
const y = d3.scaleLinear().range([HEIGHT, 0]);

// Setting up axes:
const xAxisGroup = g
  .append("g")
  .attr("class", "x axis")
  .attr("transform", `translate(0, ${HEIGHT})`);

const yAxisGroup = g.append("g").attr("class", "y axis");

d3.json("data/data.json").then(function (data) {
  const vietData = [];
  let counter = 0;
  data.forEach((d) => {
    d.year = Number(d.year);
    const dataObject = d.countries.filter(
      (country) => country.country === "Canada"
    );
    vietData.push({ year: d.year, data: dataObject[0] });
  });

  // const maxIncome = d3.max(vietData, (d) => d.data["income"]);

  d3.interval(() => {
    update(vietData[counter], vietData, counter);
    if (counter < vietData.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
  }, 100);

  update(vietData[counter], vietData, counter);
});

function update(data, fullData, counter) {
  const transit = d3.transition().duration(50);

  x.domain([0, d3.max(fullData, (d) => d.data["income"])]);
  y.domain([0, d3.max(fullData, (d) => d.data["life_exp"])]);

  const xAxisCall = d3.axisBottom(x).ticks(10);
  xAxisGroup.transition(transit).call(xAxisCall);

  const yAxisCall = d3.axisLeft(y).ticks(10);
  yAxisGroup.transition(transit).call(yAxisCall);

  // JOIN new data with old elements.
  const rects = g.selectAll("circle").data([data]);

  // EXIT old elements not present in new data.
  rects.exit().remove();

  // UPDATE old elements present in new data
  rects
    .attr("cy", (d) => {
      return y(d.data.life_exp);
    })
    .attr("cx", (d) => x(d.data.income))
    .transition(transit)
    .attr("fill", "blue");

  // ENTER new elements present in new data...
  rects
    .enter()
    .append("circle")
    .attr("fill", "grey")
    .attr("cx", x(data.data.income))
    .attr("cy", y(data.data.life_exp))
    .attr("r", 5);
}
