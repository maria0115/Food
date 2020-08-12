<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>

<!DOCTYPE html>
<html class="no-js" lang="en">

<head>

	<meta http-equiv="X-UA-Compatible" content="IE=Edge" >
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" >
	<meta name="viewport" content="user-scalable=1, initial-scale=0.1, width=device-width, target-densitydpi=device-dpi" >
		

	

	<script src="/Food/resources/nexacro/nexacro17lib/framework/SystemBase.js"></script>
<script src="/Food/resources/nexacro/nexacro17lib/framework/SystemBase_HTML5.js"></script>
<script src="/Food/resources/nexacro/nexacro17lib/framework/SystemBase_Runtime.js"></script>
<script src="/Food/resources/nexacro/nexacro17lib/framework/BasicObjs.js"></script>
<script src="/Food/resources/nexacro/nexacro17lib/framework/ErrorDefine.js"></script>
<script src="/Food/resources/nexacro/nexacro17lib/framework/Platform_HTML5.js"></script>
<script src="/Food/resources/nexacro/nexacro17lib/framework/Platform_Runtime.js"></script>
<script src="/Food/resources/nexacro/nexacro17lib/framework/Platform.js"></script>
<script src="/Food/resources/nexacro/nexacro17lib/framework/CssObjs.js"></script>
<script src="/Food/resources/nexacro/nexacro17lib/framework/Device.js"></script>
<script src="/Food/resources/nexacro/nexacro17lib/framework/Device_Android.js"></script>
<script src="/Food/resources/nexacro/nexacro17lib/framework/Device_Windows.js"></script>
<script src="/Food/resources/nexacro/nexacro17lib/framework/Device_iOS.js"></script>
	
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBase/Element_HTML5.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBase/Element_Runtime.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBase/CompBase.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBase/CompEventBase.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBase/Data.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBase/EditBase.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBase/FormBase.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBase/TitleBar.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBase/StatusBar.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBase/FrameBase.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBase/ScrollBar.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBase/Step.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBase/Animation.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Dataset.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/DomObject.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Static.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Button.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Edit.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/MaskEdit.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/TextArea.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/lang/ko/ime.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/lang/ja/ime.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/ImageViewer.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/CheckBox.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Radio.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/ListBox.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Combo.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Div.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/ProgressBar.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/PopupDiv.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Menu.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/PopupMenu.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Spin.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/DatePicker.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Calendar.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/GroupBox.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Tab.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/FileDialog.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/FileDownload.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/FileDownTransfer.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/FileUpload.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/FileUpTransfer.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/VideoPlayer.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/WebBrowser.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/GoogleMap.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Sketch.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/ExportObject.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/ImportObject.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Tray.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Plugin.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/VirtualFile.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ComComp/Cell.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/Grid/GridInfo.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/Grid/Grid.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBaseEx/SimpleComp.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/CompBaseEx/ComplexComp.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/ListView/ListView.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/DeviceAPI/SQLite.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/DeviceAPI/SQLite_Runtime.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/DeviceAPI/DeviceObjs.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/DeviceAPI/DeviceObjs_Runtime.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/DeviceAPI/Mobile.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/DeviceAPI/BluetoothLE.js"></script>
    <script src="/Food/resources/nexacro/nexacro17lib/component/DeviceAPI/TCPClientSocket.js"></script>
	
    <script src="/Food/resources/nexacro/environment.xml.js"></script>
     <!-- Dashboard Core -->
<link href="/Food/resources/css/dashboard.css" rel="stylesheet" />
<title>Board List</title>
<meta name="description" content="">

<!-- favicon
		============================================ -->
<link rel="shortcut icon" type="image/x-icon" href="/Food/resources/img/favicon.ico">
<!-- Google Fonts
		============================================ -->
<link href="https://fonts.googleapis.com/css?family=Play:400,700"
	rel="stylesheet">
<!-- Bootstrap CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/bootstrap2.min.css">
<!-- Bootstrap CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/font-awesome1.min.css">
<!-- owl.carousel CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/owl.carousel.css">
<link rel="stylesheet" href="/Food/resources/css/owl.theme.css">
<link rel="stylesheet" href="/Food/resources/css/owl.transitions.css">
<!-- animate CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/animate1.css">
<!-- normalize CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/normalize.css">
<!-- meanmenu icon CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/meanmenu.min.css">
<!-- main CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/main.css">
<!-- morrisjs CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/morrisjs/morris.css">
<!-- mCustomScrollbar CSS
		============================================ -->
<link rel="stylesheet"
	href="/Food/resources/css/scrollbar/jquery.mCustomScrollbar.min.css">
<!-- metisMenu CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/metisMenu/metisMenu.min.css">
<link rel="stylesheet" href="/Food/resources/css/metisMenu/metisMenu-vertical.css">
<!-- calendar CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/calendar/fullcalendar.min.css">
<link rel="stylesheet" href="/Food/resources/css/calendar/fullcalendar.print.min.css">
<!-- style CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/style2.css">
<!-- responsive CSS
		============================================ -->
<link rel="stylesheet" href="/Food/resources/css/responsive.css">
<!-- modernizr JS
		============================================ -->
<!-- Bootstrap cdn -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">


<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script src="/Food/resources/js/vendor/modernizr-2.8.3.min.js"></script>
<script type="text/javascript" src="/Food/resources/js/blackList.js"></script>

</head>
<body>


	
	<!-- Start Welcome area -->
	<div class="all-content-wrapper">
		<jsp:include page="wrapper.jsp">
			<jsp:param value='' name='' />
		</jsp:include>
		<div class="product-status mg-tb-15">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						
			

						<iframe name="iframeEx" id="iframeEx" src="/Food/resources/nexacro/index.jsp" 
			style="background-color:#ffffff" width="100%" height="1500" frameborder="0" scrolling="auto"></iframe> 
						
						
						
					</div>
				</div>
			</div>
		</div>
		<div class="footer-copyright-area">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12">
					<div class="footer-copy-right">
						<p>
							Copyright &copy; 2020 <a 
								href="https://colorlib.com/wp/templates/">Colorlib</a> All
							rights reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>

	<!-- jquery
		============================================ -->
	<script src="/Food/resources/js/vendor/jquery-1.11.3.min.js"></script>
	<!-- bootstrap JS
		============================================ -->
	<script src="/Food/resources/js/bootstrap.min.js"></script>
	<!-- wow JS
		============================================ -->
	<script src="/Food/resources/js/wow.min.js"></script>
	<!-- price-slider JS
		============================================ -->
	<script src="/Food/resources/js/jquery-price-slider.js"></script>
	<!-- meanmenu JS
		============================================ -->
	<script src="/Food/resources/js/jquery.meanmenu.js"></script>
	<!-- owl.carousel JS
		============================================ -->
	<script src="/Food/resources/js/owl.carousel.min.js"></script>
	<!-- sticky JS
		============================================ -->
	<script src="/Food/resources/js/jquery.sticky.js"></script>
	<!-- scrollUp JS
		============================================ -->
	<script src="/Food/resources/js/jquery.scrollUp.min.js"></script>
	<!-- mCustomScrollbar JS
		============================================ -->
	<script src="/Food/resources/js/scrollbar/jquery.mCustomScrollbar.concat.min.js"></script>
	<script src="/Food/resources/js/scrollbar/mCustomScrollbar-active.js"></script>
	<!-- metisMenu JS
		============================================ -->
	<script src="/Food/resources/js/metisMenu/metisMenu.min.js"></script>
	<script src="/Food/resources/js/metisMenu/metisMenu-active.js"></script>
	<!-- morrisjs JS
		============================================ -->
	<script src="/Food/resources/js/sparkline/jquery.sparkline.min.js"></script>
	<script src="/Food/resources/js/sparkline/jquery.charts-sparkline.js"></script>
	<!-- calendar JS
		============================================ -->
	<script src="/Food/resources/js/calendar/moment.min.js"></script>
	<script src="/Food/resources/js/calendar/fullcalendar.min.js"></script>
	<script src="/Food/resources/js/calendar/fullcalendar-active.js"></script>
	<!-- plugins JS
		============================================ -->
	<script src="/Food/resources/js/plugins.js"></script>
	<!-- main JS
		============================================ -->
	<script src="/Food/resources/js/main.js"></script>
</body>
</html>