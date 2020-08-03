package com.food.controller.maincontroller;

import java.net.Socket;


public class Client {
	Socket socket = null;
	String serverIp = "192.168.0.10";
	int serverPort = 5000;
	String resultweather;
	String resulttemp;
	String region;
	String most;
	String fileName;
	String what;
	String result;
	String ip;

	public Client(String resultweather,String resulttemp,String region,String most,String fileName,String what) {
		this.resultweather = resultweather;
		this.resulttemp = resulttemp;
		this.region = region;
		this.most = most;
		this.fileName = fileName;
		this.what = what;
		
		try {
			// 서버 연결
			socket = new Socket(serverIp, serverPort); // socket(),connect();
			System.out.println("서버에 연결되었습니다."); //2
			System.out.println(serverIp + " : " + serverPort);

			Sender Sender = new Sender(socket, resultweather,resulttemp,region,most,fileName,what);	//2
			Sender.start();
			Sender.join();
			result = Sender.getResult();
			ip = Sender.getIp();
			System.out.println("result from server : " + result);
		} catch (Exception e) {
			System.out.println("서버에 연결할 수 없습니다"+e.getMessage());
		}// catch
	}
	
	public String getResult() {
		return result;
	}
	public String getIp() {
		return ip;
	}


}
