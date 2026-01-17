const ctx = document.getElementById("passingChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["QB1", "QB2", "QB3"],
    datasets: [{
      label: "Yardas por pase",
      data: [3200, 2950, 2800]
    }]
  }
});
