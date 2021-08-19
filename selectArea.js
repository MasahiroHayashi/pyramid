function changeprefField() {
	const index = document.myForm1.statsField.selectedIndex;
	const swichCode = document.myForm1.statsField.options[index].value; 
	switch(swichCode){
	case "":
		document.getElementById('cityField').innerHTML = '';
		document.getElementById('prefField').innerHTML = '';
		resetArea();
		break;
	<!--  日本全体  -->
	case "00000":
		resetArea();
		document.getElementById('cityField').innerHTML = '';
		document.getElementById('prefField').innerHTML = '';
		selectArea = "00000" ;
		reaName = "日本全体" ;
		onSelectArea();
		break;
	<!--  都道府県  -->
	case "4":
		resetArea();
		document.getElementById('cityField').innerHTML = '';
		document.getElementById('prefField').innerHTML = '<select name="prefField" class="select1" onChange="onSelectArea()">'+
								   '<option value="" selected>都道府県を選んでください</option>'+
								   '<option value="01000">北海道</option>'+
								   '<option value="02000">青森県</option>'+
								   '<option value="03000">岩手県</option>'+
								   '<option value="04000">宮城県</option>'+
								   '<option value="05000">秋田県</option>'+
								   '<option value="06000">山形県</option>'+
								   '<option value="07000">福島県</option>'+
								   '<option value="08000">茨城県</option>'+
								   '<option value="09000">栃木県</option>'+
								   '<option value="10000">群馬県</option>'+
								   '<option value="11000">埼玉県</option>'+
								   '<option value="12000">千葉県</option>'+
								   '<option value="13000">東京都</option>'+
								   '<option value="14000">神奈川県</option>'+
								   '<option value="15000">新潟県</option>'+
								   '<option value="16000">富山県</option>'+
								   '<option value="17000">石川県</option>'+
								   '<option value="18000">福井県</option>'+
								   '<option value="19000">山梨県</option>'+
								   '<option value="20000">長野県</option>'+
								   '<option value="21000">岐阜県</option>'+
								   '<option value="22000">静岡県</option>'+
								   '<option value="23000">愛知県</option>'+
								   '<option value="24000">三重県</option>'+
								   '<option value="25000">滋賀県</option>'+
								   '<option value="26000">京都府</option>'+
								   '<option value="27000">大阪府</option>'+
								   '<option value="28000">兵庫県</option>'+
								   '<option value="29000">奈良県</option>'+
								   '<option value="30000">和歌山県</option>'+
								   '<option value="31000">鳥取県</option>'+
								   '<option value="32000">島根県</option>'+
								   '<option value="33000">岡山県</option>'+
								   '<option value="34000">広島県</option>'+
								   '<option value="35000">山口県</option>'+
								   '<option value="36000">徳島県</option>'+
								   '<option value="37000">香川県</option>'+
								   '<option value="38000">愛媛県</option>'+
								   '<option value="39000">高知県</option>'+
								   '<option value="40000">福岡県</option>'+
								   '<option value="41000">佐賀県</option>'+
								   '<option value="42000">長崎県</option>'+
								   '<option value="43000">熊本県</option>'+
								   '<option value="44000">大分県</option>'+
								   '<option value="45000">宮崎県</option>'+
								   '<option value="46000">鹿児島県</option>'+
								   '<option value="47000">沖縄県</option>'+
								   '</select>'
		break;
	<!--  都道府県→市区町村  -->
	case "5":

		document.getElementById('cityField').innerHTML = '';
		resetArea();
		document.getElementById('prefField').innerHTML = '<select name="prefField" class="select1" onChange="changecityField()">'+
								   '<option value="" selected>都道府県を選んでください</option>'+
								   '<option value="01000">北海道</option>'+
								   '<option value="02000">青森県</option>'+
								   '<option value="03000">岩手県</option>'+
								   '<option value="04000">宮城県</option>'+
								   '<option value="05000">秋田県</option>'+
								   '<option value="06000">山形県</option>'+
								   '<option value="07000">福島県</option>'+
								   '<option value="08000">茨城県</option>'+
								   '<option value="09000">栃木県</option>'+
								   '<option value="10000">群馬県</option>'+
								   '<option value="11000">埼玉県</option>'+
								   '<option value="12000">千葉県</option>'+
								   '<option value="13000">東京都</option>'+
								   '<option value="14000">神奈川県</option>'+
								   '<option value="15000">新潟県</option>'+
								   '<option value="16000">富山県</option>'+
								   '<option value="17000">石川県</option>'+
								   '<option value="18000">福井県</option>'+
								   '<option value="19000">山梨県</option>'+
								   '<option value="20000">長野県</option>'+
								   '<option value="21000">岐阜県</option>'+
								   '<option value="22000">静岡県</option>'+
								   '<option value="23000">愛知県</option>'+
								   '<option value="24000">三重県</option>'+
								   '<option value="25000">滋賀県</option>'+
								   '<option value="26000">京都府</option>'+
								   '<option value="27000">大阪府</option>'+
								   '<option value="28000">兵庫県</option>'+
								   '<option value="29000">奈良県</option>'+
								   '<option value="30000">和歌山県</option>'+
								   '<option value="31000">鳥取県</option>'+
								   '<option value="32000">島根県</option>'+
								   '<option value="33000">岡山県</option>'+
								   '<option value="34000">広島県</option>'+
								   '<option value="35000">山口県</option>'+
								   '<option value="36000">徳島県</option>'+
								   '<option value="37000">香川県</option>'+
								   '<option value="38000">愛媛県</option>'+
								   '<option value="39000">高知県</option>'+
								   '<option value="40000">福岡県</option>'+
								   '<option value="41000">佐賀県</option>'+
								   '<option value="42000">長崎県</option>'+
								   '<option value="43000">熊本県</option>'+
								   '<option value="44000">大分県</option>'+
								   '<option value="45000">宮崎県</option>'+
								   '<option value="46000">鹿児島県</option>'+
								   '<option value="47000">沖縄県</option>'+
								   '</select>'
		break;
	}
}

<!--  フィールド５（都道府県→市町村）  -->
function changecityField() {
      　var indexSF5 = document.myForm1.prefField.selectedIndex; 
　      var SF5 = document.myForm1.prefField.options[indexSF5].value; 

	switch(SF5){
	case "":
		document.getElementById('cityField').innerHTML = '';
		resetArea();
		break;
	case "01000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
                                                                   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="01100">札幌市</option>'+
                                                                   '<option value="01101">札幌市中央区</option>'+
                                                                   '<option value="01102">札幌市北区</option>'+
                                                                   '<option value="01103">札幌市東区</option>'+
                                                                   '<option value="01104">札幌市白石区</option>'+
                                                                   '<option value="01105">札幌市豊平区</option>'+
                                                                   '<option value="01106">札幌市南区</option>'+
                                                                   '<option value="01107">札幌市西区</option>'+
                                                                   '<option value="01108">札幌市厚別区</option>'+
                                                                   '<option value="01109">札幌市手稲区</option>'+
                                                                   '<option value="01110">札幌市清田区</option>'+
                                                                   '<option value="01202">函館市</option>'+
                                                                   '<option value="01203">小樽市</option>'+
                                                                   '<option value="01204">旭川市</option>'+
                                                                   '<option value="01205">室蘭市</option>'+
                                                                   '<option value="01206">釧路市</option>'+
                                                                   '<option value="01207">帯広市</option>'+
                                                                   '<option value="01208">北見市</option>'+
                                                                   '<option value="01209">夕張市</option>'+
                                                                   '<option value="01210">岩見沢市</option>'+
                                                                   '<option value="01211">網走市</option>'+
                                                                   '<option value="01212">留萌市</option>'+
                                                                   '<option value="01213">苫小牧市</option>'+
                                                                   '<option value="01214">稚内市</option>'+
                                                                   '<option value="01215">美唄市</option>'+
                                                                   '<option value="01216">芦別市</option>'+
                                                                   '<option value="01217">江別市</option>'+
                                                                   '<option value="01218">赤平市</option>'+
                                                                   '<option value="01219">紋別市</option>'+
                                                                   '<option value="01220">士別市</option>'+
                                                                   '<option value="01221">名寄市</option>'+
                                                                   '<option value="01222">三笠市</option>'+
                                                                   '<option value="01223">根室市</option>'+
                                                                   '<option value="01224">千歳市</option>'+
                                                                   '<option value="01225">滝川市</option>'+
                                                                   '<option value="01226">砂川市</option>'+
                                                                   '<option value="01227">歌志内市</option>'+
                                                                   '<option value="01228">深川市</option>'+
                                                                   '<option value="01229">富良野市</option>'+
                                                                   '<option value="01230">登別市</option>'+
                                                                   '<option value="01231">恵庭市</option>'+
                                                                   '<option value="01233">伊達市</option>'+
                                                                   '<option value="01234">北広島市</option>'+
                                                                   '<option value="01235">石狩市</option>'+
                                                                   '<option value="01236">北斗市</option>'+
                                                                   '<option value="01303">当別町</option>'+
                                                                   '<option value="01304">新篠津村</option>'+
                                                                   '<option value="01331">松前町</option>'+
                                                                   '<option value="01332">福島町</option>'+
                                                                   '<option value="01333">知内町</option>'+
                                                                   '<option value="01334">木古内町</option>'+
                                                                   '<option value="01337">七飯町</option>'+
                                                                   '<option value="01343">鹿部町</option>'+
                                                                   '<option value="01345">森町</option>'+
                                                                   '<option value="01346">八雲町</option>'+
                                                                   '<option value="01347">長万部町</option>'+
                                                                   '<option value="01361">江差町</option>'+
                                                                   '<option value="01362">上ノ国町</option>'+
                                                                   '<option value="01363">厚沢部町</option>'+
                                                                   '<option value="01364">乙部町</option>'+
                                                                   '<option value="01367">奥尻町</option>'+
                                                                   '<option value="01370">今金町</option>'+
                                                                   '<option value="01371">せたな町</option>'+
                                                                   '<option value="01391">島牧村</option>'+
                                                                   '<option value="01392">寿都町</option>'+
                                                                   '<option value="01393">黒松内町</option>'+
                                                                   '<option value="01394">蘭越町</option>'+
                                                                   '<option value="01395">ニセコ町</option>'+
                                                                   '<option value="01396">真狩村</option>'+
                                                                   '<option value="01397">留寿都村</option>'+
                                                                   '<option value="01398">喜茂別町</option>'+
                                                                   '<option value="01399">京極町</option>'+
                                                                   '<option value="01400">倶知安町</option>'+
                                                                   '<option value="01401">共和町</option>'+
                                                                   '<option value="01402">岩内町</option>'+
                                                                   '<option value="01403">泊村</option>'+
                                                                   '<option value="01404">神恵内村</option>'+
                                                                   '<option value="01405">積丹町</option>'+
                                                                   '<option value="01406">古平町</option>'+
                                                                   '<option value="01407">仁木町</option>'+
                                                                   '<option value="01408">余市町</option>'+
                                                                   '<option value="01409">赤井川村</option>'+
                                                                   '<option value="01423">南幌町</option>'+
                                                                   '<option value="01424">奈井江町</option>'+
                                                                   '<option value="01425">上砂川町</option>'+
                                                                   '<option value="01427">由仁町</option>'+
                                                                   '<option value="01428">長沼町</option>'+
                                                                   '<option value="01429">栗山町</option>'+
                                                                   '<option value="01430">月形町</option>'+
                                                                   '<option value="01431">浦臼町</option>'+
                                                                   '<option value="01432">新十津川町</option>'+
                                                                   '<option value="01433">妹背牛町</option>'+
                                                                   '<option value="01434">秩父別町</option>'+
                                                                   '<option value="01436">雨竜町</option>'+
                                                                   '<option value="01437">北竜町</option>'+
                                                                   '<option value="01438">沼田町</option>'+
                                                                   '<option value="01452">鷹栖町</option>'+
                                                                   '<option value="01453">東神楽町</option>'+
                                                                   '<option value="01454">当麻町</option>'+
                                                                   '<option value="01455">比布町</option>'+
                                                                   '<option value="01456">愛別町</option>'+
                                                                   '<option value="01457">上川町</option>'+
                                                                   '<option value="01458">東川町</option>'+
                                                                   '<option value="01459">美瑛町</option>'+
                                                                   '<option value="01460">上富良野町</option>'+
                                                                   '<option value="01461">中富良野町</option>'+
                                                                   '<option value="01462">南富良野町</option>'+
                                                                   '<option value="01463">占冠村</option>'+
                                                                   '<option value="01464">和寒町</option>'+
                                                                   '<option value="01465">剣淵町</option>'+
                                                                   '<option value="01468">下川町</option>'+
                                                                   '<option value="01469">美深町</option>'+
                                                                   '<option value="01470">音威子府村</option>'+
                                                                   '<option value="01471">中川町</option>'+
                                                                   '<option value="01472">幌加内町</option>'+
                                                                   '<option value="01481">増毛町</option>'+
                                                                   '<option value="01482">小平町</option>'+
                                                                   '<option value="01483">苫前町</option>'+
                                                                   '<option value="01484">羽幌町</option>'+
                                                                   '<option value="01485">初山別村</option>'+
                                                                   '<option value="01486">遠別町</option>'+
                                                                   '<option value="01487">天塩町</option>'+
                                                                   '<option value="01511">猿払村</option>'+
                                                                   '<option value="01512">浜頓別町</option>'+
                                                                   '<option value="01513">中頓別町</option>'+
                                                                   '<option value="01514">枝幸町</option>'+
                                                                   '<option value="01516">豊富町</option>'+
                                                                   '<option value="01517">礼文町</option>'+
                                                                   '<option value="01518">利尻町</option>'+
                                                                   '<option value="01519">利尻富士町</option>'+
                                                                   '<option value="01520">幌延町</option>'+
                                                                   '<option value="01543">美幌町</option>'+
                                                                   '<option value="01544">津別町</option>'+
                                                                   '<option value="01545">斜里町</option>'+
                                                                   '<option value="01546">清里町</option>'+
                                                                   '<option value="01547">小清水町</option>'+
                                                                   '<option value="01549">訓子府町</option>'+
                                                                   '<option value="01550">置戸町</option>'+
                                                                   '<option value="01552">佐呂間町</option>'+
                                                                   '<option value="01555">遠軽町</option>'+
                                                                   '<option value="01559">湧別町</option>'+
                                                                   '<option value="01560">滝上町</option>'+
                                                                   '<option value="01561">興部町</option>'+
                                                                   '<option value="01562">西興部村</option>'+
                                                                   '<option value="01563">雄武町</option>'+
                                                                   '<option value="01564">大空町</option>'+
                                                                   '<option value="01571">豊浦町</option>'+
                                                                   '<option value="01575">壮瞥町</option>'+
                                                                   '<option value="01578">白老町</option>'+
                                                                   '<option value="01581">厚真町</option>'+
                                                                   '<option value="01584">洞爺湖町</option>'+
                                                                   '<option value="01585">安平町</option>'+
                                                                   '<option value="01586">むかわ町</option>'+
                                                                   '<option value="01601">日高町</option>'+
                                                                   '<option value="01602">平取町</option>'+
                                                                   '<option value="01604">新冠町</option>'+
                                                                   '<option value="01607">浦河町</option>'+
                                                                   '<option value="01608">様似町</option>'+
                                                                   '<option value="01609">えりも町</option>'+
                                                                   '<option value="01610">新ひだか町</option>'+
                                                                   '<option value="01631">音更町</option>'+
                                                                   '<option value="01632">士幌町</option>'+
                                                                   '<option value="01633">上士幌町</option>'+
                                                                   '<option value="01634">鹿追町</option>'+
                                                                   '<option value="01635">新得町</option>'+
                                                                   '<option value="01636">清水町</option>'+
                                                                   '<option value="01637">芽室町</option>'+
                                                                   '<option value="01638">中札内村</option>'+
                                                                   '<option value="01639">更別村</option>'+
                                                                   '<option value="01641">大樹町</option>'+
                                                                   '<option value="01642">広尾町</option>'+
                                                                   '<option value="01643">幕別町</option>'+
                                                                   '<option value="01644">池田町</option>'+
                                                                   '<option value="01645">豊頃町</option>'+
                                                                   '<option value="01646">本別町</option>'+
                                                                   '<option value="01647">足寄町</option>'+
                                                                   '<option value="01648">陸別町</option>'+
                                                                   '<option value="01649">浦幌町</option>'+
                                                                   '<option value="01661">釧路町</option>'+
                                                                   '<option value="01662">厚岸町</option>'+
                                                                   '<option value="01663">浜中町</option>'+
                                                                   '<option value="01664">標茶町</option>'+
                                                                   '<option value="01665">弟子屈町</option>'+
                                                                   '<option value="01667">鶴居村</option>'+
                                                                   '<option value="01668">白糠町</option>'+
                                                                   '<option value="01691">別海町</option>'+
                                                                   '<option value="01692">中標津町</option>'+
                                                                   '<option value="01693">標津町</option>'+
                                                                   '<option value="01694">羅臼町</option>'+
								   '</select>'
		break;
	case "02000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="02201">青森市</option>'+
                                                                   '<option value="02202">弘前市</option>'+
                                                                   '<option value="02203">八戸市</option>'+
                                                                   '<option value="02204">黒石市</option>'+
                                                                   '<option value="02205">五所川原市</option>'+
                                                                   '<option value="02206">十和田市</option>'+
                                                                   '<option value="02207">三沢市</option>'+
                                                                   '<option value="02208">むつ市</option>'+
                                                                   '<option value="02209">つがる市</option>'+
                                                                   '<option value="02210">平川市</option>'+
                                                                   '<option value="02301">平内町</option>'+
                                                                   '<option value="02303">今別町</option>'+
                                                                   '<option value="02304">蓬田村</option>'+
                                                                   '<option value="02307">外ヶ浜町</option>'+
                                                                   '<option value="02321">鰺ヶ沢町</option>'+
                                                                   '<option value="02323">深浦町</option>'+
                                                                   '<option value="02343">西目屋村</option>'+
                                                                   '<option value="02361">藤崎町</option>'+
                                                                   '<option value="02362">大鰐町</option>'+
                                                                   '<option value="02367">田舎館村</option>'+
                                                                   '<option value="02381">板柳町</option>'+
                                                                   '<option value="02384">鶴田町</option>'+
                                                                   '<option value="02387">中泊町</option>'+
                                                                   '<option value="02401">野辺地町</option>'+
                                                                   '<option value="02402">七戸町</option>'+
                                                                   '<option value="02405">六戸町</option>'+
                                                                   '<option value="02406">横浜町</option>'+
                                                                   '<option value="02408">東北町</option>'+
                                                                   '<option value="02411">六ヶ所村</option>'+
                                                                   '<option value="02412">おいらせ町</option>'+
                                                                   '<option value="02423">大間町</option>'+
                                                                   '<option value="02424">東通村</option>'+
                                                                   '<option value="02425">風間浦村</option>'+
                                                                   '<option value="02426">佐井村</option>'+
                                                                   '<option value="02441">三戸町</option>'+
                                                                   '<option value="02442">五戸町</option>'+
                                                                   '<option value="02443">田子町</option>'+
                                                                   '<option value="02445">南部町</option>'+
                                                                   '<option value="02446">階上町</option>'+
                                                                   '<option value="02450">新郷村</option>'+
								   '</select>'
		break;
	case "03000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="03201">盛岡市</option>'+
                                                                   '<option value="03202">宮古市</option>'+
                                                                   '<option value="03203">大船渡市</option>'+
                                                                   '<option value="03205">花巻市</option>'+
                                                                   '<option value="03206">北上市</option>'+
                                                                   '<option value="03207">久慈市</option>'+
                                                                   '<option value="03208">遠野市</option>'+
                                                                   '<option value="03209">一関市</option>'+
                                                                   '<option value="03210">陸前高田市</option>'+
                                                                   '<option value="03211">釜石市</option>'+
                                                                   '<option value="03213">二戸市</option>'+
                                                                   '<option value="03214">八幡平市</option>'+
                                                                   '<option value="03215">奥州市</option>'+
                                                                   '<option value="03216">滝沢市</option>'+
                                                                   '<option value="03301">雫石町</option>'+
                                                                   '<option value="03302">葛巻町</option>'+
                                                                   '<option value="03303">岩手町</option>'+
                                                                   '<option value="03321">紫波町</option>'+
                                                                   '<option value="03322">矢巾町</option>'+
                                                                   '<option value="03366">西和賀町</option>'+
                                                                   '<option value="03381">金ケ崎町</option>'+
                                                                   '<option value="03402">平泉町</option>'+
                                                                   '<option value="03441">住田町</option>'+
                                                                   '<option value="03461">大槌町</option>'+
                                                                   '<option value="03482">山田町</option>'+
                                                                   '<option value="03483">岩泉町</option>'+
                                                                   '<option value="03484">田野畑村</option>'+
                                                                   '<option value="03485">普代村</option>'+
                                                                   '<option value="03501">軽米町</option>'+
                                                                   '<option value="03503">野田村</option>'+
                                                                   '<option value="03506">九戸村</option>'+
                                                                   '<option value="03507">洋野町</option>'+
                                                                   '<option value="03524">一戸町</option>'+
								   '</select>'
		break;
	case "04000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="04100">仙台市</option>'+
                                                                   '<option value="04101">仙台市青葉区</option>'+
                                                                   '<option value="04102">仙台市宮城野区</option>'+
                                                                   '<option value="04103">仙台市若林区</option>'+
                                                                   '<option value="04104">仙台市太白区</option>'+
                                                                   '<option value="04105">仙台市泉区</option>'+
                                                                   '<option value="04202">石巻市</option>'+
                                                                   '<option value="04203">塩竈市</option>'+
                                                                   '<option value="04205">気仙沼市</option>'+
                                                                   '<option value="04206">白石市</option>'+
                                                                   '<option value="04207">名取市</option>'+
                                                                   '<option value="04208">角田市</option>'+
                                                                   '<option value="04209">多賀城市</option>'+
                                                                   '<option value="04211">岩沼市</option>'+
                                                                   '<option value="04212">登米市</option>'+
                                                                   '<option value="04213">栗原市</option>'+
                                                                   '<option value="04214">東松島市</option>'+
                                                                   '<option value="04215">大崎市</option>'+
                                                                   '<option value="04301">蔵王町</option>'+
                                                                   '<option value="04302">七ヶ宿町</option>'+
                                                                   '<option value="04321">大河原町</option>'+
                                                                   '<option value="04322">村田町</option>'+
                                                                   '<option value="04323">柴田町</option>'+
                                                                   '<option value="04324">川崎町</option>'+
                                                                   '<option value="04341">丸森町</option>'+
                                                                   '<option value="04361">亘理町</option>'+
                                                                   '<option value="04362">山元町</option>'+
                                                                   '<option value="04401">松島町</option>'+
                                                                   '<option value="04404">七ヶ浜町</option>'+
                                                                   '<option value="04406">利府町</option>'+
                                                                   '<option value="04421">大和町</option>'+
                                                                   '<option value="04422">大郷町</option>'+
                                                                   '<option value="04423">富谷町</option>'+
                                                                   '<option value="04424">大衡村</option>'+
                                                                   '<option value="04444">色麻町</option>'+
                                                                   '<option value="04445">加美町</option>'+
                                                                   '<option value="04501">涌谷町</option>'+
                                                                   '<option value="04505">美里町</option>'+
                                                                   '<option value="04581">女川町</option>'+
                                                                   '<option value="04606">南三陸町</option>'+
								   '</select>'
		break;
	case "05000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="05201">秋田市</option>'+
                                                                   '<option value="05202">能代市</option>'+
                                                                   '<option value="05203">横手市</option>'+
                                                                   '<option value="05204">大館市</option>'+
                                                                   '<option value="05206">男鹿市</option>'+
                                                                   '<option value="05207">湯沢市</option>'+
                                                                   '<option value="05209">鹿角市</option>'+
                                                                   '<option value="05210">由利本荘市</option>'+
                                                                   '<option value="05211">潟上市</option>'+
                                                                   '<option value="05212">大仙市</option>'+
                                                                   '<option value="05213">北秋田市</option>'+
                                                                   '<option value="05214">にかほ市</option>'+
                                                                   '<option value="05215">仙北市</option>'+
                                                                   '<option value="05303">小坂町</option>'+
                                                                   '<option value="05327">上小阿仁村</option>'+
                                                                   '<option value="05346">藤里町</option>'+
                                                                   '<option value="05348">三種町</option>'+
                                                                   '<option value="05349">八峰町</option>'+
                                                                   '<option value="05361">五城目町</option>'+
                                                                   '<option value="05363">八郎潟町</option>'+
                                                                   '<option value="05366">井川町</option>'+
                                                                   '<option value="05368">大潟村</option>'+
                                                                   '<option value="05434">美郷町</option>'+
                                                                   '<option value="05463">羽後町</option>'+
                                                                   '<option value="05464">東成瀬村</option>'+
								   '</select>'
		break;
	case "06000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="06201">山形市</option>'+
                                                                   '<option value="06202">米沢市</option>'+
                                                                   '<option value="06203">鶴岡市</option>'+
                                                                   '<option value="06204">酒田市</option>'+
                                                                   '<option value="06205">新庄市</option>'+
                                                                   '<option value="06206">寒河江市</option>'+
                                                                   '<option value="06207">上山市</option>'+
                                                                   '<option value="06208">村山市</option>'+
                                                                   '<option value="06209">長井市</option>'+
                                                                   '<option value="06210">天童市</option>'+
                                                                   '<option value="06211">東根市</option>'+
                                                                   '<option value="06212">尾花沢市</option>'+
                                                                   '<option value="06213">南陽市</option>'+
                                                                   '<option value="06301">山辺町</option>'+
                                                                   '<option value="06302">中山町</option>'+
                                                                   '<option value="06321">河北町</option>'+
                                                                   '<option value="06322">西川町</option>'+
                                                                   '<option value="06323">朝日町</option>'+
                                                                   '<option value="06324">大江町</option>'+
                                                                   '<option value="06341">大石田町</option>'+
                                                                   '<option value="06361">金山町</option>'+
                                                                   '<option value="06362">最上町</option>'+
                                                                   '<option value="06363">舟形町</option>'+
                                                                   '<option value="06364">真室川町</option>'+
                                                                   '<option value="06365">大蔵村</option>'+
                                                                   '<option value="06366">鮭川村</option>'+
                                                                   '<option value="06367">戸沢村</option>'+
                                                                   '<option value="06381">高畠町</option>'+
                                                                   '<option value="06382">川西町</option>'+
                                                                   '<option value="06401">小国町</option>'+
                                                                   '<option value="06402">白鷹町</option>'+
                                                                   '<option value="06403">飯豊町</option>'+
                                                                   '<option value="06426">三川町</option>'+
                                                                   '<option value="06428">庄内町</option>'+
                                                                   '<option value="06461">遊佐町</option>'+
								   '</select>'
		break;
	case "07000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="07201">福島市</option>'+
                                                                   '<option value="07202">会津若松市</option>'+
                                                                   '<option value="07203">郡山市</option>'+
                                                                   '<option value="07204">いわき市</option>'+
                                                                   '<option value="07205">白河市</option>'+
                                                                   '<option value="07207">須賀川市</option>'+
                                                                   '<option value="07208">喜多方市</option>'+
                                                                   '<option value="07209">相馬市</option>'+
                                                                   '<option value="07210">二本松市</option>'+
                                                                   '<option value="07211">田村市</option>'+
                                                                   '<option value="07212">南相馬市</option>'+
                                                                   '<option value="07213">伊達市</option>'+
                                                                   '<option value="07214">本宮市</option>'+
                                                                   '<option value="07301">桑折町</option>'+
                                                                   '<option value="07303">国見町</option>'+
                                                                   '<option value="07308">川俣町</option>'+
                                                                   '<option value="07322">大玉村</option>'+
                                                                   '<option value="07342">鏡石町</option>'+
                                                                   '<option value="07344">天栄村</option>'+
                                                                   '<option value="07362">下郷町</option>'+
                                                                   '<option value="07364">檜枝岐村</option>'+
                                                                   '<option value="07367">只見町</option>'+
                                                                   '<option value="07368">南会津町</option>'+
                                                                   '<option value="07402">北塩原村</option>'+
                                                                   '<option value="07405">西会津町</option>'+
                                                                   '<option value="07407">磐梯町</option>'+
                                                                   '<option value="07408">猪苗代町</option>'+
                                                                   '<option value="07421">会津坂下町</option>'+
                                                                   '<option value="07422">湯川村</option>'+
                                                                   '<option value="07423">柳津町</option>'+
                                                                   '<option value="07444">三島町</option>'+
                                                                   '<option value="07445">金山町</option>'+
                                                                   '<option value="07446">昭和村</option>'+
                                                                   '<option value="07447">会津美里町</option>'+
                                                                   '<option value="07461">西郷村</option>'+
                                                                   '<option value="07464">泉崎村</option>'+
                                                                   '<option value="07465">中島村</option>'+
                                                                   '<option value="07466">矢吹町</option>'+
                                                                   '<option value="07481">棚倉町</option>'+
                                                                   '<option value="07482">矢祭町</option>'+
                                                                   '<option value="07483">塙町</option>'+
                                                                   '<option value="07484">鮫川村</option>'+
                                                                   '<option value="07501">石川町</option>'+
                                                                   '<option value="07502">玉川村</option>'+
                                                                   '<option value="07503">平田村</option>'+
                                                                   '<option value="07504">浅川町</option>'+
                                                                   '<option value="07505">古殿町</option>'+
                                                                   '<option value="07521">三春町</option>'+
                                                                   '<option value="07522">小野町</option>'+
                                                                   '<option value="07541">広野町</option>'+
                                                                   '<option value="07542">楢葉町</option>'+
                                                                   '<option value="07543">富岡町</option>'+
                                                                   '<option value="07544">川内村</option>'+
                                                                   '<option value="07545">大熊町</option>'+
                                                                   '<option value="07546">双葉町</option>'+
                                                                   '<option value="07547">浪江町</option>'+
                                                                   '<option value="07548">葛尾村</option>'+
                                                                   '<option value="07561">新地町</option>'+
                                                                   '<option value="07564">飯舘村</option>'+
								   '</select>'
		break;
	case "08000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="08201">水戸市</option>'+
                                                                   '<option value="08202">日立市</option>'+
                                                                   '<option value="08203">土浦市</option>'+
                                                                   '<option value="08204">古河市</option>'+
                                                                   '<option value="08205">石岡市</option>'+
                                                                   '<option value="08207">結城市</option>'+
                                                                   '<option value="08208">龍ケ崎市</option>'+
                                                                   '<option value="08210">下妻市</option>'+
                                                                   '<option value="08211">常総市</option>'+
                                                                   '<option value="08212">常陸太田市</option>'+
                                                                   '<option value="08214">高萩市</option>'+
                                                                   '<option value="08215">北茨城市</option>'+
                                                                   '<option value="08216">笠間市</option>'+
                                                                   '<option value="08217">取手市</option>'+
                                                                   '<option value="08219">牛久市</option>'+
                                                                   '<option value="08220">つくば市</option>'+
                                                                   '<option value="08221">ひたちなか市</option>'+
                                                                   '<option value="08222">鹿嶋市</option>'+
                                                                   '<option value="08223">潮来市</option>'+
                                                                   '<option value="08224">守谷市</option>'+
                                                                   '<option value="08225">常陸大宮市</option>'+
                                                                   '<option value="08226">那珂市</option>'+
                                                                   '<option value="08227">筑西市</option>'+
                                                                   '<option value="08228">坂東市</option>'+
                                                                   '<option value="08229">稲敷市</option>'+
                                                                   '<option value="08230">かすみがうら市</option>'+
                                                                   '<option value="08231">桜川市</option>'+
                                                                   '<option value="08232">神栖市</option>'+
                                                                   '<option value="08233">行方市</option>'+
                                                                   '<option value="08234">鉾田市</option>'+
                                                                   '<option value="08235">つくばみらい市</option>'+
                                                                   '<option value="08236">小美玉市</option>'+
                                                                   '<option value="08302">茨城町</option>'+
                                                                   '<option value="08309">大洗町</option>'+
                                                                   '<option value="08310">城里町</option>'+
                                                                   '<option value="08341">東海村</option>'+
                                                                   '<option value="08364">大子町</option>'+
                                                                   '<option value="08442">美浦村</option>'+
                                                                   '<option value="08443">阿見町</option>'+
                                                                   '<option value="08447">河内町</option>'+
                                                                   '<option value="08521">八千代町</option>'+
                                                                   '<option value="08542">五霞町</option>'+
                                                                   '<option value="08546">境町</option>'+
                                                                   '<option value="08564">利根町</option>'+
								   '</select>'
		break;
	case "09000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="09201">宇都宮市</option>'+
                                                                   '<option value="09202">足利市</option>'+
                                                                   '<option value="09203">栃木市</option>'+
                                                                   '<option value="09204">佐野市</option>'+
                                                                   '<option value="09205">鹿沼市</option>'+
                                                                   '<option value="09206">日光市</option>'+
                                                                   '<option value="09208">小山市</option>'+
                                                                   '<option value="09209">真岡市</option>'+
                                                                   '<option value="09210">大田原市</option>'+
                                                                   '<option value="09211">矢板市</option>'+
                                                                   '<option value="09213">那須塩原市</option>'+
                                                                   '<option value="09214">さくら市</option>'+
                                                                   '<option value="09215">那須烏山市</option>'+
                                                                   '<option value="09216">下野市</option>'+
                                                                   '<option value="09301">上三川町</option>'+
                                                                   '<option value="09342">益子町</option>'+
                                                                   '<option value="09343">茂木町</option>'+
                                                                   '<option value="09344">市貝町</option>'+
                                                                   '<option value="09345">芳賀町</option>'+
                                                                   '<option value="09361">壬生町</option>'+
                                                                   '<option value="09364">野木町</option>'+
                                                                   '<option value="09384">塩谷町</option>'+
                                                                   '<option value="09386">高根沢町</option>'+
                                                                   '<option value="09407">那須町</option>'+
                                                                   '<option value="09411">那珂川町</option>'+
								   '</select>'
		break;
	case "10000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="10201">前橋市</option>'+
                                                                   '<option value="10202">高崎市</option>'+
                                                                   '<option value="10203">桐生市</option>'+
                                                                   '<option value="10204">伊勢崎市</option>'+
                                                                   '<option value="10205">太田市</option>'+
                                                                   '<option value="10206">沼田市</option>'+
                                                                   '<option value="10207">館林市</option>'+
                                                                   '<option value="10208">渋川市</option>'+
                                                                   '<option value="10209">藤岡市</option>'+
                                                                   '<option value="10210">富岡市</option>'+
                                                                   '<option value="10211">安中市</option>'+
                                                                   '<option value="10212">みどり市</option>'+
                                                                   '<option value="10344">榛東村</option>'+
                                                                   '<option value="10345">吉岡町</option>'+
                                                                   '<option value="10366">上野村</option>'+
                                                                   '<option value="10367">神流町</option>'+
                                                                   '<option value="10382">下仁田町</option>'+
                                                                   '<option value="10383">南牧村</option>'+
                                                                   '<option value="10384">甘楽町</option>'+
                                                                   '<option value="10421">中之条町</option>'+
                                                                   '<option value="10424">長野原町</option>'+
                                                                   '<option value="10425">嬬恋村</option>'+
                                                                   '<option value="10426">草津町</option>'+
                                                                   '<option value="10428">高山村</option>'+
                                                                   '<option value="10429">東吾妻町</option>'+
                                                                   '<option value="10443">片品村</option>'+
                                                                   '<option value="10444">川場村</option>'+
                                                                   '<option value="10448">昭和村</option>'+
                                                                   '<option value="10449">みなかみ町</option>'+
                                                                   '<option value="10464">玉村町</option>'+
                                                                   '<option value="10521">板倉町</option>'+
                                                                   '<option value="10522">明和町</option>'+
                                                                   '<option value="10523">千代田町</option>'+
                                                                   '<option value="10524">大泉町</option>'+
                                                                   '<option value="10525">邑楽町</option>'+
								   '</select>'
		break;
	case "11000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="11100">さいたま市</option>'+
                                                                   '<option value="11101">さいたま市西区</option>'+
                                                                   '<option value="11102">さいたま市北区</option>'+
                                                                   '<option value="11103">さいたま市大宮区</option>'+
                                                                   '<option value="11104">さいたま市見沼区</option>'+
                                                                   '<option value="11105">さいたま市中央区</option>'+
                                                                   '<option value="11106">さいたま市桜区</option>'+
                                                                   '<option value="11107">さいたま市浦和区</option>'+
                                                                   '<option value="11108">さいたま市南区</option>'+
                                                                   '<option value="11109">さいたま市緑区</option>'+
                                                                   '<option value="11110">さいたま市岩槻区</option>'+
                                                                   '<option value="11201">川越市</option>'+
                                                                   '<option value="11202">熊谷市</option>'+
                                                                   '<option value="11203">川口市</option>'+
                                                                   '<option value="11206">行田市</option>'+
                                                                   '<option value="11207">秩父市</option>'+
                                                                   '<option value="11208">所沢市</option>'+
                                                                   '<option value="11209">飯能市</option>'+
                                                                   '<option value="11210">加須市</option>'+
                                                                   '<option value="11211">本庄市</option>'+
                                                                   '<option value="11212">東松山市</option>'+
                                                                   '<option value="11214">春日部市</option>'+
                                                                   '<option value="11215">狭山市</option>'+
                                                                   '<option value="11216">羽生市</option>'+
                                                                   '<option value="11217">鴻巣市</option>'+
                                                                   '<option value="11218">深谷市</option>'+
                                                                   '<option value="11219">上尾市</option>'+
                                                                   '<option value="11221">草加市</option>'+
                                                                   '<option value="11222">越谷市</option>'+
                                                                   '<option value="11223">蕨市</option>'+
                                                                   '<option value="11224">戸田市</option>'+
                                                                   '<option value="11225">入間市</option>'+
                                                                   '<option value="11227">朝霞市</option>'+
                                                                   '<option value="11228">志木市</option>'+
                                                                   '<option value="11229">和光市</option>'+
                                                                   '<option value="11230">新座市</option>'+
                                                                   '<option value="11231">桶川市</option>'+
                                                                   '<option value="11232">久喜市</option>'+
                                                                   '<option value="11233">北本市</option>'+
                                                                   '<option value="11234">八潮市</option>'+
                                                                   '<option value="11235">富士見市</option>'+
                                                                   '<option value="11237">三郷市</option>'+
                                                                   '<option value="11238">蓮田市</option>'+
                                                                   '<option value="11239">坂戸市</option>'+
                                                                   '<option value="11240">幸手市</option>'+
                                                                   '<option value="11241">鶴ヶ島市</option>'+
                                                                   '<option value="11242">日高市</option>'+
                                                                   '<option value="11243">吉川市</option>'+
                                                                   '<option value="11245">ふじみ野市</option>'+
                                                                   '<option value="11246">白岡市</option>'+
                                                                   '<option value="11301">伊奈町</option>'+
                                                                   '<option value="11324">三芳町</option>'+
                                                                   '<option value="11326">毛呂山町</option>'+
                                                                   '<option value="11327">越生町</option>'+
                                                                   '<option value="11341">滑川町</option>'+
                                                                   '<option value="11342">嵐山町</option>'+
                                                                   '<option value="11343">小川町</option>'+
                                                                   '<option value="11346">川島町</option>'+
                                                                   '<option value="11347">吉見町</option>'+
                                                                   '<option value="11348">鳩山町</option>'+
                                                                   '<option value="11349">ときがわ町</option>'+
                                                                   '<option value="11361">横瀬町</option>'+
                                                                   '<option value="11362">皆野町</option>'+
                                                                   '<option value="11363">長瀞町</option>'+
                                                                   '<option value="11365">小鹿野町</option>'+
                                                                   '<option value="11369">東秩父村</option>'+
                                                                   '<option value="11381">美里町</option>'+
                                                                   '<option value="11383">神川町</option>'+
                                                                   '<option value="11385">上里町</option>'+
                                                                   '<option value="11408">寄居町</option>'+
                                                                   '<option value="11442">宮代町</option>'+
                                                                   '<option value="11464">杉戸町</option>'+
                                                                   '<option value="11465">松伏町</option>'+
								   '</select>'
		break;
	case "12000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="12100">千葉市</option>'+
                                                                   '<option value="12101">千葉市中央区</option>'+
                                                                   '<option value="12102">千葉市花見川区</option>'+
                                                                   '<option value="12103">千葉市稲毛区</option>'+
                                                                   '<option value="12104">千葉市若葉区</option>'+
                                                                   '<option value="12105">千葉市緑区</option>'+
                                                                   '<option value="12106">千葉市美浜区</option>'+
                                                                   '<option value="12202">銚子市</option>'+
                                                                   '<option value="12203">市川市</option>'+
                                                                   '<option value="12204">船橋市</option>'+
                                                                   '<option value="12205">館山市</option>'+
                                                                   '<option value="12206">木更津市</option>'+
                                                                   '<option value="12207">松戸市</option>'+
                                                                   '<option value="12208">野田市</option>'+
                                                                   '<option value="12210">茂原市</option>'+
                                                                   '<option value="12211">成田市</option>'+
                                                                   '<option value="12212">佐倉市</option>'+
                                                                   '<option value="12213">東金市</option>'+
                                                                   '<option value="12215">旭市</option>'+
                                                                   '<option value="12216">習志野市</option>'+
                                                                   '<option value="12217">柏市</option>'+
                                                                   '<option value="12218">勝浦市</option>'+
                                                                   '<option value="12219">市原市</option>'+
                                                                   '<option value="12220">流山市</option>'+
                                                                   '<option value="12221">八千代市</option>'+
                                                                   '<option value="12222">我孫子市</option>'+
                                                                   '<option value="12223">鴨川市</option>'+
                                                                   '<option value="12224">鎌ケ谷市</option>'+
                                                                   '<option value="12225">君津市</option>'+
                                                                   '<option value="12226">富津市</option>'+
                                                                   '<option value="12227">浦安市</option>'+
                                                                   '<option value="12228">四街道市</option>'+
                                                                   '<option value="12229">袖ケ浦市</option>'+
                                                                   '<option value="12230">八街市</option>'+
                                                                   '<option value="12231">印西市</option>'+
                                                                   '<option value="12232">白井市</option>'+
                                                                   '<option value="12233">富里市</option>'+
                                                                   '<option value="12234">南房総市</option>'+
                                                                   '<option value="12235">匝瑳市</option>'+
                                                                   '<option value="12236">香取市</option>'+
                                                                   '<option value="12237">山武市</option>'+
                                                                   '<option value="12238">いすみ市</option>'+
                                                                   '<option value="12239">大網白里市</option>'+
                                                                   '<option value="12322">酒々井町</option>'+
                                                                   '<option value="12329">栄町</option>'+
                                                                   '<option value="12342">神崎町</option>'+
                                                                   '<option value="12347">多古町</option>'+
                                                                   '<option value="12349">東庄町</option>'+
                                                                   '<option value="12403">九十九里町</option>'+
                                                                   '<option value="12409">芝山町</option>'+
                                                                   '<option value="12410">横芝光町</option>'+
                                                                   '<option value="12421">一宮町</option>'+
                                                                   '<option value="12422">睦沢町</option>'+
                                                                   '<option value="12423">長生村</option>'+
                                                                   '<option value="12424">白子町</option>'+
                                                                   '<option value="12426">長柄町</option>'+
                                                                   '<option value="12427">長南町</option>'+
                                                                   '<option value="12441">大多喜町</option>'+
                                                                   '<option value="12443">御宿町</option>'+
                                                                   '<option value="12463">鋸南町</option>'+
								   '</select>'
		break;
	case "13000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="13100">東京２３区</option>'+
                                                                   '<option value="13101">千代田区</option>'+
                                                                   '<option value="13102">中央区</option>'+
                                                                   '<option value="13103">港区</option>'+
                                                                   '<option value="13104">新宿区</option>'+
                                                                   '<option value="13105">文京区</option>'+
                                                                   '<option value="13106">台東区</option>'+
                                                                   '<option value="13107">墨田区</option>'+
                                                                   '<option value="13108">江東区</option>'+
                                                                   '<option value="13109">品川区</option>'+
                                                                   '<option value="13110">目黒区</option>'+
                                                                   '<option value="13111">大田区</option>'+
                                                                   '<option value="13112">世田谷区</option>'+
                                                                   '<option value="13113">渋谷区</option>'+
                                                                   '<option value="13114">中野区</option>'+
                                                                   '<option value="13115">杉並区</option>'+
                                                                   '<option value="13116">豊島区</option>'+
                                                                   '<option value="13117">北区</option>'+
                                                                   '<option value="13118">荒川区</option>'+
                                                                   '<option value="13119">板橋区</option>'+
                                                                   '<option value="13120">練馬区</option>'+
                                                                   '<option value="13121">足立区</option>'+
                                                                   '<option value="13122">葛飾区</option>'+
                                                                   '<option value="13123">江戸川区</option>'+
                                                                   '<option value="13201">八王子市</option>'+
                                                                   '<option value="13202">立川市</option>'+
                                                                   '<option value="13203">武蔵野市</option>'+
                                                                   '<option value="13204">三鷹市</option>'+
                                                                   '<option value="13205">青梅市</option>'+
                                                                   '<option value="13206">府中市</option>'+
                                                                   '<option value="13207">昭島市</option>'+
                                                                   '<option value="13208">調布市</option>'+
                                                                   '<option value="13209">町田市</option>'+
                                                                   '<option value="13210">小金井市</option>'+
                                                                   '<option value="13211">小平市</option>'+
                                                                   '<option value="13212">日野市</option>'+
                                                                   '<option value="13213">東村山市</option>'+
                                                                   '<option value="13214">国分寺市</option>'+
                                                                   '<option value="13215">国立市</option>'+
                                                                   '<option value="13218">福生市</option>'+
                                                                   '<option value="13219">狛江市</option>'+
                                                                   '<option value="13220">東大和市</option>'+
                                                                   '<option value="13221">清瀬市</option>'+
                                                                   '<option value="13222">東久留米市</option>'+
                                                                   '<option value="13223">武蔵村山市</option>'+
                                                                   '<option value="13224">多摩市</option>'+
                                                                   '<option value="13225">稲城市</option>'+
                                                                   '<option value="13227">羽村市</option>'+
                                                                   '<option value="13228">あきる野市</option>'+
                                                                   '<option value="13229">西東京市</option>'+
                                                                   '<option value="13303">瑞穂町</option>'+
                                                                   '<option value="13305">日の出町</option>'+
                                                                   '<option value="13307">檜原村</option>'+
                                                                   '<option value="13308">奥多摩町</option>'+
                                                                   '<option value="13361">大島町</option>'+
                                                                   '<option value="13362">利島村</option>'+
                                                                   '<option value="13363">新島村</option>'+
                                                                   '<option value="13364">神津島村</option>'+
                                                                   '<option value="13381">三宅村</option>'+
                                                                   '<option value="13382">御蔵島村</option>'+
                                                                   '<option value="13401">八丈町</option>'+
                                                                   '<option value="13402">青ヶ島村</option>'+
                                                                   '<option value="13421">小笠原村</option>'+
								   '</select>'
		break;
	case "14000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="14100">横浜市</option>'+
                                                                   '<option value="14101">横浜市鶴見区</option>'+
                                                                   '<option value="14102">横浜市神奈川区</option>'+
                                                                   '<option value="14103">横浜市西区</option>'+
                                                                   '<option value="14104">横浜市中区</option>'+
                                                                   '<option value="14105">横浜市南区</option>'+
                                                                   '<option value="14106">横浜市保土ケ谷区</option>'+
                                                                   '<option value="14107">横浜市磯子区</option>'+
                                                                   '<option value="14108">横浜市金沢区</option>'+
                                                                   '<option value="14109">横浜市港北区</option>'+
                                                                   '<option value="14110">横浜市戸塚区</option>'+
                                                                   '<option value="14111">横浜市港南区</option>'+
                                                                   '<option value="14112">横浜市旭区</option>'+
                                                                   '<option value="14113">横浜市緑区</option>'+
                                                                   '<option value="14114">横浜市瀬谷区</option>'+
                                                                   '<option value="14115">横浜市栄区</option>'+
                                                                   '<option value="14116">横浜市泉区</option>'+
                                                                   '<option value="14117">横浜市青葉区</option>'+
                                                                   '<option value="14118">横浜市都筑区</option>'+
                                                                   '<option value="14130">川崎市</option>'+
                                                                   '<option value="14131">川崎市川崎区</option>'+
                                                                   '<option value="14132">川崎市幸区</option>'+
                                                                   '<option value="14133">川崎市中原区</option>'+
                                                                   '<option value="14134">川崎市高津区</option>'+
                                                                   '<option value="14135">川崎市多摩区</option>'+
                                                                   '<option value="14136">川崎市宮前区</option>'+
                                                                   '<option value="14137">川崎市麻生区</option>'+
                                                                   '<option value="14150">相模原市</option>'+
                                                                   '<option value="14151">相模原市緑区</option>'+
                                                                   '<option value="14152">相模原市中央区</option>'+
                                                                   '<option value="14153">相模原市南区</option>'+
                                                                   '<option value="14201">横須賀市</option>'+
                                                                   '<option value="14203">平塚市</option>'+
                                                                   '<option value="14204">鎌倉市</option>'+
                                                                   '<option value="14205">藤沢市</option>'+
                                                                   '<option value="14206">小田原市</option>'+
                                                                   '<option value="14207">茅ヶ崎市</option>'+
                                                                   '<option value="14208">逗子市</option>'+
                                                                   '<option value="14210">三浦市</option>'+
                                                                   '<option value="14211">秦野市</option>'+
                                                                   '<option value="14212">厚木市</option>'+
                                                                   '<option value="14213">大和市</option>'+
                                                                   '<option value="14214">伊勢原市</option>'+
                                                                   '<option value="14215">海老名市</option>'+
                                                                   '<option value="14216">座間市</option>'+
                                                                   '<option value="14217">南足柄市</option>'+
                                                                   '<option value="14218">綾瀬市</option>'+
                                                                   '<option value="14301">葉山町</option>'+
                                                                   '<option value="14321">寒川町</option>'+
                                                                   '<option value="14341">大磯町</option>'+
                                                                   '<option value="14342">二宮町</option>'+
                                                                   '<option value="14361">中井町</option>'+
                                                                   '<option value="14362">大井町</option>'+
                                                                   '<option value="14363">松田町</option>'+
                                                                   '<option value="14364">山北町</option>'+
                                                                   '<option value="14366">開成町</option>'+
                                                                   '<option value="14382">箱根町</option>'+
                                                                   '<option value="14383">真鶴町</option>'+
                                                                   '<option value="14384">湯河原町</option>'+
                                                                   '<option value="14401">愛川町</option>'+
                                                                   '<option value="14402">清川村</option>'+
								   '</select>'
		break;
	case "15000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="15100">新潟市</option>'+
                                                                   '<option value="15101">新潟市北区</option>'+
                                                                   '<option value="15102">新潟市東区</option>'+
                                                                   '<option value="15103">新潟市中央区</option>'+
                                                                   '<option value="15104">新潟市江南区</option>'+
                                                                   '<option value="15105">新潟市秋葉区</option>'+
                                                                   '<option value="15106">新潟市南区</option>'+
                                                                   '<option value="15107">新潟市西区</option>'+
                                                                   '<option value="15108">新潟市西蒲区</option>'+
                                                                   '<option value="15202">長岡市</option>'+
                                                                   '<option value="15204">三条市</option>'+
                                                                   '<option value="15205">柏崎市</option>'+
                                                                   '<option value="15206">新発田市</option>'+
                                                                   '<option value="15208">小千谷市</option>'+
                                                                   '<option value="15209">加茂市</option>'+
                                                                   '<option value="15210">十日町市</option>'+
                                                                   '<option value="15211">見附市</option>'+
                                                                   '<option value="15212">村上市</option>'+
                                                                   '<option value="15213">燕市</option>'+
                                                                   '<option value="15216">糸魚川市</option>'+
                                                                   '<option value="15217">妙高市</option>'+
                                                                   '<option value="15218">五泉市</option>'+
                                                                   '<option value="15222">上越市</option>'+
                                                                   '<option value="15223">阿賀野市</option>'+
                                                                   '<option value="15224">佐渡市</option>'+
                                                                   '<option value="15225">魚沼市</option>'+
                                                                   '<option value="15226">南魚沼市</option>'+
                                                                   '<option value="15227">胎内市</option>'+
                                                                   '<option value="15307">聖籠町</option>'+
                                                                   '<option value="15342">弥彦村</option>'+
                                                                   '<option value="15361">田上町</option>'+
                                                                   '<option value="15385">阿賀町</option>'+
                                                                   '<option value="15405">出雲崎町</option>'+
                                                                   '<option value="15461">湯沢町</option>'+
                                                                   '<option value="15482">津南町</option>'+
                                                                   '<option value="15504">刈羽村</option>'+
                                                                   '<option value="15581">関川村</option>'+
                                                                   '<option value="15586">粟島浦村</option>'+
								   '</select>'
		break;
	case "16000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="16201">富山市</option>'+
                                                                   '<option value="16202">高岡市</option>'+
                                                                   '<option value="16204">魚津市</option>'+
                                                                   '<option value="16205">氷見市</option>'+
                                                                   '<option value="16206">滑川市</option>'+
                                                                   '<option value="16207">黒部市</option>'+
                                                                   '<option value="16208">砺波市</option>'+
                                                                   '<option value="16209">小矢部市</option>'+
                                                                   '<option value="16210">南砺市</option>'+
                                                                   '<option value="16211">射水市</option>'+
                                                                   '<option value="16321">舟橋村</option>'+
                                                                   '<option value="16322">上市町</option>'+
                                                                   '<option value="16323">立山町</option>'+
                                                                   '<option value="16342">入善町</option>'+
                                                                   '<option value="16343">朝日町</option>'+
								   '</select>'
		break;
	case "17000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="17201">金沢市</option>'+
                                                                   '<option value="17202">七尾市</option>'+
                                                                   '<option value="17203">小松市</option>'+
                                                                   '<option value="17204">輪島市</option>'+
                                                                   '<option value="17205">珠洲市</option>'+
                                                                   '<option value="17206">加賀市</option>'+
                                                                   '<option value="17207">羽咋市</option>'+
                                                                   '<option value="17209">かほく市</option>'+
                                                                   '<option value="17210">白山市</option>'+
                                                                   '<option value="17211">能美市</option>'+
                                                                   '<option value="17212">野々市市</option>'+
                                                                   '<option value="17324">川北町</option>'+
                                                                   '<option value="17361">津幡町</option>'+
                                                                   '<option value="17365">内灘町</option>'+
                                                                   '<option value="17384">志賀町</option>'+
                                                                   '<option value="17386">宝達志水町</option>'+
                                                                   '<option value="17407">中能登町</option>'+
                                                                   '<option value="17461">穴水町</option>'+
                                                                   '<option value="17463">能登町</option>'+
								   '</select>'
		break;
	case "18000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="18201">福井市</option>'+
                                                                   '<option value="18202">敦賀市</option>'+
                                                                   '<option value="18204">小浜市</option>'+
                                                                   '<option value="18205">大野市</option>'+
                                                                   '<option value="18206">勝山市</option>'+
                                                                   '<option value="18207">鯖江市</option>'+
                                                                   '<option value="18208">あわら市</option>'+
                                                                   '<option value="18209">越前市</option>'+
                                                                   '<option value="18210">坂井市</option>'+
                                                                   '<option value="18322">永平寺町</option>'+
                                                                   '<option value="18382">池田町</option>'+
                                                                   '<option value="18404">南越前町</option>'+
                                                                   '<option value="18423">越前町</option>'+
                                                                   '<option value="18442">美浜町</option>'+
                                                                   '<option value="18481">高浜町</option>'+
                                                                   '<option value="18483">おおい町</option>'+
                                                                   '<option value="18501">若狭町</option>'+
								   '</select>'
		break;
	case "19000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="19201">甲府市</option>'+
                                                                   '<option value="19202">富士吉田市</option>'+
                                                                   '<option value="19204">都留市</option>'+
                                                                   '<option value="19205">山梨市</option>'+
                                                                   '<option value="19206">大月市</option>'+
                                                                   '<option value="19207">韮崎市</option>'+
                                                                   '<option value="19208">南アルプス市</option>'+
                                                                   '<option value="19209">北杜市</option>'+
                                                                   '<option value="19210">甲斐市</option>'+
                                                                   '<option value="19211">笛吹市</option>'+
                                                                   '<option value="19212">上野原市</option>'+
                                                                   '<option value="19213">甲州市</option>'+
                                                                   '<option value="19214">中央市</option>'+
                                                                   '<option value="19346">市川三郷町</option>'+
                                                                   '<option value="19364">早川町</option>'+
                                                                   '<option value="19365">身延町</option>'+
                                                                   '<option value="19366">南部町</option>'+
                                                                   '<option value="19368">富士川町</option>'+
                                                                   '<option value="19384">昭和町</option>'+
                                                                   '<option value="19422">道志村</option>'+
                                                                   '<option value="19423">西桂町</option>'+
                                                                   '<option value="19424">忍野村</option>'+
                                                                   '<option value="19425">山中湖村</option>'+
                                                                   '<option value="19429">鳴沢村</option>'+
                                                                   '<option value="19430">富士河口湖町</option>'+
                                                                   '<option value="19442">小菅村</option>'+
                                                                   '<option value="19443">丹波山村</option>'+
								   '</select>'
		break;
	case "20000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="20201">長野市</option>'+
                                                                   '<option value="20202">松本市</option>'+
                                                                   '<option value="20203">上田市</option>'+
                                                                   '<option value="20204">岡谷市</option>'+
                                                                   '<option value="20205">飯田市</option>'+
                                                                   '<option value="20206">諏訪市</option>'+
                                                                   '<option value="20207">須坂市</option>'+
                                                                   '<option value="20208">小諸市</option>'+
                                                                   '<option value="20209">伊那市</option>'+
                                                                   '<option value="20210">駒ヶ根市</option>'+
                                                                   '<option value="20211">中野市</option>'+
                                                                   '<option value="20212">大町市</option>'+
                                                                   '<option value="20213">飯山市</option>'+
                                                                   '<option value="20214">茅野市</option>'+
                                                                   '<option value="20215">塩尻市</option>'+
                                                                   '<option value="20217">佐久市</option>'+
                                                                   '<option value="20218">千曲市</option>'+
                                                                   '<option value="20219">東御市</option>'+
                                                                   '<option value="20220">安曇野市</option>'+
                                                                   '<option value="20303">小海町</option>'+
                                                                   '<option value="20304">川上村</option>'+
                                                                   '<option value="20305">南牧村</option>'+
                                                                   '<option value="20306">南相木村</option>'+
                                                                   '<option value="20307">北相木村</option>'+
                                                                   '<option value="20309">佐久穂町</option>'+
                                                                   '<option value="20321">軽井沢町</option>'+
                                                                   '<option value="20323">御代田町</option>'+
                                                                   '<option value="20324">立科町</option>'+
                                                                   '<option value="20349">青木村</option>'+
                                                                   '<option value="20350">長和町</option>'+
                                                                   '<option value="20361">下諏訪町</option>'+
                                                                   '<option value="20362">富士見町</option>'+
                                                                   '<option value="20363">原村</option>'+
                                                                   '<option value="20382">辰野町</option>'+
                                                                   '<option value="20383">箕輪町</option>'+
                                                                   '<option value="20384">飯島町</option>'+
                                                                   '<option value="20385">南箕輪村</option>'+
                                                                   '<option value="20386">中川村</option>'+
                                                                   '<option value="20388">宮田村</option>'+
                                                                   '<option value="20402">松川町</option>'+
                                                                   '<option value="20403">高森町</option>'+
                                                                   '<option value="20404">阿南町</option>'+
                                                                   '<option value="20407">阿智村</option>'+
                                                                   '<option value="20409">平谷村</option>'+
                                                                   '<option value="20410">根羽村</option>'+
                                                                   '<option value="20411">下條村</option>'+
                                                                   '<option value="20412">売木村</option>'+
                                                                   '<option value="20413">天龍村</option>'+
                                                                   '<option value="20414">泰阜村</option>'+
                                                                   '<option value="20415">喬木村</option>'+
                                                                   '<option value="20416">豊丘村</option>'+
                                                                   '<option value="20417">大鹿村</option>'+
                                                                   '<option value="20422">上松町</option>'+
                                                                   '<option value="20423">南木曽町</option>'+
                                                                   '<option value="20425">木祖村</option>'+
                                                                   '<option value="20429">王滝村</option>'+
                                                                   '<option value="20430">大桑村</option>'+
                                                                   '<option value="20432">木曽町</option>'+
                                                                   '<option value="20446">麻績村</option>'+
                                                                   '<option value="20448">生坂村</option>'+
                                                                   '<option value="20450">山形村</option>'+
                                                                   '<option value="20451">朝日村</option>'+
                                                                   '<option value="20452">筑北村</option>'+
                                                                   '<option value="20481">池田町</option>'+
                                                                   '<option value="20482">松川村</option>'+
                                                                   '<option value="20485">白馬村</option>'+
                                                                   '<option value="20486">小谷村</option>'+
                                                                   '<option value="20521">坂城町</option>'+
                                                                   '<option value="20541">小布施町</option>'+
                                                                   '<option value="20543">高山村</option>'+
                                                                   '<option value="20561">山ノ内町</option>'+
                                                                   '<option value="20562">木島平村</option>'+
                                                                   '<option value="20563">野沢温泉村</option>'+
                                                                   '<option value="20583">信濃町</option>'+
                                                                   '<option value="20588">小川村</option>'+
                                                                   '<option value="20590">飯綱町</option>'+
                                                                   '<option value="20602">栄村</option>'+
								   '</select>'
		break;
	case "21000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="21201">岐阜市</option>'+
                                                                   '<option value="21202">大垣市</option>'+
                                                                   '<option value="21203">高山市</option>'+
                                                                   '<option value="21204">多治見市</option>'+
                                                                   '<option value="21205">関市</option>'+
                                                                   '<option value="21206">中津川市</option>'+
                                                                   '<option value="21207">美濃市</option>'+
                                                                   '<option value="21208">瑞浪市</option>'+
                                                                   '<option value="21209">羽島市</option>'+
                                                                   '<option value="21210">恵那市</option>'+
                                                                   '<option value="21211">美濃加茂市</option>'+
                                                                   '<option value="21212">土岐市</option>'+
                                                                   '<option value="21213">各務原市</option>'+
                                                                   '<option value="21214">可児市</option>'+
                                                                   '<option value="21215">山県市</option>'+
                                                                   '<option value="21216">瑞穂市</option>'+
                                                                   '<option value="21217">飛騨市</option>'+
                                                                   '<option value="21218">本巣市</option>'+
                                                                   '<option value="21219">郡上市</option>'+
                                                                   '<option value="21220">下呂市</option>'+
                                                                   '<option value="21221">海津市</option>'+
                                                                   '<option value="21302">岐南町</option>'+
                                                                   '<option value="21303">笠松町</option>'+
                                                                   '<option value="21341">養老町</option>'+
                                                                   '<option value="21361">垂井町</option>'+
                                                                   '<option value="21362">関ケ原町</option>'+
                                                                   '<option value="21381">神戸町</option>'+
                                                                   '<option value="21382">輪之内町</option>'+
                                                                   '<option value="21383">安八町</option>'+
                                                                   '<option value="21401">揖斐川町</option>'+
                                                                   '<option value="21403">大野町</option>'+
                                                                   '<option value="21404">池田町</option>'+
                                                                   '<option value="21421">北方町</option>'+
                                                                   '<option value="21501">坂祝町</option>'+
                                                                   '<option value="21502">富加町</option>'+
                                                                   '<option value="21503">川辺町</option>'+
                                                                   '<option value="21504">七宗町</option>'+
                                                                   '<option value="21505">八百津町</option>'+
                                                                   '<option value="21506">白川町</option>'+
                                                                   '<option value="21507">東白川村</option>'+
                                                                   '<option value="21521">御嵩町</option>'+
                                                                   '<option value="21604">白川村</option>'+
								   '</select>'
		break;
	case "22000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="22100">静岡市</option>'+
                                                                   '<option value="22101">静岡市葵区</option>'+
                                                                   '<option value="22102">静岡市駿河区</option>'+
                                                                   '<option value="22103">静岡市清水区</option>'+
                                                                   '<option value="22130">浜松市</option>'+
                                                                   '<option value="22131">浜松市中区</option>'+
                                                                   '<option value="22132">浜松市東区</option>'+
                                                                   '<option value="22133">浜松市西区</option>'+
                                                                   '<option value="22134">浜松市南区</option>'+
                                                                   '<option value="22135">浜松市北区</option>'+
                                                                   '<option value="22136">浜松市浜北区</option>'+
                                                                   '<option value="22137">浜松市天竜区</option>'+
                                                                   '<option value="22203">沼津市</option>'+
                                                                   '<option value="22205">熱海市</option>'+
                                                                   '<option value="22206">三島市</option>'+
                                                                   '<option value="22207">富士宮市</option>'+
                                                                   '<option value="22208">伊東市</option>'+
                                                                   '<option value="22209">島田市</option>'+
                                                                   '<option value="22210">富士市</option>'+
                                                                   '<option value="22211">磐田市</option>'+
                                                                   '<option value="22212">焼津市</option>'+
                                                                   '<option value="22213">掛川市</option>'+
                                                                   '<option value="22214">藤枝市</option>'+
                                                                   '<option value="22215">御殿場市</option>'+
                                                                   '<option value="22216">袋井市</option>'+
                                                                   '<option value="22219">下田市</option>'+
                                                                   '<option value="22220">裾野市</option>'+
                                                                   '<option value="22221">湖西市</option>'+
                                                                   '<option value="22222">伊豆市</option>'+
                                                                   '<option value="22223">御前崎市</option>'+
                                                                   '<option value="22224">菊川市</option>'+
                                                                   '<option value="22225">伊豆の国市</option>'+
                                                                   '<option value="22226">牧之原市</option>'+
                                                                   '<option value="22301">東伊豆町</option>'+
                                                                   '<option value="22302">河津町</option>'+
                                                                   '<option value="22304">南伊豆町</option>'+
                                                                   '<option value="22305">松崎町</option>'+
                                                                   '<option value="22306">西伊豆町</option>'+
                                                                   '<option value="22325">函南町</option>'+
                                                                   '<option value="22341">清水町</option>'+
                                                                   '<option value="22342">長泉町</option>'+
                                                                   '<option value="22344">小山町</option>'+
                                                                   '<option value="22424">吉田町</option>'+
                                                                   '<option value="22429">川根本町</option>'+
                                                                   '<option value="22461">森町</option>'+
								   '</select>'
		break;
	case "23000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="23100">名古屋市</option>'+
                                                                   '<option value="23101">名古屋市千種区</option>'+
                                                                   '<option value="23102">名古屋市東区</option>'+
                                                                   '<option value="23103">名古屋市北区</option>'+
                                                                   '<option value="23104">名古屋市西区</option>'+
                                                                   '<option value="23105">名古屋市中村区</option>'+
                                                                   '<option value="23106">名古屋市中区</option>'+
                                                                   '<option value="23107">名古屋市昭和区</option>'+
                                                                   '<option value="23108">名古屋市瑞穂区</option>'+
                                                                   '<option value="23109">名古屋市熱田区</option>'+
                                                                   '<option value="23110">名古屋市中川区</option>'+
                                                                   '<option value="23111">名古屋市港区</option>'+
                                                                   '<option value="23112">名古屋市南区</option>'+
                                                                   '<option value="23113">名古屋市守山区</option>'+
                                                                   '<option value="23114">名古屋市緑区</option>'+
                                                                   '<option value="23115">名古屋市名東区</option>'+
                                                                   '<option value="23116">名古屋市天白区</option>'+
                                                                   '<option value="23201">豊橋市</option>'+
                                                                   '<option value="23202">岡崎市</option>'+
                                                                   '<option value="23203">一宮市</option>'+
                                                                   '<option value="23204">瀬戸市</option>'+
                                                                   '<option value="23205">半田市</option>'+
                                                                   '<option value="23206">春日井市</option>'+
                                                                   '<option value="23207">豊川市</option>'+
                                                                   '<option value="23208">津島市</option>'+
                                                                   '<option value="23209">碧南市</option>'+
                                                                   '<option value="23210">刈谷市</option>'+
                                                                   '<option value="23211">豊田市</option>'+
                                                                   '<option value="23212">安城市</option>'+
                                                                   '<option value="23213">西尾市</option>'+
                                                                   '<option value="23214">蒲郡市</option>'+
                                                                   '<option value="23215">犬山市</option>'+
                                                                   '<option value="23216">常滑市</option>'+
                                                                   '<option value="23217">江南市</option>'+
                                                                   '<option value="23219">小牧市</option>'+
                                                                   '<option value="23220">稲沢市</option>'+
                                                                   '<option value="23221">新城市</option>'+
                                                                   '<option value="23222">東海市</option>'+
                                                                   '<option value="23223">大府市</option>'+
                                                                   '<option value="23224">知多市</option>'+
                                                                   '<option value="23225">知立市</option>'+
                                                                   '<option value="23226">尾張旭市</option>'+
                                                                   '<option value="23227">高浜市</option>'+
                                                                   '<option value="23228">岩倉市</option>'+
                                                                   '<option value="23229">豊明市</option>'+
                                                                   '<option value="23230">日進市</option>'+
                                                                   '<option value="23231">田原市</option>'+
                                                                   '<option value="23232">愛西市</option>'+
                                                                   '<option value="23233">清須市</option>'+
                                                                   '<option value="23234">北名古屋市</option>'+
                                                                   '<option value="23235">弥富市</option>'+
                                                                   '<option value="23236">みよし市</option>'+
                                                                   '<option value="23237">あま市</option>'+
                                                                   '<option value="23238">長久手市</option>'+
                                                                   '<option value="23302">東郷町</option>'+
                                                                   '<option value="23342">豊山町</option>'+
                                                                   '<option value="23361">大口町</option>'+
                                                                   '<option value="23362">扶桑町</option>'+
                                                                   '<option value="23424">大治町</option>'+
                                                                   '<option value="23425">蟹江町</option>'+
                                                                   '<option value="23427">飛島村</option>'+
                                                                   '<option value="23441">阿久比町</option>'+
                                                                   '<option value="23442">東浦町</option>'+
                                                                   '<option value="23445">南知多町</option>'+
                                                                   '<option value="23446">美浜町</option>'+
                                                                   '<option value="23447">武豊町</option>'+
                                                                   '<option value="23501">幸田町</option>'+
                                                                   '<option value="23561">設楽町</option>'+
                                                                   '<option value="23562">東栄町</option>'+
                                                                   '<option value="23563">豊根村</option>'+
								   '</select>'
		break;
	case "24000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="24201">津市</option>'+
                                                                   '<option value="24202">四日市市</option>'+
                                                                   '<option value="24203">伊勢市</option>'+
                                                                   '<option value="24204">松阪市</option>'+
                                                                   '<option value="24205">桑名市</option>'+
                                                                   '<option value="24207">鈴鹿市</option>'+
                                                                   '<option value="24208">名張市</option>'+
                                                                   '<option value="24209">尾鷲市</option>'+
                                                                   '<option value="24210">亀山市</option>'+
                                                                   '<option value="24211">鳥羽市</option>'+
                                                                   '<option value="24212">熊野市</option>'+
                                                                   '<option value="24214">いなべ市</option>'+
                                                                   '<option value="24215">志摩市</option>'+
                                                                   '<option value="24216">伊賀市</option>'+
                                                                   '<option value="24303">木曽岬町</option>'+
                                                                   '<option value="24324">東員町</option>'+
                                                                   '<option value="24341">菰野町</option>'+
                                                                   '<option value="24343">朝日町</option>'+
                                                                   '<option value="24344">川越町</option>'+
                                                                   '<option value="24441">多気町</option>'+
                                                                   '<option value="24442">明和町</option>'+
                                                                   '<option value="24443">大台町</option>'+
                                                                   '<option value="24461">玉城町</option>'+
                                                                   '<option value="24470">度会町</option>'+
                                                                   '<option value="24471">大紀町</option>'+
                                                                   '<option value="24472">南伊勢町</option>'+
                                                                   '<option value="24543">紀北町</option>'+
                                                                   '<option value="24561">御浜町</option>'+
                                                                   '<option value="24562">紀宝町</option>'+
								   '</select>'
		break;
	case "25000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="25201">大津市</option>'+
                                                                   '<option value="25202">彦根市</option>'+
                                                                   '<option value="25203">長浜市</option>'+
                                                                   '<option value="25204">近江八幡市</option>'+
                                                                   '<option value="25206">草津市</option>'+
                                                                   '<option value="25207">守山市</option>'+
                                                                   '<option value="25208">栗東市</option>'+
                                                                   '<option value="25209">甲賀市</option>'+
                                                                   '<option value="25210">野洲市</option>'+
                                                                   '<option value="25211">湖南市</option>'+
                                                                   '<option value="25212">高島市</option>'+
                                                                   '<option value="25213">東近江市</option>'+
                                                                   '<option value="25214">米原市</option>'+
                                                                   '<option value="25383">日野町</option>'+
                                                                   '<option value="25384">竜王町</option>'+
                                                                   '<option value="25425">愛荘町</option>'+
                                                                   '<option value="25441">豊郷町</option>'+
                                                                   '<option value="25442">甲良町</option>'+
                                                                   '<option value="25443">多賀町</option>'+
								   '</select>'
		break;
	case "26000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="26100">京都市</option>'+
                                                                   '<option value="26101">京都市北区</option>'+
                                                                   '<option value="26102">京都市上京区</option>'+
                                                                   '<option value="26103">京都市左京区</option>'+
                                                                   '<option value="26104">京都市中京区</option>'+
                                                                   '<option value="26105">京都市東山区</option>'+
                                                                   '<option value="26106">京都市下京区</option>'+
                                                                   '<option value="26107">京都市南区</option>'+
                                                                   '<option value="26108">京都市右京区</option>'+
                                                                   '<option value="26109">京都市伏見区</option>'+
                                                                   '<option value="26110">京都市山科区</option>'+
                                                                   '<option value="26111">京都市西京区</option>'+
                                                                   '<option value="26201">福知山市</option>'+
                                                                   '<option value="26202">舞鶴市</option>'+
                                                                   '<option value="26203">綾部市</option>'+
                                                                   '<option value="26204">宇治市</option>'+
                                                                   '<option value="26205">宮津市</option>'+
                                                                   '<option value="26206">亀岡市</option>'+
                                                                   '<option value="26207">城陽市</option>'+
                                                                   '<option value="26208">向日市</option>'+
                                                                   '<option value="26209">長岡京市</option>'+
                                                                   '<option value="26210">八幡市</option>'+
                                                                   '<option value="26211">京田辺市</option>'+
                                                                   '<option value="26212">京丹後市</option>'+
                                                                   '<option value="26213">南丹市</option>'+
                                                                   '<option value="26214">木津川市</option>'+
                                                                   '<option value="26303">大山崎町</option>'+
                                                                   '<option value="26322">久御山町</option>'+
                                                                   '<option value="26343">井手町</option>'+
                                                                   '<option value="26344">宇治田原町</option>'+
                                                                   '<option value="26364">笠置町</option>'+
                                                                   '<option value="26365">和束町</option>'+
                                                                   '<option value="26366">精華町</option>'+
                                                                   '<option value="26367">南山城村</option>'+
                                                                   '<option value="26407">京丹波町</option>'+
                                                                   '<option value="26463">伊根町</option>'+
                                                                   '<option value="26465">与謝野町</option>'+
								   '</select>'
		break;
	case "27000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="27100">大阪市</option>'+
                                                                   '<option value="27102">大阪市都島区</option>'+
                                                                   '<option value="27103">大阪市福島区</option>'+
                                                                   '<option value="27104">大阪市此花区</option>'+
                                                                   '<option value="27106">大阪市西区</option>'+
                                                                   '<option value="27107">大阪市港区</option>'+
                                                                   '<option value="27108">大阪市大正区</option>'+
                                                                   '<option value="27109">大阪市天王寺区</option>'+
                                                                   '<option value="27111">大阪市浪速区</option>'+
                                                                   '<option value="27113">大阪市西淀川区</option>'+
                                                                   '<option value="27114">大阪市東淀川区</option>'+
                                                                   '<option value="27115">大阪市東成区</option>'+
                                                                   '<option value="27116">大阪市生野区</option>'+
                                                                   '<option value="27117">大阪市旭区</option>'+
                                                                   '<option value="27118">大阪市城東区</option>'+
                                                                   '<option value="27119">大阪市阿倍野区</option>'+
                                                                   '<option value="27120">大阪市住吉区</option>'+
                                                                   '<option value="27121">大阪市東住吉区</option>'+
                                                                   '<option value="27122">大阪市西成区</option>'+
                                                                   '<option value="27123">大阪市淀川区</option>'+
                                                                   '<option value="27124">大阪市鶴見区</option>'+
                                                                   '<option value="27125">大阪市住之江区</option>'+
                                                                   '<option value="27126">大阪市平野区</option>'+
                                                                   '<option value="27127">大阪市北区</option>'+
                                                                   '<option value="27128">大阪市中央区</option>'+
                                                                   '<option value="27140">堺市</option>'+
                                                                   '<option value="27141">堺市堺区</option>'+
                                                                   '<option value="27142">堺市中区</option>'+
                                                                   '<option value="27143">堺市東区</option>'+
                                                                   '<option value="27144">堺市西区</option>'+
                                                                   '<option value="27145">堺市南区</option>'+
                                                                   '<option value="27146">堺市北区</option>'+
                                                                   '<option value="27147">堺市美原区</option>'+
                                                                   '<option value="27202">岸和田市</option>'+
                                                                   '<option value="27203">豊中市</option>'+
                                                                   '<option value="27204">池田市</option>'+
                                                                   '<option value="27205">吹田市</option>'+
                                                                   '<option value="27206">泉大津市</option>'+
                                                                   '<option value="27207">高槻市</option>'+
                                                                   '<option value="27208">貝塚市</option>'+
                                                                   '<option value="27209">守口市</option>'+
                                                                   '<option value="27210">枚方市</option>'+
                                                                   '<option value="27211">茨木市</option>'+
                                                                   '<option value="27212">八尾市</option>'+
                                                                   '<option value="27213">泉佐野市</option>'+
                                                                   '<option value="27214">富田林市</option>'+
                                                                   '<option value="27215">寝屋川市</option>'+
                                                                   '<option value="27216">河内長野市</option>'+
                                                                   '<option value="27217">松原市</option>'+
                                                                   '<option value="27218">大東市</option>'+
                                                                   '<option value="27219">和泉市</option>'+
                                                                   '<option value="27220">箕面市</option>'+
                                                                   '<option value="27221">柏原市</option>'+
                                                                   '<option value="27222">羽曳野市</option>'+
                                                                   '<option value="27223">門真市</option>'+
                                                                   '<option value="27224">摂津市</option>'+
                                                                   '<option value="27225">高石市</option>'+
                                                                   '<option value="27226">藤井寺市</option>'+
                                                                   '<option value="27227">東大阪市</option>'+
                                                                   '<option value="27228">泉南市</option>'+
                                                                   '<option value="27229">四條畷市</option>'+
                                                                   '<option value="27230">交野市</option>'+
                                                                   '<option value="27231">大阪狭山市</option>'+
                                                                   '<option value="27232">阪南市</option>'+
                                                                   '<option value="27301">島本町</option>'+
                                                                   '<option value="27321">豊能町</option>'+
                                                                   '<option value="27322">能勢町</option>'+
                                                                   '<option value="27341">忠岡町</option>'+
                                                                   '<option value="27361">熊取町</option>'+
                                                                   '<option value="27362">田尻町</option>'+
                                                                   '<option value="27366">岬町</option>'+
                                                                   '<option value="27381">太子町</option>'+
                                                                   '<option value="27382">河南町</option>'+
                                                                   '<option value="27383">千早赤阪村</option>'+
								   '</select>'
		break;
	case "28000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="28100">神戸市</option>'+
                                                                   '<option value="28101">神戸市東灘区</option>'+
                                                                   '<option value="28102">神戸市灘区</option>'+
                                                                   '<option value="28105">神戸市兵庫区</option>'+
                                                                   '<option value="28106">神戸市長田区</option>'+
                                                                   '<option value="28107">神戸市須磨区</option>'+
                                                                   '<option value="28108">神戸市垂水区</option>'+
                                                                   '<option value="28109">神戸市北区</option>'+
                                                                   '<option value="28110">神戸市中央区</option>'+
                                                                   '<option value="28111">神戸市西区</option>'+
                                                                   '<option value="28201">姫路市</option>'+
                                                                   '<option value="28202">尼崎市</option>'+
                                                                   '<option value="28203">明石市</option>'+
                                                                   '<option value="28204">西宮市</option>'+
                                                                   '<option value="28205">洲本市</option>'+
                                                                   '<option value="28206">芦屋市</option>'+
                                                                   '<option value="28207">伊丹市</option>'+
                                                                   '<option value="28208">相生市</option>'+
                                                                   '<option value="28209">豊岡市</option>'+
                                                                   '<option value="28210">加古川市</option>'+
                                                                   '<option value="28212">赤穂市</option>'+
                                                                   '<option value="28213">西脇市</option>'+
                                                                   '<option value="28214">宝塚市</option>'+
                                                                   '<option value="28215">三木市</option>'+
                                                                   '<option value="28216">高砂市</option>'+
                                                                   '<option value="28217">川西市</option>'+
                                                                   '<option value="28218">小野市</option>'+
                                                                   '<option value="28219">三田市</option>'+
                                                                   '<option value="28220">加西市</option>'+
                                                                   '<option value="28221">篠山市</option>'+
                                                                   '<option value="28222">養父市</option>'+
                                                                   '<option value="28223">丹波市</option>'+
                                                                   '<option value="28224">南あわじ市</option>'+
                                                                   '<option value="28225">朝来市</option>'+
                                                                   '<option value="28226">淡路市</option>'+
                                                                   '<option value="28227">宍粟市</option>'+
                                                                   '<option value="28228">加東市</option>'+
                                                                   '<option value="28229">たつの市</option>'+
                                                                   '<option value="28301">猪名川町</option>'+
                                                                   '<option value="28365">多可町</option>'+
                                                                   '<option value="28381">稲美町</option>'+
                                                                   '<option value="28382">播磨町</option>'+
                                                                   '<option value="28442">市川町</option>'+
                                                                   '<option value="28443">福崎町</option>'+
                                                                   '<option value="28446">神河町</option>'+
                                                                   '<option value="28464">太子町</option>'+
                                                                   '<option value="28481">上郡町</option>'+
                                                                   '<option value="28501">佐用町</option>'+
                                                                   '<option value="28585">香美町</option>'+
                                                                   '<option value="28586">新温泉町</option>'+
								   '</select>'
		break;
	case "29000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="29201">奈良市</option>'+
                                                                   '<option value="29202">大和高田市</option>'+
                                                                   '<option value="29203">大和郡山市</option>'+
                                                                   '<option value="29204">天理市</option>'+
                                                                   '<option value="29205">橿原市</option>'+
                                                                   '<option value="29206">桜井市</option>'+
                                                                   '<option value="29207">五條市</option>'+
                                                                   '<option value="29208">御所市</option>'+
                                                                   '<option value="29209">生駒市</option>'+
                                                                   '<option value="29210">香芝市</option>'+
                                                                   '<option value="29211">葛城市</option>'+
                                                                   '<option value="29212">宇陀市</option>'+
                                                                   '<option value="29322">山添村</option>'+
                                                                   '<option value="29342">平群町</option>'+
                                                                   '<option value="29343">三郷町</option>'+
                                                                   '<option value="29344">斑鳩町</option>'+
                                                                   '<option value="29345">安堵町</option>'+
                                                                   '<option value="29361">川西町</option>'+
                                                                   '<option value="29362">三宅町</option>'+
                                                                   '<option value="29363">田原本町</option>'+
                                                                   '<option value="29385">曽爾村</option>'+
                                                                   '<option value="29386">御杖村</option>'+
                                                                   '<option value="29401">高取町</option>'+
                                                                   '<option value="29402">明日香村</option>'+
                                                                   '<option value="29424">上牧町</option>'+
                                                                   '<option value="29425">王寺町</option>'+
                                                                   '<option value="29426">広陵町</option>'+
                                                                   '<option value="29427">河合町</option>'+
                                                                   '<option value="29441">吉野町</option>'+
                                                                   '<option value="29442">大淀町</option>'+
                                                                   '<option value="29443">下市町</option>'+
                                                                   '<option value="29444">黒滝村</option>'+
                                                                   '<option value="29446">天川村</option>'+
                                                                   '<option value="29447">野迫川村</option>'+
                                                                   '<option value="29449">十津川村</option>'+
                                                                   '<option value="29450">下北山村</option>'+
                                                                   '<option value="29451">上北山村</option>'+
                                                                   '<option value="29452">川上村</option>'+
                                                                   '<option value="29453">東吉野村</option>'+
								   '</select>'
		break;
	case "30000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="30201">和歌山市</option>'+
                                                                   '<option value="30202">海南市</option>'+
                                                                   '<option value="30203">橋本市</option>'+
                                                                   '<option value="30204">有田市</option>'+
                                                                   '<option value="30205">御坊市</option>'+
                                                                   '<option value="30206">田辺市</option>'+
                                                                   '<option value="30207">新宮市</option>'+
                                                                   '<option value="30208">紀の川市</option>'+
                                                                   '<option value="30209">岩出市</option>'+
                                                                   '<option value="30304">紀美野町</option>'+
                                                                   '<option value="30341">かつらぎ町</option>'+
                                                                   '<option value="30343">九度山町</option>'+
                                                                   '<option value="30344">高野町</option>'+
                                                                   '<option value="30361">湯浅町</option>'+
                                                                   '<option value="30362">広川町</option>'+
                                                                   '<option value="30366">有田川町</option>'+
                                                                   '<option value="30381">美浜町</option>'+
                                                                   '<option value="30382">日高町</option>'+
                                                                   '<option value="30383">由良町</option>'+
                                                                   '<option value="30390">印南町</option>'+
                                                                   '<option value="30391">みなべ町</option>'+
                                                                   '<option value="30392">日高川町</option>'+
                                                                   '<option value="30401">白浜町</option>'+
                                                                   '<option value="30404">上富田町</option>'+
                                                                   '<option value="30406">すさみ町</option>'+
                                                                   '<option value="30421">那智勝浦町</option>'+
                                                                   '<option value="30422">太地町</option>'+
                                                                   '<option value="30424">古座川町</option>'+
                                                                   '<option value="30427">北山村</option>'+
                                                                   '<option value="30428">串本町</option>'+
								   '</select>'
		break;
	case "31000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="31201">鳥取市</option>'+
                                                                   '<option value="31202">米子市</option>'+
                                                                   '<option value="31203">倉吉市</option>'+
                                                                   '<option value="31204">境港市</option>'+
                                                                   '<option value="31302">岩美町</option>'+
                                                                   '<option value="31325">若桜町</option>'+
                                                                   '<option value="31328">智頭町</option>'+
                                                                   '<option value="31329">八頭町</option>'+
                                                                   '<option value="31364">三朝町</option>'+
                                                                   '<option value="31370">湯梨浜町</option>'+
                                                                   '<option value="31371">琴浦町</option>'+
                                                                   '<option value="31372">北栄町</option>'+
                                                                   '<option value="31384">日吉津村</option>'+
                                                                   '<option value="31386">大山町</option>'+
                                                                   '<option value="31389">南部町</option>'+
                                                                   '<option value="31390">伯耆町</option>'+
                                                                   '<option value="31401">日南町</option>'+
                                                                   '<option value="31402">日野町</option>'+
                                                                   '<option value="31403">江府町</option>'+
								   '</select>'
		break;
	case "32000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="32201">松江市</option>'+
                                                                   '<option value="32202">浜田市</option>'+
                                                                   '<option value="32203">出雲市</option>'+
                                                                   '<option value="32204">益田市</option>'+
                                                                   '<option value="32205">大田市</option>'+
                                                                   '<option value="32206">安来市</option>'+
                                                                   '<option value="32207">江津市</option>'+
                                                                   '<option value="32209">雲南市</option>'+
                                                                   '<option value="32343">奥出雲町</option>'+
                                                                   '<option value="32386">飯南町</option>'+
                                                                   '<option value="32441">川本町</option>'+
                                                                   '<option value="32448">美郷町</option>'+
                                                                   '<option value="32449">邑南町</option>'+
                                                                   '<option value="32501">津和野町</option>'+
                                                                   '<option value="32505">吉賀町</option>'+
                                                                   '<option value="32525">海士町</option>'+
                                                                   '<option value="32526">西ノ島町</option>'+
                                                                   '<option value="32527">知夫村</option>'+
                                                                   '<option value="32528">隠岐の島町</option>'+
								   '</select>'
		break;
	case "33000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="33100">岡山市</option>'+
                                                                   '<option value="33101">岡山市北区</option>'+
                                                                   '<option value="33102">岡山市中区</option>'+
                                                                   '<option value="33103">岡山市東区</option>'+
                                                                   '<option value="33104">岡山市南区</option>'+
                                                                   '<option value="33202">倉敷市</option>'+
                                                                   '<option value="33203">津山市</option>'+
                                                                   '<option value="33204">玉野市</option>'+
                                                                   '<option value="33205">笠岡市</option>'+
                                                                   '<option value="33207">井原市</option>'+
                                                                   '<option value="33208">総社市</option>'+
                                                                   '<option value="33209">高梁市</option>'+
                                                                   '<option value="33210">新見市</option>'+
                                                                   '<option value="33211">備前市</option>'+
                                                                   '<option value="33212">瀬戸内市</option>'+
                                                                   '<option value="33213">赤磐市</option>'+
                                                                   '<option value="33214">真庭市</option>'+
                                                                   '<option value="33215">美作市</option>'+
                                                                   '<option value="33216">浅口市</option>'+
                                                                   '<option value="33346">和気町</option>'+
                                                                   '<option value="33423">早島町</option>'+
                                                                   '<option value="33445">里庄町</option>'+
                                                                   '<option value="33461">矢掛町</option>'+
                                                                   '<option value="33586">新庄村</option>'+
                                                                   '<option value="33606">鏡野町</option>'+
                                                                   '<option value="33622">勝央町</option>'+
                                                                   '<option value="33623">奈義町</option>'+
                                                                   '<option value="33643">西粟倉村</option>'+
                                                                   '<option value="33663">久米南町</option>'+
                                                                   '<option value="33666">美咲町</option>'+
                                                                   '<option value="33681">吉備中央町</option>'+
								   '</select>'
		break;
	case "34000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="34100">広島市</option>'+
                                                                   '<option value="34101">広島市中区</option>'+
                                                                   '<option value="34102">広島市東区</option>'+
                                                                   '<option value="34103">広島市南区</option>'+
                                                                   '<option value="34104">広島市西区</option>'+
                                                                   '<option value="34105">広島市安佐南区</option>'+
                                                                   '<option value="34106">広島市安佐北区</option>'+
                                                                   '<option value="34107">広島市安芸区</option>'+
                                                                   '<option value="34108">広島市佐伯区</option>'+
                                                                   '<option value="34202">呉市</option>'+
                                                                   '<option value="34203">竹原市</option>'+
                                                                   '<option value="34204">三原市</option>'+
                                                                   '<option value="34205">尾道市</option>'+
                                                                   '<option value="34207">福山市</option>'+
                                                                   '<option value="34208">府中市</option>'+
                                                                   '<option value="34209">三次市</option>'+
                                                                   '<option value="34210">庄原市</option>'+
                                                                   '<option value="34211">大竹市</option>'+
                                                                   '<option value="34212">東広島市</option>'+
                                                                   '<option value="34213">廿日市市</option>'+
                                                                   '<option value="34214">安芸高田市</option>'+
                                                                   '<option value="34215">江田島市</option>'+
                                                                   '<option value="34302">府中町</option>'+
                                                                   '<option value="34304">海田町</option>'+
                                                                   '<option value="34307">熊野町</option>'+
                                                                   '<option value="34309">坂町</option>'+
                                                                   '<option value="34368">安芸太田町</option>'+
                                                                   '<option value="34369">北広島町</option>'+
                                                                   '<option value="34431">大崎上島町</option>'+
                                                                   '<option value="34462">世羅町</option>'+
                                                                   '<option value="34545">神石高原町</option>'+
								   '</select>'
		break;
	case "35000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="35201">下関市</option>'+
                                                                   '<option value="35202">宇部市</option>'+
                                                                   '<option value="35203">山口市</option>'+
                                                                   '<option value="35204">萩市</option>'+
                                                                   '<option value="35206">防府市</option>'+
                                                                   '<option value="35207">下松市</option>'+
                                                                   '<option value="35208">岩国市</option>'+
                                                                   '<option value="35210">光市</option>'+
                                                                   '<option value="35211">長門市</option>'+
                                                                   '<option value="35212">柳井市</option>'+
                                                                   '<option value="35213">美祢市</option>'+
                                                                   '<option value="35215">周南市</option>'+
                                                                   '<option value="35216">山陽小野田市</option>'+
                                                                   '<option value="35305">周防大島町</option>'+
                                                                   '<option value="35321">和木町</option>'+
                                                                   '<option value="35341">上関町</option>'+
                                                                   '<option value="35343">田布施町</option>'+
                                                                   '<option value="35344">平生町</option>'+
                                                                   '<option value="35502">阿武町</option>'+
								   '</select>'
		break;
	case "36000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="36201">徳島市</option>'+
                                                                   '<option value="36202">鳴門市</option>'+
                                                                   '<option value="36203">小松島市</option>'+
                                                                   '<option value="36204">阿南市</option>'+
                                                                   '<option value="36205">吉野川市</option>'+
                                                                   '<option value="36206">阿波市</option>'+
                                                                   '<option value="36207">美馬市</option>'+
                                                                   '<option value="36208">三好市</option>'+
                                                                   '<option value="36301">勝浦町</option>'+
                                                                   '<option value="36302">上勝町</option>'+
                                                                   '<option value="36321">佐那河内村</option>'+
                                                                   '<option value="36341">石井町</option>'+
                                                                   '<option value="36342">神山町</option>'+
                                                                   '<option value="36368">那賀町</option>'+
                                                                   '<option value="36383">牟岐町</option>'+
                                                                   '<option value="36387">美波町</option>'+
                                                                   '<option value="36388">海陽町</option>'+
                                                                   '<option value="36401">松茂町</option>'+
                                                                   '<option value="36402">北島町</option>'+
                                                                   '<option value="36403">藍住町</option>'+
                                                                   '<option value="36404">板野町</option>'+
                                                                   '<option value="36405">上板町</option>'+
                                                                   '<option value="36468">つるぎ町</option>'+
                                                                   '<option value="36489">東みよし町</option>'+
								   '</select>'
		break;
	case "37000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="37201">高松市</option>'+
                                                                   '<option value="37202">丸亀市</option>'+
                                                                   '<option value="37203">坂出市</option>'+
                                                                   '<option value="37204">善通寺市</option>'+
                                                                   '<option value="37205">観音寺市</option>'+
                                                                   '<option value="37206">さぬき市</option>'+
                                                                   '<option value="37207">東かがわ市</option>'+
                                                                   '<option value="37208">三豊市</option>'+
                                                                   '<option value="37322">土庄町</option>'+
                                                                   '<option value="37324">小豆島町</option>'+
                                                                   '<option value="37341">三木町</option>'+
                                                                   '<option value="37364">直島町</option>'+
                                                                   '<option value="37386">宇多津町</option>'+
                                                                   '<option value="37387">綾川町</option>'+
                                                                   '<option value="37403">琴平町</option>'+
                                                                   '<option value="37404">多度津町</option>'+
                                                                   '<option value="37406">まんのう町</option>'+
								   '</select>'
		break;
	case "38000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="38201">松山市</option>'+
                                                                   '<option value="38202">今治市</option>'+
                                                                   '<option value="38203">宇和島市</option>'+
                                                                   '<option value="38204">八幡浜市</option>'+
                                                                   '<option value="38205">新居浜市</option>'+
                                                                   '<option value="38206">西条市</option>'+
                                                                   '<option value="38207">大洲市</option>'+
                                                                   '<option value="38210">伊予市</option>'+
                                                                   '<option value="38213">四国中央市</option>'+
                                                                   '<option value="38214">西予市</option>'+
                                                                   '<option value="38215">東温市</option>'+
                                                                   '<option value="38356">上島町</option>'+
                                                                   '<option value="38386">久万高原町</option>'+
                                                                   '<option value="38401">松前町</option>'+
                                                                   '<option value="38402">砥部町</option>'+
                                                                   '<option value="38422">内子町</option>'+
                                                                   '<option value="38442">伊方町</option>'+
                                                                   '<option value="38484">松野町</option>'+
                                                                   '<option value="38488">鬼北町</option>'+
                                                                   '<option value="38506">愛南町</option>'+
								   '</select>'
		break;
	case "39000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="39201">高知市</option>'+
                                                                   '<option value="39202">室戸市</option>'+
                                                                   '<option value="39203">安芸市</option>'+
                                                                   '<option value="39204">南国市</option>'+
                                                                   '<option value="39205">土佐市</option>'+
                                                                   '<option value="39206">須崎市</option>'+
                                                                   '<option value="39208">宿毛市</option>'+
                                                                   '<option value="39209">土佐清水市</option>'+
                                                                   '<option value="39210">四万十市</option>'+
                                                                   '<option value="39211">香南市</option>'+
                                                                   '<option value="39212">香美市</option>'+
                                                                   '<option value="39301">東洋町</option>'+
                                                                   '<option value="39302">奈半利町</option>'+
                                                                   '<option value="39303">田野町</option>'+
                                                                   '<option value="39304">安田町</option>'+
                                                                   '<option value="39305">北川村</option>'+
                                                                   '<option value="39306">馬路村</option>'+
                                                                   '<option value="39307">芸西村</option>'+
                                                                   '<option value="39341">本山町</option>'+
                                                                   '<option value="39344">大豊町</option>'+
                                                                   '<option value="39363">土佐町</option>'+
                                                                   '<option value="39364">大川村</option>'+
                                                                   '<option value="39386">いの町</option>'+
                                                                   '<option value="39387">仁淀川町</option>'+
                                                                   '<option value="39401">中土佐町</option>'+
                                                                   '<option value="39402">佐川町</option>'+
                                                                   '<option value="39403">越知町</option>'+
                                                                   '<option value="39405">檮原町</option>'+
                                                                   '<option value="39410">日高村</option>'+
                                                                   '<option value="39411">津野町</option>'+
                                                                   '<option value="39412">四万十町</option>'+
                                                                   '<option value="39424">大月町</option>'+
                                                                   '<option value="39427">三原村</option>'+
                                                                   '<option value="39428">黒潮町</option>'+
								   '</select>'
		break;
	case "40000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="40100">北九州市</option>'+
                                                                   '<option value="40101">北九州市門司区</option>'+
                                                                   '<option value="40103">北九州市若松区</option>'+
                                                                   '<option value="40105">北九州市戸畑区</option>'+
                                                                   '<option value="40106">北九州市小倉北区</option>'+
                                                                   '<option value="40107">北九州市小倉南区</option>'+
                                                                   '<option value="40108">北九州市八幡東区</option>'+
                                                                   '<option value="40109">北九州市八幡西区</option>'+
                                                                   '<option value="40130">福岡市</option>'+
                                                                   '<option value="40131">福岡市東区</option>'+
                                                                   '<option value="40132">福岡市博多区</option>'+
                                                                   '<option value="40133">福岡市中央区</option>'+
                                                                   '<option value="40134">福岡市南区</option>'+
                                                                   '<option value="40135">福岡市西区</option>'+
                                                                   '<option value="40136">福岡市城南区</option>'+
                                                                   '<option value="40137">福岡市早良区</option>'+
                                                                   '<option value="40202">大牟田市</option>'+
                                                                   '<option value="40203">久留米市</option>'+
                                                                   '<option value="40204">直方市</option>'+
                                                                   '<option value="40205">飯塚市</option>'+
                                                                   '<option value="40206">田川市</option>'+
                                                                   '<option value="40207">柳川市</option>'+
                                                                   '<option value="40210">八女市</option>'+
                                                                   '<option value="40211">筑後市</option>'+
                                                                   '<option value="40212">大川市</option>'+
                                                                   '<option value="40213">行橋市</option>'+
                                                                   '<option value="40214">豊前市</option>'+
                                                                   '<option value="40215">中間市</option>'+
                                                                   '<option value="40216">小郡市</option>'+
                                                                   '<option value="40217">筑紫野市</option>'+
                                                                   '<option value="40218">春日市</option>'+
                                                                   '<option value="40219">大野城市</option>'+
                                                                   '<option value="40220">宗像市</option>'+
                                                                   '<option value="40221">太宰府市</option>'+
                                                                   '<option value="40223">古賀市</option>'+
                                                                   '<option value="40224">福津市</option>'+
                                                                   '<option value="40225">うきは市</option>'+
                                                                   '<option value="40226">宮若市</option>'+
                                                                   '<option value="40227">嘉麻市</option>'+
                                                                   '<option value="40228">朝倉市</option>'+
                                                                   '<option value="40229">みやま市</option>'+
                                                                   '<option value="40230">糸島市</option>'+
                                                                   '<option value="40305">那珂川町</option>'+
                                                                   '<option value="40341">宇美町</option>'+
                                                                   '<option value="40342">篠栗町</option>'+
                                                                   '<option value="40343">志免町</option>'+
                                                                   '<option value="40344">須恵町</option>'+
                                                                   '<option value="40345">新宮町</option>'+
                                                                   '<option value="40348">久山町</option>'+
                                                                   '<option value="40349">粕屋町</option>'+
                                                                   '<option value="40381">芦屋町</option>'+
                                                                   '<option value="40382">水巻町</option>'+
                                                                   '<option value="40383">岡垣町</option>'+
                                                                   '<option value="40384">遠賀町</option>'+
                                                                   '<option value="40401">小竹町</option>'+
                                                                   '<option value="40402">鞍手町</option>'+
                                                                   '<option value="40421">桂川町</option>'+
                                                                   '<option value="40447">筑前町</option>'+
                                                                   '<option value="40448">東峰村</option>'+
                                                                   '<option value="40503">大刀洗町</option>'+
                                                                   '<option value="40522">大木町</option>'+
                                                                   '<option value="40544">広川町</option>'+
                                                                   '<option value="40601">香春町</option>'+
                                                                   '<option value="40602">添田町</option>'+
                                                                   '<option value="40604">糸田町</option>'+
                                                                   '<option value="40605">川崎町</option>'+
                                                                   '<option value="40608">大任町</option>'+
                                                                   '<option value="40609">赤村</option>'+
                                                                   '<option value="40610">福智町</option>'+
                                                                   '<option value="40621">苅田町</option>'+
                                                                   '<option value="40625">みやこ町</option>'+
                                                                   '<option value="40642">吉富町</option>'+
                                                                   '<option value="40646">上毛町</option>'+
                                                                   '<option value="40647">築上町</option>'+
								   '</select>'
		break;
	case "41000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="41201">佐賀市</option>'+
                                                                   '<option value="41202">唐津市</option>'+
                                                                   '<option value="41203">鳥栖市</option>'+
                                                                   '<option value="41204">多久市</option>'+
                                                                   '<option value="41205">伊万里市</option>'+
                                                                   '<option value="41206">武雄市</option>'+
                                                                   '<option value="41207">鹿島市</option>'+
                                                                   '<option value="41208">小城市</option>'+
                                                                   '<option value="41209">嬉野市</option>'+
                                                                   '<option value="41210">神埼市</option>'+
                                                                   '<option value="41327">吉野ヶ里町</option>'+
                                                                   '<option value="41341">基山町</option>'+
                                                                   '<option value="41345">上峰町</option>'+
                                                                   '<option value="41346">みやき町</option>'+
                                                                   '<option value="41387">玄海町</option>'+
                                                                   '<option value="41401">有田町</option>'+
                                                                   '<option value="41423">大町町</option>'+
                                                                   '<option value="41424">江北町</option>'+
                                                                   '<option value="41425">白石町</option>'+
                                                                   '<option value="41441">太良町</option>'+
								   '</select>'
		break;
	case "42000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="42201">長崎市</option>'+
                                                                   '<option value="42202">佐世保市</option>'+
                                                                   '<option value="42203">島原市</option>'+
                                                                   '<option value="42204">諫早市</option>'+
                                                                   '<option value="42205">大村市</option>'+
                                                                   '<option value="42207">平戸市</option>'+
                                                                   '<option value="42208">松浦市</option>'+
                                                                   '<option value="42209">対馬市</option>'+
                                                                   '<option value="42210">壱岐市</option>'+
                                                                   '<option value="42211">五島市</option>'+
                                                                   '<option value="42212">西海市</option>'+
                                                                   '<option value="42213">雲仙市</option>'+
                                                                   '<option value="42214">南島原市</option>'+
                                                                   '<option value="42307">長与町</option>'+
                                                                   '<option value="42308">時津町</option>'+
                                                                   '<option value="42321">東彼杵町</option>'+
                                                                   '<option value="42322">川棚町</option>'+
                                                                   '<option value="42323">波佐見町</option>'+
                                                                   '<option value="42383">小値賀町</option>'+
                                                                   '<option value="42391">佐々町</option>'+
                                                                   '<option value="42411">新上五島町</option>'+
								   '</select>'
		break;
	case "43000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="43100">熊本市</option>'+
                                                                   '<option value="43101">熊本市中央区</option>'+
                                                                   '<option value="43102">熊本市東区</option>'+
                                                                   '<option value="43103">熊本市西区</option>'+
                                                                   '<option value="43104">熊本市南区</option>'+
                                                                   '<option value="43105">熊本市北区</option>'+
                                                                   '<option value="43202">八代市</option>'+
                                                                   '<option value="43203">人吉市</option>'+
                                                                   '<option value="43204">荒尾市</option>'+
                                                                   '<option value="43205">水俣市</option>'+
                                                                   '<option value="43206">玉名市</option>'+
                                                                   '<option value="43208">山鹿市</option>'+
                                                                   '<option value="43210">菊池市</option>'+
                                                                   '<option value="43211">宇土市</option>'+
                                                                   '<option value="43212">上天草市</option>'+
                                                                   '<option value="43213">宇城市</option>'+
                                                                   '<option value="43214">阿蘇市</option>'+
                                                                   '<option value="43215">天草市</option>'+
                                                                   '<option value="43216">合志市</option>'+
                                                                   '<option value="43348">美里町</option>'+
                                                                   '<option value="43364">玉東町</option>'+
                                                                   '<option value="43367">南関町</option>'+
                                                                   '<option value="43368">長洲町</option>'+
                                                                   '<option value="43369">和水町</option>'+
                                                                   '<option value="43403">大津町</option>'+
                                                                   '<option value="43404">菊陽町</option>'+
                                                                   '<option value="43423">南小国町</option>'+
                                                                   '<option value="43424">小国町</option>'+
                                                                   '<option value="43425">産山村</option>'+
                                                                   '<option value="43428">高森町</option>'+
                                                                   '<option value="43432">西原村</option>'+
                                                                   '<option value="43433">南阿蘇村</option>'+
                                                                   '<option value="43441">御船町</option>'+
                                                                   '<option value="43442">嘉島町</option>'+
                                                                   '<option value="43443">益城町</option>'+
                                                                   '<option value="43444">甲佐町</option>'+
                                                                   '<option value="43447">山都町</option>'+
                                                                   '<option value="43468">氷川町</option>'+
                                                                   '<option value="43482">芦北町</option>'+
                                                                   '<option value="43484">津奈木町</option>'+
                                                                   '<option value="43501">錦町</option>'+
                                                                   '<option value="43505">多良木町</option>'+
                                                                   '<option value="43506">湯前町</option>'+
                                                                   '<option value="43507">水上村</option>'+
                                                                   '<option value="43510">相良村</option>'+
                                                                   '<option value="43511">五木村</option>'+
                                                                   '<option value="43512">山江村</option>'+
                                                                   '<option value="43513">球磨村</option>'+
                                                                   '<option value="43514">あさぎり町</option>'+
                                                                   '<option value="43531">苓北町</option>'+
								   '</select>'
		break;
	case "44000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="44201">大分市</option>'+
                                                                   '<option value="44202">別府市</option>'+
                                                                   '<option value="44203">中津市</option>'+
                                                                   '<option value="44204">日田市</option>'+
                                                                   '<option value="44205">佐伯市</option>'+
                                                                   '<option value="44206">臼杵市</option>'+
                                                                   '<option value="44207">津久見市</option>'+
                                                                   '<option value="44208">竹田市</option>'+
                                                                   '<option value="44209">豊後高田市</option>'+
                                                                   '<option value="44210">杵築市</option>'+
                                                                   '<option value="44211">宇佐市</option>'+
                                                                   '<option value="44212">豊後大野市</option>'+
                                                                   '<option value="44213">由布市</option>'+
                                                                   '<option value="44214">国東市</option>'+
                                                                   '<option value="44322">姫島村</option>'+
                                                                   '<option value="44341">日出町</option>'+
                                                                   '<option value="44461">九重町</option>'+
                                                                   '<option value="44462">玖珠町</option>'+
								   '</select>'
		break;
	case "45000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="45201">宮崎市</option>'+
                                                                   '<option value="45202">都城市</option>'+
                                                                   '<option value="45203">延岡市</option>'+
                                                                   '<option value="45204">日南市</option>'+
                                                                   '<option value="45205">小林市</option>'+
                                                                   '<option value="45206">日向市</option>'+
                                                                   '<option value="45207">串間市</option>'+
                                                                   '<option value="45208">西都市</option>'+
                                                                   '<option value="45209">えびの市</option>'+
                                                                   '<option value="45341">三股町</option>'+
                                                                   '<option value="45361">高原町</option>'+
                                                                   '<option value="45382">国富町</option>'+
                                                                   '<option value="45383">綾町</option>'+
                                                                   '<option value="45401">高鍋町</option>'+
                                                                   '<option value="45402">新富町</option>'+
                                                                   '<option value="45403">西米良村</option>'+
                                                                   '<option value="45404">木城町</option>'+
                                                                   '<option value="45405">川南町</option>'+
                                                                   '<option value="45406">都農町</option>'+
                                                                   '<option value="45421">門川町</option>'+
                                                                   '<option value="45429">諸塚村</option>'+
                                                                   '<option value="45430">椎葉村</option>'+
                                                                   '<option value="45431">美郷町</option>'+
                                                                   '<option value="45441">高千穂町</option>'+
                                                                   '<option value="45442">日之影町</option>'+
                                                                   '<option value="45443">五ヶ瀬町</option>'+
								   '</select>'
		break;
	case "46000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="46201">鹿児島市</option>'+
                                                                   '<option value="46203">鹿屋市</option>'+
                                                                   '<option value="46204">枕崎市</option>'+
                                                                   '<option value="46206">阿久根市</option>'+
                                                                   '<option value="46208">出水市</option>'+
                                                                   '<option value="46210">指宿市</option>'+
                                                                   '<option value="46213">西之表市</option>'+
                                                                   '<option value="46214">垂水市</option>'+
                                                                   '<option value="46215">薩摩川内市</option>'+
                                                                   '<option value="46216">日置市</option>'+
                                                                   '<option value="46217">曽於市</option>'+
                                                                   '<option value="46218">霧島市</option>'+
                                                                   '<option value="46219">いちき串木野市</option>'+
                                                                   '<option value="46220">南さつま市</option>'+
                                                                   '<option value="46221">志布志市</option>'+
                                                                   '<option value="46222">奄美市</option>'+
                                                                   '<option value="46223">南九州市</option>'+
                                                                   '<option value="46224">伊佐市</option>'+
                                                                   '<option value="46225">姶良市</option>'+
                                                                   '<option value="46303">三島村</option>'+
                                                                   '<option value="46304">十島村</option>'+
                                                                   '<option value="46392">さつま町</option>'+
                                                                   '<option value="46404">長島町</option>'+
                                                                   '<option value="46452">湧水町</option>'+
                                                                   '<option value="46468">大崎町</option>'+
                                                                   '<option value="46482">東串良町</option>'+
                                                                   '<option value="46490">錦江町</option>'+
                                                                   '<option value="46491">南大隅町</option>'+
                                                                   '<option value="46492">肝付町</option>'+
                                                                   '<option value="46501">中種子町</option>'+
                                                                   '<option value="46502">南種子町</option>'+
                                                                   '<option value="46505">屋久島町</option>'+
                                                                   '<option value="46523">大和村</option>'+
                                                                   '<option value="46524">宇検村</option>'+
                                                                   '<option value="46525">瀬戸内町</option>'+
                                                                   '<option value="46527">龍郷町</option>'+
                                                                   '<option value="46529">喜界町</option>'+
                                                                   '<option value="46530">徳之島町</option>'+
                                                                   '<option value="46531">天城町</option>'+
                                                                   '<option value="46532">伊仙町</option>'+
                                                                   '<option value="46533">和泊町</option>'+
                                                                   '<option value="46534">知名町</option>'+
                                                                   '<option value="46535">与論町</option>'+
								   '</select>'
		break;
	case "47000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>市区町村を選んでください</option>'+
                                                                   '<option value="47201">那覇市</option>'+
                                                                   '<option value="47205">宜野湾市</option>'+
                                                                   '<option value="47207">石垣市</option>'+
                                                                   '<option value="47208">浦添市</option>'+
                                                                   '<option value="47209">名護市</option>'+
                                                                   '<option value="47210">糸満市</option>'+
                                                                   '<option value="47211">沖縄市</option>'+
                                                                   '<option value="47212">豊見城市</option>'+
                                                                   '<option value="47213">うるま市</option>'+
                                                                   '<option value="47214">宮古島市</option>'+
                                                                   '<option value="47215">南城市</option>'+
                                                                   '<option value="47301">国頭村</option>'+
                                                                   '<option value="47302">大宜味村</option>'+
                                                                   '<option value="47303">東村</option>'+
                                                                   '<option value="47306">今帰仁村</option>'+
                                                                   '<option value="47308">本部町</option>'+
                                                                   '<option value="47311">恩納村</option>'+
                                                                   '<option value="47313">宜野座村</option>'+
                                                                   '<option value="47314">金武町</option>'+
                                                                   '<option value="47315">伊江村</option>'+
                                                                   '<option value="47324">読谷村</option>'+
                                                                   '<option value="47325">嘉手納町</option>'+
                                                                   '<option value="47326">北谷町</option>'+
                                                                   '<option value="47327">北中城村</option>'+
                                                                   '<option value="47328">中城村</option>'+
                                                                   '<option value="47329">西原町</option>'+
                                                                   '<option value="47348">与那原町</option>'+
                                                                   '<option value="47350">南風原町</option>'+
                                                                   '<option value="47353">渡嘉敷村</option>'+
                                                                   '<option value="47354">座間味村</option>'+
                                                                   '<option value="47355">粟国村</option>'+
                                                                   '<option value="47356">渡名喜村</option>'+
                                                                   '<option value="47357">南大東村</option>'+
                                                                   '<option value="47358">北大東村</option>'+
                                                                   '<option value="47359">伊平屋村</option>'+
                                                                   '<option value="47360">伊是名村</option>'+
                                                                   '<option value="47361">久米島町</option>'+
                                                                   '<option value="47362">八重瀬町</option>'+
                                                                   '<option value="47375">多良間村</option>'+
                                                                   '<option value="47381">竹富町</option>'+
                                                                   '<option value="47382">与那国町</option>'+
								   '</select>'
		break;
	}
}
