# 🚀 Npm-Pixel-Character

<div>
  <img src="https://img.shields.io/github/languages/top/fengtianxi001/Npm-Pixel-Character">
  <img src="https://travis-ci.org/boennemann/badges.svg?branch=master">
  <img src="https://img.shields.io/github/issues/fengtianxi001/Npm-Pixel-Character">
  <img src="https://img.shields.io/github/forks/fengtianxi001/Npm-Pixel-Character">
  <img src="https://img.shields.io/github/stars/fengtianxi001/Npm-Pixel-Character">
</div>


## 1. Installation
```shell
npm i pixel-character
```

## 2. Loading
```javascript
import pixelCharacter from "pixel-character"
```

## 3. Usage
```javascript
const dots = pixelCharacter(character, row, column)
```
- character \<number\>\<string\>
  - The characters you need to convert
  - default: "F" 


- row\<number\>
  - The number of rows in the generated two-dimensional lattice array
  - The number must be greater than 12
  - default: 12

- column<number\>
    - The number of columns in the generated two-dimensional lattice array
    - The number must be greater than 12
    - default: 12


## 4. Example
```javascript
import pixelCharacter from "pixel-character"
const dots = pixelCharacter("A",12,12)
console.log(dots)
```

```javascript
/* console result */
//0 => blank
//1 => fill
[
	[0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
	[0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
	[0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
]
```

```javascript
const dots = pixelCharacter("哈",20,20)
```

```javascript
/* console result */
//0 => blank
//1 => fill
[
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
	[1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
	[1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
	[1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
	[1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	[1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
	[1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
	[1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
	[1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
	[1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
	[1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
]
```
