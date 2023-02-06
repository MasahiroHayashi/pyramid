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
		reaName = "Japan" ;
		onSelectArea();
		break;
	<!--  都道府県  -->
	case "4":
		resetArea();
		document.getElementById('cityField').innerHTML = '';
		document.getElementById('prefField').innerHTML = '<select name="prefField" class="select1" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a prefecture</option>'+
									'<option value="01000">Hokkaido</option>'+
									'<option value="02000">Aomori-ken</option>'+
									'<option value="03000">Iwate-ken</option>'+
									'<option value="04000">Miyagi-ken</option>'+
									'<option value="05000">Akita-ken</option>'+
									'<option value="06000">Yamagata-ken</option>'+
									'<option value="07000">Fukushima-ken</option>'+
									'<option value="08000">Ibaraki-ken</option>'+
									'<option value="09000">Tochigi-ken</option>'+
									'<option value="10000">Gumma-ken</option>'+
									'<option value="11000">Saitama-ken</option>'+
									'<option value="12000">Chiba-ken</option>'+
									'<option value="13000">Tokyo-to</option>'+
									'<option value="14000">Kanagawa-ken</option>'+
									'<option value="15000">Niigata-ken</option>'+
									'<option value="16000">Toyama-ken</option>'+
									'<option value="17000">Ishikawa-ken</option>'+
									'<option value="18000">Fukui-ken</option>'+
									'<option value="19000">Yamanashi-ken</option>'+
									'<option value="20000">Nagano-ken</option>'+
									'<option value="21000">Gifu-ken</option>'+
									'<option value="22000">Shizuoka-ken</option>'+
									'<option value="23000">Aichi-ken</option>'+
									'<option value="24000">Mie-ken</option>'+
									'<option value="25000">Shiga-ken</option>'+
									'<option value="26000">Kyoto-fu</option>'+
									'<option value="27000">Osaka-fu</option>'+
									'<option value="28000">Hyogo-ken</option>'+
									'<option value="29000">Nara-ken</option>'+
									'<option value="30000">Wakayama-ken</option>'+
									'<option value="31000">Tottori-ken</option>'+
									'<option value="32000">Shimane-ken</option>'+
									'<option value="33000">Okayama-ken</option>'+
									'<option value="34000">Hiroshima-ken</option>'+
									'<option value="35000">Yamaguchi-ken</option>'+
									'<option value="36000">Tokushima-ken</option>'+
									'<option value="37000">Kagawa-ken</option>'+
									'<option value="38000">Ehime-ken</option>'+
									'<option value="39000">Kochi-ken</option>'+
									'<option value="40000">Fukuoka-ken</option>'+
									'<option value="41000">Saga-ken</option>'+
									'<option value="42000">Nagasaki-ken</option>'+
									'<option value="43000">Kumamoto-ken</option>'+
									'<option value="44000">Oita-ken</option>'+
									'<option value="45000">Miyazaki-ken</option>'+
									'<option value="46000">Kagoshima-ken</option>'+
									'<option value="47000">Okinawa-ken</option>'+
								   '</select>'
		break;
	<!--  都道府県→市区町村  -->
	case "5":

		document.getElementById('cityField').innerHTML = '';
		resetArea();
		document.getElementById('prefField').innerHTML = '<select name="prefField" class="select1" onChange="changecityField()">'+
								   '<option value="" selected>Select a prefecture</option>'+
									'<option value="01000">Hokkaido</option>'+
									'<option value="02000">Aomori-ken</option>'+
									'<option value="03000">Iwate-ken</option>'+
									'<option value="04000">Miyagi-ken</option>'+
									'<option value="05000">Akita-ken</option>'+
									'<option value="06000">Yamagata-ken</option>'+
									'<option value="07000">Fukushima-ken</option>'+
									'<option value="08000">Ibaraki-ken</option>'+
									'<option value="09000">Tochigi-ken</option>'+
									'<option value="10000">Gumma-ken</option>'+
									'<option value="11000">Saitama-ken</option>'+
									'<option value="12000">Chiba-ken</option>'+
									'<option value="13000">Tokyo-to</option>'+
									'<option value="14000">Kanagawa-ken</option>'+
									'<option value="15000">Niigata-ken</option>'+
									'<option value="16000">Toyama-ken</option>'+
									'<option value="17000">Ishikawa-ken</option>'+
									'<option value="18000">Fukui-ken</option>'+
									'<option value="19000">Yamanashi-ken</option>'+
									'<option value="20000">Nagano-ken</option>'+
									'<option value="21000">Gifu-ken</option>'+
									'<option value="22000">Shizuoka-ken</option>'+
									'<option value="23000">Aichi-ken</option>'+
									'<option value="24000">Mie-ken</option>'+
									'<option value="25000">Shiga-ken</option>'+
									'<option value="26000">Kyoto-fu</option>'+
									'<option value="27000">Osaka-fu</option>'+
									'<option value="28000">Hyogo-ken</option>'+
									'<option value="29000">Nara-ken</option>'+
									'<option value="30000">Wakayama-ken</option>'+
									'<option value="31000">Tottori-ken</option>'+
									'<option value="32000">Shimane-ken</option>'+
									'<option value="33000">Okayama-ken</option>'+
									'<option value="34000">Hiroshima-ken</option>'+
									'<option value="35000">Yamaguchi-ken</option>'+
									'<option value="36000">Tokushima-ken</option>'+
									'<option value="37000">Kagawa-ken</option>'+
									'<option value="38000">Ehime-ken</option>'+
									'<option value="39000">Kochi-ken</option>'+
									'<option value="40000">Fukuoka-ken</option>'+
									'<option value="41000">Saga-ken</option>'+
									'<option value="42000">Nagasaki-ken</option>'+
									'<option value="43000">Kumamoto-ken</option>'+
									'<option value="44000">Oita-ken</option>'+
									'<option value="45000">Miyazaki-ken</option>'+
									'<option value="46000">Kagoshima-ken</option>'+
									'<option value="47000">Okinawa-ken</option>'+
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
                                                                   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="01100">Sapporo-shi</option>'+
'<option value="01101">Sapporo-shi Chuo-ku</option>'+
'<option value="01102">Sapporo-shi Kita-ku</option>'+
'<option value="01103">Sapporo-shi Higashi-ku</option>'+
'<option value="01104">Sapporo-shi Shiroishi-ku</option>'+
'<option value="01105">Sapporo-shi Toyohira-ku</option>'+
'<option value="01106">Sapporo-shi Minami-ku</option>'+
'<option value="01107">Sapporo-shi Nishi-ku</option>'+
'<option value="01108">Sapporo-shi Atsubetsu-ku</option>'+
'<option value="01109">Sapporo-shi Teine-ku</option>'+
'<option value="01110">Sapporo-shi Kiyota-ku</option>'+
'<option value="01202">Hakodate-shi</option>'+
'<option value="01203">Otaru-shi</option>'+
'<option value="01204">Asahikawa-shi</option>'+
'<option value="01205">Muroran-shi</option>'+
'<option value="01206">Kushiro-shi</option>'+
'<option value="01207">Obihiro-shi</option>'+
'<option value="01208">Kitami-shi</option>'+
'<option value="01209">Yubari-shi</option>'+
'<option value="01210">Iwamizawa-shi</option>'+
'<option value="01211">Abashiri-shi</option>'+
'<option value="01212">Rumoi-shi</option>'+
'<option value="01213">Tomakomai-shi</option>'+
'<option value="01214">Wakkanai-shi</option>'+
'<option value="01215">Bibai-shi</option>'+
'<option value="01216">Ashibetsu-shi</option>'+
'<option value="01217">Ebetsu-shi</option>'+
'<option value="01218">Akabira-shi</option>'+
'<option value="01219">Mombetsu-shi</option>'+
'<option value="01220">Shibetsu-shi</option>'+
'<option value="01221">Nayoro-shi</option>'+
'<option value="01222">Mikasa-shi</option>'+
'<option value="01223">Nemuro-shi</option>'+
'<option value="01224">Chitose-shi</option>'+
'<option value="01225">Takikawa-shi</option>'+
'<option value="01226">Sunagawa-shi</option>'+
'<option value="01227">Utashinai-shi</option>'+
'<option value="01228">Fukagawa-shi</option>'+
'<option value="01229">Furano-shi</option>'+
'<option value="01230">Noboribetsu-shi</option>'+
'<option value="01231">Eniwa-shi</option>'+
'<option value="01233">Date-shi</option>'+
'<option value="01234">Kitahiroshima-shi</option>'+
'<option value="01235">Ishikari-shi</option>'+
'<option value="01236">Hokuto-shi</option>'+
'<option value="01303">Tobetsu-cho</option>'+
'<option value="01304">Shinshinotsu-mura</option>'+
'<option value="01331">Matsumae-cho</option>'+
'<option value="01332">Fukushima-cho</option>'+
'<option value="01333">Shiriuchi-cho</option>'+
'<option value="01334">Kikonai-cho</option>'+
'<option value="01337">Nanae-cho</option>'+
'<option value="01343">Shikabe-cho</option>'+
'<option value="01345">Mori-machi</option>'+
'<option value="01346">Yakumo-cho</option>'+
'<option value="01347">Oshamambe-cho</option>'+
'<option value="01361">Esashi-cho</option>'+
'<option value="01362">Kaminokuni-cho</option>'+
'<option value="01363">Assabu-cho</option>'+
'<option value="01364">Otobe-cho</option>'+
'<option value="01367">Okushiri-cho</option>'+
'<option value="01370">Imakane-cho</option>'+
'<option value="01371">Setana-cho</option>'+
'<option value="01391">Shimamaki-mura</option>'+
'<option value="01392">Suttsu-cho</option>'+
'<option value="01393">Kuromatsunai-cho</option>'+
'<option value="01394">Rankoshi-cho</option>'+
'<option value="01395">Niseko-cho</option>'+
'<option value="01396">Makkari-mura</option>'+
'<option value="01397">Rusutsu-mura</option>'+
'<option value="01398">Kimobetsu-cho</option>'+
'<option value="01399">Kyogoku-cho</option>'+
'<option value="01400">Kutchan-cho</option>'+
'<option value="01401">Kyowa-cho</option>'+
'<option value="01402">Iwanai-cho</option>'+
'<option value="01403">Tomari-mura</option>'+
'<option value="01404">Kamoenai-mura</option>'+
'<option value="01405">Shakotan-cho</option>'+
'<option value="01406">Furubira-cho</option>'+
'<option value="01407">Niki-cho</option>'+
'<option value="01408">Yoichi-cho</option>'+
'<option value="01409">Akaigawa-mura</option>'+
'<option value="01423">Nanporo-cho</option>'+
'<option value="01424">Naie-cho</option>'+
'<option value="01425">Kamisunagawa-cho</option>'+
'<option value="01427">Yuni-cho</option>'+
'<option value="01428">Naganuma-cho</option>'+
'<option value="01429">Kuriyama-cho</option>'+
'<option value="01430">Tsukigata-cho</option>'+
'<option value="01431">Urausu-cho</option>'+
'<option value="01432">Shintotsukawa-cho</option>'+
'<option value="01433">Moseushi-cho</option>'+
'<option value="01434">Chippubetsu-cho</option>'+
'<option value="01436">Uryu-cho</option>'+
'<option value="01437">Hokuryu-cho</option>'+
'<option value="01438">Numata-cho</option>'+
'<option value="01452">Takasu-cho</option>'+
'<option value="01453">Higashikagura-cho</option>'+
'<option value="01454">Tohma-cho</option>'+
'<option value="01455">Pippu-cho</option>'+
'<option value="01456">Aibetsu-cho</option>'+
'<option value="01457">Kamikawa-cho</option>'+
'<option value="01458">Higashikawa-cho</option>'+
'<option value="01459">Biei-cho</option>'+
'<option value="01460">Kamifurano-cho</option>'+
'<option value="01461">Nakafurano-cho</option>'+
'<option value="01462">Minamifurano-cho</option>'+
'<option value="01463">Shimukappu-mura</option>'+
'<option value="01464">Wassamu-cho</option>'+
'<option value="01465">Kembuchi-cho</option>'+
'<option value="01468">Shimokawa-cho</option>'+
'<option value="01469">Bifuka-cho</option>'+
'<option value="01470">Otoineppu-mura</option>'+
'<option value="01471">Nakagawa-cho</option>'+
'<option value="01472">Horokanai-cho</option>'+
'<option value="01481">Mashike-cho</option>'+
'<option value="01482">Obira-cho</option>'+
'<option value="01483">Tomamae-cho</option>'+
'<option value="01484">Haboro-cho</option>'+
'<option value="01485">Shosambetsu-mura</option>'+
'<option value="01486">Embetsu-cho</option>'+
'<option value="01487">Teshio-cho</option>'+
'<option value="01511">Sarufutsu-mura</option>'+
'<option value="01512">Hamatombetsu-cho</option>'+
'<option value="01513">Nakatombetsu-cho</option>'+
'<option value="01514">Esashi-cho</option>'+
'<option value="01516">Toyotomi-cho</option>'+
'<option value="01517">Rebun-cho</option>'+
'<option value="01518">Rishiri-cho</option>'+
'<option value="01519">Rishirifuji-cho</option>'+
'<option value="01520">Horonobe-cho</option>'+
'<option value="01543">Bihoro-cho</option>'+
'<option value="01544">Tsubetsu-cho</option>'+
'<option value="01545">Shari-cho</option>'+
'<option value="01546">Kiyosato-cho</option>'+
'<option value="01547">Koshimizu-cho</option>'+
'<option value="01549">Kunneppu-cho</option>'+
'<option value="01550">Oketo-cho</option>'+
'<option value="01552">Saroma-cho</option>'+
'<option value="01555">Engaru-cho</option>'+
'<option value="01559">Yubetsu-cho</option>'+
'<option value="01560">Takinoue-cho</option>'+
'<option value="01561">Okoppe-cho</option>'+
'<option value="01562">Nishiokoppe-mura</option>'+
'<option value="01563">Omu-cho</option>'+
'<option value="01564">Ozora-cho</option>'+
'<option value="01571">Toyoura-cho</option>'+
'<option value="01575">Sobetsu-cho</option>'+
'<option value="01578">Shiraoi-cho</option>'+
'<option value="01581">Atsuma-cho</option>'+
'<option value="01584">Toyako-cho</option>'+
'<option value="01585">Abira-cho</option>'+
'<option value="01586">Mukawa-cho</option>'+
'<option value="01601">Hidaka-cho</option>'+
'<option value="01602">Biratori-cho</option>'+
'<option value="01604">Niikappu-cho</option>'+
'<option value="01607">Urakawa-cho</option>'+
'<option value="01608">Samani-cho</option>'+
'<option value="01609">Erimo-cho</option>'+
'<option value="01610">Shinhidaka-cho</option>'+
'<option value="01631">Otofuke-cho</option>'+
'<option value="01632">Shihoro-cho</option>'+
'<option value="01633">Kamishihoro-cho</option>'+
'<option value="01634">Shikaoi-cho</option>'+
'<option value="01635">Shintoku-cho</option>'+
'<option value="01636">Shimizu-cho</option>'+
'<option value="01637">Memuro-cho</option>'+
'<option value="01638">Nakasatsunai-mura</option>'+
'<option value="01639">Sarabetsu-mura</option>'+
'<option value="01641">Taiki-cho</option>'+
'<option value="01642">Hiroo-cho</option>'+
'<option value="01643">Makubetsu-cho</option>'+
'<option value="01644">Ikeda-cho</option>'+
'<option value="01645">Toyokoro-cho</option>'+
'<option value="01646">Hombetsu-cho</option>'+
'<option value="01647">Ashoro-cho</option>'+
'<option value="01648">Rikubetsu-cho</option>'+
'<option value="01649">Urahoro-cho</option>'+
'<option value="01661">Kushiro-cho</option>'+
'<option value="01662">Akkeshi-cho</option>'+
'<option value="01663">Hamanaka-cho</option>'+
'<option value="01664">Shibecha-cho</option>'+
'<option value="01665">Teshikaga-cho</option>'+
'<option value="01667">Tsurui-mura</option>'+
'<option value="01668">Shiranuka-cho</option>'+
'<option value="01691">Betsukai-cho</option>'+
'<option value="01692">Nakashibetsu-cho</option>'+
'<option value="01693">Shibetsu-cho</option>'+
'<option value="01694">Rausu-cho</option>'+

								   '</select>'
		break;
	case "02000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="02201">Aomori-shi</option>'+
'<option value="02202">Hirosaki-shi</option>'+
'<option value="02203">Hachinohe-shi</option>'+
'<option value="02204">Kuroishi-shi</option>'+
'<option value="02205">Goshogawara-shi</option>'+
'<option value="02206">Towada-shi</option>'+
'<option value="02207">Misawa-shi</option>'+
'<option value="02208">Mutsu-shi</option>'+
'<option value="02209">Tsugaru-shi</option>'+
'<option value="02210">Hirakawa-shi</option>'+
'<option value="02301">Hiranai-machi</option>'+
'<option value="02303">Imabetsu-machi</option>'+
'<option value="02304">Yomogita-mura</option>'+
'<option value="02307">Sotogahama-machi</option>'+
'<option value="02321">Ajigasawa-machi</option>'+
'<option value="02323">Fukaura-machi</option>'+
'<option value="02343">Nishimeya-mura</option>'+
'<option value="02361">Fujisaki-machi</option>'+
'<option value="02362">Owani-machi</option>'+
'<option value="02367">Inakadate-mura</option>'+
'<option value="02381">Itayanagi-machi</option>'+
'<option value="02384">Tsuruta-machi</option>'+
'<option value="02387">Nakadomari-machi</option>'+
'<option value="02401">Noheji-machi</option>'+
'<option value="02402">Shichinohe-machi</option>'+
'<option value="02405">Rokunohe-machi</option>'+
'<option value="02406">Yokohama-machi</option>'+
'<option value="02408">Tohoku-machi</option>'+
'<option value="02411">Rokkasho-mura</option>'+
'<option value="02412">Oirase-cho</option>'+
'<option value="02423">Oma-machi</option>'+
'<option value="02424">Higashidori-mura</option>'+
'<option value="02425">Kazamaura-mura</option>'+
'<option value="02426">Sai-mura</option>'+
'<option value="02441">Sannohe-machi</option>'+
'<option value="02442">Gonohe-machi</option>'+
'<option value="02443">Takko-machi</option>'+
'<option value="02445">Nambu-cho</option>'+
'<option value="02446">Hashikami-cho</option>'+
'<option value="02450">Shingo-mura</option>'+

								   '</select>'
		break;
	case "03000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="03201">Morioka-shi</option>'+
'<option value="03202">Miyako-shi</option>'+
'<option value="03203">Ofunato-shi</option>'+
'<option value="03205">Hanamaki-shi</option>'+
'<option value="03206">Kitakami-shi</option>'+
'<option value="03207">Kuji-shi</option>'+
'<option value="03208">Tono-shi</option>'+
'<option value="03209">Ichinoseki-shi</option>'+
'<option value="03210">Rikuzentakata-shi</option>'+
'<option value="03211">Kamaishi-shi</option>'+
'<option value="03213">Ninohe-shi</option>'+
'<option value="03214">Hachimantai-shi</option>'+
'<option value="03215">Oshu-shi</option>'+
'<option value="03216">Takizawa-shi</option>'+
'<option value="03301">Shizukuishi-cho</option>'+
'<option value="03302">Kuzumaki-machi</option>'+
'<option value="03303">Iwate-machi</option>'+
'<option value="03321">Shiwa-cho</option>'+
'<option value="03322">Yahaba-cho</option>'+
'<option value="03366">Nishiwaga-machi</option>'+
'<option value="03381">Kanegasaki-cho</option>'+
'<option value="03402">Hiraizumi-cho</option>'+
'<option value="03441">Sumita-cho</option>'+
'<option value="03461">Otsuchi-cho</option>'+
'<option value="03482">Yamada-machi</option>'+
'<option value="03483">Iwaizumi-cho</option>'+
'<option value="03484">Tanohata-mura</option>'+
'<option value="03485">Fudai-mura</option>'+
'<option value="03501">Karumai-machi</option>'+
'<option value="03503">Noda-mura</option>'+
'<option value="03506">Kunohe-mura</option>'+
'<option value="03507">Hirono-cho</option>'+
'<option value="03524">Ichinohe-machi</option>'+

								   '</select>'
		break;
	case "04000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="04100">Sendai-shi</option>'+
'<option value="04101">Sendai-shi Aoba-ku</option>'+
'<option value="04102">Sendai-shi Miyagino-ku</option>'+
'<option value="04103">Sendai-shi Wakabayashi-ku</option>'+
'<option value="04104">Sendai-shi Taihaku-ku</option>'+
'<option value="04105">Sendai-shi Izumi-ku</option>'+
'<option value="04202">Ishinomaki-shi</option>'+
'<option value="04203">Shiogama-shi</option>'+
'<option value="04205">Kesennuma-shi</option>'+
'<option value="04206">Shiroishi-shi</option>'+
'<option value="04207">Natori-shi</option>'+
'<option value="04208">Kakuda-shi</option>'+
'<option value="04209">Tagajo-shi</option>'+
'<option value="04211">Iwanuma-shi</option>'+
'<option value="04212">Tome-shi</option>'+
'<option value="04213">Kurihara-shi</option>'+
'<option value="04214">Higashimatsushima-shi</option>'+
'<option value="04215">Osaki-shi</option>'+
'<option value="04301">Zao-machi</option>'+
'<option value="04302">Shichikashuku-machi</option>'+
'<option value="04321">Ogawara-machi</option>'+
'<option value="04322">Murata-machi</option>'+
'<option value="04323">Shibata-machi</option>'+
'<option value="04324">Kawasaki-machi</option>'+
'<option value="04341">Marumori-machi</option>'+
'<option value="04361">Watari-cho</option>'+
'<option value="04362">Yamamoto-cho</option>'+
'<option value="04401">Matsushima-machi</option>'+
'<option value="04404">Shichigahama-machi</option>'+
'<option value="04406">Rifu-cho</option>'+
'<option value="04421">Taiwa-cho</option>'+
'<option value="04422">Osato-cho</option>'+
'<option value="04423">Tomiya-machi</option>'+
'<option value="04424">Ohira-mura</option>'+
'<option value="04444">Shikama-cho</option>'+
'<option value="04445">Kami-machi</option>'+
'<option value="04501">Wakuya-cho</option>'+
'<option value="04505">Misato-machi</option>'+
'<option value="04581">Onagawa-cho</option>'+
'<option value="04606">Minamisanriku-cho</option>'+

								   '</select>'
		break;
	case "05000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="05201">Akita-shi</option>'+
'<option value="05202">Noshiro-shi</option>'+
'<option value="05203">Yokote-shi</option>'+
'<option value="05204">Odate-shi</option>'+
'<option value="05206">Oga-shi</option>'+
'<option value="05207">Yuzawa-shi</option>'+
'<option value="05209">Kazuno-shi</option>'+
'<option value="05210">Yurihonjo-shi</option>'+
'<option value="05211">Katagami-shi</option>'+
'<option value="05212">Daisen-shi</option>'+
'<option value="05213">Kitaakita-shi</option>'+
'<option value="05214">Nikaho-shi</option>'+
'<option value="05215">Semboku-shi</option>'+
'<option value="05303">Kosaka-machi</option>'+
'<option value="05327">Kamikoani-mura</option>'+
'<option value="05346">Fujisato-machi</option>'+
'<option value="05348">Mitane-cho</option>'+
'<option value="05349">Happou-cho</option>'+
'<option value="05361">Gojome-machi</option>'+
'<option value="05363">Hachirogata-machi</option>'+
'<option value="05366">Ikawa-machi</option>'+
'<option value="05368">Ogata-mura</option>'+
'<option value="05434">Misato-cho</option>'+
'<option value="05463">Ugo-machi</option>'+
'<option value="05464">Higashinaruse-mura</option>'+

								   '</select>'
		break;
	case "06000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="06201">Yamagata-shi</option>'+
'<option value="06202">Yonezawa-shi</option>'+
'<option value="06203">Tsuruoka-shi</option>'+
'<option value="06204">Sakata-shi</option>'+
'<option value="06205">Shinjo-shi</option>'+
'<option value="06206">Sagae-shi</option>'+
'<option value="06207">Kaminoyama-shi</option>'+
'<option value="06208">Murayama-shi</option>'+
'<option value="06209">Nagai-shi</option>'+
'<option value="06210">Tendo-shi</option>'+
'<option value="06211">Higashine-shi</option>'+
'<option value="06212">Obanazawa-shi</option>'+
'<option value="06213">Nanyo-shi</option>'+
'<option value="06301">Yamanobe-machi</option>'+
'<option value="06302">Nakayama-machi</option>'+
'<option value="06321">Kahoku-cho</option>'+
'<option value="06322">Nishikawa-machi</option>'+
'<option value="06323">Asahi-machi</option>'+
'<option value="06324">Oe-machi</option>'+
'<option value="06341">Oishida-machi</option>'+
'<option value="06361">Kaneyama-machi</option>'+
'<option value="06362">Mogami-machi</option>'+
'<option value="06363">Funagata-machi</option>'+
'<option value="06364">Mamurogawa-machi</option>'+
'<option value="06365">Okura-mura</option>'+
'<option value="06366">Sakegawa-mura</option>'+
'<option value="06367">Tozawa-mura</option>'+
'<option value="06381">Takahata-machi</option>'+
'<option value="06382">Kawanishi-machi</option>'+
'<option value="06401">Oguni-machi</option>'+
'<option value="06402">Shirataka-machi</option>'+
'<option value="06403">Iide-machi</option>'+
'<option value="06426">Mikawa-machi</option>'+
'<option value="06428">Shonai-machi</option>'+
'<option value="06461">Yuza-machi</option>'+

								   '</select>'
		break;
	case "07000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="07201">Fukushima-shi</option>'+
'<option value="07202">Aizuwakamatsu-shi</option>'+
'<option value="07203">Koriyama-shi</option>'+
'<option value="07204">Iwaki-shi</option>'+
'<option value="07205">Shirakawa-shi</option>'+
'<option value="07207">Sukagawa-shi</option>'+
'<option value="07208">Kitakata-shi</option>'+
'<option value="07209">Soma-shi</option>'+
'<option value="07210">Nihonmatsu-shi</option>'+
'<option value="07211">Tamura-shi</option>'+
'<option value="07212">Minamisoma-shi</option>'+
'<option value="07213">Date-shi</option>'+
'<option value="07214">Motomiya-shi</option>'+
'<option value="07301">Kori-machi</option>'+
'<option value="07303">Kunimi-machi</option>'+
'<option value="07308">Kawamata-machi</option>'+
'<option value="07322">Otama-mura</option>'+
'<option value="07342">Kagamiishi-machi</option>'+
'<option value="07344">Tenei-mura</option>'+
'<option value="07362">Shimogo-machi</option>'+
'<option value="07364">Hinoemata-mura</option>'+
'<option value="07367">Tadami-machi</option>'+
'<option value="07368">Minamiaizu-machi</option>'+
'<option value="07402">Kitashiobara-mura</option>'+
'<option value="07405">Nishiaizu-machi</option>'+
'<option value="07407">Bandai-machi</option>'+
'<option value="07408">Inawashiro-machi</option>'+
'<option value="07421">Aizubange-machi</option>'+
'<option value="07422">Yugawa-mura</option>'+
'<option value="07423">Yanaizu-machi</option>'+
'<option value="07444">Mishima-machi</option>'+
'<option value="07445">Kaneyama-machi</option>'+
'<option value="07446">Showa-mura</option>'+
'<option value="07447">Aizumisato-machi</option>'+
'<option value="07461">Nishigo-mura</option>'+
'<option value="07464">Izumizaki-mura</option>'+
'<option value="07465">Nakajima-mura</option>'+
'<option value="07466">Yabuki-machi</option>'+
'<option value="07481">Tanagura-machi</option>'+
'<option value="07482">Yamatsuri-machi</option>'+
'<option value="07483">Hanawa-machi</option>'+
'<option value="07484">Samegawa-mura</option>'+
'<option value="07501">Ishikawa-machi</option>'+
'<option value="07502">Tamakawa-mura</option>'+
'<option value="07503">Hirata-mura</option>'+
'<option value="07504">Asakawa-machi</option>'+
'<option value="07505">Furudono-machi</option>'+
'<option value="07521">Miharu-machi</option>'+
'<option value="07522">Ono-machi</option>'+
'<option value="07541">Hirono-machi</option>'+
'<option value="07542">Naraha-machi</option>'+
'<option value="07543">Tomioka-machi</option>'+
'<option value="07544">Kawauchi-mura</option>'+
'<option value="07545">Okuma-machi</option>'+
'<option value="07546">Futaba-machi</option>'+
'<option value="07547">Namie-machi</option>'+
'<option value="07548">Katsurao-mura</option>'+
'<option value="07561">Shinchi-machi</option>'+
'<option value="07564">Iitate-mura</option>'+

								   '</select>'
		break;
	case "08000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="08201">Mito-shi</option>'+
'<option value="08202">Hitachi-shi</option>'+
'<option value="08203">Tsuchiura-shi</option>'+
'<option value="08204">Koga-shi</option>'+
'<option value="08205">Ishioka-shi</option>'+
'<option value="08207">Yuki-shi</option>'+
'<option value="08208">Ryugasaki-shi</option>'+
'<option value="08210">Shimotsuma-shi</option>'+
'<option value="08211">Joso-shi</option>'+
'<option value="08212">Hitachiota-shi</option>'+
'<option value="08214">Takahagi-shi</option>'+
'<option value="08215">Kitaibaraki-shi</option>'+
'<option value="08216">Kasama-shi</option>'+
'<option value="08217">Toride-shi</option>'+
'<option value="08219">Ushiku-shi</option>'+
'<option value="08220">Tsukuba-shi</option>'+
'<option value="08221">Hitachinaka-shi</option>'+
'<option value="08222">Kashima-shi</option>'+
'<option value="08223">Itako-shi</option>'+
'<option value="08224">Moriya-shi</option>'+
'<option value="08225">Hitachiomiya-shi</option>'+
'<option value="08226">Naka-shi</option>'+
'<option value="08227">Chikusei-shi</option>'+
'<option value="08228">Bando-shi</option>'+
'<option value="08229">Inashiki-shi</option>'+
'<option value="08230">Kasumigaura-shi</option>'+
'<option value="08231">Sakuragawa-shi</option>'+
'<option value="08232">Kamisu-shi</option>'+
'<option value="08233">Namegata-shi</option>'+
'<option value="08234">Hokota-shi</option>'+
'<option value="08235">Tsukubamirai-shi</option>'+
'<option value="08236">Omitama-shi</option>'+
'<option value="08302">Ibaraki-machi</option>'+
'<option value="08309">Oarai-machi</option>'+
'<option value="08310">Shirosato-machi</option>'+
'<option value="08341">Tokai-mura</option>'+
'<option value="08364">Daigo-machi</option>'+
'<option value="08442">Miho-mura</option>'+
'<option value="08443">Ami-machi</option>'+
'<option value="08447">Kawachi-machi</option>'+
'<option value="08521">Yachiyo-machi</option>'+
'<option value="08542">Goka-machi</option>'+
'<option value="08546">Sakai-machi</option>'+
'<option value="08564">Tone-machi</option>'+

								   '</select>'
		break;
	case "09000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="09201">Utsunomiya-shi</option>'+
'<option value="09202">Ashikaga-shi</option>'+
'<option value="09203">Tochigi-shi</option>'+
'<option value="09204">Sano-shi</option>'+
'<option value="09205">Kanuma-shi</option>'+
'<option value="09206">Nikko-shi</option>'+
'<option value="09208">Oyama-shi</option>'+
'<option value="09209">Moka-shi</option>'+
'<option value="09210">Ohtawara-shi</option>'+
'<option value="09211">Yaita-shi</option>'+
'<option value="09213">Nasushiobara-shi</option>'+
'<option value="09214">Sakura-shi</option>'+
'<option value="09215">Nasukarasuyama-shi</option>'+
'<option value="09216">Shimotsuke-shi</option>'+
'<option value="09301">Kaminokawa-machi</option>'+
'<option value="09342">Mashiko-machi</option>'+
'<option value="09343">Motegi-machi</option>'+
'<option value="09344">Ichikai-machi</option>'+
'<option value="09345">Haga-machi</option>'+
'<option value="09361">Mibu-machi</option>'+
'<option value="09364">Nogi-machi</option>'+
'<option value="09384">Shioya-machi</option>'+
'<option value="09386">Takanezawa-machi</option>'+
'<option value="09407">Nasu-machi</option>'+
'<option value="09411">Nakagawa-machi</option>'+

								   '</select>'
		break;
	case "10000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="10201">Maebashi-shi</option>'+
'<option value="10202">Takasaki-shi</option>'+
'<option value="10203">Kiryu-shi</option>'+
'<option value="10204">Isesaki-shi</option>'+
'<option value="10205">Ota-shi</option>'+
'<option value="10206">Numata-shi</option>'+
'<option value="10207">Tatebayashi-shi</option>'+
'<option value="10208">Shibukawa-shi</option>'+
'<option value="10209">Fujioka-shi</option>'+
'<option value="10210">Tomioka-shi</option>'+
'<option value="10211">Annaka-shi</option>'+
'<option value="10212">Midori-shi</option>'+
'<option value="10344">Shinto-mura</option>'+
'<option value="10345">Yoshioka-machi</option>'+
'<option value="10366">Ueno-mura</option>'+
'<option value="10367">Kanna-machi</option>'+
'<option value="10382">Shimonita-machi</option>'+
'<option value="10383">Nammoku-mura</option>'+
'<option value="10384">Kanra-machi</option>'+
'<option value="10421">Nakanojo-machi</option>'+
'<option value="10424">Naganohara-machi</option>'+
'<option value="10425">Tsumagoi-mura</option>'+
'<option value="10426">Kusatsu-machi</option>'+
'<option value="10428">Takayama-mura</option>'+
'<option value="10429">Higashiagatsuma-machi</option>'+
'<option value="10443">Katashina-mura</option>'+
'<option value="10444">Kawaba-mura</option>'+
'<option value="10448">Showa-mura</option>'+
'<option value="10449">Minakami-machi</option>'+
'<option value="10464">Tamamura-machi</option>'+
'<option value="10521">Itakura-machi</option>'+
'<option value="10522">Meiwa-machi</option>'+
'<option value="10523">Chiyoda-machi</option>'+
'<option value="10524">Oizumi-machi</option>'+
'<option value="10525">Ora-machi</option>'+

								   '</select>'
		break;
	case "11000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="11100">Saitama-shi</option>'+
'<option value="11101">Saitama-shi Nishi-ku</option>'+
'<option value="11102">Saitama-shi Kita-ku</option>'+
'<option value="11103">Saitama-shi Omiya-ku</option>'+
'<option value="11104">Saitama-shi Minuma-ku</option>'+
'<option value="11105">Saitama-shi Chuo-ku</option>'+
'<option value="11106">Saitama-shi Sakura-ku</option>'+
'<option value="11107">Saitama-shi Urawa-ku</option>'+
'<option value="11108">Saitama-shi Minami-ku</option>'+
'<option value="11109">Saitama-shi Midori-ku</option>'+
'<option value="11110">Saitama-shi Iwatsuki-ku</option>'+
'<option value="11201">Kawagoe-shi</option>'+
'<option value="11202">Kumagaya-shi</option>'+
'<option value="11203">Kawaguchi-shi</option>'+
'<option value="11206">Gyoda-shi</option>'+
'<option value="11207">Chichibu-shi</option>'+
'<option value="11208">Tokorozawa-shi</option>'+
'<option value="11209">Hanno-shi</option>'+
'<option value="11210">Kazo-shi</option>'+
'<option value="11211">Honjo-shi</option>'+
'<option value="11212">Higashimatsuyama-shi</option>'+
'<option value="11214">Kasukabe-shi</option>'+
'<option value="11215">Sayama-shi</option>'+
'<option value="11216">Hanyu-shi</option>'+
'<option value="11217">Konosu-shi</option>'+
'<option value="11218">Fukaya-shi</option>'+
'<option value="11219">Ageo-shi</option>'+
'<option value="11221">Soka-shi</option>'+
'<option value="11222">Koshigaya-shi</option>'+
'<option value="11223">Warabi-shi</option>'+
'<option value="11224">Toda-shi</option>'+
'<option value="11225">Iruma-shi</option>'+
'<option value="11227">Asaka-shi</option>'+
'<option value="11228">Shiki-shi</option>'+
'<option value="11229">Wako-shi</option>'+
'<option value="11230">Niiza-shi</option>'+
'<option value="11231">Okegawa-shi</option>'+
'<option value="11232">Kuki-shi</option>'+
'<option value="11233">Kitamoto-shi</option>'+
'<option value="11234">Yashio-shi</option>'+
'<option value="11235">Fujimi-shi</option>'+
'<option value="11237">Misato-shi</option>'+
'<option value="11238">Hasuda-shi</option>'+
'<option value="11239">Sakado-shi</option>'+
'<option value="11240">Satte-shi</option>'+
'<option value="11241">Tsurugashima-shi</option>'+
'<option value="11242">Hidaka-shi</option>'+
'<option value="11243">Yoshikawa-shi</option>'+
'<option value="11245">Fujimino-shi</option>'+
'<option value="11246">Shiraoka-shi</option>'+
'<option value="11301">Ina-machi</option>'+
'<option value="11324">Miyoshi-machi</option>'+
'<option value="11326">Moroyama-machi</option>'+
'<option value="11327">Ogose-machi</option>'+
'<option value="11341">Namegawa-machi</option>'+
'<option value="11342">Ranzan-machi</option>'+
'<option value="11343">Ogawa-machi</option>'+
'<option value="11346">Kawajima-machi</option>'+
'<option value="11347">Yoshimi-machi</option>'+
'<option value="11348">Hatoyama-machi</option>'+
'<option value="11349">Tokigawa-machi</option>'+
'<option value="11361">Yokoze-machi</option>'+
'<option value="11362">Minano-machi</option>'+
'<option value="11363">Nagatoro-machi</option>'+
'<option value="11365">Ogano-machi</option>'+
'<option value="11369">Higashichichibu-mura</option>'+
'<option value="11381">Misato-machi</option>'+
'<option value="11383">Kamikawa-machi</option>'+
'<option value="11385">Kamisato-machi</option>'+
'<option value="11408">Yorii-machi</option>'+
'<option value="11442">Miyashiro-machi</option>'+
'<option value="11464">Sugito-machi</option>'+
'<option value="11465">Matsubushi-machi</option>'+

								   '</select>'
		break;
	case "12000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="12100">Chiba-shi</option>'+
'<option value="12101">Chiba-shi Chuo-ku</option>'+
'<option value="12102">Chiba-shi Hanamigawa-ku</option>'+
'<option value="12103">Chiba-shi Inage-ku</option>'+
'<option value="12104">Chiba-shi Wakaba-ku</option>'+
'<option value="12105">Chiba-shi Midori-ku</option>'+
'<option value="12106">Chiba-shi Mihama-ku</option>'+
'<option value="12202">Choshi-shi</option>'+
'<option value="12203">Ichikawa-shi</option>'+
'<option value="12204">Funabashi-shi</option>'+
'<option value="12205">Tateyama-shi</option>'+
'<option value="12206">Kisarazu-shi</option>'+
'<option value="12207">Matsudo-shi</option>'+
'<option value="12208">Noda-shi</option>'+
'<option value="12210">Mobara-shi</option>'+
'<option value="12211">Narita-shi</option>'+
'<option value="12212">Sakura-shi</option>'+
'<option value="12213">Togane-shi</option>'+
'<option value="12215">Asahi-shi</option>'+
'<option value="12216">Narashino-shi</option>'+
'<option value="12217">Kashiwa-shi</option>'+
'<option value="12218">Katsuura-shi</option>'+
'<option value="12219">Ichihara-shi</option>'+
'<option value="12220">Nagareyama-shi</option>'+
'<option value="12221">Yachiyo-shi</option>'+
'<option value="12222">Abiko-shi</option>'+
'<option value="12223">Kamogawa-shi</option>'+
'<option value="12224">Kamagaya-shi</option>'+
'<option value="12225">Kimitsu-shi</option>'+
'<option value="12226">Futtsu-shi</option>'+
'<option value="12227">Urayasu-shi</option>'+
'<option value="12228">Yotsukaido-shi</option>'+
'<option value="12229">Sodegaura-shi</option>'+
'<option value="12230">Yachimata-shi</option>'+
'<option value="12231">Inzai-shi</option>'+
'<option value="12232">Shiroi-shi</option>'+
'<option value="12233">Tomisato-shi</option>'+
'<option value="12234">Minamiboso-shi</option>'+
'<option value="12235">Sosa-shi</option>'+
'<option value="12236">Katori-shi</option>'+
'<option value="12237">Sammu-shi</option>'+
'<option value="12238">Isumi-shi</option>'+
'<option value="12239">Oamishirasato-shi</option>'+
'<option value="12322">Shisui-machi</option>'+
'<option value="12329">Sakae-machi</option>'+
'<option value="12342">Kozaki-machi</option>'+
'<option value="12347">Tako-machi</option>'+
'<option value="12349">Tonosho-machi</option>'+
'<option value="12403">Kujukuri-machi</option>'+
'<option value="12409">Shibayama-machi</option>'+
'<option value="12410">Yokoshibahikari-machi</option>'+
'<option value="12421">Ichinomiya-machi</option>'+
'<option value="12422">Mutsuzawa-machi</option>'+
'<option value="12423">Chosei-mura</option>'+
'<option value="12424">Shirako-machi</option>'+
'<option value="12426">Nagara-machi</option>'+
'<option value="12427">Chonan-machi</option>'+
'<option value="12441">Otaki-machi</option>'+
'<option value="12443">Onjuku-machi</option>'+
'<option value="12463">Kyonan-machi</option>'+

								   '</select>'
		break;
	case "13000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="13100">23Ku-area</option>'+
'<option value="13101">Chiyoda-ku</option>'+
'<option value="13102">Chuo-ku</option>'+
'<option value="13103">Minato-ku</option>'+
'<option value="13104">Shinjuku-ku</option>'+
'<option value="13105">Bunkyo-ku</option>'+
'<option value="13106">Taito-ku</option>'+
'<option value="13107">Sumida-ku</option>'+
'<option value="13108">Koto-ku</option>'+
'<option value="13109">Shinagawa-ku</option>'+
'<option value="13110">Meguro-ku</option>'+
'<option value="13111">Ota-ku</option>'+
'<option value="13112">Setagaya-ku</option>'+
'<option value="13113">Shibuya-ku</option>'+
'<option value="13114">Nakano-ku</option>'+
'<option value="13115">Suginami-ku</option>'+
'<option value="13116">Toshima-ku</option>'+
'<option value="13117">Kita-ku</option>'+
'<option value="13118">Arakawa-ku</option>'+
'<option value="13119">Itabashi-ku</option>'+
'<option value="13120">Nerima-ku</option>'+
'<option value="13121">Adachi-ku</option>'+
'<option value="13122">Katsushika-ku</option>'+
'<option value="13123">Edogawa-ku</option>'+
'<option value="13201">Hachioji-shi</option>'+
'<option value="13202">Tachikawa-shi</option>'+
'<option value="13203">Musashino-shi</option>'+
'<option value="13204">Mitaka-shi</option>'+
'<option value="13205">Ome-shi</option>'+
'<option value="13206">Fuchu-shi</option>'+
'<option value="13207">Akishima-shi</option>'+
'<option value="13208">Chofu-shi</option>'+
'<option value="13209">Machida-shi</option>'+
'<option value="13210">Koganei-shi</option>'+
'<option value="13211">Kodaira-shi</option>'+
'<option value="13212">Hino-shi</option>'+
'<option value="13213">Higashimurayama-shi</option>'+
'<option value="13214">Kokubunji-shi</option>'+
'<option value="13215">Kunitachi-shi</option>'+
'<option value="13218">Fussa-shi</option>'+
'<option value="13219">Komae-shi</option>'+
'<option value="13220">Higashiyamato-shi</option>'+
'<option value="13221">Kiyose-shi</option>'+
'<option value="13222">Higashikurume-shi</option>'+
'<option value="13223">Musashimurayama-shi</option>'+
'<option value="13224">Tama-shi</option>'+
'<option value="13225">Inagi-shi</option>'+
'<option value="13227">Hamura-shi</option>'+
'<option value="13228">Akiruno-shi</option>'+
'<option value="13229">Nishitokyo-shi</option>'+
'<option value="13303">Mizuho-machi</option>'+
'<option value="13305">Hinode-machi</option>'+
'<option value="13307">Hinohara-mura</option>'+
'<option value="13308">Okutama-machi</option>'+
'<option value="13361">Oshima-machi</option>'+
'<option value="13362">Toshima-mura</option>'+
'<option value="13363">Niijima-mura</option>'+
'<option value="13364">Kouzushima-mura</option>'+
'<option value="13381">Miyake-mura</option>'+
'<option value="13382">Mikurajima-mura</option>'+
'<option value="13401">Hachijo-machi</option>'+
'<option value="13402">Aogashima-mura</option>'+
'<option value="13421">Ogasawara-mura</option>'+

								   '</select>'
		break;
	case "14000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="14100">Yokohama-shi</option>'+
'<option value="14101">Yokohama-shi Tsurumi-ku</option>'+
'<option value="14102">Yokohama-shi Kanagawa-ku</option>'+
'<option value="14103">Yokohama-shi Nishi-ku</option>'+
'<option value="14104">Yokohama-shi Naka-ku</option>'+
'<option value="14105">Yokohama-shi Minami-ku</option>'+
'<option value="14106">Yokohama-shi Hodogaya-ku</option>'+
'<option value="14107">Yokohama-shi Isogo-ku</option>'+
'<option value="14108">Yokohama-shi Kanazawa-ku</option>'+
'<option value="14109">Yokohama-shi Kohoku-ku</option>'+
'<option value="14110">Yokohama-shi Totsuka-ku</option>'+
'<option value="14111">Yokohama-shi Konan-ku</option>'+
'<option value="14112">Yokohama-shi Asahi-ku</option>'+
'<option value="14113">Yokohama-shi Midori-ku</option>'+
'<option value="14114">Yokohama-shi Seya-ku</option>'+
'<option value="14115">Yokohama-shi Sakae-ku</option>'+
'<option value="14116">Yokohama-shi Izumi-ku</option>'+
'<option value="14117">Yokohama-shi Aoba-ku</option>'+
'<option value="14118">Yokohama-shi Tsuzuki-ku</option>'+
'<option value="14130">Kawasaki-shi</option>'+
'<option value="14131">Kawasaki-shi Kawasaki-ku</option>'+
'<option value="14132">Kawasaki-shi Saiwai-ku</option>'+
'<option value="14133">Kawasaki-shi Nakahara-ku</option>'+
'<option value="14134">Kawasaki-shi Takatsu-ku</option>'+
'<option value="14135">Kawasaki-shi Tama-ku</option>'+
'<option value="14136">Kawasaki-shi Miyamae-ku</option>'+
'<option value="14137">Kawasaki-shi Asao-ku</option>'+
'<option value="14150">Sagamihara-shi</option>'+
'<option value="14151">Sagamihara-shi Midori-ku</option>'+
'<option value="14152">Sagamihara-shi Chuo-ku</option>'+
'<option value="14153">Sagamihara-shi Minami-ku</option>'+
'<option value="14201">Yokosuka-shi</option>'+
'<option value="14203">Hiratsuka-shi</option>'+
'<option value="14204">Kamakura-shi</option>'+
'<option value="14205">Fujisawa-shi</option>'+
'<option value="14206">Odawara-shi</option>'+
'<option value="14207">Chigasaki-shi</option>'+
'<option value="14208">Zushi-shi</option>'+
'<option value="14210">Miura-shi</option>'+
'<option value="14211">Hadano-shi</option>'+
'<option value="14212">Atsugi-shi</option>'+
'<option value="14213">Yamato-shi</option>'+
'<option value="14214">Isehara-shi</option>'+
'<option value="14215">Ebina-shi</option>'+
'<option value="14216">Zama-shi</option>'+
'<option value="14217">Minamiashigara-shi</option>'+
'<option value="14218">Ayase-shi</option>'+
'<option value="14301">Hayama-machi</option>'+
'<option value="14321">Samukawa-machi</option>'+
'<option value="14341">Oiso-machi</option>'+
'<option value="14342">Ninomiya-machi</option>'+
'<option value="14361">Nakai-machi</option>'+
'<option value="14362">Oi-machi</option>'+
'<option value="14363">Matsuda-machi</option>'+
'<option value="14364">Yamakita-machi</option>'+
'<option value="14366">Kaisei-machi</option>'+
'<option value="14382">Hakone-machi</option>'+
'<option value="14383">Manazuru-machi</option>'+
'<option value="14384">Yugawara-machi</option>'+
'<option value="14401">Aikawa-machi</option>'+
'<option value="14402">Kiyokawa-mura</option>'+

								   '</select>'
		break;
	case "15000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="15100">Niigata-shi</option>'+
'<option value="15101">Niigata-shi Kita-ku</option>'+
'<option value="15102">Niigata-shi Higashi-ku</option>'+
'<option value="15103">Niigata-shi Chuo-ku</option>'+
'<option value="15104">Niigata-shi Konan-ku</option>'+
'<option value="15105">Niigata-shi Akiha-ku</option>'+
'<option value="15106">Niigata-shi Minami-ku</option>'+
'<option value="15107">Niigata-shi Nishi-ku</option>'+
'<option value="15108">Niigata-shi Nishikan-ku</option>'+
'<option value="15202">Nagaoka-shi</option>'+
'<option value="15204">Sanjo-shi</option>'+
'<option value="15205">Kashiwazaki-shi</option>'+
'<option value="15206">Shibata-shi</option>'+
'<option value="15208">Ojiya-shi</option>'+
'<option value="15209">Kamo-shi</option>'+
'<option value="15210">Tokamachi-shi</option>'+
'<option value="15211">Mitsuke-shi</option>'+
'<option value="15212">Murakami-shi</option>'+
'<option value="15213">Tsubame-shi</option>'+
'<option value="15216">Itoigawa-shi</option>'+
'<option value="15217">Myoko-shi</option>'+
'<option value="15218">Gosen-shi</option>'+
'<option value="15222">Joetsu-shi</option>'+
'<option value="15223">Agano-shi</option>'+
'<option value="15224">Sado-shi</option>'+
'<option value="15225">Uonuma-shi</option>'+
'<option value="15226">Minamiuonuma-shi</option>'+
'<option value="15227">Tainai-shi</option>'+
'<option value="15307">Seiro-machi</option>'+
'<option value="15342">Yahiko-mura</option>'+
'<option value="15361">Tagami-machi</option>'+
'<option value="15385">Aga-machi</option>'+
'<option value="15405">Izumozaki-machi</option>'+
'<option value="15461">Yuzawa-machi</option>'+
'<option value="15482">Tsunan-machi</option>'+
'<option value="15504">Kariwa-mura</option>'+
'<option value="15581">Sekikawa-mura</option>'+
'<option value="15586">Awashimaura-mura</option>'+

								   '</select>'
		break;
	case "16000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="16201">Toyama-shi</option>'+
'<option value="16202">Takaoka-shi</option>'+
'<option value="16204">Uozu-shi</option>'+
'<option value="16205">Himi-shi</option>'+
'<option value="16206">Namerikawa-shi</option>'+
'<option value="16207">Kurobe-shi</option>'+
'<option value="16208">Tonami-shi</option>'+
'<option value="16209">Oyabe-shi</option>'+
'<option value="16210">Nanto-shi</option>'+
'<option value="16211">Imizu-shi</option>'+
'<option value="16321">Funahashi-mura</option>'+
'<option value="16322">Kamiichi-machi</option>'+
'<option value="16323">Tateyama-machi</option>'+
'<option value="16342">Nyuzen-machi</option>'+
'<option value="16343">Asahi-machi</option>'+

								   '</select>'
		break;
	case "17000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="17201">Kanazawa-shi</option>'+
'<option value="17202">Nanao-shi</option>'+
'<option value="17203">Komatsu-shi</option>'+
'<option value="17204">Wajima-shi</option>'+
'<option value="17205">Suzu-shi</option>'+
'<option value="17206">Kaga-shi</option>'+
'<option value="17207">Hakui-shi</option>'+
'<option value="17209">Kahoku-shi</option>'+
'<option value="17210">Hakusan-shi</option>'+
'<option value="17211">Nomi-shi</option>'+
'<option value="17212">Nonoichi-shi</option>'+
'<option value="17324">Kawakita-machi</option>'+
'<option value="17361">Tsubata-machi</option>'+
'<option value="17365">Uchinada-machi</option>'+
'<option value="17384">Shika-machi</option>'+
'<option value="17386">Hodatsushimizu-cho</option>'+
'<option value="17407">Nakanoto-machi</option>'+
'<option value="17461">Anamizu-machi</option>'+
'<option value="17463">Noto-cho</option>'+

								   '</select>'
		break;
	case "18000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="18201">Fukui-shi</option>'+
'<option value="18202">Tsuruga-shi</option>'+
'<option value="18204">Obama-shi</option>'+
'<option value="18205">Ono-shi</option>'+
'<option value="18206">Katsuyama-shi</option>'+
'<option value="18207">Sabae-shi</option>'+
'<option value="18208">Awara-shi</option>'+
'<option value="18209">Echizen-shi</option>'+
'<option value="18210">Sakai-shi</option>'+
'<option value="18322">Eiheiji-cho</option>'+
'<option value="18382">Ikeda-cho</option>'+
'<option value="18404">Minamiechizen-cho</option>'+
'<option value="18423">Echizen-cho</option>'+
'<option value="18442">Mihama-cho</option>'+
'<option value="18481">Takahama-cho</option>'+
'<option value="18483">Ohi-cho</option>'+
'<option value="18501">Wakasa-cho</option>'+

								   '</select>'
		break;
	case "19000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="19201">Kofu-shi</option>'+
'<option value="19202">Fujiyoshida-shi</option>'+
'<option value="19204">Tsuru-shi</option>'+
'<option value="19205">Yamanashi-shi</option>'+
'<option value="19206">Otsuki-shi</option>'+
'<option value="19207">Nirasaki-shi</option>'+
'<option value="19208">Minamiarupusu-shi</option>'+
'<option value="19209">Hokuto-shi</option>'+
'<option value="19210">Kai-shi</option>'+
'<option value="19211">Fuefuki-shi</option>'+
'<option value="19212">Uenohara-shi</option>'+
'<option value="19213">Koshu-shi</option>'+
'<option value="19214">Chuo-shi</option>'+
'<option value="19346">Ichikawamisato-cho</option>'+
'<option value="19364">Hayakawa-cho</option>'+
'<option value="19365">Minobu-cho</option>'+
'<option value="19366">Nambu-cho</option>'+
'<option value="19368">Fujikawa-cho</option>'+
'<option value="19384">Showa-cho</option>'+
'<option value="19422">Doshi-mura</option>'+
'<option value="19423">Nishikatsura-cho</option>'+
'<option value="19424">Oshino-mura</option>'+
'<option value="19425">Yamanakako-mura</option>'+
'<option value="19429">Narusawa-mura</option>'+
'<option value="19430">Fujikawaguchiko-machi</option>'+
'<option value="19442">Kosuge-mura</option>'+
'<option value="19443">Tabayama-mura</option>'+

								   '</select>'
		break;
	case "20000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="20201">Nagano-shi</option>'+
'<option value="20202">Matsumoto-shi</option>'+
'<option value="20203">Ueda-shi</option>'+
'<option value="20204">Okaya-shi</option>'+
'<option value="20205">Iida-shi</option>'+
'<option value="20206">Suwa-shi</option>'+
'<option value="20207">Suzaka-shi</option>'+
'<option value="20208">Komoro-shi</option>'+
'<option value="20209">Ina-shi</option>'+
'<option value="20210">Komagane-shi</option>'+
'<option value="20211">Nakano-shi</option>'+
'<option value="20212">Omachi-shi</option>'+
'<option value="20213">Iiyama-shi</option>'+
'<option value="20214">Chino-shi</option>'+
'<option value="20215">Shiojiri-shi</option>'+
'<option value="20217">Saku-shi</option>'+
'<option value="20218">Chikuma-shi</option>'+
'<option value="20219">Tomi-shi</option>'+
'<option value="20220">Azumino-shi</option>'+
'<option value="20303">Koumi-machi</option>'+
'<option value="20304">Kawakami-mura</option>'+
'<option value="20305">Minamimaki-mura</option>'+
'<option value="20306">Minamiaiki-mura</option>'+
'<option value="20307">Kitaaiki-mura</option>'+
'<option value="20309">Sakuho-machi</option>'+
'<option value="20321">Karuizawa-machi</option>'+
'<option value="20323">Miyota-machi</option>'+
'<option value="20324">Tateshina-machi</option>'+
'<option value="20349">Aoki-mura</option>'+
'<option value="20350">Nagawa-machi</option>'+
'<option value="20361">Shimosuwa-machi</option>'+
'<option value="20362">Fujimi-machi</option>'+
'<option value="20363">Hara-mura</option>'+
'<option value="20382">Tatsuno-machi</option>'+
'<option value="20383">Minowa-machi</option>'+
'<option value="20384">Iijima-machi</option>'+
'<option value="20385">Minamiminowa-mura</option>'+
'<option value="20386">Nakagawa-mura</option>'+
'<option value="20388">Miyada-mura</option>'+
'<option value="20402">Matsukawa-machi</option>'+
'<option value="20403">Takamori-machi</option>'+
'<option value="20404">Anan-cho</option>'+
'<option value="20407">Achi-mura</option>'+
'<option value="20409">Hiraya-mura</option>'+
'<option value="20410">Neba-mura</option>'+
'<option value="20411">Shimojo-mura</option>'+
'<option value="20412">Urugi-mura</option>'+
'<option value="20413">Tenryu-mura</option>'+
'<option value="20414">Yasuoka-mura</option>'+
'<option value="20415">Takagi-mura</option>'+
'<option value="20416">Toyooka-mura</option>'+
'<option value="20417">Oshika-mura</option>'+
'<option value="20422">Agematsu-machi</option>'+
'<option value="20423">Nagiso-machi</option>'+
'<option value="20425">Kiso-mura</option>'+
'<option value="20429">Otaki-mura</option>'+
'<option value="20430">Okuwa-mura</option>'+
'<option value="20432">Kiso-machi</option>'+
'<option value="20446">Omi-mura</option>'+
'<option value="20448">Ikusaka-mura</option>'+
'<option value="20450">Yamagata-mura</option>'+
'<option value="20451">Asahi-mura</option>'+
'<option value="20452">Chikuhoku-mura</option>'+
'<option value="20481">Ikeda-machi</option>'+
'<option value="20482">Matsukawa-mura</option>'+
'<option value="20485">Hakuba-mura</option>'+
'<option value="20486">Otari-mura</option>'+
'<option value="20521">Sakaki-machi</option>'+
'<option value="20541">Obuse-machi</option>'+
'<option value="20543">Takayama-mura</option>'+
'<option value="20561">Yamanouchi-machi</option>'+
'<option value="20562">Kijimadaira-mura</option>'+
'<option value="20563">Nozawaonsen-mura</option>'+
'<option value="20583">Shinano-machi</option>'+
'<option value="20588">Ogawa-mura</option>'+
'<option value="20590">Iizuna-machi</option>'+
'<option value="20602">Sakae-mura</option>'+

								   '</select>'
		break;
	case "21000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="21201">Gifu-shi</option>'+
'<option value="21202">Ogaki-shi</option>'+
'<option value="21203">Takayama-shi</option>'+
'<option value="21204">Tajimi-shi</option>'+
'<option value="21205">Seki-shi</option>'+
'<option value="21206">Nakatsugawa-shi</option>'+
'<option value="21207">Mino-shi</option>'+
'<option value="21208">Mizunami-shi</option>'+
'<option value="21209">Hashima-shi</option>'+
'<option value="21210">Ena-shi</option>'+
'<option value="21211">Minokamo-shi</option>'+
'<option value="21212">Toki-shi</option>'+
'<option value="21213">Kakamigahara-shi</option>'+
'<option value="21214">Kani-shi</option>'+
'<option value="21215">Yamagata-shi</option>'+
'<option value="21216">Mizuho-shi</option>'+
'<option value="21217">Hida-shi</option>'+
'<option value="21218">Motosu-shi</option>'+
'<option value="21219">Gujo-shi</option>'+
'<option value="21220">Gero-shi</option>'+
'<option value="21221">Kaizu-shi</option>'+
'<option value="21302">Ginan-cho</option>'+
'<option value="21303">Kasamatsu-cho</option>'+
'<option value="21341">Yoro-cho</option>'+
'<option value="21361">Tarui-cho</option>'+
'<option value="21362">Sekigahara-cho</option>'+
'<option value="21381">Godo-cho</option>'+
'<option value="21382">Wanouchi-cho</option>'+
'<option value="21383">Anpachi-cho</option>'+
'<option value="21401">Ibigawa-cho</option>'+
'<option value="21403">Ono-cho</option>'+
'<option value="21404">Ikeda-cho</option>'+
'<option value="21421">Kitagata-cho</option>'+
'<option value="21501">Sakahogi-cho</option>'+
'<option value="21502">Tomika-cho</option>'+
'<option value="21503">Kawabe-cho</option>'+
'<option value="21504">Hichiso-cho</option>'+
'<option value="21505">Yaotsu-cho</option>'+
'<option value="21506">Shirakawa-cho</option>'+
'<option value="21507">Higashishirakawa-mura</option>'+
'<option value="21521">Mitake-cho</option>'+
'<option value="21604">Shirakawa-mura</option>'+

								   '</select>'
		break;
	case "22000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="22100">Shizuoka-shi</option>'+
'<option value="22101">Shizuoka-shi Aoi-ku</option>'+
'<option value="22102">Shizuoka-shi Suruga-ku</option>'+
'<option value="22103">Shizuoka-shi Shimizu-ku</option>'+
'<option value="22130">Hamamatsu-shi</option>'+
'<option value="22131">Hamamatsu-shi Naka-ku</option>'+
'<option value="22132">Hamamatsu-shi Higashi-ku</option>'+
'<option value="22133">Hamamatsu-shi Nishi-ku</option>'+
'<option value="22134">Hamamatsu-shi Minami-ku</option>'+
'<option value="22135">Hamamatsu-shi Kita-ku</option>'+
'<option value="22136">Hamamatsu-shi Hamakita-ku</option>'+
'<option value="22137">Hamamatsu-shi Tenryu-ku</option>'+
'<option value="22203">Numazu-shi</option>'+
'<option value="22205">Atami-shi</option>'+
'<option value="22206">Mishima-shi</option>'+
'<option value="22207">Fujinomiya-shi</option>'+
'<option value="22208">Ito-shi</option>'+
'<option value="22209">Shimada-shi</option>'+
'<option value="22210">Fuji-shi</option>'+
'<option value="22211">Iwata-shi</option>'+
'<option value="22212">Yaizu-shi</option>'+
'<option value="22213">Kakegawa-shi</option>'+
'<option value="22214">Fujieda-shi</option>'+
'<option value="22215">Gotemba-shi</option>'+
'<option value="22216">Fukuroi-shi</option>'+
'<option value="22219">Shimoda-shi</option>'+
'<option value="22220">Susono-shi</option>'+
'<option value="22221">Kosai-shi</option>'+
'<option value="22222">Izu-shi</option>'+
'<option value="22223">Omaezaki-shi</option>'+
'<option value="22224">Kikugawa-shi</option>'+
'<option value="22225">Izunokuni-shi</option>'+
'<option value="22226">Makinohara-shi</option>'+
'<option value="22301">Higashiizu-cho</option>'+
'<option value="22302">Kawazu-cho</option>'+
'<option value="22304">Minamiizu-cho</option>'+
'<option value="22305">Matsuzaki-cho</option>'+
'<option value="22306">Nishiizu-cho</option>'+
'<option value="22325">Kannami-cho</option>'+
'<option value="22341">Shimizu-cho</option>'+
'<option value="22342">Nagaizumi-cho</option>'+
'<option value="22344">Oyama-cho</option>'+
'<option value="22424">Yoshida-cho</option>'+
'<option value="22429">Kawanehon-cho</option>'+
'<option value="22461">Mori-machi</option>'+

								   '</select>'
		break;
	case "23000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="23100">Nagoya-shi</option>'+
'<option value="23101">Nagoya-shi Chikusa-ku</option>'+
'<option value="23102">Nagoya-shi Higashi-ku</option>'+
'<option value="23103">Nagoya-shi Kita-ku</option>'+
'<option value="23104">Nagoya-shi Nishi-ku</option>'+
'<option value="23105">Nagoya-shi Nakamura-ku</option>'+
'<option value="23106">Nagoya-shi Naka-ku</option>'+
'<option value="23107">Nagoya-shi Showa-ku</option>'+
'<option value="23108">Nagoya-shi Mizuho-ku</option>'+
'<option value="23109">Nagoya-shi Atsuta-ku</option>'+
'<option value="23110">Nagoya-shi Nakagawa-ku</option>'+
'<option value="23111">Nagoya-shi Minato-ku</option>'+
'<option value="23112">Nagoya-shi Minami-ku</option>'+
'<option value="23113">Nagoya-shi Moriyama-ku</option>'+
'<option value="23114">Nagoya-shi Midori-ku</option>'+
'<option value="23115">Nagoya-shi Meito-ku</option>'+
'<option value="23116">Nagoya-shi Tempaku-ku</option>'+
'<option value="23201">Toyohashi-shi</option>'+
'<option value="23202">Okazaki-shi</option>'+
'<option value="23203">Ichinomiya-shi</option>'+
'<option value="23204">Seto-shi</option>'+
'<option value="23205">Handa-shi</option>'+
'<option value="23206">Kasugai-shi</option>'+
'<option value="23207">Toyokawa-shi</option>'+
'<option value="23208">Tsushima-shi</option>'+
'<option value="23209">Hekinan-shi</option>'+
'<option value="23210">Kariya-shi</option>'+
'<option value="23211">Toyota-shi</option>'+
'<option value="23212">Anjo-shi</option>'+
'<option value="23213">Nishio-shi</option>'+
'<option value="23214">Gamagori-shi</option>'+
'<option value="23215">Inuyama-shi</option>'+
'<option value="23216">Tokoname-shi</option>'+
'<option value="23217">Konan-shi</option>'+
'<option value="23219">Komaki-shi</option>'+
'<option value="23220">Inazawa-shi</option>'+
'<option value="23221">Shinshiro-shi</option>'+
'<option value="23222">Tokai-shi</option>'+
'<option value="23223">Obu-shi</option>'+
'<option value="23224">Chita-shi</option>'+
'<option value="23225">Chiryu-shi</option>'+
'<option value="23226">Owariasahi-shi</option>'+
'<option value="23227">Takahama-shi</option>'+
'<option value="23228">Iwakura-shi</option>'+
'<option value="23229">Toyoake-shi</option>'+
'<option value="23230">Nisshin-shi</option>'+
'<option value="23231">Tahara-shi</option>'+
'<option value="23232">Aisai-shi</option>'+
'<option value="23233">Kiyosu-shi</option>'+
'<option value="23234">Kitanagoya-shi</option>'+
'<option value="23235">Yatomi-shi</option>'+
'<option value="23236">Miyoshi-shi</option>'+
'<option value="23237">Ama-shi</option>'+
'<option value="23238">Nagakute-shi</option>'+
'<option value="23302">Togo-cho</option>'+
'<option value="23342">Toyoyama-cho</option>'+
'<option value="23361">Oguchi-cho</option>'+
'<option value="23362">Fuso-cho</option>'+
'<option value="23424">Oharu-cho</option>'+
'<option value="23425">Kanie-cho</option>'+
'<option value="23427">Tobishima-mura</option>'+
'<option value="23441">Agui-cho</option>'+
'<option value="23442">Higashiura-cho</option>'+
'<option value="23445">Minamichita-cho</option>'+
'<option value="23446">Mihama-cho</option>'+
'<option value="23447">Taketoyo-cho</option>'+
'<option value="23501">Kota-cho</option>'+
'<option value="23561">Shitara-cho</option>'+
'<option value="23562">Toei-cho</option>'+
'<option value="23563">Toyone-mura</option>'+

								   '</select>'
		break;
	case "24000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="24201">Tsu-shi</option>'+
'<option value="24202">Yokkaichi-shi</option>'+
'<option value="24203">Ise-shi</option>'+
'<option value="24204">Matsusaka-shi</option>'+
'<option value="24205">Kuwana-shi</option>'+
'<option value="24207">Suzuka-shi</option>'+
'<option value="24208">Nabari-shi</option>'+
'<option value="24209">Owase-shi</option>'+
'<option value="24210">Kameyama-shi</option>'+
'<option value="24211">Toba-shi</option>'+
'<option value="24212">Kumano-shi</option>'+
'<option value="24214">Inabe-shi</option>'+
'<option value="24215">Shima-shi</option>'+
'<option value="24216">Iga-shi</option>'+
'<option value="24303">Kisosaki-cho</option>'+
'<option value="24324">Toin-cho</option>'+
'<option value="24341">Komono-cho</option>'+
'<option value="24343">Asahi-cho</option>'+
'<option value="24344">Kawagoe-cho</option>'+
'<option value="24441">Taki-cho</option>'+
'<option value="24442">Meiwa-cho</option>'+
'<option value="24443">Odai-cho</option>'+
'<option value="24461">Tamaki-cho</option>'+
'<option value="24470">Watarai-cho</option>'+
'<option value="24471">Taiki-cho</option>'+
'<option value="24472">Minamiise-cho</option>'+
'<option value="24543">Kihoku-cho</option>'+
'<option value="24561">Mihama-cho</option>'+
'<option value="24562">Kiho-cho</option>'+

								   '</select>'
		break;
	case "25000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="25201">Otsu-shi</option>'+
'<option value="25202">Hikone-shi</option>'+
'<option value="25203">Nagahama-shi</option>'+
'<option value="25204">Omihachiman-shi</option>'+
'<option value="25206">Kusatsu-shi</option>'+
'<option value="25207">Moriyama-shi</option>'+
'<option value="25208">Ritto-shi</option>'+
'<option value="25209">Koka-shi</option>'+
'<option value="25210">Yasu-shi</option>'+
'<option value="25211">Konan-shi</option>'+
'<option value="25212">Takashima-shi</option>'+
'<option value="25213">Higashiomi-shi</option>'+
'<option value="25214">Maibara-shi</option>'+
'<option value="25383">Hino-cho</option>'+
'<option value="25384">Ryuo-cho</option>'+
'<option value="25425">Aisho-cho</option>'+
'<option value="25441">Toyosato-cho</option>'+
'<option value="25442">Kora-cho</option>'+
'<option value="25443">Taga-cho</option>'+

								   '</select>'
		break;
	case "26000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="26100">Kyoto-shi</option>'+
'<option value="26101">Kyoto-shi Kita-ku</option>'+
'<option value="26102">Kyoto-shi Kamigyo-ku</option>'+
'<option value="26103">Kyoto-shi Sakyo-ku</option>'+
'<option value="26104">Kyoto-shi Nakagyo-ku</option>'+
'<option value="26105">Kyoto-shi Higashiyama-ku</option>'+
'<option value="26106">Kyoto-shi Shimogyo-ku</option>'+
'<option value="26107">Kyoto-shi Minami-ku</option>'+
'<option value="26108">Kyoto-shi Ukyo-ku</option>'+
'<option value="26109">Kyoto-shi Fushimi-ku</option>'+
'<option value="26110">Kyoto-shi Yamashina-ku</option>'+
'<option value="26111">Kyoto-shi Nishikyo-ku</option>'+
'<option value="26201">Fukuchiyama-shi</option>'+
'<option value="26202">Maizuru-shi</option>'+
'<option value="26203">Ayabe-shi</option>'+
'<option value="26204">Uji-shi</option>'+
'<option value="26205">Miyazu-shi</option>'+
'<option value="26206">Kameoka-shi</option>'+
'<option value="26207">Joyo-shi</option>'+
'<option value="26208">Muko-shi</option>'+
'<option value="26209">Nagaokakyo-shi</option>'+
'<option value="26210">Yawata-shi</option>'+
'<option value="26211">Kyotanabe-shi</option>'+
'<option value="26212">Kyotango-shi</option>'+
'<option value="26213">Nantan-shi</option>'+
'<option value="26214">Kizugawa-shi</option>'+
'<option value="26303">Oyamazaki-cho</option>'+
'<option value="26322">Kumiyama-cho</option>'+
'<option value="26343">Ide-cho</option>'+
'<option value="26344">Ujitawara-cho</option>'+
'<option value="26364">Kasagi-cho</option>'+
'<option value="26365">Wazuka-cho</option>'+
'<option value="26366">Seika-cho</option>'+
'<option value="26367">Minamiyamashiro-mura</option>'+
'<option value="26407">Kyotamba-cho</option>'+
'<option value="26463">Ine-cho</option>'+
'<option value="26465">Yosano-cho</option>'+

								   '</select>'
		break;
	case "27000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="27100">Osaka-shi</option>'+
'<option value="27102">Osaka-shi Miyakojima-ku</option>'+
'<option value="27103">Osaka-shi Fukushima-ku</option>'+
'<option value="27104">Osaka-shi Konohana-ku</option>'+
'<option value="27106">Osaka-shi Nishi-ku</option>'+
'<option value="27107">Osaka-shi Minato-ku</option>'+
'<option value="27108">Osaka-shi Taisho-ku</option>'+
'<option value="27109">Osaka-shi Tennoji-ku</option>'+
'<option value="27111">Osaka-shi Naniwa-ku</option>'+
'<option value="27113">Osaka-shi Nishiyodogawa-ku</option>'+
'<option value="27114">Osaka-shi Higashiyodogawa-ku</option>'+
'<option value="27115">Osaka-shi Higashinari-ku</option>'+
'<option value="27116">Osaka-shi Ikuno-ku</option>'+
'<option value="27117">Osaka-shi Asahi-ku</option>'+
'<option value="27118">Osaka-shi Joto-ku</option>'+
'<option value="27119">Osaka-shi Abeno-ku</option>'+
'<option value="27120">Osaka-shi Sumiyoshi-ku</option>'+
'<option value="27121">Osaka-shi Higashisumiyoshi-ku</option>'+
'<option value="27122">Osaka-shi Nishinari-ku</option>'+
'<option value="27123">Osaka-shi Yodogawa-ku</option>'+
'<option value="27124">Osaka-shi Tsurumi-ku</option>'+
'<option value="27125">Osaka-shi Suminoe-ku</option>'+
'<option value="27126">Osaka-shi Hirano-ku</option>'+
'<option value="27127">Osaka-shi Kita-ku</option>'+
'<option value="27128">Osaka-shi Chuo-ku</option>'+
'<option value="27140">Sakai-shi</option>'+
'<option value="27141">Sakai-shi Sakai-ku</option>'+
'<option value="27142">Sakai-shi Naka-ku</option>'+
'<option value="27143">Sakai-shi Higashi-ku</option>'+
'<option value="27144">Sakai-shi Nishi-ku</option>'+
'<option value="27145">Sakai-shi Minami-ku</option>'+
'<option value="27146">Sakai-shi Kita-ku</option>'+
'<option value="27147">Sakai-shi Mihara-ku</option>'+
'<option value="27202">Kishiwada-shi</option>'+
'<option value="27203">Toyonaka-shi</option>'+
'<option value="27204">Ikeda-shi</option>'+
'<option value="27205">Suita-shi</option>'+
'<option value="27206">Izumiotsu-shi</option>'+
'<option value="27207">Takatsuki-shi</option>'+
'<option value="27208">Kaizuka-shi</option>'+
'<option value="27209">Moriguchi-shi</option>'+
'<option value="27210">Hirakata-shi</option>'+
'<option value="27211">Ibaraki-shi</option>'+
'<option value="27212">Yao-shi</option>'+
'<option value="27213">Izumisano-shi</option>'+
'<option value="27214">Tondabayashi-shi</option>'+
'<option value="27215">Neyagawa-shi</option>'+
'<option value="27216">Kawachinagano-shi</option>'+
'<option value="27217">Matsubara-shi</option>'+
'<option value="27218">Daito-shi</option>'+
'<option value="27219">Izumi-shi</option>'+
'<option value="27220">Minoh-shi</option>'+
'<option value="27221">Kashiwara-shi</option>'+
'<option value="27222">Habikino-shi</option>'+
'<option value="27223">Kadoma-shi</option>'+
'<option value="27224">Settsu-shi</option>'+
'<option value="27225">Takaishi-shi</option>'+
'<option value="27226">Fujiidera-shi</option>'+
'<option value="27227">Higashiosaka-shi</option>'+
'<option value="27228">Sennan-shi</option>'+
'<option value="27229">Shijonawate-shi</option>'+
'<option value="27230">Katano-shi</option>'+
'<option value="27231">Osakasayama-shi</option>'+
'<option value="27232">Hannan-shi</option>'+
'<option value="27301">Shimamoto-cho</option>'+
'<option value="27321">Toyono-cho</option>'+
'<option value="27322">Nose-cho</option>'+
'<option value="27341">Tadaoka-cho</option>'+
'<option value="27361">Kumatori-cho</option>'+
'<option value="27362">Tajiri-cho</option>'+
'<option value="27366">Misaki-cho</option>'+
'<option value="27381">Taishi-cho</option>'+
'<option value="27382">Kanan-cho</option>'+
'<option value="27383">Chihayaakasaka-mura</option>'+

								   '</select>'
		break;
	case "28000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="28100">Kobe-shi</option>'+
'<option value="28101">Kobe-shi Higashinada-ku</option>'+
'<option value="28102">Kobe-shi Nada-ku</option>'+
'<option value="28105">Kobe-shi Hyogo-ku</option>'+
'<option value="28106">Kobe-shi Nagata-ku</option>'+
'<option value="28107">Kobe-shi Suma-ku</option>'+
'<option value="28108">Kobe-shi Tarumi-ku</option>'+
'<option value="28109">Kobe-shi Kita-ku</option>'+
'<option value="28110">Kobe-shi Chuo-ku</option>'+
'<option value="28111">Kobe-shi Nishi-ku</option>'+
'<option value="28201">Himeji-shi</option>'+
'<option value="28202">Amagasaki-shi</option>'+
'<option value="28203">Akashi-shi</option>'+
'<option value="28204">Nishinomiya-shi</option>'+
'<option value="28205">Sumoto-shi</option>'+
'<option value="28206">Ashiya-shi</option>'+
'<option value="28207">Itami-shi</option>'+
'<option value="28208">Aioi-shi</option>'+
'<option value="28209">Toyooka-shi</option>'+
'<option value="28210">Kakogawa-shi</option>'+
'<option value="28212">Ako-shi</option>'+
'<option value="28213">Nishiwaki-shi</option>'+
'<option value="28214">Takarazuka-shi</option>'+
'<option value="28215">Miki-shi</option>'+
'<option value="28216">Takasago-shi</option>'+
'<option value="28217">Kawanishi-shi</option>'+
'<option value="28218">Ono-shi</option>'+
'<option value="28219">Sanda-shi</option>'+
'<option value="28220">Kasai-shi</option>'+
'<option value="28221">TambaSasayama-shi</option>'+
'<option value="28222">Yabu-shi</option>'+
'<option value="28223">Tamba-shi</option>'+
'<option value="28224">Minamiawaji-shi</option>'+
'<option value="28225">Asago-shi</option>'+
'<option value="28226">Awaji-shi</option>'+
'<option value="28227">Shiso-shi</option>'+
'<option value="28228">Kato-shi</option>'+
'<option value="28229">Tatsuno-shi</option>'+
'<option value="28301">Inagawa-cho</option>'+
'<option value="28365">Taka-cho</option>'+
'<option value="28381">Inami-cho</option>'+
'<option value="28382">Harima-cho</option>'+
'<option value="28442">Ichikawa-cho</option>'+
'<option value="28443">Fukusaki-cho</option>'+
'<option value="28446">Kamikawa-cho</option>'+
'<option value="28464">Taishi-cho</option>'+
'<option value="28481">Kamigori-cho</option>'+
'<option value="28501">Sayo-cho</option>'+
'<option value="28585">Kami-cho</option>'+
'<option value="28586">Shinonsen-cho</option>'+

								   '</select>'
		break;
	case "29000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="29201">Nara-shi</option>'+
'<option value="29202">Yamatotakada-shi</option>'+
'<option value="29203">Yamatokoriyama-shi</option>'+
'<option value="29204">Tenri-shi</option>'+
'<option value="29205">Kashihara-shi</option>'+
'<option value="29206">Sakurai-shi</option>'+
'<option value="29207">Gojo-shi</option>'+
'<option value="29208">Gose-shi</option>'+
'<option value="29209">Ikoma-shi</option>'+
'<option value="29210">Kashiba-shi</option>'+
'<option value="29211">Katsuragi-shi</option>'+
'<option value="29212">Uda-shi</option>'+
'<option value="29322">Yamazoe-mura</option>'+
'<option value="29342">Heguri-cho</option>'+
'<option value="29343">Sango-cho</option>'+
'<option value="29344">Ikaruga-cho</option>'+
'<option value="29345">Ando-cho</option>'+
'<option value="29361">Kawanishi-cho</option>'+
'<option value="29362">Miyake-cho</option>'+
'<option value="29363">Tawaramoto-cho</option>'+
'<option value="29385">Soni-mura</option>'+
'<option value="29386">Mitsue-mura</option>'+
'<option value="29401">Takatori-cho</option>'+
'<option value="29402">Asuka-mura</option>'+
'<option value="29424">Kammaki-cho</option>'+
'<option value="29425">Oji-cho</option>'+
'<option value="29426">Koryo-cho</option>'+
'<option value="29427">Kawai-cho</option>'+
'<option value="29441">Yoshino-cho</option>'+
'<option value="29442">Oyodo-cho</option>'+
'<option value="29443">Shimoichi-cho</option>'+
'<option value="29444">Kurotaki-mura</option>'+
'<option value="29446">Tenkawa-mura</option>'+
'<option value="29447">Nosegawa-mura</option>'+
'<option value="29449">Totsukawa-mura</option>'+
'<option value="29450">Shimokitayama-mura</option>'+
'<option value="29451">Kamikitayama-mura</option>'+
'<option value="29452">Kawakami-mura</option>'+
'<option value="29453">Higashiyoshino-mura</option>'+

								   '</select>'
		break;
	case "30000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="30201">Wakayama-shi</option>'+
'<option value="30202">Kainan-shi</option>'+
'<option value="30203">Hashimoto-shi</option>'+
'<option value="30204">Arida-shi</option>'+
'<option value="30205">Gobo-shi</option>'+
'<option value="30206">Tanabe-shi</option>'+
'<option value="30207">Shingu-shi</option>'+
'<option value="30208">Kinokawa-shi</option>'+
'<option value="30209">Iwade-shi</option>'+
'<option value="30304">Kimino-cho</option>'+
'<option value="30341">Katsuragi-cho</option>'+
'<option value="30343">Kudoyama-cho</option>'+
'<option value="30344">Koya-cho</option>'+
'<option value="30361">Yuasa-cho</option>'+
'<option value="30362">Hirogawa-cho</option>'+
'<option value="30366">Aridagawa-cho</option>'+
'<option value="30381">Mihama-cho</option>'+
'<option value="30382">Hidaka-cho</option>'+
'<option value="30383">Yura-cho</option>'+
'<option value="30390">Inami-cho</option>'+
'<option value="30391">Minabe-cho</option>'+
'<option value="30392">Hidakagawa-cho</option>'+
'<option value="30401">Shirahama-cho</option>'+
'<option value="30404">Kamitonda-cho</option>'+
'<option value="30406">Susami-cho</option>'+
'<option value="30421">Nachikatsuura-cho</option>'+
'<option value="30422">Taiji-cho</option>'+
'<option value="30424">Kozagawa-cho</option>'+
'<option value="30427">Kitayama-mura</option>'+
'<option value="30428">Kushimoto-cho</option>'+

								   '</select>'
		break;
	case "31000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="31201">Tottori-shi</option>'+
'<option value="31202">Yonago-shi</option>'+
'<option value="31203">Kurayoshi-shi</option>'+
'<option value="31204">Sakaiminato-shi</option>'+
'<option value="31302">Iwami-cho</option>'+
'<option value="31325">Wakasa-cho</option>'+
'<option value="31328">Chizu-cho</option>'+
'<option value="31329">Yazu-cho</option>'+
'<option value="31364">Misasa-cho</option>'+
'<option value="31370">Yurihama-cho</option>'+
'<option value="31371">Kotoura-cho</option>'+
'<option value="31372">Hokuei-cho</option>'+
'<option value="31384">Hiezu-son</option>'+
'<option value="31386">Daisen-cho</option>'+
'<option value="31389">Nambu-cho</option>'+
'<option value="31390">Hoki-cho</option>'+
'<option value="31401">Nichinan-cho</option>'+
'<option value="31402">Hino-cho</option>'+
'<option value="31403">Kofu-cho</option>'+

								   '</select>'
		break;
	case "32000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="32201">Matsue-shi</option>'+
'<option value="32202">Hamada-shi</option>'+
'<option value="32203">Izumo-shi</option>'+
'<option value="32204">Masuda-shi</option>'+
'<option value="32205">Oda-shi</option>'+
'<option value="32206">Yasugi-shi</option>'+
'<option value="32207">Gotsu-shi</option>'+
'<option value="32209">Unnan-shi</option>'+
'<option value="32343">Okuizumo-cho</option>'+
'<option value="32386">Iinan-cho</option>'+
'<option value="32441">Kawamoto-machi</option>'+
'<option value="32448">Misato-cho</option>'+
'<option value="32449">Onan-cho</option>'+
'<option value="32501">Tsuwano-cho</option>'+
'<option value="32505">Yoshika-cho</option>'+
'<option value="32525">Ama-cho</option>'+
'<option value="32526">Nishinoshima-cho</option>'+
'<option value="32527">Chibu-mura</option>'+
'<option value="32528">Okinoshima-cho</option>'+

								   '</select>'
		break;
	case "33000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="33100">Okayama-shi</option>'+
'<option value="33101">Okayama-shi Kita-ku</option>'+
'<option value="33102">Okayama-shi Naka-ku</option>'+
'<option value="33103">Okayama-shi Higashi-ku</option>'+
'<option value="33104">Okayama-shi Minami-ku</option>'+
'<option value="33202">Kurashiki-shi</option>'+
'<option value="33203">Tsuyama-shi</option>'+
'<option value="33204">Tamano-shi</option>'+
'<option value="33205">Kasaoka-shi</option>'+
'<option value="33207">Ibara-shi</option>'+
'<option value="33208">Soja-shi</option>'+
'<option value="33209">Takahashi-shi</option>'+
'<option value="33210">Niimi-shi</option>'+
'<option value="33211">Bizen-shi</option>'+
'<option value="33212">Setouchi-shi</option>'+
'<option value="33213">Akaiwa-shi</option>'+
'<option value="33214">Maniwa-shi</option>'+
'<option value="33215">Mimasaka-shi</option>'+
'<option value="33216">Asakuchi-shi</option>'+
'<option value="33346">Wake-cho</option>'+
'<option value="33423">Hayashima-cho</option>'+
'<option value="33445">Satosho-cho</option>'+
'<option value="33461">Yakage-cho</option>'+
'<option value="33586">Shinjo-son</option>'+
'<option value="33606">Kagamino-cho</option>'+
'<option value="33622">Shoo-cho</option>'+
'<option value="33623">Nagi-cho</option>'+
'<option value="33643">Nishiawakura-son</option>'+
'<option value="33663">Kumenan-cho</option>'+
'<option value="33666">Misaki-cho</option>'+
'<option value="33681">Kibichuo-cho</option>'+

								   '</select>'
		break;
	case "34000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="34100">Hiroshima-shi</option>'+
'<option value="34101">Hiroshima-shi Naka-ku</option>'+
'<option value="34102">Hiroshima-shi Higashi-ku</option>'+
'<option value="34103">Hiroshima-shi Minami-ku</option>'+
'<option value="34104">Hiroshima-shi Nishi-ku</option>'+
'<option value="34105">Hiroshima-shi Asaminami-ku</option>'+
'<option value="34106">Hiroshima-shi Asakita-ku</option>'+
'<option value="34107">Hiroshima-shi Aki-ku</option>'+
'<option value="34108">Hiroshima-shi Saeki-ku</option>'+
'<option value="34202">Kure-shi</option>'+
'<option value="34203">Takehara-shi</option>'+
'<option value="34204">Mihara-shi</option>'+
'<option value="34205">Onomichi-shi</option>'+
'<option value="34207">Fukuyama-shi</option>'+
'<option value="34208">Fuchu-shi</option>'+
'<option value="34209">Miyoshi-shi</option>'+
'<option value="34210">Shobara-shi</option>'+
'<option value="34211">Otake-shi</option>'+
'<option value="34212">Higashihiroshima-shi</option>'+
'<option value="34213">Hatsukaichi-shi</option>'+
'<option value="34214">Akitakata-shi</option>'+
'<option value="34215">Etajima-shi</option>'+
'<option value="34302">Fuchu-cho</option>'+
'<option value="34304">Kaita-cho</option>'+
'<option value="34307">Kumano-cho</option>'+
'<option value="34309">Saka-cho</option>'+
'<option value="34368">Akiota-cho</option>'+
'<option value="34369">Kitahiroshima-cho</option>'+
'<option value="34431">Osakikamijima-cho</option>'+
'<option value="34462">Sera-cho</option>'+
'<option value="34545">Jinsekikogen-cho</option>'+

								   '</select>'
		break;
	case "35000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="35201">Shimonoseki-shi</option>'+
'<option value="35202">Ube-shi</option>'+
'<option value="35203">Yamaguchi-shi</option>'+
'<option value="35204">Hagi-shi</option>'+
'<option value="35206">Hofu-shi</option>'+
'<option value="35207">Kudamatsu-shi</option>'+
'<option value="35208">Iwakuni-shi</option>'+
'<option value="35210">Hikari-shi</option>'+
'<option value="35211">Nagato-shi</option>'+
'<option value="35212">Yanai-shi</option>'+
'<option value="35213">Mine-shi</option>'+
'<option value="35215">Shunan-shi</option>'+
'<option value="35216">Sanyoonoda-shi</option>'+
'<option value="35305">Suooshima-cho</option>'+
'<option value="35321">Waki-cho</option>'+
'<option value="35341">Kaminoseki-cho</option>'+
'<option value="35343">Tabuse-cho</option>'+
'<option value="35344">Hirao-cho</option>'+
'<option value="35502">Abu-cho</option>'+

								   '</select>'
		break;
	case "36000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="36201">Tokushima-shi</option>'+
'<option value="36202">Naruto-shi</option>'+
'<option value="36203">Komatsushima-shi</option>'+
'<option value="36204">Anan-shi</option>'+
'<option value="36205">Yoshinogawa-shi</option>'+
'<option value="36206">Awa-shi</option>'+
'<option value="36207">Mima-shi</option>'+
'<option value="36208">Miyoshi-shi</option>'+
'<option value="36301">Katsuura-cho</option>'+
'<option value="36302">Kamikatsu-cho</option>'+
'<option value="36321">Sanagouchi-son</option>'+
'<option value="36341">Ishii-cho</option>'+
'<option value="36342">Kamiyama-cho</option>'+
'<option value="36368">Naka-cho</option>'+
'<option value="36383">Mugi-cho</option>'+
'<option value="36387">Minami-cho</option>'+
'<option value="36388">Kaiyo-cho</option>'+
'<option value="36401">Matsushige-cho</option>'+
'<option value="36402">Kitajima-cho</option>'+
'<option value="36403">Aizumi-cho</option>'+
'<option value="36404">Itano-cho</option>'+
'<option value="36405">Kamiita-cho</option>'+
'<option value="36468">Tsurugi-cho</option>'+
'<option value="36489">Higashimiyoshi-cho</option>'+

								   '</select>'
		break;
	case "37000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="37201">Takamatsu-shi</option>'+
'<option value="37202">Marugame-shi</option>'+
'<option value="37203">Sakaide-shi</option>'+
'<option value="37204">Zentsuji-shi</option>'+
'<option value="37205">Kanonji-shi</option>'+
'<option value="37206">Sanuki-shi</option>'+
'<option value="37207">Higashikagawa-shi</option>'+
'<option value="37208">Mitoyo-shi</option>'+
'<option value="37322">Tonosho-cho</option>'+
'<option value="37324">Shodoshima-cho</option>'+
'<option value="37341">Miki-cho</option>'+
'<option value="37364">Naoshima-cho</option>'+
'<option value="37386">Utazu-cho</option>'+
'<option value="37387">Ayagawa-cho</option>'+
'<option value="37403">Kotohira-cho</option>'+
'<option value="37404">Tadotsu-cho</option>'+
'<option value="37406">Manno-cho</option>'+

								   '</select>'
		break;
	case "38000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="38201">Matsuyama-shi</option>'+
'<option value="38202">Imabari-shi</option>'+
'<option value="38203">Uwajima-shi</option>'+
'<option value="38204">Yawatahama-shi</option>'+
'<option value="38205">Niihama-shi</option>'+
'<option value="38206">Saijo-shi</option>'+
'<option value="38207">Ozu-shi</option>'+
'<option value="38210">Iyo-shi</option>'+
'<option value="38213">Shikokuchuo-shi</option>'+
'<option value="38214">Seiyo-shi</option>'+
'<option value="38215">Toon-shi</option>'+
'<option value="38356">Kamijima-cho</option>'+
'<option value="38386">Kumakogen-cho</option>'+
'<option value="38401">Masaki-cho</option>'+
'<option value="38402">Tobe-cho</option>'+
'<option value="38422">Uchiko-cho</option>'+
'<option value="38442">Ikata-cho</option>'+
'<option value="38484">Matsuno-cho</option>'+
'<option value="38488">Kihoku-cho</option>'+
'<option value="38506">Ainan-cho</option>'+

								   '</select>'
		break;
	case "39000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="39201">Kochi-shi</option>'+
'<option value="39202">Muroto-shi</option>'+
'<option value="39203">Aki-shi</option>'+
'<option value="39204">Nankoku-shi</option>'+
'<option value="39205">Tosa-shi</option>'+
'<option value="39206">Susaki-shi</option>'+
'<option value="39208">Sukumo-shi</option>'+
'<option value="39209">Tosashimizu-shi</option>'+
'<option value="39210">Shimanto-shi</option>'+
'<option value="39211">Konan-shi</option>'+
'<option value="39212">Kami-shi</option>'+
'<option value="39301">Toyo-cho</option>'+
'<option value="39302">Nahari-cho</option>'+
'<option value="39303">Tano-cho</option>'+
'<option value="39304">Yasuda-cho</option>'+
'<option value="39305">Kitagawa-mura</option>'+
'<option value="39306">Umaji-mura</option>'+
'<option value="39307">Geisei-mura</option>'+
'<option value="39341">Motoyama-cho</option>'+
'<option value="39344">Otoyo-cho</option>'+
'<option value="39363">Tosa-cho</option>'+
'<option value="39364">Okawa-mura</option>'+
'<option value="39386">Ino-cho</option>'+
'<option value="39387">Niyodogawa-cho</option>'+
'<option value="39401">Nakatosa-cho</option>'+
'<option value="39402">Sakawa-cho</option>'+
'<option value="39403">Ochi-cho</option>'+
'<option value="39405">Yusuhara-cho</option>'+
'<option value="39410">Hidaka-mura</option>'+
'<option value="39411">Tsuno-cho</option>'+
'<option value="39412">Shimanto-cho</option>'+
'<option value="39424">Otsuki-cho</option>'+
'<option value="39427">Mihara-mura</option>'+
'<option value="39428">Kuroshio-cho</option>'+

								   '</select>'
		break;
	case "40000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="40100">Kitakyushu-shi</option>'+
'<option value="40101">Kitakyushu-shi Moji-ku</option>'+
'<option value="40103">Kitakyushu-shi Wakamatsu-ku</option>'+
'<option value="40105">Kitakyushu-shi Tobata-ku</option>'+
'<option value="40106">Kitakyushu-shi Kokurakita-ku</option>'+
'<option value="40107">Kitakyushu-shi Kokuraminami-ku</option>'+
'<option value="40108">Kitakyushu-shi Yahatahigashi-ku</option>'+
'<option value="40109">Kitakyushu-shi Yahatanishi-ku</option>'+
'<option value="40130">Fukuoka-shi</option>'+
'<option value="40131">Fukuoka-shi Higashi-ku</option>'+
'<option value="40132">Fukuoka-shi Hakata-ku</option>'+
'<option value="40133">Fukuoka-shi Chuo-ku</option>'+
'<option value="40134">Fukuoka-shi Minami-ku</option>'+
'<option value="40135">Fukuoka-shi Nishi-ku</option>'+
'<option value="40136">Fukuoka-shi Jonan-ku</option>'+
'<option value="40137">Fukuoka-shi Sawara-ku</option>'+
'<option value="40202">Omuta-shi</option>'+
'<option value="40203">Kurume-shi</option>'+
'<option value="40204">Nogata-shi</option>'+
'<option value="40205">Iizuka-shi</option>'+
'<option value="40206">Tagawa-shi</option>'+
'<option value="40207">Yanagawa-shi</option>'+
'<option value="40210">Yame-shi</option>'+
'<option value="40211">Chikugo-shi</option>'+
'<option value="40212">Okawa-shi</option>'+
'<option value="40213">Yukuhashi-shi</option>'+
'<option value="40214">Buzen-shi</option>'+
'<option value="40215">Nakama-shi</option>'+
'<option value="40216">Ogori-shi</option>'+
'<option value="40217">Chikushino-shi</option>'+
'<option value="40218">Kasuga-shi</option>'+
'<option value="40219">Onojo-shi</option>'+
'<option value="40220">Munakata-shi</option>'+
'<option value="40221">Dazaifu-shi</option>'+
'<option value="40223">Koga-shi</option>'+
'<option value="40224">Fukutsu-shi</option>'+
'<option value="40225">Ukiha-shi</option>'+
'<option value="40226">Miyawaka-shi</option>'+
'<option value="40227">Kama-shi</option>'+
'<option value="40228">Asakura-shi</option>'+
'<option value="40229">Miyama-shi</option>'+
'<option value="40230">Itoshima-shi</option>'+
'<option value="40305">Nakagawa-machi</option>'+
'<option value="40341">Umi-machi</option>'+
'<option value="40342">Sasaguri-machi</option>'+
'<option value="40343">Shime-machi</option>'+
'<option value="40344">Sue-machi</option>'+
'<option value="40345">Shingu-machi</option>'+
'<option value="40348">Hisayama-machi</option>'+
'<option value="40349">Kasuya-machi</option>'+
'<option value="40381">Ashiya-machi</option>'+
'<option value="40382">Mizumaki-machi</option>'+
'<option value="40383">Okagaki-machi</option>'+
'<option value="40384">Onga-cho</option>'+
'<option value="40401">Kotake-machi</option>'+
'<option value="40402">Kurate-machi</option>'+
'<option value="40421">Keisen-machi</option>'+
'<option value="40447">Chikuzen-machi</option>'+
'<option value="40448">Toho-mura</option>'+
'<option value="40503">Tachiarai-machi</option>'+
'<option value="40522">Oki-machi</option>'+
'<option value="40544">Hirokawa-machi</option>'+
'<option value="40601">Kawara-machi</option>'+
'<option value="40602">Soeda-machi</option>'+
'<option value="40604">Itoda-machi</option>'+
'<option value="40605">Kawasaki-machi</option>'+
'<option value="40608">Oto-machi</option>'+
'<option value="40609">Aka-mura</option>'+
'<option value="40610">Fukuchi-machi</option>'+
'<option value="40621">Kanda-machi</option>'+
'<option value="40625">Miyako-machi</option>'+
'<option value="40642">Yoshitomi-machi</option>'+
'<option value="40646">Koge-machi</option>'+
'<option value="40647">Chikujo-machi</option>'+

								   '</select>'
		break;
	case "41000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="41201">Saga-shi</option>'+
'<option value="41202">Karatsu-shi</option>'+
'<option value="41203">Tosu-shi</option>'+
'<option value="41204">Taku-shi</option>'+
'<option value="41205">Imari-shi</option>'+
'<option value="41206">Takeo-shi</option>'+
'<option value="41207">Kashima-shi</option>'+
'<option value="41208">Ogi-shi</option>'+
'<option value="41209">Ureshino-shi</option>'+
'<option value="41210">Kanzaki-shi</option>'+
'<option value="41327">Yoshinogari-cho</option>'+
'<option value="41341">Kiyama-cho</option>'+
'<option value="41345">Kamimine-cho</option>'+
'<option value="41346">Miyaki-cho</option>'+
'<option value="41387">Genkai-cho</option>'+
'<option value="41401">Arita-cho</option>'+
'<option value="41423">Omachi-cho</option>'+
'<option value="41424">Kohoku-machi</option>'+
'<option value="41425">Shiroishi-cho</option>'+
'<option value="41441">Tara-cho</option>'+

								   '</select>'
		break;
	case "42000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="42201">Nagasaki-shi</option>'+
'<option value="42202">Sasebo-shi</option>'+
'<option value="42203">Shimabara-shi</option>'+
'<option value="42204">Isahaya-shi</option>'+
'<option value="42205">Omura-shi</option>'+
'<option value="42207">Hirado-shi</option>'+
'<option value="42208">Matsuura-shi</option>'+
'<option value="42209">Tsushima-shi</option>'+
'<option value="42210">Iki-shi</option>'+
'<option value="42211">Goto-shi</option>'+
'<option value="42212">Saikai-shi</option>'+
'<option value="42213">Unzen-shi</option>'+
'<option value="42214">Minamishimabara-shi</option>'+
'<option value="42307">Nagayo-cho</option>'+
'<option value="42308">Togitsu-cho</option>'+
'<option value="42321">Higashisonogi-cho</option>'+
'<option value="42322">Kawatana-cho</option>'+
'<option value="42323">Hasami-cho</option>'+
'<option value="42383">Ojika-cho</option>'+
'<option value="42391">Saza-cho</option>'+
'<option value="42411">Shinkamigoto-cho</option>'+

								   '</select>'
		break;
	case "43000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="43100">Kumamoto-shi</option>'+
'<option value="43101">Kumamoto-shi Chuo-ku</option>'+
'<option value="43102">Kumamoto-shi Higashi-ku</option>'+
'<option value="43103">Kumamoto-shi Nishi-ku</option>'+
'<option value="43104">Kumamoto-shi Minami-ku</option>'+
'<option value="43105">Kumamoto-shi Kita-ku</option>'+
'<option value="43202">Yatsushiro-shi</option>'+
'<option value="43203">Hitoyoshi-shi</option>'+
'<option value="43204">Arao-shi</option>'+
'<option value="43205">Minamata-shi</option>'+
'<option value="43206">Tamana-shi</option>'+
'<option value="43208">Yamaga-shi</option>'+
'<option value="43210">Kikuchi-shi</option>'+
'<option value="43211">Uto-shi</option>'+
'<option value="43212">Kamiamakusa-shi</option>'+
'<option value="43213">Uki-shi</option>'+
'<option value="43214">Aso-shi</option>'+
'<option value="43215">Amakusa-shi</option>'+
'<option value="43216">Koshi-shi</option>'+
'<option value="43348">Misato-machi</option>'+
'<option value="43364">Gyokuto-machi</option>'+
'<option value="43367">Nankan-machi</option>'+
'<option value="43368">Nagasu-machi</option>'+
'<option value="43369">Nagomi-machi</option>'+
'<option value="43403">Ozu-machi</option>'+
'<option value="43404">Kikuyo-machi</option>'+
'<option value="43423">Minamioguni-machi</option>'+
'<option value="43424">Oguni-machi</option>'+
'<option value="43425">Ubuyama-mura</option>'+
'<option value="43428">Takamori-machi</option>'+
'<option value="43432">Nishihara-mura</option>'+
'<option value="43433">Minamiaso-mura</option>'+
'<option value="43441">Mifune-machi</option>'+
'<option value="43442">Kashima-machi</option>'+
'<option value="43443">Mashiki-machi</option>'+
'<option value="43444">Kosa-machi</option>'+
'<option value="43447">Yamato-cho</option>'+
'<option value="43468">Hikawa-cho</option>'+
'<option value="43482">Ashikita-machi</option>'+
'<option value="43484">Tsunagi-machi</option>'+
'<option value="43501">Nishiki-machi</option>'+
'<option value="43505">Taragi-machi</option>'+
'<option value="43506">Yunomae-machi</option>'+
'<option value="43507">Mizukami-mura</option>'+
'<option value="43510">Sagara-mura</option>'+
'<option value="43511">Itsuki-mura</option>'+
'<option value="43512">Yamae-mura</option>'+
'<option value="43513">Kuma-mura</option>'+
'<option value="43514">Asagiri-cho</option>'+
'<option value="43531">Reihoku-machi</option>'+

								   '</select>'
		break;
	case "44000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="44201">Oita-shi</option>'+
'<option value="44202">Beppu-shi</option>'+
'<option value="44203">Nakatsu-shi</option>'+
'<option value="44204">Hita-shi</option>'+
'<option value="44205">Saiki-shi</option>'+
'<option value="44206">Usuki-shi</option>'+
'<option value="44207">Tsukumi-shi</option>'+
'<option value="44208">Taketa-shi</option>'+
'<option value="44209">Bungotakada-shi</option>'+
'<option value="44210">Kitsuki-shi</option>'+
'<option value="44211">Usa-shi</option>'+
'<option value="44212">Bungoono-shi</option>'+
'<option value="44213">Yufu-shi</option>'+
'<option value="44214">Kunisaki-shi</option>'+
'<option value="44322">Himeshima-mura</option>'+
'<option value="44341">Hiji-machi</option>'+
'<option value="44461">Kokonoe-machi</option>'+
'<option value="44462">Kusu-machi</option>'+

								   '</select>'
		break;
	case "45000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="45201">Miyazaki-shi</option>'+
'<option value="45202">Miyakonojo-shi</option>'+
'<option value="45203">Nobeoka-shi</option>'+
'<option value="45204">Nichinan-shi</option>'+
'<option value="45205">Kobayashi-shi</option>'+
'<option value="45206">Hyuga-shi</option>'+
'<option value="45207">Kushima-shi</option>'+
'<option value="45208">Saito-shi</option>'+
'<option value="45209">Ebino-shi</option>'+
'<option value="45341">Mimata-cho</option>'+
'<option value="45361">Takaharu-cho</option>'+
'<option value="45382">Kunitomi-cho</option>'+
'<option value="45383">Aya-cho</option>'+
'<option value="45401">Takanabe-cho</option>'+
'<option value="45402">Shintomi-cho</option>'+
'<option value="45403">Nishimera-son</option>'+
'<option value="45404">Kijo-cho</option>'+
'<option value="45405">Kawaminami-cho</option>'+
'<option value="45406">Tsuno-cho</option>'+
'<option value="45421">Kadogawa-cho</option>'+
'<option value="45429">Morotsuka-son</option>'+
'<option value="45430">Shiiba-son</option>'+
'<option value="45431">Misato-cho</option>'+
'<option value="45441">Takachiho-cho</option>'+
'<option value="45442">Hinokage-cho</option>'+
'<option value="45443">Gokase-cho</option>'+

								   '</select>'
		break;
	case "46000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="46201">Kagoshima-shi</option>'+
'<option value="46203">Kanoya-shi</option>'+
'<option value="46204">Makurazaki-shi</option>'+
'<option value="46206">Akune-shi</option>'+
'<option value="46208">Izumi-shi</option>'+
'<option value="46210">Ibusuki-shi</option>'+
'<option value="46213">Nishinoomote-shi</option>'+
'<option value="46214">Tarumizu-shi</option>'+
'<option value="46215">Satsumasendai-shi</option>'+
'<option value="46216">Hioki-shi</option>'+
'<option value="46217">Soo-shi</option>'+
'<option value="46218">Kirishima-shi</option>'+
'<option value="46219">Ichikikushikino-shi</option>'+
'<option value="46220">Minamisatsuma-shi</option>'+
'<option value="46221">Shibushi-shi</option>'+
'<option value="46222">Amami-shi</option>'+
'<option value="46223">Minamikyusyu-shi</option>'+
'<option value="46224">Isa-shi</option>'+
'<option value="46225">Aira-shi</option>'+
'<option value="46303">Mishima-mura</option>'+
'<option value="46304">Toshima-mura</option>'+
'<option value="46392">Satsuma-cho</option>'+
'<option value="46404">Nagashima-cho</option>'+
'<option value="46452">Yusui-cho</option>'+
'<option value="46468">Osaki-cho</option>'+
'<option value="46482">Higashikushira-cho</option>'+
'<option value="46490">Kinko-cho</option>'+
'<option value="46491">Minamiosumi-cho</option>'+
'<option value="46492">Kimotsuki-cho</option>'+
'<option value="46501">Nakatane-cho</option>'+
'<option value="46502">Minamitane-cho</option>'+
'<option value="46505">Yakushima-cho</option>'+
'<option value="46523">Yamato-son</option>'+
'<option value="46524">Uken-son</option>'+
'<option value="46525">Setouchi-cho</option>'+
'<option value="46527">Tatsugo-cho</option>'+
'<option value="46529">Kikai-cho</option>'+
'<option value="46530">Tokunoshima-cho</option>'+
'<option value="46531">Amagi-cho</option>'+
'<option value="46532">Isen-cho</option>'+
'<option value="46533">Wadomari-cho</option>'+
'<option value="46534">China-cho</option>'+
'<option value="46535">Yoron-cho</option>'+

								   '</select>'
		break;
	case "47000":

		resetArea();
		document.getElementById('cityField').innerHTML = '<select name="cityField" class="select2" onChange="onSelectArea()">'+
								   '<option value="" selected>Select a city/ward/town/village</option>'+
'<option value="47201">Naha-shi</option>'+
'<option value="47205">Ginowan-shi</option>'+
'<option value="47207">Ishigaki-shi</option>'+
'<option value="47208">Urasoe-shi</option>'+
'<option value="47209">Nago-shi</option>'+
'<option value="47210">Itoman-shi</option>'+
'<option value="47211">Okinawa-shi</option>'+
'<option value="47212">Tomigusuku-shi</option>'+
'<option value="47213">Uruma-shi</option>'+
'<option value="47214">Miyakojima-shi</option>'+
'<option value="47215">Nanjo-shi</option>'+
'<option value="47301">Kunigami-son</option>'+
'<option value="47302">Ogimi-son</option>'+
'<option value="47303">Higashi-son</option>'+
'<option value="47306">Nakijin-son</option>'+
'<option value="47308">Motobu-cho</option>'+
'<option value="47311">Onna-son</option>'+
'<option value="47313">Ginoza-son</option>'+
'<option value="47314">Kin-cho</option>'+
'<option value="47315">Ie-son</option>'+
'<option value="47324">Yomitan-son</option>'+
'<option value="47325">Kadena-cho</option>'+
'<option value="47326">Chatan-cho</option>'+
'<option value="47327">Kitanakagusuku-son</option>'+
'<option value="47328">Nakagusuku-son</option>'+
'<option value="47329">Nishihara-cho</option>'+
'<option value="47348">Yonabaru-cho</option>'+
'<option value="47350">Haebaru-cho</option>'+
'<option value="47353">Tokashiki-son</option>'+
'<option value="47354">Zamami-son</option>'+
'<option value="47355">Aguni-son</option>'+
'<option value="47356">Tonaki-son</option>'+
'<option value="47357">Minamidaito-son</option>'+
'<option value="47358">Kitadaito-son</option>'+
'<option value="47359">Iheya-son</option>'+
'<option value="47360">Izena-son</option>'+
'<option value="47361">Kumejima-cho</option>'+
'<option value="47362">Yaese-cho</option>'+
'<option value="47375">Tarama-son</option>'+
'<option value="47381">Taketomi-cho</option>'+
'<option value="47382">Yonaguni-cho</option>'+

								   '</select>'
		break;
	}
}
