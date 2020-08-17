// 알림창 스크립트
  $(document).ready(function() {
    // Initialize to unread notifications
    // TODO: add badge for unread notifications

    // Show/Hide Notifications Drawer
    $('.drawer-pf-trigger').click(function() {
      $('.panel-body').children().remove();
      var $drawer = $('.drawer-pf');
      var strs = new Array();
      
      $(this).toggleClass('open');
      
      $.ajax({
    	  url : '/Food/manager/selectAlarm.do',
          type : 'POST',
          contentType: "application/json; charset=utf-8",
          dataType: 'json',
          success : function(resultData) {
        	  
        	  for(var i=0; i<resultData.selectAlarmSize;i++){
        		  if(resultData.selectAlarm[i].a_state=='N'){
        			
        			  strs = resultData.selectAlarm[i].Alarm_msg.split(',');
        			  
        			  

	        	  $('.panel-body').append(
	        			 "<div class='drawer-pf-notification unread'>"+
	        			 "<div class='drawer-pf-notification-content'>"+
	        			 "<span class='drawer-pf-notification-message'>"+strs[2]+"</span>"+
	        			 "<div class='drawer-pf-notification-info'>"+
	        			 "<span class='data'>"+resultData.selectAlarm[i].Alarm_replyTime+"</span>"+
	        			 "</div>"+
	        			 "</div>"+
	        			 "<input type='hidden' id='cmd' value='"+strs[0]+"'>"+
	        			 "<input type='hidden' id='receive' value='"+strs[1]+"'>"+
	        			 "<input type='hidden' id='Alarm_replyTime' value='"+resultData.selectAlarm[i].Alarm_replyTime+"'>"+
	        			 "</div>"
	        	  )	
        		  }
        		  else if(resultData.selectAlarm[i].a_state=='Y'){
        			 
        			  strs = resultData.selectAlarm[i].Alarm_msg.split(',');
        			  $('.panel-body').append(
     	        			 "<div class='drawer-pf-notification'>"+
     	        			 "<div class='drawer-pf-notification-content'>"+
     	        			 "<span class='drawer-pf-notification-message'>"+strs[2]+"</span>"+
     	        			 "<div class='drawer-pf-notification-info'>"+
     	        			 "<span class='data'>"+resultData.selectAlarm[i].Alarm_replyTime+"</span>"+
     	        			 "</div>"+
     	        			 "</div>"+
     	        			 "<input type='hidden' id='cmd' value='"+strs[0]+"'>"+
     	        			"<input type='hidden' id='receive' value='"+strs[1]+"'>"+
     	        			"<input type='hidden' id='Alarm_replyTime' value='"+resultData.selectAlarm[i].Alarm_replyTime+"'>"+
     	        			"</div>"
     	        	  )
        		  }
        	  }
          },
          error : function(err){
             alert('err');
             alert("에러3");
          }
    	  
    	  
      })
      
      if ($drawer.hasClass('hide')) {
          $drawer.removeClass('hide');
          setTimeout(function () {
            if (window.dispatchEvent) {
              window.dispatchEvent(new Event('resize'));
            }
            // Special case for IE
            if ($(document).fireEvent) {
              $(document).fireEvent('onresize');
            }
          }, 100);
        } else {
          $drawer.addClass('hide');
        }
        // Special case, close navigation menu in mobile mode
       if ($('.container-pf-nav-pf-vertical').hasClass('hidden-nav')) {
         $('.nav-pf-vertical').removeClass('show-mobile-nav');
       }
      });
      $('.drawer-pf-close').click(function() {
        var $drawer = $('.drawer-pf');

        $('.drawer-pf-trigger').removeClass('open');
        $drawer.addClass('hide');
      });
      $('.drawer-pf-toggle-expand').click(function() {
        var $drawer = $('.drawer-pf');
        var $drawerNotifications = $drawer.find('.drawer-pf-notification');

        if ($drawer.hasClass('drawer-pf-expanded')) {
          $drawer.removeClass('drawer-pf-expanded');
          $drawerNotifications.removeClass('expanded-notification');
        } else {
          $drawer.addClass('drawer-pf-expanded');
          $drawerNotifications.addClass('expanded-notification');
        }
      
    })
    
//    $('.drawer-pf-notification').each(function(){
//    	
//    	var notification = $(this);
//    	
//    	 notification.on('click','.drawer-pf-notification-content',function(){
//    		 notification.removeClass('unread');
//    		 alert(notification);
//    	    });
//    })
    
   
	 
	   $(document).on('click','.drawer-pf-notification-content',function(){
		   $(this).parent().removeClass('unread');
		   var cmd=$(this).siblings().val();
		   var receive=$(this).siblings().next().val();
		   var Alarm_replyTime=$(this).siblings().next().next().val();

		
		   $.ajax({
		    	  url : '/Food/manager/updateAlarm.do?cmd='+cmd+'&Alarm_replyTime='+Alarm_replyTime+"&receive="+receive,
		          type : 'POST',
		          contentType: "application/json; charset=utf-8",
		          success : function(resultData) {
		        	  },		          
		          error : function(err){
		        	  alert(err);
		          }
		   
		   		})
		   	   if("reply"==cmd){
		             location.href='/Food/detail?b_no='+receive;
		             }else if("mfChat"==cmd){
		            	 window.open('https://192.168.0.17:8080/Food/mealBoard/chatBox.do?userId='+receive,'_blank','width=502,height=720,left=500,top=100,location=no,status=no');
		                 }
		             else if("reserv"==cmd){
		            	 location.href='/Food/mypageform.do';
		                 }
	   })
	   
	    $(document).on('click', '.drawer-pf-action [data-toggle="clear-all"] .btn', function() {
	    $(document).find('.panel-body .drawer-pf-notification').remove();
	    $.ajax({
	    	  url : '/Food/manager/deleteAlarm.do',
	          type : 'POST',
	          contentType: "application/json; charset=utf-8",
	          success : function(resultData) {
	        	  },		          
	          error : function(err){
	        	  alert(err);
	        	  alert("에러2");
	          }
	   
	   		})
        
      });
      $(document).on('click', '.drawer-pf-action [data-toggle="mark-all-read"] .btn', function() {
    	  $(document).find('.unread').removeClass('unread');
    	  $(document).find('.drawer-pf-action [data-toggle="mark-all-read"]').remove();
    	  
    	  $.ajax({
	    	  url : '/Food/manager/updateAlarmAll.do',
	          type : 'POST',
	          contentType: "application/json; charset=utf-8",
	          success : function(resultData) {
	        
	        	  },		          
	          error : function(err){
	        	  alert(err);
	        	  alert("에러");
	          }
	   
	   		})
    	  
      })
    
    $('#notification-drawer-accordion').initCollapseHeights('.panel-body');
  });