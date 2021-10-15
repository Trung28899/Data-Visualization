/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    Project 2 - Gapminder Clone
 */

const MARGIN = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 };
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

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

// Year Label:
const timeLabel = g
  .append("text")
  .attr("y", HEIGHT - 10)
  .attr("x", WIDTH - 40)
  .attr("font-size", "40px")
  .attr("opacity", "0.4")
  .attr("text-anchor", "middle")
  .text("1800");

// Setting up scales:
const x = d3.scaleLog().base(10).range([0, WIDTH]).domain([142, 180000]);
const y = d3.scaleLinear().range([HEIGHT, 0]).domain([0, 90]);
const ordinalScale = d3
  .scaleOrdinal()
  .range(d3.schemePastel1)
  .domain(["europe", "asia", "americas", "africa"]);
const radiusScale = d3.scaleLinear().range([0, 10]);

// Setting up axes:
const xAxisGroup = g
  .append("g")
  .attr("class", "x axis")
  .attr("transform", `translate(0, ${HEIGHT})`);

const yAxisGroup = g.append("g").attr("class", "y axis");

d3.json("data/data.json").then(function (data) {
  data.forEach((d) => {
    d.year = Number(d.year);
  });

  console.log(data);

  let counter = 0;

  // Building Scale for circle radius
  const maxPopulation = d3.max(data, (d) => {
    // getting max population in a year of all countries to get max population all time
    const maxInAYear = d3.max(d.countries, (country) => country.population);
    return maxInAYear;
  });

  radiusScale.domain([0, maxPopulation]);

  d3.interval(() => {
    update(data[counter], data);
    if (counter < data.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
  }, 100);

  update(data[counter], data);
});

function update(data) {
  const transit = d3.transition().duration(80);

  const xAxisCall = d3
    .axisBottom(x)
    .tickValues([500, 5000, 50000])
    .tickFormat(d3.format("$"));
  xAxisGroup.transition(transit).call(xAxisCall);

  const yAxisCall = d3.axisLeft(y).ticks(10);
  yAxisGroup.transition(transit).call(yAxisCall);

  // JOIN new data with old elements.
  const rects = g.selectAll("circle").data(data.countries, (d) => d.country);

  // EXIT old elements not present in new data.
  rects.exit().remove();

  // UPDATE old elements present in new data
  rects
    .transition(transit)
    .attr("r", (d) => radiusScale(d.population) * 3.14 + 5)
    .attr("cy", (d) => {
      return y(d.life_exp);
    })
    .attr("cx", (d) => {
      const returnValue = x(d.income) || 0;
      return returnValue;
    })
    .attr("fill", (d) => {
      if (!d.income || !d.life_exp) {
        return "none";
      } else {
        return ordinalScale(d.continent);
      }
    });

  // ENTER new elements present in new data...
  rects
    .enter()
    .append("circle")
    .attr("fill", (d) => {
      if (!d.income || !d.life_exp) {
        return "none";
      } else {
        return ordinalScale(d.continent);
      }
    })
    .attr("cx", (d) => {
      const returnValue = x(d.income) || 0;
      return returnValue;
    })
    .attr("cy", (d) => {
      return y(d.life_exp);
    })
    .attr("r", (d) => radiusScale(d.population) * 3.14 + 5);

  timeLabel.text(String(data.year));
}
