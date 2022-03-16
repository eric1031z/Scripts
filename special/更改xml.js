load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.server);
importPackage(Packages.sever.xmleditor);

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
		cm.sendGetNumber("#d請輸入欲更改素質的道具ID#k",0,0,99999999);
	}else if(status == 1){
		this. s = selection;
		if(!MapleItemInformationProvider.getInstance().itemExists(s)){
			cm.sendOk("#d您輸入的物品不存在於WZ#k");
		}else{
		    cm.sendSimple(CharacterEditor.load(s));
		}	
    }else if(status == 2){
		this. s1 = selection;
		cm.sendGetNumber("#d請輸入欲更改的數值#k",0,0,32766);
	}else if(status == 3){
		this. s2 = selection;
		cm.sendYesNo("#d確定更改數值為 :#k #r" + s2 + "#k #d?#k");
	}else if(status == 4){
		CharacterEditor.set(s,s1,s2);
		cm.sendOk("#d已更改完成#k #d遊戲端口重啟後請運行#k#rDUMP ITEM程序#k");
		cm.dispose();
	}
}
			