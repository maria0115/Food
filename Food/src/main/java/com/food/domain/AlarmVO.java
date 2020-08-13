 package com.food.domain;

public class AlarmVO {
    private String Alarm_Id;
    private String Alarm_replyTime;
    private int qaAlarm_bno;
    private String a_state;
    private String mfAlarm_bno;
    private String rAlarm_rtime;
    
    

   public String getrAlarm_rtime() {
		return rAlarm_rtime;
	}
	public void setrAlarm_rtime(String rAlarm_rtime) {
		this.rAlarm_rtime = rAlarm_rtime;
	}
public String getMfAlarm_bno() {
		return mfAlarm_bno;
	}
	public void setMfAlarm_bno(String mfAlarm_bno) {
		this.mfAlarm_bno = mfAlarm_bno;
	}
public String getAlarm_replyTime() {
      return Alarm_replyTime;
   }
   public void setAlarm_replyTime(String alarm_replyTime) {
      Alarm_replyTime = alarm_replyTime;
   }
   public String getAlarm_Id() {
      return Alarm_Id;
   }
   public void setAlarm_Id(String alarm_Id) {
      Alarm_Id = alarm_Id;
   }
   public String getA_state() {
      return a_state;
   }
   public void setA_state(String a_state) {
      this.a_state = a_state;
   }

   public int getQaAlarm_bno() {
      return qaAlarm_bno;
   }
   public void setQaAlarm_bno(int qaAlarm_bno) {
      this.qaAlarm_bno = qaAlarm_bno;
   }
    
    
}