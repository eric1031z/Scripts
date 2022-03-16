
load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.client.inventory);
importPackage(Packages.tools.packet);
importPackage(Packages.constants);

var status = -1;
var getDate = new Date();
var today = (getDate.getFullYear()) + '-' + ("0" + (getDate.getMonth() + 1)).slice(-2) + '-' +getDate.getDate();

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		cm.dispose();
		//cm.openNpc(9010000,"系統專區");
	}
	
    if (status == 0) {
		var msg = "#e";
		msg += icon5 + "#d【全服蒐集物品系統】#k\r\n";
		cm.sendSimple(msg + "" + cm.getAllServerCollect());
		
	}else if(status == 1){
		this. s1 = selection;
		var msg ="#e";
		
		msg += "#r#t" + s1 + "##k #d蒐集活動#k\r\n"
		msg += "#d-------------------------------------#k\r\n";
		var coun = cm.getCollectLog(parseInt(s1));
		if(cm.getCollectLog(parseInt(s1)) == -1){
			coun = 0;
		}
		msg += "#b您所蒐集數量#k : #r" + coun + "#k\r\n";
		msg += "#b當前蒐集數量#k : #r" + cm.getCollectPara("counts",parseInt(s1)) + "#k\r\n";
		msg += "#b當前貢獻王者#k : #r" + cm.getMaxCollect(parseInt(s1)) + "#k\r\n";
        msg += "#b活動開始時間#k : #r" + cm.getCollectTime("starttime",parseInt(s1)) + "#k\r\n";	
        msg += "#b活動結束時間#k : #r" + cm.getCollectTime("endtime",parseInt(s1)) + "#k\r\n";
		var index;
		if(Date.parse(cm.getCollectTime("starttime",parseInt(s1))).valueOf() > Date.parse(today).valueOf()){
			index = " #r此活動尚未開起#k\r\n";
		}else if(Date.parse(cm.getCollectTime("endtime",parseInt(s1))).valueOf() > Date.parse(today).valueOf()){
			index = " #r此活動尚未結束#k\r\n";
		}else if(coun <= 0){
			index = " #r無貢獻無法領獎#k\r\n";
		}else if(cm.getPlayer().getPrizeLog((s1.toString()).concat("全服蒐集")) > 0){
			index = " #r已領取此次獎勵#k\r\n";
		}else{
			index = " #r尚有獎勵未領取#k\r\n";
		}
		msg += "#b獎勵領取狀態#k :" + index;
        msg += (Date.parse(cm.getCollectTime("endtime",parseInt(s1))).valueOf() < Date.parse(today).valueOf() ? "" : "#L0##d我要貢獻!#k\r\n");
		msg += "#L1##d查看獎勵!#k\r\n";
		msg += "#L2##d我要領獎!#k\r\n";
		
		if(cm.getCollectPara("prize1need",parseInt(s1)) == 0){
			msg = "#d此物品累積活動尚在規劃中,即將開放!#k";
			cm.sendOk(msg);
			cm.dispose();
		}else{
            cm.sendSimple(msg);
		}		
		
	}else if(status == 2){
		this. s = selection;
		var has = cm.getPlayer().getItemQuantity(parseInt(s1),false);
		if(s == 0){
		    cm.sendGetNumber("#d請輸入您想要貢獻的#k #r#t" + parseInt(s1) + "##k #d數量#k",has,0,has);		
		}else if(s == 1){
			var msg = "#e";
			msg += "#b#t" + s1 + "##k #d蒐集活動全服累積獎勵列表#k\r\n"
			msg += "#b需注意以下獎勵只發放給#k#r「全服曾貢獻者(1個也算)」#k\r\n"
		    msg += "#d------------------------------------------#k\r\n";
			msg += "#d累積數過#k #r" + cm.getCollectPara("prize1need",parseInt(s1)) + "#k #d全服獲得#k#r#i" + cm.getCollectPara("prize1",parseInt(s1)) + "# #z" + cm.getCollectPara("prize1",parseInt(s1)) + "##k #d共#k #r" + cm.getCollectPara("prize1count",parseInt(s1)) + "#k#d個\r\n";
			msg += "#d累積數過#k #r" + cm.getCollectPara("prize2need",parseInt(s1)) + "#k #d全服獲得#k#r#i" + cm.getCollectPara("prize2",parseInt(s1)) + "# #z" + cm.getCollectPara("prize2",parseInt(s1)) + "##k #d共#k #r" + cm.getCollectPara("prize2count",parseInt(s1)) + "#k#d個\r\n";
			msg += "#d累積數過#k #r" + cm.getCollectPara("prize3need",parseInt(s1)) + "#k #d全服獲得#k#r#i" + cm.getCollectPara("prize3",parseInt(s1)) + "# #z" + cm.getCollectPara("prize3",parseInt(s1)) + "##k #d共#k #r" + cm.getCollectPara("prize3count",parseInt(s1)) + "#k#d個\r\n";
			msg += "#d累積數過#k #r" + cm.getCollectPara("prize4need",parseInt(s1)) + "#k #d全服獲得#k#r#i" + cm.getCollectPara("prize4",parseInt(s1)) + "# #z" + cm.getCollectPara("prize4",parseInt(s1)) + "##k #d共#k #r" + cm.getCollectPara("prize4count",parseInt(s1)) + "#k#d個\r\n";
			msg += "#r貢獻王特獎! #k#b#i" +  cm.getCollectPara("bonus",parseInt(s1)) + "# #z" + cm.getCollectPara("bonus",parseInt(s1)) + "##k #r共 : #b" + cm.getCollectPara("bonuscount",parseInt(s1)) + "#k #r個!!!\r\n";
			msg += "#d獎勵於活動結束時間 : #k#r" + cm.getCollectTime("endtime",parseInt(s1)) + "#k #d方可領取#k\r\n";
			if(cm.getCollectPara("prize1need",parseInt(s1)) == 0){
				msg = "#d此物品累積活動尚在規劃中,即將開放!#k";
			}
			cm.sendOk(msg);
			status = -1;
		}else if(s == 2){
			
			if(Date.parse(cm.getCollectTime("starttime",parseInt(s1))).valueOf() > Date.parse(today).valueOf()){
				cm.sendOk("#d此活動尚未開起! 開始時間為 :#k #r" + cm.getCollectTime("starttime",parseInt(s1)) + "#k");
				cm.dispose();
			}else if(Date.parse(cm.getCollectTime("endtime",parseInt(s1))).valueOf() > Date.parse(today).valueOf()){
				cm.sendOk("#d此活動尚未結束! 結束時間為 :#k #r" + cm.getCollectTime("endtime",parseInt(s1)) + "#k");
				cm.dispose();
			}else{
				var totalcount = cm.getCollectPara("counts",parseInt(s1));
				var msg = "#e";
				
				if(totalcount >= cm.getCollectPara("prize1need",parseInt(s1))){
					msg += "#d可獲得#k#r#i" + cm.getCollectPara("prize1",parseInt(s1)) + "# #t" + cm.getCollectPara("prize1",parseInt(s1)) + "##k #d共#k #r" + cm.getCollectPara("prize1count",parseInt(s1)) + "#k#d個\r\n";
				}
				if(totalcount >= cm.getCollectPara("prize2need",parseInt(s1))){
					msg += "#d可獲得#k#r#i" + cm.getCollectPara("prize2",parseInt(s1)) + "# #t" + cm.getCollectPara("prize2",parseInt(s1)) + "##k #d共#k #r" + cm.getCollectPara("prize2count",parseInt(s1)) + "#k#d個\r\n";
				}
				if(totalcount >= cm.getCollectPara("prize3need",parseInt(s1))){
					msg += "#d可獲得#k#r#i" + cm.getCollectPara("prize3",parseInt(s1)) + "# #t" + cm.getCollectPara("prize3",parseInt(s1)) + "##k #d共#k #r" + cm.getCollectPara("prize3count",parseInt(s1)) + "#k#d個\r\n";
				}
				if(totalcount >= cm.getCollectPara("prize4need",parseInt(s1))){
					msg += "#d可獲得#k#r#i" + cm.getCollectPara("prize4",parseInt(s1)) + "# #t" + cm.getCollectPara("prize4",parseInt(s1)) + "##k #d共#k #r" + cm.getCollectPara("prize4count",parseInt(s1)) + "#k#d個\r\n";
				}
				if(cm.getPlayer().getName() == cm.getMaxCollect(parseInt(s1))){
					msg += "#r您是貢獻王 獲得#k#d#i" +  cm.getCollectPara("bonus",parseInt(s1)) + "# #t" + cm.getCollectPara("bonus",parseInt(s1)) + "##k #r共 : #b" + cm.getCollectPara("bonuscount",parseInt(s1)) + "#k #r個!#k\r\n";
				}
				
				cm.sendYesNo(msg + "------------------------------------------------\r\n#b確定要領取嗎?#k");

			}
			
		}
	}else if(status == 3){
		var s2 = selection;
		if(s == 0){
		    if(!cm.haveItem(parseInt(s1),s2)){
			    cm.sendOk("#d您的#k #r#t" + parseInt(s1) + "##k #d不足#k #b" + s2 + "#k #d個#k");
			    cm.dispose();
		    }else{
			    cm.gainItem(parseInt(s1),-s2);
			    cm.setCollectLog(parseInt(s1),s2);
			    cm.setCollectPara("counts",parseInt(s1),(cm.getCollectPara("counts",parseInt(s1)) + s2));
			    cm.sendOk("#d已成功貢獻!#k\r\n#b今次貢獻量 : #k#r" + s2 + "#k\r\n#b您總貢獻量 : #k#r" + cm.getCollectLog(parseInt(s1)) + "#k\r\n#b累積貢獻量 : #k#r" + cm.getCollectPara("counts",parseInt(s1)) + "#k");
			    cm.dispose();
		    }
	    }else if(s == 2){
			if(cm.getCollectLog(parseInt(s1)) == -1){
				cm.sendOk("#d您並沒有參與任何貢獻，故無法領取獎勵#k");
				cm.dispose();
			}else if(cm.getPlayer().getPrizeLog((s1.toString()).concat("全服蒐集")) > 0){
				cm.sendOk("#d您已領取過此次的全服蒐集獎勵#k");
				cm.dispose();
			}else{
				var totalcount = cm.getCollectPara("counts",parseInt(s1));
				if(totalcount >= cm.getCollectPara("prize1need",parseInt(s1))){
					cm.gainItemNoTrade(cm.getCollectPara("prize1",parseInt(s1)),cm.getCollectPara("prize1count",parseInt(s1)),-1);
				}
				if(totalcount >= cm.getCollectPara("prize2need",parseInt(s1))){
					cm.gainItemNoTrade(cm.getCollectPara("prize2",parseInt(s1)),cm.getCollectPara("prize2count",parseInt(s1)),-1);
				}
				if(totalcount >= cm.getCollectPara("prize3need",parseInt(s1))){
					cm.gainItemNoTrade(cm.getCollectPara("prize3",parseInt(s1)),cm.getCollectPara("prize3count",parseInt(s1)),-1);
				}
				if(totalcount >= cm.getCollectPara("prize4need",parseInt(s1))){
					cm.gainItemNoTrade(cm.getCollectPara("prize4",parseInt(s1)),cm.getCollectPara("prize4count",parseInt(s1)),-1);
				}
				if(cm.getPlayer().getName() == cm.getMaxCollect(parseInt(s1))){
					cm.gainItemNoTrade(cm.getCollectPara("bonus",parseInt(s1)),cm.getCollectPara("bonuscount",parseInt(s1)),-1);
				}
				cm.getPlayer().setPrizeLog((s1.toString()).concat("全服蒐集"));
				cm.sendOk("#d已成功發放此次全服蒐集活動獎勵!");
				cm.dispose();
			}
		}
	}
}
		