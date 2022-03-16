load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.handling.channel.handler);
importPackage(Packages.client.inventory);
importPackage(Packages.server);


var status = -1;
function start() {
	action(1,0,0);
}

var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/8#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var cash = "#fEffect/ItemEff/004/5#";

var log = "#fEffect/ItemEff/004/7#";
var con = "#fEffect/ItemEff/004/9#";


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
		if (status == 0) {
		　　var msg = "";
		    msg += "              " + log + "\r\n#e";
			msg += "#L8#" + icon3 + " 超級商城【0】" + con + " #r販售各式雜物/廣播特效#k#l\r\n"; //披風/鞋子
			msg += "#L0#" + icon3 + " 超級商城【1】" + con + " #r販售披風/鞋子#k#l\r\n"; //披風/鞋子
			msg += "#L1#" + icon3 + " 超級商城【2】" + con + " #r販售帽子#k#l\r\n"; //披風/鞋子
			msg += "#L2#" + icon3 + " 超級商城【3】" + con + " #r販售上衣/褲裙#k#l\r\n"; //披風/鞋子
			msg += "#L3#" + icon3 + " 超級商城【4】" + con + " #r販售名牌/聊天/特效戒指#k#l\r\n"; //披風/鞋子
            msg += "#L4#" + icon3 + " 超級商城【5】" + con + " #r販售套服#k#l\r\n"; //披風/鞋子
			msg += "#L5#" + icon3 + " 超級商城【6】" + con + " #r販售臉飾/眼飾#k#l\r\n"; //披風/鞋子
			msg += "#L6#" + icon3 + " 超級商城【7】" + con + " #r販售點武/手套#k#l\r\n"; //披風/鞋子
			msg += "#L7#" + icon3 + " 超級商城【8】" + con + " #r販售寵物/寵物裝備#k#l\r\n"; //披風/鞋子
			
            cm.getPlayer().setCSType(0);
			cm.sendSimple(msg);
			/*if(cm.getPlayer().isGM()){
				var ii = MapleItemInformationProvider.getInstance();
			    var a = 37;
			    var mx = "";
			    for(var i = 5010000; i < 5011010 ; i++){
				//var eq = ii.getEquipById(i);
				    if(ii.itemExists(i) && a <= 1000){
					    if(ii.isCash(i)  /*&& eq.getStr() == 0 && eq.getDex() == 0 && eq.getLuk() == 0 && eq.getInt() == 0 && eq.getWatk() == 0 && eq.getMatk() == 0){
					        cm.newCash(i,50,2,1,8,10100000+a);
					        a++;
						
				        }
				    }
			    }
			    CashItemFactory.getInstance().initialize(true);
			    cm.sendOk(a);
			    cm.dispose();
			}*/
			
		}else if (status == 1) {
			for(var i=0;i<97;i++){
			 for(var j=1;j<=5;j++){
		        if(cm.getInventory(j).getItem(i)!=null && cm.getInventory(j).getItem(i).getUniqueId()<=0 && cm.isCash(cm.getInventory(j).getItem(i).getItemId())){
                     jj = MapleInventoryIdentifier.getInstance();
                     cm.getInventory(j).getItem(i).setUniqueId(jj);
                  }
		        }
		    }
			cm.dispose();
			InterServerHandler.EnterCS(cm.getPlayer().getClient(), cm.getPlayer(), false, selection);
		} 
	}
	
}