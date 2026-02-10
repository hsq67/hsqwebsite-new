// svgo.config.cjs
module.exports = {
  multipass: true,
  plugins: [
    { name: "preset-default" },

    // keep the viewBox (important for responsiveness)
    { name: "removeViewBox", active: false },

    // keep width/height flexible
    { name: "removeDimensions", active: true },

    // optional: simplify path data with 2 decimal precision
    {
      name: "cleanupNumericValues",
      params: { floatPrecision: 2 }
    }
  ]
};
