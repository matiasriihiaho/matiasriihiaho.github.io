document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("area");
    const areaValue = document.getElementById("area-value");
    const cost = document.getElementById("cost");
  
    slider.addEventListener("input", function () {
      const m2 = slider.value;
      areaValue.textContent = m2;
      cost.textContent = m2 * 1;
    });
  });
  