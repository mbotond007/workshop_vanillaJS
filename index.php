<?php
session_start();

include("connect.php");

if(isset($_GET["logout"]))   
	{
		session_unset(); 
	}

// print_r($_SESSION);

?>

<!doctype html>
<html>
	<head>
		<title>
		Workshop Vanilla JS 
		</title>
		
		<meta charset="utf-8"> 
		
		<link rel="stylesheet" type="text/css" href="css/workshop.css">
		
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
		
		
		<!-- <script type="text/javascript" src="jquery/jquery-1.8.2.js"></script>  -->
			
		<!-- <script type="text/javascript" src="jquery/jquery-ui-1.9.1.custom.js"></script> -->

		<script type="text/javascript" src="js/static_content.js"></script>
		
		<!-- <script type="text/javascript" src="js/usercheck.js"></script> -->
		<script type="text/javascript" src="js/usercheck_new.js"></script>

		<script type="text/javascript" src="js/search_button.js"></script>

		<script type="text/javascript" src="js/search_engine.js"></script>

		<!-- <script type="text/javascript" src="js/test_login.js"></script> -->

		<script type="text/javascript" src="js/category_changer.js"></script>
		
		<script type="text/javascript" src="js/category_menu.js"></script>

		<script type="text/javascript" src="js/registry_controller.js"></script>

		<script type="text/javascript" src="js/login_controller.js"></script>
		
		<script type="text/javascript" src="js/usermenu.js"></script>

		<script type="text/javascript" src="js/lang_changer.js"></script>

		

		<!--  -->

			
		
	</head>
	
	<body>
		<div class="main_menu">

			<div class="main_menu_inside" >

				<div class="main_menu_left">
					<a href="index.php"><img id="logo" src=""></a>
				</div>
				
				<div class="main_menu_mid">
					<img id="flag_hun" data-language="hun" class="flag" style= "width:70px" src="images/hu.gif">
					<img id="flag_eng"  data-language="eng" class="flag"  style= "width:70px" src="images/en.gif">
					<div id="act_language"  style ="display: none"></div>
					<div id="act_category"  style ="display: none"></div>
				</div>
				
				<!-- <a class='menu_button_logout' href='index.php?logout=1'>Session_clear</a> -->
				
				<div class="main_menu_right" id="main_menu_right">							
				</div>
				
			</div>
				
		</div>
			
		<div class="category_menu">

			<div class="category_menu_label" id="category_menu_label" ></div>

			<div class="category_menu_inside" id="category_menu_inside"></div>

			<div class="search_div">				
					<button class="search_button" id="search_button"></button>
			</div>
		</div>
		
		
		
		<div class="main_content" id="main_content">
			
			<div class="topic_box" id="topic_box"></div>	
		
			<div class="content_box" id="content_box"></div>
			
		</div>
		
	</body>
</html>


