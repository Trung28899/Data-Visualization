/******************************** Tooltip Code ********************************/

const focus = g.append("g").attr("class", "focus").style("display", "none");

focus
  .append("line")
  .attr("class", "x-hover-line hover-line")
  .attr("y1", 0)
  .attr("y2", HEIGHT);

focus
  .append("line")
  .attr("class", "y-hover-line hover-line")
  .attr("x1", 0)
  .attr("x2", WIDTH);

focus.append("circle").attr("r", 7.5);

focus.append("text").attr("x", 15).attr("dy", ".31em");

g.append("rect")
  .attr("class", "overlay")
  .attr("width", WIDTH)
  .attr("height", HEIGHT)
  .on("mouseover", () => focus.style("display", null))
  .on("mouseout", () => focus.style("display", "none"))
  .on("mousemove", mousemove);

function mousemove() {
  const x0 = x.invert(d3.mouse(this)[0]);
  const i = bisectDate(data, x0, 1);
  const d0 = data[i - 1];
  const d1 = data[i];
  const d = x0 - d0.year > d1.year - x0 ? d1 : d0;
  focus.attr("transform", `translate(${x(d.year)}, ${y(d.value)})`);
  focus.select("text").text(d.value);
  focus.select(".x-hover-line").attr("y2", HEIGHT - y(d.value));
  focus.select(".y-hover-line").attr("x2", -x(d.year));
}

/******************************** Tooltip Code ********************************/
