load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.server.quest);
importPackage(Packages.server);
importPackage(Packages.sever.fishing);

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
		cm.sendSimple("#L999##d新增釣魚獎勵\r\n" + MapleFisherControl.getAllFish());
	}else if(status == 1){
		this. s = selection;
		var msg = "";
		msg += "#d選取道具為 :#k #b#i" + s + "# #t" + s+ "##k\r\n";
		msg += "#L0##b掉落機率(含伺服器加成) :#k #r" + ((MapleFisherControl.getFishingChance(s))/10000)*100 + "%#k\r\n";
		msg += "#L1##r刪除道具#k\r\n";
		if(s != 999){
		    cm.sendSimple(msg);
		}else{
			cm.sendGetNumber("#d請輸入欲新增的釣魚獎勵代碼 :#k",0,0,9999999);
		}
	}else if(status == 2){
		this. s2 = selection;
		if(s != 999){
			if(s2 == 0){
				cm.sendGetNumber("#d請輸入修改的機率#k#r(千分之一)#k :#k",0,0,1000);
			}else if(s2 == 1){
				cm.sendYesNo("#d確定要刪除#k #r" + s + "#k #d嗎?");
			}
		}else{
			if(!MapleItemInformationProvider.getInstance().itemExists(s2)){
				cm.sendOk("#dWZ內容並不包含輸入的代碼 :#k #r" + s2 + "#k #d請重新檢查#k");
				status = -1;
			}else{
				MapleFisherControl.newFish(s2,0,0,MapleItemInformationProvider.getInstance().getName(s2));
				cm.sendOk("#d已為您新增物品代碼 :#k #r" + s2 + "#k #d的創建頁面,請查看#k");
				status = -1;
			}
		}
	}else if(status == 3){
		this. s3 = selection;
		if(s != 999){
			if(s2 == 0){
				MapleFisherControl.setFishingChance(s,(s3*10));
				cm.sendOk("#d已為您將#k #b機率#k #d更改為 :#k #r" + (s3/10) + " %#k");
			}else if(s2 == 1){
				MapleFisherControl.deleteFish(parseInt(s));
				cm.sendOk("#d已為您刪除#k #r" + s + "#k");
			}
			status = -1;
		}
	}
		
}
			