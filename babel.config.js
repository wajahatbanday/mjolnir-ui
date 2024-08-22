module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "babel-plugin-styled-components",
      { ssr: true, displayName: true, preprocess: false },
    ],
  ],
};
