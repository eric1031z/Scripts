
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.util);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
var status;
var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時


var today = new Date();
var todayp = (today.getMonth()+1) + "/" + (today.getDate()); 

function start(){
	status = -1;
	action(1,0,0);
}




function action(mode, type, selection) {
	

	
	
	
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		
		cm.dispose();
		
	
	}
	
    if (status == 0) {
		var msg = "";
		msg += icon5 + " #d傳說方塊任務#k #b日期 :#k #r2020/" + todayp + "#k\r\n";
		msg += "#L0#" + icon3 + " #b查看獲得條件#k\r\n";
		msg += "#L1#" + icon3 + " #b查看今日進度#k\r\n";
		msg += "#L2#" + icon3 + " #b領取傳說方塊#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. sel = selection;
		if(sel == 0){
			var msg = "";
			msg += icon3 + " #d完成組隊#k#r(超綠/101)#k#d與#k#r每日任務#k#d獲得#k#r30#k#d顆傳說方塊#k\r\n";
			msg += icon3 + " #d完成BOSS#k#r(炎魔/龍王/皮卡)#k#d可獲得#k#r30#k#d顆傳說方塊#k\r\n";
			msg += icon3 + " #b還有更多的獲取方式正在規劃中#k\r\n";
			cm.sendOk(msg);
			status = -1;
		}else if(sel == 1){
			var msg = "";
			this. pq1n = cm.getPQName("KerningPQ") + "" + todayp; //超綠
			this. pq1 = cm.getPQLog(pq1n);
			this. pq2n = cm.getPQName("LudiPQ") + "" + todayp; //101
			this. pq2 = cm.getPQLog(pq2n);
			this. pq3n = cm.getPQName("OrbisPQ") + "" + todayp;
			this. pq3 = cm.getPQLog(pq3n);
			this. dq = cm.getPlayer().getPrizeLog(todayp + "任務");
			this. bs1 = cm.getPlayer().getOneTimeLog(todayp + "炎魔確認"); 
			this. bs2 = cm.getPlayer().getOneTimeLog(todayp + "龍王確認"); 
			this. bs3 = cm.getPlayer().getOneTimeLog(todayp + "皮卡確認"); 
			msg += icon5 + " #b組隊/每日任務統計 :#k\r\n";
			msg += icon3 + " #d超綠 : #k" + (pq1 > 0 ? "#r已完成#k" : "#b未完成#k") + "\r\n";
			//msg += icon3 + " #d101  : #k" + (pq2 > 0 ? "#r已完成#k" : "#b未完成#k") + "\r\n";
			//msg += icon3 + " #d女神 : #k" + (pq3 > 0 ? "#r已完成#k" : "#b未完成#k") + "\r\n";
			msg += icon3 + " #d每日 : #k" + (dq > 0 ? "#r已完成#k" : "#b未完成#k") + "\r\n";
			msg += "----------------------------------------\r\n";
			msg += icon5 + " #bBOSS討伐統計 :#k\r\n";;
			msg += icon3 + " #d炎魔 : #k" + (bs1 > 0 ? "#r已完成#k" : "#b未完成#k") + "\r\n";
			msg += icon3 + " #d龍王 : #k" + (bs2 > 0 ? "#r已完成#k" : "#b未完成#k") + "\r\n";
			msg += icon3 + " #d皮卡 : #k" + (bs3 > 0 ? "#r已完成#k" : "#b未完成#k") + "\r\n";
			cm.sendOk(msg);
			status = -1;
		}else if(sel == 2){
			var msg = "";
			msg += icon5 + " #b請點選想完成的任務#k\r\n";
			msg += "#L0#" + icon3 + " #d領取組隊任務傳說方塊#k#r(30顆)#k\r\n";
			msg += "#L1#" + icon3 + " #d領取BOSS討伐傳說方塊#k#r(30顆)#k\r\n";
			cm.sendSimple(msg);
		}
	}else if(status == 2){
		this. s = selection;
		this. pq1n = cm.getPQName("KerningPQ") + "" + todayp; //超綠
		this. pq1 = cm.getPQLog(pq1n);
		this. pq2n = cm.getPQName("LudiPQ") + "" + todayp; //101
		this. pq2 = cm.getPQLog(pq2n);
		this. pq3n = cm.getPQName("OrbisPQ") + "" + todayp;
		this. pq3 = cm.getPQLog(pq3n);
		this. dq = cm.getPlayer().getPrizeLog(todayp + "任務");
		this. bs1 = cm.getPlayer().getOneTimeLog(todayp + "炎魔確認"); 
		this. bs2 = cm.getPlayer().getOneTimeLog(todayp + "龍王確認"); 
		this. bs3 = cm.getPlayer().getOneTimeLog(todayp + "皮卡確認"); 
		if(s == 0){
			if((cm.getIpLog(todayp + "組隊傳方") > 0 && cm.getMacLog(todayp + "組隊傳方") > 0) || cm.getPlayer().getPrizeLog(todayp + "組隊傳方") > 0){
				cm.sendOk("已完成今日的組隊傳說方塊任務");
				status = -1;
			}else if(pq1 == -1 || dq == 0){
				cm.sendOk("請查看是否有尚未完成的組隊任務或每日任務");
				status = -1;
			}else{
				cm.gainItem(5062002,30);
				cm.sendOk("#d已成功發放今日的組隊傳說方塊任務獎勵#k");
				cm.setIpLog(todayp + "組隊傳方");
				cm.setMacLog(todayp + "組隊傳方");
				cm.getPlayer().setPrizeLog(todayp + "組隊傳方");
				status = -1;
			}
		}else if(s == 1){
			if((cm.getIpLog(todayp + "BOSS傳方") > 0 && cm.getMacLog(todayp + "BOSS傳方") > 0) || cm.getPlayer().getPrizeLog(todayp + "BOSS傳方") > 0){
				cm.sendOk("已完成今日的BOSS傳說方塊任務");
				status = -1;
			}else if(bs1 == 0 || bs2 == 0 || bs3 == 0){
				cm.sendOk("請查看是否有尚未完成的BOSS討伐任務");
				status = -1;
			}else{
				cm.gainItem(5062002,30);
				cm.sendOk("#d已成功發放今日的BOSS傳說方塊任務獎勵#k");
				cm.setIpLog(todayp + "BOSS傳方");
				cm.setMacLog(todayp + "BOSS傳方");
				cm.getPlayer().setPrizeLog(todayp + "BOSS傳方");
				status = -1;
			}
		}
	}
}
		