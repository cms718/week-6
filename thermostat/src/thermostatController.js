"use-strict";

document.addEventListener("DOMContentLoaded", () => {
  let thermostat = new Thermostat();

  updateTemperature = () => {
    document.getElementById("temperature").innerHTML =
      thermostat.getTemperature();
  };

  updatePowerSaving = () => {
    document.getElementById("power-saving").innerHTML =
      thermostat.isPowerSavingOn() ? "Power Saver: On" : "Power Saver: Off";
  };

  updateEnergyUsage = () => {
    document.getElementById("energy-usage").innerHTML =
      thermostat.energyUsage();
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
    updateEnergyUsage();
  });

  document.getElementById("temperature-down").addEventListener("click", () => {
    thermostat.down();
    updateTemperature();
    updateEnergyUsage();
  });

  document.getElementById("temperature-reset").addEventListener("click", () => {
    thermostat.reupdateTemperature();
    updateTemperature();
    updateEnergyUsage();
  });
  updateTemperature();
  updatePowerSaving();
  updateEnergyUsage();
});
