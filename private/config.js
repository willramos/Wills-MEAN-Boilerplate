var clientSettings = {


    dev : 
    {
        "environment" : "dev",
    },

    prod : 
    {
        "environment" : "prod",

    },

};

var serverSettings = {
    // dev : {
    //     mongo_uri : process.env.MONGOLAB_URI || 'mongo connection string',
    // },
    // prod : {
    //     mongo_uri : process.env.MONGOLAB_URI || 'mongo connection string',
    // }
};

exports.getClientSettings = function(){
    var envSettings = clientSettings[process.env.ENV];
    return envSettings ? envSettings : clientSettings.dev;
};

exports.getServerSettings = function(){
    var envSettings = serverSettings[process.env.ENV];
    var output = envSettings || serverSettings.stage;

    return output;
};
