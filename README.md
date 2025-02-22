# Fast Food App - Front End Examination

This is an Ionic Vue application built for PRAXXYS It provides a front end and backend (simulated through Pinia State Management).

# Technologies Used

```sh
Vuejs - 3.3.0 - Front end Framework
Capacitor - 7.0.1 - Runtime
Ionic- 8.0.0 - Mobile Framework
Tailwind Css - 4.0.7 - Styling Library
Pinia- 3.0.1 - State Management
```

## Getting Started
To run the project, follow these steps

For immediate app testing, I included a production apk file located at:

```sh
root/prod/foodapp.apk
```

### Installation

Clone the repository:
```sh
git clone https://github.com/erwinmagno101/fast-food
```

Install all dependencies
```sh
cd fast-food
npm install
```



# Important Note! :
This app is develop and tested in __android__ platform and never been tested in __ios__ platform
if you intend to run and test it on web, you should test it using developer tools in the browser , do:
```sh
ctrl + shift + i then,
ctrl + shift + m
```
to enable device toolbar and select a device.

## Run on Web
```sh
ionic build
ionic serve
```

## Run on Moile Device (Connected via Usb with usb debugging enabled)
```sh
npx cap add android
npm run build
npx cap sync android
npx cap run android
```

And that's it, I hope you find this interesting. Good speed!!




