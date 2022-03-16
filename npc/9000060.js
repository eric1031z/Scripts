
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
var todayp = ((today.getMonth() + 1) < 10 ? "0"+ (today.getMonth() + 1) : (today.getMonth()+1)) + "/" + (today.getDate() < 10 ? "0" + today.getDate() : today.getDate()); 

var yesterday = ((today.getMonth() + 1) < 10 ? "0"+ (today.getMonth() + 1) : (today.getMonth()+1)) + "/" + (today.getDate()-1); 

function start(){
	status = -1;
	action(1,0,0);
}

;;!//錯誤


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
		msg += icon5 + " #d每日贊助系統#k #b日期 :#k #r2020/" + todayp + "#k\r\n";
		msg += icon5 + " #d當前累積贊助額 :#k #r" + cm.todayDonate() + "#k\r\n";
		msg += "#L0#" + icon3 + " #b查看當前贊助排行#k\r\n";
		msg += "#L2#" + icon3 + " #b查看昨日贊助資訊#k\r\n";
		msg += "#L1#" + icon3 + " #b領取昨日贊助獎勵#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. sel = selection;
		if(sel == 0){
			cm.sendOk(cm.getWinner());
			status = -1;
		}else if(sel == 1){
			var msg = "";
            
			if(cm.previousDonate() >= 10000 && cm.getPlayer().getPrizeLog(yesterday + "全服") == 0 && !cm.isBeforeCreate("2020/" + todayp)){
				msg += "#L6#" + icon3 + " #d領取昨日全服贊助獎勵#k\r\n";
			}
			
			if(cm.checkDailyPrize(1000) && cm.getPlayer().getPrizeLog(yesterday + "滿千") == 0){
				msg += "#L7#" + icon3 + " #d領取單日贊助滿千獎勵#k\r\n";
			}
			
			if(cm.checkWinnerPlace() != -1 && cm.getPlayer().getPrizeLog(yesterday + "排行") == 0){
				msg += "#L" + cm.checkWinnerPlace() +  "#" + icon3 + " #d領取今日贊助排名第#k #r" + cm.checkWinnerPlace() + "#k #d獎勵#k\r\n";
			}
			
			
            if(msg != ""){
			    cm.sendSimple(msg);
			}else{
				cm.sendOk("#d昨日贊助獎勵無獎勵可以領取#k");
				status = -1;
			}
			//status = -1;
		}else if(sel == 2){
			var msg = ""
			msg += icon3 + " #d昨日贊助總額 :#k #r" +  cm.previousDonate() + "#k\r\n";
			msg += icon3 + " #d昨日贊助排行 :#k\r\n";
			msg += "-----------------------------------------------------\r\n";
			msg += cm.getPerviousWinner() + "\r\n";
			msg += "-----------------------------------------------------\r\n";
			cm.sendOk(msg);
			status = -1;
		}
		
	}else if(status == 2){
		this. s = selection;
		if(s == 1){
			cm.gainItem(5062002,50);
			cm.gainItem(5064502,3);			
			cm.gainItem(5220010,5);
			cm.getPlayer().setPrizeLog(yesterday + "排行");
			cm.sendOk("#d已發放第一名獎勵#k");
		}else if(s == 2){
			cm.gainItem(5062002,50);
			cm.gainItem(5064502,1);			
			cm.gainItem(5220010,3);
			cm.getPlayer().setPrizeLog(yesterday + "排行");
			cm.sendOk("#d已發放第二名獎勵#k");
		}else if(s == 3){
			cm.gainItem(5062002,30);
			cm.gainItem(5064501,5);			
			cm.gainItem(5220010,3);
			cm.getPlayer().setPrizeLog(yesterday + "排行");
			cm.sendOk("#d已發放第三名獎勵#k");
		}else if(s == 4){
			cm.gainItem(5062002,30);
			cm.gainItem(5064501,3);			
			cm.gainItem(5220010,2);
			cm.getPlayer().setPrizeLog(yesterday + "排行");
			cm.sendOk("#d已發放第四名獎勵#k");
		}else if(s == 5){
			cm.gainItem(5062002,30);
			cm.gainItem(5064501,1);			
			cm.gainItem(5220010,2);
			cm.getPlayer().setPrizeLog(yesterday + "排行");
			cm.sendOk("#d已發放第五名獎勵#k");		
			
		}else if(s == 7){
			cm.gainItem(5062002,50);
			cm.gainItem(5064501,5);	
			cm.gainItem(5220010,1);
			cm.getPlayer().setPrizeLog(yesterday + "滿千");
			cm.sendOk("#d已發放滿千獎勵#k");
		}else if(s == 6){
			cm.gainItem(5062002,20);
			cm.getPlayer().setPrizeLog(yesterday + "全服");
			cm.sendOk("#d已發放全服獎勵#k");			
		}
		
		status = -1;
	}
}
		