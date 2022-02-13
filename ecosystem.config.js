module.exports = {
  apps: [
    {
      name: 'king-maker',
      script: 'npm',
      args: '-- start',
      instances: 'max',
      exec_mode: 'cluster',
      output: '/home/dsmd-user/log/front.log',
      error: '/home/dsmd-user/log/front-error.log',
    },
  ],
};
