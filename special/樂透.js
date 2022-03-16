
load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.constants);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.sever.lotto);

var status;
var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0403/04034291/info/iconRaw#";; //new
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時


var today = new Date();
var todayp = ((today.getMonth() + 1) < 10 ? "0"+ (today.getMonth() + 1) : (today.getMonth()+1)) + "/" + (today.getDate() < 10 ? "0" + today.getDate() : today.getDate()); 

var yesterday = ((today.getMonth() + 1) < 10 ? "0"+ (today.getMonth() + 1) : (today.getMonth()+1)) + "/" + (today.getDate() < 10 ? "0" + (today.getDate()-1) : (today.getDate()-1)); 

function start(){
	status = -1;
	action(1,0,0);
}

var meso = 10000000;
var mp = 1000;
var gash = 500;
var point = 300;

var num = Array();




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
		msg += icon5 + " #b【蛋糕谷威力彩】#k #d日期 :#k #r" + MapleLotto.getToday() + "#k\r\n";
		msg += "-------------------------------------------------\r\n";
		msg += "     " + icon1 + " #b楓幣累積 :#k #r" + cm.getLottoTotal(0)/100000000 + "億#k ";
		msg += "    " + icon1 + " #b楓點累積 :#k #r" + cm.getLottoTotal(1) + "#k\r\n";
		msg += "     " + icon1 + " #bGASH累積 :#k #r" + cm.getLottoTotal(2) + "#k  ";
		msg += "     " + icon1 + " #b紅利累積 :#k #r" + cm.getLottoTotal(3) + "#k\r\n";
		msg += "-------------------------------------------------\r\n";
		msg += "#L0#" + icon3 + " #d查看威力彩規則#k  ";
		msg += "#L5#" + icon3 + " #d查看威力彩獎勵#k\r\n";
		msg += "#L1#" + icon3 + " #d購買今日威力彩#k  ";
		msg += "#L4#" + icon3 + " #d領取威力彩獎賞#k\r\n";
		msg += "#L3#" + icon3 + " #d查看今日威力彩#k  ";
		msg += "#L2#" + icon3 + " #d查看我的威力彩#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		if(s == 0){
			var msg = "";
			msg += icon5 + " #b【威力彩規則頁面】#k \r\n";
			msg += icon3 + " #d威力彩共分為#k#r楓幣/楓點/GASH/紅利#k#d四種模式#k\r\n";
			msg += icon3 + " #d每種威力彩每天至多購買#k#r2張#k\r\n";
			msg += icon3 + " #d威力彩於每日下午#k #r11時#k #d開獎，若無頭獎得主則額度累積#k\r\n";
			msg += icon3 + " #d威力彩於每日#r01-22點#k#d開放購買窗口#k\r\n";
			msg += icon3 + " #d威力彩可選號碼為#k #r0-15#k #d不可重複選取#k\r\n";
			msg += icon3 + " #d頭獎獲得所有對應累積額，若超過1人,則面額平分#k\r\n";
			msg += icon3 + " #d若普通號碼中超過#k #r2個數(不需位置相同)#k #d則可獲得好禮#k\r\n";
			msg += icon3 + " #d若有額外選中特別碼,則可額外獲得好禮#k\r\n";
			cm.sendOk(msg);
			status = -1;
		}else if(s == 1){
			var msg = "";
			msg += icon5 + " #b【威力彩購買頁面】#k #r請選擇您要購買的威力彩 :#k\r\n";
			msg += "#L0#" + icon3 + " #d 楓幣威力彩#k #d售價#k #r" + meso +"#k #d楓幣#k #b(目前#k#r " + cm.getLottoPlayerCount(0) + "#k #b人購買)#k\r\n";
			msg += "#L1#" + icon3 + " #d 楓點威力彩#k #d售價#k #r" + mp +"#k #d楓點#k #b(目前#k#r " + cm.getLottoPlayerCount(1) + "#k #b人購買)#k\r\n";
			msg += "#L2#" + icon3 + " #d GASH威力彩#k #d售價#k #r" + gash +"#k #dGASH#k #b(目前#k#r " + cm.getLottoPlayerCount(2) + "#k #b人購買)#k\r\n";
			msg += "#L3#" + icon3 + " #d 紅利威力彩#k #d售價#k #r" + point +"#k #d紅利#k #b(目前#k#r " + cm.getLottoPlayerCount(3) + "#k #b人購買)#k\r\n";
			if( (today.getHours() < 1 || today.getHours() >= 22)){
				cm.sendOk("#d目前威力彩購買窗口已關閉，請稍等開放購買#k");
				status = -1;
			}else{
			    cm.sendSimple(msg);
			}
		}else if(s == 2){
			if(!cm.getPlayerLotto().contains("「")){
				cm.sendOk("#d您今日無購買威力彩的紀錄#k");
				status = -1;
			}else{
			    cm.sendOk(cm.getPlayerLotto());
			    status = -1;
			}
		}else if(s == 3){
			if(!cm.getTodayLotto().contains("「")){
				cm.sendOk("#d今日威力彩尚未開獎，請等候11點準時開獎#k");
				status = -1;
			}else{
			    cm.sendOk(cm.getTodayLotto());
			    status = -1;
			}
		}else if(s == 4){
			var msg = "";
			msg += icon5 + " #b【威力彩領獎頁面】#k #r請選擇領獎項目 :#k\r\n";
			msg += "#L0#" + icon3 + " #d領取今日獎項#k\r\n";
            msg += "#L1#" + icon3 + " #d領取歷史獎項#k\r\n";
            cm.sendSimple(msg);	
			
		}else if(s == 5){
			var msg = "";
			msg += icon5 + " #b【威力彩獎勵查看】#k\r\n";
			msg += "#L0#" + " #d楓幣威力彩獎勵#k\r\n";
			msg += "#L1#" + " #d楓點威力彩獎勵#k\r\n";
			msg += "#L2#" + " #dGASH威力彩獎勵#k\r\n";
			msg += "#L3#" + " #d紅利威力彩獎勵#k\r\n";
			cm.sendSimple(msg);
		}
			
	}else if(status == 2){
		this. s2 = selection;
		if(s == 1){
			this. name;
			var check = false;
			if(s2 == 0){
				name = "楓幣";
				if(cm.getPlayer().getMeso() >= meso){
					check = true;
				}
			}else if(s2 == 1){
				name = "楓點";
				if(cm.getPlayer().getCSPoints(1) >= mp){
					check = true;
				}
			}else if(s2 == 2){
				name = "GASH";
				if(cm.getPlayer().getCSPoints(0) >= gash){
					check = true;
				}
			}else if(s2 == 3){
				name = "紅利";
				if(cm.getPlayer().getPoints() >= point){
					check = true;
				}
			}
			if(!MapleLotto.canBuy(cm.getPlayer().getClient(),s2,2)){
				cm.sendOk("#d今日#k#r" + name + "#k#d威力彩購買已達2張#k");
				status = -1;
			}else if(check){
			    cm.sendGetNumber(icon1 + "#d【" + name + "威力彩選碼頁面】#k\r\n#b請選擇#k #r第一碼#k #b(範圍0~15)#k\r\n#b當前選擇號碼 #k #d【" + "】#k",0,0,15);
				
			}else{
				cm.sendOk("#d您所擁有的資金不足#k");
				status = -1;
			}
		}else if(s == 4){
			if(s2 == 0){
				if(today.getHours() < 11){
					cm.sendOk("#d今日威力彩尚未開獎，請等候11點準時開獎#k");
				    status = -1;
			    }else if(!cm.getLottoPrize().contains("「")){
				    cm.sendOk("#d您已領取今日的獎勵或今日號碼無中獎#k");
				    status = -1;
			    }else{
			        cm.sendSimple(cm.getLottoPrize());
			    }
			}else{
				cm.sendSimple(cm.getPreviousLotto());
			}
		}else if(s == 5){
			cm.sendOk(MapleLottoPrizeControl.viewAllLottoPrize(s2));
			status = -1;
		}
	}else if(status == 3){
		this. s3 = selection;
		if(s == 1){
			
			if(num.indexOf(s3) >= 0){
				cm.sendOk("#d請勿選擇相同號碼#k");
				num = [];
				status = -1;
			}else{
				num.push(s3);
		        cm.sendGetNumber(icon1 + "#d【" + name + "威力彩選碼頁面】#k\r\n#b請選擇(勿重複)#k #r第二碼#k #b(範圍0~15)#k\r\n#b當前選擇號碼 #k #d【" + num + "】#k",0,0,15);
			}
		}else if(s == 4){
			if(s2 == 1){
				
				if(!cm.getPreviousLottoPrize(s3).contains("同")){
				    cm.sendOk(cm.getPLotto(s3) + "-----------------------------------\r\n#d此歷史紀錄內無中獎紀錄#k");
					status = -1;
				}else{
					cm.sendSimple(cm.getPreviousLottoPrize(s3));
				}
			}else if(s2 == 0){
				cm.setLottoPrized(s3);
				cm.sendOk(MapleLottoPrizeControl.gainLottoPrize(cm.getPlayer().getClient(),cm.getLottoType(s3),cm.getLottoSame(s3)));
				status = -1;
			}
		}
		
	}else if(status == 4){
		this. s4 = selection;
		if(s == 1){
		    
			if(num.indexOf(s4) >= 0){
				cm.sendOk("#d請勿選擇相同號碼#k");
				num = [];
				status = -1;
				
			}else{
				num.push(s4);
		        cm.sendGetNumber(icon1 + "#d【" + name + "威力彩選碼頁面】#k\r\n#b請選擇(勿重複)#k #r第三碼#k #b(範圍0~15)#k\r\n#b當前選擇號碼 #k #d【" + num + "】#k",0,0,15);
			}
		}else if(s == 4){
			if(s2 == 1){
				cm.setLottoPrized(s4);
				cm.sendOk(MapleLottoPrizeControl.gainLottoPrize(cm.getPlayer().getClient(),cm.getLottoType(s4),cm.getLottoSame(s4)));
				status = -1;
			}
		}
	}else if(status == 5){
		this. s5 = selection;
		
		if(num.indexOf(s5) >= 0){
			cm.sendOk("#d請勿選擇相同號碼#k");
			num = [];
			status = -1;
		}else{
			num.push(s5);
		    cm.sendGetNumber(icon1 + "#d【" + name + "威力彩選碼頁面】#k\r\n#b請選擇(勿重複)#k #r第四碼#k #b(範圍0~15)#k\r\n#b當前選擇號碼 #k #d【" + num + "】#k",0,0,15);
		}
	}else if(status == 6){
		this. s6 = selection;
		
		if(num.indexOf(s6) >= 0){
			cm.sendOk("#d請勿選擇相同號碼#k");
			num = [];
			status = -1;
		}else{
			num.push(s6);
		    cm.sendGetNumber(icon1 + "#d【" + name + "威力彩選碼頁面】#k\r\n#b請選擇(勿重複)#k #r特別碼#k #b(範圍0~15)#k\r\n#b當前選擇號碼 #k #d【" + num + "】#k",0,0,15);
		}
	}else if(status == 7){
		this. s7 = selection;
		
		if(num.indexOf(s7) >= 0){
			cm.sendOk("#d請勿選擇相同號碼#k");
			num = [];
			status = -1;
		}else{
			num.push(s7);
		    var msg = "";
		    msg += icon5 + " #b【威力彩購買頁面】#k #d請確認以下資料 :#k\r\n";
		    msg += icon3 + " #d選擇類別 :#k #r" + name + "#k #d威力彩#k\r\n";
		    msg += icon3 + " #d選擇號碼 :#k #r【" + s3 + "、" + s4 + "、" + s5 + "、" + s6 + "】#k #b特別碼 :#k #r" + s7 + "#k\r\n";
            msg += icon1 + " #b是否確認購買，若確認購買請點#k#d「是」#k\r\n";
            cm.sendYesNo(msg);		
		}
		
	}else if(status == 8){
		cm.newLotto(s3,s4,s5,s6,s7,s2);
		if(s2 == 0){
			cm.getPlayer().gainMeso(-meso,true);
			cm.setLottoTotal(0,meso);
		}else if(s2 == 1){
			cm.getPlayer().modifyCSPoints(1,-mp,true);
			cm.setLottoTotal(1,mp);
		}else if(s2 == 2){
			cm.getPlayer().modifyCSPoints(0,-gash,true);
			cm.setLottoTotal(2,gash);
		}else if(s2 == 3){
			cm.getPlayer().setPoints(cm.getPlayer().getPoints() - point);
			cm.setLottoTotal(3,point);
		}
		cm.sendOk("#d已為您購買此號碼#k");
		num = [];
		status = -1;
	}
}
		