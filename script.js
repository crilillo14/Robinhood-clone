

document.addEventListener('DOMContentLoaded', function() {
    var chart = document.getElementById('chartcontainer');
    var line = document.getElementById('verticalLine');
    
    chart.addEventListener('mousemove', function(e) {
        var rect = chart.getBoundingClientRect();
        var x = e.clientX - rect.left; // x position within the chart
        line.style.left = x + 'px';
        line.style.display = 'block';
    });
    
    chart.addEventListener('mouseleave', function() {
        line.style.display = 'none';
    });
});
