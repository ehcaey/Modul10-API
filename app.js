const express = require("express");
const app = express();
const port = 3000;

// Mengimpor rute API
const deviceApi = require("./deviceApi"); // Sesuaikan dengan lokasi berkas Anda
app.use(express.json());
// Menambahkan rute API ke aplikasi Express
app.use("/api", deviceApi); // Anda dapat menyesuaikan jalur (route) ini

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
