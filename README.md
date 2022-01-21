# 🚀 Npm-Pixel-Mosaic

<div>
  <img src="https://img.shields.io/github/languages/top/fengtianxi001/Npm-Pixel-Mosaic">
  <img src="https://travis-ci.org/boennemann/badges.svg?branch=master">
  <img src="https://img.shields.io/github/issues/fengtianxi001/Npm-Pixel-Mosaic">
  <img src="https://img.shields.io/github/forks/fengtianxi001/Npm-Pixel-Mosaic">
  <img src="https://img.shields.io/github/stars/fengtianxi001/Npm-Pixel-Mosaic">
</div>

<p  style="margin-top:30px">
	<img src="https://raw.githubusercontent.com/fengtianxi001/Npm-Pixel-Mosaic/master/screenshot/screenshot.png">
</p>



## 1. Installation
```shell
npm i pixel-mosaic
```

## 2. Loading
```javascript
import Mosaic from "pixel-mosaic"
```

## 3. Usage
```javascript
const mosaic = new Mosaic(options)
```
- options 
	- src \<string\>\<required\>
	  - The resource address of the image

	- nw\<number\>
	  - Pixelation degree of x-axis(Unit: percentage)
	  - The value should be less than 100
	  - default: 25

	- nh<number\>
	    - Pixelation degree of y-axis(Unit: percentage)
	  - The value should be less than 100
	  - default: 25


## 4. Example
```javascript
import Mosaic from "pixel-mosaic"
const src = require("./assets/123.png")
const mosaic = new Mosaic({
  src,
  nw: 3.15,
  nh: 3.15,
})
    document.body.appendChild(mosaic.canvas)
```




