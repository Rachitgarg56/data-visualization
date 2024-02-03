const ctx = document.getElementById('myChart');
const canvas = document.querySelector('canvas');

const select = document.querySelector('select');

const data = {
    labels: ['2015', '2017', '2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'Poverty Rate in India (percent)',
      data: [18.73, 13.37, 11.09, 12.73, 14.72, 11.9],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
      ],
      borderWidth: 1
    }]
}

let type = 'bar';

let any;

window.onload = () => {
    
    any = new Chart(ctx, {
        type: type,
        data: data,
        
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
    })
}

let pie = null;

function handleChange (e) {
    any.destroy();
    if (e.target.value == 'line-chart') {
        type = 'line';
        anime({
            targets: 'canvas',
            translateX: 250,
            rotate: '1turn',
        });
        pie = false;
    } else if (e.target.value == 'pie-chart') {
        type = 'pie';
        anime({
            targets: 'canvas',
            translateX: -250,
            rotate: '1turn',
        });
        pie = true;
    } else {
        type = 'bar';
        if (pie) {
            anime({
                targets: 'canvas',
                translateX: 70,
                rotate: '1turn',
            });
        } else {
            anime({
                targets: 'canvas',
                translateX: -100,
                rotate: '1turn',
            });
        }
        pie = null;
    }

    any = new Chart(ctx, {
        type: type,
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
    })
}




