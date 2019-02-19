const rollupConfig = require('kcd-scripts/config').getRollupConfig();

Object.assign(rollupConfig, {
  external: [
    'preact',
    'react',
    'prop-types',
    'date-fns/addDays',
    'date-fns/isBefore',
    'date-fns/isSameDay',
    'date-fns/startOfDay',
    'date-fns/differenceInCalendarMonths'
  ],
  output: [
    Object.assign(rollupConfig.output[0], {
      globals: {
        react: 'React',
        preact: 'preact',
        'prop-types': 'PropTypes',
        'date-fns/addDays': 'dateFns.addDays',
        'date-fns/isBefore': 'dateFns.isBefore',
        'date-fns/isSameDay': 'dateFns.isSameDay',
        'date-fns/startOfDay': 'dateFns.startOfDay',
        'date-fns/differenceInCalendarMonths':
          'dateFns.differenceInCalendarMonths'
      }
    })
  ]
});

module.exports = rollupConfig;
