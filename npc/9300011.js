load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.server.life);
importPackage(Packages.sever.wmonster);

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
		cm.sendOk("聖誕節快樂");
		cm.dispose();
	}else if(status == 1){
		this. s = selection;
		var msg = "";
		msg += "#d選取怪物為 :#k #b#o" + s + "##k\r\n";
		msg += "#d當前位置為 :#k #b" + cm.getWM("currentmap",parseInt(s)) + "#k\r\n";
		msg += "#L0##b怪物血量 :#k #r" + cm.getWM("hp",parseInt(s)) + " 千萬#k\r\n";
		msg += "#L1##b怪物魔量 :#k #r" + cm.getWM("mp",parseInt(s)) + " 千萬#k\r\n";
		msg += "#L2##b怪物物功 :#k #r" + cm.getWM("watk",parseInt(s)) + "#k\r\n";
		msg += "#L3##b怪物魔攻 :#k #r" + cm.getWM("matk",parseInt(s)) + "#k\r\n";
		msg += "#L4##b獎品道具 :#k #r#t" + cm.getWM("prize",parseInt(s)) + "##k\r\n";
		msg += "#L5##b獎品數量 :#k #r" + cm.getWM("prizecount",parseInt(s)) + "#k\r\n";
		msg += "#L6##b獎品需求 :#k #r" + cm.getWM("prizeneed",parseInt(s)) + "#k\r\n";
		msg += "#L7##b特獎道具 :#k #r#t" + cm.getWM("bonus",parseInt(s)) + "##k\r\n";
		msg += "#L8##b特獎數量 :#k #r" + cm.getWM("bonuscount",parseInt(s)) + "#k\r\n";
		msg += "#L9##r刪除野王#k\r\n";
		if(s != 999){
		    cm.sendSimple(msg);
		}else{
			cm.sendGetNumber("#d請輸入新增之野王怪物代碼 :#k",0,0,9999999);
		}
	}else if(status == 2){
		this. s2 = selection;
		if(s != 999){
			if(s2 == 0){
				cm.sendGetNumber("#d請輸入修改的怪物血量(單位為千萬) :#k",0,0,9999999999);
			}else if(s2 == 1){
				cm.sendGetNumber("#d請輸入修改的怪物魔量(單位為千萬) :#k",0,0,9999999999);
			}else if(s2 == 2){
				cm.sendGetNumber("#d請輸入修改的怪物物攻 :#k",0,0,9999999);
			}else if(s2 == 3){
				cm.sendGetNumber("#d請輸入需要的怪物魔攻 :#k",0,0,9999999);
			}else if(s2 == 4){
				cm.sendGetNumber("#d請輸入需要的獎品代碼 :#k",0,0,9999999);
			}else if(s2 == 5){
				cm.sendGetNumber("#d請輸入需要的獎品數量 :#k",0,0,9999999);
			}else if(s2 == 6){
				cm.sendGetNumber("#d請輸入需要的獎品需求(傷害%數) :#k",0,0,100);
			}else if(s2 == 7){
				cm.sendGetNumber("#d請輸入需要的特獎代碼 :#k",0,0,9999999);
			}else if(s2 == 8){
				cm.sendGetNumber("#d請輸入需要的特獎數量 :#k",0,0,9999999);
		    }else if(s2 == 9){
				cm.sendYesNo("#d確定要刪除#k #r" + s + "#k #d嗎?");
			}
		}else{
			if(MapleLifeFactory.getMonster(s2) == null){
				cm.sendOk("#dWZ內容並不包含輸入的怪物代碼 :#k #r" + s2 + "#k #d請重新檢查#k");
				status = -1;
			}else{
				cm.newWM(s2,0,0,0,0,0,0,0,0,0,0,0,null);
				cm.sendOk("#d已為您新增怪物代碼 :#k #r" + s2 + "#k #d的創建頁面,請查看#k");
				status = -1;
			}
		}
	}else if(status == 3){
		this. s3 = selection;
		if(s != 999){
			if(s2 == 0){
				cm.setWM("hp",parseInt(s),parseInt(s3));
				cm.sendOk("#d已為您將#k #b怪物血量#k #d更改為 :#k #r" + s3 + " 千萬#k");
			}else if(s2 == 1){
				cm.setWM("mp",parseInt(s),parseInt(s3));
				cm.sendOk("#d已為您將#k #b怪物魔量#k #d更改為 :#k #r" + s3 + " 千萬#k");
			}else if(s2 == 2){
				cm.setWM("watk",parseInt(s),parseInt(s3));
				cm.sendOk("#d已為您將#k #b怪物物攻#k #d更改為 :#k #r" + s3 + "#k");
			}else if(s2 == 3){
				cm.setWM("matk",parseInt(s),parseInt(s3));
				cm.sendOk("#d已為您將#k #b怪物魔攻#k #d更改為 :#k #r" + s3 + "#k");	
			}else if(s2 == 4){
				cm.setWM("prize",parseInt(s),parseInt(s3));
				cm.sendOk("#d已為您將#k #b獎品代碼#k #d更改為 :#k #r" + s3 + "#k");	
			}else if(s2 == 5){
				cm.setWM("prizecount",parseInt(s),parseInt(s3));
				cm.sendOk("#d已為您將#k #b獎品數量#k #d更改為 :#k #r" + s3 + "#k");	
			}else if(s2 == 6){
				cm.setWM("prizeneed",parseInt(s),parseInt(s3));
				cm.sendOk("#d已為您將#k #b獎品需求(傷害%數)#k #d更改為 :#k #r" + s3 + "#k");	
			}else if(s2 == 7){
				cm.setWM("bonus",parseInt(s),parseInt(s3));
				cm.sendOk("#d已為您將#k #b特獎代碼#k #d更改為 :#k #r" + s3 + "#k");	
			}else if(s2 == 8){
				cm.setWM("bonuscount",parseInt(s),parseInt(s3));
				cm.sendOk("#d已為您將#k #b特獎數量#k #d更改為 :#k #r" + s3 + "#k");	
			}else if(s2 == 9){
				cm.deleteWM(parseInt(s));
				cm.sendOk("#d已為您刪除#k #r" + s + "#k");
			}
			status = -1;
		}
	}
		
}
			