<head>
	<meta charset="utf-8" />
	<title><?php echo $pageTitle; ?> | Ben Hutchinson Photography</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="shortcut icon" href="/favicon.ico" />
	
	<?php if (isset($metaDescription)): ?>
		<meta name="description" content="<?php echo $metaDescription; ?>" />
	<?php endif; ?>
	
	<meta property="og:title" content="Ben Hutchinson Photography" />
	<meta property="og:description" content="Ben Hutchinson is a Portland, Oregon photographer who specializes in creative portraiture, fashion, and concept photography." />
	<meta property="og:url" content="http://www.bhutchinsonphoto.com" />
	<meta property="og:image" content="http://www.bhutchinsonphoto.com/content/img/IMG_2390.jpg" />
	
	<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Raleway:300" />
	<link rel="stylesheet" href="/public/css/site.css" />
	<script src="/public/js/modernizr.js"></script>
	<script>
		var gaAccount = window.location.hostname.indexOf('bhutchinsonphoto.com') !== -1 ? 'UA-21691830-1' : 'UA-XXXXXX-X';
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', gaAccount]);
		_gaq.push(['_trackPageview']);
		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
</head>
