function enter(pi) {
    var eim = pi.getDisconnected("Dragonica");
    if (eim != null && pi.getPlayer().getParty() != null) { //only skip if not null
        eim.registerPlayer(pi.getPlayer());
        return true;
    }
    if (pi.getPlayer().getParty() == null || !pi.isLeader()) {
        pi.playerMessage(5, "�гz�L�����ӧ�ڹ�ܡC");
        return false;
    }
    var party = pi.getPlayer().getParty().getMembers();
    var next = true;
    var size = 0;
    var it = party.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        var ccPlayer = pi.getPlayer().getMap().getCharacterById(cPlayer.getId());
        if (ccPlayer == null || ccPlayer.getLevel() < 120 /*|| (ccPlayer.getSkillLevel(ccPlayer.getStat().getSkillByJob(1026, ccPlayer.getJob())) <= 0)*/) {
            next = false;
            break;
        } else if (ccPlayer.isGM()) {
            size += 4;
        } else {
            size++;
        }
    }
    if (next && size >= 2) {
        var em = pi.getEventManager("Dragonica");
        if (em == null) {
            pi.playerMessage(5, "�еy�ԦA�աC");
        } else {
            var prop = em.getProperty("state");
            if (prop == null || prop.equals("0")) {
                em.startInstance(pi.getParty(), pi.getMap(), 200);
            } else {
                pi.playerMessage(5, "��L����b�D�Ԥ��A�еy�ԦA�աC");
            }
        }
    } else {
        pi.playerMessage(5, "����120�ŵL�k�D�ԡA����H�ƥ����j��2�H�C");
        return false;
    }
    return true;
}