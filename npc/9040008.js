var icon1 = "#fUI/UIWindow/Quest/icon0#"; //黃驚嘆
var icon5 = "#fItem/Etc/0422/04220176/info/iconRaw#"; //new
var icon2 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //灰驚嘆
var icon3 = "#fItem/Consume/0202/02020002/info/iconRaw#"; //藍圈
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時

;;!//錯誤
var status = -1;
var sel = 0;

function action(mode, type, selection) {
	if (mode != 1) {
    		cm.dispose();
	} else {
		status++;
		if (cm.getPlayer().getBattler(0) == null) {
			cm.sendOk("#d請準備一隻神奇寶貝才能進入競技場!#k");
			cm.dispose();	
			return;
		}
		if (cm.getPlayer().getMapId() == 193000000) {
			if (status == 0) {
				cm.sendSimple(icon5 + " #d想要去競技場嗎? 在那裏可以跟許多神奇寶貝對抗!#k\r\n\r\n#b#L0# #v03994115##l #L1# #v03994116##l #L2# #v03994117##l #L3# #v03994118##l");
			} else if (status == 1) {
				sel = selection;
				var num = 0;
				var averageLevel = 0;
				var battlers = cm.getPlayer().getBattlers();
				for (var i = 0; i < battlers.length; i++) {
					if (battlers[i] != null) {
						if (battlers[i].getLevel() > averageLevel) {
							averageLevel = battlers[i].getLevel();
						}
						num++;
					}
				}	
				averageLevel |= 0;
				var index = "";
				if(sel == 0){
					index = "簡易";
				}else if(sel == 1){
					index = "普通";
				}else if(sel == 2){
					index = "困難";
				}else if(sel == 3){
					index = "地獄";
				}
				var selStr =  icon1 + " #e#r" + "【" + index + " 競技場】#n#k\r\n" + icon3 + " #d當前您擁有 " + num + " 隻最高等級 : #k#r" + averageLevel + "#k #d的神奇寶貝#k\r\n\r\n" + icon5 + " #e#b以下是此模式的進行規範#k#n:\r\n" + icon3 + " #d擁有的神奇寶貝數量將會是其他道館訓練家所派出的數量\r\n" + icon3 + " 不能對道管訓練家的神奇寶貝使用寶貝球或於戰鬥中逃跑\r\n" + icon3 + " 您至少要擁有#k #r3隻#k #d以上的神奇寶貝\r\n";
				if (sel == 0) {
					cm.sendYesNo(selStr + icon3 +" #d您的神奇寶貝之中最高等級的需要超過#k #r10等#k\r\n" + icon3 + " #d您所遇到的神奇寶貝將不超過您最高等級的神奇寶貝\r\n" + icon3 + " 超過#k #r150等#k #d的神奇寶貝,將會在此次戰鬥中以150等出場\r\n" + icon3 + " 在此模式中只會獲得經驗值\r\n\r\n" + icon1 + " #r確定要進入競技場嗎?#k"); 
				} else if (sel == 1) {
					cm.sendYesNo(selStr + icon3 +" #d您的神奇寶貝之中最高等級的需要超過#k #r10等#k\r\n" + icon3 + " #d您所遇到的神奇寶貝將會是最高等級神奇寶貝的#k#r+-5#k# d等\r\n" + icon3 + " 超過#k #r150等#k #d的神奇寶貝,將會在此次戰鬥中以150等出場\r\n" + icon3 + " 在此模式中除了或獲得經驗值,若您的表現非常好可能還會獲得額外道具\r\n\r\n" + icon1 + " #r確定要進入競技場嗎?#k"); 
				} else if (sel == 2) {
					cm.sendYesNo(selStr + icon3 +" #d您的神奇寶貝之中最高等級的需要超過#k #r10等#k\r\n" + icon3 + " #d您所遇到的神奇寶貝將會比您最高等級神奇寶貝高出 #r0~10#k #d等\r\n"  + icon3 + " 超過#k #r150等#k #d的神奇寶貝,將會在此次戰鬥中以150等出場\r\n" + icon3 + " 在此模式中除了或獲得經驗值,若您的表現非常好可能還會獲得額外道具\r\n\r\n" + icon1 + " #r確定要進入競技場嗎?#k"); 
				} else if (sel == 3) {
					cm.sendYesNo(selStr + icon3 +" #d您的神奇寶貝之中最高等級的需要超過#k #r100等#k\r\n" + icon3 + " #d您所遇到的神奇寶貝只有BOSS的等級可能會比您最高等級神奇寶貝低\r\n" + icon3 + " 在此模式中除了或獲得經驗值,若您的表現非常好可能還會獲得額外道具\r\n\r\n" + icon1 + " #r確定要進入競技場嗎?#k"); 
				} else {
					cm.dispose();
				}
			} else if (status == 2) {
				cm.warp(925020010 + sel);
				cm.dispose();
			}
		} else if (cm.getPlayer().getMapId() == 925020010 || cm.getPlayer().getMapId() == 925020011 || cm.getPlayer().getMapId() == 925020012 || cm.getPlayer().getMapId() == 925020013) { //easy
			if (status == 0) {
				var num = 0;
				var averageLevel = 0;
				var battlers = cm.getPlayer().getBattlers();
				for (var i = 0; i < battlers.length; i++) {
					if (battlers[i] != null) {
						if (battlers[i].getLevel() > averageLevel) {
							averageLevel = battlers[i].getLevel();
						}
						num++;
					}
				}	
				averageLevel |= 0;
				var index = "";
				if(sel == 0){
					index = "簡易";
				}else if(sel == 1){
					index = "普通";
				}else if(sel == 2){
					index = "困難";
				}else if(sel == 3){
					index = "地獄";
				}
				var selStr =  icon1 + " #e#r" + "【" + index + " 競技場】#n#k\r\n" + icon3 + " #d當前您擁有 " + num + " 隻最高等級 : #k#r" + averageLevel + "#k #d的神奇寶貝#k\r\n\r\n" + icon5 + " #e#b以下是此模式的進行規範#k#n:\r\n" + icon3 + " #d擁有的神奇寶貝數量將會是其他道館訓練家所派出的數量\r\n" + icon3 + " 不能對道管訓練家的神奇寶貝使用寶貝球或於戰鬥中逃跑\r\n" + icon3 + " 您至少要擁有#k #r3隻#k #d以上的神奇寶貝\r\n";
				if (sel == 0) {
					cm.sendYesNo(selStr + icon3 +" #d您的神奇寶貝之中最高等級的需要超過#k #r10等#k\r\n" + icon3 + " #d您所遇到的神奇寶貝將不超過您最高等級的神奇寶貝\r\n" + icon3 + " 超過#k #r150等#k #d的神奇寶貝,將會在此次戰鬥中以150等出場\r\n" + icon3 + " 在此模式中只會獲得經驗值\r\n\r\n" + icon1 + " #r確定要進入競技場嗎?#k"); 
				} else if (sel == 1) {
					cm.sendYesNo(selStr + icon3 +" #d您的神奇寶貝之中最高等級的需要超過#k #r10等#k\r\n" + icon3 + " #d您所遇到的神奇寶貝將會是最高等級神奇寶貝的#k#r+-5#k# d等\r\n" + icon3 + " 超過#k #r150等#k #d的神奇寶貝,將會在此次戰鬥中以150等出場\r\n" + icon3 + " 在此模式中除了或獲得經驗值,若您的表現非常好可能還會獲得額外道具\r\n\r\n" + icon1 + " #r確定要進入競技場嗎?#k"); 
				} else if (sel == 2) {
					cm.sendYesNo(selStr + icon3 +" #d您的神奇寶貝之中最高等級的需要超過#k #r10等#k\r\n" + icon3 + " #d您所遇到的神奇寶貝將會比您最高等級神奇寶貝高出 #r0~10#k #d等\r\n"  + icon3 + " 超過#k #r150等#k #d的神奇寶貝,將會在此次戰鬥中以150等出場\r\n" + icon3 + " 在此模式中除了或獲得經驗值,若您的表現非常好可能還會獲得額外道具\r\n\r\n" + icon1 + " #r確定要進入競技場嗎?#k"); 
				} else if (sel == 3) {
					cm.sendYesNo(selStr + icon3 +" #d您的神奇寶貝之中最高等級的需要超過#k #r100等#k\r\n" + icon3 + " #d您所遇到的神奇寶貝只有BOSS的等級可能會比您最高等級神奇寶貝低\r\n" + icon3 + " 在此模式中除了或獲得經驗值,若您的表現非常好可能還會獲得額外道具\r\n\r\n" + icon1 + " #r確定要進入競技場嗎?#k"); 
				} else {
					cm.dispose();
				}
			} else {
				if (cm.getPlayer().getMapId() == 925020010) {
					var npcTeam = cm.makeTeam(-10, 0, 10, 150);
					if (npcTeam == null) {
						cm.sendOk("#d您的神奇寶貝數量可能不足#k #r3隻#k #d說不定在野外能遇到野生的神奇寶貝喔!!!#k");
					} else {
						cm.preparePokemonBattle(npcTeam, 150);
						
					}
				} else if (cm.getPlayer().getMapId() == 925020011) {
					var npcTeam = cm.makeTeam(-5, 5, 10, 150);
					if (npcTeam == null) {
						cm.sendOk("#d您的神奇寶貝數量可能不足#k #r3隻#k #d說不定在野外能遇到野生的神奇寶貝喔!!!#k");
					} else {
						cm.preparePokemonBattle(npcTeam, 150);
						
					}
				} else if (cm.getPlayer().getMapId() == 925020012) {
					var npcTeam = cm.makeTeam(0, 10, 10, 150);
					if (!cm.canHold()) {
						cm.sendOk("#d請先把裝備或道具欄留下一些空位!#k");
					} else if (npcTeam == null) {
						cm.sendOk("#d您的神奇寶貝數量可能不足#k #r3隻#k #d說不定在野外能遇到野生的神奇寶貝喔!!!#k");
					} else {
						cm.preparePokemonBattle(npcTeam, 150);
						
					}
				} else if (cm.getPlayer().getMapId() == 925020013) {
					var npcTeam = cm.makeTeam(0, 0, 100, 200);
					if (!cm.canHold()) {
						cm.sendOk("#d請先把裝備或道具欄留下一些空位!#k");
					} else if (npcTeam == null) {
						cm.sendOk("#d您的神奇寶貝數量可能不足#k #r3隻#k #d說不定在野外能遇到野生的神奇寶貝喔!!!#k");
					} else {
						cm.preparePokemonBattle(npcTeam, 150);
						
					}
				}
				cm.dispose();
			}
		} else {
			cm.dispose();
		}
	}
}