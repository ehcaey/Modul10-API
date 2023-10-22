const express = require("express");
const { Device } = require("./db"); // Impor model Device dari berkas db.js

const router = express.Router();

// GET: Mendapatkan semua data devices
router.get("/devices", async (req, res) => {
  try {
    const devices = await Device.findAll();
    res.json(devices);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Terjadi kesalahan saat mengambil data devices." });
  }
});

// POST: Menambahkan data device baru
router.post("/devices", async (req, res) => {
  const {
    name,
    location,
    type,
    sensor_spesification,
    gps_location_latitude,
    gps_location_longitude,
    device_notification,
  } = req.body;

  try {
    // Cek apakah 'name' unik
    const isNameUnique = await Device.findOne({ where: { name } });

    if (isNameUnique) {
      res.status(400).json({ error: "Nama perangkat harus unik." });
    } else {
      const device = await Device.create({
        name,
        location,
        type,
        sensor_spesification,
        gps_location_latitude,
        gps_location_longitude,
        device_notification,
      });
      res.json(device);
    }
  } catch (error) {
    res
      .status(400)
      .json({ error: "Terjadi kesalahan saat menambahkan device baru." });
  }
});

// PUT: Mengubah data device berdasarkan ID
router.put("/devices/:id", async (req, res) => {
  const deviceId = req.params.id;
  const updatedDevice = req.body;

  try {
    const [updatedRows] = await Device.update(updatedDevice, {
      where: { id: deviceId },
    });

    if (updatedRows > 0) {
      res.json({ message: "Data device berhasil diperbarui." });
    } else {
      res.status(404).json({ error: "Data device tidak ditemukan." });
    }
  } catch (error) {
    res
      .status(400)
      .json({ error: "Terjadi kesalahan saat memperbarui data device." });
  }
});

// DELETE: Menghapus data device berdasarkan ID
router.delete("/devices/:id", async (req, res) => {
  const deviceId = req.params.id;

  try {
    const deletedDevice = await Device.destroy({
      where: { id: deviceId },
    });

    if (deletedDevice) {
      res.json({ message: "Data device berhasil dihapus." });
    } else {
      res.status(404).json({ error: "Data device tidak ditemukan." });
    }
  } catch (error) {
    res
      .status(400)
      .json({ error: "Terjadi kesalahan saat menghapus data device." });
  }
});

module.exports = router;
