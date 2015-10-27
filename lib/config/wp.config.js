export default function(CONFIG, WpApiProvider) {
    'ngInject';
    WpApiProvider.setDefaultHttpProperties({
        timeout: CONFIG.api.timeout || 5000
    });
    WpApiProvider.setBaseUrl(CONFIG.api.baseUrl || null);
    WpApiProvider.setBasicCredentials(CONFIG.api.login, CONFIG.api.password);
}
