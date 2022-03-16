load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.util);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
var status;

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";

var check = "#fUI/UIWindow/Memo/check1#";
var uncheck = "#fUI/UIWindow/Memo/check0#";
var today = new Date();
var todayp = (today.getMonth()+1); 
var day = today.getDate();

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
	
	if(status == 0){
		var msg = "#e";
		msg += "                  " + icon5 + " #d月禮包#k\r\n\r\n";
		msg += icon1 + " #r月禮包持續時間都是至當月月底，越早買越划算喔！#k\r\n";
		//msg += icon1 + " #r月禮包僅於月初7日內開放購買，敬請把握！#k\r\n";
		msg += icon1 + " #r購買任意月禮包(可疊加)即贈送3組#k #i4280001# #i5490001#\r\n";
		msg += icon1 + " #r購買任意月禮包即贈超轉稀有物品#k #i1202253#\r\n";
		msg += icon1 + " 每日獎勵領取方式為#r「 簽到時領取」#k請記得簽到!\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n\r\n";
		msg += "#L0#" + icon5 + " #b購買傳說方塊月禮包#k\r\n";
		msg += "#L1#" + icon5 + " #b購買一百紅利月禮包#k\r\n";
		msg += "#L2#" + icon5 + " #b購買強化藥水月禮包#k\r\n";
		msg += "#L3#" + icon5 + " #b購買頂級寶石月禮包#k\r\n";
		msg += "#L4#" + icon5 + " #b購買Ｘ卷寶箱月禮包#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. sel = selection;
		if(sel == 0){
			var msg = "#e";
			msg += icon5 + " #d傳說方塊月禮包 :#k\r\n\r\n";
			msg += icon1 + " #b販售價格 :#k #r2500#k #b紅利#k #r(原價4500紅利)#k\r\n";
			msg += icon1 + " #b當月最多總共可獲得 :#k #r3000#k #b顆 傳說方塊#k\r\n";
			msg += icon3 + " 每日簽到皆可額外獲得 #r100顆#k #i5062002#！！！\r\n";
			msg += icon3 + " 若確定購買請點選 #r「是」#k\r\n";
			cm.sendYesNo(msg);
		}else if(sel == 1){
			var msg = "#e";
			msg += icon5 + " #d一百紅利月禮包 :#k\r\n\r\n";
			msg += icon1 + " #b販售價格 :#k #r2000#k #b紅利#k #r(原價3000紅利)#k\r\n";
			msg += icon1 + " #b當月最多總共可獲得 :#k #r3000#k #b點 額外紅利#k\r\n";
			msg += icon3 + " 每日簽到皆可額外獲得一個 #i5640002#！！！\r\n";
			msg += icon3 + " 若確定購買請點選 #r「是」#k\r\n";
			cm.sendYesNo(msg);
		}else if(sel == 2){
			var msg = "#e";
			msg += icon5 + " #d強化藥水月禮包 :#k\r\n\r\n";
			msg += icon1 + " #b販售價格 :#k #r4000#k #b紅利#k #r(原價6000紅利)#k\r\n";
			msg += icon1 + " #b當月最多總共可獲得 :#k #r30#k #b灌 強化藥水#k\r\n";
			msg += icon3 + " 每日簽到皆可額外獲得一個 #i5640005#！！！\r\n";
			msg += icon3 + " 若確定購買請點選 #r「是」#k\r\n";
			cm.sendYesNo(msg);
		}else if(sel == 3){
			var msg = "#e";
			msg += icon5 + " #d頂級寶石月禮包 :#k\r\n\r\n";
			msg += icon1 + " #b販售價格 :#k #r15000#k #b紅利#k #r(原價20000紅利)#k\r\n";
			msg += icon1 + " #b當月最多總共可獲得 :#k #r30#k #b顆 #z4470014##k\r\n";
			msg += icon3 + " 每日簽到皆可額外獲得一個 #i4470014#！！！\r\n";
			msg += icon3 + " 若確定購買請點選 #r「是」#k\r\n";
			cm.sendYesNo(msg);
		}else if(sel == 4){
			var msg = "#e";
			msg += icon5 + " #dＸ卷寶箱月禮包 :#k\r\n\r\n";
			msg += icon1 + " #b販售價格 :#k #r10000#k #b紅利#k #r(原價15000紅利)#k\r\n";
			msg += icon1 + " #b當月最多總共可獲得 :#k #r30#k #b箱 Ｘ卷寶箱#k\r\n";
			msg += icon3 + " 每日簽到皆可額外獲得一個 #i5490001#！！！\r\n";
			msg += icon3 + " 若確定購買請點選 #r「是」#k\r\n";
			cm.sendYesNo(msg);
		}
	}else if(status == 2){
		var point = cm.getPlayer().getPoints();
		if(day > 50){
			cm.sendOk("#e當月已超過8號，故無法購買了！");
			cm.dispose();
		}else if(sel == 0){
			if(cm.getPlayer().getPrizeLog(todayp + "傳說方塊禮包") > 0){
				cm.sendOk("#e您已購買過此禮包");
				status = -1;
			}else if(point < 2500){
				cm.sendOk("#e您的紅利不足購買此禮包喔!");
				status = -1;
			}else{
				cm.getPlayer().setPrizeLog(todayp + "傳說方塊禮包");
				cm.gainItem(4280001,3);
				cm.gainItem(5490001,3);
				cm.gainItem(1202253,1);
				cm.getPlayer().setPoints(point - 2500);
				cm.sendOk("#e已為您開通 #r傳說方塊月禮包#k 請每日記得簽到領取喔!");
				status = -1;
			}
		}else if(sel == 1){
			if(cm.getPlayer().getPrizeLog(todayp + "一百紅利禮包") > 0){
				cm.sendOk("#e您已購買過此禮包");
				status = -1;
			}else if(point < 2000){
				cm.sendOk("#e您的紅利不足購買此禮包喔!");
				status = -1;
			}else{
				cm.getPlayer().setPrizeLog(todayp + "一百紅利禮包");
				cm.gainItem(4280001,3);
				cm.gainItem(5490001,3);
				cm.gainItem(1202253,1);
				cm.getPlayer().setPoints(point - 2000);
				cm.sendOk("#e已為您開通 #r一百紅利月禮包#k 請每日記得簽到領取喔!");
				status = -1;
			}
		}else if(sel == 2){
			if(cm.getPlayer().getPrizeLog(todayp + "強化藥水禮包") > 0){
				cm.sendOk("#e您已購買過此禮包");
				status = -1;
			}else if(point < 4000){
				cm.sendOk("#e您的紅利不足購買此禮包喔!");
				status = -1;
			}else{
				cm.getPlayer().setPrizeLog(todayp + "強化藥水禮包");
				cm.gainItem(4280001,3);
				cm.gainItem(5490001,3);
				cm.gainItem(1202253,1);
				cm.getPlayer().setPoints(point - 4000);
				cm.sendOk("#e已為您開通 #r強化藥水月禮包#k 請每日記得簽到領取喔!");
				status = -1;
			}
		}else if(sel == 3){
			if(cm.getPlayer().getPrizeLog(todayp + "頂級寶石禮包") > 0){
				cm.sendOk("#e您已購買過此禮包");
				status = -1;
			}else if(point < 15000){
				cm.sendOk("#e您的紅利不足購買此禮包喔!");
				status = -1;
			}else{
				cm.getPlayer().setPrizeLog(todayp + "頂級寶石禮包");
				cm.gainItem(4280001,3);
				cm.gainItem(5490001,3);
				cm.gainItem(1202253,1);
				cm.getPlayer().setPoints(point - 15000);
				cm.sendOk("#e已為您開通 #r頂級寶石月禮包#k 請每日記得簽到領取喔!");
				status = -1;
			}
		}else if(sel == 4){
			if(cm.getPlayer().getPrizeLog(todayp + "Ｘ卷寶箱禮包") > 0){
				cm.sendOk("#e您已購買過此禮包");
				status = -1;
			}else if(point < 10000){
				cm.sendOk("#e您的紅利不足購買此禮包喔!");
				status = -1;
			}else{
				cm.getPlayer().setPrizeLog(todayp + "Ｘ卷寶箱禮包");
				cm.gainItem(4280001,3);
				cm.gainItem(5490001,3);
				cm.gainItem(1202253,1);
				cm.getPlayer().setPoints(point - 10000);
				cm.sendOk("#e已為您開通 #rＸ卷寶箱月禮包#k 請每日記得簽到領取喔!");
				status = -1;
			}
		}
	}
}