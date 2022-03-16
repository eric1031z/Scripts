load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.constants);
importPackage(Packages.client.inventory);
importPackage(Packages.server);



var status ;
var enforce = 1; //灌水

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";


var item2 = 4310044;
var item = 4310039;

var status = -1;

function start(){
	
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
	
	
	var ii = MapleItemInformationProvider.getInstance();
	var eq = cm.getInventory(1).getItem(1);
	var point = cm.getPlayer().getPoints();
	
	if(status == 0){
		var msg = "";
		msg += icon5 + "#b【潛能保護系統】#k\r\n";
		msg += "#L0#" + icon3 + " #d保護系統介紹#k\r\n";
		msg += "#L1#" + icon3 + " #d開始潛能保護#k\r\n";
		msg += "#L2#" + icon3 + " #d查詢是否保護#k\r\n";
	    cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		
		
		if(s == 0){
			var msg = "";
			msg += icon5 + " #b潛能保護介紹#k\r\n";
			msg += icon3 + " #d請將欲保護的裝備放置裝備欄第一格#k\r\n";
			msg += icon3 + " #d至多選擇#k#r1排#k#d潛能保護，於下次使用方塊時不受到更動#k\r\n";
			msg += icon3 + " #d保護一排,需消耗一個#i" + item + "##k\r\n";
			msg += icon3 + " #d保護二排,需消耗一個#i" + item2 + "##k\r\n";
			msg += icon3 + " #d此保護性質並非永久生效,而是一次性生效#k\r\n";
			msg += icon3 + " #d使用保護後請盡快使用方塊#k\r\n";
			msg += icon3 + " #d或對於保護狀態有任何疑慮,請至查詢功能查詢#k\r\n";
			cm.sendOk(msg);
			status = -1;
		}else if(s == 1){
			
			if(eq == null){
				cm.sendOk("請確認您的裝備欄第一格有裝備");
				status = -1;
			}else if(eq.getSocket2() > 0){
				cm.sendOk("此裝備目前已受保護中");
				status = -1;
			}else if(ii.isCash(eq.getItemId())){
				cm.sendOk("點數裝備並無法被保護");
				status = -1;
			}else if(eq.getPotential4() > 0){
				cm.sendOk("裝備4潛的裝備並無法被保護");
				status = -1;
			}else if(eq.getPotential1() <= 0 || eq.getPotential2() <= 0 || eq.getPotential3() <= 0){
				cm.sendOk("未擁有三排潛能或未鑑定的裝備並無法被保護");
				status = -1;
			}else{
				var msg = "";
				msg += icon5 + " #b潛能保護項目#k\r\n";
				msg += icon1 + " #b選擇裝備 :#k #r#z" + eq.getItemId() + "##k\r\n";
				msg += "#L0#" + icon3 + "#d保護一排潛能#k\r\n";
				msg += "#L1#" + icon3 + "#d保護二排潛能#k\r\n";
				cm.sendSimple(msg);
			}				
		}else if(s == 2){
			var msg = "";
			
			if(eq  == null){
				msg += "#d此裝備不存在,並無保護狀態#k\r\n";
			}else {
			    msg += icon5 + " #b選擇裝備 :#k #r#z" + eq.getItemId() + "##k\r\n";
				
			    if(eq.getSocket2() > 0){
				    msg += icon3 + " #d此裝備的第#k #r" + eq.getSocket2() + "#k #d排潛能受到保護#k\r\n";
			    }
			
			    if(eq.getSocket3() > 0){
				    msg += icon3 + " #d此裝備的第#k #r" + eq.getSocket3() + "#k #d排潛能受到保護#k\r\n";
			    }
			
			
			    if(msg == icon5 + " #b選擇裝備 :#k #r#z" + eq.getItemId() + "##k\r\n"){
				    msg += icon3 + " #d此裝備並不受潛能保護中#k\r\n";
			    }
			}
			
			cm.sendOk(msg);
			status = -1;
		}
	}else if(status == 2){
		this. ss = selection;
		if(ss == 0){
			if(!cm.haveItem(item,1)){
				cm.sendOk("#d使用此功能需要 :#k #i" + item2 + "#");
				cm.dispose();
			}else{
			    var msg = "";
			    msg += icon1 + " #b選擇裝備 :#k #r#z" + eq.getItemId() + "##k\r\n";
			    msg += icon5 + " #b請選擇要保護的潛能 :#k\r\n";
			    msg += "#L0#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential1()) + "#k\r\n";
			    msg += "#L1#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential2()) + "#k\r\n";
			    msg += "#L2#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential3()) + "#k\r\n";
			    cm.sendSimple(msg);
			}
		}else if(ss == 1){
			if(!cm.haveItem(item2,1)){
				cm.sendOk("#d使用此功能需要 :#k #i" + item + "#");
				cm.dispose();
			}else{
			    var msg = "";
			    msg += icon1 + " #b選擇裝備 :#k #r#z" + eq.getItemId() + "##k\r\n";
			    msg += icon5 + " #b請選擇要保護的第一排潛能 :#k\r\n";
			    msg += "#L0#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential1()) + "#k\r\n";
			    msg += "#L1#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential2()) + "#k\r\n";
			    msg += "#L2#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential3()) + "#k\r\n";
			    cm.sendSimple(msg);
			}
		}
	}else if(status == 3){
		this. s3 = selection;
		if(ss == 0){
			var msg = "";
			var a = 0;
			msg += icon1 + " #b選擇裝備 :#k #r#z" + eq.getItemId() + "##k\r\n";
			if(s3 == 0){
				a = eq.getPotential1();
			}else if(s3 == 1){
				a = eq.getPotential2();
			}else{
				a = eq.getPotential3();
			}
			msg += icon3 + " #b選擇保護潛能 :#k #r" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,a) + "#k\r\n";
			msg += icon3 + " #d您確定資料正確嗎? 正確的話請選擇#k #b「是」#k\r\n";
			cm.sendYesNo(msg);
		}else if(ss == 1){
			var msg = "";
			var a = 0;
			msg += icon1 + " #b選擇裝備 :#k #r#z" + eq.getItemId() + "##k\r\n";
			if(s3 == 0){
				a = eq.getPotential1();
			}else if(s3 == 1){
				a = eq.getPotential2();
			}else{
				a = eq.getPotential3();
			}
			msg += icon5 + " #b已選第一排潛能 :#k #r" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,a) + "#k\r\n";
			msg += icon5 + " #b請選擇要保護的第二排潛能 :#k\r\n";
			if(s3 == 0){
			    //msg += "#L0#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential1()) + "#k\r\n";
			    msg += "#L1#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential2()) + "#k\r\n";
			    msg += "#L2#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential3()) + "#k\r\n";
			}else if( s3 == 1){
				msg += "#L0#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential1()) + "#k\r\n";
			    //msg += "#L1#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential2()) + "#k\r\n";
			    msg += "#L2#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential3()) + "#k\r\n";
			}else{
				msg += "#L0#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential1()) + "#k\r\n";
			    msg += "#L1#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential2()) + "#k\r\n";
			    //msg += "#L2#" + icon3 + " #d" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,eq.getPotential3()) + "#k\r\n";
			}
			cm.sendSimple(msg);
		}
	}else if(status == 4){
		this. s4 = selection;
		if(ss == 0){
			eq.setSocket2(s3+1);
			//eq.setOwner("保護" + eq.getSocket2() + "排潛能");
			cm.getPlayer().forceReAddItem_NoUpdate(eq, MapleInventoryType.EQUIP);
		    cm.getPlayer().getClient().sendPacket(CWvsContext.InventoryPacket.updateSpecialItemUse(eq, MapleInventoryType.EQUIP.getType(), eq.getPosition(), true, cm.getPlayer()));
			cm.gainItem(item,-1);
			cm.sendOk("#d已成功為您保護潛能,請盡快使用方塊!#k");
			cm.dispose();
		}else if(ss == 1){
			var msg = "";
			var a = 0;
			var b = 0;
			msg += icon1 + " #b選擇裝備 :#k #r#z" + eq.getItemId() + "##k\r\n";
			if(s3 == 0){
				a = eq.getPotential1();
			}else if(s3 == 1){
				a = eq.getPotential2();
			}else{
				a = eq.getPotential3();
			}
			
			if(s4 == 0){
				b = eq.getPotential1();
			}else if(s4 == 1){
				b = eq.getPotential2();
			}else{
				b = eq.getPotential3();
			}
			
			msg += icon3 + " #b選擇保護潛能1 :#k #r" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,a) + "#k\r\n";
			msg += icon3 + " #b選擇保護潛能2 :#k #r" + GameConstants.resolvePotentialID2(ii.getReqLevel(eq.getItemId())/10,b) + "#k\r\n";
			msg += icon3 + " #d您確定資料正確嗎? 正確的話請選擇#k #b「是」#k\r\n";
			cm.sendYesNo(msg);
		}
	}else if(status == 5){
		eq.setSocket2(s3+1);
		eq.setSocket3(s4+1);
		cm.getPlayer().forceReAddItem_NoUpdate(eq, MapleInventoryType.EQUIP);
		cm.getPlayer().getClient().sendPacket(CWvsContext.InventoryPacket.updateSpecialItemUse(eq, MapleInventoryType.EQUIP.getType(), eq.getPosition(), true, cm.getPlayer()));
		cm.gainItem(item2,-1);
		cm.sendOk("#d已成功為您保護潛能,請盡快使用方塊!#k");
		cm.dispose();
	}
}


