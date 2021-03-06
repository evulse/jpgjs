[![Build Status](https://travis-ci.org/evulse/jpgjs.svg?branch=master)](https://travis-ci.org/evulse/jpgjs)

jpgjs
=====

Simple JPEG/DCT data decoder in JavaScript.

Example URL: http://notmasteryet.github.com/jpgjs/example.html


Quickstart
----------

Download the library ([jpg.js](/jpg.js)) and use a script to include it.

```html
<script type="text/javascript" src="/scripts/jpg.js"></script>
```


Usage
-----

```js
var jpeg = new JpegImage('j1.jpg');

jpeg.load(function (jpeg) {
  console.log(jpeg);
  // {
  //   data: Uint8ClampedArray == ImagaData
  //   width: number,
  //   height: number
  // }
});
```


API
---

```js
new JpegImage([src])
```
Define new instance with the image source.

```js
JpegImage.load([src], [onload])
```
Invoke the loading of the image and set up a handler
for retrieving the data.

```js
JpegImage.copyToImageData(imageData)
```
Directly transfer the image data into another image.
