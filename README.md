### Trinity Economics Demonstation Hybrid application

#### Based on some samples content from this http://code.tutsplus.com/tutorials/create-a-mobile-application-using-wordpress-ionic-and-angularjs--cms-24170

### Summary information
This demonstation code is based on using a hosted WordPress website running at http://trinityeconomics.x10host.com/ 
then enabling the new word press REST API https://wordpress.org/plugins/rest-api/ v2.0 with some basic authentication.
The hybrid codebase then uses webpack, ionic, angularJS and wp-api-angularjs to create a hybrid app and then query the 
content from the website

### Reference documentation
WordPress v2 REST API: http://v2.wp-api.org 
   Moving from WP v1 REST API to v2 API https://1fix.io/blog/2015/09/29/wp-api-v2-angularjs-theme/ 
WebPack https://webpack.github.io
v2 REST client for AngularJS https://github.com/shprink/wp-api-angularjs 
IOnic Framework http://ionicframework.com 
Cordova https://cordova.apache.org/docs/en/5.1.1/guide/overview/


### Install all dependencies

npm install

# Cordova
npm run installCordova
```

### Run

```
# Web
npm run devserver

# Android - install Android SDK first
npm run runAndroid

# iOS - Install XCode first
npm run runIosEmulator
npm run runIosDevice
```
