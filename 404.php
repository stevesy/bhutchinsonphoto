<?php
	$pageTitle = 'Page Not Found';
	$bodyClass = 'error';
	include 'includes/header.php';
?>

<h2>Page Not Found</h2>
<p>The requested URL <?php echo $_SERVER['REQUEST_URI'] ?> was not found on this server.</p>

<?php include 'includes/footer.php' ?>