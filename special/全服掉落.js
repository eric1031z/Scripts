load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.server.quest);
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
		cm.sendSimple("#L999##d新增掉落物\r\n" + cm.getAllGlobalDrop());
	}else if(status == 1){
		this. s = selection;
		var msg = "";
		msg += "#d選取道具為 :#k #b#i" + s + "# #t" + s+ "##k\r\n";
		msg += "#L0##b最低掉落量 :#k #r" + cm.getGlobalDrop(parseInt(s),"minimum_quantity") + "#k\r\n";
		msg += "#L1##b最高掉落量 :#k #r" + cm.getGlobalDrop(parseInt(s),"maximum_quantity") + "#k\r\n";
		msg += "#L2##b掉落機率(含伺服器加成) :#k #r" + ((cm.getGlobalDrop(parseInt(s),"chance"))/10000) + "%#k\r\n";
		var quest = "無";
		if(MapleQuest.getInstance(cm.getGlobalDrop(parseInt(s),"quest")).getName()!=""){
			quest = MapleQuest.getInstance(cm.getGlobalDrop(parseInt(s),"quest")).getName();
		}
		msg += "#L3##b需任務條件 :#k #r" + quest + "#k\r\n";
		msg += "#L4##r刪除道具#k\r\n";
		if(s != 999){
		    cm.sendSimple(msg);
		}else{
			cm.sendGetNumber("#d請輸入欲新增的全域掉落道具代碼 :#k",0,0,9999999);
		}
	}else if(status == 2){
		this. s2 = selection;
		if(s != 999){
			if(s2 == 0){
				cm.sendGetNumber("#d請輸入修改的最低掉落量 :#k",0,0,999999);
			}else if(s2 == 1){
				cm.sendGetNumber("#d請輸入修改的最高掉落量 :#k",0,0,999999);
			}else if(s2 == 2){
				cm.sendGetNumber("#d請輸入修改的機率%#k#r(單位為1/1000 如10%填入100)#k#d :#k",0,0,1000);
			}else if(s2 == 3){
				cm.sendGetNumber("#d請輸入需要任務條件代碼 :#k",0,0,999999);
			}else if(s2 == 4){
				cm.sendYesNo("#d確定要刪除#k #r" + s + "#k #d嗎?");
			}
		}else{
			if(!MapleItemInformationProvider.getInstance().itemExists(s2)){
				cm.sendOk("#dWZ內容並不包含輸入的代碼 :#k #r" + s2 + "#k #d請重新檢查#k");
				status = -1;
			}else{
				cm.newGlobalDrop(s2,0,0,0);
				cm.sendOk("#d已為您新增物品代碼 :#k #r" + s2 + "#k #d的創建頁面,請查看#k");
				status = -1;
			}
		}
	}else if(status == 3){
		this. s3 = selection;
		if(s != 999){
			if(s2 == 0){
				cm.setGlobalDrop(parseInt(s),parseInt(s3),"minimum_quantity");
				cm.sendOk("#d已為您將#k #b最低掉落量#k #d更改為 :#k #r" + s3 + "#k");
			}else if(s2 == 1){
				cm.setGlobalDrop(parseInt(s),parseInt(s3),"maximum_quantity");
				cm.sendOk("#d已為您將#k #b最高掉落量#k #d更改為 :#k #r" + s3 + "#k");
			}else if(s2 == 2){
				cm.setGlobalDrop(parseInt(s),parseInt(((parseInt(s3)*1000))),"chance");
				cm.sendOk("#d已為您將#k #掉落機率值#k #d更改為 :#k #r" + ((cm.getGlobalDrop(parseInt(s),"chance"))/10000) + "%#k");
			}else if(s2 == 3){
				cm.setGlobalDrop(parseInt(s),parseInt(s3),"quest");
				cm.sendOk("#d已為您將#k #b需任務條件#k #d更改為 :#k #r" + s3 + "#k");
			}else if(s2 == 4){
				cm.deleteGlobalDrop(parseInt(s));
				cm.sendOk("#d已為您刪除#k #r" + s + "#k");
			}
			status = -1;
		}
	}
		
}
			