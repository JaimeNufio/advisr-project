# advisr

Vue.js / Express.js Project
- `axios` for Api calls
- `vue2-google-maps` for Google Maps integration
- `vue-bootstrap` as design framework 

## Images:
![Landing Page](https://github.com/JaimeNufio/advisr-project/blob/master/images/landingpage.png)
![Google API](https://github.com/JaimeNufio/advisr-project/blob/master/images/googleapi.png)
![Details](https://github.com/JaimeNufio/advisr-project/blob/master/images/details.png)
![Overview](https://github.com/JaimeNufio/advisr-project/blob/master/images/Overview.png)

## Setup Google Maps Key
Rename 'key-example.json' to 'key.json'
in the empty value for 'googlemaps' paste your api key. It should have the following permissions:

...

You can create your API keys here: https://console.cloud.google.com/home/dashboard?project=solid-scheme-334505

## Front-End Setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

## API Setup

run the following in a seperate terminal
```
node api/api.js
```

