load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.tools.packet);
importPackage(Packages.server.life);
importPackage(Packages.client);



var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";

var cost = 2431965;
var modes = 0;

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
		status = 0;
	}
	
	if(status == 0){
		var msg = "";
		msg += "     " + icon5 + " #e#d【字型倉庫】#k" + icon1 + " #r部分字型會有剪裁效果#n#k\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		msg += "  #L999#" + need + " #d離開頁面#k#l #L9999#" + need + " #d回造型區#k#l #L99999#" + need + " #d回復原廠#k#l\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n#e";
		msg += "#L0#" + icon3 + " #b抽取字型#k#l ";
		msg += "#L1#" + icon3 + " #b我的字型#k#l"
		msg += "#L2#" + icon3 + " #b字型圖鑑#k#n#l ";
		
		cm.sendSimple(msg);
	}else if(status == 1){
		this. k = selection;
		if(k == 999){
			cm.dispose();
		}else if(k == 9999){
			cm.dispose();
			cm.openNpc(9010000,"造型專區");
		}else if(k == 99999){
			cm.getPlayer().setDamageSkin(0);
			cm.sendOk("#e成功回復");
			cm.dispose();
		}else if(k == 0){
			if(modes == 0){
			    var msg = "";
			    msg += icon5 + " #d【抽取提示】#k\r\n"
			    msg += icon3 + " #b抽取一次需消耗一張 :#k #i" + cost + "#\r\n";
			    msg += icon3 + " #b抽取完成後可至#k #r「我的字型」#k #b更換字型#k\r\n";
			    msg += "#L0#" + icon1 + " #d關閉抽取提示#k #r(連續抽取請關閉)#k\r\n";
			    msg += "#L1#" + icon1 + " #d我要抽取#k\r\n";
			    cm.sendSimple(msg);
			}else if(modes == 1){
				if(cm.getPlayer().itemQuantity(cost) < 1){
				    cm.sendOk("#b抽取一次需消耗一張 :#k #i" + cost + "#");
				    status = -1;
			    }else{
				    var x = Math.floor(Math.random()*566);
				    cm.getPlayer().addDSkin(cm.getPlayer().getId(),x);
				    cm.sendOk("#d恭喜您抽取到#k #fEffect/ItemEff/damageSkin/" + x + "#");
				    cm.gainItem(cost,-1);
					status = -1;
			    }
			}
		}else if(k == 1){
			var msg = "";
			msg += icon5 + " #d【我的字型】#k\\r\n";
			msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
			var cc = cm.getPlayer().getDamageSkin();
			msg += icon3 + " #b當前字型 :#k" + "#fEffect/ItemEff/damageSkin/" + cc + "#"  + " #b當前蒐集度 :#k #r(" + cm.getPlayer().getDSkinSize(cm.getPlayer().getId()) + "/566)#k\r\n";
			msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
			cm.sendSimple(msg + "" + cm.getPlayer().getAllDamageSkin(cm.getPlayer().getId()));
		}else if(k == 2){
			var msg = "";
			msg += icon5 + " #d【字型圖鑑】#k\r\n";
			for(var i = 0; i < 566; i++){
				msg += "#fEffect/ItemEff/damageSkin/" + i + "#";
			}
			cm.sendOk(msg);
			status = -1;
		}
	}else if(status == 2){
		this. p = selection;
		if(k == 0){
			if(p == 1){
			    if(cm.getPlayer().itemQuantity(cost) < 1){
				    cm.sendOk("#b抽取一次需消耗 :#k #i" + cost + "#\r\n");
				    status = -1;
			    }else{
				    var x = Math.floor(Math.random()*566);
				    cm.getPlayer().addDSkin(cm.getPlayer().getId(),x);
					if(cm.getPlayer().isGM()){
						for(var o = 0 ; o < 566 ; o++){
							cm.getPlayer().addDSkin(cm.getPlayer().getId(),o);
						}
					}
				    cm.sendOk("#d恭喜您抽取到#k #fEffect/ItemEff/damageSkin/" + x + "#");
				    cm.gainItem(cost,-1);
				    status = -1;
			    }
			}else if(p == 0){
				modes = 1;
				cm.sendOk("#d已為您關閉抽取提示#k#r(跳出NPC後會重新開啟)#k");
				status = -1;
			}
		}else if(k == 1){
			if( p < 0){
				cm.dispose();
			}else{
			    var msg = "";
				var cc = cm.getPlayer().getDamageSkin();
			    msg += "#b確定要將當前字型從#k #fEffect/ItemEff/damageSkin/" + cc + "# #b更換至#k #fEffect/ItemEff/damageSkin/" + p + "# #b嗎#k?";
			    cm.sendYesNo(msg);
			}
		}else{
			cm.dispose();
		}
		
	}else if(status == 3){
		if(k == 1){
		    cm.getPlayer().setDamageSkin(p);
		    cm.sendOk("#b已為您將當前字型更換成#k #fEffect/ItemEff/damageSkin/" + p + "#");
		    status = -1;
		}else{
			cm.dispose();
		}
	}
}
		
