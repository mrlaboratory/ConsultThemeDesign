$(document).ready(function() {
	// Bar Chart
	var randomScalingFactor = function() {
		return Math.round(Math.random() * 100)
	};
	var barChartData = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [{
			fillColor: "rgba(39, 69, 132,0.5)",
			strokeColor: "rgba(39, 69, 132,0.8)",
			highlightFill: "rgba(39, 69, 132,0.75)",
			highlightStroke: "rgba(39, 69, 132,1)",
			data: [50, 40, 30, 70, 43, 70, 50]
		}, {
			fillColor: "rgba(0,187,209,0.5)",
			strokeColor: "rgba(0,187,209,0.8)",
			highlightFill: "rgba(0,187,209,0.75)",
			highlightStroke: "rgba(0,187,209,1)",
			data: [85, 70, 40, 65, 37, 80, 20]
		}]
	}
	window.onload = function() {
		var chart_barChart = document.getElementById("barChart").getContext("2d");
		window.myBar = new Chart(chart_barChart).Bar(barChartData, {
			responsive: true
		});
	};
});