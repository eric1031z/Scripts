
load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.client.inventory);
importPackage(Packages.tools.packet);
importPackage(Packages.constants);




var status = -1;

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";


var grade = 5;
var cost = 5640004;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		cm.dispose();
	}
	if (status == 0){
		var msg = "";
		msg += icon5 + " #e#d應用五潛#k\r\n";
		msg += "#L0#" + icon3 + " #b查看規則#k#l  ";
		msg += "#L1#" + icon3 + " #b潛能內容#k#l\r\n";
		msg += "#L2#" + icon3 + " #b我的潛能#k#l  ";
		msg += "#L4#" + icon3 + " #b取下潛能#k#l\r\n";
		msg += "#L3#" + icon3 + " #b抽取潛能#k#l  ";
		//msg += "#L5#" + icon3 + " #b販售潛能#k#l\r\n";
		cm.sendSimple(msg);
    }else if (status == 1) {
		this. s = selection;
		if(s == 0){
			var msg = "";
			msg += icon5 + " #e#b潛能轉蛋規則 :#k\r\n";
			//msg += icon3 + " #r目前尚未開啟抽取#k\r\n";
			msg += icon3 + " #d轉一次轉蛋需花費#k #i" + cost + "#\r\n";
			msg += icon3 + " #d潛能無視#k #r裝備適用條件#k #d如手套潛能可應用於防具#k\r\n";
			msg += icon3 + " #d潛能顯示為#k#r應用於最高等級裝備#k#d下的效果#k\r\n";
			msg += icon3 + " #d潛能可以應用於#r已擁有四排潛能#k#d上,增加為#k#r第五排#k\r\n";
			msg += icon3 + " #d潛能效果是與裝備等級相關的,請確認後再行應用#k\r\n";
			msg += icon3 + " #d潛能應用後若要使用方塊請先將應用潛能取下#k\r\n"
		 
			cm.sendOk(msg);
			status = -1;
	    }else if(s == 1){
		    cm.sendSimple(icon5 + " #d以下為可能抽取到的潛能#k\r\n#r(點擊後查看/以下素質都是默認裝備等級最高時的素質)#k #d:#k\r\n" + cm.getAllPInfoForGacha());
		}else if(s == 2){
			var o = cm.getAllPByCid(cm.getPlayer().getId(),grade);
			if(o != ""){
			    cm.sendSimple(icon5 + " #d以下為您已取到的潛能#k#r(點擊後使用)#k #d:#k\r\n" + cm.getAllPByCid(cm.getPlayer().getId(),grade));
			}else{
				cm.sendOk("#d您目前尚無抽取的潛能喔!#k");
				status = -1;
			}
		}else if(s == 3){
			if(!cm.haveItem(cost)){
				cm.sendOk("#d抽取一次需要#k #i" + cost + "#");
				status = -1;
			}else{
				var pool = cm.getAllPotentailView();
				var prize = Array();
				for(var i = 0 ; i < pool.length ; i++){
					if(cm.getPotentialChance(pool[i]) > Math.floor(Math.random()*10000)){
						prize.push(pool[i]);
					}
				}
				var x = Math.floor(Math.random()*prize.length);
				var get = prize[x];
				cm.setPCount(cm.getPlayer().getId(),get,1,grade);
				cm.sendOk("#d恭喜您抽取到#k#r(顯示效果為應用於最高等級裝備)#k\r\n#d效果 :#k #b" + GameConstants.resolvePotentialID2(19,get) + "#k\r\n#d若要使用請至「我的潛能」#k");
				cm.gainItem(cost,-1);
				status = -1;
			}
				
		}else if(s == 4){
			var msg = "";
		    for(var i = 0 ; i < 96 ; i++){
			    if(cm.getInventory(1).getItem(i) != null && !MapleItemInformationProvider.getInstance().isCash(cm.getInventory(1).getItem(i).getItemId())){
				    if(cm.getInventory(1).getItem(i).getPotential5() > 0){
				         msg += "#L" + i + "#" + icon3 + " #d#t" + cm.getInventory(1).getItem(i).getItemId() + "##k\r\n";
				    }
			    }
		    }
		    if(msg == ""){
			    cm.sendOk("#d您並沒有已裝備的應用五潛裝備喔!#k");
			    status = -1;
		    }else{
		        cm.sendSimple(icon5 + " #d請選擇需要取下應用潛能的裝備#k\r\n" + msg);	
		    }
		}else if(s == 5){
			var o = cm.getAllPByCid(cm.getPlayer().getId(),grade);
			if(o!=""){
			    cm.sendSimple(icon5 + " #d以下為您的潛能#k#r(一個可售10紅利)#k #d:#k\r\n" + cm.getAllPByCid(cm.getPlayer().getId(),grade));
			}else{
				cm.sendOk("#d您目前尚無抽取的潛能喔!#k");
				status = -1;
			}
		}
	
	}else if(status == 2){
		this. op = selection;
		
		if(op == -1){
			cm.dispose();
		}else{
		
		var forb = "";
		var tam = "";
		if(s != 4){
		    var tocheck = MapleItemInformationProvider.getInstance().getPotentialInfo(op).get(1);
		}else{
			var tocheck = MapleItemInformationProvider.getInstance().getPotentialInfo(cm.getInventory(1).getItem(op).getPotential5()).get(1);
		}
		if(tocheck.optionType == 0){
			forb = "通用";
		}else if(tocheck.optionType == 10){
			forb = "武器專用";
		}else if(tocheck.optionType == 11){
			forb = "非武器專用";
		}else if(tocheck.optionType == 20){
			forb = "防具專用";
		}else if(tocheck.optionType == 40){
			forb = "飾品專用";
		}else if(tocheck.optionType == 51){
			forb = "頭盔專用";
		}else if(tocheck.optionType == 52){
			forb = "套服/上衣專用";
		}else if(tocheck.optionType == 53){
			forb = "套服/褲裙專用";
		}else if(tocheck.optionType == 54){
			forb = "手套專用";
		}else if(tocheck.optionType == 55){
			forb = "鞋子專用";
		}
		
		if(op>40000){
			tam = "傳說等級潛能";
		}else if(op>30000){
			tam = "罕見等級潛能";
		}else if(op>20000){
			tam = "稀有等級潛能";
		}else{
			tam = "特殊等級潛能";
		}
		
		if(s == 1){
		    cm.sendOk("======================潛能訊息======================\r\n#g裝備條件 : #k#d" + forb + "#k\r\n#g等級限制 : #k#d" + tocheck.reqLevel + "等#k\r\n#g潛能等級 : #k#d" + tam + "#k\r\n======================素質詳細======================\r\n" + tom(op));
			status = -1;
		}else if(s == 2){
			cm.sendYesNo("#d當前擁有數量 :#k #r" + cm.getPCount(cm.getPlayer().getId(), op, grade) + "#k #d(點擊「是」後使用)#k\r\n======================潛能訊息======================\r\n#g裝備條件 : #k#d" + forb + "#k\r\n#g等級限制 : #k#d" + tocheck.reqLevel + "等#k\r\n#g潛能等級 : #k#d" + tam + "#k\r\n======================素質詳細======================\r\n" + tom(op));
		}else if(s == 4){
			var msg = "";
			msg += icon5 + " #b潛能移除#k\r\n";
		    msg += icon3 + " #d選取裝備 :#k #r#t" +  cm.getInventory(1).getItem(op).getItemId() + "##k\r\n";
		    msg += icon3 + " #d應用效果 :#k #r" +  GameConstants.resolvePotentialID2(MapleItemInformationProvider.getInstance().getReqLevel(cm.getInventory(1).getItem(op).getItemId())/10,cm.getInventory(1).getItem(op).getPotential5()) + "#k\r\n";
		    msg += icon3 + " #b您確定要移除嗎?#k#r(將會儲存至「我的潛能」)#k\r\n";
			cm.sendYesNo(msg);
		}else if(s == 5){
			var msg = "";
			msg += icon5 + " #b潛能販售#k\r\n";
		    //msg += icon3 + " #d選取裝備 :#k #r#t" +  cm.getInventory(1).getItem(op).getItemId() + "##k\r\n";
		    msg += icon3 + " #d應用效果 :#k #r" +  GameConstants.resolvePotentialID2(15,op) + "#k\r\n";
		    msg += icon3 + " #b您確定要販售嗎?#k#r(販售10紅利)#k\r\n";
			cm.sendYesNo(msg);
		}
		}
		
    }else if(status == 3){
		if(s == 2){
	    var msg = "";
		for(var i = 0 ; i < 96 ; i++){
			if(cm.getInventory(1).getItem(i) != null && !MapleItemInformationProvider.getInstance().isCash(cm.getInventory(1).getItem(i).getItemId())){
				if(cm.getInventory(1).getItem(i).getPotential4() > 0 && cm.getInventory(1).getItem(i).getPotential5() == 0){
				    msg += "#L" + i + "#" + icon3 + " #d#t" + cm.getInventory(1).getItem(i).getItemId() + "##k\r\n";
				}
			}
		}
		if(msg == ""){
			cm.sendOk("#d您並沒有符合可應用條件的裝備喔!#k\r\n#r(需已有四牌潛能且無五排應用潛能的非現金裝備)#k");
			status = -1;
		}else{
		    cm.sendSimple(icon5 + " #d請選擇應用的裝備#k\r\n" + msg);	
		}
		}else if(s == 4){
			cm.setPCount(cm.getPlayer().getId(),cm.getInventory(1).getItem(op).getPotential5(),1,grade);
			cm.getInventory(1).getItem(op).setPotential5(0);
			cm.getPlayer().forceReAddItem_NoUpdate(cm.getInventory(1).getItem(op), MapleInventoryType.EQUIP);
			cm.getPlayer().getClient().sendPacket(CWvsContext.InventoryPacket.updateSpecialItemUse(cm.getInventory(1).getItem(op), MapleInventoryType.EQUIP.getType(), cm.getInventory(1).getItem(op).getPosition(), true, cm.getPlayer()));
			cm.sendOk("#d已為您成功移除潛能!請查看#k");
			status = -1;
		}else if(s == 5){
			cm.setPCount(cm.getPlayer().getId(),op,-1,grade);
			cm.getPlayer().setPoints(cm.getPlayer().getPoints() + 10);
			cm.sendOk("#d已為您販售潛能,請查看#k");
			status = -1;
		}else{
			cm.dispose();
		}
	}else if(status == 4){
		this. k = selection;
		var msg = "";
		msg += icon5 + " #b潛能應用#k\r\n";
		msg += icon3 + " #d選取裝備 :#k #r#t" +  cm.getInventory(1).getItem(k).getItemId() + "##k\r\n";
		msg += icon3 + " #d應用效果 :#k #r" +  GameConstants.resolvePotentialID2(MapleItemInformationProvider.getInstance().getReqLevel(cm.getInventory(1).getItem(k).getItemId())/10,op) + "#k\r\n";
		msg += icon3 + " #b您確定要應用嗎?#k\r\n";
		cm.sendYesNo(msg);
	}else if(status == 5){
		cm.getInventory(1).getItem(k).setPotential5(op);
		cm.getPlayer().forceReAddItem_NoUpdate(cm.getInventory(1).getItem(k), MapleInventoryType.EQUIP);
		cm.getPlayer().getClient().sendPacket(CWvsContext.InventoryPacket.updateSpecialItemUse(cm.getInventory(1).getItem(k), MapleInventoryType.EQUIP.getType(), cm.getInventory(1).getItem(k).getPosition(), true, cm.getPlayer()));
		cm.setPCount(cm.getPlayer().getId(),op,-1,grade);
		cm.sendOk("#d已為您成功應用潛能!請查看#k");
		status = -1;
	}
		
}

function tom(Oid){
	var de = "";
        for(var a = 1 ; a < 21 ; a++){
            de += "#d裝備等級等級#k#r" + (a*10) + "以上時#k #b[素質]" + GameConstants.resolvePotentialID2(a,Oid) + "#k\r\n";
        }
    return de;
}