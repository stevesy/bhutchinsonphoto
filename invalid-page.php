<?php
	$pageTitle = 'Page Not Found';
	$bodyClass = 'page-error';
	
	include 'includes/header.php';
?>

<section class="section section-error">
	<div class="section-content row">
		<div class="col">
			<h2>Page Not Found</h2>
			<p>Sorry, the requested URL <strong><?php echo $_SERVER['REQUEST_URI'] ?></strong> has been moved or does not exist. Please check the URL and try again or <a href="/">return home</a>.</p>
		</div>
	</div>
</section>

<?php include 'includes/footer.php'; ?>