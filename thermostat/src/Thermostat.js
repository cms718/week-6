class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaving = true;
  }

  up = () => {
    if (this.powerSaving && this.temperature < 25) this.temperature++;
    if (!this.powerSaving && this.temperature < 32) this.temperature++;
  };

  down = () => {
    if (this.temperature > 10) this.temperature--;
  };

  togglePowerSaving = () => {
    this.powerSaving = !this.powerSaving;
  };
}
