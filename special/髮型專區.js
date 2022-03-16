load('nashorn:mozilla_compat.js');
importPackage(Packages.client);
importPackage(Packages.tools);

/*var h1 = [30000,30010,30020,30030,30040,30050,30060,30070,30080,30090,30100,30110,30120,30130,30140,30150,30160,30170,30180,30190,30200,30210,30220,30230,30240,30250,30260,30270,30280,30290,30300,30310,30320,30330,30340,30350,30360,30370,30400,30410,30420,30440,30450,30460,30470,30480,30490,30510,30520,30530,30540,30550,30560,30570,30580,30590,30600,30610,30620,30630,30640,30650,30660,30670,30680,30700,30710,30720,30730,30740,30750,30760,30770,30790,30800,30810,30820,30830,30840,30850,30860,30870,30880,30890,30900,30910,30920,30930,30940,30950,30990,31000,31010,31020,31030,31040,31050,31060,31070,31080,31090,31100,31110,31120,31130,31140,31150,31160,31170,31180,31190,31200,31210,31220,31230,31240,31250,31260,31270,31280,31290,31300,31310,31320,31330,31340,31350,31360];
var h2 = [31370,31400,31410,31420,31440,31450,31460,31470,31480,31490,31510,31520,31530,31540,31550,31560,31570,31580,31590,31600,31610,31620,31630,31640,31650,31660,31670,31680,31690,31700,31710,31720,31730,31740,31750,31760,31770,31780,31790,31800,31810,31820,31830,31840,31850,31860,31870,31880,31890,31900,31910,31920,31930,31940,31950,31990,32020,32120,32130,32140,32150,32160,32430,32440,32450,32460,32470,32480,32490,32500,32560,32580,32640,32650,32660,32720,32730,32740,32750,32760,33000,33030,33060,33070,33080,33090,33100,33110,33120,33130,33140,33150,33160,33170,33180,33190,33200,33210,33220,33230,33240,33250,33260,33270,33280,33290,33300,33310,33320,33330,33340,33350,33360,33370,33380,33390,33400,33410,33420,33430,33440,33450,33460,33470,33480,33490,33500,33510];
var h3 = [33520,33530,33540,33550,33580,33590,33600,33610,33620,33630,33640,33650,33660,33670,33680,33690,33700,33710,33720,33730,33740,33750,33760,33770,33780,33790,33800,33810,33820,33830,33930,33940,33950,33960,33970,33980,33990,34000,34010,34040,34070,34080,34090,34100,34110,34120,34130,34140,34150,34160,34170,34180,34190,34200,34210,34220,34230,34240,34250,34260,34270,34280,34290,34300,34310,34320,34330,34340,34350,34360,34370,34380,34390,34400,34410,34420,34430,34440,34450,34460,34470,34480,34490,34510,34540,34560,34590,34600,34610,34620,34630,34640,34650,34660,34670,34680,34690,34700,34710,34720,34730,34740,34750,34760,34770,34780,34790,34800,34810,34820,34830,34840,34850,34860,34870,34880,34890,34900,34910,34940,34950,34960,34970,34980,34990,35000,35010,35020];
var h4 = [35030,35040,35050,35060,35070,35080,35090,35100,35150,35160,35170,35180,35190,35200,35210,35250,35260,35280,35290,35300,35310,35320,35330,35350,35360,35400,35420,35430,35440,35460,35470,35480,35490,35500,35510,35520,35530,35540,35550,35560,35570,35580,35590,35600,35620,35630,35640,35650,35660,35680,35690,35700,35710,35720,35780,35790,35820,35830,35840,35850,35860,35870,35880,35890,35900,35910,35920,35930,35940,35950,35960,36000,36010,36020,36030,36040,36050,36070,36080,36090,36100,36110,36120,36130,36140,36150,36160,36170,36180,36190,36200,36210,36220,36230,36240,36250,36280,36300,36310,36320,36330,36340,36350,36380,36390,36400,36410,36420,36430,36440,36450,36460,36470,36480,36510,36520,36530,36560,36570,36580,36590,36600,36610,36620,36630,36640,36650,36660];
var h5 = [36670,36680,36690,36700,36710,36720,36730,36740,36750,36760,36770,36780,36790,36800,36810,36820,36830,36840,36850,36860,36900,36910,36920,36930,36940,36950,36980,36990,37000,37010,37020,37030,37040,37050,37060,37070,37080,37090,37100,37110,37120,37130,37140,37190,37210,37220,37230,37240,37250,37260,37270,37280,37300,37310,37320,37330,37340,37350,37370,37380,37400,37440,37450,37460,37490,37500,37510,37520,37530,37560,37570,37580,37590,37600,37610,37620,37630,37640,37650,37660,37670,37680,37690,37700,37710,37720,37730,37740,37750,37760,37770,37780,37790,37800,37810,37820,37830,37840,37850,37860,37870,37880,37910,37920,37930,37940,37950,37960,37970,37980,37990,38000,38010,38020,38030,38040,38050,38060,38070,38090,38100,38110,38120,38130,38250,38260,38270,38280];
var h6 = [38290,38300,38310,38380,38390,38400,38410,38420,38430,38440,38450,38460,38470,38490,38520,38540,38550,38560,38570,38580,38590,38600,38610,38620,38630,38640,38650,38660,38670,38680,38690,38700,38710,38730,38740,38750,38760,38800,38810,38820,38840,38860,38880,38890,38900,38910,38920,38940,38950,38960,38970,38980,38990,39090,39100,39110,39120,39130,39140,39150,39160,39170,39310,39320,39330,39340,39350,39360,39370,39380,39390,39400,39410,39420,39430,39440,40000,40010,40020,40050,40060,40070,40080,40090,40100,40120,40130,40140,40150,40160,40170,40180,40190,40200,40210,40220,40230,40250,40260,40270,40280,40290,40300,40310,40320,40330,40390,40400,40410,40420,40430,40440,40450,40460,40470,40480,40490,40500,40510,40520,40530,40540,40550,40560,40570,40580,40590,40600];
var h7 = [40610,40620,40630,40640,40650,40660,40670,40680,40690,40700,40710,40720,40730,40740,40750,40760,40770,40780,40790,40800,40810,40820,40830,40840,40850,40860,40870,40880,40890,40900,40910,40920,40930,40940,40950,40960,40970,40980,41000,41010,41020,41030,41040,41050,41060,41070,41080,41090,41100,41110,41120,41140,41150,41160,41170,41180,41200,41220,41230,41240,41250,41260,41270,41280,41290,41300,41310,41320,41330,41340,41350,41360,41370,41380,41390,41400,41440,41470,41480,41490,41510,41520,41530,41560,41570,41580,41590,41600,41610,41620,41630,41640,41650,41660,41670,41680,41690,41700,41710,41720,41730,41740,41750,41760,41770,41780,41790,41800,41810,41820,41830,41840,41850,41860,41870,41880,41890,41900,41910,41920,41930,41940,41950,41960,41970,41980,41990,42000];
var h8 = [42010,42020,42030,42040,42050,42080,42090,42100,42110,42120,42150,42160,43000,43010,43020,43030,43040,43050,43060,43070,43080,43090,43100,43110,43120,43130,43140,43150,43160,43170,43180,43190,43200,43210,43220,43230,43240,43250,43280,43290,43300,43310,43320,43330,43340,43350,43410,43420,43430,43440,43450,43460,43470,43480,43490,43500,43510,43520,43530,43540,43550,43560,43570,43580,43590,43600,43610,43620,43630,43640,43650,43660,43670,43680,43690,43700,43730,43740,43750,43760,43770,43780,43790,43800,43810,43820,43830,43840,43850,43860,43870,43880,43890,43900,43910,43920,43930,43940,43950,43960,43970,43980,44000,44010,44020,44030,44040,44050,44060,44070,44080,44090,44100,44110,44120,44130,44140,44150,44160,44170,44180,44190,44200,44210,44220,44230,44240,44250];
var h9 = [44260,44270,44280,44290,44300,44310,44320,44330,44340,44350,44360,44370,44380,44390,44400,44410,44420,44430,44460,44470,44480,44490,44500,44510,44520,44530,44590,44600,44610,44620,44630,44640,44650,44660,44670,44680,44690,44700,44710,44720,44730,44740,44750,44760,44770,44780,44790,44800,44810,44820,44830,44840,44850,44870,44880,44890,44900,44910,44920,44930,44940,44950,44980,44990,45000,45010,45020,45030,45040,45050,45060,45070,45080,45090,45100,45110,45120,45130,45140,45150,45160,45170,45180,45190,45200,45210,45220,45230,46000,46010,46020,46030,46040,46050,46060,46070,46080,46090,46100,46110,46140,46150,46160,46170,46180,46190,46200,46210,46220,46230,46240,46250,46260,46270,46280,46290,46300,46310,46320,46330,46340,46350,46360,46370,46380,46390,46400,46410];
var h10 = [46420,46430,46440,46450,46460,46470,46480,46490,46500,46510,46520,46530,46540,46550,46560,46570,46580,46590,46600,46610,46620,46630,46640,46670,46680,46720,46730,47000,47010,47020,47030,47040,47050,47060,47070,47080,47090,47100,47110,47120,47130,47140,47150,47160,47170,47180,47190,47200,47210,47220,47230,47240,47250,47260,47270,47280,47290,47300,47310,47320,47330,47340,47350,47360,47370,47380,47390,47400,47410,47420,47430,47440,47450,47460,47470,47480,47490,47500,47510,47520,47530,47540,48000,48010,48020,48030,48040,48050,48060,48070,48080,48090,48100,48130,48140,48150,48160,48170,48180,48190,48200,48210,48220,48230,48240,48250,48260,48270,48280,48290,48300,48310,48320,48330,48340,48350,48360,48370,48380,48390,48400,48410,48430,48440,48450,48460,48470,48480];
var h11 = [48490,48500,48510,48520,48530,48540,48550,48560,48570,48580,48590,48600,48610,48620,48630,48640,48650,48660,48670,48680,48690,48700,48710,48720,48730,48740,48750,48760,48770,48790,48800,48820,48830,48860,48870];*/



var h1 = [30000,30010,30020,30030,30040,30050,30060,30070,30080,30090,30100,30110,30120,30130,30140,30150,30160,30170,30180,30190,30200,30210,30220,30230,30240,30250,30260,30270,30280,30290,30300,30310,30320,30330,30340,30350,30360,30370,30380,30400,30410,30420,30430,30440,30450,30460,30470,30480,30490,30510,30520,30530,30540,30550,30560,30570,30580,30590,30600,30610,30620,30630,30640,30650,30660,30670,30680,30690,30700,30710,30720,30730,30740,30750,30760,30770,30780,30790,30800,30810,30820,30830,30840,30850,30860,30870,30880,30890,30900,30910,30920,30930,30940,30950,30960,30970,30980,30990,31000,31010,31020,31030,31040,31050,31060,31070,31080,31090,31100,31110,31120,31130,31140,31150,31160,31170,31180,31190,31200,31210];
var h2 = [31220,31230,31240,31250,31260,31270,31280,31290,31300,31310,31320,31330,31340,31350,31360,31370,31380,31400,31410,31420,31430,31440,31450,31460,31470,31480,31490,31510,31520,31530,31540,31550,31560,31570,31580,31590,31600,31610,31620,31630,31640,31650,31660,31670,31680,31690,31700,31710,31720,31730,31740,31750,31760,31770,31780,31790,31800,31810,31820,31830,31840,31850,31860,31870,31880,31890,31900,31910,31920,31930,31940,31950,31960,31970,31980,31990,32000,32010,32020,32030,32040,32050,32060,32070,32080,32090,32100,32110,32120,32130,32140,32150,32160,32170,32180,32190,32200,32210,32220,32230,32240,32250,32260,32270,32280,32290,32300,32320,32340,32370,32430,32440,32450,32460,32470,32480,32490,32500,32510,32540];
var h3 = [32550,32560,32570,32580,32590,32600,32610,32620,32630,32640,32650,32660,32670,32680,32690,32700,32710,32720,32730,32740,32750,32760,33000,33010,33020,33030,33040,33050,33060,33070,33080,33090,33100,33110,33120,33130,33140,33150,33160,33170,33180,33190,33200,33210,33220,33230,33240,33250,33260,33270,33280,33290,33300,33310,33320,33330,33340,33350,33360,33370,33380,33390,33400,33410,33420,33430,33440,33450,33460,33470,33480,33490,33500,33510,33520,33530,33540,33550,33580,33590,33600,33610,33620,33630,33640,33650,33660,33670,33680,33690,33700,33710,33720,33730,33740,33750,33760,33770,33780,33790,33800,33810,33820,33830,33930,33940,33950,33960,33970,33980,33990,34000,34010,34020,34030,34040,34050,34060,34070,34080];
var h4 = [34090,34100,34110,34120,34130,34140,34150,34160,34170,34180,34190,34200,34210,34220,34230,34240,34250,34260,34270,34280,34290,34300,34310,34320,34330,34340,34350,34360,34370,34380,34390,34400,34410,34420,34430,34440,34450,34460,34470,34480,34490,34510,34540,34560,34580,34590,34600,34610,34620,34630,34640,34650,34660,34670,34680,34690,34700,34710,34720,34730,34740,34750,34760,34770,34780,34790,34800,34810,34820,34830,34840,34850,34860,34870,34880,34890,34900,34910,34940,34950,34960,34970,34980,34990,35000,35010,35020,35030,35040,35050,35060,35070,35080,35090,35100,35110,35120,35130,35140,35150,35160,35170,35180,35190,35200,35210,35220,35230,35240,35250,35260,35270,35280,35290,35300,35310,35320,35330,35340,35350];
var h5 = [35360,35370,35380,35390,35400,35410,35420,35430,35440,35450,35460,35470,35480,35490,35500,35510,35520,35530,35540,35550,35560,35570,35580,35590,35600,35610,35620,35630,35640,35650,35660,35670,35680,35690,35700,35710,35720,35730,35740,35750,35760,35770,35780,35790,35800,35820,35830,35840,35850,35860,35870,35880,35890,35900,35910,35920,35930,35940,35950,35960,36000,36010,36020,36030,36040,36050,36060,36070,36080,36090,36100,36110,36120,36130,36140,36150,36160,36170,36180,36190,36200,36210,36220,36230,36240,36250,36260,36270,36280,36290,36300,36310,36320,36330,36340,36350,36360,36370,36380,36390,36400,36410,36420,36430,36440,36450,36460,36470,36480,36490,36500,36510,36520,36530,36540,36550,36560,36570,36580,36590];
var h6 = [36600,36610,36620,36630,36640,36650,36660,36670,36680,36690,36700,36710,36720,36730,36740,36750,36760,36770,36780,36790,36800,36810,36820,36830,36840,36850,36860,36870,36880,36890,36900,36910,36920,36930,36940,36950,36980,36990,37000,37010,37020,37030,37040,37050,37060,37070,37080,37090,37100,37110,37120,37130,37140,37180,37190,37200,37210,37220,37230,37240,37250,37260,37270,37280,37290,37300,37310,37320,37330,37340,37350,37370,37380,37400,37410,37420,37430,37440,37450,37460,37470,37480,37490,37500,37510,37520,37530,37540,37550,37560,37570,37580,37590,37600,37610,37620,37630,37640,37650,37660,37670,37680,37690,37700,37710,37720,37730,37740,37750,37760,37770,37780,37790,37800,37810,37820,37830,37840,37850,37860];
var h7 = [37870,37880,37890,37900,37910,37920,37930,37940,37950,37960,37970,37980,37990,38000,38010,38020,38030,38040,38050,38060,38070,38080,38090,38100,38110,38120,38130,38140,38150,38160,38170,38180,38190,38200,38210,38220,38230,38240,38250,38260,38270,38280,38290,38300,38310,38320,38330,38340,38350,38360,38370,38380,38390,38400,38410,38420,38430,38440,38450,38460,38470,38480,38490,38500,38510,38520,38530,38540,38550,38560,38570,38580,38590,38600,38610,38620,38630,38640,38650,38660,38670,38680,38690,38700,38710,38720,38730,38740,38750,38760,38770,38780,38790,38800,38810,38820,38830,38840,38850,38860,38880,38890,38900,38910,38920,38930,38940,38950,38960,38970,38980,38990,39040,39060,39070,39090,39100,39110,39120,39130];
var h8 = [39140,39150,39160,39170,39180,39250,39260,39270,39280,39290,39300,39310,39320,39330,39340,39350,39360,39370,39380,39390,39400,39410,39420,39430,39440,39450,39460,39470,39480,40000,40010,40020,40030,40040,40050,40060,40070,40080,40090,40100,40110,40120,40130,40140,40150,40160,40170,40180,40190,40200,40210,40220,40230,40240,40250,40260,40270,40280,40290,40300,40310,40320,40330,40340,40350,40360,40370,40380,40390,40400,40410,40420,40430,40440,40450,40460,40470,40480,40490,40500,40510,40520,40530,40540,40550,40560,40570,40580,40590,40600,40610,40620,40630,40640,40650,40660,40670,40680,40690,40700,40710,40720,40730,40740,40750,40760,40770,40780,40790,40800,40810,40820,40830,40840,40850,40860,40870,40880,40890,40900];
var h9 = [40910,40920,40930,40940,40950,40960,40970,40980,41000,41010,41020,41030,41040,41050,41060,41070,41080,41090,41100,41110,41120,41130,41140,41150,41160,41170,41180,41190,41200,41210,41220,41230,41240,41250,41260,41270,41280,41290,41300,41310,41320,41330,41340,41350,41360,41370,41380,41390,41400,41410,41420,41430,41440,41450,41460,41470,41480,41490,41510,41520,41530,41540,41550,41560,41570,41580,41590,41600,41610,41620,41630,41640,41650,41660,41670,41680,41690,41700,41710,41720,41730,41740,41750,41760,41770,41780,41790,41800,41810,41820,41830,41840,41850,41860,41870,41880,41890,41900,41910,41920,41930,41940,41950,41960,41970,41980,41990,42000,42010,42020,42030,42040,42050,42060,42070,42080,42090,42100,42110,42120];
var h10 = [42150,42160,43000,43010,43020,43030,43040,43050,43060,43070,43080,43090,43100,43110,43120,43130,43140,43150,43160,43170,43180,43190,43200,43210,43220,43230,43240,43250,43260,43270,43280,43290,43300,43310,43320,43330,43340,43350,43360,43370,43380,43390,43400,43410,43420,43430,43440,43450,43460,43470,43480,43490,43500,43510,43520,43530,43540,43550,43560,43570,43580,43590,43600,43610,43620,43630,43640,43650,43660,43670,43680,43690,43700,43710,43720,43730,43740,43750,43760,43770,43780,43790,43800,43810,43820,43830,43840,43850,43860,43870,43880,43890,43900,43910,43920,43930,43940,43950,43960,43970,43980,44000,44010,44020,44030,44040,44050,44060,44070,44080,44090,44100,44110,44120,44130,44140,44150,44160,44170,44180];
var h11 = [44190,44200,44210,44220,44230,44240,44250,44260,44270,44280,44290,44300,44310,44320,44330,44340,44350,44360,44370,44380,44390,44400,44410,44420,44430,44440,44450,44460,44470,44480,44490,44500,44510,44520,44530,44540,44550,44560,44570,44580,44590,44600,44610,44620,44630,44640,44650,44660,44670,44680,44690,44700,44710,44720,44730,44740,44750,44760,44770,44780,44790,44800,44810,44820,44830,44840,44850,44870,44880,44890,44900,44910,44920,44930,44940,44950,44980,44990,45000,45010,45020,45030,45040,45050,45060,45070,45080,45090,45100,45110,45120,45130,45140,45150,45160,45170,45180,45190,45200,45210,45220,45230,46000,46010,46020,46030,46040,46050,46060,46070,46080,46090,46100,46110,46140,46150,46160,46170,46180,46190];
var h12 = [46200,46210,46220,46230,46240,46250,46260,46270,46280,46290,46300,46310,46320,46330,46340,46350,46360,46370,46380,46390,46400,46410,46420,46430,46440,46450,46460,46470,46480,46490,46500,46510,46520,46530,46540,46550,46560,46570,46580,46590,46600,46610,46620,46630,46640,46650,46660,46670,46680,46690,46700,46710,46720,46730,46740,46750,46760,46770,46780,46790,46800,46810,46820,46830,46840,46850,46860,46870,46880,46890,46900,46910,46920,46930,46940,47000,47010,47020,47030,47040,47050,47060,47070,47080,47090,47100,47110,47120,47130,47140,47150,47160,47170,47180,47190,47200,47210,47220,47230,47240,47250,47260,47270,47280,47290,47300,47310,47320,47330,47340,47350,47360,47370,47380,47390,47400,47410,47420,47430,47440];
var h13 = [47450,47460,47470,47480,47490,47500,47510,47520,47530,47540,47550,47560,47570,47580,47590,47600,47610,47620,47630,47640,47650,47660,47670,47680,47690,47700,47710,48000,48010,48020,48030,48040,48050,48060,48070,48080,48090,48100,48110,48120,48130,48140,48150,48160,48170,48180,48190,48200,48210,48220,48230,48240,48250,48260,48270,48280,48290,48300,48310,48320,48330,48340,48350,48360,48370,48380,48390,48400,48410,48430,48440,48450,48460,48470,48480,48490,48500,48510,48520,48530,48540,48550,48560,48570,48580,48590,48600,48610,48620,48630,48640,48650,48660,48670,48680,48690,48700,48710,48720,48730,48740,48750,48760,48770,48780,48790,48800,48810,48820,48830,48840,48850,48860,48870,48880,48890,48900,48910,48920,48930,48980];


var icon1 = "#fEffect/ItemEff/004/0#"; //黃驚嘆
var icon5 = "#fEffect/ItemEff/0/10#";
var icon2 = "#fUI/UIWindow/Quest/icon1#"; //灰驚嘆
var icon3 = "#fEffect/ItemEff/004/1#";
var icon4 = "#fUI/UIWindow/Quest/icon7/8#"; //限時
var cake = "#fEffect/ItemEff/0/9#";
var get = "#fEffect/ItemEff/004/3#";
var need = "#fEffect/ItemEff/004/4#";

var to = "#fEffect/ItemEff/004/6#";
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(mode == 0){
		status = 0;
	}
	
    if (status == 0) {
		var msg = ""
		msg += "          " + icon5 + " #e#d【髮型專區】#k #b更換皆為免費#n#k\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n";
		msg += "   #L99#" + need + " #d快速查詢#k#l  #L999#" + need + " #d離開頁面#k#l  #L9999#" + need + " #d回造型區#k#l\r\n\r\n";
		msg += "   " + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake + "" + cake+ "" + cake + "" + cake + "" + cake + "" + cake +  "  \r\n#e";
		msg += "#L0#" + icon3 + " #b髮 1#k#l ";
		msg += "#L1#" + icon3 + " #b髮 2#k#l ";
		msg += "#L2#" + icon3 + " #b髮 3#k#l ";
		msg += "#L3#" + icon3 + " #b髮 4#k#l\r\n";
		msg += "#L4#" + icon3 + " #b髮 5#k#l ";
		msg += "#L5#" + icon3 + " #b髮 6#k#l ";
		msg += "#L6#" + icon3 + " #b髮 7#k#l ";
		msg += "#L7#" + icon3 + " #b髮 8#k#l\r\n";
		msg += "#L8#" + icon3 + " #b髮 9#k#l ";
		msg += "#L9#" + icon3 + " #b髮10#k#l ";
		msg += "#L10#" + icon3 + " #b髮11#k#l ";
		msg += "#L11#" + icon3 + " #b髮12#k#l\r\n";
		msg += "#L12#" + icon3 + " #b髮13#k#l #n";
		cm.sendSimple(msg);
	}else if(status == 1){
		this. s = selection;
		if(s == 99){
			cm.sendGetNumber("#d請輸入查詢的髮型代碼#k",0,0,9999999);
		}else if(s == 999){
			cm.dispose();
		}else if(s == 9999){
			cm.dispose();
			cm.openNpc(9010000,"造型專區");
		}else if(s == 0){
			cm.sendStyle("#d選一個喜歡的髮型吧!#k\r\n#r更換所有髮型都是免費!#k\r\n#b快速搜尋特定髮型請至造型區#k",h1);
		}else if(s == 1){
			cm.sendStyle("#d選一個喜歡的髮型吧!#k\r\n#r更換所有髮型都是免費!#k\r\n#b快速搜尋特定髮型請至造型區#k",h2);
		}else if(s == 2){
			cm.sendStyle("#d選一個喜歡的髮型吧!#k\r\n#r更換所有髮型都是免費!#k\r\n#b快速搜尋特定髮型請至造型區#k",h3);
		}else if(s == 3){
			cm.sendStyle("#d選一個喜歡的髮型吧!#k\r\n#r更換所有髮型都是免費!#k\r\n#b快速搜尋特定髮型請至造型區#k",h4);
		}else if(s == 4){
			cm.sendStyle("#d選一個喜歡的髮型吧!#k\r\n#r更換所有髮型都是免費!#k\r\n#b快速搜尋特定髮型請至造型區#k",h5);
		}else if(s == 5){
			cm.sendStyle("#d選一個喜歡的髮型吧!#k\r\n#r更換所有髮型都是免費!#k\r\n#b快速搜尋特定髮型請至造型區#k",h6);
		}else if(s == 6){
			cm.sendStyle("#d選一個喜歡的髮型吧!#k\r\n#r更換所有髮型都是免費!#k\r\n#b快速搜尋特定髮型請至造型區#k",h7);
		}else if(s == 7){
			cm.sendStyle("#d選一個喜歡的髮型吧!#k\r\n#r更換所有髮型都是免費!#k\r\n#b快速搜尋特定髮型請至造型區#k",h8);
		}else if(s == 8){
			cm.sendStyle("#d選一個喜歡的髮型吧!#k\r\n#r更換所有髮型都是免費!#k\r\n#b快速搜尋特定髮型請至造型區#k",h9);
		}else if(s == 9){
			cm.sendStyle("#d選一個喜歡的髮型吧!#k\r\n#r更換所有髮型都是免費!#k\r\n#b快速搜尋特定髮型請至造型區#k",h10);
		}else if(s == 10){
			cm.sendStyle("#d選一個喜歡的髮型吧!#k\r\n#r更換所有髮型都是免費!#k\r\n#b快速搜尋特定髮型請至造型區#k",h11);
		}else if(s == 11){
			cm.sendStyle("#d選一個喜歡的髮型吧!#k\r\n#r更換所有髮型都是免費!#k\r\n#b快速搜尋特定髮型請至造型區#k",h12);
		}else if(s == 12){
			cm.sendStyle("#d選一個喜歡的髮型吧!#k\r\n#r更換所有髮型都是免費!#k\r\n#b快速搜尋特定髮型請至造型區#k",h13);
		}
	}else if(status == 2){
		this. p = selection;
		if(s == 99){
			if(!HairFaceDump.hairExists(p)){
				cm.sendOk("#d您輸入的代碼 :#k #r" + p + "#k #d並無對應髮型");
				status = -1;
			}else{
				this. x = Array();
				x.push(p);
				cm.sendStyle("#d您搜尋的代碼 :#k #b" + p + "#k\r\n#r請確認是否為以下髮型#k",x);
				
			}
		}else if(s == 0){
			cm.getPlayer().setHair(h1[p]);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, h1[p]);
		}else if(s == 1){
			cm.getPlayer().setHair(h2[p]);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, h2[p]);
		}else if(s == 2){
			cm.getPlayer().setHair(h3[p]);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, h3[p]);
		}else if(s == 3){
			cm.getPlayer().setHair(h4[p]);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, h4[p]);
		}else if(s == 4){
			cm.getPlayer().setHair(h5[p]);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, h5[p]);
		}else if(s == 5){
			cm.getPlayer().setHair(h6[p]);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, h6[p]);
		}else if(s == 6){
			cm.getPlayer().setHair(h7[p]);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, h7[p]);
		}else if(s == 7){
			cm.getPlayer().setHair(h8[p]);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, h8[p]);
		}else if(s == 8){
			cm.getPlayer().setHair(h9[p]);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, h9[p]);
		}else if(s == 9){
			cm.getPlayer().setHair(h10[p]);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, h10[p]);
		}else if(s == 10){
			cm.getPlayer().setHair(h11[p]);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, h11[p]);
		}else if(s == 11){
			cm.getPlayer().setHair(h12[p]);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, h12[p]);
		}else if(s == 12){
			cm.getPlayer().setHair(h13[p]);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, h13[p]);
		}
		if(s!=99){
		    cm.sendOk("#d成功變換髮型! 希望你會喜歡!#k");
		    cm.dispose();
		}
		
	}else if(status == 3){
		if(s == 99){
			cm.getPlayer().setHair(p);
			cm.getPlayer().updateSingleStat(MapleStat.HAIR, p);
			cm.sendOk("#d成功變換髮型! 希望你會喜歡!#k");
		    cm.dispose();
		}
	}
}