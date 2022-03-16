
load('nashorn:mozilla_compat.js');
importPackage(Packages.server);
importPackage(Packages.client.inventory);
importPackage(Packages.tools.packet);
importPackage(Packages.constants);

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		cm.dispose();
	}
	
    if (status == 0) {
		cm.sendSimple(cm.getAllPInfo());
	}else if(status == 1){
		this. op = selection;
		var forb = "";
		var tam = "";
		var tocheck = MapleItemInformationProvider.getInstance().getPotentialInfo(op).get(1);
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
		if(op!=99999){
		  cm.sendYesNo("#r以下為編號#r" + op + "#k潛能的詳細素質 -- 您確定要修改嗎?\r\n=================潛能訊息=================\r\n#g裝備條件 : #k#d" + forb + "#k\r\n#g等級限制 : #k#d" + tocheck.reqLevel + "等#k\r\n#g潛能等級 : #k#d" + tam + "#k\r\n#g目前機率 : #k#d" + cm.getPotentialChance(op)/100 + "%#k\r\n=================素質詳細=================\r\n" + tom(op));
		}else{
			cm.sendSimple(cm.possiblePotential(1,cm.getPlayer().getClient()));
			cm.dispose();
		}
    }else if(status == 2){
		cm.sendGetNumber("您想要設定編號#r" + op + "#k 效果: #b" + GameConstants.resolvePotentialID2(20,op) +"#k的出現機率為幾%?",0,0,100);		
	}else if(status == 3){
		this. os = selection;
		cm.setPotentialChance(os*100,op);
		cm.sendOk("已為您調整編號#r" + op + "#k 效果 : #b" + GameConstants.resolvePotentialID2(20,op) +"#k的出現機率至 -- #r" + os + "%#k");
		cm.dispose();
	}
		
}

function tom(Oid){
	var de = "";
        for(var a = 1 ; a < 21 ; a++){
            de += "裝備等級等級#r" + (a*10) + "以上時#k #b[素質]" + GameConstants.resolvePotentialID2(a,Oid) + "#k\r\n";
        }
    return de;
}