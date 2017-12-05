$(document).ready(function() {
        // this code will run after all other $(document).ready() scripts
        // have completely finished, AND all page elements are fully loaded.
        var responseChartCanvas = document.getElementById("responseChart");
        var responseChart = new Chart(responseChartCanvas, {
            type: 'doughnut',
            data: {
                labels: ["Age Group 1", "Age Group 2", "Age Group 3", "Age Group 4"],
                datasets: [{
                    data: [1936, 437, 873, 582],
                    backgroundColor: [
                        '#F7464A',
                        '#3ccedb',
                        '#ffcc05',
                        '#4166b0'
                    ],
                    borderColor: [
                        '#FFF'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                animation:{
                    animateRotate:true,

                },
                legend: {
                    display: true,
                    labels : {
                      fontColor : '#ffffff',
                      fontFamily: "Avenir"
                    },
                    position: 'bottom'
                }
            }
        });
});
