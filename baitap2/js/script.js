const TotalUser = document.getElementById('User_Chart').getContext('2d');
const mixedChart = new Chart(TotalUser, {
  type: 'bar', 
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            { 
                type: 'line',
                label: 'Dataset 1',
                backgroundColor: 'rgba(254, 174, 238, 0.8)', 
                borderColor: 'rgba(254, 174, 174, 0.7)',
                fill: false, 
                data: [-700, 250, 500, 200, 400, 250, -750] 
            },
            { 
                type: 'bar', 
                label: 'Dataset 2',
                backgroundColor: '#A9F4D0',  
                data: [-420, -450, -900, -610, -700, -900, 750] 
            },
            { 
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: '#D0E8FF', 
                borderColor: 'rgba(0, 0, 139, 1)', 
                data: [-900, 600, 950, 800, -400, -500, 450] 
            },
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }  
     
});
const TotalPosts = document.getElementById('Post_Chart').getContext('2d');
new Chart (TotalPosts, {
     type: 'line',
     data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
            label: 'Dataset 1',
            backgroundColor: '#FBE38E',
            borderColor: '#FBE38E',
            fill: false, 
            data: [-610, -450, 200, 100, 590, -250, -600],
            yAxisID: 'y'

            },
            {
                label: 'Dataset 2',
                backgroundColor: '#9A89FF',
                borderColor: '#9A89FF',
                fill: false, 
                data: [-800, 0, 590, 400, -650, -450, -600],
                yAxisID: 'y1'
                },
        ]
     },
     options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                min: -800,
                max: 800,
                position: 'left',
                title: {
                    display: true,
                    
            }
        }, 
            y1: {
                beginAtZero: true,
                min: -1000,
                max: 800,
                position: 'right',
                grid: {
                    drawOnChartArea: false // Tắt grid của trục y1 để không chồng lên grid của y
                },
                title: {
                    display: true,
                }
            }
        }
    }

});
const UserPost = document.getElementById("User's_Posts").getContext('2d');
new Chart (UserPost, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
            label: 'Dataset 1',
            backgroundColor: '#FBAEAE',
            data: [-250, -750, 150, 100, -650, 100, -150],
            stack: 'stackGroup1'

            },
            {
                label: 'Dataset 2',
                backgroundColor: '#A9F4D0',
                data: [-600, -1250, -800, 1100, -950, -650, 500],
                stack: 'stackGroup1'
                },
                {
                    label: 'Dataset 3',
                    backgroundColor: '#AEC9FE',
                    data: [150, 150, 490, -700, 700, 100, 450],
                    }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true,
                beginAtZero: true
            }
        }
    }  
});
   const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow',
            'Green',
            'Purple',
            'Orange'
        ],
        datasets: [{
            label: 'Trending',
            data: [25, 40, 20, 20, 5, 10],
            backgroundColor: [
                '#FDC5C5',
                '#D0E8FF',
                '#FBE38E',
                '#A9F4D0',
                '#DBAEFF',
                '#FDD09F'
            ],
            hoverOffset: 4
        }]
    };
    const config = {
        type: 'pie', // Type of chart
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right', // Legend position (right of the chart)
                },
                title: {
                    display: false,
                }
            }
        }
    };
    const Trending = new Chart(
        document.getElementById('trending_chart'),
        config
    );
