import re

# Replace this with your actual HTML content
html_content = """

<!DOCTYPE html>
<html lang="en-US" class="stm-site-preloader">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="https://itstest.websinova.com/xmlrpc.php" />
	<title>Dashboard &#8211; Testing Website</title>
<meta name='robots' content='noindex, nofollow' />
<link rel='dns-prefetch' href='//js.hs-scripts.com' />
<link rel='dns-prefetch' href='//cdnjs.cloudflare.com' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel="alternate" type="application/rss+xml" title="Testing Website &raquo; Feed" href="https://itstest.websinova.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="Testing Website &raquo; Comments Feed" href="https://itstest.websinova.com/comments/feed/" />
<script type="text/javascript">
// Event Manager For Woocommerce  Ajax URL
    var ajaxurl = "https://itstest.websinova.com/wp-admin/admin-ajax.php";
</script>
<script type="text/javascript">
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/itstest.websinova.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.1.1"}};
/*! This file is auto-generated */
!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode,e=(p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0),i.toDataURL());return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(p&&p.fillText)switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([129777,127995,8205,129778,127999],[129777,127995,8203,129778,127999])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings);
</script>
<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 0.07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel='stylesheet' id='formidable-css' href='https://itstest.websinova.com/wp-admin/admin-ajax.php?action=frmpro_css&#038;ver=421216' type='text/css' media='all' />
<link rel='stylesheet' id='revslider-material-icons-css' href='https://itstest.websinova.com/wp-content/plugins/revslider/public/assets/fonts/material/material-icons.css?ver=6.5.19' type='text/css' media='all' />
<link rel='stylesheet' id='revslider-basics-css-css' href='https://itstest.websinova.com/wp-content/plugins/revslider/admin/assets/css/basics.css?ver=6.5.19' type='text/css' media='all' />
<link rel='stylesheet' id='rs-color-picker-css-css' href='https://itstest.websinova.com/wp-content/plugins/revslider/admin/assets/css/tp-color-picker.css?ver=6.5.19' type='text/css' media='all' />
<link rel='stylesheet' id='revbuilder-ddTP-css' href='https://itstest.websinova.com/wp-content/plugins/revslider/admin/assets/css/ddTP.css?ver=6.5.19' type='text/css' media='all' />
<link rel='stylesheet' id='rs-roboto-css' href='//fonts.googleapis.com/css?family=Roboto&#038;ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='tp-material-icons-css' href='//fonts.googleapis.com/icon?family=Material+Icons&#038;ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='dashicons-css' href='https://itstest.websinova.com/wp-includes/css/dashicons.min.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='admin-bar-css' href='https://itstest.websinova.com/wp-includes/css/admin-bar.min.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='frm_fonts-css' href='https://itstest.websinova.com/wp-content/plugins/formidable/css/frm_fonts.css?ver=5.5.3.1' type='text/css' media='all' />
<link rel='stylesheet' id='sbi_styles-css' href='https://itstest.websinova.com/wp-content/plugins/instagram-feed/css/sbi-styles.min.css?ver=6.1.3' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-icons-css' href='https://itstest.websinova.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.18.0' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-common-css' href='https://itstest.websinova.com/wp-content/plugins/elementor/assets/css/common.min.css?ver=3.11.5' type='text/css' media='all' />
<link rel='stylesheet' id='wp-block-library-css' href='https://itstest.websinova.com/wp-includes/css/dist/block-library/style.min.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='wc-blocks-vendors-style-css' href='https://itstest.websinova.com/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-vendors-style.css?ver=9.6.6' type='text/css' media='all' />
<link rel='stylesheet' id='wc-blocks-style-css' href='https://itstest.websinova.com/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-style.css?ver=9.6.6' type='text/css' media='all' />
<style id='joinchat-button-style-inline-css' type='text/css'>
.wp-block-joinchat-button{border:none!important;text-align:center}.wp-block-joinchat-button figure{display:table;margin:0 auto;padding:0}.wp-block-joinchat-button figcaption{font:normal normal 400 .6em/2em var(--wp--preset--font-family--system-font,sans-serif);margin:0;padding:0}.wp-block-joinchat-button .joinchat-button__qr{background-color:#fff;border:6px solid #25d366;border-radius:30px;box-sizing:content-box;display:block;height:200px;margin:auto;overflow:hidden;padding:10px;width:200px}.wp-block-joinchat-button .joinchat-button__qr canvas,.wp-block-joinchat-button .joinchat-button__qr img{display:block;margin:auto}.wp-block-joinchat-button .joinchat-button__link{align-items:center;background-color:#25d366;border:6px solid #25d366;border-radius:30px;display:inline-flex;flex-flow:row nowrap;justify-content:center;line-height:1.25em;margin:0 auto;text-decoration:none}.wp-block-joinchat-button .joinchat-button__link:before{background:transparent var(--joinchat-ico) no-repeat center;background-size:100%;content:"";display:block;height:1.5em;margin:-.75em .75em -.75em 0;width:1.5em}.wp-block-joinchat-button figure+.joinchat-button__link{margin-top:10px}@media (orientation:landscape)and (min-height:481px),(orientation:portrait)and (min-width:481px){.wp-block-joinchat-button.joinchat-button--qr-only figure+.joinchat-button__link{display:none}}@media (max-width:480px),(orientation:landscape)and (max-height:480px){.wp-block-joinchat-button figure{display:none}}

</style>
<link rel='stylesheet' id='embedpress_blocks-cgb-style-css-css' href='https://itstest.websinova.com/wp-content/plugins/embedpress/Gutenberg/dist/blocks.style.build.css?ver=1680238936' type='text/css' media='all' />
<link rel='stylesheet' id='classic-theme-styles-css' href='https://itstest.websinova.com/wp-includes/css/classic-themes.min.css?ver=1' type='text/css' media='all' />
<style id='global-styles-inline-css' type='text/css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;}:where(.is-layout-flex){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='betterdocs-el-edit-css' href='https://itstest.websinova.com/wp-content/plugins/betterdocs/admin/assets/css/betterdocs-el-edit.css?ver=2.3.6' type='text/css' media='all' />
<link rel='stylesheet' id='betterdocs-css' href='https://itstest.websinova.com/wp-content/plugins/betterdocs/public/css/betterdocs-public.css?ver=2.3.6' type='text/css' media='all' />
<link rel='stylesheet' id='simplebar-css' href='https://itstest.websinova.com/wp-content/plugins/betterdocs/public/css/simplebar.css?ver=2.3.6' type='text/css' media='all' />
<link rel='stylesheet' id='slick-style-css' href='https://itstest.websinova.com/wp-content/plugins/blog-designer-pack/assets/css/slick.css?ver=3.3' type='text/css' media='all' />
<link rel='stylesheet' id='bdp-public-style-css' href='https://itstest.websinova.com/wp-content/plugins/blog-designer-pack/assets/css/bdp-public.css?ver=3.3' type='text/css' media='all' />
<link rel='stylesheet' id='contact-form-7-css' href='https://itstest.websinova.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.7.5.1' type='text/css' media='all' />
<link rel='stylesheet' id='stm-stm-css' href='http://itstest.websinova.com/wp-content/uploads/stm_fonts/stm/stm.css?ver=1.0' type='text/css' media='all' />
<link rel='stylesheet' id='embedpress-css' href='https://itstest.websinova.com/wp-content/plugins/embedpress/assets/css/embedpress.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='stm_zoom_main-css' href='https://itstest.websinova.com/wp-content/plugins/eroom-zoom-meetings-webinar/assets/css/frontend/main.css?ver=1.4.6' type='text/css' media='all' />
<link rel='stylesheet' id='pmpro_frontend-css' href='https://itstest.websinova.com/wp-content/plugins/paid-memberships-pro/css/frontend.css?ver=2.10.3' type='text/css' media='screen' />
<link rel='stylesheet' id='pmpro_print-css' href='https://itstest.websinova.com/wp-content/plugins/paid-memberships-pro/css/print.css?ver=2.10.3' type='text/css' media='print' />
<link rel='stylesheet' id='tp_twitter_plugin_css-css' href='https://itstest.websinova.com/wp-content/plugins/recent-tweets-widget/tp_twitter_plugin.css?ver=1.0' type='text/css' media='screen' />
<link rel='stylesheet' id='tutor-icon-css' href='https://itstest.websinova.com/wp-content/plugins/tutor/assets/css/tutor-icon.min.css?ver=2.1.8' type='text/css' media='all' />
<link rel='stylesheet' id='tutor-css' href='https://itstest.websinova.com/wp-content/plugins/tutor/assets/css/tutor.min.css?ver=2.1.8' type='text/css' media='all' />
<link rel='stylesheet' id='buttons-css' href='https://itstest.websinova.com/wp-includes/css/buttons.min.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='mediaelement-css' href='https://itstest.websinova.com/wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css?ver=4.2.17' type='text/css' media='all' />
<link rel='stylesheet' id='wp-mediaelement-css' href='https://itstest.websinova.com/wp-includes/js/mediaelement/wp-mediaelement.min.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='media-views-css' href='https://itstest.websinova.com/wp-includes/css/media-views.min.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='imgareaselect-css' href='https://itstest.websinova.com/wp-includes/js/imgareaselect/imgareaselect.css?ver=0.9.8' type='text/css' media='all' />
<link rel='stylesheet' id='tutor-frontend-css' href='https://itstest.websinova.com/wp-content/plugins/tutor/assets/css/tutor-front.min.css?ver=2.1.8' type='text/css' media='all' />
<style id='tutor-frontend-inline-css' type='text/css'>
.mce-notification.mce-notification-error{display: none !important;}
:root{--tutor-color-primary:#d0001d;--tutor-color-primary-rgb:208, 0, 29;--tutor-color-primary-hover:#d0001d;--tutor-color-primary-hover-rgb:208, 0, 29;--tutor-body-color:#212327;--tutor-body-color-rgb:33, 35, 39;--tutor-border-color:#cdcfd5;--tutor-border-color-rgb:205, 207, 213;--tutor-color-gray:#e3e5eb;--tutor-color-gray-rgb:227, 229, 235;}
</style>
<link rel='stylesheet' id='tutor-frontend-dashboard-css-css' href='https://itstest.websinova.com/wp-content/plugins/tutor/assets/css/tutor-frontend-dashboard.min.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='woocommerce-layout-css' href='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=7.5.1' type='text/css' media='all' />
<link rel='stylesheet' id='woocommerce-smallscreen-css' href='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=7.5.1' type='text/css' media='only screen and (max-width: 768px)' />
<link rel='stylesheet' id='woocommerce-general-css' href='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/css/woocommerce.css?ver=7.5.1' type='text/css' media='all' />
<style id='woocommerce-inline-inline-css' type='text/css'>
.woocommerce form .form-row .required { visibility: visible; }
</style>
<link rel='stylesheet' id='wpsbc-style-css' href='https://itstest.websinova.com/wp-content/plugins/wp-simple-booking-calendar/assets/css/style-front-end.min.css?ver=2.0.8.3' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-min-css' href='https://itstest.websinova.com/wp-content/plugins/eroom-zoom-meetings-webinar/nuxy/metaboxes/assets/vendors/font-awesome.min.css?ver=1680853964' type='text/css' media='all' />
<link rel='stylesheet' id='hfe-style-css' href='https://itstest.websinova.com/wp-content/plugins/header-footer-elementor/assets/css/header-footer-elementor.css?ver=1.6.13' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-frontend-css' href='https://itstest.websinova.com/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.11.5' type='text/css' media='all' />
<link rel='stylesheet' id='swiper-css' href='https://itstest.websinova.com/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-post-219-css' href='https://itstest.websinova.com/wp-content/uploads/elementor/css/post-219.css?ver=1680496088' type='text/css' media='all' />
<link rel='stylesheet' id='embedpress-elementor-css-css' href='https://itstest.websinova.com/wp-content/plugins/embedpress/assets/css/embedpress-elementor.css?ver=3.6.8' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-pro-css' href='https://itstest.websinova.com/wp-content/plugins/elementor-pro/assets/css/frontend-lite.min.css?ver=3.11.4' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-5-all-css' href='https://itstest.websinova.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=4.9.53' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-4-shim-css' href='https://itstest.websinova.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=3.11.5' type='text/css' media='all' />
<link rel='stylesheet' id='she-header-style-css' href='https://itstest.websinova.com/wp-content/plugins/sticky-header-effects-for-elementor/assets/css/she-header-style.css?ver=1.6.5' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-post-17971-css' href='https://itstest.websinova.com/wp-content/uploads/elementor/css/post-17971.css?ver=1680520589' type='text/css' media='all' />
<link rel='stylesheet' id='hfe-widgets-style-css' href='https://itstest.websinova.com/wp-content/plugins/header-footer-elementor/inc/widgets-css/frontend.css?ver=1.6.13' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-post-13168-css' href='https://itstest.websinova.com/wp-content/uploads/elementor/css/post-13168.css?ver=1680786788' type='text/css' media='all' />
<link rel='stylesheet' id='pa-admin-css' href='https://itstest.websinova.com/wp-content/plugins/premium-addons-for-elementor/admin/assets/css/admin.css?ver=4.9.53' type='text/css' media='all' />
<link rel='stylesheet' id='bootstrap-css' href='https://itstest.websinova.com/wp-content/themes/consulting/assets/css/bootstrap.min.css?ver=6.2.9' type='text/css' media='all' />
<link rel='stylesheet' id='vc_font_awesome_5_shims-css' href='https://itstest.websinova.com/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/v4-shims.min.css?ver=6.9.0' type='text/css' media='all' />
<style id='vc_font_awesome_5_shims-inline-css' type='text/css'>
body #wrapper .fa.fa-facebook{font-family:'Font Awesome 5 Brands' !important;}
</style>
<link rel='stylesheet' id='vc_font_awesome_5-css' href='https://itstest.websinova.com/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/all.min.css?ver=6.9.0' type='text/css' media='all' />
<style id='vc_font_awesome_5-inline-css' type='text/css'>
body #wrapper .fa.fa-map-marker{font-family:'FontAwesome' !important;} body .fa.fa-map-marker:before{content:"\f041"}
</style>
<link rel='stylesheet' id='font-awesome-css' href='https://itstest.websinova.com/wp-content/themes/consulting/assets/css/font-awesome.min.css?ver=6.2.9' type='text/css' media='all' />
<link rel='stylesheet' id='consulting-style-css' href='https://itstest.websinova.com/wp-content/themes/consulting/style.css?ver=6.2.9' type='text/css' media='all' />
<link rel='stylesheet' id='consulting-layout-css' href='https://itstest.websinova.com/wp-content/themes/consulting/assets/css/layouts/layout_atlanta/main.css?ver=6.2.9' type='text/css' media='all' />
<style id='consulting-layout-inline-css' type='text/css'>
.page_title{ color: rgba(209,52,52,1) !important; color: url(http://r) !important; background-repeat: no-repeat !important; background-repeat: url(http://n) !important; }body .page_title h1:after{
				background: rgba(75,181,85,1);
			}.mtc, .mtc_h:hover{
					color: #002e5b!important
				}.stc, .stc_h:hover{
					color: #4a57fe!important
				}.ttc, .ttc_h:hover{
					color: #ffd61f!important
				}.mbc, .mbc_h:hover, .stm-search .stm_widget_search button{
					background-color: #002e5b!important
				}.sbc, .sbc_h:hover{
					background-color: #4a57fe!important
				}.tbc, .tbc_h:hover{
					background-color: #ffd61f!important
				}.mbdc, .mbdc_h:hover{
					border-color: #002e5b!important
				}.sbdc, .sbdc_h:hover{
					border-color: #4a57fe!important
				}.tbdc, .tbdc_h:hover{
					border-color: #ffd61f!important
				}
</style>
<link rel='stylesheet' id='select2-css' href='https://itstest.websinova.com/wp-content/themes/consulting/assets/css/select2.min.css?ver=6.2.9' type='text/css' media='all' />
<link rel='stylesheet' id='header_builder-css' href='https://itstest.websinova.com/wp-content/themes/consulting/assets/css/header_builder.css?ver=6.2.9' type='text/css' media='all' />
<link rel='stylesheet' id='consulting-default-font-css' href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C700%2C700italic%2C900%2C900italic&#038;ver=6.2.9' type='text/css' media='all' />
<link rel='stylesheet' id='stm-skin-custom-generated-css' href='http://itstest.websinova.com/wp-content/uploads/stm_uploads/skin-custom.css?ver=6126' type='text/css' media='all' />
<link rel='stylesheet' id='consulting-theme-options-css' href='http://itstest.websinova.com/wp-content/uploads/stm_uploads/theme_options.css?ver=6.2.9' type='text/css' media='all' />
<link rel='stylesheet' id='consulting-global-styles-css' href='https://itstest.websinova.com/wp-content/themes/consulting/assets/css/layouts/global_styles/main.css?ver=6.2.9' type='text/css' media='all' />
<style id='consulting-global-styles-inline-css' type='text/css'>

    
        .elementor-widget-video .eicon-play {
            border-color: #D0001D;
            background-color: #D0001D;
        }

        .elementor-widget-wp-widget-nav_menu ul li,
        .elementor-widget-wp-widget-nav_menu ul li a {
            color: rgba(9,9,9,1);
        }

        .elementor-widget-wp-widget-nav_menu ul li.current-cat:hover>a,
        .elementor-widget-wp-widget-nav_menu ul li.current-cat>a,
        .elementor-widget-wp-widget-nav_menu ul li.current-menu-item:hover>a,
        .elementor-widget-wp-widget-nav_menu ul li.current-menu-item>a,
        .elementor-widget-wp-widget-nav_menu ul li.current_page_item:hover>a,
        .elementor-widget-wp-widget-nav_menu ul li.current_page_item>a,
        .elementor-widget-wp-widget-nav_menu ul li:hover>a {
            border-left-color: rgba(13,13,13,1);
        }

        div.elementor-widget-button a.elementor-button,
        div.elementor-widget-button .elementor-button {
            background-color: rgba(9,9,9,1);
        }

        div.elementor-widget-button a.elementor-button:hover,
        div.elementor-widget-button .elementor-button:hover {
            background-color: #D0001D;
            color: rgba(9,9,9,1);
        }

        .elementor-default .elementor-text-editor ul:not(.elementor-editor-element-settings) li:before,
        .elementor-default .elementor-widget-text-editor ul:not(.elementor-editor-element-settings) li:before {
            color: rgba(13,13,13,1);
        }

        .consulting_elementor_wrapper .elementor-tabs .elementor-tabs-content-wrapper .elementor-tab-mobile-title,
        .consulting_elementor_wrapper .elementor-tabs .elementor-tabs-wrapper .elementor-tab-title {
            background-color: #D0001D;
        }

        .consulting_elementor_wrapper .elementor-tabs .elementor-tabs-content-wrapper .elementor-tab-mobile-title,
        .consulting_elementor_wrapper .elementor-tabs .elementor-tabs-wrapper .elementor-tab-title a {
            color: rgba(9,9,9,1);
        }

        .consulting_elementor_wrapper .elementor-tabs .elementor-tabs-content-wrapper .elementor-tab-mobile-title.elementor-active,
        .consulting_elementor_wrapper .elementor-tabs .elementor-tabs-wrapper .elementor-tab-title.elementor-active {
            background-color: rgba(9,9,9,1);
        }

        .consulting_elementor_wrapper .elementor-tabs .elementor-tabs-content-wrapper .elementor-tab-mobile-title.elementor-active,
        .consulting_elementor_wrapper .elementor-tabs .elementor-tabs-wrapper .elementor-tab-title.elementor-active a {
            color: #D0001D;
        }

        .radial-progress .circle .mask .fill {
            background-color: #D0001D;
        }

        html body #header .top_bar {
            background-color: rgba(9,9,9,1);
        }
        html body #header .top_bar .container .lang_sel>ul>li .lang_sel_sel,
        html body #header .top_bar .container .lang_sel>ul>li>ul a {
            color: #ffffff;
        }
        html body #header .top_bar .container .lang_sel>ul>li .lang_sel_sel:after {
            border-top: 5px solid #ffffff;
        }
        html body #header .top_bar .container .lang_sel>ul>li>ul {
            background-color: rgba(9,9,9,1);
        }
        html body #header .top_bar .container .lang_sel>ul>li>ul a:hover {
            background-color: rgba(13,13,13,1);
        }
        html body #header .top_bar .container .top_bar_cart .count {
            background-color: ;
        }
        html body #header .top_bar .container .top_bar_cart a {
            color: ;
        }
        html body #header .top_bar .container .top_bar_search .search-icon {
            color: ;
        }
        html body #header .top_bar .container .top_bar_socials a {
            color: ;
        }
        html body #header .top_bar .container .top_bar_socials a:hover {
            color: ;
        }
        html body #header .top_bar .container .top_bar_info_wr .top_bar_info li,
        html body #header .top_bar .container .top_bar_info_wr .top_bar_info_switcher ul li a {
            color: #ffffff;
        }
        html body #header .top_bar .container .top_bar_info_wr .top_bar_info_switcher {
            background-color: #D0001D;
        }
        html body #header .top_bar .container .top_bar_info_wr .top_bar_info_switcher .active:after {
            border-top: 5px solid rgba(9,9,9,1);
        }
        html body #header .top_bar .container .top_bar_info_wr .top_bar_info_switcher ul {
            background-color: rgba(9,9,9,1);
        }
        html body #header .top_bar .container .top_bar_info_wr .top_bar_info_switcher ul li a:hover {
            background-color: rgba(13,13,13,1);
        }

    

    
</style>
<link rel='stylesheet' id='stm_megamenu-css' href='https://itstest.websinova.com/wp-content/themes/consulting/inc/megamenu/assets/css/megamenu.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='dflip-icons-style-css' href='https://itstest.websinova.com/wp-content/plugins/3d-flipbook-dflip-lite/assets/css/themify-icons.min.css?ver=1.7.35' type='text/css' media='all' />
<link rel='stylesheet' id='dflip-style-css' href='https://itstest.websinova.com/wp-content/plugins/3d-flipbook-dflip-lite/assets/css/dflip.min.css?ver=1.7.35' type='text/css' media='all' />
<link rel='stylesheet' id='litespeed-cache-css' href='https://itstest.websinova.com/wp-content/plugins/litespeed-cache/assets/css/litespeed.css?ver=5.3.3' type='text/css' media='all' />
<link rel='stylesheet' id='wpforms-admin-bar-css' href='https://itstest.websinova.com/wp-content/plugins/wpforms-lite/assets/css/admin-bar.min.css?ver=1.8.1.1' type='text/css' media='all' />
<style id='wpforms-admin-bar-inline-css' type='text/css'>
#wpadminbar .wpforms-menu-notification-counter, #wpadminbar .wpforms-menu-notification-indicator { 
						background-color: #d63638 !important;
						color: #ffffff !important; 
					}
</style>
<link rel='stylesheet' id='mep-jquery-ui-style-css' href='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/css/jquery-ui.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='mep-event-style-css' href='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/css/style.css?ver=1680853964' type='text/css' media='all' />
<link rel='stylesheet' id='filter_pagination-css' href='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/css/filter_pagination.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='mep-event-timeline-min-style-css' href='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/css/timeline.min.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-css-cdn-css' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css?ver=1' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-css-cdn-5.2.0-css' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.2.0/css/all.min.css?ver=1' type='text/css' media='all' />
<link rel='stylesheet' id='mep-calendar-min-style-css' href='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/css/calendar.min.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='flaticon-css' href='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/fonts/flaticon/flaticon.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='mep-event-owl-carousal-main-style-css' href='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/css/owl.carousel.min.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='mep-event-owl-carousal-default-style-css' href='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/css/owl.theme.default.min.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='eael-general-css' href='https://itstest.websinova.com/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/css/view/general.min.css?ver=5.6.4' type='text/css' media='all' />
<link rel='stylesheet' id='slick-css-css' href='https://itstest.websinova.com/wp-content/plugins/tutor-lms-elementor-addons/assets/css/slick.min.css?ver=2.0.6' type='text/css' media='all' />
<link rel='stylesheet' id='slick-theme-css-css' href='https://itstest.websinova.com/wp-content/plugins/tutor-lms-elementor-addons/assets/css/slick-theme.css?ver=2.0.6' type='text/css' media='all' />
<link rel='stylesheet' id='tutor-elementor-css-css' href='https://itstest.websinova.com/wp-content/plugins/tutor-lms-elementor-addons/assets/css/tutor-elementor.min.css?ver=2.0.6' type='text/css' media='all' />
<link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-icons-shared-0-css' href='https://itstest.websinova.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-icons-fa-solid-css' href='https://itstest.websinova.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3' type='text/css' media='all' />
<link rel='stylesheet' id='elementor-icons-fa-brands-css' href='https://itstest.websinova.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3' type='text/css' media='all' />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin><script type='text/javascript' id='jquery-core-js-extra'>
/* <![CDATA[ */
var mep_ajax = {"mep_ajaxurl":"https:\/\/itstest.websinova.com\/wp-admin\/admin-ajax.php"};
var xlwcty = {"ajax_url":"https:\/\/itstest.websinova.com\/wp-admin\/admin-ajax.php","version":"2.16.0","wc_version":"7.5.1"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.1' id='jquery-core-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/embedpress/assets/js/pdfobject.min.js?ver=3.6.8' id='embedpress-pdfobject-js'></script>
<script type='text/javascript' id='utils-js-extra'>
/* <![CDATA[ */
var userSettings = {"url":"\/","uid":"2","time":"1680853963","secure":"1"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/utils.min.js?ver=6.1.1' id='utils-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/plupload/moxie.min.js?ver=1.3.5' id='moxiejs-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/plupload/plupload.min.js?ver=2.1.9' id='plupload-js'></script>
<!--[if lt IE 8]>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/json2.min.js?ver=2015-05-03' id='json2-js'></script>
<![endif]-->
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/lib/font-awesome/js/v4-shims.min.js?ver=3.11.5' id='font-awesome-4-shim-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/themes/consulting/inc/megamenu/assets/js/megamenu.js?ver=6.1.1' id='stm_megamenu-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/sticky-header-effects-for-elementor/assets/js/she-header.js?ver=1.6.5' id='she-header-js'></script>
<script type='text/javascript' id='elementor-pro-app-js-before'>
var elementorAppProConfig = {"baseUrl":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/elementor-pro\/","site-editor":{"urls":{"legacy_view":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?post_type=elementor_library&tabs_group=theme"},"utms":{"utm_source":"theme-builder","utm_medium":"wp-dash"}},"kit-library":[],"onboarding":[],"import-export":[]};
</script>
<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js?ver=1' id='mep-moment-js-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/js/calendar.min.js?ver=1' id='mep-calendar-scripts-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/tutor-lms-elementor-addons/assets/js/slick.min.js?ver=2.0.6' id='etlms-slick-library-js'></script>
<script type='text/javascript' id='tutor-elementor-js-js-before'>
const etlmsUtility = {"is_editor_mode":false}
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/tutor-lms-elementor-addons/assets/js/tutor-elementor.js?ver=2.0.6' id='tutor-elementor-js-js'></script>
<link rel="https://api.w.org/" href="https://itstest.websinova.com/wp-json/" /><link rel="alternate" type="application/json" href="https://itstest.websinova.com/wp-json/wp/v2/pages/16045" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://itstest.websinova.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://itstest.websinova.com/wp-includes/wlwmanifest.xml" />
<meta name="generator" content="WordPress 6.1.1" />
<meta name="generator" content="TutorLMS 2.1.8" />
<meta name="generator" content="WooCommerce 7.5.1" />
<link rel="canonical" href="https://itstest.websinova.com/dashboard/" />
<link rel='shortlink' href='https://itstest.websinova.com/?p=16045' />
<link rel="alternate" type="application/json+oembed" href="https://itstest.websinova.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fitstest.websinova.com%2Fdashboard%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://itstest.websinova.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fitstest.websinova.com%2Fdashboard%2F&#038;format=xml" />
	<style>
		.betterdocs-wraper.betterdocs-main-wraper {
						background-color: #ffffff;		
																				}
		.betterdocs-archive-wrap.betterdocs-archive-main {
			padding-top: 50px;
			padding-bottom: 50px;
			padding-left: 0px;
			padding-right: 0px;
		}
		.betterdocs-archive-wrap.betterdocs-archive-main {
			width: 100%;
			max-width: 1600px;
		}
		.betterdocs-categories-wrap.single-kb.layout-masonry .docs-single-cat-wrap {
			margin-bottom: 15px;
		}
		.betterdocs-categories-wrap.single-kb.layout-flex .docs-single-cat-wrap {
			margin: 15px; 
		}
		.betterdocs-categories-wrap.single-kb .docs-single-cat-wrap .docs-cat-title-wrap { 
			padding-top: 20px; 
		}

		.betterdocs-categories-wrap.single-kb .docs-single-cat-wrap .docs-cat-title-wrap, 
		.betterdocs-archive-main .docs-item-container { 
			padding-right: 20px;
			padding-left: 20px;  
		}
		.betterdocs-archive-main .docs-item-container { 
			padding-bottom: 20px; 
		}
		.betterdocs-categories-wrap.betterdocs-category-box.layout-2.single-kb .docs-single-cat-wrap,
		.betterdocs-categories-wrap.single-kb .docs-single-cat-wrap.docs-cat-list-2-box {
			padding-top: 20px; 
			padding-right: 20px;
			padding-left: 20px; 
			padding-bottom: 20px; 
		}
        		.betterdocs-categories-wrap.betterdocs-category-box .docs-single-cat-wrap p{
						color: #566e8b;
					}
		.betterdocs-categories-wrap.single-kb .docs-single-cat-wrap,
		.betterdocs-categories-wrap.single-kb .docs-single-cat-wrap .docs-cat-title-wrap {
						border-top-left-radius: 5px;
									border-top-right-radius: 5px;
					}
		.betterdocs-categories-wrap.single-kb .docs-single-cat-wrap,
		.betterdocs-categories-wrap.single-kb .docs-single-cat-wrap .docs-item-container {
						border-bottom-right-radius: 5px;
									border-bottom-left-radius: 5px;
					}
		.betterdocs-category-list .betterdocs-categories-wrap .docs-single-cat-wrap,
		.betterdocs-category-box.white-bg .docs-single-cat-wrap,
		.betterdocs-categories-wrap.white-bg .docs-single-cat-wrap {
						background-color: #fff;
					}
		.betterdocs-category-box.single-kb.ash-bg .docs-single-cat-wrap {
						background-color: #f8f8fc;
					}
		.betterdocs-category-box.single-kb .docs-single-cat-wrap:hover,
		.betterdocs-categories-wrap.single-kb.white-bg .docs-single-cat-wrap.docs-cat-list-2-box:hover {
						background-color: #fff;
					}
		.betterdocs-category-box.single-kb .docs-single-cat-wrap img {
						margin-bottom: 20px;
					}
		.betterdocs-category-box.single-kb .docs-single-cat-wrap .docs-cat-title,
		.pro-layout-4.single-kb .docs-cat-list-2-box-content .docs-cat-title {
						margin-bottom: 15px;
					}
		.betterdocs-category-box.single-kb .docs-single-cat-wrap p {
						margin-bottom: 15px;
					}
		.betterdocs-category-box.single-kb .docs-single-cat-wrap span {
					}
		.docs-cat-title img {
			height: 32px; 
		}
		.betterdocs-category-box.single-kb .docs-single-cat-wrap img { 
			height: 80px; 
		}
		.single-kb .docs-cat-title-inner .docs-cat-heading,
		.betterdocs-category-box.single-kb .docs-single-cat-wrap .docs-cat-title,
		.single-kb .docs-cat-list-2-box .docs-cat-title,
		.single-kb .docs-cat-list-2-items .docs-cat-title{
			font-size: 20px;
		}
        .single-kb .docs-cat-title-inner .docs-cat-heading {
			color: #528ffe; 
		}
		.betterdocs-category-box.single-kb .docs-single-cat-wrap .docs-cat-title,
		.single-kb .docs-cat-list-2 .docs-cat-title, 
		.betterdocs-category-grid-layout-6 .betterdocs-term-info .betterdocs-term-title {
			color: #333333;
		}
				.docs-cat-title-wrap .docs-cat-title-inner {
			border-color: #528ffe; 
			padding-bottom: 20px;
		}
		.docs-cat-title-inner .docs-item-count span {
			color: #ffffff; 
			font-size: 15px;
		}
		.betterdocs-category-box.single-kb .docs-single-cat-wrap span,
		.single-kb .docs-cat-list-2-box .title-count span {
			color: #707070; 
			font-size: 15px;
		}
		.betterdocs-categories-wrap.single-kb .docs-cat-title-wrap .docs-item-count span {
			font-size: 15px;
			color: #ffffff; 
		}

		.betterdocs-categories-wrap .docs-item-count {
			background-color: #528ffe; 
		}

		.betterdocs-categories-wrap.single-kb .docs-cat-title-inner span {
			background-color: rgba(82,143,254,0.44);
			border-color: #ffffff;
			border-style: none;
			width: 30px; 
			height: 30px;
			border-top-width: 0px;
			border-right-width: 0px;
			border-bottom-width: 0px;
			border-left-width: 0px;
		}
		.betterdocs-categories-wrap.single-kb .docs-item-container ul {
			background-color: rgba(255,255,255,0);
			padding-top: 0px;
			padding-bottom: 0px;
			padding-right: 0px;
			padding-left: 0px;
		}
		.betterdocs-categories-wrap.single-kb .docs-item-container {
			background-color: #ffffff;
		}
		.betterdocs-categories-wrap.single-kb .docs-item-container li,
		.betterdocs-categories-wrap.single-kb .docs-item-container .docs-sub-cat-title,
        .betterdocs-popular-list.single-kb ul li {
			margin-top: 10px;
			margin-right: 10px;
			margin-left: 10px;
		}
        .betterdocs-categories-wrap.single-kb .docs-item-container li,
        .betterdocs-popular-list.single-kb ul li {
            margin-bottom: 10px;
			padding-top: 0px;
			padding-right: 0px;
			padding-bottom: 0px;
			padding-left: 0px;
        }
		.betterdocs-categories-wrap.single-kb .docs-item-container li svg {
			fill: #566e8b;
			font-size: 15px;
            min-width: 15px;
		}
        .betterdocs-popular-list.single-kb ul li svg {
			font-size: 15px;
            min-width: 15px;
		}
        .betterdocs-popular-list.single-kb ul li svg path {
			fill: #566e8b;
		}
		.betterdocs-categories-wrap.single-kb li a,
        .betterdocs-popular-list.single-kb ul li a {
			color: #566e8b;
			font-size: 15px;
		}
				.betterdocs-categories-wrap.single-kb .docs-item-container .docs-sub-cat li a {
			color: #566e8b;
		}
						.betterdocs-categories-wrap.single-kb .docs-item-container .docs-sub-cat li a:hover {
			color: #566e8b;
		}
						.betterdocs-categories-wrap.single-kb .docs-item-container .docs-sub-cat li svg {
			fill: #566e8b;
		}
				.betterdocs-categories-wrap.single-kb li a:hover,
        .betterdocs-popular-list.single-kb ul li a:hover {
			color: #566e8b;
		}
		.betterdocs-categories-wrap.single-kb .docs-item-container .docs-sub-cat-title svg {
			fill: #566e8b;
			font-size: 15px;
		}
		.betterdocs-categories-wrap.single-kb .docs-sub-cat-title a {
			color: #566e8b;
			font-size: 17px;
		}
		.betterdocs-categories-wrap.single-kb .docs-sub-cat-title a:hover {
			color: #566e8b;
		}
		.betterdocs-categories-wrap.single-kb .docs-item-container .docs-cat-link-btn, .betterdocs-categories-wrap.single-kb .docs-item-container .docs-cat-link-btn:visited {
			background-color: #ffffff;
			font-size: 16px;
			color: #528ffe;
			border-color: #528ffe;
			border-top-left-radius: 50px;
			border-top-right-radius: 50px;
			border-bottom-right-radius: 50px;
			border-bottom-left-radius: 50px;
			padding-top: 10px;
			padding-right: 20px;
			padding-bottom: 10px;
			padding-left: 20px;
			border-width: 1px;
		}

		.betterdocs-categories-wrap.single-kb .docs-item-container .docs-cat-link-btn, .betterdocs-categories-wrap.multiple-kb .tabs-content .betterdocs-tab-content .betterdocs-tab-categories .docs-single-cat-wrap .docs-item-container .docs-cat-link-btn{
			border-width: 1px;
		}
		.betterdocs-categories-wrap.single-kb .docs-item-container .docs-cat-link-btn:hover {
			background-color: #528ffe;
			color: #fff;
			border-color: #528ffe;
		}
		.betterdocs-categories-wrap.single-kb .docs-single-cat-wrap .docs-item-container .docs-cat-link-btn {
			margin-top: 10px;
			margin-bottom: 10px;
			margin-left: 20px;
			margin-right: 20px;
		}
		.betterdocs-single-bg .betterdocs-content-area, .betterdocs-single-bg .betterdocs-content-full {
			background-color: rgba(255,255,255,0);	
				
														}
		.betterdocs-single-wraper .betterdocs-content-area {
			padding-top: 30px;
			padding-right: 25px;
			padding-bottom: 30px;
			padding-left: 25px;
			max-width: 1400px;
			width:100%;
		}
		.betterdocs-single-wraper .betterdocs-content-area .docs-single-main {
			padding-top: 20px;
			padding-right: 20px;
			padding-bottom: 20px;
			padding-left: 20px;
		}
		.betterdocs-single-layout4 .betterdocs-content-full {
			padding-top: 30px;
			padding-right: 25px;
			padding-bottom: 30px;
			padding-left: 25px;
		}
		.betterdocs-single-layout4 .betterdocs-content-full{
			background-color: rgba(255,255,255,0);	
				
														}
		.betterdocs-single-layout5 .betterdocs-content-full {
			padding-top: 30px;
			padding-right: 25px;
			padding-bottom: 30px;
			padding-left: 25px;
		}
		.betterdocs-single-layout5 .betterdocs-content-full {
			background-color: rgba(255,255,255,0);	
				
														}
		.betterdocs-single-layout2 .docs-content-full-main .doc-single-content-wrapper {
			padding-top: 0px;
			padding-right: 0px;
			padding-bottom: 0px;
			padding-left: 0px;
		}
		.betterdocs-single-layout3 .docs-content-full-main .doc-single-content-wrapper {
			padding-top: 0px;
			padding-right: 0px;
			padding-bottom: 0px;
			padding-left: 0px;
		}
		.docs-single-title .betterdocs-entry-title {
			font-size: 36px;
			color: #3f5876;
		}
		.betterdocs-breadcrumb .betterdocs-breadcrumb-item a {
			font-size: 16px;
			color: #566e8b;
		}
		.betterdocs-breadcrumb .betterdocs-breadcrumb-list .betterdocs-breadcrumb-item a:hover {
			color: #566e8b;
		}
		.betterdocs-breadcrumb .breadcrumb-delimiter {
			color: #566e8b;
		}
		.betterdocs-breadcrumb-item.current span {
			font-size: 16px;
			color: #528fff;
		}
		.betterdocs-toc {
			background-color: #fff;
			padding-top: 20px;
			padding-right: 25px;
			padding-bottom: 20px;
			padding-left: 20px;
			margin-top: 0px;
			margin-right: 0px;
			margin-bottom: 0px;
			margin-left: 0px;
		}
		.betterdocs-entry-content .betterdocs-toc {
			margin-bottom: 20px;
		}
		.sticky-toc-container {
			width: 320px;
		}
		.sticky-toc-container.toc-sticky {
			z-index: 2;
			margin-top: 0px;
		}
		.betterdocs-toc > .toc-title {
			color: #3f5876;
			font-size: 18px;
		}
		.betterdocs-entry-content .betterdocs-toc.collapsible-sm .angle-icon {
			color: #3f5876;
		}
		.betterdocs-toc > .toc-list a {
			color: #566e8b;
			font-size: 14px;
			margin-top: 5px;
			margin-right: 0px;
			margin-bottom: 5px;
			margin-left: 0px;
		}
		.betterdocs-toc > .toc-list li a:before {
			font-size: 12px;
			color: #566e8b;
		}
		.betterdocs-toc > .toc-list li:before {
			padding-top: 5px;
		}
		.betterdocs-toc > .toc-list a:hover {
			color: #528fff;
		}
		.feedback-form-link .feedback-form-icon svg, .feedback-form-link .feedback-form-icon img {
			width: 26px;
		}
		.betterdocs-toc > .toc-list a.active,
        .betterdocs-toc > .toc-list a.active:before {
			color: #528fff;
		}
        .betterdocs-toc > .toc-list a.active:after {
            background-color: #528fff;
        }
		.betterdocs-content {
			color: #4d4d4d;
			font-size: 16px;
		}
		.betterdocs-social-share .betterdocs-social-share-heading h5 {
			color: #566e8b;
		}
		.betterdocs-entry-footer .feedback-form-link {
			color: #566e8b;
			font-size: 15px;
		}
		.betterdocs-entry-footer .feedback-update-form .feedback-form-link:hover {
			color: #566e8b;
		}
        .betterdocs-entry-footer .feedback-form .modal-content .feedback-form-title {
            color: #3f5876;
            font-size: 21px;
        }
		.docs-navigation a {
			color: #3f5876;
			font-size: 16px;
		}
		.docs-navigation a:hover {
			color: #3f5876;
		}
		.docs-navigation a svg{
			fill: #5edf8e;
			min-width: 16px;
			width: 16px;
		}
		.betterdocs-entry-footer .update-date{
			color: #566e8b;
			font-size: 14px;
		}
		.betterdocs-credit p{
			color: #201d3a;
			font-size: 14px;
		}
		.betterdocs-credit p a{
			color: #528fff;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap,
		.betterdocs-category-wraper .betterdocs-full-sidebar-left {
			background-color: #ffffff;
		}
		.betterdocs-single-layout1 .betterdocs-sidebar-content .betterdocs-categories-wrap {
						border-top-left-radius: 5px;
									border-top-right-radius: 5px;
									border-bottom-right-radius: 5px;
									border-bottom-left-radius: 5px;
					}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .docs-single-cat-wrap .docs-cat-title-wrap{
			background-color: #ffffff;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .docs-cat-title img {
			height: 24px;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .docs-cat-title-inner .docs-cat-heading{
			color: #3f5876;
			font-size: 16px;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .docs-cat-title-inner .docs-cat-heading:hover {
			color: #3f5876 !important;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .docs-cat-title-inner .cat-list-arrow-down {
			color: #3f5876;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .docs-single-cat-wrap .active-title .docs-cat-title-inner .docs-cat-heading,
		.betterdocs-sidebar-content.betterdocs-category-sidebar .active-title .docs-cat-title-inner .docs-cat-heading,
		.betterdocs-category-wraper .betterdocs-full-sidebar-left .docs-cat-title-wrap::after {
			color: #3f5876;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .docs-item-count {
			background-color: #528ffe;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .docs-item-count span {
			background-color: rgba(82, 143, 255, 0.2);
			color: #ffffff;
			font-size: 12px;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-single-cat-wrap {
			margin-top: 5px;
			margin-right: 0px;
			margin-bottom: 5px;
			margin-left: 0px;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap, .betterdocs-full-sidebar-left .betterdocs-categories-wrap {
			padding-top: 0px;
			padding-right: 0px;
			padding-bottom: 0px;
			padding-left: 0px;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-single-cat-wrap .docs-cat-title-wrap {
			padding-top: 10px;
			padding-right: 15px;
			padding-bottom: 10px;
			padding-left: 15px;
		}
		.betterdocs-single-layout2 .betterdocs-full-sidebar-left .betterdocs-sidebar-content .betterdocs-categories-wrap .docs-cat-title-inner {
						background-color: #ffffff;		
						padding-top: 10px;
			padding-right: 15px;
			padding-bottom: 10px;
			padding-left: 15px;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .docs-item-container{
			background-color: #ffffff;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .docs-single-cat-wrap .docs-cat-title-wrap.active-title{
			background-color: rgba(90, 148, 255, .1);
			border-color: #528fff;
		}

		.betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap .docs-item-container li {
			padding-left: 0;
			margin-top: 10px;
			margin-right: 10px;
			margin-bottom: 10px;
			margin-left: 10px;
		}
		.betterdocs-single-layout2 .betterdocs-sidebar-content .betterdocs-categories-wrap .docs-item-container li {
			margin-right: 0 !important;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap li a {
			color: #566e8b;
			font-size: 14px;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap li a:hover {
			color: #528fff;
		}
		.betterdocs-sidebar-content.betterdocs-category-sidebar .betterdocs-categories-wrap li svg {
			fill: #566e8b;
			font-size: 14px;
		}
        .betterdocs-sidebar-content .betterdocs-categories-wrap li a.active,
        .betterdocs-sidebar-content .betterdocs-categories-wrap li.sub-list a.active {
            color: #528fff;
        }
		.betterdocs-category-wraper.betterdocs-single-wraper{
																				}	
		.betterdocs-category-wraper.betterdocs-single-wraper .docs-listing-main .docs-category-listing{
						background-color: #ffffff;
						margin-top: 0px;
			margin-right: 0px;
			margin-bottom: 0px;
			margin-left: 0px;
			padding-top: 30px;
			padding-right: 30px;
			padding-bottom: 30px;
			padding-left: 30px;
			border-radius: 5px;
		}
		.betterdocs-category-wraper .docs-category-listing .docs-cat-title .docs-cat-heading {
			color: #566e8b;
			font-size: 20px;
			margin-top: 0px;
			margin-right: 0px;
			margin-bottom: 20px;
			margin-left: 0px;
		}
		.betterdocs-category-wraper .docs-category-listing .docs-cat-title p {
			color: #566e8b;
			font-size: 14px;
			margin-top: 0px;
			margin-right: 0px;
			margin-bottom: 20px;
			margin-left: 0px;
		}
		.betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list ul li, 
		.betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat-title {
			margin-top: 10px;
			margin-right: 0px;
			margin-bottom: 10px;
			margin-left: 0px;
		}
		.betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list ul li svg {
			fill: #566e8b;
			font-size: 16px;
            min-width: 16px;
		}
		.betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list ul li a {
			color: #566e8b;
			font-size: 14px;
		}
		.betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list ul li a:hover {
			color: #528ffe;
		}
				.betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat li a {
			color: #566e8b;
		}
						.betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat li a:hover {
			color: #566e8b;
		}
						.betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat li svg {
			fill: #566e8b;
		}
				.betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat-title svg {
			fill: #566e8b;
			font-size: 15px;
		}
		.betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat-title a {
			color: #566e8b;
			font-size: 17px;
		}
		.betterdocs-category-wraper .docs-listing-main .docs-category-listing .docs-list .docs-sub-cat-title a:hover {
			color: #566e8b;
		}

		.betterdocs-search-form-wrap{
						background-color: #f7f7f7;
																		padding-top: 50px;
			padding-right: 20px;
			padding-bottom: 50px;
			padding-left: 20px;
			margin-top:0px;
			margin-right:0px;
			margin-bottom:0px;
			margin-left:0px;
					}
		.betterdocs-search-heading h2.heading, .betterdocs-search-heading h1.heading, .betterdocs-search-heading h3.heading, .betterdocs-search-heading h4.heading, .betterdocs-search-heading h5.heading, .betterdocs-search-heading h6.heading {
			line-height: 1.2;
			font-size: 40px;
			color: #566e8b;
			margin-top: 0px;
			margin-right: 0px;
			margin-bottom: 20px;
			margin-left: 0px;
		}
		.betterdocs-search-heading h3.subheading, .betterdocs-search-heading h2.subheading, .betterdocs-search-heading h1.subheading, .betterdocs-search-heading h4.subheading, .betterdocs-search-heading h5.subheading, .betterdocs-search-heading h6.subheading {
			line-height: 1.2;
			font-size: 16px;
			color: #566e8b;
			margin-top: 0px;
			margin-right: 0px;
			margin-bottom: 20px;
			margin-left: 0px;
		}
		.betterdocs-searchform {
			background-color: #ffffff;
			border-radius: 8px;
			padding-top: 22px;
			padding-right: 15px;
			padding-bottom: 22px;
			padding-left: 15px;
		}
		.betterdocs-searchform .betterdocs-search-field {
			font-size: 16px;
			color: #595959;
		}	
		.betterdocs-searchform .betterdocs-search-field:focus{
			color: #595959;
		}
		.betterdocs-searchform .betterdocs-search-field::placeholder{
			color: #595959;
		}
		.betterdocs-searchform svg.docs-search-icon {
			fill: #444b54;
			height: 30px;
		}
		.docs-search-close path.close-line {
			fill: #ff697b;	
		}
		.docs-search-close path.close-border {
			fill: #444b54;	
		}
		.docs-search-loader {
			stroke: #444b54;	
		}
		.betterdocs-searchform svg.docs-search-icon:hover {
			fill: #444b54;
		}
		.betterdocs-live-search .docs-search-result {
			width: 100%;
			max-width: 800px;
			background-color: #fff;
			border-color: #f1f1f1;
		}
		.betterdocs-search-result-wrap::before {
			border-color: transparent transparent #fff;
		}
		.betterdocs-live-search .docs-search-result li {
			border-color: #f5f5f5;
		}
		.betterdocs-live-search .docs-search-result li a {
			font-size: 16px;
			padding-top: 10px;
			padding-right: 10px;
			padding-bottom: 10px;
			padding-left: 10px;
		}
		.betterdocs-live-search .docs-search-result li a .betterdocs-search-title {
			color: #444444;
		}

		.betterdocs-live-search .docs-search-result li a .betterdocs-search-category{
			color: #444444;
		}

		.betterdocs-live-search .docs-search-result li:hover {
			background-color: #f5f5f5;
		}
		.betterdocs-live-search .docs-search-result li a span:hover {
			color: #444444;
		}
		.betterdocs-category-box.pro-layout-3 .docs-single-cat-wrap img,
		.docs-cat-list-2-box img {
			margin-right: 20px;
		}
		.betterdocs-wraper.betterdocs-category-list-2 .betterdocs-search-form-wrap {
			padding-bottom: 130px;
		}

		.betterdocs-article-reactions .betterdocs-article-reactions-heading h5 {
			color: #566e8b;
		}
		.betterdocs-article-reaction-links li a {
			background-color: #00b88a;
		}
		.betterdocs-article-reaction-links li a:hover {
			background-color: #fff;
		}
		.betterdocs-article-reaction-links li a svg path {
			fill: #fff;
		}
		.betterdocs-article-reaction-links li a:hover svg path {
			fill: #00b88a;
		}

		/**
		 * FAQ Layout 1 Customizer CSS
		 */
		.betterdocs-faq-section-title.faq-doc{
			margin: 0px 0px 0px 0px;			color:#15063F;
			font-size: 30px;
		}
		.betterdocs-faq-main-wrapper-layout-1.faq-doc .betterdocs-faq-title h2{
			color: #15063F;
			font-size: 25px;
			padding: 20px 20px 20px 20px;		}

		.betterdocs-faq-main-wrapper-layout-1.faq-doc .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-post .betterdocs-faq-post-name{
			color: #2f3b48;
			font-size: 17px;
		}

		.betterdocs-faq-main-wrapper-layout-1.faq-doc .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-post{
			background-color: #f0f1f5;
			padding: 20px 20px 20px 20px;		}
		.betterdocs-faq-main-wrapper-layout-1.faq-doc .betterdocs-faq-group .betterdocs-faq-main-content{
			background-color: #fbfcff;
			font-size: 15px;
			color: #7B7B7B;
		}

		/**
		 * FAQ Layout 2 Customizer CSS
		 */
		.betterdocs-faq-main-wrapper-layout-2.faq-doc .betterdocs-faq-title h2{
			color: #15063F;
			font-size: 25px;
			padding: 20px 20px 20px 20px;		}

		.betterdocs-faq-main-wrapper-layout-2.faq-doc .betterdocs-faq-list > li .betterdocs-faq-group .betterdocs-faq-post-layout-2 .betterdocs-faq-post-name{
			color: #2f3b48;
			font-size: 17px;
		}

		.betterdocs-faq-main-wrapper-layout-2.faq-doc .betterdocs-faq-list-layout-2 > li .betterdocs-faq-group-layout-2{
			background-color: #fff;
		}

		.betterdocs-faq-main-wrapper-layout-2.faq-doc .betterdocs-faq-list-layout-2 > li .betterdocs-faq-group-layout-2 .betterdocs-faq-main-content-layout-2{
			background-color: #fff;
			font-size: 15px;
			color: #7B7B7B;
		}

		.betterdocs-faq-main-wrapper-layout-2.faq-doc .betterdocs-faq-list-layout-2 > li .betterdocs-faq-group-layout-2 .betterdocs-faq-post-layout-2 {
			padding: 20px 20px 20px 20px;		}
	</style>
	<!--<script>
		jQuery(document).ready(function() {
			var masonryGrid = jQuery(".betterdocs-categories-wrap.layout-masonry");
			var columnPerGrid = jQuery(".betterdocs-categories-wrap.layout-masonry").attr('data-column');
			var masonryItem = jQuery(".betterdocs-categories-wrap.layout-masonry .docs-single-cat-wrap");
			var doc_page_column_space = ;
			var total_margin = columnPerGrid * doc_page_column_space;
			if (masonryGrid.length) {
				masonryItem.css("width", "calc((100% - "+total_margin+"px) / "+parseInt(columnPerGrid)+")");
				masonryGrid.masonry({
					itemSelector: ".docs-single-cat-wrap",
					percentPosition: true,
					gutter: doc_page_column_space
				});
			}
		});
	</script>-->
    
		<style type="text/css">
		#wp-admin-bar-ccb-admin-menu {
			min-width: 168px;
		}
		#wp-admin-bar-ccb-admin-menu .ab-item {
			font-size: 14px;
			padding-left: 20px !important;
			padding-right: 20px !important;
			display: flex !important;
			align-items: center;
		}

		#wp-admin-bar-ccb-admin-menu .ab-item .ccb-icon-logo {
			margin-right: 10px;
			color: #1AB163;
			width: 20px;
		}

		#wp-admin-bar-ccb-admin-menu .ab-submenu {
			padding: 0 !important;
		}

		#wp-admin-bar-ccb-admin-menu-default {
			max-width: 170px;
			overflow: hidden;
		}

		.ccb-admin-menu-item .ab-item {
			height: 100% !important;
			font-size: 14px !important;
			line-height: 17px !important;
			padding: 6px 0 !important;
			transition: 200ms ease;
			color: rgba(255, 255, 255, 0.7);
		}

		#wp-admin-bar-ccb-admin-menu-items-upgrade .ab-item{
			background-color: #1AB163 !important;
			color: #fff !important;
		}

		#wp-admin-bar-ccb-admin-menu-items-upgrade .ab-item:hover {
			background-color: #148b5d !important;
		}

		.ccb-admin-menu-item:hover {
			background-color: #1AB163 !important;
		}

		.ccb-admin-menu-item:hover a {
			background-color: #1AB163 !important;
			color: #fff !important;
		}

		</style>

		<script type="text/javascript">window.ccb_nonces = {"ccb_paypal":"472371b962","ccb_stripe":"41551cdee9","ccb_contact_form":"09c0db95df","ccb_woo_checkout":"4d2f8a9dd6","ccb_add_order":"556dd53203","ccb_orders":"f10f216499","ccb_update_order":"5fc0a5cd64","ccb_send_invoice":"242e9dd7ec","ccb_get_invoice":"93cc654f2f"};</script>		<script>
			var daysStr = "Days";
			var hoursStr = "Hours";
			var minutesStr = "Minutes";
			var secondsStr = "Seconds";
		</script>
					<!-- DO NOT COPY THIS SNIPPET! Start of Page Analytics Tracking for HubSpot WordPress plugin v10.1.13-->
			<script type="text/javascript" class="hsq-set-content-id" data-content-id="standard-page">
				var _hsq = _hsq || [];
				_hsq.push(["setContentType", "standard-page"]);
			</script>
			<!-- DO NOT COPY THIS SNIPPET! End of Page Analytics Tracking for HubSpot WordPress plugin -->
			        <style>
            /*  Custom CSS Code From Event Manager For Woocommerce  Plugin */
                    </style>
            <style>
		.pagination_area button[class*="defaultButton_xs"],
        .list_with_filter_section [class*="defaultButton"],
        div.item_hover_effect a{
            background-color:#ffbe30;
        }
        div.item_hover_effect a:hover{
            color:#ffbe30;background-color:#fff;border:1px solid #ffbe30;
        }
        ul.mp_event_more_date_list li:hover{
            background-color:#ffbe30;
        }
        .mep-default-sidrbar-events-schedule ul li i, .mep-ev-start-date, h3.mep_list_date i, .df-ico i, .mep-default-sidrbar-address ul li i, .mep-default-sidrbar-social ul li a, button.mep-cat-control, .pagination-sec a {
            background: #ffbe30;
        }
        .mep-default-sidrbar-meta .fa-list-alt,.mep-list-footer ul li i {
            background: transparent;
            color: #ffbe30;
        }
        .mep_more_date_btn{
            border: 1px solid #ffbe30;
            background: transparent;
            color: #ffbe30;
        }
        .mep-default-sidrbar-meta p a{
            color: #ffbe30;
        }
        .mep_more_date_btn:before{
            background: #ffbe30;
            border-color: #ffbe30;
        }
        .mep-default-sidrbar-events-schedule h3 i, .mep_event_list .mep_list_date, .mep-event-theme-1 .mep-social-share li a, .mep-template-2-hamza .mep-social-share li a {
            color: #ffbe30;
        }

        .mep_event_list_item:hover {
            border-color: #ffbe30;
        }

        .mep_event_list_item .mep-list-header:before, .mep_event_grid_item .mep-list-header:before {
            border-color: #ffbe30;
        }


        /*Cart sec Label Style*/
        .mep-default-feature-cart-sec h3, .mep-event-theme-1 h3.ex-sec-title, .mep-tem3-mid-sec h3.ex-sec-title, .mep-tem3-title-sec, 
		.royal_theme h3.ex-sec-title,
		.mep-events-wrapper .royal_theme table.mep_event_add_cart_table,
		.vanilla_theme.mep-default-theme div.mep-default-feature-date, 
		.vanilla_theme.mep-default-theme div.mep-default-feature-time, 
		.vanilla_theme.mep-default-theme div.mep-default-feature-location,
		.vanilla_theme h3.ex-sec-title,
		.vanilla_theme div.df-dtl h3,
		.vanilla_theme div.df-dtl p{
            background: #ffbe30;
            color: #ffffff;
        }

        /*FAQ Sec Style*/
        .mep-default-feature-faq-sec h4, .tmep-emplate-3-faq-sec .mep-event-faq-part h4 {
            background: #ffbe30;
            color: #ffffff;
        }

        h3.ex-sec-title{
            background: #ffbe30;
        }

        .ex-sec-title{
            background: #ffbe30;
            color: #ffffff;
        }

        /*Cart Button Style*/
		button.mpwemasp_get_sp,
        .mep-default-feature-cart-sec button.single_add_to_cart_button.button.alt.btn-mep-event-cart, .mep-event-theme-1 .btn-mep-event-cart, .mep-template-2-hamza .btn-mep-event-cart, .mep-tem3-mid-sec .btn-mep-event-cart, .button.button-default.woocommerce.button.alt.button.alt.btn-mep-event-cart {
            background: #ffbe30;
            color: #ffffff !important;
            border-color: #ffbe30;
        }

        /*Calender Button Style*/
        .mep-default-sidrbar-calender-btn a, .mep-event-theme-1 .mep-add-calender, .mep-template-2-hamza .mep-add-calender, .mep-tem3-mid-sec .mep-add-calender, #mep_add_calender_button, .royal_theme #mep_add_calender_button, .royal_theme ul#mep_add_calender_links li a {
            background: #ffbe30;
            color: #ffffff !important;
            border-color: #ffbe30;
        }
        #mep_add_calender_button,
        ul#mep_add_calender_links li a{
            background: #ffbe30;
        }
        /**/
        .mep_list_event_details p.read-more a{
            color: #ffbe30;
        }
		.royal_theme .mep-royal-header,
		.royal_theme .mep-default-feature-content{
		    background: ;
		}
		.royal_theme .mep-default-col-1,
		.royal_theme .mep-default-col-2{
			background-color: ;
		}
		.royal_theme .df-ico i,
		.royal_theme .mep-default-sidrbar-social ul li a,
		.royal_theme .mep-default-sidrbar-events-schedule ul li i,
        .royal_theme .mep-default-sidrbar-meta .fa-list-alt,
        .royal_theme .mep-default-sidrbar-events-schedule h3 i{
			background-color: ;
		}
		.royal_theme .mep-default-title,
		.royal_theme div.df-dtl h3,
		.royal_theme .mep-default-col-2,
		.mep-events-wrapper .royal_theme table td{
			border-color: ;
		}
		.royal_theme .mep-default-title h2, 
		.royal_theme .section-heading h2,
		.royal_theme div.df-dtl h3,
		.royal_theme div.df-dtl p,
		.royal_theme .mep-default-sidrbar-map h3, 
		.royal_theme .mep-default-sidrbar-events-schedule h3, 
		.royal_theme h4.mep-cart-table-title,
		.royal_theme table td,
		.royal_theme div.mep-default-feature-content p, 
		.royal_theme div.mep-default-feature-content ul, 
		.royal_theme div.mep-default-feature-content ul li,
		.royal_theme .mep-default-sidrbar-meta p, 
		.royal_theme .mep-default-sidrbar-meta p a, 
		.royal_theme .mep-default-sidrbar-events-schedule h3,
		.royal_theme .mep-default-sidrbar-events-schedule,
		.royal_theme .mep-default-sidrbar-price-seat h5{
            color: ;
        }
            </style>
    <style id="mystickymenu" type="text/css">#mysticky-nav { width:100%; position: static; }#mysticky-nav.wrapfixed { position:fixed; left: 0px; margin-top:0px;  z-index: 99990; -webkit-transition: 0.3s; -moz-transition: 0.3s; -o-transition: 0.3s; transition: 0.3s; -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)"; filter: alpha(opacity=90); opacity:0.9; background-color: #f7f5e7;}#mysticky-nav.wrapfixed .myfixed{ background-color: #f7f5e7; position: relative;top: auto;left: auto;right: auto;}#mysticky-nav .myfixed { margin:0 auto; float:none; border:0px; background:none; max-width:100%; }</style>			<style type="text/css">
																															</style>
				<script type="text/javascript">
		var stm_wpcfto_ajaxurl = 'https://itstest.websinova.com/wp-admin/admin-ajax.php';
	</script>

	<style>
		.vue_is_disabled {
			display: none;
		}
	</style>
		<script>
		var stm_wpcfto_nonces = {"wpcfto_save_settings":"50dd04e038","get_image_url":"5e2cb3f198","wpcfto_upload_file":"dc909d698f","wpcfto_search_posts":"8ff8b7b95e"};
	</script>
	<!-- Instagram Feed CSS -->
<style type="text/css">
#sbi_mod_link, #sbi_mod_error{ display: block !important; width: 100%; float: left; box-sizing: border-box; }
</style>
		<script type="text/javascript">
			var ajaxurl = 'https://itstest.websinova.com/wp-admin/admin-ajax.php';
			var stm_ajax_load_events = 'eeba41b1d4';
			var stm_ajax_load_portfolio = '57b9aeb054';
			var stm_ajax_add_event_member_sc = '795e20ecb5';
			var stm_custom_register = 'dec1b8d8f4';
			var stm_get_prices = '00c02c4eb1';
			var stm_get_history = 'accd447da2';
			var stm_ajax_add_review = '19cd389281';
		</script>
			<noscript><style>.woocommerce-product-gallery{ opacity: 1 !important; }</style></noscript>
	<script data-cfasync="false"> var dFlipLocation = "https://itstest.websinova.com/wp-content/plugins/3d-flipbook-dflip-lite/assets/"; var dFlipWPGlobal = {"text":{"toggleSound":"Turn on\/off Sound","toggleThumbnails":"Toggle Thumbnails","toggleOutline":"Toggle Outline\/Bookmark","previousPage":"Previous Page","nextPage":"Next Page","toggleFullscreen":"Toggle Fullscreen","zoomIn":"Zoom In","zoomOut":"Zoom Out","toggleHelp":"Toggle Help","singlePageMode":"Single Page Mode","doublePageMode":"Double Page Mode","downloadPDFFile":"Download PDF File","gotoFirstPage":"Goto First Page","gotoLastPage":"Goto Last Page","share":"Share","mailSubject":"I wanted you to see this FlipBook","mailBody":"Check out this site {{url}}","loading":"DearFlip: Loading "},"moreControls":"download,pageMode,startPage,endPage,sound","hideControls":"","scrollWheel":"true","backgroundColor":"#777","backgroundImage":"","height":"auto","paddingLeft":"20","paddingRight":"20","controlsPosition":"bottom","duration":800,"soundEnable":"true","enableDownload":"true","enableAnnotation":"false","enableAnalytics":"false","webgl":"true","hard":"none","maxTextureSize":"1600","rangeChunkSize":"524288","zoomRatio":1.5,"stiffness":3,"pageMode":"0","singlePageMode":"0","pageSize":"0","autoPlay":"false","autoPlayDuration":5000,"autoPlayStart":"false","linkTarget":"2","sharePrefix":"dearflip-"};</script><meta name="generator" content="Elementor 3.11.5; features: e_dom_optimization, e_optimized_assets_loading, e_optimized_css_loading, a11y_improvements, additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-swap">
		<style>
			.gforms-menu-icon {
				float: left;
				width: 26px !important;
				height: 30px !important;
				background-repeat: no-repeat;
				background-position: 0 6px;
				background-size: 20px;
			}

			@media screen and ( max-width: 782px ) {
				#wpadminbar #wp-admin-bar-gform-forms .ab-item {
					line-height: 53px;
					height: 46px !important;
					width: 52px !important;
					display: block;
					background-size: 36px 36px;
					background-position: 7px 6px;
				}

				#wpadminbar li#wp-admin-bar-gform-forms {
					display: block;
				}

			}
		</style>
				<style>
			#wp-admin-bar-consulting_settings			img {
				max-width: 25px;
				vertical-align: top;
				position: relative;
				top: 3px;
			}
		</style>
		<meta name="generator" content="Powered by WPBakery Page Builder - drag and drop page builder for WordPress."/>
<style type="text/css" media="print">#wpadminbar { display:none; }</style>
	<style type="text/css" media="screen">
	html { margin-top: 32px !important; }
	@media screen and ( max-width: 782px ) {
		html { margin-top: 46px !important; }
	}
</style>
	<meta name="generator" content="Powered by Slider Revolution 6.5.19 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface." />
<script>function setREVStartSize(e){
			//window.requestAnimationFrame(function() {
				window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;
				window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;
				try {
					var pw = document.getElementById(e.c).parentNode.offsetWidth,
						newh;
					pw = pw===0 || isNaN(pw) ? window.RSIW : pw;
					e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
					e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
					e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
					e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
					e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
					e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
					e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);
					if(e.layout==="fullscreen" || e.l==="fullscreen")
						newh = Math.max(e.mh,window.RSIH);
					else{
						e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
						for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];
						e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
						e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
						for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
											
						var nl = new Array(e.rl.length),
							ix = 0,
							sl;
						e.tabw = e.tabhide>=pw ? 0 : e.tabw;
						e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
						e.tabh = e.tabhide>=pw ? 0 : e.tabh;
						e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;
						for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
						sl = nl[0];
						for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}
						var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);
						newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
					}
					var el = document.getElementById(e.c);
					if (el!==null && el) el.style.height = newh+"px";
					el = document.getElementById(e.c+"_wrapper");
					if (el!==null && el) {
						el.style.height = newh+"px";
						el.style.display = "block";
					}
				} catch(e){
					console.log("Failure at Presize of Slider:" + e)
				}
			//});
		  };</script>
		<style type="text/css" id="wp-custom-css">
			.woocommerce div.product form.cart div.quantity {
    display: none;   
}

.pmpro-message {
	text-align:center;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    padding: 50px;
}

.pmpro-message-title {
    font-size: 20px;
    margin-bottom: 10px;
}

.pmpro-message-button {
    margin-top: 20px;
}

.pmpro-message-link {
    background-color: #0073aa;
    border-radius: 5px;
    color: #fff;
    display: inline-block;
	margin: 20px 30px;
    padding: 10px 25px;
    text-decoration: none;
    transition: background-color 0.2s;
}

.pmpro-message-link:hover {
    background-color: #d0001d;
	color:#ffffff;
}
		</style>
		<noscript><style> .wpb_animate_when_almost_visible { opacity: 1; }</style></noscript><style id="wpforms-css-vars-root">
				:root {
					--wpforms-field-border-radius: 3px;
--wpforms-field-background-color: #ffffff;
--wpforms-field-border-color: rgba( 0, 0, 0, 0.25 );
--wpforms-field-text-color: rgba( 0, 0, 0, 0.7 );
--wpforms-label-color: rgba( 0, 0, 0, 0.85 );
--wpforms-label-sublabel-color: rgba( 0, 0, 0, 0.55 );
--wpforms-label-error-color: #d63637;
--wpforms-button-border-radius: 3px;
--wpforms-button-background-color: #066aab;
--wpforms-button-text-color: #ffffff;
--wpforms-field-size-input-height: 43px;
--wpforms-field-size-input-spacing: 15px;
--wpforms-field-size-font-size: 16px;
--wpforms-field-size-line-height: 19px;
--wpforms-field-size-padding-h: 14px;
--wpforms-field-size-checkbox-size: 16px;
--wpforms-field-size-sublabel-spacing: 5px;
--wpforms-field-size-icon-size: 1;
--wpforms-label-size-font-size: 16px;
--wpforms-label-size-line-height: 19px;
--wpforms-label-size-sublabel-font-size: 14px;
--wpforms-label-size-sublabel-line-height: 17px;
--wpforms-button-size-font-size: 17px;
--wpforms-button-size-height: 41px;
--wpforms-button-size-padding-h: 15px;
--wpforms-button-size-margin-top: 10px;

				}
			</style></head>

<body class="page-template-default page page-id-16045 logged-in admin-bar no-customize-support theme-consulting pmpro-body-has-access tutor-lms tutor-screen-frontend-dashboard woocommerce-no-js ehf-header ehf-footer ehf-template-consulting ehf-stylesheet-consulting site_layout_atlanta  header_transparent mobile_grid_landscape vc_sidebar_page eroom-enabled wpb-js-composer js-comp-ver-6.9.0 vc_responsive elementor-default elementor-kit-219 elementor-page elementor-page-16045">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-dark-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0 0.49803921568627" /><feFuncG type="table" tableValues="0 0.49803921568627" /><feFuncB type="table" tableValues="0 0.49803921568627" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-grayscale"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0 1" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0 1" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-purple-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0.54901960784314 0.98823529411765" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0.71764705882353 0.25490196078431" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-blue-red"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0 1" /><feFuncG type="table" tableValues="0 0.27843137254902" /><feFuncB type="table" tableValues="0.5921568627451 0.27843137254902" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-midnight"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0 0" /><feFuncG type="table" tableValues="0 0.64705882352941" /><feFuncB type="table" tableValues="0 1" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-magenta-yellow"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0.78039215686275 1" /><feFuncG type="table" tableValues="0 0.94901960784314" /><feFuncB type="table" tableValues="0.35294117647059 0.47058823529412" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-purple-green"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0.65098039215686 0.40392156862745" /><feFuncG type="table" tableValues="0 1" /><feFuncB type="table" tableValues="0.44705882352941 0.4" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;" ><defs><filter id="wp-duotone-blue-orange"><feColorMatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " /><feComponentTransfer color-interpolation-filters="sRGB" ><feFuncR type="table" tableValues="0.098039215686275 1" /><feFuncG type="table" tableValues="0 0.66274509803922" /><feFuncB type="table" tableValues="0.84705882352941 0.41960784313725" /><feFuncA type="table" tableValues="1 1" /></feComponentTransfer><feComposite in2="SourceGraphic" operator="in" /></filter></defs></svg>
    <div id="wrapper">

        <div id="page" class="hfeed site">

		<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
			<p class="main-title bhf-hidden" itemprop="headline"><a href="https://itstest.websinova.com" title="Testing Website" rel="home">Testing Website</a></p>
					<div data-elementor-type="wp-post" data-elementor-id="17971" class="elementor elementor-17971">
									<section class="elementor-section elementor-top-section elementor-element elementor-element-48d46dd elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="48d46dd" data-element_type="section" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_effects_offset&quot;:50,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d586a4b" data-id="d586a4b" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-a0b21f8 logo elementor-widget elementor-widget-site-logo" data-id="a0b21f8" data-element_type="widget" data-settings="{&quot;width&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:100,&quot;sizes&quot;:[]},&quot;align&quot;:&quot;center&quot;,&quot;width_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;width_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;space_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;image_border_radius&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;image_border_radius_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;image_border_radius_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_padding&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_padding_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_padding_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;top&quot;:&quot;&quot;,&quot;right&quot;:&quot;&quot;,&quot;bottom&quot;:&quot;&quot;,&quot;left&quot;:&quot;&quot;,&quot;isLinked&quot;:true},&quot;caption_space&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;caption_space_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;caption_space_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="site-logo.default">
				<div class="elementor-widget-container">
					<div class="hfe-site-logo">
													<a data-elementor-open-lightbox=""  class='elementor-clickable' href="https://itstest.websinova.com">
							<div class="hfe-site-logo-set">           
				<div class="hfe-site-logo-container">
					<img class="hfe-site-logo-img elementor-animation-"  src="https://itstest.websinova.com/wp-content/uploads/2023/03/MME_Logo-removebg-preview-e1680080439318.png" alt="Logo"/>
				</div>
			</div>
							</a>
						</div>  
					</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-669765b" data-id="669765b" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<section class="elementor-section elementor-inner-section elementor-element elementor-element-cdf5755 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="cdf5755" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-eb2f754" data-id="eb2f754" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-7479451 consulting_menu_nav__align-center elementor-widget__width-inherit nav-menu consulting_menu_nav__breakpoint-tablet elementor-widget elementor-widget-stm_header_menu" data-id="7479451" data-element_type="widget" data-widget_type="stm_header_menu.default">
				<div class="elementor-widget-container">
					<div class="consulting_menu_nav consulting_menu_nav-layout">
			<div class="menu_toggle"><button></button></div>
			<nav class="consulting_menu_nav__separator- consulting_menu_nav__pointer_none consulting_menu_nav__submenu-icon-none"><ul id="menu-1-7479451" class="consulting_menu_nav"><li id="menu-item-16665" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-16665"><a href="https://itstest.websinova.com/">Home</a></li>
<li id="menu-item-15585" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15585"><a href="#">Whom we serve</a>
<ul class="sub-menu">
	<li id="menu-item-17053" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17053 stm_col_width_2 stm_mega_cols_inside_default stm_mega_col_width_banner_full_width"><a href="#">Aspiring Expatriate</a></li>
	<li id="menu-item-17054" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17054 stm_col_width_2 stm_mega_cols_inside_default stm_mega_col_width_banner_full_width"><a href="#">Expatriate</a></li>
	<li id="menu-item-17055" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17055 stm_col_width_1 stm_mega_cols_inside_default stm_mega_col_width_banner_default"><a href="#">HR of Multi National Entities</a></li>
	<li id="menu-item-17588" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17588 stm_col_width_default stm_mega_cols_inside_default stm_mega_col_width_banner_default"><a href="#">CXO of a Mutli National Company</a></li>
</ul>
</li>
<li id="menu-item-15954" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15954"><a href="https://itstest.websinova.com/global-deployment-solutions/">Global Deployment Solutions</a>
<ul class="sub-menu">
	<li id="menu-item-17636" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17636 stm_col_width_default stm_mega_cols_inside_default stm_mega_col_width_banner_default"><a href="https://itstest.websinova.com/knowledge-box/">Knowledge Box</a></li>
	<li id="menu-item-17666" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17666 stm_col_width_default stm_mega_cols_inside_default stm_mega_col_width_banner_default"><a href="https://itstest.websinova.com/regulatory-compliance-box/">Regulatory &#038; Compliance Box</a></li>
</ul>
</li>
<li id="menu-item-17052" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-17052"><a href="https://itstest.websinova.com/#Calander1">Book a Session</a></li>
</ul></nav>
		</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-fc56b89" data-id="fc56b89" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-4b7811b elementor-align-center elementor-widget elementor-widget-button" data-id="4b7811b" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper icon_align_  ">
			<a href="https://www.linkedin.com/company/taxpert-global-solutions/" class="elementor-button-link elementor-button elementor-size-sm" role="button">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-text">Subscribe</span>
		</span>
					</a>
		</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-d1404e2" data-id="d1404e2" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-fe070db elementor-menu-cart--empty-indicator-hide toggle-icon--cart-medium elementor-menu-cart--items-indicator-bubble elementor-menu-cart--cart-type-side-cart elementor-menu-cart--show-remove-button-yes elementor-widget elementor-widget-woocommerce-menu-cart" data-id="fe070db" data-element_type="widget" data-settings="{&quot;cart_type&quot;:&quot;side-cart&quot;,&quot;open_cart&quot;:&quot;click&quot;,&quot;automatically_open_cart&quot;:&quot;no&quot;}" data-widget_type="woocommerce-menu-cart.default">
				<div class="elementor-widget-container">
			<link rel="stylesheet" href="https://itstest.websinova.com/wp-content/plugins/elementor-pro/assets/css/widget-woocommerce.min.css">		<div class="elementor-menu-cart__wrapper">
							<div class="elementor-menu-cart__toggle_wrapper">
					<div class="elementor-menu-cart__container elementor-lightbox" aria-hidden="true">
						<div class="elementor-menu-cart__main" aria-hidden="true">
							<div class="elementor-menu-cart__close-button"></div>
							<div class="widget_shopping_cart_content">
															</div>
						</div>
					</div>
							<div class="elementor-menu-cart__toggle elementor-button-wrapper">
			<a id="elementor-menu-cart__toggle_button" href="#" class="elementor-menu-cart__toggle_button elementor-button elementor-size-sm" aria-expanded="false">
				<span class="elementor-button-text">Free</span>
				<span class="elementor-button-icon">
					<span class="elementor-button-icon-qty" data-counter="0">0</span>
					<i class="eicon-cart-medium"></i>					<span class="elementor-screen-only">Cart</span>
				</span>
			</a>
		</div>
						</div>
					</div> <!-- close elementor-menu-cart__wrapper -->
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-a214b16" data-id="a214b16" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-892ad89 elementor-view-stacked elementor-shape-circle elementor-widget elementor-widget-icon" data-id="892ad89" data-element_type="widget" data-widget_type="icon.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-wrapper">
			<a class="elementor-icon" href="https://itstest.websinova.com/dashboard/">
			<i aria-hidden="true" class="fas fa-user"></i>			</a>
		</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
					</div>
		</div>
							</div>
		</section>
							</div>
				</header>

	<div id="main">
    <div class="container">
<div class="tutor-wrap tutor-wrap-parent tutor-dashboard tutor-frontend-dashboard tutor-dashboard-student tutor-pb-80">
	<div class="tutor-container">
		<div class="tutor-row tutor-d-flex tutor-justify-between tutor-frontend-dashboard-header">
			<div class="tutor-header-left-side tutor-dashboard-header tutor-col-md-6 tutor-d-flex tutor-align-center" style="border: none;">
				<div class="tutor-dashboard-header-avatar">
					<div class="tutor-avatar tutor-avatar-xl"><div class="tutor-ratio tutor-ratio-1x1"><span class="tutor-avatar-text">S</span></div></div>				</div>

				<div class="tutor-user-info tutor-ml-24">
											<div class="tutor-dashboard-header-display-name tutor-color-black">
							<div class="tutor-fs-5 tutor-dashboard-header-greetings">
								Hello,
							</div>
							<div class="tutor-fs-4 tutor-fw-medium tutor-dashboard-header-username">
								sanchay							</div>
						</div>
										</div>
			</div>
			<div class="tutor-header-right-side tutor-col-md-6 tutor-d-flex tutor-justify-end tutor-mt-20 tutor-mt-md-0">
				<div class="tutor-d-flex tutor-align-center">
									</div>
			</div>
		</div>

		<div class="tutor-row tutor-frontend-dashboard-maincontent">
			<div class="tutor-col-12 tutor-col-md-4 tutor-col-lg-3 tutor-dashboard-left-menu">
				<ul class="tutor-dashboard-permalinks">
												<li class='tutor-dashboard-menu-item tutor-dashboard-menu-index active'>
								<a  href="https://itstest.websinova.com/dashboard/" class='tutor-dashboard-menu-item-link tutor-fs-6 tutor-color-black'>
									<span class='tutor-icon-dashboard tutor-dashboard-menu-item-icon'></span>									<span class='tutor-dashboard-menu-item-text tutor-ml-12'>
										Dashboard									</span>
								</a>
							</li>
														<li class='tutor-dashboard-menu-item tutor-dashboard-menu-my-profile '>
								<a  href="https://itstest.websinova.com/dashboard/my-profile" class='tutor-dashboard-menu-item-link tutor-fs-6 tutor-color-black'>
									<span class='tutor-icon-user-bold tutor-dashboard-menu-item-icon'></span>									<span class='tutor-dashboard-menu-item-text tutor-ml-12'>
										My Profile									</span>
								</a>
							</li>
														<li class='tutor-dashboard-menu-item tutor-dashboard-menu-enrolled-courses '>
								<a  href="https://itstest.websinova.com/dashboard/enrolled-courses" class='tutor-dashboard-menu-item-link tutor-fs-6 tutor-color-black'>
									<span class='tutor-icon-mortarboard-o tutor-dashboard-menu-item-icon'></span>									<span class='tutor-dashboard-menu-item-text tutor-ml-12'>
										Enrolled Courses									</span>
								</a>
							</li>
														<li class='tutor-dashboard-menu-item tutor-dashboard-menu-purchase_history '>
								<a  href="https://itstest.websinova.com/dashboard/purchase_history" class='tutor-dashboard-menu-item-link tutor-fs-6 tutor-color-black'>
									<span class='tutor-icon-cart-bold tutor-dashboard-menu-item-icon'></span>									<span class='tutor-dashboard-menu-item-text tutor-ml-12'>
										Order History									</span>
								</a>
							</li>
														<li class='tutor-dashboard-menu-item tutor-dashboard-menu-custom_Compliance '>
								<a  href="//youtube.com" class='tutor-dashboard-menu-item-link tutor-fs-6 tutor-color-black'>
									<span class='tutor-icon-envelope tutor-dashboard-menu-item-icon'></span>									<span class='tutor-dashboard-menu-item-text tutor-ml-12'>
										My Compliance									</span>
								</a>
							</li>
														<li class='tutor-dashboard-menu-item tutor-dashboard-menu-custom_Resources '>
								<a  href="//youtube.com" class='tutor-dashboard-menu-item-link tutor-fs-6 tutor-color-black'>
									<span class='tutor-icon-bookmark-bold tutor-dashboard-menu-item-icon'></span>									<span class='tutor-dashboard-menu-item-text tutor-ml-12'>
										My Resources									</span>
								</a>
							</li>
														<li class='tutor-dashboard-menu-item tutor-dashboard-menu-custom_Calendar '>
								<a  href="//youtube.com" class='tutor-dashboard-menu-item-link tutor-fs-6 tutor-color-black'>
									<span class='tutor-icon-brand-google-calendar tutor-dashboard-menu-item-icon'></span>									<span class='tutor-dashboard-menu-item-text tutor-ml-12'>
										My Travel Calendar									</span>
								</a>
							</li>
														<li class='tutor-dashboard-menu-item tutor-dashboard-menu-custom_documents '>
								<a  href="//youtube.com" class='tutor-dashboard-menu-item-link tutor-fs-6 tutor-color-black'>
									<span class='tutor-icon-book-open tutor-dashboard-menu-item-icon'></span>									<span class='tutor-dashboard-menu-item-text tutor-ml-12'>
										My Documents									</span>
								</a>
							</li>
														<li class='tutor-dashboard-menu-item tutor-dashboard-menu-custom_Taxes '>
								<a  href="//youtube.com" class='tutor-dashboard-menu-item-link tutor-fs-6 tutor-color-black'>
									<span class='tutor-icon-receipt-bold tutor-dashboard-menu-item-icon'></span>									<span class='tutor-dashboard-menu-item-text tutor-ml-12'>
										My Taxes									</span>
								</a>
							</li>
														<li class='tutor-dashboard-menu-item tutor-dashboard-menu-custom_Remitances '>
								<a  href="//youtube.com" class='tutor-dashboard-menu-item-link tutor-fs-6 tutor-color-black'>
									<span class='tutor-icon-badge-dollar tutor-dashboard-menu-item-icon'></span>									<span class='tutor-dashboard-menu-item-text tutor-ml-12'>
										My Remitances									</span>
								</a>
							</li>
							<li class="tutor-dashboard-menu-divider"></li>							<li class='tutor-dashboard-menu-item tutor-dashboard-menu-settings '>
								<a  href="https://itstest.websinova.com/dashboard/settings" class='tutor-dashboard-menu-item-link tutor-fs-6 tutor-color-black'>
									<span class='tutor-icon-gear tutor-dashboard-menu-item-icon'></span>									<span class='tutor-dashboard-menu-item-text tutor-ml-12'>
										Settings									</span>
								</a>
							</li>
														<li class='tutor-dashboard-menu-item tutor-dashboard-menu-logout '>
								<a data-no-instant href="https://itstest.websinova.com/dashboard/logout" class='tutor-dashboard-menu-item-link tutor-fs-6 tutor-color-black'>
									<span class='tutor-icon-signout tutor-dashboard-menu-item-icon'></span>									<span class='tutor-dashboard-menu-item-text tutor-ml-12'>
										Logout									</span>
								</a>
							</li>
											</ul>
			</div>

			<div class="tutor-col-12 tutor-col-md-8 tutor-col-lg-9">
				<div class="tutor-dashboard-content">
					
<div class="tutor-fs-5 tutor-fw-medium tutor-color-black tutor-capitalize-text tutor-mb-24 tutor-dashboard-title">Dashboard</div>
<div class="tutor-dashboard-content-inner">
		<div class="tutor-row tutor-gx-lg-4">
		<div class="tutor-col-lg-6 tutor-col-xl-4 tutor-mb-16 tutor-mb-lg-32">
			<div class="tutor-card">
				<div class="tutor-d-flex tutor-flex-lg-column tutor-align-center tutor-text-lg-center tutor-px-12 tutor-px-lg-24 tutor-py-8 tutor-py-lg-32">
					<span class="tutor-round-box tutor-mr-12 tutor-mr-lg-0 tutor-mb-lg-12">
						<i class="tutor-icon-book-open" area-hidden="true"></i>
					</span>
					<div class="tutor-fs-3 tutor-fw-bold tutor-d-none tutor-d-lg-block">1</div>
					<div class="tutor-fs-7 tutor-color-secondary">Enrolled Courses</div>
					<div class="tutor-fs-4 tutor-fw-bold tutor-d-block tutor-d-lg-none tutor-ml-auto">1</div>
				</div>
			</div>
		</div>

		<div class="tutor-col-lg-6 tutor-col-xl-4 tutor-mb-16 tutor-mb-lg-32">
			<div class="tutor-card">
				<div class="tutor-d-flex tutor-flex-lg-column tutor-align-center tutor-text-lg-center tutor-px-12 tutor-px-lg-24 tutor-py-8 tutor-py-lg-32">
					<span class="tutor-round-box tutor-mr-12 tutor-mr-lg-0 tutor-mb-lg-12">
						<i class="tutor-icon-mortarboard-o" area-hidden="true"></i>
					</span>
					<div class="tutor-fs-3 tutor-fw-bold tutor-d-none tutor-d-lg-block">1</div>
					<div class="tutor-fs-7 tutor-color-secondary">Active Courses</div>
					<div class="tutor-fs-4 tutor-fw-bold tutor-d-block tutor-d-lg-none tutor-ml-auto">1</div>
				</div>
			</div>
		</div>

		<div class="tutor-col-lg-6 tutor-col-xl-4 tutor-mb-16 tutor-mb-lg-32">
			<div class="tutor-card">
				<div class="tutor-d-flex tutor-flex-lg-column tutor-align-center tutor-text-lg-center tutor-px-12 tutor-px-lg-24 tutor-py-8 tutor-py-lg-32">
					<span class="tutor-round-box tutor-mr-12 tutor-mr-lg-0 tutor-mb-lg-12">
						<i class="tutor-icon-trophy" area-hidden="true"></i>
					</span>
					<div class="tutor-fs-3 tutor-fw-bold tutor-d-none tutor-d-lg-block">0</div>
					<div class="tutor-fs-7 tutor-color-secondary">Completed Courses</div>
					<div class="tutor-fs-4 tutor-fw-bold tutor-d-block tutor-d-lg-none tutor-ml-auto">0</div>
				</div>
			</div>
		</div>

			</div>
</div>


	<div class="tutor-frontend-dashboard-course-progress">
		<div class="tutor-fs-5 tutor-fw-medium tutor-color-black tutor-capitalize-text tutor-mb-24">
			In Progress Courses		</div>
					<div class="tutor-course-progress-item tutor-card tutor-mb-20">
				<div class="tutor-row tutor-gx-0">
					<div class="tutor-col-lg-4">
						<div class="tutor-ratio tutor-ratio-3x2">
							<img class="tutor-card-image-left" src="https://itstest.websinova.com/wp-content/plugins/tutor/assets/images/placeholder.svg" alt="Basics of Stock Market" loading="lazy">
						</div>
					</div>

					<div class="tutor-col-lg-8 tutor-align-self-center">
						<div class="tutor-card-body">
														<div class="tutor-ratings tutor-mb-4">
									<div class="tutor-ratings-stars"><i class="tutor-icon-star-line" data-rating-value="1"></i><i class="tutor-icon-star-line" data-rating-value="2"></i><i class="tutor-icon-star-line" data-rating-value="3"></i><i class="tutor-icon-star-line" data-rating-value="4"></i><i class="tutor-icon-star-line" data-rating-value="5"></i></div><input type="hidden" name="tutor_rating_gen_input" value="0" />									<div class="tutor-ratings-count">
										0.00									</div>
								</div>
							
							<div class="tutor-course-progress-item-title tutor-fs-5 tutor-fw-medium tutor-color-black tutor-mb-12">
							Basics of Stock Market							</div>

							<div class="tutor-d-flex tutor-fs-7 tutor-mb-32">
								<span class="tutor-color-muted tutor-mr-4">Completed Lessons:</span>
								<span class="tutor-fw-medium tutor-color-black">
									<span>
									0									</span>
								of									<span>
									5									</span>
								lesson								</span>
							</div>

							<div class="tutor-row tutor-align-center">
								<div class="tutor-col">
									<div class="tutor-progress-bar tutor-mr-16" style="--tutor-progress-value:0%"><span class="tutor-progress-value" area-hidden="true"></span></div>
								</div>

								<div class="tutor-col-auto">
									<span class="progress-percentage tutor-fs-7 tutor-color-muted">
										<span class="tutor-fw-medium tutor-color-black ">
										0%										</span>Complete									</span>
								</div>
							</div>
						</div>
					</div>
					<a class="tutor-stretched-link" href="https://itstest.websinova.com/courses/basics-of-stock-market/"></a>
				</div>
			</div>
						</div>

				</div>
			</div>
		</div>
	</div>
	<div id="tutor-dashboard-footer-mobile">
		<div class="tutor-container">
			<div class="tutor-row">
									<a class="tutor-col-4 active" href="https://itstest.websinova.com/dashboard/">
						<i class="ttr tutor-icon-dashboard"></i>
						<span>Dashboard</span>
					</a>
									<a class="tutor-col-4 " href="https://itstest.websinova.com/dashboard/my-quiz-attempts/">
						<i class="ttr tutor-icon-quiz-attempt"></i>
						<span>Quiz Attempts</span>
					</a>
									<a class="tutor-col-4 " href="#">
						<i class="ttr tutor-icon-hamburger-o tutor-dashboard-menu-toggler"></i>
						<span>Menu</span>
					</a>
							</div>
		</div>
	</div>
</div>



        </div> <!--.container-->
    </div> <!--#main-->
</div> <!--.content_wrapper-->
		<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo">
			<div class='footer-width-fixer'>		<div data-elementor-type="wp-post" data-elementor-id="13168" class="elementor elementor-13168">
									<section class="elementor-section elementor-top-section elementor-element elementor-element-9b8e7e6 third_bg_color elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9b8e7e6" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ec5ad09" data-id="ec5ad09" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-c55a5b6 elementor-widget elementor-widget-vc_cta" data-id="c55a5b6" data-element_type="widget" data-widget_type="vc_cta.default">
				<div class="elementor-widget-container">
			
<div class="ce_cta ce_cta_f66197ab1ad4548e7a60dfd94611f963 ce_text_left third_bg_color add_button_right btn_align_right btn_button_block_true btn_has_icon btn_has_icon_on_the_right" id="">

    <div class="ce_cta__content">
        <div class="ce_cta__content__header">
            <h2  class='ce_cta__content__title '>Looking for One-stop Solution for Expatriates?</h2>                    </div>

        
    </div>

    
        <div class="ce_cta__action">
            <a href="/contact-us/"
                              target="_self"
               class="button ">
                <span>Contact us</span>
                                    <i class=" stm-right-arrow"></i>
                            </a>
        </div>

    
</div>
		</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-e40ca83 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e40ca83" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d548111" data-id="d548111" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<section class="elementor-section elementor-inner-section elementor-element elementor-element-4d23e64 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4d23e64" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-f103f93" data-id="f103f93" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-15d49eb elementor-widget elementor-widget-stm_header_logo" data-id="15d49eb" data-element_type="widget" data-widget_type="stm_header_logo.default">
				<div class="elementor-widget-container">
			
		<div class="consulting-logo">
						<a href=&quot;https://taxpertpro.com/&quot;>
							<img src="https://itstest.websinova.com/wp-content/uploads/2022/01/Logo-white_1.png" alt="Testing Website" />
						</a>
					</div>

				</div>
				</div>
				<div class="elementor-element elementor-element-6efb5da elementor-widget elementor-widget-text-editor" data-id="6efb5da" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.11.5 - 14-03-2023 */
.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#818a91;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#818a91;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>				<p>Taxpert Professionals is a conglomeration of multi-diverged professionals known for providing concentrated services in relation to accountancy, taxation, legal and corporate laws advisory in a seamless manner.</p>
						</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-cc626e8" data-id="cc626e8" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-83b5708 elementor-widget elementor-widget-sidebar" data-id="83b5708" data-element_type="widget" data-widget_type="sidebar.default">
				<div class="elementor-widget-container">
			
		<section id="recent-posts-4" class="widget widget_recent_entries">
		<h4 class="widget_title no_stripe">Recent News</h4>
		<ul>
											<li>
					<a href="https://itstest.websinova.com/demo-ui/">Demo UI</a>
											<span class="post-date">March 28, 2023</span>
									</li>
											<li>
					<a href="https://itstest.websinova.com/narrow-your-focus-to-prevent-overanalysis/">Narrow Your Focus to Prevent Overanalysis</a>
											<span class="post-date">February 1, 2022</span>
									</li>
					</ul>

		</section>		</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-1245219" data-id="1245219" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-99ebcb9 elementor-widget elementor-widget-sidebar" data-id="99ebcb9" data-element_type="widget" data-widget_type="sidebar.default">
				<div class="elementor-widget-container">
			<section id="nav_menu-3" class="widget widget_nav_menu"><h4 class="widget_title no_stripe">Links</h4><div class="menu-extra-links-container"><ul id="menu-extra-links" class="menu"><li id="menu-item-18954" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-18954"><a href="https://itstest.websinova.com/" onClick="return true">Home</a></li>
<li id="menu-item-18955" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18955"><a href="https://itstest.websinova.com/global-deployment-solutions/" onClick="return true">Global Deployment Solutions</a></li>
<li id="menu-item-18956" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18956"><a href="https://itstest.websinova.com/portfolio-with-filter/" onClick="return true">Resource Library</a></li>
</ul></div></section>		</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-21e5e91" data-id="21e5e91" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-4037eae elementor-widget elementor-widget-heading" data-id="4037eae" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.11.5 - 14-03-2023 */
.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}</style><h2 class="elementor-heading-title elementor-size-default">Stay updated with mme</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-5d2718e elementor-widget elementor-widget-stm_newsletter" data-id="5d2718e" data-element_type="widget" data-widget_type="stm_newsletter.default">
				<div class="elementor-widget-container">
					<div class="consulting_newsletter_widget">
			<script>(function() {
	window.mc4wp = window.mc4wp || {
		listeners: [],
		forms: {
			on: function(evt, cb) {
				window.mc4wp.listeners.push(
					{
						event   : evt,
						callback: cb
					}
				);
			}
		}
	}
})();
</script><!-- Mailchimp for WordPress v4.9.2 - https://wordpress.org/plugins/mailchimp-for-wp/ --><form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-13205" method="post" data-id="13205" data-name="Subscribe" ><div class="mc4wp-form-fields"><p>
	<label>
		<input type="email" name="EMAIL" placeholder="Enter your email..." required />
	</label>
</p>
<p>
  <button type="submit"><i class="fa fa-rss"></i></button>
</p></div><label style="display: none !important;">Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" /></label><input type="hidden" name="_mc4wp_timestamp" value="1680853964" /><input type="hidden" name="_mc4wp_form_id" value="13205" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" /><div class="mc4wp-response"></div></form><!-- / Mailchimp for WordPress Plugin -->		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-cbb161f elementor-widget elementor-widget-text-editor" data-id="cbb161f" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p>Get latest updates and offers.</p>
						</div>
				</div>
					</div>
		</div>
							</div>
		</section>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-fd505d1 elementor-section-content-space-between elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="fd505d1" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e16d1bb" data-id="e16d1bb" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-10fb40f elementor-widget elementor-widget-copyright" data-id="10fb40f" data-element_type="widget" data-widget_type="copyright.default">
				<div class="elementor-widget-container">
					<div class="hfe-copyright-wrapper">
							<span>© 2021 Taxpert Professionals</span>
					</div>
				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-206d5f7" data-id="206d5f7" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-7bb8d0f elementor-view-stacked elementor-widget__width-auto elementor-shape-circle elementor-widget elementor-widget-icon" data-id="7bb8d0f" data-element_type="widget" data-widget_type="icon.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-wrapper">
			<a class="elementor-icon" href="tel:+919326002456" target="_blank">
			<i aria-hidden="true" class=" stm-contact_phone"></i>			</a>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-daa67cb elementor-view-stacked elementor-widget__width-auto elementor-shape-circle elementor-widget elementor-widget-icon" data-id="daa67cb" data-element_type="widget" data-widget_type="icon.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-wrapper">
			<a class="elementor-icon" href="https://www.linkedin.com/company/taxpert-global-solutions/">
			<i aria-hidden="true" class="fab fa-linkedin"></i>			</a>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-5fccf04 elementor-view-stacked elementor-widget__width-auto elementor-shape-circle elementor-widget elementor-widget-icon" data-id="5fccf04" data-element_type="widget" data-widget_type="icon.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-wrapper">
			<a class="elementor-icon" href="https://instagram.com/managemyexpat?igshid=ZDdkNTZiNTM=%20">
			<i aria-hidden="true" class="fab fa-instagram"></i>			</a>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-cef8b33 elementor-view-stacked elementor-widget__width-auto elementor-shape-circle elementor-widget elementor-widget-icon" data-id="cef8b33" data-element_type="widget" data-widget_type="icon.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-wrapper">
			<a class="elementor-icon" href="http://wa.me/+919769033172">
			<i aria-hidden="true" class="fab fa-whatsapp"></i>			</a>
		</div>
				</div>
				</div>
					</div>
		</div>
							</div>
		</section>
					</div>
		</div>
							</div>
		</section>
							</div>
		</div>		</footer>
	</div><!-- #page -->

		<script>
			window.RS_MODULES = window.RS_MODULES || {};
			window.RS_MODULES.modules = window.RS_MODULES.modules || {};
			window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
			window.RS_MODULES.defered = true;
			window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
			window.RS_MODULES.type = 'compiled';
		</script>
				<!-- Memberships powered by Paid Memberships Pro v2.10.3. -->
	        <script type="text/javascript">
			var xlwcty_info = [];        </script>
		<script>(function() {function maybePrefixUrlField () {
  const value = this.value.trim()
  if (value !== '' && value.indexOf('http') !== 0) {
    this.value = 'http://' + value
  }
}

const urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]')
for (let j = 0; j < urlFields.length; j++) {
  urlFields[j].addEventListener('blur', maybePrefixUrlField)
}
})();</script><!-- Instagram Feed JS -->
<script type="text/javascript">
var sbiajaxurl = "https://itstest.websinova.com/wp-admin/admin-ajax.php";
</script>
<script type="text/template" id="tmpl-elementor-templates-modal__header">
	<div class="elementor-templates-modal__header__logo-area"></div>
	<div class="elementor-templates-modal__header__menu-area"></div>
	<div class="elementor-templates-modal__header__items-area">
		<# if ( closeType ) { #>
			<div class="elementor-templates-modal__header__close elementor-templates-modal__header__close--{{{ closeType }}} elementor-templates-modal__header__item">
				<# if ( 'skip' === closeType ) { #>
				<span>Skip</span>
				<# } #>
				<i class="eicon-close" aria-hidden="true" title="Close"></i>
				<span class="elementor-screen-only">Close</span>
			</div>
		<# } #>
		<div id="elementor-template-library-header-tools"></div>
	</div>
</script>

<script type="text/template" id="tmpl-elementor-templates-modal__header__logo">
	<span class="elementor-templates-modal__header__logo__icon-wrapper e-logo-wrapper">
		<i class="eicon-elementor"></i>
	</span>
	<span class="elementor-templates-modal__header__logo__title">{{{ title }}}</span>
</script>
<script type="text/template" id="tmpl-elementor-finder">
	<div id="elementor-finder__search">
		<i class="eicon-search"></i>
		<input id="elementor-finder__search__input" placeholder="Type to find anything in Elementor" autocomplete="off">
	</div>
	<div id="elementor-finder__content"></div>
</script>

<script type="text/template" id="tmpl-elementor-finder-results-container">
	<div id="elementor-finder__no-results">No Results Found</div>
	<div id="elementor-finder__results"></div>
</script>

<script type="text/template" id="tmpl-elementor-finder__results__category">
	<div class="elementor-finder__results__category__title">{{{ title }}}</div>
	<div class="elementor-finder__results__category__items"></div>
</script>

<script type="text/template" id="tmpl-elementor-finder__results__item">
	<a href="{{ url }}" class="elementor-finder__results__item__link">
		<div class="elementor-finder__results__item__icon">
			<i class="eicon-{{{ icon }}}"></i>
		</div>
		<div class="elementor-finder__results__item__title">{{{ title }}}</div>
		<# if ( description ) { #>
			<div class="elementor-finder__results__item__description">- {{{ description }}}</div>
		<# } #>

		<# if ( lock ) { #>
		<div class="elementor-finder__results__item__badge"><i class="{{{ lock.badge.icon }}}"></i>{{ lock.badge.text }}</div>
		<# } #>
	</a>
	<# if ( actions.length ) { #>
		<div class="elementor-finder__results__item__actions">
		<# jQuery.each( actions, function() { #>
			<a class="elementor-finder__results__item__action elementor-finder__results__item__action--{{ this.name }}" href="{{ this.url }}" target="_blank">
				<i class="eicon-{{{ this.icon }}}"></i>
			</a>
		<# } ); #>
		</div>
	<# } #>
</script>

		<script type="text/html" id="tmpl-media-frame">
		<div class="media-frame-title" id="media-frame-title"></div>
		<h2 class="media-frame-menu-heading">Actions</h2>
		<button type="button" class="button button-link media-frame-menu-toggle" aria-expanded="false">
			Menu			<span class="dashicons dashicons-arrow-down" aria-hidden="true"></span>
		</button>
		<div class="media-frame-menu"></div>
		<div class="media-frame-tab-panel">
			<div class="media-frame-router"></div>
			<div class="media-frame-content"></div>
		</div>
		<h2 class="media-frame-actions-heading screen-reader-text">
		Selected media actions		</h2>
		<div class="media-frame-toolbar"></div>
		<div class="media-frame-uploader"></div>
	</script>

		<script type="text/html" id="tmpl-media-modal">
		<div tabindex="0" class="media-modal wp-core-ui" role="dialog" aria-labelledby="media-frame-title">
			<# if ( data.hasCloseButton ) { #>
				<button type="button" class="media-modal-close"><span class="media-modal-icon"><span class="screen-reader-text">Close dialog</span></span></button>
			<# } #>
			<div class="media-modal-content" role="document"></div>
		</div>
		<div class="media-modal-backdrop"></div>
	</script>

		<script type="text/html" id="tmpl-uploader-window">
		<div class="uploader-window-content">
			<div class="uploader-editor-title">Drop files to upload</div>
		</div>
	</script>

		<script type="text/html" id="tmpl-uploader-editor">
		<div class="uploader-editor-content">
			<div class="uploader-editor-title">Drop files to upload</div>
		</div>
	</script>

		<script type="text/html" id="tmpl-uploader-inline">
		<# var messageClass = data.message ? 'has-upload-message' : 'no-upload-message'; #>
		<# if ( data.canClose ) { #>
		<button class="close dashicons dashicons-no"><span class="screen-reader-text">Close uploader</span></button>
		<# } #>
		<div class="uploader-inline-content {{ messageClass }}">
		<# if ( data.message ) { #>
			<h2 class="upload-message">{{ data.message }}</h2>
		<# } #>
					<div class="upload-ui">
				<h2 class="upload-instructions drop-instructions">Drop files to upload</h2>
				<p class="upload-instructions drop-instructions">or</p>
				<button type="button" class="browser button button-hero" aria-labelledby="post-upload-info">Select Files</button>
			</div>

			<div class="upload-inline-status"></div>

			<div class="post-upload-ui" id="post-upload-info">
				
				<p class="max-upload-size">
				Maximum upload file size: 1 GB.				</p>

				<# if ( data.suggestedWidth && data.suggestedHeight ) { #>
					<p class="suggested-dimensions">
						Suggested image dimensions: {{data.suggestedWidth}} by {{data.suggestedHeight}} pixels.					</p>
				<# } #>

							</div>
				</div>
	</script>

		<script type="text/html" id="tmpl-media-library-view-switcher">
		<a href="https://itstest.websinova.com/wp-admin/upload.php?mode=list" class="view-list">
			<span class="screen-reader-text">List view</span>
		</a>
		<a href="https://itstest.websinova.com/wp-admin/upload.php?mode=grid" class="view-grid current" aria-current="page">
			<span class="screen-reader-text">Grid view</span>
		</a>
	</script>

		<script type="text/html" id="tmpl-uploader-status">
		<h2>Uploading</h2>

		<div class="media-progress-bar"><div></div></div>
		<div class="upload-details">
			<span class="upload-count">
				<span class="upload-index"></span> / <span class="upload-total"></span>
			</span>
			<span class="upload-detail-separator">&ndash;</span>
			<span class="upload-filename"></span>
		</div>
		<div class="upload-errors"></div>
		<button type="button" class="button upload-dismiss-errors">Dismiss errors</button>
	</script>

		<script type="text/html" id="tmpl-uploader-status-error">
		<span class="upload-error-filename">{{{ data.filename }}}</span>
		<span class="upload-error-message">{{ data.message }}</span>
	</script>

		<script type="text/html" id="tmpl-edit-attachment-frame">
		<div class="edit-media-header">
			<button class="left dashicons"<# if ( ! data.hasPrevious ) { #> disabled<# } #>><span class="screen-reader-text">Edit previous media item</span></button>
			<button class="right dashicons"<# if ( ! data.hasNext ) { #> disabled<# } #>><span class="screen-reader-text">Edit next media item</span></button>
			<button type="button" class="media-modal-close"><span class="media-modal-icon"><span class="screen-reader-text">Close dialog</span></span></button>
		</div>
		<div class="media-frame-title"></div>
		<div class="media-frame-content"></div>
	</script>

		<script type="text/html" id="tmpl-attachment-details-two-column">
		<div class="attachment-media-view {{ data.orientation }}">
			<h2 class="screen-reader-text">Attachment Preview</h2>
			<div class="thumbnail thumbnail-{{ data.type }}">
				<# if ( data.uploading ) { #>
					<div class="media-progress-bar"><div></div></div>
				<# } else if ( data.sizes && data.sizes.large ) { #>
					<img class="details-image" src="{{ data.sizes.large.url }}" draggable="false" alt="" />
				<# } else if ( data.sizes && data.sizes.full ) { #>
					<img class="details-image" src="{{ data.sizes.full.url }}" draggable="false" alt="" />
				<# } else if ( -1 === jQuery.inArray( data.type, [ 'audio', 'video' ] ) ) { #>
					<img class="details-image icon" src="{{ data.icon }}" draggable="false" alt="" />
				<# } #>

				<# if ( 'audio' === data.type ) { #>
				<div class="wp-media-wrapper wp-audio">
					<audio style="visibility: hidden" controls class="wp-audio-shortcode" width="100%" preload="none">
						<source type="{{ data.mime }}" src="{{ data.url }}" />
					</audio>
				</div>
				<# } else if ( 'video' === data.type ) {
					var w_rule = '';
					if ( data.width ) {
						w_rule = 'width: ' + data.width + 'px;';
					} else if ( wp.media.view.settings.contentWidth ) {
						w_rule = 'width: ' + wp.media.view.settings.contentWidth + 'px;';
					}
				#>
				<div style="{{ w_rule }}" class="wp-media-wrapper wp-video">
					<video controls="controls" class="wp-video-shortcode" preload="metadata"
						<# if ( data.width ) { #>width="{{ data.width }}"<# } #>
						<# if ( data.height ) { #>height="{{ data.height }}"<# } #>
						<# if ( data.image && data.image.src !== data.icon ) { #>poster="{{ data.image.src }}"<# } #>>
						<source type="{{ data.mime }}" src="{{ data.url }}" />
					</video>
				</div>
				<# } #>

				<div class="attachment-actions">
					<# if ( 'image' === data.type && ! data.uploading && data.sizes && data.can.save ) { #>
					<button type="button" class="button edit-attachment">Edit Image</button>
					<# } else if ( 'pdf' === data.subtype && data.sizes ) { #>
					<p>Document Preview</p>
					<# } #>
				</div>
			</div>
		</div>
		<div class="attachment-info">
			<span class="settings-save-status" role="status">
				<span class="spinner"></span>
				<span class="saved">Saved.</span>
			</span>
			<div class="details">
				<h2 class="screen-reader-text">Details</h2>
				<div class="uploaded"><strong>Uploaded on:</strong> {{ data.dateFormatted }}</div>
				<div class="uploaded-by">
					<strong>Uploaded by:</strong>
						<# if ( data.authorLink ) { #>
							<a href="{{ data.authorLink }}">{{ data.authorName }}</a>
						<# } else { #>
							{{ data.authorName }}
						<# } #>
				</div>
				<# if ( data.uploadedToTitle ) { #>
					<div class="uploaded-to">
						<strong>Uploaded to:</strong>
						<# if ( data.uploadedToLink ) { #>
							<a href="{{ data.uploadedToLink }}">{{ data.uploadedToTitle }}</a>
						<# } else { #>
							{{ data.uploadedToTitle }}
						<# } #>
					</div>
				<# } #>
				<div class="filename"><strong>File name:</strong> {{ data.filename }}</div>
				<div class="file-type"><strong>File type:</strong> {{ data.mime }}</div>
				<div class="file-size"><strong>File size:</strong> {{ data.filesizeHumanReadable }}</div>
				<# if ( 'image' === data.type && ! data.uploading ) { #>
					<# if ( data.width && data.height ) { #>
						<div class="dimensions"><strong>Dimensions:</strong>
							{{ data.width }} by {{ data.height }} pixels						</div>
					<# } #>

					<# if ( data.originalImageURL && data.originalImageName ) { #>
						<div class="word-wrap-break-word">
							Original image:							<a href="{{ data.originalImageURL }}">{{data.originalImageName}}</a>
						</div>
					<# } #>
				<# } #>

				<# if ( data.fileLength && data.fileLengthHumanReadable ) { #>
					<div class="file-length"><strong>Length:</strong>
						<span aria-hidden="true">{{ data.fileLength }}</span>
						<span class="screen-reader-text">{{ data.fileLengthHumanReadable }}</span>
					</div>
				<# } #>

				<# if ( 'audio' === data.type && data.meta.bitrate ) { #>
					<div class="bitrate">
						<strong>Bitrate:</strong> {{ Math.round( data.meta.bitrate / 1000 ) }}kb/s
						<# if ( data.meta.bitrate_mode ) { #>
						{{ ' ' + data.meta.bitrate_mode.toUpperCase() }}
						<# } #>
					</div>
				<# } #>

				<# if ( data.mediaStates ) { #>
					<div class="media-states"><strong>Used as:</strong> {{ data.mediaStates }}</div>
				<# } #>

				<div class="compat-meta">
					<# if ( data.compat && data.compat.meta ) { #>
						{{{ data.compat.meta }}}
					<# } #>
				</div>
			</div>

			<div class="settings">
				<# var maybeReadOnly = data.can.save || data.allowLocalEdits ? '' : 'readonly'; #>
				<# if ( 'image' === data.type ) { #>
					<span class="setting alt-text has-description" data-setting="alt">
						<label for="attachment-details-two-column-alt-text" class="name">Alternative Text</label>
						<textarea id="attachment-details-two-column-alt-text" aria-describedby="alt-text-description" {{ maybeReadOnly }}>{{ data.alt }}</textarea>
					</span>
					<p class="description" id="alt-text-description"><a href="https://www.w3.org/WAI/tutorials/images/decision-tree" target="_blank" rel="noopener">Learn how to describe the purpose of the image<span class="screen-reader-text"> (opens in a new tab)</span></a>. Leave empty if the image is purely decorative.</p>
				<# } #>
								<span class="setting" data-setting="title">
					<label for="attachment-details-two-column-title" class="name">Title</label>
					<input type="text" id="attachment-details-two-column-title" value="{{ data.title }}" {{ maybeReadOnly }} />
				</span>
								<# if ( 'audio' === data.type ) { #>
								<span class="setting" data-setting="artist">
					<label for="attachment-details-two-column-artist" class="name">Artist</label>
					<input type="text" id="attachment-details-two-column-artist" value="{{ data.artist || data.meta.artist || '' }}" />
				</span>
								<span class="setting" data-setting="album">
					<label for="attachment-details-two-column-album" class="name">Album</label>
					<input type="text" id="attachment-details-two-column-album" value="{{ data.album || data.meta.album || '' }}" />
				</span>
								<# } #>
				<span class="setting" data-setting="caption">
					<label for="attachment-details-two-column-caption" class="name">Caption</label>
					<textarea id="attachment-details-two-column-caption" {{ maybeReadOnly }}>{{ data.caption }}</textarea>
				</span>
				<span class="setting" data-setting="description">
					<label for="attachment-details-two-column-description" class="name">Description</label>
					<textarea id="attachment-details-two-column-description" {{ maybeReadOnly }}>{{ data.description }}</textarea>
				</span>
				<span class="setting" data-setting="url">
					<label for="attachment-details-two-column-copy-link" class="name">File URL:</label>
					<input type="text" class="attachment-details-copy-link" id="attachment-details-two-column-copy-link" value="{{ data.url }}" readonly />
					<span class="copy-to-clipboard-container">
						<button type="button" class="button button-small copy-attachment-url" data-clipboard-target="#attachment-details-two-column-copy-link">Copy URL to clipboard</button>
						<span class="success hidden" aria-hidden="true">Copied!</span>
					</span>
				</span>
				<div class="attachment-compat"></div>
			</div>

			<div class="actions">
				<# if ( data.link ) { #>
					<a class="view-attachment" href="{{ data.link }}">View attachment page</a>
				<# } #>
				<# if ( data.can.save ) { #>
					<# if ( data.link ) { #>
						<span class="links-separator">|</span>
					<# } #>
					<a href="{{ data.editLink }}">Edit more details</a>
				<# } #>
				<# if ( ! data.uploading && data.can.remove ) { #>
					<# if ( data.link || data.can.save ) { #>
						<span class="links-separator">|</span>
					<# } #>
											<button type="button" class="button-link delete-attachment">Delete permanently</button>
									<# } #>
			</div>
		</div>
	</script>

		<script type="text/html" id="tmpl-attachment">
		<div class="attachment-preview js--select-attachment type-{{ data.type }} subtype-{{ data.subtype }} {{ data.orientation }}">
			<div class="thumbnail">
				<# if ( data.uploading ) { #>
					<div class="media-progress-bar"><div style="width: {{ data.percent }}%"></div></div>
				<# } else if ( 'image' === data.type && data.size && data.size.url ) { #>
					<div class="centered">
						<img src="{{ data.size.url }}" draggable="false" alt="" />
					</div>
				<# } else { #>
					<div class="centered">
						<# if ( data.image && data.image.src && data.image.src !== data.icon ) { #>
							<img src="{{ data.image.src }}" class="thumbnail" draggable="false" alt="" />
						<# } else if ( data.sizes && data.sizes.medium ) { #>
							<img src="{{ data.sizes.medium.url }}" class="thumbnail" draggable="false" alt="" />
						<# } else { #>
							<img src="{{ data.icon }}" class="icon" draggable="false" alt="" />
						<# } #>
					</div>
					<div class="filename">
						<div>{{ data.filename }}</div>
					</div>
				<# } #>
			</div>
			<# if ( data.buttons.close ) { #>
				<button type="button" class="button-link attachment-close media-modal-icon"><span class="screen-reader-text">Remove</span></button>
			<# } #>
		</div>
		<# if ( data.buttons.check ) { #>
			<button type="button" class="check" tabindex="-1"><span class="media-modal-icon"></span><span class="screen-reader-text">Deselect</span></button>
		<# } #>
		<#
		var maybeReadOnly = data.can.save || data.allowLocalEdits ? '' : 'readonly';
		if ( data.describe ) {
			if ( 'image' === data.type ) { #>
				<input type="text" value="{{ data.caption }}" class="describe" data-setting="caption"
					aria-label="Caption"
					placeholder="Caption&hellip;" {{ maybeReadOnly }} />
			<# } else { #>
				<input type="text" value="{{ data.title }}" class="describe" data-setting="title"
					<# if ( 'video' === data.type ) { #>
						aria-label="Video title"
						placeholder="Video title&hellip;"
					<# } else if ( 'audio' === data.type ) { #>
						aria-label="Audio title"
						placeholder="Audio title&hellip;"
					<# } else { #>
						aria-label="Media title"
						placeholder="Media title&hellip;"
					<# } #> {{ maybeReadOnly }} />
			<# }
		} #>
	</script>

		<script type="text/html" id="tmpl-attachment-details">
		<h2>
			Attachment Details			<span class="settings-save-status" role="status">
				<span class="spinner"></span>
				<span class="saved">Saved.</span>
			</span>
		</h2>
		<div class="attachment-info">

			<# if ( 'audio' === data.type ) { #>
				<div class="wp-media-wrapper wp-audio">
					<audio style="visibility: hidden" controls class="wp-audio-shortcode" width="100%" preload="none">
						<source type="{{ data.mime }}" src="{{ data.url }}" />
					</audio>
				</div>
			<# } else if ( 'video' === data.type ) {
				var w_rule = '';
				if ( data.width ) {
					w_rule = 'width: ' + data.width + 'px;';
				} else if ( wp.media.view.settings.contentWidth ) {
					w_rule = 'width: ' + wp.media.view.settings.contentWidth + 'px;';
				}
			#>
				<div style="{{ w_rule }}" class="wp-media-wrapper wp-video">
					<video controls="controls" class="wp-video-shortcode" preload="metadata"
						<# if ( data.width ) { #>width="{{ data.width }}"<# } #>
						<# if ( data.height ) { #>height="{{ data.height }}"<# } #>
						<# if ( data.image && data.image.src !== data.icon ) { #>poster="{{ data.image.src }}"<# } #>>
						<source type="{{ data.mime }}" src="{{ data.url }}" />
					</video>
				</div>
			<# } else { #>
				<div class="thumbnail thumbnail-{{ data.type }}">
					<# if ( data.uploading ) { #>
						<div class="media-progress-bar"><div></div></div>
					<# } else if ( 'image' === data.type && data.size && data.size.url ) { #>
						<img src="{{ data.size.url }}" draggable="false" alt="" />
					<# } else { #>
						<img src="{{ data.icon }}" class="icon" draggable="false" alt="" />
					<# } #>
				</div>
			<# } #>

			<div class="details">
				<div class="filename">{{ data.filename }}</div>
				<div class="uploaded">{{ data.dateFormatted }}</div>

				<div class="file-size">{{ data.filesizeHumanReadable }}</div>
				<# if ( 'image' === data.type && ! data.uploading ) { #>
					<# if ( data.width && data.height ) { #>
						<div class="dimensions">
							{{ data.width }} by {{ data.height }} pixels						</div>
					<# } #>

					<# if ( data.originalImageURL && data.originalImageName ) { #>
						<div class="word-wrap-break-word">
							Original image:							<a href="{{ data.originalImageURL }}">{{data.originalImageName}}</a>
						</div>
					<# } #>

					<# if ( data.can.save && data.sizes ) { #>
						<a class="edit-attachment" href="{{ data.editLink }}&amp;image-editor" target="_blank">Edit Image</a>
					<# } #>
				<# } #>

				<# if ( data.fileLength && data.fileLengthHumanReadable ) { #>
					<div class="file-length">Length:						<span aria-hidden="true">{{ data.fileLength }}</span>
						<span class="screen-reader-text">{{ data.fileLengthHumanReadable }}</span>
					</div>
				<# } #>

				<# if ( data.mediaStates ) { #>
					<div class="media-states"><strong>Used as:</strong> {{ data.mediaStates }}</div>
				<# } #>

				<# if ( ! data.uploading && data.can.remove ) { #>
											<button type="button" class="button-link delete-attachment">Delete permanently</button>
									<# } #>

				<div class="compat-meta">
					<# if ( data.compat && data.compat.meta ) { #>
						{{{ data.compat.meta }}}
					<# } #>
				</div>
			</div>
		</div>
		<# var maybeReadOnly = data.can.save || data.allowLocalEdits ? '' : 'readonly'; #>
		<# if ( 'image' === data.type ) { #>
			<span class="setting alt-text has-description" data-setting="alt">
				<label for="attachment-details-alt-text" class="name">Alt Text</label>
				<textarea id="attachment-details-alt-text" aria-describedby="alt-text-description" {{ maybeReadOnly }}>{{ data.alt }}</textarea>
			</span>
			<p class="description" id="alt-text-description"><a href="https://www.w3.org/WAI/tutorials/images/decision-tree" target="_blank" rel="noopener">Learn how to describe the purpose of the image<span class="screen-reader-text"> (opens in a new tab)</span></a>. Leave empty if the image is purely decorative.</p>
		<# } #>
				<span class="setting" data-setting="title">
			<label for="attachment-details-title" class="name">Title</label>
			<input type="text" id="attachment-details-title" value="{{ data.title }}" {{ maybeReadOnly }} />
		</span>
				<# if ( 'audio' === data.type ) { #>
				<span class="setting" data-setting="artist">
			<label for="attachment-details-artist" class="name">Artist</label>
			<input type="text" id="attachment-details-artist" value="{{ data.artist || data.meta.artist || '' }}" />
		</span>
				<span class="setting" data-setting="album">
			<label for="attachment-details-album" class="name">Album</label>
			<input type="text" id="attachment-details-album" value="{{ data.album || data.meta.album || '' }}" />
		</span>
				<# } #>
		<span class="setting" data-setting="caption">
			<label for="attachment-details-caption" class="name">Caption</label>
			<textarea id="attachment-details-caption" {{ maybeReadOnly }}>{{ data.caption }}</textarea>
		</span>
		<span class="setting" data-setting="description">
			<label for="attachment-details-description" class="name">Description</label>
			<textarea id="attachment-details-description" {{ maybeReadOnly }}>{{ data.description }}</textarea>
		</span>
		<span class="setting" data-setting="url">
			<label for="attachment-details-copy-link" class="name">File URL:</label>
			<input type="text" class="attachment-details-copy-link" id="attachment-details-copy-link" value="{{ data.url }}" readonly />
			<div class="copy-to-clipboard-container">
				<button type="button" class="button button-small copy-attachment-url" data-clipboard-target="#attachment-details-copy-link">Copy URL to clipboard</button>
				<span class="success hidden" aria-hidden="true">Copied!</span>
			</div>
		</span>
	</script>

		<script type="text/html" id="tmpl-media-selection">
		<div class="selection-info">
			<span class="count"></span>
			<# if ( data.editable ) { #>
				<button type="button" class="button-link edit-selection">Edit Selection</button>
			<# } #>
			<# if ( data.clearable ) { #>
				<button type="button" class="button-link clear-selection">Clear</button>
			<# } #>
		</div>
		<div class="selection-view"></div>
	</script>

		<script type="text/html" id="tmpl-attachment-display-settings">
		<h2>Attachment Display Settings</h2>

		<# if ( 'image' === data.type ) { #>
			<span class="setting align">
				<label for="attachment-display-settings-alignment" class="name">Alignment</label>
				<select id="attachment-display-settings-alignment" class="alignment"
					data-setting="align"
					<# if ( data.userSettings ) { #>
						data-user-setting="align"
					<# } #>>

					<option value="left">
						Left					</option>
					<option value="center">
						Center					</option>
					<option value="right">
						Right					</option>
					<option value="none" selected>
						None					</option>
				</select>
			</span>
		<# } #>

		<span class="setting">
			<label for="attachment-display-settings-link-to" class="name">
				<# if ( data.model.canEmbed ) { #>
					Embed or Link				<# } else { #>
					Link To				<# } #>
			</label>
			<select id="attachment-display-settings-link-to" class="link-to"
				data-setting="link"
				<# if ( data.userSettings && ! data.model.canEmbed ) { #>
					data-user-setting="urlbutton"
				<# } #>>

			<# if ( data.model.canEmbed ) { #>
				<option value="embed" selected>
					Embed Media Player				</option>
				<option value="file">
			<# } else { #>
				<option value="none" selected>
					None				</option>
				<option value="file">
			<# } #>
				<# if ( data.model.canEmbed ) { #>
					Link to Media File				<# } else { #>
					Media File				<# } #>
				</option>
				<option value="post">
				<# if ( data.model.canEmbed ) { #>
					Link to Attachment Page				<# } else { #>
					Attachment Page				<# } #>
				</option>
			<# if ( 'image' === data.type ) { #>
				<option value="custom">
					Custom URL				</option>
			<# } #>
			</select>
		</span>
		<span class="setting">
			<label for="attachment-display-settings-link-to-custom" class="name">URL</label>
			<input type="text" id="attachment-display-settings-link-to-custom" class="link-to-custom" data-setting="linkUrl" />
		</span>

		<# if ( 'undefined' !== typeof data.sizes ) { #>
			<span class="setting">
				<label for="attachment-display-settings-size" class="name">Size</label>
				<select id="attachment-display-settings-size" class="size" name="size"
					data-setting="size"
					<# if ( data.userSettings ) { #>
						data-user-setting="imgsize"
					<# } #>>
											<#
						var size = data.sizes['thumbnail'];
						if ( size ) { #>
							<option value="thumbnail" >
								Thumbnail &ndash; {{ size.width }} &times; {{ size.height }}
							</option>
						<# } #>
											<#
						var size = data.sizes['medium'];
						if ( size ) { #>
							<option value="medium" >
								Medium &ndash; {{ size.width }} &times; {{ size.height }}
							</option>
						<# } #>
											<#
						var size = data.sizes['large'];
						if ( size ) { #>
							<option value="large" >
								Large &ndash; {{ size.width }} &times; {{ size.height }}
							</option>
						<# } #>
											<#
						var size = data.sizes['full'];
						if ( size ) { #>
							<option value="full"  selected='selected'>
								Full Size &ndash; {{ size.width }} &times; {{ size.height }}
							</option>
						<# } #>
									</select>
			</span>
		<# } #>
	</script>

		<script type="text/html" id="tmpl-gallery-settings">
		<h2>Gallery Settings</h2>

		<span class="setting">
			<label for="gallery-settings-link-to" class="name">Link To</label>
			<select id="gallery-settings-link-to" class="link-to"
				data-setting="link"
				<# if ( data.userSettings ) { #>
					data-user-setting="urlbutton"
				<# } #>>

				<option value="post" <# if ( ! wp.media.galleryDefaults.link || 'post' === wp.media.galleryDefaults.link ) {
					#>selected="selected"<# }
				#>>
					Attachment Page				</option>
				<option value="file" <# if ( 'file' === wp.media.galleryDefaults.link ) { #>selected="selected"<# } #>>
					Media File				</option>
				<option value="none" <# if ( 'none' === wp.media.galleryDefaults.link ) { #>selected="selected"<# } #>>
					None				</option>
			</select>
		</span>

		<span class="setting">
			<label for="gallery-settings-columns" class="name select-label-inline">Columns</label>
			<select id="gallery-settings-columns" class="columns" name="columns"
				data-setting="columns">
									<option value="1" <#
						if ( 1 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						1					</option>
									<option value="2" <#
						if ( 2 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						2					</option>
									<option value="3" <#
						if ( 3 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						3					</option>
									<option value="4" <#
						if ( 4 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						4					</option>
									<option value="5" <#
						if ( 5 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						5					</option>
									<option value="6" <#
						if ( 6 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						6					</option>
									<option value="7" <#
						if ( 7 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						7					</option>
									<option value="8" <#
						if ( 8 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						8					</option>
									<option value="9" <#
						if ( 9 == wp.media.galleryDefaults.columns ) { #>selected="selected"<# }
					#>>
						9					</option>
							</select>
		</span>

		<span class="setting">
			<input type="checkbox" id="gallery-settings-random-order" data-setting="_orderbyRandom" />
			<label for="gallery-settings-random-order" class="checkbox-label-inline">Random Order</label>
		</span>

		<span class="setting size">
			<label for="gallery-settings-size" class="name">Size</label>
			<select id="gallery-settings-size" class="size" name="size"
				data-setting="size"
				<# if ( data.userSettings ) { #>
					data-user-setting="imgsize"
				<# } #>
				>
									<option value="thumbnail">
						Thumbnail					</option>
									<option value="medium">
						Medium					</option>
									<option value="large">
						Large					</option>
									<option value="full">
						Full Size					</option>
							</select>
		</span>
	</script>

		<script type="text/html" id="tmpl-playlist-settings">
		<h2>Playlist Settings</h2>

		<# var emptyModel = _.isEmpty( data.model ),
			isVideo = 'video' === data.controller.get('library').props.get('type'); #>

		<span class="setting">
			<input type="checkbox" id="playlist-settings-show-list" data-setting="tracklist" <# if ( emptyModel ) { #>
				checked="checked"
			<# } #> />
			<label for="playlist-settings-show-list" class="checkbox-label-inline">
				<# if ( isVideo ) { #>
				Show Video List				<# } else { #>
				Show Tracklist				<# } #>
			</label>
		</span>

		<# if ( ! isVideo ) { #>
		<span class="setting">
			<input type="checkbox" id="playlist-settings-show-artist" data-setting="artists" <# if ( emptyModel ) { #>
				checked="checked"
			<# } #> />
			<label for="playlist-settings-show-artist" class="checkbox-label-inline">
				Show Artist Name in Tracklist			</label>
		</span>
		<# } #>

		<span class="setting">
			<input type="checkbox" id="playlist-settings-show-images" data-setting="images" <# if ( emptyModel ) { #>
				checked="checked"
			<# } #> />
			<label for="playlist-settings-show-images" class="checkbox-label-inline">
				Show Images			</label>
		</span>
	</script>

		<script type="text/html" id="tmpl-embed-link-settings">
		<span class="setting link-text">
			<label for="embed-link-settings-link-text" class="name">Link Text</label>
			<input type="text" id="embed-link-settings-link-text" class="alignment" data-setting="linkText" />
		</span>
		<div class="embed-container" style="display: none;">
			<div class="embed-preview"></div>
		</div>
	</script>

		<script type="text/html" id="tmpl-embed-image-settings">
		<div class="wp-clearfix">
			<div class="thumbnail">
				<img src="{{ data.model.url }}" draggable="false" alt="" />
			</div>
		</div>

		<span class="setting alt-text has-description">
			<label for="embed-image-settings-alt-text" class="name">Alternative Text</label>
			<textarea id="embed-image-settings-alt-text" data-setting="alt" aria-describedby="alt-text-description"></textarea>
		</span>
		<p class="description" id="alt-text-description"><a href="https://www.w3.org/WAI/tutorials/images/decision-tree" target="_blank" rel="noopener">Learn how to describe the purpose of the image<span class="screen-reader-text"> (opens in a new tab)</span></a>. Leave empty if the image is purely decorative.</p>

					<span class="setting caption">
				<label for="embed-image-settings-caption" class="name">Caption</label>
				<textarea id="embed-image-settings-caption" data-setting="caption"></textarea>
			</span>
		
		<fieldset class="setting-group">
			<legend class="name">Align</legend>
			<span class="setting align">
				<span class="button-group button-large" data-setting="align">
					<button class="button" value="left">
						Left					</button>
					<button class="button" value="center">
						Center					</button>
					<button class="button" value="right">
						Right					</button>
					<button class="button active" value="none">
						None					</button>
				</span>
			</span>
		</fieldset>

		<fieldset class="setting-group">
			<legend class="name">Link To</legend>
			<span class="setting link-to">
				<span class="button-group button-large" data-setting="link">
					<button class="button" value="file">
						Image URL					</button>
					<button class="button" value="custom">
						Custom URL					</button>
					<button class="button active" value="none">
						None					</button>
				</span>
			</span>
			<span class="setting">
				<label for="embed-image-settings-link-to-custom" class="name">URL</label>
				<input type="text" id="embed-image-settings-link-to-custom" class="link-to-custom" data-setting="linkUrl" />
			</span>
		</fieldset>
	</script>

		<script type="text/html" id="tmpl-image-details">
		<div class="media-embed">
			<div class="embed-media-settings">
				<div class="column-settings">
					<span class="setting alt-text has-description">
						<label for="image-details-alt-text" class="name">Alternative Text</label>
						<textarea id="image-details-alt-text" data-setting="alt" aria-describedby="alt-text-description">{{ data.model.alt }}</textarea>
					</span>
					<p class="description" id="alt-text-description"><a href="https://www.w3.org/WAI/tutorials/images/decision-tree" target="_blank" rel="noopener">Learn how to describe the purpose of the image<span class="screen-reader-text"> (opens in a new tab)</span></a>. Leave empty if the image is purely decorative.</p>

											<span class="setting caption">
							<label for="image-details-caption" class="name">Caption</label>
							<textarea id="image-details-caption" data-setting="caption">{{ data.model.caption }}</textarea>
						</span>
					
					<h2>Display Settings</h2>
					<fieldset class="setting-group">
						<legend class="legend-inline">Align</legend>
						<span class="setting align">
							<span class="button-group button-large" data-setting="align">
								<button class="button" value="left">
									Left								</button>
								<button class="button" value="center">
									Center								</button>
								<button class="button" value="right">
									Right								</button>
								<button class="button active" value="none">
									None								</button>
							</span>
						</span>
					</fieldset>

					<# if ( data.attachment ) { #>
						<# if ( 'undefined' !== typeof data.attachment.sizes ) { #>
							<span class="setting size">
								<label for="image-details-size" class="name">Size</label>
								<select id="image-details-size" class="size" name="size"
									data-setting="size"
									<# if ( data.userSettings ) { #>
										data-user-setting="imgsize"
									<# } #>>
																			<#
										var size = data.sizes['thumbnail'];
										if ( size ) { #>
											<option value="thumbnail">
												Thumbnail &ndash; {{ size.width }} &times; {{ size.height }}
											</option>
										<# } #>
																			<#
										var size = data.sizes['medium'];
										if ( size ) { #>
											<option value="medium">
												Medium &ndash; {{ size.width }} &times; {{ size.height }}
											</option>
										<# } #>
																			<#
										var size = data.sizes['large'];
										if ( size ) { #>
											<option value="large">
												Large &ndash; {{ size.width }} &times; {{ size.height }}
											</option>
										<# } #>
																			<#
										var size = data.sizes['full'];
										if ( size ) { #>
											<option value="full">
												Full Size &ndash; {{ size.width }} &times; {{ size.height }}
											</option>
										<# } #>
																		<option value="custom">
										Custom Size									</option>
								</select>
							</span>
						<# } #>
							<div class="custom-size wp-clearfix<# if ( data.model.size !== 'custom' ) { #> hidden<# } #>">
								<span class="custom-size-setting">
									<label for="image-details-size-width">Width</label>
									<input type="number" id="image-details-size-width" aria-describedby="image-size-desc" data-setting="customWidth" step="1" value="{{ data.model.customWidth }}" />
								</span>
								<span class="sep" aria-hidden="true">&times;</span>
								<span class="custom-size-setting">
									<label for="image-details-size-height">Height</label>
									<input type="number" id="image-details-size-height" aria-describedby="image-size-desc" data-setting="customHeight" step="1" value="{{ data.model.customHeight }}" />
								</span>
								<p id="image-size-desc" class="description">Image size in pixels</p>
							</div>
					<# } #>

					<span class="setting link-to">
						<label for="image-details-link-to" class="name">Link To</label>
						<select id="image-details-link-to" data-setting="link">
						<# if ( data.attachment ) { #>
							<option value="file">
								Media File							</option>
							<option value="post">
								Attachment Page							</option>
						<# } else { #>
							<option value="file">
								Image URL							</option>
						<# } #>
							<option value="custom">
								Custom URL							</option>
							<option value="none">
								None							</option>
						</select>
					</span>
					<span class="setting">
						<label for="image-details-link-to-custom" class="name">URL</label>
						<input type="text" id="image-details-link-to-custom" class="link-to-custom" data-setting="linkUrl" />
					</span>

					<div class="advanced-section">
						<h2><button type="button" class="button-link advanced-toggle">Advanced Options</button></h2>
						<div class="advanced-settings hidden">
							<div class="advanced-image">
								<span class="setting title-text">
									<label for="image-details-title-attribute" class="name">Image Title Attribute</label>
									<input type="text" id="image-details-title-attribute" data-setting="title" value="{{ data.model.title }}" />
								</span>
								<span class="setting extra-classes">
									<label for="image-details-css-class" class="name">Image CSS Class</label>
									<input type="text" id="image-details-css-class" data-setting="extraClasses" value="{{ data.model.extraClasses }}" />
								</span>
							</div>
							<div class="advanced-link">
								<span class="setting link-target">
									<input type="checkbox" id="image-details-link-target" data-setting="linkTargetBlank" value="_blank" <# if ( data.model.linkTargetBlank ) { #>checked="checked"<# } #>>
									<label for="image-details-link-target" class="checkbox-label">Open link in a new tab</label>
								</span>
								<span class="setting link-rel">
									<label for="image-details-link-rel" class="name">Link Rel</label>
									<input type="text" id="image-details-link-rel" data-setting="linkRel" value="{{ data.model.linkRel }}" />
								</span>
								<span class="setting link-class-name">
									<label for="image-details-link-css-class" class="name">Link CSS Class</label>
									<input type="text" id="image-details-link-css-class" data-setting="linkClassName" value="{{ data.model.linkClassName }}" />
								</span>
							</div>
						</div>
					</div>
				</div>
				<div class="column-image">
					<div class="image">
						<img src="{{ data.model.url }}" draggable="false" alt="" />
						<# if ( data.attachment && window.imageEdit ) { #>
							<div class="actions">
								<input type="button" class="edit-attachment button" value="Edit Original" />
								<input type="button" class="replace-attachment button" value="Replace" />
							</div>
						<# } #>
					</div>
				</div>
			</div>
		</div>
	</script>

		<script type="text/html" id="tmpl-image-editor">
		<div id="media-head-{{ data.id }}"></div>
		<div id="image-editor-{{ data.id }}"></div>
	</script>

		<script type="text/html" id="tmpl-audio-details">
		<# var ext, html5types = {
			mp3: wp.media.view.settings.embedMimes.mp3,
			ogg: wp.media.view.settings.embedMimes.ogg
		}; #>

				<div class="media-embed media-embed-details">
			<div class="embed-media-settings embed-audio-settings">
				<audio style="visibility: hidden"
	controls
	class="wp-audio-shortcode"
	width="{{ _.isUndefined( data.model.width ) ? 400 : data.model.width }}"
	preload="{{ _.isUndefined( data.model.preload ) ? 'none' : data.model.preload }}"
	<#
		if ( ! _.isUndefined( data.model.autoplay ) && data.model.autoplay ) {
		#> autoplay<#
	}
		if ( ! _.isUndefined( data.model.loop ) && data.model.loop ) {
		#> loop<#
	}
	#>
>
	<# if ( ! _.isEmpty( data.model.src ) ) { #>
	<source src="{{ data.model.src }}" type="{{ wp.media.view.settings.embedMimes[ data.model.src.split('.').pop() ] }}" />
	<# } #>

		<# if ( ! _.isEmpty( data.model.mp3 ) ) { #>
	<source src="{{ data.model.mp3 }}" type="{{ wp.media.view.settings.embedMimes[ 'mp3' ] }}" />
	<# } #>
			<# if ( ! _.isEmpty( data.model.ogg ) ) { #>
	<source src="{{ data.model.ogg }}" type="{{ wp.media.view.settings.embedMimes[ 'ogg' ] }}" />
	<# } #>
			<# if ( ! _.isEmpty( data.model.flac ) ) { #>
	<source src="{{ data.model.flac }}" type="{{ wp.media.view.settings.embedMimes[ 'flac' ] }}" />
	<# } #>
			<# if ( ! _.isEmpty( data.model.m4a ) ) { #>
	<source src="{{ data.model.m4a }}" type="{{ wp.media.view.settings.embedMimes[ 'm4a' ] }}" />
	<# } #>
			<# if ( ! _.isEmpty( data.model.wav ) ) { #>
	<source src="{{ data.model.wav }}" type="{{ wp.media.view.settings.embedMimes[ 'wav' ] }}" />
	<# } #>
		</audio>
	
				<# if ( ! _.isEmpty( data.model.src ) ) {
					ext = data.model.src.split('.').pop();
					if ( html5types[ ext ] ) {
						delete html5types[ ext ];
					}
				#>
				<span class="setting">
					<label for="audio-details-source" class="name">URL</label>
					<input type="text" id="audio-details-source" readonly data-setting="src" value="{{ data.model.src }}" />
					<button type="button" class="button-link remove-setting">Remove audio source</button>
				</span>
				<# } #>
								<# if ( ! _.isEmpty( data.model.mp3 ) ) {
					if ( ! _.isUndefined( html5types.mp3 ) ) {
						delete html5types.mp3;
					}
				#>
				<span class="setting">
					<label for="audio-details-mp3-source" class="name">MP3</label>
					<input type="text" id="audio-details-mp3-source" readonly data-setting="mp3" value="{{ data.model.mp3 }}" />
					<button type="button" class="button-link remove-setting">Remove audio source</button>
				</span>
				<# } #>
								<# if ( ! _.isEmpty( data.model.ogg ) ) {
					if ( ! _.isUndefined( html5types.ogg ) ) {
						delete html5types.ogg;
					}
				#>
				<span class="setting">
					<label for="audio-details-ogg-source" class="name">OGG</label>
					<input type="text" id="audio-details-ogg-source" readonly data-setting="ogg" value="{{ data.model.ogg }}" />
					<button type="button" class="button-link remove-setting">Remove audio source</button>
				</span>
				<# } #>
								<# if ( ! _.isEmpty( data.model.flac ) ) {
					if ( ! _.isUndefined( html5types.flac ) ) {
						delete html5types.flac;
					}
				#>
				<span class="setting">
					<label for="audio-details-flac-source" class="name">FLAC</label>
					<input type="text" id="audio-details-flac-source" readonly data-setting="flac" value="{{ data.model.flac }}" />
					<button type="button" class="button-link remove-setting">Remove audio source</button>
				</span>
				<# } #>
								<# if ( ! _.isEmpty( data.model.m4a ) ) {
					if ( ! _.isUndefined( html5types.m4a ) ) {
						delete html5types.m4a;
					}
				#>
				<span class="setting">
					<label for="audio-details-m4a-source" class="name">M4A</label>
					<input type="text" id="audio-details-m4a-source" readonly data-setting="m4a" value="{{ data.model.m4a }}" />
					<button type="button" class="button-link remove-setting">Remove audio source</button>
				</span>
				<# } #>
								<# if ( ! _.isEmpty( data.model.wav ) ) {
					if ( ! _.isUndefined( html5types.wav ) ) {
						delete html5types.wav;
					}
				#>
				<span class="setting">
					<label for="audio-details-wav-source" class="name">WAV</label>
					<input type="text" id="audio-details-wav-source" readonly data-setting="wav" value="{{ data.model.wav }}" />
					<button type="button" class="button-link remove-setting">Remove audio source</button>
				</span>
				<# } #>
				
				<# if ( ! _.isEmpty( html5types ) ) { #>
				<fieldset class="setting-group">
					<legend class="name">Add alternate sources for maximum HTML5 playback</legend>
					<span class="setting">
						<span class="button-large">
						<# _.each( html5types, function (mime, type) { #>
							<button class="button add-media-source" data-mime="{{ mime }}">{{ type }}</button>
						<# } ) #>
						</span>
					</span>
				</fieldset>
				<# } #>

				<fieldset class="setting-group">
					<legend class="name">Preload</legend>
					<span class="setting preload">
						<span class="button-group button-large" data-setting="preload">
							<button class="button" value="auto">Auto</button>
							<button class="button" value="metadata">Metadata</button>
							<button class="button active" value="none">None</button>
						</span>
					</span>
				</fieldset>

				<span class="setting-group">
					<span class="setting checkbox-setting autoplay">
						<input type="checkbox" id="audio-details-autoplay" data-setting="autoplay" />
						<label for="audio-details-autoplay" class="checkbox-label">Autoplay</label>
					</span>

					<span class="setting checkbox-setting">
						<input type="checkbox" id="audio-details-loop" data-setting="loop" />
						<label for="audio-details-loop" class="checkbox-label">Loop</label>
					</span>
				</span>
			</div>
		</div>
	</script>

		<script type="text/html" id="tmpl-video-details">
		<# var ext, html5types = {
			mp4: wp.media.view.settings.embedMimes.mp4,
			ogv: wp.media.view.settings.embedMimes.ogv,
			webm: wp.media.view.settings.embedMimes.webm
		}; #>

				<div class="media-embed media-embed-details">
			<div class="embed-media-settings embed-video-settings">
				<div class="wp-video-holder">
				<#
				var w = ! data.model.width || data.model.width > 640 ? 640 : data.model.width,
					h = ! data.model.height ? 360 : data.model.height;

				if ( data.model.width && w !== data.model.width ) {
					h = Math.ceil( ( h * w ) / data.model.width );
				}
				#>

				<#  var w_rule = '', classes = [],
		w, h, settings = wp.media.view.settings,
		isYouTube = isVimeo = false;

	if ( ! _.isEmpty( data.model.src ) ) {
		isYouTube = data.model.src.match(/youtube|youtu\.be/);
		isVimeo = -1 !== data.model.src.indexOf('vimeo');
	}

	if ( settings.contentWidth && data.model.width >= settings.contentWidth ) {
		w = settings.contentWidth;
	} else {
		w = data.model.width;
	}

	if ( w !== data.model.width ) {
		h = Math.ceil( ( data.model.height * w ) / data.model.width );
	} else {
		h = data.model.height;
	}

	if ( w ) {
		w_rule = 'width: ' + w + 'px; ';
	}

	if ( isYouTube ) {
		classes.push( 'youtube-video' );
	}

	if ( isVimeo ) {
		classes.push( 'vimeo-video' );
	}

#>
<div style="{{ w_rule }}" class="wp-video">
<video controls
	class="wp-video-shortcode {{ classes.join( ' ' ) }}"
	<# if ( w ) { #>width="{{ w }}"<# } #>
	<# if ( h ) { #>height="{{ h }}"<# } #>
			<#
		if ( ! _.isUndefined( data.model.poster ) && data.model.poster ) {
			#> poster="{{ data.model.poster }}"<#
		} #>
			preload			="{{ _.isUndefined( data.model.preload ) ? 'metadata' : data.model.preload }}"
				<#
		if ( ! _.isUndefined( data.model.autoplay ) && data.model.autoplay ) {
		#> autoplay<#
	}
		if ( ! _.isUndefined( data.model.loop ) && data.model.loop ) {
		#> loop<#
	}
	#>
>
	<# if ( ! _.isEmpty( data.model.src ) ) {
		if ( isYouTube ) { #>
		<source src="{{ data.model.src }}" type="video/youtube" />
		<# } else if ( isVimeo ) { #>
		<source src="{{ data.model.src }}" type="video/vimeo" />
		<# } else { #>
		<source src="{{ data.model.src }}" type="{{ settings.embedMimes[ data.model.src.split('.').pop() ] }}" />
		<# }
	} #>

		<# if ( data.model.mp4 ) { #>
	<source src="{{ data.model.mp4 }}" type="{{ settings.embedMimes[ 'mp4' ] }}" />
	<# } #>
		<# if ( data.model.m4v ) { #>
	<source src="{{ data.model.m4v }}" type="{{ settings.embedMimes[ 'm4v' ] }}" />
	<# } #>
		<# if ( data.model.webm ) { #>
	<source src="{{ data.model.webm }}" type="{{ settings.embedMimes[ 'webm' ] }}" />
	<# } #>
		<# if ( data.model.ogv ) { #>
	<source src="{{ data.model.ogv }}" type="{{ settings.embedMimes[ 'ogv' ] }}" />
	<# } #>
		<# if ( data.model.flv ) { #>
	<source src="{{ data.model.flv }}" type="{{ settings.embedMimes[ 'flv' ] }}" />
	<# } #>
		{{{ data.model.content }}}
</video>
</div>
	
				<# if ( ! _.isEmpty( data.model.src ) ) {
					ext = data.model.src.split('.').pop();
					if ( html5types[ ext ] ) {
						delete html5types[ ext ];
					}
				#>
				<span class="setting">
					<label for="video-details-source" class="name">URL</label>
					<input type="text" id="video-details-source" readonly data-setting="src" value="{{ data.model.src }}" />
					<button type="button" class="button-link remove-setting">Remove video source</button>
				</span>
				<# } #>
								<# if ( ! _.isEmpty( data.model.mp4 ) ) {
					if ( ! _.isUndefined( html5types.mp4 ) ) {
						delete html5types.mp4;
					}
				#>
				<span class="setting">
					<label for="video-details-mp4-source" class="name">MP4</label>
					<input type="text" id="video-details-mp4-source" readonly data-setting="mp4" value="{{ data.model.mp4 }}" />
					<button type="button" class="button-link remove-setting">Remove video source</button>
				</span>
				<# } #>
								<# if ( ! _.isEmpty( data.model.m4v ) ) {
					if ( ! _.isUndefined( html5types.m4v ) ) {
						delete html5types.m4v;
					}
				#>
				<span class="setting">
					<label for="video-details-m4v-source" class="name">M4V</label>
					<input type="text" id="video-details-m4v-source" readonly data-setting="m4v" value="{{ data.model.m4v }}" />
					<button type="button" class="button-link remove-setting">Remove video source</button>
				</span>
				<# } #>
								<# if ( ! _.isEmpty( data.model.webm ) ) {
					if ( ! _.isUndefined( html5types.webm ) ) {
						delete html5types.webm;
					}
				#>
				<span class="setting">
					<label for="video-details-webm-source" class="name">WEBM</label>
					<input type="text" id="video-details-webm-source" readonly data-setting="webm" value="{{ data.model.webm }}" />
					<button type="button" class="button-link remove-setting">Remove video source</button>
				</span>
				<# } #>
								<# if ( ! _.isEmpty( data.model.ogv ) ) {
					if ( ! _.isUndefined( html5types.ogv ) ) {
						delete html5types.ogv;
					}
				#>
				<span class="setting">
					<label for="video-details-ogv-source" class="name">OGV</label>
					<input type="text" id="video-details-ogv-source" readonly data-setting="ogv" value="{{ data.model.ogv }}" />
					<button type="button" class="button-link remove-setting">Remove video source</button>
				</span>
				<# } #>
								<# if ( ! _.isEmpty( data.model.flv ) ) {
					if ( ! _.isUndefined( html5types.flv ) ) {
						delete html5types.flv;
					}
				#>
				<span class="setting">
					<label for="video-details-flv-source" class="name">FLV</label>
					<input type="text" id="video-details-flv-source" readonly data-setting="flv" value="{{ data.model.flv }}" />
					<button type="button" class="button-link remove-setting">Remove video source</button>
				</span>
				<# } #>
								</div>

				<# if ( ! _.isEmpty( html5types ) ) { #>
				<fieldset class="setting-group">
					<legend class="name">Add alternate sources for maximum HTML5 playback</legend>
					<span class="setting">
						<span class="button-large">
						<# _.each( html5types, function (mime, type) { #>
							<button class="button add-media-source" data-mime="{{ mime }}">{{ type }}</button>
						<# } ) #>
						</span>
					</span>
				</fieldset>
				<# } #>

				<# if ( ! _.isEmpty( data.model.poster ) ) { #>
				<span class="setting">
					<label for="video-details-poster-image" class="name">Poster Image</label>
					<input type="text" id="video-details-poster-image" readonly data-setting="poster" value="{{ data.model.poster }}" />
					<button type="button" class="button-link remove-setting">Remove poster image</button>
				</span>
				<# } #>

				<fieldset class="setting-group">
					<legend class="name">Preload</legend>
					<span class="setting preload">
						<span class="button-group button-large" data-setting="preload">
							<button class="button" value="auto">Auto</button>
							<button class="button" value="metadata">Metadata</button>
							<button class="button active" value="none">None</button>
						</span>
					</span>
				</fieldset>

				<span class="setting-group">
					<span class="setting checkbox-setting autoplay">
						<input type="checkbox" id="video-details-autoplay" data-setting="autoplay" />
						<label for="video-details-autoplay" class="checkbox-label">Autoplay</label>
					</span>

					<span class="setting checkbox-setting">
						<input type="checkbox" id="video-details-loop" data-setting="loop" />
						<label for="video-details-loop" class="checkbox-label">Loop</label>
					</span>
				</span>

				<span class="setting" data-setting="content">
					<#
					var content = '';
					if ( ! _.isEmpty( data.model.content ) ) {
						var tracks = jQuery( data.model.content ).filter( 'track' );
						_.each( tracks.toArray(), function( track, index ) {
							content += track.outerHTML; #>
						<label for="video-details-track-{{ index }}" class="name">Tracks (subtitles, captions, descriptions, chapters, or metadata)</label>
						<input class="content-track" type="text" id="video-details-track-{{ index }}" aria-describedby="video-details-track-desc-{{ index }}" value="{{ track.outerHTML }}" />
						<span class="description" id="video-details-track-desc-{{ index }}">
						The srclang, label, and kind values can be edited to set the video track language and kind.						</span>
						<button type="button" class="button-link remove-setting remove-track">Remove video track</button><br />
						<# } ); #>
					<# } else { #>
					<span class="name">Tracks (subtitles, captions, descriptions, chapters, or metadata)</span><br />
					<em>There are no associated subtitles.</em>
					<# } #>
					<textarea class="hidden content-setting">{{ content }}</textarea>
				</span>
			</div>
		</div>
	</script>

		<script type="text/html" id="tmpl-editor-gallery">
		<# if ( data.attachments.length ) { #>
			<div class="gallery gallery-columns-{{ data.columns }}">
				<# _.each( data.attachments, function( attachment, index ) { #>
					<dl class="gallery-item">
						<dt class="gallery-icon">
							<# if ( attachment.thumbnail ) { #>
								<img src="{{ attachment.thumbnail.url }}" width="{{ attachment.thumbnail.width }}" height="{{ attachment.thumbnail.height }}" alt="{{ attachment.alt }}" />
							<# } else { #>
								<img src="{{ attachment.url }}" alt="{{ attachment.alt }}" />
							<# } #>
						</dt>
						<# if ( attachment.caption ) { #>
							<dd class="wp-caption-text gallery-caption">
								{{{ data.verifyHTML( attachment.caption ) }}}
							</dd>
						<# } #>
					</dl>
					<# if ( index % data.columns === data.columns - 1 ) { #>
						<br style="clear: both;" />
					<# } #>
				<# } ); #>
			</div>
		<# } else { #>
			<div class="wpview-error">
				<div class="dashicons dashicons-format-gallery"></div><p>No items found.</p>
			</div>
		<# } #>
	</script>

		<script type="text/html" id="tmpl-crop-content">
		<img class="crop-image" src="{{ data.url }}" alt="Image crop area preview. Requires mouse interaction." />
		<div class="upload-errors"></div>
	</script>

		<script type="text/html" id="tmpl-site-icon-preview">
		<h2>Preview</h2>
		<strong aria-hidden="true">As a browser icon</strong>
		<div class="favicon-preview">
			<img src="https://itstest.websinova.com/wp-admin/images/browser.png" class="browser-preview" width="182" height="" alt="" />

			<div class="favicon">
				<img id="preview-favicon" src="{{ data.url }}" alt="Preview as a browser icon" />
			</div>
			<span class="browser-title" aria-hidden="true"><# print( 'Testing Website' ) #></span>
		</div>

		<strong aria-hidden="true">As an app icon</strong>
		<div class="app-icon-preview">
			<img id="preview-app-icon" src="{{ data.url }}" alt="Preview as an app icon" />
		</div>
	</script>

		<script type="text/javascript">
		(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})();
	</script>
	
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="pswp__bg"></div>
	<div class="pswp__scroll-wrap">
		<div class="pswp__container">
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
		</div>
		<div class="pswp__ui pswp__ui--hidden">
			<div class="pswp__top-bar">
				<div class="pswp__counter"></div>
				<button class="pswp__button pswp__button--close" aria-label="Close (Esc)"></button>
				<button class="pswp__button pswp__button--share" aria-label="Share"></button>
				<button class="pswp__button pswp__button--fs" aria-label="Toggle fullscreen"></button>
				<button class="pswp__button pswp__button--zoom" aria-label="Zoom in/out"></button>
				<div class="pswp__preloader">
					<div class="pswp__preloader__icn">
						<div class="pswp__preloader__cut">
							<div class="pswp__preloader__donut"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
				<div class="pswp__share-tooltip"></div>
			</div>
			<button class="pswp__button pswp__button--arrow--left" aria-label="Previous (arrow left)"></button>
			<button class="pswp__button pswp__button--arrow--right" aria-label="Next (arrow right)"></button>
			<div class="pswp__caption">
				<div class="pswp__caption__center"></div>
			</div>
		</div>
	</div>
</div>
<script type="text/template" id="tmpl-variation-template">
    <div class="woocommerce-variation-description">
        {{{ data.variation.variation_description }}}
    </div>

    <div class="woocommerce-variation-price">
        {{{ data.variation.price_html }}}
    </div>

    <div class="woocommerce-variation-availability">
        {{{ data.variation.availability_html }}}
    </div>
</script>
<script type="text/template" id="tmpl-unavailable-variation-template">
    <p>Sorry, this product is unavailable. Please choose a different combination.</p>
</script>
<link rel='stylesheet' id='cew_cta-css' href='https://itstest.websinova.com/wp-content/themes/consulting/assets/css/layouts/global_styles/el_tta.css?ver=1680853964' type='text/css' media='all' />
<style id='cew_cta-inline-css' type='text/css'>
.ce_cta_f66197ab1ad4548e7a60dfd94611f963 .ce_cta__content__title, .ce_cta_f66197ab1ad4548e7a60dfd94611f963 .ce_cta__content__title a {font-size : 30px;line-height : 42px;text-align : left;} .ce_cta_f66197ab1ad4548e7a60dfd94611f963 .ce_cta__content__subtitle, .ce_cta_f66197ab1ad4548e7a60dfd94611f963 .ce_cta__content__subtitle a {text-align : left;} 
</style>
<link rel='stylesheet' id='rs-plugin-settings-css' href='https://itstest.websinova.com/wp-content/plugins/revslider/public/assets/css/rs6.css?ver=6.5.19' type='text/css' media='all' />
<style id='rs-plugin-settings-inline-css' type='text/css'>
#rs-demo-id {}
</style>
<link rel='stylesheet' id='photoswipe-css' href='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/css/photoswipe/photoswipe.min.css?ver=7.5.1' type='text/css' media='all' />
<link rel='stylesheet' id='photoswipe-default-skin-css' href='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/css/photoswipe/default-skin/default-skin.min.css?ver=7.5.1' type='text/css' media='all' />
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/betterdocs/admin/assets/js/betterdocs-el-editor.js?ver=2.3.6' id='betterdocs-el-editor-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/betterdocs/public/js/simplebar.js?ver=2.3.6' id='simplebar-js'></script>
<script type='text/javascript' id='betterdocs-js-extra'>
/* <![CDATA[ */
var betterdocspublic = {"ajax_url":"https:\/\/itstest.websinova.com\/wp-admin\/admin-ajax.php","post_id":"16045","copy_text":"Copied","sticky_toc_offset":"100","nonce":"839e563b76"};
var betterdocspublic = {"ajax_url":"https:\/\/itstest.websinova.com\/wp-admin\/admin-ajax.php","post_id":"16045","copy_text":"Copied","sticky_toc_offset":"100","nonce":"839e563b76","search_letter_limit":"3","FEEDBACK":{"DISPLAY":true,"TEXT":"How did you feel?","SUCCESS":"Thanks for your feedback","URL":"https:\/\/itstest.websinova.com?rest_route=\/betterdocs\/feedback"}};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/betterdocs/public/js/betterdocs-public.js?ver=2.3.6' id='betterdocs-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/clipboard.min.js?ver=2.0.11' id='clipboard-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=5.7.5.1' id='swv-js'></script>
<script type='text/javascript' id='contact-form-7-js-extra'>
/* <![CDATA[ */
var wpcf7 = {"api":{"root":"https:\/\/itstest.websinova.com\/wp-json\/","namespace":"contact-form-7\/v1"},"cached":"1"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.7.5.1' id='contact-form-7-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/embedpress/assets/js/front.js?ver=3.6.8' id='embedpress-front-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/eroom-zoom-meetings-webinar/assets/js/frontend/jquery.countdown.js?ver=1.4.6' id='stm_jquery.countdown-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/eroom-zoom-meetings-webinar/assets/js/frontend/main.js?ver=1.4.6' id='stm_zoom_main-js'></script>
<script type='text/javascript' id='leadin-script-loader-js-js-extra'>
/* <![CDATA[ */
var leadin_wordpress = {"userRole":"administrator","pageType":"page","leadinPluginVersion":"10.1.13"};
/* ]]> */
</script>
<script type='text/javascript' src='https://js.hs-scripts.com/24418193.js?integration=WordPress&#038;ver=10.1.13' async defer id='hs-script-loader'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/mystickymenu/js/detectmobilebrowser.js?ver=2.6.2' id='detectmobilebrowser-js'></script>
<script type='text/javascript' id='mystickymenu-js-extra'>
/* <![CDATA[ */
var option = {"mystickyClass":".menu-main-header-container","activationHeight":"","disableWidth":"0","disableLargeWidth":"0","adminBar":"true","device_desktop":"1","device_mobile":"1","mystickyTransition":"fade","mysticky_disable_down":"false"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/mystickymenu/js/mystickymenu.min.js?ver=2.6.2' id='mystickymenu-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/revslider/public/assets/js/rbtools.min.js?ver=6.5.18' defer async id='tp-tools-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/revslider/public/assets/js/rs6.min.js?ver=6.5.19' defer async id='revmin-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.9' id='regenerator-runtime-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0' id='wp-polyfill-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/dist/hooks.min.js?ver=4169d3cf8e8d95a3d6d5' id='wp-hooks-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/dist/i18n.min.js?ver=9e794f35a71bb98672ae' id='wp-i18n-js'></script>
<script type='text/javascript' id='wp-i18n-js-after'>
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script type='text/javascript' id='tutor-script-js-extra'>
/* <![CDATA[ */
var _tutorobject = {"ajaxurl":"https:\/\/itstest.websinova.com\/wp-admin\/admin-ajax.php","home_url":"https:\/\/itstest.websinova.com","site_title":"Testing Website","base_path":"\/","tutor_url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/","tutor_pro_url":null,"nonce_key":"_tutor_nonce","_tutor_nonce":"057e6cafa3","loading_icon_url":"https:\/\/itstest.websinova.com\/wp-admin\/images\/wpspin_light.gif","placeholder_img_src":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/images\/placeholder.svg","enable_lesson_classic_editor":"1","tutor_frontend_dashboard_url":"https:\/\/itstest.websinova.com\/dashboard\/","wp_date_format":"MMMM d, yyyy","is_admin":"","is_admin_bar_showing":"1","addons_data":[{"name":"BuddyPress","description":"Discuss about course and share your knowledge with your friends through BuddyPress","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/buddypress\/thumbnail.png"},{"name":"Gradebook","description":"Shows student progress from assignment and quiz","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/gradebook\/thumbnail.png"},{"name":"Content Drip","description":"Unlock lessons by schedule or when the student meets specific condition.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/content-drip\/thumbnail.png"},{"name":"Enrollment","description":"Take advanced control on enrollment. Enroll the student manually.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/enrollments\/thumbnail.png"},{"name":"WooCommerce Subscriptions","description":"Capture Residual Revenue with Recurring Payments.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/wc-subscriptions\/thumbnail.png"},{"name":"Paid Memberships Pro","description":"Maximize revenue by selling membership access to all of your courses.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/pmpro\/thumbnail.png"},{"name":"Restrict Content Pro","description":"Unlock Course depending on Restrict Content Pro Plugin Permission.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/restrict-content-pro\/thumbnail.png"},{"name":"Tutor Assignments","description":"Tutor assignments is a great way to assign tasks to students.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-assignments\/thumbnail.png"},{"name":"Tutor Certificate","description":"Students will be able to download a certificate after course completion.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-certificate\/thumbnail.png"},{"name":"Tutor Course Attachments","description":"Add unlimited attachments\/ private files to any Tutor course","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-course-attachments\/thumbnail.png"},{"name":"Tutor Course Preview","description":"Unlock some lessons for students before enrollment.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-course-preview\/thumbnail.png"},{"name":"Tutor E-Mail","description":"Send email on various tutor events","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-email\/thumbnail.png"},{"name":"Tutor Multi Instructors","description":"Start a course with multiple instructors by Tutor Multi Instructors","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-multi-instructors\/thumbnail.png"},{"name":"Tutor Prerequisites","description":"Specific course you must complete before you can enroll new course by Tutor Prerequisites","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-prerequisites\/thumbnail.png"},{"name":"Tutor Report","description":"Check your course performance through Tutor Report stats.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-report\/thumbnail.png"},{"name":"Quiz Export\/Import","description":"Save time by exporting\/importing quiz data with easy options.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/quiz-import-export\/thumbnail.png"},{"name":"Tutor Zoom Integration","description":"Connect Tutor LMS with Zoom to host live online classes. Students can attend live classes right from the lesson page.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-zoom\/thumbnail.png"},{"name":"Tutor Google Meet Integration","description":"Connect Tutor LMS with Google Meet to host live online classes. Students can attend live classes right from the lesson page.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/google-meet\/thumbnail.png"},{"name":"Google Classroom Integration","description":"Helps connect Google Classrooms with Tutor LMS courses, allowing you to use features like Classroom streams and files directly from the Tutor LMS course.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/google-classroom\/thumbnail.png"},{"name":"Calendar","description":"Allow students to see everything in a calendar view in the front dashboard.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-calendar\/thumbnail.png"},{"name":"Notifications","description":"Get On Site and Push Notifications on specified tutor events.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-notifications\/thumbnail.png"},{"name":"Weglot","description":"Translate & manage multilingual courses for global reach with full edit control.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-weglot\/thumbnail.png"},{"name":"WPML Multilingual CMS","description":"Create multilingual courses, lessons, dashboard and more for a global audience.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-wpml\/thumbnail.png"}],"current_user":{"data":{"ID":"2","user_login":"sanchay","user_pass":"$P$B2tMjgdtgs10omvhppY4WxSdXWLIV50","user_nicename":"sanchay","user_email":"sanchaythalnerkar@gmail.com","user_url":"","user_registered":"2023-03-26 19:01:46","user_activation_key":"1680253936:$P$BFfVjdqoErU4XpwWMnY8oA7XDYg0gr\/","user_status":"0","display_name":"sanchay","last_login":null,"membership_level":false,"membership_levels":[]},"ID":2,"caps":{"administrator":true,"bookingpress":true,"bookingpress_calendar":true,"bookingpress_appointments":true,"bookingpress_payments":true,"bookingpress_customers":true,"bookingpress_services":true,"bookingpress_notifications":true,"bookingpress_customize":true,"bookingpress_settings":true,"bookingpress_addons":true},"cap_key":"wp_capabilities","roles":["administrator"],"allcaps":{"switch_themes":true,"edit_themes":true,"activate_plugins":true,"edit_plugins":true,"edit_users":true,"edit_files":true,"manage_options":true,"moderate_comments":true,"manage_categories":true,"manage_links":true,"upload_files":true,"import":true,"unfiltered_html":true,"edit_posts":true,"edit_others_posts":true,"edit_published_posts":true,"publish_posts":true,"edit_pages":true,"read":true,"level_10":true,"level_9":true,"level_8":true,"level_7":true,"level_6":true,"level_5":true,"level_4":true,"level_3":true,"level_2":true,"level_1":true,"level_0":true,"edit_others_pages":true,"edit_published_pages":true,"publish_pages":true,"delete_pages":true,"delete_others_pages":true,"delete_published_pages":true,"delete_posts":true,"delete_others_posts":true,"delete_published_posts":true,"delete_private_posts":true,"edit_private_posts":true,"read_private_posts":true,"delete_private_pages":true,"edit_private_pages":true,"read_private_pages":true,"delete_users":true,"create_users":true,"unfiltered_upload":true,"edit_dashboard":true,"update_plugins":true,"delete_plugins":true,"install_plugins":true,"update_themes":true,"install_themes":true,"update_core":true,"list_users":true,"remove_users":true,"promote_users":true,"edit_theme_options":true,"delete_themes":true,"export":true,"manage_bookit_staff":true,"manage_instagram_feed_options":true,"manage_woocommerce":true,"view_woocommerce_reports":true,"edit_product":true,"read_product":true,"delete_product":true,"edit_products":true,"edit_others_products":true,"publish_products":true,"read_private_products":true,"delete_products":true,"delete_private_products":true,"delete_published_products":true,"delete_others_products":true,"edit_private_products":true,"edit_published_products":true,"manage_product_terms":true,"edit_product_terms":true,"delete_product_terms":true,"assign_product_terms":true,"edit_shop_order":true,"read_shop_order":true,"delete_shop_order":true,"edit_shop_orders":true,"edit_others_shop_orders":true,"publish_shop_orders":true,"read_private_shop_orders":true,"delete_shop_orders":true,"delete_private_shop_orders":true,"delete_published_shop_orders":true,"delete_others_shop_orders":true,"edit_private_shop_orders":true,"edit_published_shop_orders":true,"manage_shop_order_terms":true,"edit_shop_order_terms":true,"delete_shop_order_terms":true,"assign_shop_order_terms":true,"edit_shop_coupon":true,"read_shop_coupon":true,"delete_shop_coupon":true,"edit_shop_coupons":true,"edit_others_shop_coupons":true,"publish_shop_coupons":true,"read_private_shop_coupons":true,"delete_shop_coupons":true,"delete_private_shop_coupons":true,"delete_published_shop_coupons":true,"delete_others_shop_coupons":true,"edit_private_shop_coupons":true,"edit_published_shop_coupons":true,"manage_shop_coupon_terms":true,"edit_shop_coupon_terms":true,"delete_shop_coupon_terms":true,"assign_shop_coupon_terms":true,"bcn_manage_options":true,"manage_tutor":true,"manage_tutor_instructor":true,"edit_tutor_course":true,"read_tutor_course":true,"delete_tutor_course":true,"delete_tutor_courses":true,"edit_tutor_courses":true,"edit_others_tutor_courses":true,"read_private_tutor_courses":true,"edit_tutor_lesson":true,"read_tutor_lesson":true,"delete_tutor_lesson":true,"delete_tutor_lessons":true,"edit_tutor_lessons":true,"edit_others_tutor_lessons":true,"read_private_tutor_lessons":true,"publish_tutor_lessons":true,"edit_tutor_quiz":true,"read_tutor_quiz":true,"delete_tutor_quiz":true,"delete_tutor_quizzes":true,"edit_tutor_quizzes":true,"edit_others_tutor_quizzes":true,"read_private_tutor_quizzes":true,"publish_tutor_quizzes":true,"edit_tutor_question":true,"read_tutor_question":true,"delete_tutor_question":true,"delete_tutor_questions":true,"edit_tutor_questions":true,"edit_others_tutor_questions":true,"publish_tutor_questions":true,"read_private_tutor_questions":true,"publish_tutor_courses":true,"edit_docs":true,"edit_others_docs":true,"delete_docs":true,"publish_docs":true,"read_private_docs":true,"delete_private_docs":true,"delete_published_docs":true,"delete_others_docs":true,"edit_private_docs":true,"edit_published_docs":true,"manage_doc_terms":true,"edit_doc_terms":true,"delete_doc_terms":true,"manage_knowledge_base_terms":true,"edit_knowledge_base_terms":true,"delete_knowledge_base_terms":true,"edit_docs_settings":true,"read_docs_analytics":true,"manage_forminator":true,"frm_view_forms":true,"frm_edit_forms":true,"frm_delete_forms":true,"frm_change_settings":true,"frm_view_entries":true,"frm_delete_entries":true,"pmpro_memberships_menu":true,"pmpro_dashboard":true,"pmpro_wizard":true,"pmpro_membershiplevels":true,"pmpro_edit_memberships":true,"pmpro_pagesettings":true,"pmpro_paymentsettings":true,"pmpro_emailsettings":true,"pmpro_emailtemplates":true,"pmpro_advancedsettings":true,"pmpro_addons":true,"pmpro_memberslist":true,"pmpro_memberslistcsv":true,"pmpro_reports":true,"pmpro_orders":true,"pmpro_orderscsv":true,"pmpro_discountcodes":true,"pmpro_userfields":true,"pmpro_updates":true,"pmpro_manage_pause_mode":true,"administrator":true,"bookingpress":true,"bookingpress_calendar":true,"bookingpress_appointments":true,"bookingpress_payments":true,"bookingpress_customers":true,"bookingpress_services":true,"bookingpress_notifications":true,"bookingpress_customize":true,"bookingpress_settings":true,"bookingpress_addons":true},"filter":null},"content_change_event":"tutor_content_changed_event","is_tutor_course_edit":"","assignment_max_file_allowed":"0","current_page":"","quiz_answer_display_time":"2000","is_ssl":"1","course_list_page_url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=tutor","course_post_type":"courses"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/tutor/assets/js/tutor.min.js?ver=2.1.8' id='tutor-script-js'></script>
<script type='text/javascript' id='quicktags-js-extra'>
/* <![CDATA[ */
var quicktagsL10n = {"closeAllOpenTags":"Close all open tags","closeTags":"close tags","enterURL":"Enter the URL","enterImageURL":"Enter the URL of the image","enterImageDescription":"Enter a description of the image","textdirection":"text direction","toggleTextdirection":"Toggle Editor Text Direction","dfw":"Distraction-free writing mode","strong":"Bold","strongClose":"Close bold tag","em":"Italic","emClose":"Close italic tag","link":"Insert link","blockquote":"Blockquote","blockquoteClose":"Close blockquote tag","del":"Deleted text (strikethrough)","delClose":"Close deleted text tag","ins":"Inserted text","insClose":"Close inserted text tag","image":"Insert image","ul":"Bulleted list","ulClose":"Close bulleted list tag","ol":"Numbered list","olClose":"Close numbered list tag","li":"List item","liClose":"Close list item tag","code":"Code","codeClose":"Close code tag","more":"Insert Read More tag"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/quicktags.min.js?ver=6.1.1' id='quicktags-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/underscore.min.js?ver=1.13.4' id='underscore-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/shortcode.min.js?ver=6.1.1' id='shortcode-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/backbone.min.js?ver=1.4.1' id='backbone-js'></script>
<script type='text/javascript' id='wp-util-js-extra'>
/* <![CDATA[ */
var _wpUtilSettings = {"ajax":{"url":"\/wp-admin\/admin-ajax.php"}};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/wp-util.min.js?ver=6.1.1' id='wp-util-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/wp-backbone.min.js?ver=6.1.1' id='wp-backbone-js'></script>
<script type='text/javascript' id='media-models-js-extra'>
/* <![CDATA[ */
var _wpMediaModelsL10n = {"settings":{"ajaxurl":"\/wp-admin\/admin-ajax.php","post":{"id":0}}};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/media-models.min.js?ver=6.1.1' id='media-models-js'></script>
<script type='text/javascript' id='wp-plupload-js-extra'>
/* <![CDATA[ */
var pluploadL10n = {"queue_limit_exceeded":"You have attempted to queue too many files.","file_exceeds_size_limit":"%s exceeds the maximum upload size for this site.","zero_byte_file":"This file is empty. Please try another.","invalid_filetype":"Sorry, you are not allowed to upload this file type.","not_an_image":"This file is not an image. Please try another.","image_memory_exceeded":"Memory exceeded. Please try another smaller file.","image_dimensions_exceeded":"This is larger than the maximum size. Please try another.","default_error":"An error occurred in the upload. Please try again later.","missing_upload_url":"There was a configuration error. Please contact the server administrator.","upload_limit_exceeded":"You may only upload 1 file.","http_error":"Unexpected response from the server. The file may have been uploaded successfully. Check in the Media Library or reload the page.","http_error_image":"The server cannot process the image. This can happen if the server is busy or does not have enough resources to complete the task. Uploading a smaller image may help. Suggested maximum size is 2560 pixels.","upload_failed":"Upload failed.","big_upload_failed":"Please try uploading this file with the %1$sbrowser uploader%2$s.","big_upload_queued":"%s exceeds the maximum upload size for the multi-file uploader when used in your browser.","io_error":"IO error.","security_error":"Security error.","file_cancelled":"File canceled.","upload_stopped":"Upload stopped.","dismiss":"Dismiss","crunching":"Crunching\u2026","deleted":"moved to the Trash.","error_uploading":"\u201c%s\u201d has failed to upload.","unsupported_image":"This image cannot be displayed in a web browser. For best results convert it to JPEG before uploading.","noneditable_image":"This image cannot be processed by the web server. Convert it to JPEG or PNG before uploading.","file_url_copied":"The file URL has been copied to your clipboard"};
var _wpPluploadSettings = {"defaults":{"file_data_name":"async-upload","url":"\/wp-admin\/async-upload.php","filters":{"max_file_size":"1073741824b","mime_types":[{"extensions":"jpg,jpeg,jpe,gif,png,bmp,tiff,tif,webp,ico,heic,asf,asx,wmv,wmx,wm,avi,divx,flv,mov,qt,mpeg,mpg,mpe,mp4,m4v,ogv,webm,mkv,3gp,3gpp,3g2,3gp2,txt,asc,c,cc,h,srt,csv,tsv,ics,rtx,css,htm,html,vtt,dfxp,mp3,m4a,m4b,aac,ra,ram,wav,ogg,oga,flac,mid,midi,wma,wax,mka,rtf,js,pdf,class,tar,zip,gz,gzip,rar,7z,psd,xcf,doc,pot,pps,ppt,wri,xla,xls,xlt,xlw,mdb,mpp,docx,docm,dotx,dotm,xlsx,xlsm,xlsb,xltx,xltm,xlam,pptx,pptm,ppsx,ppsm,potx,potm,ppam,sldx,sldm,onetoc,onetoc2,onetmp,onepkg,oxps,xps,odt,odp,ods,odg,odc,odb,odf,wp,wpd,key,numbers,pages,svg"}]},"heic_upload_error":true,"multipart_params":{"action":"upload-attachment","_wpnonce":"ed2ecf08e8"}},"browser":{"mobile":false,"supported":true},"limitExceeded":false};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/plupload/wp-plupload.min.js?ver=6.1.1' id='wp-plupload-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2' id='jquery-ui-core-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/jquery/ui/mouse.min.js?ver=1.13.2' id='jquery-ui-mouse-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/jquery/ui/sortable.min.js?ver=1.13.2' id='jquery-ui-sortable-js'></script>
<script type='text/javascript' id='mediaelement-core-js-before'>
var mejsL10n = {"language":"en","strings":{"mejs.download-file":"Download File","mejs.install-flash":"You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https:\/\/get.adobe.com\/flashplayer\/","mejs.fullscreen":"Fullscreen","mejs.play":"Play","mejs.pause":"Pause","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.","mejs.live-broadcast":"Live Broadcast","mejs.volume-help-text":"Use Up\/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.captions-subtitles":"Captions\/Subtitles","mejs.captions-chapters":"Chapters","mejs.none":"None","mejs.afrikaans":"Afrikaans","mejs.albanian":"Albanian","mejs.arabic":"Arabic","mejs.belarusian":"Belarusian","mejs.bulgarian":"Bulgarian","mejs.catalan":"Catalan","mejs.chinese":"Chinese","mejs.chinese-simplified":"Chinese (Simplified)","mejs.chinese-traditional":"Chinese (Traditional)","mejs.croatian":"Croatian","mejs.czech":"Czech","mejs.danish":"Danish","mejs.dutch":"Dutch","mejs.english":"English","mejs.estonian":"Estonian","mejs.filipino":"Filipino","mejs.finnish":"Finnish","mejs.french":"French","mejs.galician":"Galician","mejs.german":"German","mejs.greek":"Greek","mejs.haitian-creole":"Haitian Creole","mejs.hebrew":"Hebrew","mejs.hindi":"Hindi","mejs.hungarian":"Hungarian","mejs.icelandic":"Icelandic","mejs.indonesian":"Indonesian","mejs.irish":"Irish","mejs.italian":"Italian","mejs.japanese":"Japanese","mejs.korean":"Korean","mejs.latvian":"Latvian","mejs.lithuanian":"Lithuanian","mejs.macedonian":"Macedonian","mejs.malay":"Malay","mejs.maltese":"Maltese","mejs.norwegian":"Norwegian","mejs.persian":"Persian","mejs.polish":"Polish","mejs.portuguese":"Portuguese","mejs.romanian":"Romanian","mejs.russian":"Russian","mejs.serbian":"Serbian","mejs.slovak":"Slovak","mejs.slovenian":"Slovenian","mejs.spanish":"Spanish","mejs.swahili":"Swahili","mejs.swedish":"Swedish","mejs.tagalog":"Tagalog","mejs.thai":"Thai","mejs.turkish":"Turkish","mejs.ukrainian":"Ukrainian","mejs.vietnamese":"Vietnamese","mejs.welsh":"Welsh","mejs.yiddish":"Yiddish"}};
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/mediaelement/mediaelement-and-player.min.js?ver=4.2.17' id='mediaelement-core-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/mediaelement/mediaelement-migrate.min.js?ver=6.1.1' id='mediaelement-migrate-js'></script>
<script type='text/javascript' id='mediaelement-js-extra'>
/* <![CDATA[ */
var _wpmejsSettings = {"pluginPath":"\/wp-includes\/js\/mediaelement\/","classPrefix":"mejs-","stretching":"responsive"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/mediaelement/wp-mediaelement.min.js?ver=6.1.1' id='wp-mediaelement-js'></script>
<script type='text/javascript' id='wp-api-request-js-extra'>
/* <![CDATA[ */
var wpApiSettings = {"root":"https:\/\/itstest.websinova.com\/wp-json\/","nonce":"647c28dcc8","versionString":"wp\/v2\/"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/api-request.min.js?ver=6.1.1' id='wp-api-request-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/dist/dom-ready.min.js?ver=392bdd43726760d1f3ca' id='wp-dom-ready-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/dist/a11y.min.js?ver=ecce20f002eda4c19664' id='wp-a11y-js'></script>
<script type='text/javascript' id='media-views-js-extra'>
/* <![CDATA[ */
var _wpMediaViewsL10n = {"mediaFrameDefaultTitle":"Media","url":"URL","addMedia":"Add media","search":"Search","select":"Select","cancel":"Cancel","update":"Update","replace":"Replace","remove":"Remove","back":"Back","selected":"%d selected","dragInfo":"Drag and drop to reorder media files.","uploadFilesTitle":"Upload files","uploadImagesTitle":"Upload images","mediaLibraryTitle":"Media Library","insertMediaTitle":"Add media","createNewGallery":"Create a new gallery","createNewPlaylist":"Create a new playlist","createNewVideoPlaylist":"Create a new video playlist","returnToLibrary":"\u2190 Go to library","allMediaItems":"All media items","allDates":"All dates","noItemsFound":"No items found.","insertIntoPost":"Insert into post","unattached":"Unattached","mine":"Mine","trash":"Trash","uploadedToThisPost":"Uploaded to this post","warnDelete":"You are about to permanently delete this item from your site.\nThis action cannot be undone.\n 'Cancel' to stop, 'OK' to delete.","warnBulkDelete":"You are about to permanently delete these items from your site.\nThis action cannot be undone.\n 'Cancel' to stop, 'OK' to delete.","warnBulkTrash":"You are about to trash these items.\n  'Cancel' to stop, 'OK' to delete.","bulkSelect":"Bulk select","trashSelected":"Move to Trash","restoreSelected":"Restore from Trash","deletePermanently":"Delete permanently","errorDeleting":"Error in deleting the attachment.","apply":"Apply","filterByDate":"Filter by date","filterByType":"Filter by type","searchLabel":"Search","searchMediaLabel":"Search media","searchMediaPlaceholder":"Search media items...","mediaFound":"Number of media items found: %d","noMedia":"No media items found.","noMediaTryNewSearch":"No media items found. Try a different search.","attachmentDetails":"Attachment details","insertFromUrlTitle":"Insert from URL","setFeaturedImageTitle":"Featured image","setFeaturedImage":"Set featured image","createGalleryTitle":"Create gallery","editGalleryTitle":"Edit gallery","cancelGalleryTitle":"\u2190 Cancel gallery","insertGallery":"Insert gallery","updateGallery":"Update gallery","addToGallery":"Add to gallery","addToGalleryTitle":"Add to gallery","reverseOrder":"Reverse order","imageDetailsTitle":"Image details","imageReplaceTitle":"Replace image","imageDetailsCancel":"Cancel edit","editImage":"Edit image","chooseImage":"Choose image","selectAndCrop":"Select and crop","skipCropping":"Skip cropping","cropImage":"Crop image","cropYourImage":"Crop your image","cropping":"Cropping\u2026","suggestedDimensions":"Suggested image dimensions: %1$s by %2$s pixels.","cropError":"There has been an error cropping your image.","audioDetailsTitle":"Audio details","audioReplaceTitle":"Replace audio","audioAddSourceTitle":"Add audio source","audioDetailsCancel":"Cancel edit","videoDetailsTitle":"Video details","videoReplaceTitle":"Replace video","videoAddSourceTitle":"Add video source","videoDetailsCancel":"Cancel edit","videoSelectPosterImageTitle":"Select poster image","videoAddTrackTitle":"Add subtitles","playlistDragInfo":"Drag and drop to reorder tracks.","createPlaylistTitle":"Create audio playlist","editPlaylistTitle":"Edit audio playlist","cancelPlaylistTitle":"\u2190 Cancel audio playlist","insertPlaylist":"Insert audio playlist","updatePlaylist":"Update audio playlist","addToPlaylist":"Add to audio playlist","addToPlaylistTitle":"Add to Audio Playlist","videoPlaylistDragInfo":"Drag and drop to reorder videos.","createVideoPlaylistTitle":"Create video playlist","editVideoPlaylistTitle":"Edit video playlist","cancelVideoPlaylistTitle":"\u2190 Cancel video playlist","insertVideoPlaylist":"Insert video playlist","updateVideoPlaylist":"Update video playlist","addToVideoPlaylist":"Add to video playlist","addToVideoPlaylistTitle":"Add to video Playlist","filterAttachments":"Filter media","attachmentsList":"Media list","settings":{"tabs":[],"tabUrl":"https:\/\/itstest.websinova.com\/wp-admin\/media-upload.php?chromeless=1","mimeTypes":{"image":"Images","audio":"Audio","video":"Video","application\/msword,application\/vnd.openxmlformats-officedocument.wordprocessingml.document,application\/vnd.ms-word.document.macroEnabled.12,application\/vnd.ms-word.template.macroEnabled.12,application\/vnd.oasis.opendocument.text,application\/vnd.apple.pages,application\/pdf,application\/vnd.ms-xpsdocument,application\/oxps,application\/rtf,application\/wordperfect,application\/octet-stream":"Documents","application\/vnd.apple.numbers,application\/vnd.oasis.opendocument.spreadsheet,application\/vnd.ms-excel,application\/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application\/vnd.ms-excel.sheet.macroEnabled.12,application\/vnd.ms-excel.sheet.binary.macroEnabled.12":"Spreadsheets","application\/x-gzip,application\/rar,application\/x-tar,application\/zip,application\/x-7z-compressed":"Archives"},"captions":true,"nonce":{"sendToEditor":"8ccdf4c977"},"post":{"id":0},"defaultProps":{"link":"none","align":"","size":""},"attachmentCounts":{"audio":1,"video":1},"oEmbedProxyUrl":"https:\/\/itstest.websinova.com\/wp-json\/oembed\/1.0\/proxy","embedExts":["mp3","ogg","flac","m4a","wav","mp4","m4v","webm","ogv","flv"],"embedMimes":{"mp3":"audio\/mpeg","ogg":"audio\/ogg","flac":"audio\/flac","m4a":"audio\/mpeg","wav":"audio\/wav","mp4":"video\/mp4","m4v":"video\/mp4","webm":"video\/webm","ogv":"video\/ogg","flv":"video\/x-flv"},"contentWidth":1120,"months":[{"year":"2023","month":"4","text":"April 2023"},{"year":"2023","month":"3","text":"March 2023"}],"mediaTrash":0,"infiniteScrolling":0}};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/media-views.min.js?ver=6.1.1' id='media-views-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/media-editor.min.js?ver=6.1.1' id='media-editor-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/media-audiovideo.min.js?ver=6.1.1' id='media-audiovideo-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/jquery/jquery.ui.touch-punch.js?ver=0.2.2' id='jquery-touch-punch-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/tutor/assets/packages/SocialShare/SocialShare.min.js?ver=2.1.8' id='tutor-social-share-js'></script>
<script type='text/javascript' id='tutor-frontend-js-extra'>
/* <![CDATA[ */
var _tutorobject = {"ajaxurl":"https:\/\/itstest.websinova.com\/wp-admin\/admin-ajax.php","home_url":"https:\/\/itstest.websinova.com","site_title":"Testing Website","base_path":"\/","tutor_url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/","tutor_pro_url":null,"nonce_key":"_tutor_nonce","_tutor_nonce":"057e6cafa3","loading_icon_url":"https:\/\/itstest.websinova.com\/wp-admin\/images\/wpspin_light.gif","placeholder_img_src":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/images\/placeholder.svg","enable_lesson_classic_editor":"1","tutor_frontend_dashboard_url":"https:\/\/itstest.websinova.com\/dashboard\/","wp_date_format":"MMMM d, yyyy","is_admin":"","is_admin_bar_showing":"1","addons_data":[{"name":"BuddyPress","description":"Discuss about course and share your knowledge with your friends through BuddyPress","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/buddypress\/thumbnail.png"},{"name":"Gradebook","description":"Shows student progress from assignment and quiz","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/gradebook\/thumbnail.png"},{"name":"Content Drip","description":"Unlock lessons by schedule or when the student meets specific condition.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/content-drip\/thumbnail.png"},{"name":"Enrollment","description":"Take advanced control on enrollment. Enroll the student manually.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/enrollments\/thumbnail.png"},{"name":"WooCommerce Subscriptions","description":"Capture Residual Revenue with Recurring Payments.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/wc-subscriptions\/thumbnail.png"},{"name":"Paid Memberships Pro","description":"Maximize revenue by selling membership access to all of your courses.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/pmpro\/thumbnail.png"},{"name":"Restrict Content Pro","description":"Unlock Course depending on Restrict Content Pro Plugin Permission.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/restrict-content-pro\/thumbnail.png"},{"name":"Tutor Assignments","description":"Tutor assignments is a great way to assign tasks to students.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-assignments\/thumbnail.png"},{"name":"Tutor Certificate","description":"Students will be able to download a certificate after course completion.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-certificate\/thumbnail.png"},{"name":"Tutor Course Attachments","description":"Add unlimited attachments\/ private files to any Tutor course","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-course-attachments\/thumbnail.png"},{"name":"Tutor Course Preview","description":"Unlock some lessons for students before enrollment.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-course-preview\/thumbnail.png"},{"name":"Tutor E-Mail","description":"Send email on various tutor events","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-email\/thumbnail.png"},{"name":"Tutor Multi Instructors","description":"Start a course with multiple instructors by Tutor Multi Instructors","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-multi-instructors\/thumbnail.png"},{"name":"Tutor Prerequisites","description":"Specific course you must complete before you can enroll new course by Tutor Prerequisites","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-prerequisites\/thumbnail.png"},{"name":"Tutor Report","description":"Check your course performance through Tutor Report stats.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-report\/thumbnail.png"},{"name":"Quiz Export\/Import","description":"Save time by exporting\/importing quiz data with easy options.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/quiz-import-export\/thumbnail.png"},{"name":"Tutor Zoom Integration","description":"Connect Tutor LMS with Zoom to host live online classes. Students can attend live classes right from the lesson page.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-zoom\/thumbnail.png"},{"name":"Tutor Google Meet Integration","description":"Connect Tutor LMS with Google Meet to host live online classes. Students can attend live classes right from the lesson page.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/google-meet\/thumbnail.png"},{"name":"Google Classroom Integration","description":"Helps connect Google Classrooms with Tutor LMS courses, allowing you to use features like Classroom streams and files directly from the Tutor LMS course.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/google-classroom\/thumbnail.png"},{"name":"Calendar","description":"Allow students to see everything in a calendar view in the front dashboard.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-calendar\/thumbnail.png"},{"name":"Notifications","description":"Get On Site and Push Notifications on specified tutor events.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-notifications\/thumbnail.png"},{"name":"Weglot","description":"Translate & manage multilingual courses for global reach with full edit control.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-weglot\/thumbnail.png"},{"name":"WPML Multilingual CMS","description":"Create multilingual courses, lessons, dashboard and more for a global audience.","url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/tutor\/assets\/addons\/tutor-wpml\/thumbnail.png"}],"current_user":{"data":{"ID":"2","user_login":"sanchay","user_pass":"$P$B2tMjgdtgs10omvhppY4WxSdXWLIV50","user_nicename":"sanchay","user_email":"sanchaythalnerkar@gmail.com","user_url":"","user_registered":"2023-03-26 19:01:46","user_activation_key":"1680253936:$P$BFfVjdqoErU4XpwWMnY8oA7XDYg0gr\/","user_status":"0","display_name":"sanchay","last_login":null,"membership_level":false,"membership_levels":[]},"ID":2,"caps":{"administrator":true,"bookingpress":true,"bookingpress_calendar":true,"bookingpress_appointments":true,"bookingpress_payments":true,"bookingpress_customers":true,"bookingpress_services":true,"bookingpress_notifications":true,"bookingpress_customize":true,"bookingpress_settings":true,"bookingpress_addons":true},"cap_key":"wp_capabilities","roles":["administrator"],"allcaps":{"switch_themes":true,"edit_themes":true,"activate_plugins":true,"edit_plugins":true,"edit_users":true,"edit_files":true,"manage_options":true,"moderate_comments":true,"manage_categories":true,"manage_links":true,"upload_files":true,"import":true,"unfiltered_html":true,"edit_posts":true,"edit_others_posts":true,"edit_published_posts":true,"publish_posts":true,"edit_pages":true,"read":true,"level_10":true,"level_9":true,"level_8":true,"level_7":true,"level_6":true,"level_5":true,"level_4":true,"level_3":true,"level_2":true,"level_1":true,"level_0":true,"edit_others_pages":true,"edit_published_pages":true,"publish_pages":true,"delete_pages":true,"delete_others_pages":true,"delete_published_pages":true,"delete_posts":true,"delete_others_posts":true,"delete_published_posts":true,"delete_private_posts":true,"edit_private_posts":true,"read_private_posts":true,"delete_private_pages":true,"edit_private_pages":true,"read_private_pages":true,"delete_users":true,"create_users":true,"unfiltered_upload":true,"edit_dashboard":true,"update_plugins":true,"delete_plugins":true,"install_plugins":true,"update_themes":true,"install_themes":true,"update_core":true,"list_users":true,"remove_users":true,"promote_users":true,"edit_theme_options":true,"delete_themes":true,"export":true,"manage_bookit_staff":true,"manage_instagram_feed_options":true,"manage_woocommerce":true,"view_woocommerce_reports":true,"edit_product":true,"read_product":true,"delete_product":true,"edit_products":true,"edit_others_products":true,"publish_products":true,"read_private_products":true,"delete_products":true,"delete_private_products":true,"delete_published_products":true,"delete_others_products":true,"edit_private_products":true,"edit_published_products":true,"manage_product_terms":true,"edit_product_terms":true,"delete_product_terms":true,"assign_product_terms":true,"edit_shop_order":true,"read_shop_order":true,"delete_shop_order":true,"edit_shop_orders":true,"edit_others_shop_orders":true,"publish_shop_orders":true,"read_private_shop_orders":true,"delete_shop_orders":true,"delete_private_shop_orders":true,"delete_published_shop_orders":true,"delete_others_shop_orders":true,"edit_private_shop_orders":true,"edit_published_shop_orders":true,"manage_shop_order_terms":true,"edit_shop_order_terms":true,"delete_shop_order_terms":true,"assign_shop_order_terms":true,"edit_shop_coupon":true,"read_shop_coupon":true,"delete_shop_coupon":true,"edit_shop_coupons":true,"edit_others_shop_coupons":true,"publish_shop_coupons":true,"read_private_shop_coupons":true,"delete_shop_coupons":true,"delete_private_shop_coupons":true,"delete_published_shop_coupons":true,"delete_others_shop_coupons":true,"edit_private_shop_coupons":true,"edit_published_shop_coupons":true,"manage_shop_coupon_terms":true,"edit_shop_coupon_terms":true,"delete_shop_coupon_terms":true,"assign_shop_coupon_terms":true,"bcn_manage_options":true,"manage_tutor":true,"manage_tutor_instructor":true,"edit_tutor_course":true,"read_tutor_course":true,"delete_tutor_course":true,"delete_tutor_courses":true,"edit_tutor_courses":true,"edit_others_tutor_courses":true,"read_private_tutor_courses":true,"edit_tutor_lesson":true,"read_tutor_lesson":true,"delete_tutor_lesson":true,"delete_tutor_lessons":true,"edit_tutor_lessons":true,"edit_others_tutor_lessons":true,"read_private_tutor_lessons":true,"publish_tutor_lessons":true,"edit_tutor_quiz":true,"read_tutor_quiz":true,"delete_tutor_quiz":true,"delete_tutor_quizzes":true,"edit_tutor_quizzes":true,"edit_others_tutor_quizzes":true,"read_private_tutor_quizzes":true,"publish_tutor_quizzes":true,"edit_tutor_question":true,"read_tutor_question":true,"delete_tutor_question":true,"delete_tutor_questions":true,"edit_tutor_questions":true,"edit_others_tutor_questions":true,"publish_tutor_questions":true,"read_private_tutor_questions":true,"publish_tutor_courses":true,"edit_docs":true,"edit_others_docs":true,"delete_docs":true,"publish_docs":true,"read_private_docs":true,"delete_private_docs":true,"delete_published_docs":true,"delete_others_docs":true,"edit_private_docs":true,"edit_published_docs":true,"manage_doc_terms":true,"edit_doc_terms":true,"delete_doc_terms":true,"manage_knowledge_base_terms":true,"edit_knowledge_base_terms":true,"delete_knowledge_base_terms":true,"edit_docs_settings":true,"read_docs_analytics":true,"manage_forminator":true,"frm_view_forms":true,"frm_edit_forms":true,"frm_delete_forms":true,"frm_change_settings":true,"frm_view_entries":true,"frm_delete_entries":true,"pmpro_memberships_menu":true,"pmpro_dashboard":true,"pmpro_wizard":true,"pmpro_membershiplevels":true,"pmpro_edit_memberships":true,"pmpro_pagesettings":true,"pmpro_paymentsettings":true,"pmpro_emailsettings":true,"pmpro_emailtemplates":true,"pmpro_advancedsettings":true,"pmpro_addons":true,"pmpro_memberslist":true,"pmpro_memberslistcsv":true,"pmpro_reports":true,"pmpro_orders":true,"pmpro_orderscsv":true,"pmpro_discountcodes":true,"pmpro_userfields":true,"pmpro_updates":true,"pmpro_manage_pause_mode":true,"administrator":true,"bookingpress":true,"bookingpress_calendar":true,"bookingpress_appointments":true,"bookingpress_payments":true,"bookingpress_customers":true,"bookingpress_services":true,"bookingpress_notifications":true,"bookingpress_customize":true,"bookingpress_settings":true,"bookingpress_addons":true},"filter":null},"content_change_event":"tutor_content_changed_event","is_tutor_course_edit":"","assignment_max_file_allowed":"0","current_page":"","quiz_answer_display_time":"2000","is_ssl":"1","course_list_page_url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=tutor","course_post_type":"courses"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/tutor/assets/js/tutor-front.min.js?ver=2.1.8' id='tutor-frontend-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/jquery/ui/datepicker.min.js?ver=1.13.2' id='jquery-ui-datepicker-js'></script>
<script type='text/javascript' id='jquery-ui-datepicker-js-after'>
jQuery(function(jQuery){jQuery.datepicker.setDefaults({"closeText":"Close","currentText":"Today","monthNames":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthNamesShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"nextText":"Next","prevText":"Previous","dayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"dayNamesShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"dayNamesMin":["S","M","T","W","T","F","S"],"dateFormat":"MM d, yy","firstDay":1,"isRTL":false});});
</script>
<script type='text/javascript' id='jquery-blockui-js-extra'>
/* <![CDATA[ */
var jquery_blockui_params = {"cart_url":"https:\/\/itstest.websinova.com\/checkout-2\/","i18n_view_cart":"Checkout"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.7.5.1' id='jquery-blockui-js'></script>
<script type='text/javascript' id='js-cookie-js-extra'>
/* <![CDATA[ */
var js_cookie_params = {"cart_url":"https:\/\/itstest.websinova.com\/checkout-2\/","i18n_view_cart":"Checkout"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.7.5.1' id='js-cookie-js'></script>
<script type='text/javascript' id='woocommerce-js-extra'>
/* <![CDATA[ */
var woocommerce_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%&elementor_page_id=16045","cart_url":"https:\/\/itstest.websinova.com\/checkout-2\/","i18n_view_cart":"Checkout"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=7.5.1' id='woocommerce-js'></script>
<script type='text/javascript' id='wc-cart-fragments-js-extra'>
/* <![CDATA[ */
var wc_cart_fragments_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%&elementor_page_id=16045","cart_hash_key":"wc_cart_hash_11c11394bc7c8d9e296a74d5c080331a","fragment_name":"wc_fragments_11c11394bc7c8d9e296a74d5c080331a","request_timeout":"5000","cart_url":"https:\/\/itstest.websinova.com\/checkout-2\/","i18n_view_cart":"Checkout"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=7.5.1' id='wc-cart-fragments-js'></script>
<script type='text/javascript' id='wpsbc-script-js-extra'>
/* <![CDATA[ */
var wpsbc = {"ajax_url":"https:\/\/itstest.websinova.com\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/wp-simple-booking-calendar/assets/js/script-front-end.min.js?ver=2.0.8.3' id='wpsbc-script-js'></script>
<script type='text/javascript' id='pa-admin-bar-js-extra'>
/* <![CDATA[ */
var PaDynamicAssets = {"nonce":"ea3230c762","post_id":"16045","ajaxurl":"https:\/\/itstest.websinova.com\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/premium-addons-for-elementor/admin/assets/js/admin-bar.js?ver=4.9.53' id='pa-admin-bar-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/themes/consulting/assets/js/bootstrap.min.js?ver=6.2.9' id='bootstrap-js'></script>
<script type='text/javascript' id='select2-js-extra'>
/* <![CDATA[ */
var select2_params = {"cart_url":"https:\/\/itstest.websinova.com\/checkout-2\/","i18n_view_cart":"Checkout"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/js/select2/select2.full.min.js?ver=4.0.3-wc.7.5.1' id='select2-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/themes/consulting/assets/js/custom.js?ver=6.2.9' id='consulting-custom-js'></script>
<script type='text/javascript' id='stm-hfe-js-extra'>
/* <![CDATA[ */
var consulting_ehf_position_17971 = {"id":"17971","header_view":"","header_position":"relative"};
var consulting_ehf_position_13168 = {"id":"13168","header_view":"","header_position":"relative"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/themes/consulting/assets/js/stm-hfe.js?ver=6.2.9' id='stm-hfe-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/3d-flipbook-dflip-lite/assets/js/dflip.min.js?ver=1.7.35' id='dflip-script-js'></script>
<script type='text/javascript' id='joinchat-lite-js-extra'>
/* <![CDATA[ */
var joinchat_obj = {"settings":{"telephone":"919167989179","whatsapp_web":false,"message_send":"Hi need help"}};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/creame-whatsapp-me/public/js/joinchat-lite.min.js?ver=4.5.20' id='joinchat-lite-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/jquery/ui/draggable.min.js?ver=1.13.2' id='jquery-ui-draggable-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/lib/backbone/backbone.marionette.min.js?ver=2.4.5.e1' id='backbone-marionette-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/lib/backbone/backbone.radio.min.js?ver=1.0.4' id='backbone-radio-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/js/common-modules.min.js?ver=3.11.5' id='elementor-common-modules-js'></script>
<script type='text/javascript' id='elementor-web-cli-js-before'>
var elementorWebCliConfig = {"isDebug":false,"urls":{"rest":"https:\/\/itstest.websinova.com\/wp-json\/","assets":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/elementor\/assets\/"},"nonce":"647c28dcc8","version":"3.11.5"};
var elementorWebCliConfig = {"isDebug":false,"urls":{"rest":"https:\/\/itstest.websinova.com\/wp-json\/","assets":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/elementor\/assets\/"},"nonce":"647c28dcc8","version":"3.11.5"};
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/js/web-cli.min.js?ver=3.11.5' id='elementor-web-cli-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/lib/dialog/dialog.min.js?ver=4.9.0' id='elementor-dialog-js'></script>
<script type='text/javascript' id='elementor-dev-tools-js-before'>
var elementorDevToolsConfig = {"isDebug":false,"urls":{"assets":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/elementor\/assets\/"},"deprecation":{"soft_notices":[],"soft_version_count":4,"hard_version_count":8,"current_version":"3.11.5"}};
var elementorDevToolsConfig = {"isDebug":false,"urls":{"assets":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/elementor\/assets\/"},"deprecation":{"soft_notices":[],"soft_version_count":4,"hard_version_count":8,"current_version":"3.11.5"}};
var elementorDevToolsConfig = {"isDebug":false,"urls":{"assets":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/elementor\/assets\/"},"deprecation":{"soft_notices":[],"soft_version_count":4,"hard_version_count":8,"current_version":"3.11.5"}};
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/js/dev-tools.min.js?ver=3.11.5' id='elementor-dev-tools-js'></script>
<script type='text/javascript' id='elementor-common-js-before'>
var elementorCommonConfig = {"version":"3.11.5","isRTL":false,"isDebug":false,"isElementorDebug":false,"activeModules":["ajax","finder","connect","event-tracker"],"experimentalFeatures":{"e_dom_optimization":true,"e_optimized_assets_loading":true,"e_optimized_css_loading":true,"a11y_improvements":true,"additional_custom_breakpoints":true,"e_swiper_latest":true,"theme_builder_v2":true,"landing-pages":true,"kit-elements-defaults":true,"page-transitions":true,"notes":true,"loop":true,"form-submissions":true,"e_scroll_snap":true},"urls":{"assets":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/elementor\/assets\/","rest":"https:\/\/itstest.websinova.com\/wp-json\/"},"filesUpload":{"unfilteredFiles":true},"library_connect":{"is_connected":false,"subscription_plans":[{"label":null,"promotion_url":null,"color":null},{"label":"Pro","promotion_url":"https:\/\/elementor.com\/pro\/?utm_source=template-library&utm_medium=wp-dash&utm_campaign=gopro","color":"#92003B"}],"base_access_level":0,"current_access_level":0},"ajax":{"url":"https:\/\/itstest.websinova.com\/wp-admin\/admin-ajax.php","nonce":"898f47d54b"},"finder":{"data":{"edit":{"title":"Edit","dynamic":true,"name":"edit"},"general":{"title":"General","dynamic":false,"items":{"saved-templates":{"title":"Saved Templates","icon":"library-save","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?post_type=elementor_library&tabs_group=library","keywords":["template","section","page","library"]},"system-info":{"title":"System Info","icon":"info-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor-system-info","keywords":["system","info","environment","elementor"]},"role-manager":{"title":"Role Manager","icon":"person","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor-role-manager","keywords":["role","manager","user","elementor"]},"knowledge-base":{"title":"Knowledge Base","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=go_knowledge_base_site","keywords":["help","knowledge","docs","elementor"]},"theme-builder":{"title":"Theme Builder","icon":"library-save","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor-app&ver=3.11.5#\/site-editor","keywords":["template","header","footer","single","archive","search","404","library"]},"kit-library":{"title":"Kit Library","icon":"kit-parts","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor-app&ver=3.11.5#\/kit-library","keywords":["kit library","kit","library","site parts","parts","assets","templates"]},"popups":{"title":"Popups","icon":"library-save","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?post_type=elementor_library&tabs_group=popup&elementor_library_type=popup","keywords":["template","popup","library"]}},"name":"general"},"create":{"title":"Create","dynamic":false,"items":{"page":{"title":"Add New Page Template","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&template_type=page&_wpnonce=dc9ceae9f7","keywords":["Add New Page Template","post","page","template","new","create"]},"section":{"title":"Add New Section","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=section","keywords":["Add New Section","post","page","template","new","create"]},"wp-post":{"title":"Add New Post","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=post&template_type=wp-post&_wpnonce=dc9ceae9f7","keywords":["Add New Post","post","page","template","new","create"]},"wp-page":{"title":"Add New Page","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=page&template_type=wp-page&_wpnonce=dc9ceae9f7","keywords":["Add New Page","post","page","template","new","create"]},"docs":{"title":"Add New Single Doc","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=docs","keywords":["Add New Single Doc","post","page","template","new","create"]},"doc-archive":{"title":"Add New Docs Archive","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=doc-archive","keywords":["Add New Docs Archive","post","page","template","new","create"]},"landing-page":{"title":"Add New Landing Page","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=e-landing-page&template_type=landing-page&_wpnonce=dc9ceae9f7#library","keywords":["Add New Landing Page","post","page","template","new","create"]},"popup":{"title":"Add New Popup","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=popup","keywords":["Add New Popup","post","page","template","new","create"]},"header":{"title":"Add New Header","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=header","keywords":["Add New Header","post","page","template","new","create"]},"footer":{"title":"Add New Footer","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=footer","keywords":["Add New Footer","post","page","template","new","create"]},"single":{"title":"Add New Single","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=single","keywords":["Add New Single","post","page","template","new","create"]},"single-post":{"title":"Add New Single Post","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=single-post","keywords":["Add New Single Post","post","page","template","new","create"]},"single-page":{"title":"Add New Single Page","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=single-page&_elementor_template_sub_type=page","keywords":["Add New Single Page","post","page","template","new","create"]},"archive":{"title":"Add New Archive","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=archive","keywords":["Add New Archive","post","page","template","new","create"]},"search-results":{"title":"Add New Search Results","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=search-results&_elementor_template_sub_type=search","keywords":["Add New Search Results","post","page","template","new","create"]},"error-404":{"title":"Add New Error 404","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=error-404&_elementor_template_sub_type=not_found404","keywords":["Add New Error 404","post","page","template","new","create"]},"code_snippet":{"title":"Add New Custom Code","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/post-new.php?post_type=elementor_snippet","keywords":["Add New Custom Code","post","page","template","new","create"]},"product-post":{"title":"Add New Product Post","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=product&template_type=wp-post&_wpnonce=dc9ceae9f7","keywords":["Add New Product Post","post","page","template","new","create"]},"product":{"title":"Add New Single Product","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=product","keywords":["Add New Single Product","post","page","template","new","create"]},"product-archive":{"title":"Add New Products Archive","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=product-archive","keywords":["Add New Products Archive","post","page","template","new","create"]},"loop-item":{"title":"Add New Loop Item","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor_library&_wpnonce=dc9ceae9f7&template_type=loop-item","keywords":["Add New Loop Item","post","page","template","new","create"]},"stm_event":{"title":"Add New Events","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=stm_event&_wpnonce=dc9ceae9f7","keywords":["Add New Events","post","page","template","new","create"]},"event_member":{"title":"Add New Member","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=event_member&_wpnonce=dc9ceae9f7","keywords":["Add New Member","post","page","template","new","create"]},"stm_service":{"title":"Add New Service","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=stm_service&_wpnonce=dc9ceae9f7","keywords":["Add New Service","post","page","template","new","create"]},"stm_careers":{"title":"Add New Vacancy","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=stm_careers&_wpnonce=dc9ceae9f7","keywords":["Add New Vacancy","post","page","template","new","create"]},"stm_staff":{"title":"Add New Staff","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=stm_staff&_wpnonce=dc9ceae9f7","keywords":["Add New Staff","post","page","template","new","create"]},"stm_works":{"title":"Add New Work","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=stm_works&_wpnonce=dc9ceae9f7","keywords":["Add New Work","post","page","template","new","create"]},"stm_testimonials":{"title":"Add New Testimonial","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=stm_testimonials&_wpnonce=dc9ceae9f7","keywords":["Add New Testimonial","post","page","template","new","create"]},"stm_vc_sidebar":{"title":"Add New VC Sidebar","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=stm_vc_sidebar&_wpnonce=dc9ceae9f7","keywords":["Add New VC Sidebar","post","page","template","new","create"]},"stm_portfolio":{"title":"Add New Portfolio","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=stm_portfolio&_wpnonce=dc9ceae9f7","keywords":["Add New Portfolio","post","page","template","new","create"]},"stm-zoom":{"title":"Add New Meeting","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=stm-zoom&_wpnonce=dc9ceae9f7","keywords":["Add New Meeting","post","page","template","new","create"]},"stm-zoom-webinar":{"title":"Add New Webinar","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=stm-zoom-webinar&_wpnonce=dc9ceae9f7","keywords":["Add New Webinar","post","page","template","new","create"]},"elementor-hf":{"title":"Add New Elementor Header & Footer Builder","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?action=elementor_new_post&post_type=elementor-hf&_wpnonce=dc9ceae9f7","keywords":["Add New Elementor Header & Footer Builder","post","page","template","new","create"]},"theme-template":{"title":"Add New Theme Template","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor-app&ver=3.11.5#\/site-editor\/add-new","keywords":["template","theme","new","create"]},"loop-template":{"title":"Add New Loop Template","icon":"plus-circle-o","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?post_type=elementor_library&tabs_group=theme&elementor_library_type=loop-item#add_new","keywords":["template","theme","new","create","loop","dynamic","listing","archive","repeater"]}},"name":"create"},"site":{"title":"Site","dynamic":false,"items":{"homepage":{"title":"Homepage","url":"https:\/\/itstest.websinova.com","icon":"home-heart","keywords":["home","page"]},"wordpress-dashboard":{"title":"Dashboard","icon":"dashboard","url":"https:\/\/itstest.websinova.com\/wp-admin\/","keywords":["dashboard","wordpress"]},"wordpress-menus":{"title":"Menus","icon":"wordpress","url":"https:\/\/itstest.websinova.com\/wp-admin\/nav-menus.php","keywords":["menu","wordpress"]},"wordpress-themes":{"title":"Themes","icon":"wordpress","url":"https:\/\/itstest.websinova.com\/wp-admin\/themes.php","keywords":["themes","wordpress"]},"wordpress-customizer":{"title":"Customizer","icon":"wordpress","url":"https:\/\/itstest.websinova.com\/wp-admin\/customize.php","keywords":["customizer","wordpress"]},"wordpress-plugins":{"title":"Plugins","icon":"wordpress","url":"https:\/\/itstest.websinova.com\/wp-admin\/plugins.php","keywords":["plugins","wordpress"]},"wordpress-users":{"title":"Users","icon":"wordpress","url":"https:\/\/itstest.websinova.com\/wp-admin\/users.php","keywords":["users","profile","wordpress"]}},"name":"site"},"settings":{"title":"Settings","dynamic":false,"items":{"general-settings":{"title":"General Settings","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor","keywords":["general","settings","elementor"]},"advanced":{"title":"Advanced","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor#tab-advanced","keywords":["advanced","settings","elementor"]},"experiments":{"title":"Experiments","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor#tab-experiments","keywords":["settings","elementor","experiments"]},"custom-fonts":{"title":"Custom Fonts","icon":"typography","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?post_type=elementor_font","keywords":["custom","fonts","elementor"]},"custom-icons":{"title":"Custom Icons","icon":"favorite","url":"https:\/\/itstest.websinova.com\/wp-admin\/edit.php?post_type=elementor_icons","keywords":["custom","icons","elementor"]}},"name":"settings"},"tools":{"title":"Tools","dynamic":false,"items":{"tools":{"title":"Tools","icon":"tools","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor-tools","keywords":["tools","regenerate css","safe mode","debug bar","sync library","elementor"]},"replace-url":{"title":"Replace URL","icon":"tools","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor-tools#tab-replace_url","keywords":["tools","replace url","domain","elementor"]},"maintenance-mode":{"title":"Maintenance Mode","icon":"tools","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor-tools#tab-maintenance_mode","keywords":["tools","maintenance","coming soon","elementor"]},"import-export":{"title":"Import Export","icon":"import-export","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor-tools#tab-import-export-kit","keywords":["tools","import export","import","export","kit"]},"version-control":{"title":"Version Control","icon":"time-line","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor-tools#tab-versions","keywords":["tools","version","control","rollback","beta","elementor"]}},"name":"tools"},"joinchat":{"title":"Joinchat","dynamic":false,"items":{"general":{"title":"General Settings","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=joinchat","icon":"settings","keywords":["joinchat","whatsapp","settings","phone"],"description":"Joinchat settings page"},"visibility":{"title":"Visibility Settings","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=joinchat&tab=visibility","icon":"eye","keywords":["joinchat","whatsapp","visibility","show","hide"],"description":"Joinchat settings page"},"woocommerce":{"title":"WooCommerce Settings","url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=joinchat&tab=woocommerce","icon":"woocommerce","keywords":["joinchat","whatsapp","woocommerce","shop","product"],"description":"Joinchat settings page"}},"name":"joinchat"}}},"connect":[],"event-tracker":{"isUserDataShared":false}};
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/js/common.min.js?ver=3.11.5' id='elementor-common-js'></script>
<script type='text/javascript' id='elementor-app-loader-js-before'>
var elementorAppConfig = {"menu_url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor-app&ver=3.11.5#\/site-editor","assets_url":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/elementor\/assets\/","return_url":"https:\/\/itstest.websinova.com\/wp-admin\/","hasPro":true,"admin_url":"https:\/\/itstest.websinova.com\/wp-admin\/","login_url":"https:\/\/itstest.websinova.com\/wp-login.php","base_url":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor-app&ver=3.11.5","site-editor":[],"import-export":[],"kit-library":[],"onboarding":[]};
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/js/app-loader.min.js?ver=3.11.5' id='elementor-app-loader-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/jquery/ui/accordion.min.js?ver=1.13.2' id='jquery-ui-accordion-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/js/mixitup.min.js?ver=1' id='mep-mixitup-min-js-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/js/countdown.jquery.min.js?ver=1' id='mep-countdown-js-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/js/filter_pagination.js?ver=1680853964' id='filter_pagination-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/js/mp_event_custom_script.js?ver=1680853964' id='mp_event_custom_script-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/js/timeline.min.js?ver=1' id='mep-timeline-min-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/js/mkb-scripts.js?ver=1680853964' id='mep-event-custom-scripts-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/js/mep_event_faq.js?ver=1' id='mep-event-faq-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/mage-eventpress/js/owl.carousel.min.js?ver=1' id='mep-owl-carousel-min-js'></script>
<script type='text/javascript' id='eael-general-js-extra'>
/* <![CDATA[ */
var localize = {"ajaxurl":"https:\/\/itstest.websinova.com\/wp-admin\/admin-ajax.php","nonce":"beae5764e4","i18n":{"added":"Added ","compare":"Compare","loading":"Loading..."},"eael_translate_text":{"required_text":"is a required field","invalid_text":"Invalid","billing_text":"Billing","shipping_text":"Shipping","fg_mfp_counter_text":"of"},"page_permalink":"https:\/\/itstest.websinova.com\/dashboard\/","cart_redirectition":"","cart_page_url":"https:\/\/itstest.websinova.com\/cart-2\/","el_breakpoints":{"mobile":{"label":"Mobile","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Extra","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Extra","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/js/view/general.min.js?ver=5.6.4' id='eael-general-js'></script>
<script type='text/javascript' defer src='https://itstest.websinova.com/wp-content/plugins/mailchimp-for-wp/assets/js/forms.js?ver=4.9.2' id='mc4wp-forms-api-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js?ver=3.11.4' id='elementor-pro-webpack-runtime-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.11.5' id='elementor-webpack-runtime-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.11.5' id='elementor-frontend-modules-js'></script>
<script type='text/javascript' id='elementor-pro-frontend-js-before'>
var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/itstest.websinova.com\/wp-admin\/admin-ajax.php","nonce":"442b88dfa0","urls":{"assets":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/itstest.websinova.com\/wp-json\/"},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"}},"woocommerce":{"menu_cart":{"cart_page_url":"https:\/\/itstest.websinova.com\/cart-2\/","checkout_page_url":"https:\/\/itstest.websinova.com\/checkout-2\/","fragments_nonce":"b2ce5d4c94"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.11.4' id='elementor-pro-frontend-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2' id='elementor-waypoints-js'></script>
<script type='text/javascript' id='elementor-frontend-js-before'>
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Extra","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Extra","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.11.5","is_static":false,"experimentalFeatures":{"e_dom_optimization":true,"e_optimized_assets_loading":true,"e_optimized_css_loading":true,"a11y_improvements":true,"additional_custom_breakpoints":true,"e_swiper_latest":true,"theme_builder_v2":true,"landing-pages":true,"kit-elements-defaults":true,"page-transitions":true,"notes":true,"loop":true,"form-submissions":true,"e_scroll_snap":true},"urls":{"assets":"https:\/\/itstest.websinova.com\/wp-content\/plugins\/elementor\/assets\/"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description","woocommerce_notices_elements":[]},"post":{"id":16045,"title":"Dashboard%20%E2%80%93%20Testing%20Website","excerpt":"","featuredImage":false},"user":{"roles":["administrator"]}};
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.11.5' id='elementor-frontend-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js?ver=3.11.4' id='pro-elements-handlers-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor-pro/assets/lib/sticky/jquery.sticky.min.js?ver=3.11.4' id='e-sticky-js'></script>
<script type='text/javascript' id='wpforms-elementor-js-extra'>
/* <![CDATA[ */
var wpformsElementorVars = {"captcha_provider":"recaptcha","recaptcha_type":"v2"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/wpforms-lite/assets/js/integrations/elementor/frontend.min.js?ver=1.8.1.1' id='wpforms-elementor-js'></script>
<script type='text/javascript' id='zoom-js-extra'>
/* <![CDATA[ */
var zoom_params = {"cart_url":"https:\/\/itstest.websinova.com\/checkout-2\/","i18n_view_cart":"Checkout"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/js/zoom/jquery.zoom.min.js?ver=1.7.21-wc.7.5.1' id='zoom-js'></script>
<script type='text/javascript' id='photoswipe-js-extra'>
/* <![CDATA[ */
var photoswipe_params = {"cart_url":"https:\/\/itstest.websinova.com\/checkout-2\/","i18n_view_cart":"Checkout"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/js/photoswipe/photoswipe.min.js?ver=4.1.1-wc.7.5.1' id='photoswipe-js'></script>
<script type='text/javascript' id='photoswipe-ui-default-js-extra'>
/* <![CDATA[ */
var photoswipe_ui_default_params = {"cart_url":"https:\/\/itstest.websinova.com\/checkout-2\/","i18n_view_cart":"Checkout"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/js/photoswipe/photoswipe-ui-default.min.js?ver=4.1.1-wc.7.5.1' id='photoswipe-ui-default-js'></script>
<script type='text/javascript' id='wc-add-to-cart-variation-js-extra'>
/* <![CDATA[ */
var wc_add_to_cart_variation_params = {"wc_ajax_url":"\/?wc-ajax=%%endpoint%%&elementor_page_id=16045","i18n_no_matching_variations_text":"Sorry, no products matched your selection. Please choose a different combination.","i18n_make_a_selection_text":"Please select some product options before adding this product to your cart.","i18n_unavailable_text":"Sorry, this product is unavailable. Please choose a different combination.","cart_url":"https:\/\/itstest.websinova.com\/checkout-2\/","i18n_view_cart":"Checkout"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart-variation.min.js?ver=7.5.1' id='wc-add-to-cart-variation-js'></script>
<script type='text/javascript' id='wc-single-product-js-extra'>
/* <![CDATA[ */
var wc_single_product_params = {"i18n_required_rating_text":"Please select a rating","review_rating_required":"yes","flexslider":{"rtl":false,"animation":"slide","smoothHeight":true,"directionNav":false,"controlNav":"thumbnails","slideshow":false,"animationSpeed":500,"animationLoop":false,"allowOneSlide":false},"zoom_enabled":"1","zoom_options":[],"photoswipe_enabled":"1","photoswipe_options":{"shareEl":false,"closeOnScroll":false,"history":false,"hideAnimationDuration":0,"showAnimationDuration":0},"flexslider_enabled":"","cart_url":"https:\/\/itstest.websinova.com\/checkout-2\/","i18n_view_cart":"Checkout"};
/* ]]> */
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/woocommerce/assets/js/frontend/single-product.min.js?ver=7.5.1' id='wc-single-product-js'></script>
<script type='text/javascript' id='elementor-admin-bar-js-before'>
var elementorAdminBarConfig = {"elementor_edit_page":{"id":"elementor_edit_page","title":"Edit with Elementor","href":null,"children":{"17971":{"id":"elementor_edit_doc_17971","title":"Main Header - Rest of the pages","sub_title":"Post","href":"https:\/\/itstest.websinova.com\/wp-admin\/post.php?post=17971&action=elementor"},"13168":{"id":"elementor_edit_doc_13168","title":"Footer","sub_title":"Post","href":"https:\/\/itstest.websinova.com\/wp-admin\/post.php?post=13168&action=elementor"},"17972":{"id":"elementor_site_settings","title":"Site Settings","sub_title":"Site","href":"https:\/\/itstest.websinova.com\/wp-admin\/post.php?post=16045&action=elementor#e:run:panel\/global\/open","class":"elementor-site-settings","parent_class":"elementor-second-section"},"17973":{"id":"elementor_app_site_editor","title":"Theme Builder","sub_title":"Site","href":"https:\/\/itstest.websinova.com\/wp-admin\/admin.php?page=elementor-app&ver=3.11.5#\/site-editor","class":"elementor-app-link","parent_class":"elementor-second-section"}}}};
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-content/plugins/elementor/assets/js/elementor-admin-bar.min.js?ver=3.11.5' id='elementor-admin-bar-js'></script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/hoverintent-js.min.js?ver=2.2.1' id='hoverintent-js-js'></script>
<script type='text/javascript' id='admin-bar-js-before'>
( function() {
				function wpforms_admin_bar_menu_init() {
					var template = document.getElementById( 'tmpl-wpforms-admin-menubar-data' ),
						notifications = document.getElementById( 'wp-admin-bar-wpforms-notifications' );

					if ( ! template ) {
						return;
					}

					if ( ! notifications ) {
						var menu = document.getElementById( 'wp-admin-bar-wpforms-menu-default' );

						if ( ! menu ) {
							return;
						}

						menu.insertAdjacentHTML( 'afterBegin', template.innerHTML );
					} else {
						notifications.insertAdjacentHTML( 'afterend', template.innerHTML );
					}
				};
				document.addEventListener( 'DOMContentLoaded', wpforms_admin_bar_menu_init );
			}() );
</script>
<script type='text/javascript' src='https://itstest.websinova.com/wp-includes/js/admin-bar.min.js?ver=6.1.1' id='admin-bar-js'></script>
<div class='xlwcty_header_passed' style='display: none;'></div>		<script>
			function rs_adminBarToolBarTopFunction() {
				if(jQuery('#wp-admin-bar-revslider-default').length > 0 && jQuery('rs-module-wrap').length > 0){
					var aliases = new Array();
					jQuery('rs-module-wrap').each(function(){
						aliases.push(jQuery(this).data('alias'));
					});
					
					if(aliases.length > 0){
						jQuery('#wp-admin-bar-revslider-default li').each(function(){
							var li = jQuery(this),
								t = li.find('.ab-item .rs-label').data('alias'); //text()
							t = t!==undefined && t!==null ? t.trim() : t;
							if(jQuery.inArray(t,aliases)!=-1){
							}else{
								li.remove();
							}
						});
					}
				}else{
					jQuery('#wp-admin-bar-revslider').remove();
				}
			}
			var adminBarLoaded_once = false
			if (document.readyState === "loading") 
				document.addEventListener('readystatechange',function(){
					if ((document.readyState === "interactive" || document.readyState === "complete") && !adminBarLoaded_once) {
						adminBarLoaded_once = true;
						rs_adminBarToolBarTopFunction()
					}
				});
			else {
				adminBarLoaded_once = true;
				rs_adminBarToolBarTopFunction();
			}
		</script>
			<script type="text/javascript">
		(function() {
			var request, b = document.body, c = 'className', cs = 'customize-support', rcs = new RegExp('(^|\\s+)(no-)?'+cs+'(\\s+|$)');

				request = true;
	
			b[c] = b[c].replace( rcs, ' ' );
			// The customizer requires postMessage and CORS (if the site is cross domain).
			b[c] += ( window.postMessage && request ? ' ' : ' no-' ) + cs;
		}());
	</script>
			<div id="wpadminbar" class="nojq nojs">
						<div class="quicklinks" id="wp-toolbar" role="navigation" aria-label="Toolbar">
				<ul id='wp-admin-bar-root-default' class="ab-top-menu"><li id='wp-admin-bar-wp-logo' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://itstest.websinova.com/wp-admin/about.php'><span class="ab-icon" aria-hidden="true"></span><span class="screen-reader-text">About WordPress</span></a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-wp-logo-default' class="ab-submenu"><li id='wp-admin-bar-about'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/about.php'>About WordPress</a></li></ul><ul id='wp-admin-bar-wp-logo-external' class="ab-sub-secondary ab-submenu"><li id='wp-admin-bar-wporg'><a class='ab-item' href='https://wordpress.org/'>WordPress.org</a></li><li id='wp-admin-bar-documentation'><a class='ab-item' href='https://wordpress.org/support/'>Documentation</a></li><li id='wp-admin-bar-support-forums'><a class='ab-item' href='https://wordpress.org/support/forums/'>Support</a></li><li id='wp-admin-bar-feedback'><a class='ab-item' href='https://wordpress.org/support/forum/requests-and-feedback'>Feedback</a></li></ul></div></li><li id='wp-admin-bar-site-name' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://itstest.websinova.com/wp-admin/'>Testing Website</a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-site-name-default' class="ab-submenu"><li id='wp-admin-bar-dashboard'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/'>Dashboard</a></li></ul><ul id='wp-admin-bar-appearance' class="ab-submenu"><li id='wp-admin-bar-themes'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/themes.php'>Themes</a></li><li id='wp-admin-bar-widgets'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/widgets.php'>Widgets</a></li><li id='wp-admin-bar-menus'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/nav-menus.php'>Menus</a></li></ul></div></li><li id='wp-admin-bar-consulting_settings'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/?page=consulting_settings' title='Theme Options'><img src='https://itstest.websinova.com/wp-content/themes/consulting/assets/admin/images/icon_theme_options.png' /> Theme Options</a></li><li id='wp-admin-bar-customize' class="hide-if-no-customize"><a class='ab-item' href='https://itstest.websinova.com/wp-admin/customize.php?url=https%3A%2F%2Fitstest.websinova.com%2Fdashboard%2F'>Customize</a></li><li id='wp-admin-bar-ccb-admin-menu' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://itstest.websinova.com/wp-admin/admin.php?page=cost_calculator_builder'><img class="ccb-icon-logo" src="https://itstest.websinova.com/wp-content/plugins/cost-calculator-builder/frontend/dist/img/ccb-logo.svg"/>Cost Calculator</a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-ccb-admin-menu-default' class="ab-submenu"><li id='wp-admin-bar-ccb-admin-menu-items' class="ccb-admin-menu-item"><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=cost_calculator_builder'>Calculators</a></li><li id='wp-admin-bar-ccb-admin-menu-items-create' class="ccb-admin-menu-item"><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=cost_calculator_builder&#038;create-calc-from-menu=1'>Create Calculator</a></li><li id='wp-admin-bar-ccb-admin-menu-items-settings' class="ccb-admin-menu-item"><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=cost_calculator_builder&#038;tab=settings'>Settings</a></li><li id='wp-admin-bar-ccb-admin-menu-items-community' class="ccb-admin-menu-item"><a class='ab-item' href='https://www.facebook.com/groups/costcalculator' target='_blank'>Community</a></li><li id='wp-admin-bar-ccb-admin-menu-items-documentation' class="ccb-admin-menu-item"><a class='ab-item' href='https://docs.stylemixthemes.com/cost-calculator-builder/' target='_blank'>Documentation</a></li><li id='wp-admin-bar-ccb-admin-menu-items-upgrade' class="ccb-admin-menu-item"><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=cost_calculator_gopro'>Upgrade</a></li></ul></div></li><li id='wp-admin-bar-updates'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/update-core.php'><span class="ab-icon" aria-hidden="true"></span><span class="ab-label" aria-hidden="true">10</span><span class="screen-reader-text updates-available-text">10 updates available</span></a></li><li id='wp-admin-bar-comments'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/edit-comments.php'><span class="ab-icon" aria-hidden="true"></span><span class="ab-label awaiting-mod pending-count count-0" aria-hidden="true">0</span><span class="screen-reader-text comments-in-moderation-text">0 Comments in moderation</span></a></li><li id='wp-admin-bar-new-content' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://itstest.websinova.com/wp-admin/post-new.php'><span class="ab-icon" aria-hidden="true"></span><span class="ab-label">New</span></a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-new-content-default' class="ab-submenu"><li id='wp-admin-bar-new-post'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php'>Post</a></li><li id='wp-admin-bar-new-media'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/media-new.php'>Media</a></li><li id='wp-admin-bar-new-page'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=page'>Page</a></li><li id='wp-admin-bar-new-dflip'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=dflip'>dFlip Book</a></li><li id='wp-admin-bar-new-e-landing-page'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/edit.php?action=elementor_new_post&#038;post_type=e-landing-page&#038;template_type=landing-page&#038;_wpnonce=dc9ceae9f7#library'>Landing Page</a></li><li id='wp-admin-bar-new-elementor_library'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=elementor_library'>Template</a></li><li id='wp-admin-bar-new-pmpro_course'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=pmpro_course'>Course</a></li><li id='wp-admin-bar-new-stm_event'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=stm_event'>Events</a></li><li id='wp-admin-bar-new-event_member'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=event_member'>Member</a></li><li id='wp-admin-bar-new-stm_service'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=stm_service'>Service</a></li><li id='wp-admin-bar-new-stm_careers'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=stm_careers'>Vacancy</a></li><li id='wp-admin-bar-new-stm_staff'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=stm_staff'>Staff</a></li><li id='wp-admin-bar-new-stm_works'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=stm_works'>Work</a></li><li id='wp-admin-bar-new-stm_testimonials'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=stm_testimonials'>Testimonial</a></li><li id='wp-admin-bar-new-stm_vc_sidebar'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=stm_vc_sidebar'>VC Sidebar</a></li><li id='wp-admin-bar-new-stm_portfolio'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=stm_portfolio'>Portfolio</a></li><li id='wp-admin-bar-new-product'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=product'>Product</a></li><li id='wp-admin-bar-new-shop_order'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=shop_order'>Order</a></li><li id='wp-admin-bar-new-shop_coupon'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=shop_coupon'>Coupon</a></li><li id='wp-admin-bar-new-docs'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=docs'>Docs</a></li><li id='wp-admin-bar-new-stm-zoom'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=stm-zoom'>Meeting</a></li><li id='wp-admin-bar-new-stm-zoom-webinar'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=stm-zoom-webinar'>Webinar</a></li><li id='wp-admin-bar-new-mep_events'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=mep_events'>Events</a></li><li id='wp-admin-bar-new-courses'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=courses'>Course</a></li><li id='wp-admin-bar-new-pmpro_lesson'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post-new.php?post_type=pmpro_lesson'>Lesson</a></li><li id='wp-admin-bar-new-user'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/user-new.php'>User</a></li><li id='wp-admin-bar-wpforms'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=wpforms-builder'>WPForms</a></li><li id='wp-admin-bar-gravityforms-new-form'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=gf_new_form'>Form</a></li></ul></div></li><li id='wp-admin-bar-edit'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post.php?post=16045&#038;action=edit'>Edit Page</a></li><li id='wp-admin-bar-litespeed-menu' class="menupop litespeed-top-toolbar"><a class='ab-item' tabindex="0" aria-haspopup="true" href='https://itstest.websinova.com/wp-admin/admin.php?page=litespeed'><span class="ab-icon"></span></a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-litespeed-menu-default' class="ab-submenu"><li id='wp-admin-bar-litespeed-purge-single'><a class='ab-item' tabindex="0" href='https://itstest.websinova.com/wp-admin/admin.php?LSCWP_CTRL=purge&#038;LSCWP_NONCE=87500d7c14&#038;litespeed_type=purge_front'>Purge this page - LSCache</a></li><li id='wp-admin-bar-litespeed-single-action' class="menupop"><div class="ab-item ab-empty-item" tabindex="0" aria-haspopup="true"><span class="wp-admin-bar-arrow" aria-hidden="true"></span>Mark this page as </div><div class="ab-sub-wrapper"><ul id='wp-admin-bar-litespeed-single-action-default' class="ab-submenu"><li id='wp-admin-bar-litespeed-single-forced_cache'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?LSCWP_CTRL=conf&#038;LSCWP_NONCE=10eb56f3c2&#038;litespeed_type=set&#038;set%5Bcache-force_uri%5D%5B%5D=%2Fdashboard%2F%24&#038;redirect=%2Fdashboard%2F'>Forced cacheable</a></li><li id='wp-admin-bar-litespeed-single-noncache'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?LSCWP_CTRL=conf&#038;LSCWP_NONCE=10eb56f3c2&#038;litespeed_type=set&#038;set%5Bcache-exc%5D%5B%5D=%2Fdashboard%2F%24&#038;redirect=%2Fdashboard%2F'>Non cacheable</a></li><li id='wp-admin-bar-litespeed-single-private'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?LSCWP_CTRL=conf&#038;LSCWP_NONCE=10eb56f3c2&#038;litespeed_type=set&#038;set%5Bcache-priv_uri%5D%5B%5D=%2Fdashboard%2F%24&#038;redirect=%2Fdashboard%2F'>Private cache</a></li><li id='wp-admin-bar-litespeed-single-nonoptimize'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?LSCWP_CTRL=conf&#038;LSCWP_NONCE=10eb56f3c2&#038;litespeed_type=set&#038;set%5Boptm-exc%5D%5B%5D=%2Fdashboard%2F%24&#038;redirect=%2Fdashboard%2F'>No optimization</a></li><li id='wp-admin-bar-litespeed-single-more'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=litespeed-cache'>More settings</a></li></ul></div></li><li id='wp-admin-bar-litespeed-purge-all'><a class='ab-item' tabindex="0" href='https://itstest.websinova.com/wp-admin/admin.php?LSCWP_CTRL=purge&#038;LSCWP_NONCE=87500d7c14&#038;litespeed_type=purge_all&#038;_litespeed_ori=1'>Purge All</a></li><li id='wp-admin-bar-litespeed-purge-all-lscache'><a class='ab-item' tabindex="0" href='https://itstest.websinova.com/wp-admin/admin.php?LSCWP_CTRL=purge&#038;LSCWP_NONCE=87500d7c14&#038;litespeed_type=purge_all_lscache&#038;_litespeed_ori=1'>Purge All - LSCache</a></li><li id='wp-admin-bar-litespeed-purge-cssjs'><a class='ab-item' tabindex="0" href='https://itstest.websinova.com/wp-admin/admin.php?LSCWP_CTRL=purge&#038;LSCWP_NONCE=87500d7c14&#038;litespeed_type=purge_all_cssjs&#038;_litespeed_ori=1'>Purge All - CSS/JS Cache</a></li><li id='wp-admin-bar-litespeed-purge-opcache'><a class='ab-item' tabindex="0" href='https://itstest.websinova.com/wp-admin/admin.php?LSCWP_CTRL=purge&#038;LSCWP_NONCE=87500d7c14&#038;litespeed_type=purge_all_opcache&#038;_litespeed_ori=1'>Purge All - Opcode Cache</a></li></ul></div></li><li id='wp-admin-bar-premium-addons' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://itstest.websinova.com/wp-admin/admin.php?page=premium-addons#tab=elements' title='Premium Addons'><i class="dashicons dashicons-update-alt"></i>  PA Assets</a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-premium-addons-default' class="ab-submenu"><li id='wp-admin-bar-pa-clear-page-cache' class="pa-clear-cache pa-clear-page-cache"><a class='ab-item' href='#'><i class="dashicons dashicons-update-alt"></i> Clear Page Generated Assets</a></li><li id='wp-admin-bar-pa-clear-all-cache' class="pa-clear-cache pa-clear-all-cache"><a class='ab-item' href='#'><i class="dashicons dashicons-update-alt"></i> Clear All Generated Assets</a></li><li id='wp-admin-bar-pa-feature-doc'><a class='ab-item' href='https://premiumaddons.com/docs/dynamic-assets-generate-loading-for-elementor/' target='_blank'><i class="dashicons dashicons-editor-help"></i> Learn More</a></li></ul></div></li><li id='wp-admin-bar-xlwcty_admin_page_node' class="xlwcty_admin_page_node"><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=wc-settings&#038;tab=xl-thank-you'>XL NextMove</a></li><li id='wp-admin-bar-wpforms-menu' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://itstest.websinova.com/wp-admin/admin.php?page=wpforms-overview'>WPForms <div class="wp-core-ui wp-ui-notification wpforms-menu-notification-counter">1</div></a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-wpforms-menu-default' class="ab-submenu"><li id='wp-admin-bar-wpforms-notifications'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=wpforms-overview'>Notifications <div class="wp-core-ui wp-ui-notification wpforms-menu-notification-indicator"></div></a></li><li id='wp-admin-bar-wpforms-forms'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=wpforms-overview'>All Forms</a></li><li id='wp-admin-bar-wpforms-add-new'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=wpforms-builder'>Add New</a></li><li id='wp-admin-bar-wpforms-community'><a class='ab-item' href='https://www.facebook.com/groups/wpformsvip/' target='_blank' rel='noopener noreferrer'>Community</a></li><li id='wp-admin-bar-wpforms-help-docs'><a class='ab-item' href='https://wpforms.com/docs/?utm_campaign=liteplugin&#038;utm_medium=admin-bar&#038;utm_source=WordPress&#038;utm_content=Documentation' target='_blank' rel='noopener noreferrer'>Help Docs</a></li><li id='wp-admin-bar-wpforms-upgrade'><a class='ab-item' href='https://wpforms.com/lite-upgrade/?utm_campaign=liteplugin&#038;utm_medium=admin-bar&#038;utm_source=WordPress&#038;utm_content=Upgrade%20to%20Pro&#038;utm_locale=en_US' target='_blank' rel='noopener noreferrer'>Upgrade to Pro</a></li></ul></div></li><li id='wp-admin-bar-paid-memberships-pro' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://itstest.websinova.com/wp-admin/admin.php?page=pmpro-dashboard'><span class="ab-icon"></span>Memberships</a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-paid-memberships-pro-default' class="ab-submenu"><li id='wp-admin-bar-pmpro-dashboard'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=pmpro-dashboard'>Dashboard</a></li><li id='wp-admin-bar-pmpro-members-list'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=pmpro-memberslist'>Members</a></li><li id='wp-admin-bar-pmpro-orders'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=pmpro-orders'>Orders</a></li><li id='wp-admin-bar-pmpro-reports'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=pmpro-reports'>Reports</a></li><li id='wp-admin-bar-pmpro-membership-levels'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=pmpro-membershiplevels'>Settings</a></li><li id='wp-admin-bar-pmpro-addons'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=pmpro-addons'>Add Ons</a></li><li id='wp-admin-bar-pmpro-license'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=pmpro-license'><span style="color: #FF3333; line-height: 26px;">License</span></a></li></ul></div></li><li id='wp-admin-bar-vc_inline-admin-bar-link' class="vc_inline-link"><a class='ab-item' href='https://itstest.websinova.com/wp-admin/post.php?vc_action=vc_inline&#038;post_id=16045&#038;post_type=page'>Edit with WPBakery Page Builder</a></li><li id='wp-admin-bar-gform-forms' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://itstest.websinova.com/wp-admin/admin.php?page=gf_edit_forms'><div class="ab-item gforms-menu-icon svg" style="background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMiIgeT0iMSIgd2lkdGg9IjE3IiBoZWlnaHQ9IjIwIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjU5MDYgMi4wMzcwM0wxNy4xNzkzIDUuNDQ4MjRDMTcuODk0IDUuODg0IDE4LjQ3NjcgNi45NTI5OCAxOC40NzY3IDcuODI0NTFWMTQuNjUwM0MxOC40NzY3IDE1LjUxODUgMTcuODk0IDE2LjU4NzQgMTcuMTc5MyAxNy4wMjMyTDExLjU5MDYgMjAuNDMxQzEwLjg3OTIgMjAuODY2OCA5LjcxMDU1IDIwLjg2NjggOC45OTkwOSAyMC40MzFMMy40MTA0MSAxNy4wMTk4QzIuNjk1NzMgMTYuNTg0IDIuMTEzMDQgMTUuNTE4NSAyLjExMzA0IDE0LjY0NjlWNy44MjExQzIuMTEzMDQgNi45NTI5OCAyLjY5ODk1IDUuODg0IDMuNDEwNDEgNS40NDgyNEw4Ljk5OTA5IDIuMDM3MDNDOS43MTA1NSAxLjYwMTI2IDEwLjg3OTIgMS42MDEyNiAxMS41OTA2IDIuMDM3MDNaTTE1Ljc0OTQgOS4zNzUwM0g4LjgxMDQ5QzguMzgyOTkgOS4zNzUwMyA4LjA2MjM3IDkuNTAxNjQgNy44MDkwNCA5Ljc3MDY4QzcuMjU0ODggMTAuMzYwMiA2Ljk2MTk2IDExLjUwMzYgNi45MTg0MiAxMi4xNDA2SDEzLjc1MDVWMTAuNDI3NUgxNS43MDE5VjE0LjA5MTJINC44NDAzMUM0Ljg0MDMxIDE0LjA5MTIgNC44Nzk4OSAxMC4wMzk3IDYuMzkxOTcgOC40MzMzOUM3LjAxNzM4IDcuNzY0NzUgNy44NDA3IDcuNDI0NDkgOC44MzAyOCA3LjQyNDQ5SDE1Ljc0OTRWOS4zNzUwM1oiIGZpbGw9IndoaXRlIi8+PC9tYXNrPjxnIG1hc2s9InVybCgjbWFzazApIj48cmVjdCB4PSIwLjI5NDkyMiIgeT0iMC43NTc4MTIiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzg4ODg4OCIvPjwvZz48L3N2Zz4=');"></div><span class="ab-label">Forms</span></a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-gform-form-recent-forms' class="ab-submenu"><li id='wp-admin-bar-gform-form-2' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://itstest.websinova.com/wp-admin/admin.php?page=gf_edit_forms&#038;id=2'><span class="wp-admin-bar-arrow" aria-hidden="true"></span>new</a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-gform-form-2-default' class="ab-submenu"><li id='wp-admin-bar-gform-form-2-edit'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=gf_edit_forms&#038;id=2'>Edit</a></li><li id='wp-admin-bar-gform-form-2-entries'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=gf_entries&#038;id=2'>Entries</a></li><li id='wp-admin-bar-gform-form-2-settings'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=gf_edit_forms&#038;view=settings&#038;subview=settings&#038;id=2'>Settings</a></li><li id='wp-admin-bar-gform-form-2-preview'><a class='ab-item' href='https://itstest.websinova.com/?gf_page=preview&#038;id=2'>Preview</a></li></ul></div></li><li id='wp-admin-bar-gform-form-1' class="menupop"><a class='ab-item' aria-haspopup="true" href='https://itstest.websinova.com/wp-admin/admin.php?page=gf_edit_forms&#038;id=1'><span class="wp-admin-bar-arrow" aria-hidden="true"></span>Feedback Form</a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-gform-form-1-default' class="ab-submenu"><li id='wp-admin-bar-gform-form-1-edit'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=gf_edit_forms&#038;id=1'>Edit</a></li><li id='wp-admin-bar-gform-form-1-entries'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=gf_entries&#038;id=1'>Entries</a></li><li id='wp-admin-bar-gform-form-1-settings'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=gf_edit_forms&#038;view=settings&#038;subview=settings&#038;id=1'>Settings</a></li><li id='wp-admin-bar-gform-form-1-preview'><a class='ab-item' href='https://itstest.websinova.com/?gf_page=preview&#038;id=1'>Preview</a></li></ul></div></li></ul><ul id='wp-admin-bar-gform-forms-default' class="ab-submenu"><li id='wp-admin-bar-gform-forms-view-all'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=gf_edit_forms'>All Forms</a></li><li id='wp-admin-bar-gform-forms-new-form'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=gf_new_form'>New Form</a></li></ul></div></li><li id='wp-admin-bar-revslider' class="menupop revslider-menu"><a class='ab-item' aria-haspopup="true" href='https://itstest.websinova.com/wp-admin/admin.php?page=revslider'><span class="rs-label">Slider Revolution</span></a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-revslider-default' class="ab-submenu"><li id='wp-admin-bar-fullscreen-main-slider' class="revslider-sub-menu"><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=revslider&#038;view=slide&#038;id=slider-1'><span class="rs-label" data-alias="fullscreen-main-slider">Fullscreen Main Slider</span></a></li><li id='wp-admin-bar-about_us_slider' class="revslider-sub-menu"><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=revslider&#038;view=slide&#038;id=slider-2'><span class="rs-label" data-alias="about_us_slider">About Us Slider</span></a></li><li id='wp-admin-bar-service_slider' class="revslider-sub-menu"><a class='ab-item' href='https://itstest.websinova.com/wp-admin/admin.php?page=revslider&#038;view=slide&#038;id=slider-3'><span class="rs-label" data-alias="service_slider">Service Slider</span></a></li></ul></div></li></ul><ul id='wp-admin-bar-top-secondary' class="ab-top-secondary ab-top-menu"><li id='wp-admin-bar-search' class="admin-bar-search"><div class="ab-item ab-empty-item" tabindex="-1"><form action="https://itstest.websinova.com/" method="get" id="adminbarsearch"><input class="adminbar-input" name="s" id="adminbar-search" type="text" value="" maxlength="150" /><label for="adminbar-search" class="screen-reader-text">Search</label><input type="submit" class="adminbar-button" value="Search" /></form></div></li><li id='wp-admin-bar-my-account' class="menupop with-avatar"><a class='ab-item' aria-haspopup="true" href='https://itstest.websinova.com/wp-admin/profile.php'>Howdy, <span class="display-name">sanchay</span><img alt='' src='https://secure.gravatar.com/avatar/cff80f5be367ba01900d2642c7f68b24?s=26&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/cff80f5be367ba01900d2642c7f68b24?s=52&#038;d=mm&#038;r=g 2x' class='avatar avatar-26 photo' height='26' width='26' loading='lazy' decoding='async'/></a><div class="ab-sub-wrapper"><ul id='wp-admin-bar-user-actions' class="ab-submenu"><li id='wp-admin-bar-user-info'><a class='ab-item' tabindex="-1" href='https://itstest.websinova.com/wp-admin/profile.php'><img alt='' src='https://secure.gravatar.com/avatar/cff80f5be367ba01900d2642c7f68b24?s=64&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/cff80f5be367ba01900d2642c7f68b24?s=128&#038;d=mm&#038;r=g 2x' class='avatar avatar-64 photo' height='64' width='64' loading='lazy' decoding='async'/><span class='display-name'>sanchay</span></a></li><li id='wp-admin-bar-edit-profile'><a class='ab-item' href='https://itstest.websinova.com/wp-admin/profile.php'>Edit Profile</a></li><li id='wp-admin-bar-logout'><a class='ab-item' href='https://itstest.websinova.com/wp-login.php?action=logout&#038;_wpnonce=65153f6854'>Log Out</a></li></ul></div></li></ul>			</div>
						<a class="screen-reader-shortcut" href="https://itstest.websinova.com/wp-login.php?action=logout&#038;_wpnonce=65153f6854">Log Out</a>
					</div>

		</body>
</html> 

<!-- Page generated by LiteSpeed Cache 5.3.3 on 2023-04-07 07:52:45 -->

"""

# Remove all occurrences of {{ ... }} using a regular expression
cleaned_html = re.sub(r"\{\{[^}]*\}\}", "", html_content)

with open("cleaned_html.html", "w", encoding="utf-8") as output_file:
    output_file.write(cleaned_html)

print("Cleaned HTML content saved to 'cleaned_html.html'")
