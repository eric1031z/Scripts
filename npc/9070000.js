load('nashorn:mozilla_compat.js');
importPackage(java.lang);
importPackage(Packages.constants);
importPackage(Packages.tools.packet);
importPackage(Packages.server);



var status = -1;

function action(mode, type, selection) {
	//if (cm.getPlayer().isGM()) {

		
		cm.sendPVPWindow();
		//cm.sendSimple(MapleItemInformationProvider.getInstance().getItemEffect(2022179).getConsume());
	//MapleItemInformationProvider.getInstance().getItemEffectEX(2900022).applyTo(cm.getPlayer());
	//} else {
	//	cm.sendNext("Patience...");
	//}
	cm.dispose();
}