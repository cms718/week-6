"use-strict";

document.addEventListener("DOMContentLoaded", () => {
  let thermostat = new Thermostat();

  updateTemperature = () => {
    document.getElementById("temperature").innerHTML =
      thermostat.getTemperature();
    document.getElementById("temperature").className = thermostat.energyUsage();
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
