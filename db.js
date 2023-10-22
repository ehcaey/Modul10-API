const { Sequelize, DataTypes } = require("sequelize");

// Buat koneksi ke database
const sequelize = new Sequelize("modul10", "root", "", {
  host: "localhost", // Ganti dengan host database Anda
  dialect: "mysql", // Ganti jika menggunakan database yang berbeda
});

// Definisikan model untuk tabel 'devices'
const Device = sequelize.define("devices", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sensor_spesification: {
    type: DataTypes.TEXT,
  },
  gps_location_latitude: {
    type: DataTypes.DECIMAL(10, 6),
  },
  gps_location_longitude: {
    type: DataTypes.DECIMAL(10, 6),
  },
  device_notification: {
    type: DataTypes.BOOLEAN,
  },
});

// Sinkronkan model dengan database (buat tabel jika belum ada)
sequelize.sync();

module.exports = { sequelize, Device };
