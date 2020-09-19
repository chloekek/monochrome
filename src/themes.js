const theme = require('./theme');

const amplifier = 1.75;

// Pre-defined monochrome themes.
const themes = [
  theme({
    name: 'monochrome-dark',
    background: '#101010',
    foreground: '#EBEBEB',
    amplifier: amplifier,
  }),
  theme({
    name: 'monochrome-light',
    background: '#EBEBEB',
    foreground: '#101010',
    amplifier: amplifier,
  }),
  theme({
    name: 'monochrome-dark-subtle',
    background: '#0A1219',
    foreground: '#F1F5F9',
    amplifier: amplifier,
  }),
  theme({
    name: 'monochrome-light-subtle',
    background: '#F1F5F9',
    foreground: '#0A1219',
    amplifier: amplifier,
  }),
  theme({
    name: 'monochrome-dark-amplified',
    background: '#000000',
    foreground: '#FFFFFF',
    amplifier: amplifier,
  }),
  theme({
    name: 'monochrome-light-amplified',
    background: '#FFFFFF',
    foreground: '#000000',
    amplifier: amplifier,
  }),
];

module.exports = themes;
