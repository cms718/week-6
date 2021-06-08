"use-strict";
class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSaving = true;
    this.MAX_LIMIT = 32;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM = 25;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
  }

  up() {
    if (this.isMaximumTemperature()) return;
    this.temperature++;
  }

  down() {
    if (this.isMinimumTemperature()) return;
    this.temperature--;
  }

  getTemperature() {
    return this.temperature;
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) return "low-usage";
    if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) return "medium-usage";
    return "high-usage";
  }

  togglePowerSaving() {
    this.powerSaving = !this.powerSaving;
  }

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  isPowerSavingOn() {
    return this.powerSaving;
  }

  isMaximumTemperature() {
    if (this.isPowerSavingOn()) return this.temperature === this.MAX_LIMIT_PSM;
    return this.temperature === this.MAX_LIMIT;
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
}
