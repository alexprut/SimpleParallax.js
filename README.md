SimpleParallax.js
=================
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![MIT](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/alexprut/SimpleParallax.js/blob/master/LICENSE)  

> A Simple and light Parallax library   

Live demo: [http://alexprut.github.io/SimpleParallax.js](http://alexprut.github.io/SimpleParallax.js)

##  Installation
* __Bower__:  
    Run from your console/terminal ```bower install simpleparallax.js --save-dev```
* __From Source__:  
    Run ```git clone https://github.com/alexprut/SimpleParallax.js.git```
* __Direct download__:  
    Download the last version from [here](https://github.com/alexprut/SimpleParallax.js/archive/master.zip "download")

## Usage
```html
<link rel="stylesheet" href="css/simpleParallax.min.css">
<script src="js/simpleParallax.min.js"></script>

<div class="parallax-group"
    data-parallax-axis="both"
    data-parallax-scope="global"
    data-parallax-detect="mouseover">
    <div class="parallax-item" data-parallax-depth="35">
        example
    </div>
    <div class="parallax-item" data-parallax-depth="10">
        example
    </div>
</div>
```

For a complete example see [index.html](https://github.com/alexprut/SimpleParallax.js/blob/staging/index.html)

#### Parameters
|Data Attribute|Type|Description|Default|
|----|----|-----------|-------|
|```data-parallax-scope```|```global```||```global```|

## License
SimpleParallax.js is licensed under the MIT License – see the LICENSE file for details.
