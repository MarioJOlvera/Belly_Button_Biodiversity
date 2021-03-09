d3.json("data/samples.json").then((data) => {
    console.log(data);

    // Bar Plot

    let samples = data.samples.map(d => d.samples);
    let samplevalues = samples.sample_values;
    let OTU_top = samples.otu_ids;
    let OTU_id = samples.OTU_top;
    let labels = samples.otu_labels;

    let trace1 = {
        x: samplevalues,
        y: OTU_id,
        text: labels,
        type: "bar",
        orientation: "h"
    }

    let data1 = [trace1];

    let layout1 = {
        title: "OTU top 10",
        yaxis: {
            tickmode: "linear",
        },
        margin: {
            left: 100,
            right: 100,
            top: 100,
            bottom: 30
        }
    };

    Plotly.newPlot("bar", data1, layout1);

    // Bubble Plot

    let trace2 = {
        x: samples.otu_ids,
        y: samples.sample_values,
        mode: "markers",
        marker: {
            size: samples.sample_values,
            color: samples.otu_ids,
        },
        text: samples.otu_labels
    };

    let layout2 = {
        xaxis:{title: "OTU ID"},
        height: 600,
        width: 1000,
    };

    let data2 = [trace2];

    Plotly.newPlot("bubble", data2, layout2);
})

function getInfo(id){
    d3.json("data/samples.json").then((data) => {
        
        
        let metadata = data.metadata;

        let result = metadata.filter(meta => meta.id.toString()=== id)[0];

        demographicInfo.html("");

        Object.entries(result).forEach((key) => {
            demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
        });
    });
}

