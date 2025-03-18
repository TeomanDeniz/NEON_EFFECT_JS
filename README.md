# NEON IMAGE (JS)

<p align="center">
 <img src="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/NEON_EFFECT/PREVIEW.png">
</p>

NEON_IMAGE is a JavaScript project that applies a neon glow effect to images dynamically using SVG filters. It utilizes `GET_AVERAGE_COLOR.js` to determine the dominant color of an image and enhances it with a glowing neon effect.

## Features
- Applies a neon glow effect to images inside a `NEON_IMAGE` container.
- Dynamically calculates the average color of the image.
- Uses SVG filters for a smooth glowing effect.
- Lightweight and easy to integrate.

## Automatic glowing feature on dark images
If your image is too dark to glow, then the script gets the average color of your entire image, increases it's brightness and then makes the same effect on your image.

Here's an example:

<p align="center">
 <img src="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/NEON_EFFECT/PREVIEW3.png">
</p>

If you don't want from function to make this process: You can add `data-force-blur` attribute on your div element:

```html
<div class="NEON_IMAGE" data-force-blur>
 <img
  width="200px"
  crossorigin="anonymous"
  src="https://your-image-url.jpg"
  alt="Example Image"
 />
</div>
```

## Installation
Include the necessary CSS and JavaScript files in your HTML:

```html
<!-- Include necessary CSS -->
<link rel="stylesheet" href="NEON_IMAGE.css" />

<!-- Include required JavaScript files -->
<script type="text/javascript" src="GET_AVERAGE_COLOR.js"></script>
<script type="text/javascript" src="NEON_IMAGE.js"></script>
```

## Usage

1. Add the required SVG filters inside the `<body>`:

```html
<svg width="0" height="0">
 <defs>
  <filter id="NEON_BLUR_SMALL" x="-50%" y="-50%" width="200%" height="200%">
   <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur"/>
   <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0"/>
  </filter>
 </defs>
</svg>

<svg width="0" height="0">
 <defs>
  <filter id="NEON_BLUR_BIG" x="-100%" y="-100%" width="400%" height="400%">
   <feGaussianBlur in="SourceGraphic" stdDeviation="270" result="blur"/>
   <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 -0.1"/>
  </filter>
 </defs>
</svg>
```

2. Create a `DIV` element with the class `NEON_IMAGE` and place an `IMG` inside it:

```html
<div class="NEON_IMAGE">
 <img
  width="200px"
  crossorigin="anonymous"
  src="https://your-image-url.jpg"
  alt="Example Image"
 />
</div>
```

3. Initialize the effect by calling `NEON_IMAGE();` in a script:

```html
<script type="text/javascript">
	NEON_IMAGE();
</script>
```

## Example
Here’s a complete example of how to use NEON_IMAGE:

```html
<!DOCTYPE html>
<HTML LANG="en">
 <HEAD>
  <META CHARSET="UTF-8"/>
  <TITLE>NEON IMAGES</TITLE>
  <STYLE>
BODY
{
  BACKGROUND-COLOR: BLACK;
		TEXT-ALIGN: CENTER;
}

.NEON_IMAGE
{
	MARGIN: 50PX;
}
  </STYLE>
  <LINK REL="stylesheet" HREF="NEON_IMAGE.css"/>
 </HEAD>
 <BODY>
  <DIV CLASS="NEON_IMAGE">
   <IMG
	WIDTH="200PX"
	CROSSORIGIN="ANONYMOUS"
	SRC="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/NEON_EFFECT/EXAMPLE_1.jpg"
	ALT="1"
   />
  </DIV>
  <DIV CLASS="NEON_IMAGE">
   <IMG
	WIDTH="200PX"
	CROSSORIGIN="ANONYMOUS"
	SRC="https://raw.githubusercontent.com/TeomanDeniz/TeomanDeniz/refs/heads/main/images/repo_projects/NEON_EFFECT/EXAMPLE_2.jpeg"
	ALT="2"
   />
  </DIV>

<!-- ************************* [v] SVG ELEMENTS [v] ************************ -->
  <SVG WIDTH="0" HEIGHT="0">
   <defs>
	<filter ID="NEON_BLUR_SMALL" x="-50%" y="-50%" width="200%" height="200%">
	 <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur"/>
	 <feColorMatrix
	  in="blur"
	  type="matrix"
	  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0"
	 />
	</filter>
   </defs>
  </SVG>
  <SVG WIDTH="0" HEIGHT="0">
   <defs>
	<filter ID="NEON_BLUR_BIG" x="-100%" y="-100%" width="400%" height="400%">
	 <feGaussianBlur in="SourceGraphic" stdDeviation="270" result="blur"/>
	 <feColorMatrix
	  in="blur"
	  type="matrix"
	  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 -0.1"
	 />
	</filter>
   </defs>
  </SVG>
<!-- ************************* [^] SVG ELEMENTS [^] ************************ -->

<!-- *************************** [v] SCRIPTS [v] *************************** -->
  <SCRIPT TYPE="TEXT/JAVASCRIPT" SRC="GET_AVERAGE_COLOR.js"></SCRIPT>
  <SCRIPT TYPE="TEXT/JAVASCRIPT" SRC="NEON_IMAGE.js"></SCRIPT>
  <SCRIPT TYPE="TEXT/JAVASCRIPT">
NEON_IMAGE();
  </SCRIPT>
<!-- *************************** [^] SCRIPTS [^] *************************** -->
 </BODY>
</HTML>
```

## Requirements
- The `<img>` elements **must** include `crossorigin="anonymous"` to work properly.
- The `NEON_IMAGE` function should be called **after** the page has loaded.
- Ensure that the `SVG` filter elements are present in the HTML body.

## License
This project is open-source and available under the GPL-3.0 License.

