<nav class="site-nav" role="navigation">
	<h6 class="assistive-text">Site navigation</h6>
	<ul class="nav">
		<li class="nav-item nav-item-portraits<?php echo strpos($bodyClass, 'portraits') !== false ? ' active' : '' ?>">
			<a class="nav-link" href="/portraits" aria-haspopup="true">Portraits</a>
			<ul class="sub-nav">
				<li class="nav-item">
					<a class="nav-link" href="/portraits">Page 1</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/portraits-2">Page 2</a>
				</li>
			</ul>
		</li>
		<li class="nav-item nav-item-models<?php echo strpos($bodyClass, 'models') !== false ? ' active' : '' ?>">
			<a class="nav-link" href="/models" aria-haspopup="true">Models</a>
			<ul class="sub-nav">
				<li class="nav-item">
					<a class="nav-link" href="/models">Page 1</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/models-2">Page 2</a>
				</li>
			</ul>
		</li>
		<li class="nav-item nav-item-business<?php echo strpos($bodyClass, 'business') !== false ? ' active' : '' ?>">
			<a class="nav-link" href="/business">Business</a>
		</li>
	</ul>
</nav>
