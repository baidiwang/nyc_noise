
async function drawLineChart() {

  // 1. Access data

  let ds = await d3.json("./noise_complaints.json")
  var dataset = ds[0]

  const yAccessor = d => d.total
  const dateParser = d3.timeParse("%Y-%m-%d")
  const xAccessor = d => dateParser(d.Date)
  

  // 2. Create chart dimensions

  let dimensions = {
    // width: window.innerWidth * 0.9,
    width: 800,
    height: 400,
    margin: {
      top: 15,
      right: 15,
      bottom: 40,
      left: 60,
    },
  }
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

  // 3. Draw canvas

  const wrapper = d3.select("#wrapper")
    .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)

  //add chart title here
  wrapper.append("g")
      .append("text")
      .attr("x", (dimensions.width / 2))             
      .attr("y", (dimensions.margin.top / 1.2))
      .attr("text-anchor", "middle")  
      .style("font-size", "18px") 
      .text("NYC noise complaints from March 2020 to Aug 2021");


  const bounds = wrapper.append("g")
      .attr("transform", `translate(${
        dimensions.margin.left
      }, ${
        dimensions.margin.top
      })`)

  bounds.append("defs").append("clipPath")
      .attr("id", "bounds-clip-path")
    .append("rect")
      .attr("width", dimensions.boundedWidth)
      .attr("height", dimensions.boundedHeight)

  const clip = bounds.append("g")
    .attr("clip-path", "url(#bounds-clip-path)")

  // 4. Create scales

  const yScale = d3.scaleLinear()
    .domain(d3.extent(dataset, yAccessor))
    .range([dimensions.boundedHeight, 0])

  const xScale = d3.scaleTime()
    .domain(d3.extent(dataset, xAccessor))
    .range([0, dimensions.boundedWidth])

  // 5. Draw data

  const lineGenerator = d3.line()
    .x(d => xScale(xAccessor(d)))
    .y(d => yScale(yAccessor(d)))

  const line = clip.append("path")
      .attr("class", "line")
      .attr("d", lineGenerator(dataset))

  // 6. Draw peripherals

  const yAxisGenerator = d3.axisLeft()
    .scale(yScale)

  const yAxis = bounds.append("g")
      .attr("class", "y-axis")
    .call(yAxisGenerator)

  const yAxisLabel = yAxis.append("text")
      .attr("class", "y-axis-label")
      .attr("x", -dimensions.boundedHeight / 2)
      .attr("y", -dimensions.margin.left + 10)
      .html("Noise Complaints")

  const xAxisGenerator = d3.axisBottom()
    .scale(xScale)

  const xAxis = bounds.append("g")
      .attr("class", "x-axis")
      .style("transform", `translateY(${dimensions.boundedHeight}px)`)
      .call(xAxisGenerator)

  // 7. Set up interactions

  const listeningRect = bounds.append("rect")
    .attr("class", "listening-rect")
    .attr("width", dimensions.boundedWidth)
    .attr("height", dimensions.boundedHeight)
    .on("mousemove", onMouseMove)
    .on("mouseleave", onMouseLeave)

  const tooltip = d3.select("#tooltip")
  const tooltipCircle = bounds.append("circle")
      .attr("class", "tooltip-circle")
      .attr("r", 4)
      .attr("stroke", "#ff8566")
      .attr("fill", "white")
      .attr("stroke-width", 2)
      .style("opacity", 0)

  function onMouseMove() {
    const mousePosition = d3.mouse(this)
    const hoveredDate = xScale.invert(mousePosition[0])

    const getDistanceFromHoveredDate = d => Math.abs(xAccessor(d) - hoveredDate)
    const closestIndex = d3.scan(dataset, (a, b) => (
      getDistanceFromHoveredDate(a) - getDistanceFromHoveredDate(b)
    ))
    const closestDataPoint = dataset[closestIndex]

    const closestXValue = xAccessor(closestDataPoint)
    const closestYValue = yAccessor(closestDataPoint)

    const formatDate = d3.timeFormat("%B %-d, %Y")
    tooltip.select("#date")
        .text(formatDate(closestXValue))

    const formatCases = d => `${d3.format("")(d)}`
    tooltip.select("#total")
        .html(formatCases(closestYValue))

    const x = xScale(closestXValue)
      + dimensions.margin.left
    const y = yScale(closestYValue)
      + dimensions.margin.top

    tooltip.style("transform", `translate(`
      + `calc( -10% + ${x}px),`
      + `calc(-100% + ${y}px)`
      + `)`)

    tooltip.style("opacity", 1)

    tooltipCircle
        .attr("cx", xScale(closestXValue))
        .attr("cy", yScale(closestYValue))
        .style("opacity", 1)
  }

  function onMouseLeave() {
    tooltip.style("opacity", 0)
    tooltipCircle.style("opacity", 0)
  }
}
drawLineChart()
