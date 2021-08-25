const NodeGeocoder = require("node-geocoder");
require("dotenv/config");

const options = {
  provider: "mapquest",
  apiKey: process.env.API_KEY,
};

const geocoder = NodeGeocoder(options);

const res = async () => {
  console.log(
    await geocoder.reverse({
      lat: "25.162374028980715",
      lon: "55.314942627357155",
    })
  );
};
res();
