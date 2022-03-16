load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.server);

function start(){
	status = -1
	action(1,0,0);
}


function action(mode,type,selection){
	if(mode==1){
		status ++ ;
	}else {
		status --;
	}
	
	if(mode == 0){
		cm.dispose();
	}

	if(status == 0){
		cm.sendGetText("#d請輸入欲全服蒐集道具代碼 :#k");
	}else if(status == 1){
		this. se = cm.getText();
		if(cm.getCollectPara("itemid",parseInt(se)) == 0){
			cm.sendYesNo("您輸入的物品尚開啟無全服蒐集活動\r\n#L99999# #d新增此物品進入全服蒐集活動#k");
		}else{
			var msg = "";
            msg += "#L0##b累積數量 :#k #r" + cm.getCollectPara("counts",parseInt(se)) + "#k\r\n";
		    msg += "#L1##b第一獎勵 :#k #r#t" + cm.getCollectPara("prize1",parseInt(se)) + "##k\r\n";
			msg += "#L2##b第一所需 :#k #r" + cm.getCollectPara("prize1need",parseInt(se)) + "#k\r\n";
			msg += "#L3##b第一數量 :#k #r" + cm.getCollectPara("prize1count",parseInt(se)) + "#k\r\n";
			msg += "#L4##b第二獎勵 :#k #r#t" + cm.getCollectPara("prize2",parseInt(se)) + "##k\r\n";
			msg += "#L5##b第二所需 :#k #r" + cm.getCollectPara("prize2need",parseInt(se)) + "#k\r\n";
			msg += "#L6##b第二數量 :#k #r" + cm.getCollectPara("prize2count",parseInt(se)) + "#k\r\n";
			msg += "#L7##b第三獎勵 :#k #r#t" + cm.getCollectPara("prize3",parseInt(se)) + "##k\r\n";
			msg += "#L8##b第三所需 :#k #r" + cm.getCollectPara("prize3need",parseInt(se)) + "#k\r\n";
			msg += "#L9##b第三數量 :#k #r" + cm.getCollectPara("prize3count",parseInt(se)) + "#k\r\n";
			msg += "#L10##b第四獎勵 :#k #r#t" + cm.getCollectPara("prize4",parseInt(se)) + "##k\r\n";
			msg += "#L11##b第四所需 :#k #r" + cm.getCollectPara("prize4need",parseInt(se)) + "#k\r\n";
			msg += "#L12##b第四數量 :#k #r" + cm.getCollectPara("prize4count",parseInt(se)) + "#k\r\n";
			msg += "#L13##b特別獎勵 :#k #r#t" + cm.getCollectPara("bonus",parseInt(se)) + "##k\r\n";
			msg += "#L14##b特獎數量 :#k #r" + cm.getCollectPara("bonuscount",parseInt(se)) + "#k\r\n";
			msg += "#L15##b開始時間 :#k #r" + cm.getCollectTime("starttime",parseInt(se)) + "#k\r\n";
			msg += "#L16##b結束時間 :#k #r" + cm.getCollectTime("endtime",parseInt(se)) + "#k\r\n";
		    cm.sendSimple("#d--------------------道具#k#r#t" + se + "##k#d--------------------#k\r\n" + msg);
		}
	}else if(status == 2){
		this. sel = selection;
		if(sel != 99999){
            if(sel == 0){
				cm.sendGetNumber("#d請輸入更改#k#b累積數量#k#r(此數值建議勿更動)#k",0,0,999999);
			}else if(sel == 1){
				cm.sendGetNumber("#d請輸入更改#k#b第一獎勵道具代碼#k",0,0,9999999);
			}else if(sel == 2){
				cm.sendGetNumber("#d請輸入更改#k#b第一獎勵所需數量#k",0,0,9999999);
			}else if(sel == 3){
				cm.sendGetNumber("#d請輸入更改#k#b第一獎勵獲得數量#k",0,0,9999999);
			}else if(sel == 4){
				cm.sendGetNumber("#d請輸入更改#k#b第二獎勵道具代碼#k",0,0,9999999);
			}else if(sel == 5){
				cm.sendGetNumber("#d請輸入更改#k#b第二獎勵所需數量#k",0,0,9999999);
			}else if(sel == 6){
				cm.sendGetNumber("#d請輸入更改#k#b第二獎勵獲得數量#k",0,0,9999999);
			}else if(sel == 7){
				cm.sendGetNumber("#d請輸入更改#k#b第三獎勵道具代碼#k",0,0,9999999);
			}else if(sel == 8){
				cm.sendGetNumber("#d請輸入更改#k#b第三獎勵所需數量#k",0,0,9999999);
			}else if(sel == 9){
				cm.sendGetNumber("#d請輸入更改#k#b第三獎勵獲得數量#k",0,0,9999999);
			}else if(sel == 10){
				cm.sendGetNumber("#d請輸入更改#k#b第四獎勵道具代碼#k",0,0,9999999);
			}else if(sel == 11){
				cm.sendGetNumber("#d請輸入更改#k#b第四獎勵所需數量#k",0,0,9999999);
			}else if(sel == 12){
				cm.sendGetNumber("#d請輸入更改#k#b第四獎勵獲得數量#k",0,0,9999999);
			}else if(sel == 13){
				cm.sendGetNumber("#d請輸入更改#k#b特別獎勵道具代碼#k",0,0,9999999);
			}else if(sel == 14){
				cm.sendGetNumber("#d請輸入更改#k#b特別獎勵獲得數量#k",0,0,9999999);
			}else if(sel == 15){
				cm.sendGetText("#d請輸入更改#k#b蒐集活動開始時間#k#r(例 :2020/07/19)#k");
			}else if(sel == 16){
				cm.sendGetText("#d請輸入更改#k#b蒐集活動結束時間#k#r(例 :2020/07/19)#k");
			}
		}else{
			if(cm.haveDrop(se) == null && cm.getGlobalDrop(parseInt(se),"chance") == -1){
				cm.sendOk("#d請確認此道具已存在怪物或全服掉落列表中,若沒有請新增");
				status = -1;
			}else{
				cm.newServerCollect(se,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null);
				cm.sendOk("#d已為您創建道具#k #r#t" + se + "##k#d的修改頁面，請重新輸入道具代碼後查看#k");
				cm.dispose();
			}
		}
    }else if(status == 3){
		this. ss;
		if(sel < 15){
		    ss = selection;
		}else if(sel < 17){
			ss = cm.getText();
		}else{
			ss = selection;
		}
		
		if(sel != 99999){
			if(sel == 0){
				cm.setCollectPara("counts",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b累積數量#k #d至 :#k #r" + ss);
			}else if(sel == 1){
				cm.setCollectPara("prize1",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b第一獎勵道具代碼#k #d至 :#k #r" + ss);
			}else if(sel == 2){
				cm.setCollectPara("prize1need",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b第一獎勵所需數量#k #d至 :#k #r" + ss);
			}else if(sel == 3){
				cm.setCollectPara("prize1count",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b第一獎勵獲得數量#k #d至 :#k #r" + ss);
			}else if(sel == 4){
				cm.setCollectPara("prize2",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b第二獎勵道具代碼#k #d至 :#k #r" + ss);
			}else if(sel == 5){
				cm.setCollectPara("prize2need",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b第二獎勵所需數量#k #d至 :#k #r" + ss);
			}else if(sel == 6){
				cm.setCollectPara("prize2count",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b第二獎勵獲得數量#k #d至 :#k #r" + ss);
			}else if(sel == 7){
				cm.setCollectPara("prize3",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b第三獎勵道具代碼#k #d至 :#k #r" + ss);
			}else if(sel == 8){
				cm.setCollectPara("prize3need",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b第三獎勵所需數量#k #d至 :#k #r" + ss);
			}else if(sel == 9){
				cm.setCollectPara("prize3count",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b第三獎勵獲得數量#k #d至 :#k #r" + ss);
			}else if(sel == 10){
				cm.setCollectPara("prize4",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b第四獎勵道具代碼#k #d至 :#k #r" + ss);
			}else if(sel == 11){
				cm.setCollectPara("prize4need",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b第四獎勵所需數量#k #d至 :#k #r" + ss);
			}else if(sel == 12){
				cm.setCollectPara("prize4count",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b第四獎勵獲得數量#k #d至 :#k #r" + ss);
			}else if(sel == 13){
				cm.setCollectPara("bonus",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b特別獎勵道具代碼#k #d至 :#k #r" + ss);
			}else if(sel == 14){
				cm.setCollectPara("bonuscount",parseInt(se),ss);
				cm.sendOk("#d已成功更改#k #b特別獎勵獲得數量#k #d至 :#k #r" + ss);
			}else if(sel == 15){
				cm.setCollectTime("starttime",parseInt(se),cm.stringToTimestamp((ss.replaceAll('/','-')).concat(" 23:59:59.0")));
				cm.sendOk("#d已成功更改#k #b活動開始時間至#k #d至 :#k #r" + (ss.replaceAll('/','-')).concat(" 23:59:59.0"));
				cm.dispose();
			}else if(sel == 16){
				cm.setCollectTime("endtime",parseInt(se),cm.stringToTimestamp((ss.replaceAll('/','-')).concat(" 23:59:59.0")));
				cm.sendOk("#d已成功更改#k #b活動結束時間至#k #d至 :#k #r" + (ss.replaceAll('/','-')).concat(" 23:59:59.0"));
				cm.dispose();
			}
			status = 0;
		}
		
	}
		
}
			