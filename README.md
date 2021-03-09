# Belly Button Biodiversity

![Bacteria by filterforge.com](Images/bacteria.jpg)

In this assignment, I built an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Plotly

1. Using the D3 library to read in the code.

2. A horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual was created.

  ![bar Chart](Images/hw01.png)

3. Also a bubble chart that displays each sample was developed.

![Bubble Chart](Images/bubble_chart.png)

4. Displaying the sample metadata, i.e., an individual's demographic information.

5. Displaying each key-value pair from the metadata JSON object somewhere on the page.

![hw](Images/hw03.png)

6. Update all of the plots any time that a new sample is selected.

## Advanced Challenge 

The following task was done:

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

* Modifying the gauge code to account for values ranging from 0 through 9.

* Update the chart whenever a new sample is selected.

![Weekly Washing Frequency Gauge](Images/gauge.png)

