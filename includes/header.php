<?php
	$app_root = "/";
	$content_root = $app_root . "content/";
	$css = $content_root . "css/";
	$images = $content_root . "img/";
	$scripts = $content_root . "js/";
	$gaAccount = "UA-XXXXXX-X";
	if (($_SERVER["HTTP_HOST"] == "www.bhutchinsonphoto.com") || ($_SERVER["HTTP_HOST"] == "bhutchinsonphoto.com")) {
		$gaAccount = "UA-21691830-1";
	}
?>

<!DOCTYPE html>
<html dir="ltr" lang="en-US">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title><?php echo $pageTitle == 'Home' ? '' : $pageTitle . ' | '; echo 'Ben Hutchinson Photography' ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="shortcut icon" href="/favicon.ico" />
		<?php if ($metaDesc != '') { ?>
			<meta name="description" content="<?php echo $metaDesc ?>" />
		<?php } ?>
		<meta property="og:title" content="Ben Hutchinson Photography" />
		<meta property="og:description" content="Ben Hutchinson is a Portland, Oregon photographer who specializes in creative portraiture, fashion, and concept photography." />
		<meta property="og:url" content="http://www.bhutchinsonphoto.com" />
		<meta property="og:image" content="http://www.bhutchinsonphoto.com/content/img/IMG_2390.jpg" />
		<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Raleway:300" />
		<link rel="stylesheet" href="<?php echo $css ?>site.css?v=05242015" />
		<script src="<?php echo $scripts ?>libs/modernizr/modernizr-2.7.1.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="<?php echo $scripts ?>libs/jquery/jquery-1.11.0.min.js"><\/script>');</script>
		<script>
			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', '<?php echo $gaAccount ?>']);
			_gaq.push(['_trackPageview']);
			(function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
		</script>
	</head>
	<body class="<?php echo $bodyClass ?>">
		<header id="header" role="banner">
			<h1>Ben <span class="line line2">Hutchinson</span> <span class="line line3">Photography</span></h1>
			<nav id="nav" role="navigation">
				<h6 class="assistive-text">Navigation</h6>
				<ul class="nav clearfix">
					<li class="nav-item nav-item-portraits <?php echo $bodyClass == 'portraits' ? 'active' : '' ?>">
						<a class="nav-link" href="/portraits" aria-haspopup="true">Portraits</a>
						<ul class="sub-nav clearfix">
							<li class="nav-item"><a class="nav-link" href="/portraits">Page 1</a></li>
							<li class="nav-item"><a class="nav-link" href="/portraits-2">Page 2</a></li>
						</ul>
					</li>
					<li class="nav-item nav-item-models <?php echo $bodyClass == 'models' ? 'active' : '' ?>">
						<a class="nav-link" href="/models" aria-haspopup="true">Models</a>
						<ul class="sub-nav clearfix">
							<li class="nav-item"><a class="nav-link" href="/models">Page 1</a></li>
							<li class="nav-item"><a class="nav-link" href="/models-2">Page 2</a></li>
						</ul>
					</li>
					<li class="nav-item nav-item-business <?php echo $bodyClass == 'business' ? 'active' : '' ?>">
						<a class="nav-link" href="/business">Business</a>
					</li>
				</ul>
			</nav>
		</header>
		<main id="content" role="main">