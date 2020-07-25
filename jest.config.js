module.exports = {
  moduleFileExtensions: ["js", "ts", "vue", "json"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest-amcharts",
    "^.+\\.ts$": "ts-jest",
    ".*\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  collectCoverage: false, // See package.json script
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,js,vue}",
    "!<rootDir>/src/**.stories.{ts.js}",
    "!<rootDir>/node_modules/",
  ],
  transformIgnorePatterns: ["node_modules/(?!(@amcharts/amcharts4))"],
  coverageReporters: ["text-summary"],
};
