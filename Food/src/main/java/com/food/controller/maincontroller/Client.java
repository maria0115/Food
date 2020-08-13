package com.food.controller.maincontroller;

import java.net.Socket;

import com.sun.mail.iap.ByteArray;


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
	String filesize;
	String search;
	String resultimage;
	String resize;
	

	public String getResize() {
		return resize;
	}

	public String getResultimage() {
		return resultimage;
	}

	public Client(String resultweather,String resulttemp,String region,String most,String search,String fileName,String what) {
		this.resultweather = resultweather;
		this.resulttemp = resulttemp;
		this.region = region;
		this.most = most;
		this.search = search;
		this.fileName = fileName;
		this.what = what;
		
		try {
			// 서버 연결
			socket = new Socket(serverIp, serverPort); // socket(),connect();
			System.out.println("서버에 연결되었습니다."); //2
			System.out.println(serverIp + " : " + serverPort);

			Sender Sender = new Sender(socket, resultweather,resulttemp,region,most,search,fileName,what);	//2
			Sender.start();
			Sender.join();
			result = Sender.getResult();
			resultimage = Sender.getResultimage();
			resize = Sender.getResize();
			ip = Sender.getIp();
			filesize = Sender.getFilesize();
			
			System.out.println("result from server : " + result);
		} catch (Exception e) {
			System.out.println("서버에 연결할 수 없습니다"+e.getMessage());
		}// catch
	}
	
	public String getFilesize() {
		return filesize;
	}

	public String getResult() {
		return result;
	}
	public String getIp() {
		return ip;
	}


}
