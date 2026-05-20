const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'general-monitor_v2_4.html'));
});

app.listen(PORT, () => {
  console.log(`Market Monitor running on port ${PORT}`);
});
