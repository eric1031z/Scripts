var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";



function start(){
	status = -1;
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
		var msg = "";
		msg += "                    " + icon5 + " #b#e暖光谷介紹#n#k\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		msg += "#L0#" + icon3 + " #e指令介紹#n\r\n";
		//msg += "#L1#" + icon3 + " #d系統介紹#k\r\n";
		//msg += "#L2#" + icon3 + " #d資源介紹#k\r\n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		if(s == 0){
			var msg = "#e";
			msg += icon3 + " #bCGM - #k#r密GM\r\n";
			msg += icon3 + " #bSTR/DEX/LUK/INT <數量> - #k#r快速點能力\r\n";
	        msg += icon3 + " #bea - #k#r解卡\r\n";
			msg += icon3 + " #bmob - #k#r查看怪物資訊\r\n";
			msg += icon3 + " #b掉寶 - #k#r查看掉寶資訊\r\n";
			msg += icon3 + " #b倉庫 <欄位><格數><數量> - #k#r將物品放進倉庫,欄位1(裝備欄)類推\r\n";
			msg += icon3 + " #b轉移 <格數1><格數2> - #k#r將1,2現金物品素質交換(非疊加)\r\n";
			msg += icon3 + " #b附魔 <初/中/高> <格數> - #k#r附魔現金道具\r\n";
			//msg += icon3 + " #b鍊化 <格數> - #k#r鑲嵌現金道具\r\n";
			msg += icon3 + " #b潛能 <1/2/3><格數> - #k#r快速洗潛能(1=傳說/2=奇幻/3=超奇)\r\n";
			msg += icon3 + " #bfm - #k#r回自由\r\n";
			msg += icon3 + " #b轉蛋 - #k#r去轉蛋屋\r\n";
			//msg += icon3 + " #b吸 - #k#r全圖吸怪\r\n";
			msg += icon3 + " #b修復 - #k#r修復200等卡經驗\r\n";
			msg += icon3 + " #b取下副武器 - #k#r取下副武器\r\n";
			msg += icon3 + " #b取下雙鍊 - #k#r取下雙鍊\r\n";
			msg += icon3 + " #b回 - #k#r回傳王圖\r\n";
			msg += icon3 + " #b清除道具 <欄位><起始><終止> - #k#r快速清除道具\r\n";
			msg += icon3 + " #b清除重新購買 - #k#r清除重新購買清單\r\n";
			msg += icon3 + " #b脫身上騎寵道具 - #k#r騎寵道具移除\r\n";
			msg += icon3 + " #b穿副武器 - #k#r影武者穿透明雙刀\r\n";
			/*msg += icon3 + " #bGO - #k#r神奇寶貝指令(攻擊)\r\n";
			msg += icon3 + " #b逃跑 - #k#r神奇寶貝指令(逃跑)\r\n";
			msg += icon3 + " #b資訊 - #k#r神奇寶貝指令(查看資訊)\r\n";
			msg += icon3 + " #b丟球 <寶貝球/大師球><超級球> - #k#r神奇寶貝指令(丟精靈球)\r\n";
			msg += icon3 + " #b挑戰 <玩家ID/接受/拒絕> - #k#r神奇寶貝指令(玩家對戰)\r\n";*/
			msg += icon3 + " #b活動 - #k#r查看伺服器活動\r\n";
			msg += icon3 + " #bSAVE - #k#r儲存資料\r\n";
			cm.sendOk(msg);
			cm.dispose();
		}else if(s == 2){
			var msg = "";
			msg += "#L0#" + icon3 + " #bGASH獲得方式#k\r\n";
			msg += "#L1#" + icon3 + " #b楓點獲得方式#k\r\n";
			msg += "#L2#" + icon3 + " #b方塊獲得方式#k\r\n";
			msg += "#L3#" + icon3 + " #b紅利獲得方式#k\r\n";
			msg += "#L4#" + icon3 + " #b圖吸獲得方式#k\r\n";
			msg += "#L5#" + icon3 + " #b怪吸獲得方式#k\r\n";
			cm.sendSimple(msg);
		}else if(s == 1){
			var msg = "";
			msg += "#L0#" + icon3 + " #b世界野王#k\r\n";
			msg += "#L1#" + icon3 + " #b全圖蒐集#k\r\n";
			msg += "#L2#" + icon3 + " #b租借地圖#k\r\n";
			msg += "#L3#" + icon3 + " #b神奇寶貝#k\r\n";
			msg += "#L4#" + icon3 + " #b組隊系統#k\r\n";
			msg += "#L5#" + icon3 + " #b附魔系統#k\r\n";
			cm.sendSimple(msg);
		}
	}else if(status == 2){
		this. p = selection;
		if(s == 2){
			if(p == 0){
				var msg = "";
				msg += icon3 + " #d開設商店#k #r(每一小時20GASH)#k #d請務必記得維修前將商店關閉\r\n"
				msg += icon3 + " #d組隊任務#k #r依照每一個組隊任務給的點數皆不同\r\n";
				msg += icon3 + " #d掛機#k #r(每一小時30-40GASH)#k\r\n";
				msg += icon3 + " #d推廣與推文#k\r\n";
				msg += icon3 + " #d贊助比例 1:5獲得#k\r\n";
				msg += icon3 + " #d遊戲內隨GM之活動/人數獎勵/特殊獎勵等等#k\r\n";
				cm.sendOk(msg);
				status = -1;
			}else if(p == 1){
				var msg = "";
				msg += icon3 + " #d打怪掉點#k #r(每日3500點/10轉生以上5000點)\r\n";
				msg += icon3 + " #d遊戲內獎勵#k #r(如等級獎勵等等..)#k\r\n";
				msg += icon3 + " #d組隊任務#k #r依照每一個組隊任務給的點數皆不同\r\n";
				msg += icon3 + " #d遊戲內隨GM之活動/人數獎勵/特殊獎勵等等#k\r\n";
				cm.sendOk(msg);
				status = -1;
			}else if(p == 2){
				var msg = "";
				msg += icon3 + " #d遊戲內兌換#k #r(奇幻方塊如BSPQ兌換/黃金楓業兌換等等#k)\r\n";
				msg += icon3 + " #d世界野王參與獎勵與最高傷害獎勵\r\n";
				msg += icon3 + " #d全服蒐集活動特別獎勵或全服獎勵\r\n";
				msg += icon3 + " #d遊戲內隨GM之活動/人數獎勵/特殊獎勵等等#k\r\n";
				cm.sendOk(msg);
				status = -1;
			}else if(p == 3){
				var msg = "";
				msg += icon3 + " #d贊助比例 1:1獲得\r\n";
				msg += icon3 + " #d遊戲內隨GM之活動/人數獎勵/特殊獎勵等等#k\r\n";
				cm.sendOk(msg);
				status = -1;
			}else if(p == 4){
				var msg = "";
				msg += icon3 + " #d每日任務完成後獲得1日\r\n";
				msg += icon3 + " #d超級轉蛋內獲得永久#k\r\n";
				cm.sendOk(msg);
				status = -1;
			}else if(p == 5){
				var msg = "";
				msg += icon3 + " #d以兌換方式獲得#k #r(如黃金楓葉等等)#k\r\n";
				msg += icon3 + " #d普通轉蛋內獲得#k\r\n";
				cm.sendOk(msg);
				status = -1;
			}
		}else if(s == 1){
			if(p == 0){
				var msg = "";
				msg += icon3 + " #d世界王每2小時隨機出現於隨機村莊地圖#k\r\n";
				msg += icon3 + " #d可於「系統專區」內的「世界野王」查看詳細資訊#k\r\n";
				msg += icon3 + " #d參與世界野王討伐可獲得如傳說方塊等好禮#k\r\n";
				cm.sendOk(msg);
				status = -1;
			}else if(p == 2){
				var msg = "";
				msg += icon3 + " #d租借地圖可於普通練功地圖使用#k\r\n";
				msg += icon3 + " #d租借地圖僅供單人使用#k\r\n";
				msg += icon3 + " #d進入租借地圖前將會將所有BUFF移除#k\r\n";
				msg += icon3 + " #d租借地圖內可以租借額外BUFF技能#k\r\n";
				cm.sendOk(msg);
				status = -1;
			}else if(p == 1){
				var msg = "";
				msg += icon3 + " #d全圖蒐集每不同階段皆可獲得不同好禮#k\r\n";
				msg += icon3 + " #d全圖蒐集有設定活動時間,活動時間過方能領取獎勵#k\r\n";
				msg += icon3 + " #d全圖蒐集獎勵僅發放給曾貢獻(1個也可)的玩家#k\r\n";
				msg += icon3 + " #d活動內貢獻最多者可獲得額外好禮#k\r\n";
				cm.sendOk(msg);
				status = -1;
			}else if(p == 3){
				var msg = "";
				msg += icon3 + " #d神奇寶貝狩獵限定於19頻#k\r\n";
				msg += icon3 + " #d玩家於隨機地圖上將會遇見隨機等級野生神奇寶貝#k\r\n";
				msg += icon3 + " #d神奇寶貝專用指令可於指令區察看#k\r\n";
				msg += icon3 + " #d可與不同玩家於城市地圖進行戰鬥#k\r\n";
				msg += icon3 + " #d神奇寶貝有50多種屬性/特性/多種道具與進化型態#k\r\n";
				msg += icon3 + " #d可於「系統專區」中的「神奇寶貝」和「道館訓練」查看#k\r\n";
				cm.sendOk(msg);
				status = -1;
			}else if(p == 4){
				var msg = "";
				msg += icon3 + " #d組隊可獲得相對應的專屬道具#k\r\n";
				msg += icon3 + " #d專屬道具可以使用於合成道具與兌換上#k\r\n";
				cm.sendOk(msg);
				status = -1;
			}else if(p == 5){
				var msg = "";
				msg += icon3 + " #d附魔分為普通/超級兩種選擇#k\r\n";
				msg += icon3 + " #d共分成三種不同部位的附魔#k\r\n";
				msg += icon3 + " #d道具附魔(不管是普通/超級)皆以10次為限#k\r\n";
				msg += icon3 + " #d普通附魔提供全屬性AD/AP各2點#k\r\n";
				msg += icon3 + " #d超級附魔提供全屬性AD/AP各3點#k\r\n";
				msg += icon3 + " #d達10階附魔後欲再提升為鑲嵌系統,一樣分為普通/超級#k\r\n";
				msg += icon3 + " #d普通鑲嵌提供全屬性AD/AP各4點#k\r\n";
				msg += icon3 + " #d超級箱前提供全屬性AD/AP各5點#k\r\n";
				msg += icon3 + " #d道具鑲嵌(不管是普通/超級)皆以5次為限#k\r\n";
				cm.sendOk(msg);
				status = -1;
			}
		}
    }
}