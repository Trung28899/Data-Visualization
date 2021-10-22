/*
 *    main.js
 *    Mastering Data Visualization with D3.js
 *    Project 3 - CoinStats
 */

const MARGIN = { LEFT: 80, RIGHT: 100, TOP: 50, BOTTOM: 100 };
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

// time parser for x-scale
const parseTime = d3.timeParse("%d/%m/%Y");
// for tooltip
const bisectDate = d3.bisector((d) => d.year).left;

let coinType = $("#coin-select").val();
let dataType = $("#var-select").val();
let dateRangeInMilli = [
  parseTime("12/5/2013").getTime(),
  parseTime("31/10/2017").getTime(),
];

const svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
  .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM);

const g = svg
  .append("g")
  .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

// scales
const x = d3.scaleTime().range([0, WIDTH]);
const y = d3.scaleLinear().range([HEIGHT, 0]);

// axis generators
const xAxisCall = d3.axisBottom();
const yAxisCall = d3.axisLeft().ticks(6);

// axis groups
const xAxis = g
  .append("g")
  .attr("class", "x axis")
  .attr("transform", `translate(0, ${HEIGHT})`);
const yAxis = g.append("g").attr("class", "y axis");

// y-axis label
yAxis
  .append("text")
  .attr("class", "axis-title")
  .attr("transform", "rotate(-90)");

// line path generator
const line = d3
  .line()
  .x((d) => x(d.year))
  .y((d) => y(d.value));

// Event listening for the Coin Type update
$("#coin-select").on("change", function () {
  coinType = $("#coin-select").val();
  update();
});

// Event listening for the Data Type update
$("#var-select").on("change", function () {
  dataType = $("#var-select").val();
  update();
});

// Slider setup
$("#date-slider").slider({
  range: true,
  max: parseTime("31/10/2017").getTime(),
  min: parseTime("12/5/2013").getTime(),
  step: 86400000, // one day
  values: [parseTime("12/5/2013").getTime(), parseTime("31/10/2017").getTime()],
  slide: (event, ui) => {
    dateRangeInMilli = ui.values;
    update();
  },
});

function update() {
  console.log(coinType);
  console.log(dataType);
  console.log(dateRangeInMilli);

  const dateBegin = new Date(dateRangeInMilli[0]);
  const dateStringBegin = `${dateBegin.getDate()}/${
    dateBegin.getMonth() + 1
  }/${dateBegin.getUTCFullYear()}`;

  const dateEnd = new Date(dateRangeInMilli[1]);
  const dateStringEnd = `${dateEnd.getDate()}/${
    dateEnd.getMonth() + 1
  }/${dateEnd.getUTCFullYear()}`;

  $("#dateLabel1").text(dateStringBegin);
  $("#dateLabel2").text(dateStringEnd);
}

/*

d3.json("data/coins.json").then((data) => {
  console.log(data);
});

*/
