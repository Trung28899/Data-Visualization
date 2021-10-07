## SECTION 4: BASIC OF DESIGN

1.  Design Principles

    a. Key aim to design data visualization (KEY TAKEAWAY):

        - Make data easy to interpret
        - Build credible visualizations
        - Keep the focus on the important factors

    b. Edward Tufte's Design Principles (Video 31):

    Edward Tufte is the pinoneer in Data Visualization

        - Graphical Integrity:
            +, Present data ratio correctly. Do not find a way to exaggerate the data
                (see in 1:08 video 31)
        - The Lie Factor:
            +, not sure about this one
        - Chart Junk:
            +, Any element in the screen that distract user from the data
        - Data to ink ratio:
            +, A Ratio to measure the amount of a chart junk a data visualization has

2.  Design Toolkits:

    a. Types of data: - Quantitative (numerical):
    e.g: 1,2,3,etc... - Categorical (category):
    e.g: African, Asisan, male, female, etc... - Ordinal (rankings):
    e.g: big, small, tall, short, etc...

    Here is the order of human ability to recognize order:
    Numbers (easiest) > Ranking (Low, Medium, High) > Categories (household, individual, family) (Hardest)

    b. Color selection: - Don't use 5 - 8 colours for categories - Consider color-blind users (~5% of population)

        Color-blind friendly color scheme:
        ColorBrewer2.org

    c. How to sketch an idea to paper > see video 35

=========================================================================

## SECTION 3: SCALES AND AXES (MAKING A BAR CHART)

## Terminologies:

- Scale:
  +, Get raw data input and output the computed values that
  propotional to the input but still remain within the range of the visualization

  For example:
  +, The maximum svg height is 400
  +, The value of 1 of the bar chart is 550 > larger than the maximum
  height of the containing svg > solution: scale all the values in the map down propotionally
  to fully display the visulization while keeping the propotion

  Example of Linear Scales in D3: https://drive.google.com/file/d/14MmQlSCIjqHel_1x1lCVfwSfyosa2fAH/view?usp=sharing
  Note that:
  +, domain is the range of actual raw data
  +, range is the range of the size of the container

- Domain: Actual raw data values
- Range: Scaled value that is used to fit with the visulization

## Course Content: Part 1: Scales, Part 2: margin, groups and making a bar chart

## PART 1: SCALES

NOTE: The images are in trevortrinh28899@gmail.com drive: Public/Data Visualization/Section 3

18: Linear Scale

- Example of Linear Scale
- Linear Scale is to be used for variable that the range is not too much
  For example, if you are working with some variables that has exponential growth, you will
  need to use Log Scale

19: Log Scale

- Use for exponential growth variables or the range of values are very high
- Log Scale Example:
  https://drive.google.com/file/d/1hQ7b0HuQBVPTk7sVW1EMCfKSBLD3WJQM/view?usp=sharing

20: Time Scale:

- Much like Linear Scale but works with Javascript Date Objects
- Time Scale Example:
  https://drive.google.com/file/d/17zG7Zsohsrd9MJcEiagQU-ayqn1lmsNY/view?usp=sharing

21: Ordinal Scales:

- Scale that automatically assign colors to values
- The range of color is limited, if there are more values in the Domain than
  values in the Range, the color will be repeated

- Graph on how it works:
  https://drive.google.com/file/d/1_cvDeH0WpcYw33eOs0JHp82V-arHYCcg/view?usp=sharing
- Different Color Schemes:
  https://drive.google.com/file/d/1AydDtgMWTded0Ic4ZhvqbPA_Ywg-YeBj/view?usp=sharing
- Ordinal Scale Example:
  https://drive.google.com/file/d/1psmcF9Q34L7icJrR0da_16bnTGHam-qg/view?usp=sharing

22: Band Scale:

- Use especially for bar Chart. Band Scale are used to scales x-axis for the bar chart

- Problem without band scale:
  https://drive.google.com/file/d/123fZyEudvPCP8ZgCpccV6m9I3Mt5jT1W/view?usp=sharing
- Band Scale Illustration:
  https://drive.google.com/file/d/1gLSEqdGb8hU3dQf0GD8rVZfhgvO347oX/view?usp=sharing
- Band Scale example:
  https://drive.google.com/file/d/1HmsZE3ifvnJtYb-ZdKjKK4-5KN39LfhY/view?usp=sharing

23: min, max and extent:

- min: return the min value of the array of data
- max: is the opposite of min
- extent: return an array with 2 index. 1st index is the min value
  2nd index is the max value

- Example:
  https://drive.google.com/file/d/15U6fth-e6CsSa1kJJRFFh9kg2OwdenJe/view?usp=sharing

## PART 2: MARGIN, GROUP AND AXES

24: Margin and Group:

- Grouping SVG elements:
  +, We can group svg element into <g> tag. This will help us transform the multiple elements
  as a group
  +, Example of SVG Grouping:
  https://drive.google.com/file/d/1HtL0GW_iLmp2s2VeZZ75P-m0AtZzavxA/view?usp=sharing

- Margin between <g> and <svg>
  +, Illustration:
  https://drive.google.com/file/d/1DNFREOf4D1AlN0Em0BAidsXxZTzfNOAG/view?usp=sharing

25: Axes and Labels
Full documentation: https://github.com/d3/d3-axis/blob/v3.0.0/README.md#axisTop

- Axis Generators:
  See the link down below for illustration:
  https://drive.google.com/file/d/1-1YjBZVPN3ABLBkdS2SM02XC6ctBMLaq/view?usp=sharing

- Tick Sizing and Spacing:
  https://drive.google.com/file/d/1fACWS7OQ4iVr4ve1Xiw43xpfBsBrcDQq/view?usp=sharing

- Label and other tick methods:
  https://drive.google.com/file/d/1xRFEAfVoC1_sH4rSm55xPQChZ8L_ZYM9/view?usp=sharing

26: Making a Bar Chart:

- Flipping the domain to get the bar renders correctly

=========================================================================

## SECTION 2: GETTING STARTED WITH D3:

Terminologies:

- .CSV (Comma Separated Values)
- .TSV (Tab Separated Values)
- .JSON (JavaScript Object Notation)

10: Basic of SVG:

- Basic SVG tags, elements and attributes

11: Adding SVG with D3:

- How to add SVG with javascript (D3)

13: Selections & Data Joins:

- Traverse through an array and render visuals based on the data

14: Loading External Data

- How to read data in a file and write it as visuals

=========================================================================
