<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript"
	src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.2.js"
	charset="utf-8"></script>
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<meta charset="UTF-8">
<title>Side Bar</title>
</head>
<body>

	<div class="left-sidebar-pro">
		<nav id="sidebar" class="">
			<div class="sidebar-header">
				<a href="index.html"><img class="main-logo"
					src="/Food/resources/img/logo/logo.png" alt="" /></a>
			</div>
			<div class="left-custom-menu-adp-wrap comment-scrollbar">
				<nav class="sidebar-nav left-sidebar-menu-pro">
					<ul class="metismenu" id="menu1">
						<li class="active"><a href="Home.do">
								<i class="fa big-icon fa-home icon-wrap"></i> <span
								class="mini-click-non">Home</span></a></li>
						<li class="active"><a href="/Food/manager/dashBoard.do">
								<i class="fa fa-bullseye sub-icon-mg"></i> <span
								class="mini-click-non">DashBoard</span></a></li>
						<li class="active"><a class="has-arrow" href="index.html">
								<i class="fa fa-users icon-wrap"></i> <span
								class="mini-click-non">Member</span>
						</a>
							<ul class="submenu-angle" aria-expanded="true">
								<li><a title="Member List"
									href="/Food/manager/member-list.do"><ideclaBoard
											class="fa fa-user sub-icon-mg" aria-hidden="true">
										</i> <span class="mini-sub-pro">Member List</span></a></li>
								<li><a title="Black List"
									href="/Food/manager/black-list.do"><i
										class="fa fa-user sub-icon-mg" aria-hidden="true"></i> <span
										class="mini-sub-pro">Black List</span></a></li>
							</ul></li>

						<li><a class="has-arrow" href="#" aria-expanded="false">
								<i class="fa big-icon fa-bar-chart-o icon-wrap"></i> <span
								class="mini-click-non">Charts</span>
						</a>
							<ul class="submenu-angle" aria-expanded="true">
								<li><a title="Analytics" href="/Food/chart.do"><i
										class="fa fa-line-chart sub-icon-mg" aria-hidden="true"></i> <span
										class="mini-sub-pro">Chart</span></a></li>

							</ul></li>

						<li><a class="has-arrow" href="#" aria-expanded="false">
								<i class="fa big-icon fa-files-o icon-wrap"></i> <span
								class="mini-click-non">Pages</span>
						</a>
							<ul class="submenu-angle" aria-expanded="true">
								<li><a title="Report Board" href="declarationBoard.do"><i
										class="fa fa-file sub-icon-mg" aria-hidden="true"></i>
										<span class="mini-click-non">Report Board</span></a></li>
								<li><a title="Report Board" href="/Food/nexalist.do"><i
										class="fa fa-file sub-icon-mg" aria-hidden="true"></i>
										<span class="mini-click-non">Board List</span></a></li>

							</ul></li>
					</ul>
				</nav>
			</div>
		</nav>
	</div>

</body>
</html>