export default function(historical, BTChistorical) {
  console.log(BTChistorical);
  historical[0].yAxis = 0;
  BTChistorical[0].yAxis = 1;
  BTChistorical[0].color = "#ff0000";
  //BTChistorical[0].type = "spline";
  return {
    title: {
      text: ""
    },

    xAxis: {
      type: "datetime",
      gridLineWidth: 1,
      labels: {
        align: "left",
        x: 3,
        y: -3
      }
    },

    yAxis: [
      {
        // left y axis
        title: {
          text: null
        },
        labels: {
          align: "left",
          x: 3,
          y: 16,
          format: "{value:.,0f}"
        },
        showFirstLabel: false
      },
      {
        // right y axis
        //          linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
          text: null
        },
        labels: {
          align: "right",
          x: -3,
          y: 16,
          format: "{value:.,0f}"
        },
        showFirstLabel: false
      }
    ],

    legend: {
      align: "left",
      verticalAlign: "top",
      borderWidth: 0
    },

    tooltip: {
      shared: true,
      crosshairs: true
    },

    plotOptions: {
      series: {
        cursor: "pointer"
        /* point: {
                  events: {
                      click: function (e) {
                          hs.htmlExpand(null, {
                              pageOrigin: {
                                  x: e.pageX || e.clientX,
                                  y: e.pageY || e.clientY
                              },
                              headingText: this.series.name,
                              maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                                  this.y + ' sessions',
                              width: 200
                          });
                      }
                  }
              },
              marker: {
                  lineWidth: 1
              } */
      }
    },

    series: [historical[0], BTChistorical[0]]
  };
}
