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
		
		cm.sendGetText("#d請輸入欲查詢商城編號 :#k");
	}else if(status == 1){
		this. se = cm.getText();
		if(cm.getAllCashItem(se) == ""){
			cm.sendYesNo("您輸入的商城編號內無物品或未開放\r\n#L99999# #d新增物品至此商城#k");
			//status = -1;
		}else{
			
		    cm.sendSimple("#b--------------------商城#k#r" + se + "#k#b--------------------#k\r\n#L99999# #d新增物品至此商城#k\r\n" +cm.getAllCashItem(se));
		}
	}else if(status == 2){
		this. sel = selection;
		if(sel != 99999){
		    var msg = "";
		    msg += "#b選取道具為 :#k #r#i" + cm.getCashItem(se,sel,"itemid") + "# #t" + cm.getCashItem(se,sel,"itemid") + "##k\r\n";
            msg += "#L0##b道具價格 :#k #r" + cm.getCashItem(se,sel,"discount_price") + "#k\r\n";
		    msg += "#L1##b道具數量 :#k #r" + cm.getCashItem(se,sel,"count") + "#k\r\n";
			msg += "#L2##r刪除物品#k\r\n";
		    cm.sendYesNo(msg);
		}else{
			cm.sendGetNumber("請輸入欲新增物品代碼",0,0,9999999);
		}
    }else if(status == 3){
		this. sel2 = selection;
		if(sel != 99999){
			if(sel2 == 0){
			    cm.sendGetNumber("#d請輸入欲更改價格 :#k",0,0,9999999);
			}else if(sel2 == 1){
				cm.sendGetNumber("#d請輸入欲更改數量#k#r(若物品為裝備類型請設定為1)#k :",0,0,9999999);
			}else {
				cm.sendYesNo("#d確定要將物品#k #r#t" + cm.getCashItem(se,sel,"itemid") + "##k #d從商城#k #b" + se + "#k #d中刪除嗎?");
			}
		}else{
			if(!MapleItemInformationProvider.getInstance().itemExists(sel2)){
				cm.sendOk("#d此物品代碼#k #r" + sel2 + "#k #d不存在於目前wz中#k");
				status = 0;
			}else{
			    cm.sendGetNumber("#d請為物品#k#r#t" + sel2 + "##k設定價格 :",0,0,999999);
			}
		}
		
	}else if(status == 4){
		this. sel3 = selection;
		if(sel != 99999){
			if(sel2 == 0){
				cm.setCashItem(sel,sel3,"discount_price");
				cm.sendOk("#d已將物品#k#r#t" + cm.getCashItem(se,sel,"itemid") + "##k #d價格更改為 : #k#b" + sel3); 
			}else if(sel2 == 1){
				cm.setCashItem(sel,sel3,"count");
				cm.sendOk("#d已將物品#k#r#t" + cm.getCashItem(se,sel,"itemid") + "##k #d數量更改為 : #k#b" + sel3); 
			}else{
				cm.deleteCashItem(sel);
				cm.sendOk("#d已將此物品從商城#k #b" + se + "#k #d中刪除"); 
			}
			status = 0;
		}else{
			cm.sendGetNumber("#d請為物品#k#r#t" + sel2 + "##k#d設定數量#k\r\n#b(若物品為裝備類型請設定為1)#k :",0,0,999999);
		}
		
	}else if(status == 5){
		this. sel4 = selection;
		if(sel == 99999){
		    cm.newCashItem(sel2,sel3,2,sel4,se);
			cm.sendOk("#d已成功新增物品#k #r#t" + sel2 + "##k \r\n#b價格 :#k #r" + sel3 + "#k #b數量 :#k #r" + sel4 + "#k #d至商城#k #r" + se + "#k");
		}
		status = 0;
	}
		
}
			