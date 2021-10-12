## Course Content:

41: Adding Update Function

- Setting up update function for the SVG to be updated every 1 second
- See d3.interval and update() function

42: The D3 Update Pattern
a. Concepts:

    - enter(): respresent all of the elements in the data array but not rendered
    on the page. These are the elements that need to be entered on to the screen

    - group(): represent all of the elements on the screen that exists in the
    data array

    - exit(): represent all of the elements that are on the page but don't exist in
    the data array

b. Update Pattern:

    - Step 1: Data Join - Select all matching elements on the screen with selectAll, and update the data we're using

    - Step 2: Exit - use the exit() selector to remove the elements that don't exist
        in our new array of data

    - Step 3: Update - set attributes for existing elements on the screen

    - Step 4: Enter - use the enter() selector to set attributes for new
        items in our data array

Demonstration:
https://drive.google.com/file/d/1zv82nN8LG06z9bfM3EOCLDLZMUdaE1iN/view?usp=sharing

43 + 44: Make Chart Dynamic. D3 Transitions

- see the flag variable and how it changes in the d3.intervals() to see
  how it effects and changes the data values

- D3 Transitions:
  +, See d3.transition().duration(750)
  +, .merge(rects): function above this will be called for the enter() call
  function below this will be call for both enter() and update() call so we don't duplicate our code
