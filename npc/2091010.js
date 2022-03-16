load('nashorn:mozilla_compat.js');
importPackage(Packages.handling.channel);
importPackage(Packages.client.inventory);
importPackage(Packages.tools.packet);


function start() {
	//cm.getPlayer().getClient().sendPacket(CWvsContext.pamSongUI());
	cm.sendOk("!!!!!");
	//cm.sendSimple(cm.getCertainDojoRecord(cm.getMyTimeRecord()));
	cm.dispose();
}