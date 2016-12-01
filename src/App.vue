<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style>
  div, p, dl, dd, h1, h2, h3, h4, h5, h6, a, b, u, em, input, textarea, button, select, form, section, label, span, td, li, nav, footer, body, ul, i { -webkit-box-sizing: border-box; -webkit-tap-highlight-color: rgba(0,0,0,0); padding: 0; margin: 0; }
	ul, li, ol { list-style: none; }
	a, img, button{-webkit-touch-callout:none; -webkit-user-select:none;}
	a:focus, a:active, a:hover, input, button, textarea { outline: none; }
	table { border-collapse: collapse; }
	body, td, input, textarea, option, select, button {font-family:"Roboto",helvetica,arial,"Microsoft YaHei","Heiti SC"; -webkit-text-size-adjust: none; }
	body{font-size:0.875em}
	em, i{font-style:normal;}
	p{-webkit-text-size-adjust: none !important;}
	body{background:#fff; color:#222;}
	a{text-decoration:none;}
	img{display:block}
	html, body { height: 100%; }
	.clearfix:after{content: ''; display: block; overflow: hidden; visibility: hidden; clear: both;}
</style>
