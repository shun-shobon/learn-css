module.exports = {
  plugins: [
    "stylelint-order",
    "stylelint-scss",
    "stylelint-prettier"
  ],
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
  ],
  rules: {
    "prettier/prettier": true,
  },
}
