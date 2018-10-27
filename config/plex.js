module.exports = {
  'hostname'    : process.env.PLEX_LOCAL_IP,
  'port'        : process.env.PLEX_LOCAL_PORT,
  'https'       : true,
  'username'    : process.env.PLEX_USERNAME,
  'password'    : process.env.PLEX_PASSWORD,
  'options'     : {
    'identifier': process.env.PLEX_USERNAME + '-Discord-Bot',
    'product'   : 'Plex Discord Bot',
    'version'   : '1.0.0',
    'deviceName': 'Node.js App',
    'platform'  : 'Discord',
    'device'    : 'Discord'
  }
};
