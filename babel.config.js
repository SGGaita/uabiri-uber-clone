module.exports = (api)=>{
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ['react-native-dotenv', {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": ".env",
      "blocklist": null,
      "allowlist": null,
      "blacklist": null, // DEPRECATED
      "whitelist": null, // DEPRECATED
      "safe": false,
      "allowUndefined": true,
      "verbose": false
    }],
  }
  
};
