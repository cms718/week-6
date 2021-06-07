describe("Thermostat", () => {
  it("starts at 20 degrees", () => {
    let thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
  });

  describe("increasing the temperature", () => {
    it("adds 1 to temperature", () => {
      let thermostat = new Thermostat();
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it("has a maximum temperature of 32 when power saver is off", () => {
      let thermostat = new Thermostat();
      thermostat.togglePowerSaving();
      for (i = 0; i <= 13; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(32);
    });
    it("has a maximum temperature of 25 when power saver is on", () => {
      let thermostat = new Thermostat();
      for (i = 0; i <= 6; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe("descreasing the temperature", () => {
    it("takes 1 off temperature", () => {
      let thermostat = new Thermostat();
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it("has a minimum of 10", () => {
      let thermostat = new Thermostat();
      for (i = 0; i <= 10; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature).toEqual(10);
    });
  });
});
