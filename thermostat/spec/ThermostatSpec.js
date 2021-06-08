"use-strict";

describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", () => {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("has power saving mode on by default", () => {
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  it("can reset to the default temperature", () => {
    thermostat.up();
    thermostat.resetTemperature();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  describe("increasing the temperature", () => {
    it("adds 1 to temperature", () => {
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(21);
    });

    it("has a maximum temperature of 32 when power saver is off", () => {
      thermostat.togglePowerSaving();
      for (i = 0; i <= 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(32);
    });

    it("has a maximum temperature of 25 when power saver is on", () => {
      for (i = 0; i <= 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(25);
    });
  });

  describe("descreasing the temperature", () => {
    it("takes 1 off temperature", () => {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
    });

    it("has a minimum of 10", () => {
      for (i = 0; i <= 10; i++) {
        thermostat.down();
      }
      expect(thermostat.getTemperature()).toEqual(10);
    });
  });

  describe("displaying the current energy usage", () => {
    describe("when the temperature is below 18", () => {
      it("has low-usage", () => {
        for (i = 0; i <= 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual("low-usage");
      });
    });
    describe("when the temperature is <= 25", () => {
      it("has medium-usage", () => {
        expect(thermostat.energyUsage()).toEqual("medium-usage");
      });
    });
    describe("when the temperature is higher than 25", () => {
      it("has high-usage", () => {
        thermostat.togglePowerSaving();
        for (i = 0; i <= 8; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual("high-usage");
      });
    });
  });
});
