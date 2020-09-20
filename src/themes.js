const theme = require('./theme');

const amplifier = 1.75;

const override = {
  colors: {
    // from One Dark Pro
    'gitDecoration.conflictingResourceForeground': '#FF0000',
    'gitDecoration.deletedResourceForeground': '#F27983',
    'gitDecoration.ignoredResourceForeground': '#484F5E',
    'gitDecoration.modifiedResourceForeground': '#77A8D9',
    'gitDecoration.submoduleResourceForeground': '#D4BFFF',
    'gitDecoration.untrackedResourceForeground': '#A6CC70',
  },
};

// Pre-defined monochrome themes.
const themes = [
  theme({
    name: 'monochrome-dark',
    background: '#101010',
    foreground: '#EBEBEB',
    amplifier: amplifier,
    override: override,
  }),
  theme({
    name: 'monochrome-light',
    background: '#EBEBEB',
    foreground: '#101010',
    amplifier: amplifier,
    override: override,
  }),
  theme({
    name: 'monochrome-dark-subtle',
    background: '#0A1219',
    foreground: '#F1F5F9',
    amplifier: amplifier,
    override: override,
  }),
  theme({
    name: 'monochrome-light-subtle',
    background: '#F1F5F9',
    foreground: '#0A1219',
    amplifier: amplifier,
    override: override,
  }),
  theme({
    name: 'monochrome-dark-amplified',
    background: '#000000',
    foreground: '#FFFFFF',
    amplifier: amplifier,
    override: override,
  }),
  theme({
    name: 'monochrome-light-amplified',
    background: '#FFFFFF',
    foreground: '#000000',
    amplifier: amplifier,
    override: override,
  }),
];

module.exports = themes;
