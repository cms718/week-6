"use-strict";

document.addEventListener("DOMContentLoaded", () => {
  let thermostat = new Thermostat();

  updateTemperature = () => {
    document.getElementById("temperature").innerHTML =
      thermostat.getTemperature();
    if (thermostat.energyUsage() === "medium-usage")
      document.getElementById("temperature").style.color = "black";
    else if (thermostat.energyUsage() === "low-usage")
      document.getElementById("temperature").style.color = "green";
    else document.getElementById("temperature").style.color = "red";
  };

  updatePowerSaving = () => {
    document.getElementById("power-saving").innerHTML =
      thermostat.isPowerSavingOn() ? "Power Saver: On" : "Power Saver: Off";
  };

  document
    .getElementById("toggle-powersaving")
    .addEventListener("click", () => {
      thermostat.togglePowerSaving();
      updatePowerSaving();
    });

  document.getElementById("temperature-up").addEventListener("click", () => {
    thermostat.up();
    updateTemperature();
  });

  document.getElementById("temperature-down").addEventListener("click", () => {
    thermostat.down();
    updateTemperature();
  });

  document.getElementById("temperature-reset").addEventListener("click", () => {
    thermostat.resetTemperature();
    updateTemperature();
  });
  updateTemperature();
  updatePowerSaving();
});
