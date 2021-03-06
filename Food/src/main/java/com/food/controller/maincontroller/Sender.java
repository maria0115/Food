package com.food.controller.maincontroller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

import com.sun.mail.iap.ByteArray;

public class Sender extends Thread {
	private Socket socket;

	private BufferedInputStream bis;
	private BufferedOutputStream bos;

	private OutputStream os;
	private InputStream is;
	
	private FileInputStream fis;

	private String resultweather;
	private String resulttemp;
	private String region;
	private String result;
	private String filesize;
	private String resultimage;
	private String resize;

	private String most;
	private String search;
	private String filename;
	private String what;
	private String ip;
	
	public String getResize() {
		return resize;
	}

	public String getResultimage() {
		return resultimage;
	}


	private int fileSize;
	
	public Sender(Socket socket, String resultweather,String resulttemp,String region,String most,String search,String filestr,String what) {
		//socket 열어줌
		this.socket = socket;
		this.resultweather = resultweather;
		this.resulttemp = resulttemp;
		this.region = region;
		this.most = most;
		this.search = search;
		this.what = what;
		this.filename = filestr;
		try {
			// 데이터 스트림 생성
			this.os = socket.getOutputStream();	//3
			bos = new BufferedOutputStream(os);
			this.is = socket.getInputStream();
			bis = new BufferedInputStream(is);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public boolean sendWeather(String resultweather) throws IOException {
//		File imageFile = new File(hello);
//		fileSize = (int) imageFile.length() * 100;
//		fis = new FileInputStream(imageFile);
		bos.write(resultweather.getBytes());
		bos.flush(); //4
		System.out.println("weathersend 잘보내짐");
		return true;
	}

	
	public boolean sendTemp(String resulttemp) throws IOException {
//		File imageFile = new File(hello);
//		fileSize = (int) imageFile.length() * 100;
//		fis = new FileInputStream(imageFile);
		bos.write(resulttemp.getBytes());
		bos.flush(); //4
		System.out.println("tempsend 잘보내짐");
		return true;
	}
	
	public boolean sendRegion(String region) throws IOException {
//		File imageFile = new File(hello);
//		fileSize = (int) imageFile.length() * 100;
//		fis = new FileInputStream(imageFile);
		bos.write(region.getBytes());
		bos.flush(); //4
		System.out.println("regionsend 잘보내짐");
		return true;
	}
	
	public boolean sendMost(String most) throws IOException {
//		File imageFile = new File(hello);
//		fileSize = (int) imageFile.length() * 100;
//		fis = new FileInputStream(imageFile);
		bos.write(most.getBytes());
		bos.flush(); //4
		System.out.println("mostsend 잘보내짐");
		return true;
	}
	public boolean sendWhat(String resultwaht) throws IOException {
//		File imageFile = new File(hello);
//		fileSize = (int) imageFile.length() * 100;
//		fis = new FileInputStream(imageFile);
		bos.write(resultwaht.getBytes());
		bos.flush(); //4
		System.out.println("sendWhat 잘보내짐");
		return true;
	}
	
	public boolean sendSearch(String search) throws IOException {
//		File imageFile = new File(hello);
//		fileSize = (int) imageFile.length() * 100;
//		fis = new FileInputStream(imageFile);
		bos.write(search.getBytes());
		bos.flush(); //4
		System.out.println("sendsearch 잘보내짐");
		return true;
	}
	
	public boolean sendFileSize(String fileName) throws IOException {
		File imageFile = new File(fileName);
		fileSize = (int) imageFile.length() * 100;
		fis = new FileInputStream(imageFile);
		bos.write(Integer.toString(fileSize).getBytes());
		bos.flush();
		System.out.println("send file size : " + fileSize);
		return true;
	}
	
	public void sendImage(int fileSize) throws IOException {
		byte[] data = new byte[(int) (fileSize)];
		bos.write(data, 0, fis.read(data));
		System.out.println("send image ... ");
		bos.flush();
		fis.close();
	}
	

	public String receiveData(int buffer_size) throws IOException {
		byte[] tmp = new byte[buffer_size];
		int zz = bis.read(tmp); //7
		System.out.println("server : "+new String(tmp, 0, zz));
		return new String(tmp, 0, zz);
	}
	
	public String receiveimage(int buffer_size) throws IOException {
		byte[] tmp = new byte[buffer_size];
		int zz = bis.read(tmp); //7
		System.out.println("server : "+new String(tmp, 0, zz));
		return new String(tmp, 0, zz);
	}
	
//	public int receive() throws IOException {
//		int receive = bis.read(); //7
//		System.out.println("server : "+receive);
//		return receive;
//	}
	
	public String getResult() {
		return result;
	}
	
	public String getIp() {
		return ip;
	}
	
	public String getFilesize() {
		return filesize;
	}

	
	public void close() {
		try {
		bos.close();
		socket.close();
		} catch(IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void run() {
		try {
			if(what.equals("main"))
			{
			sendWhat(what);
			receiveData(500);
			sendWhat("ip");
			this.ip = receiveData(500);
			sendWeather(resultweather);
			receiveData(500);
			sendTemp(resulttemp);
			receiveData(500);
			sendRegion(region);
			receiveData(500);
			sendTemp("result");
			this.result = receiveData(500);
			}
			else if(what.equals("other"))
			{
				sendWhat(what);
				receiveData(500);
				sendMost(most);
				this.result = receiveData(500);
				System.out.println("잘왔다");
			}
			else if(what.equals("image")) {
				sendWhat(what);
				receiveData(500);
				sendFileSize(filename);	//1
				receiveData(100);//4
				sendImage(fileSize);	//5
				this.result = receiveData(1000);
			}
			else if(what.equals("wordcloud")) {
				
				sendWhat(what);
				receiveData(500);
				sendSearch(search);
				receiveData(500);
				sendWhat("reReady");
				this.resize = receiveData(1024);
				sendWhat("filereReady");
				receiveData(1024);
				sendWhat("filesizeok");
				this.filesize = receiveData(1024);
				sendWhat("fileok");
				System.out.println(Integer.parseInt(this.filesize));
				this.resultimage = receiveimage(Integer.parseInt(this.filesize));
			}


		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			close();
		}// finally
	}// run

}
