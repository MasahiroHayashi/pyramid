//////////////////////////////////////////////////////////////////////
//////*!              StatApiMagic.js  ver1.5                 !*//////
//////*!                                                      !*//////
//////*!          Copyright(c)2017 Masahiro Hayashi           !*//////
//////*!                 http://www.mirko.jp                  !*//////
//////*!           Released under the MIT license             !*//////
//////*!    http://opensource.org/licenses/mit-license.php    !*//////
//////////////////////////////////////////////////////////////////////
function StatApiMagic(input,option){
"use strict";
	let globalArray = [];
	let globalArray2 = [];
	let jsonString = JSON.stringify(input,undefined,1);
	const originalJson = jsonString; 
	jsonString = jsonString.replace( /\\r\\n/g , "／" ) ; 
	let jsonData = JSON.parse(jsonString);
	const id = jsonData.GET_STATS_DATA.STATISTICAL_DATA.TABLE_INF["@id"] ;
	const statName = jsonData.GET_STATS_DATA.STATISTICAL_DATA.TABLE_INF.STAT_NAME["$"] ;
	const statisticsName = jsonData.GET_STATS_DATA.STATISTICAL_DATA.TABLE_INF["STATISTICS_NAME"] ;
	const statTitle = jsonData.GET_STATS_DATA.STATISTICAL_DATA.TABLE_INF.TITLE["$"] ;
	if(jsonData.GET_STATS_DATA.RESULT.STATUS != 0){
		//alert('エラー番号：' + jsonData.GET_STATS_DATA.RESULT.STATUS + '　 ' + jsonData.GET_STATS_DATA.RESULT.ERROR_MSG); 
		return;
	}
	let classArray = jsonData.GET_STATS_DATA.STATISTICAL_DATA.CLASS_INF.CLASS_OBJ ;
	let description = [];
	let d = 0;
	for(let i=0 ; i<classArray.length ; i++) {
		if(classArray[i]["@description"] != undefined ){
			description[d] = classArray[i]["@description"];

			/////下記のように「@description」を取り出すこともできます//
			//alert('注' + (j+1) + '）　' + description[j]);       ////
			///////////////////////////////////////////////////////////

			delete classArray[i]["@description"] ;
			d++;
		}
	}
	jsonData.GET_STATS_DATA.STATISTICAL_DATA.CLASS_INF.CLASS_OBJ = classArray ;
	let obj = jsonData.GET_STATS_DATA.STATISTICAL_DATA.CLASS_INF.CLASS_OBJ;
	let headArray = [];
	let obji;
	let valueArray;
	for(let i in obj){
		obji = obj[i];
		valueArray = Object.keys(obji).map(function (key) {return obji[key]});
		headArray[i] = valueArray;
	};
	for(let i=0 ; i<headArray.length ; i++) {
		headArray[i][1] = headArray[i][1].replace( /,/g , "，" ) ;
	};
	let str1 = headArray.join(',');
	    str1 = str1.replace( /,\[object Object\]/g , "" ) ;
	    str1 = str1.replace( /,CLASS:\[object Object\]/g , "" ) ;
	headArray = str1.split(',');
	let headArray1 = [];
	let headArray2 = [];		
	for(let i=0;i<headArray.length;i++){
		if((i%2)==0){
			headArray1.push(headArray[i]);
		}else{
			headArray2.push(headArray[i]);
		}
	}
	headArray1.push("unit","value");
	headArray2.push("単位","値");
	globalArray[0] = headArray1;
	globalArray[1] = headArray2;
	obj = jsonData.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE;
	let obj2;
	let valueArray2;
	let last2;
	for(let h=0; h<obj.length; h++){
		obj2 = jsonData.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[h];
		valueArray2 = Object.keys(obj2).map(function (key) {return obj2[key]});
		last2 = valueArray2[valueArray2.length - 2];
		if(!(isNaN(last2))){
			valueArray2.splice((valueArray2.length - 1),0,'');
		}
		globalArray[h+2] = valueArray2;
	}
	obj = jsonData.GET_STATS_DATA.STATISTICAL_DATA.CLASS_INF.CLASS_OBJ;
	const objLength = obj.length;
	let valueArray3;
	for(let h=0; h<objLength; h++){
		obj = jsonData.GET_STATS_DATA.STATISTICAL_DATA.CLASS_INF.CLASS_OBJ[h].CLASS;
		if(Object.prototype.toString.call(obj) === '[object Array]'){
			let dimensionalArray = [];
			let obji2;
			for(let i in obj){
				obji2 = obj[i];
				let keyArray = Object.keys(obji2); 
				valueArray3 = Object.keys(obji2).map(function (key) {return obji2[key]});
				let count = 0;
				for (let a in obji2) { count ++ };
				let jointArray = [];
				for(let j=0; j<count; j++){
					valueArray3[j] = valueArray3[j].replace( /,/g , "，" ) ;  
					jointArray[j] = keyArray[j] + ":" + valueArray3[j];
				};
				dimensionalArray[i] = jointArray;
			};
			let str2 = dimensionalArray.join(',');
			    str2 = str2.replace( /@unit:[^,][^,][^,][^,][^,][^,][^,][^,][^,][^,],/g , "" ) ;
			    str2 = str2.replace( /@unit:[^,][^,][^,][^,][^,][^,][^,][^,][^,],/g , "" ) ;
			    str2 = str2.replace( /@unit:[^,][^,][^,][^,][^,][^,][^,][^,],/g , "" ) ;
			    str2 = str2.replace( /@unit:[^,][^,][^,][^,][^,][^,][^,],/g , "" ) ;
			    str2 = str2.replace( /@unit:[^,][^,][^,][^,][^,][^,],/g , "" ) ;
			    str2 = str2.replace( /@unit:[^,][^,][^,][^,][^,],/g , "" ) ;
			    str2 = str2.replace( /@unit:[^,][^,][^,][^,],/g , "" ) ;
			    str2 = str2.replace( /@unit:[^,][^,][^,],/g , "" ) ;
			    str2 = str2.replace( /@unit:[^,][^,],/g , "" ) ;
			    str2 = str2.replace( /@unit:[^,],/g , "" ) ;
			    str2 = str2.replace( /,@parentCode:[^,][^,][^,][^,][^,][^,][^,][^,][^,][^,]/g , "" ) ;
			    str2 = str2.replace( /,@parentCode:[^,][^,][^,][^,][^,][^,][^,][^,][^,]/g , "" ) ;
			    str2 = str2.replace( /,@parentCode:[^,][^,][^,][^,][^,][^,][^,][^,]/g , "" ) ;
			    str2 = str2.replace( /,@parentCode:[^,][^,][^,][^,][^,][^,][^,]/g , "" ) ;
			    str2 = str2.replace( /,@parentCode:[^,][^,][^,][^,][^,][^,]/g , "" ) ;
			    str2 = str2.replace( /,@parentCode:[^,][^,][^,][^,][^,]/g , "" ) ;
			    str2 = str2.replace( /,@parentCode:[^,][^,][^,][^,]/g , "" ) ;
			    str2 = str2.replace( /,@parentCode:[^,][^,][^,]/g , "" ) ;
			    str2 = str2.replace( /,@parentCode:[^,][^,]/g , "" ) ;
			    str2 = str2.replace( /,@parentCode:[^,]/g , "" ) ;
			    str2 = str2.replace( /,@level:[0-9]/g , "" ) ;
			    str2 = str2.replace( /,@level:/g , "" ) ;
			    str2 = str2.replace( /@code:/g , "" ) ;
			    str2 = str2.replace( /@name:/g , "" ) ;
			dimensionalArray = str2.split(',');
			globalArray2.push(dimensionalArray);
		}else{
			let keyArray = Object.keys(obj);
			valueArray3 = Object.keys(obj).map(function (key) {return obj[key]});
			let count = 0;
			for (let a in obj) {
				count ++
			}
			let jointArray = [];
			for(let i=0; i<count; i++){
				valueArray3[i] = valueArray3[i].replace( /,/g , "，" ) ;  
				jointArray[i] = keyArray[i] + ":" + valueArray3[i];
			}
			let str3 = jointArray.join(',');
			    str3 = str3.replace( /@unit:[^,][^,][^,][^,][^,][^,][^,][^,][^,][^,],/g , "" ) ;
			    str3 = str3.replace( /@unit:[^,][^,][^,][^,][^,][^,][^,][^,][^,],/g , "" ) ;
			    str3 = str3.replace( /@unit:[^,][^,][^,][^,][^,][^,][^,][^,],/g , "" ) ;
			    str3 = str3.replace( /@unit:[^,][^,][^,][^,][^,][^,][^,],/g , "" ) ;
			    str3 = str3.replace( /@unit:[^,][^,][^,][^,][^,][^,],/g , "" ) ;
			    str3 = str3.replace( /@unit:[^,][^,][^,][^,][^,],/g , "" ) ;
			    str3 = str3.replace( /@unit:[^,][^,][^,][^,],/g , "" ) ;
			    str3 = str3.replace( /@unit:[^,][^,][^,],/g , "" ) ;
			    str3 = str3.replace( /@unit:[^,][^,],/g , "" ) ;
			    str3 = str3.replace( /@unit:[^,],/g , "" ) ;
			    str3 = str3.replace( /,@parentCode:[^,][^,][^,][^,][^,][^,][^,][^,][^,][^,]/g , "" ) ;
			    str3 = str3.replace( /,@parentCode:[^,][^,][^,][^,][^,][^,][^,][^,][^,]/g , "" ) ;
			    str3 = str3.replace( /,@parentCode:[^,][^,][^,][^,][^,][^,][^,][^,]/g , "" ) ;
			    str3 = str3.replace( /,@parentCode:[^,][^,][^,][^,][^,][^,][^,]/g , "" ) ;
			    str3 = str3.replace( /,@parentCode:[^,][^,][^,][^,][^,][^,]/g , "" ) ;
			    str3 = str3.replace( /,@parentCode:[^,][^,][^,][^,][^,]/g , "" ) ;
			    str3 = str3.replace( /,@parentCode:[^,][^,][^,][^,]/g , "" ) ;
			    str3 = str3.replace( /,@parentCode:[^,][^,][^,]/g , "" ) ;
			    str3 = str3.replace( /,@parentCode:[^,][^,]/g , "" ) ;
			    str3 = str3.replace( /,@parentCode:[^,]/g , "" ) ;
			    str3 = str3.replace( /,@level:[0-9]/g , "" ) ;
			    str3 = str3.replace( /,@level:/g , "" ) ;
			    str3 = str3.replace( /@code:/g , "" ) ;
			    str3 = str3.replace( /@name:/g , "" ) ;
			jointArray = str3.split(',');
			globalArray2.push(jointArray);
		}
	}
	let results;
	let output;
	if(option==1){
		results = dimensionCodeToString(globalArray, globalArray2);
		output = makeJsonA(results);
	}else if(option==2){
		results = dimensionCodeToString2(globalArray, globalArray2);
		output = makeJsonA(results);
	}else if(option==3){
		results = dimensionCodeToString(globalArray, globalArray2);
		output = makeJsonB(results,id,statName,statisticsName,statTitle);
	}else if(option==4){
		results = dimensionCodeToString2(globalArray, globalArray2);
		output = makeJsonB(results,id,statName,statisticsName,statTitle);
	}else if(option==5){
		results = dimensionCodeToString(globalArray, globalArray2);
		output = makeCsvA(results);
	}else if(option==6){
		results = dimensionCodeToString2(globalArray, globalArray2);
		output = makeCsvA(results);
	}else if(option==7){
		results = dimensionCodeToString(globalArray, globalArray2);
		output = makeCsvB(results,id,statName,statisticsName,statTitle);
	}else if(option==8){
		results = dimensionCodeToString2(globalArray, globalArray2);
		output = makeCsvB(results,id,statName,statisticsName,statTitle);
	}else{
		output = originalJson;
	}
	return output;
}
function dimensionCodeToString(globalArray, globalArray2){
"use strict";
for(let m=0;m<globalArray[0].length-2;m++){
for(let i=2;i<globalArray.length;i++){
for(let j=0;j<globalArray2[m].length;j+=2){
if(globalArray[i][m]===globalArray2[m][j]){
globalArray[i][m]=globalArray2[m][j+1];
break;}}}}return globalArray;
}
function dimensionCodeToString2(globalArray, globalArray2){
"use strict";
for(let m=0;m<globalArray[0].length-2;m++){
for(let i=2;i<globalArray.length;i++){
for(let j=0;j<globalArray2[m].length;j+=2){
if(globalArray[i][m]===globalArray2[m][j]){
globalArray[i][m]=globalArray[i][m]+'：'+globalArray2[m][j+1];
break;}}}}return globalArray;
}
function makeCsvA(globalArray){
"use strict";
	let csvStr = 'No.,' + globalArray[1].join(',') + '\r\n';
	for(let i=2;i<globalArray.length;i++){
		csvStr=csvStr+(i-2)+','+globalArray[i].join(',')+'\r\n';
	}
	csvStr=csvStr.replace(/[\r\n]+$/g,''); 
	return csvStr;
}
function makeJsonA(globalArray){
"use strict";
	let csvStr = 'No.,' + globalArray[1].join(',') + '\r\n';
	for(let i=2;i<globalArray.length;i++){
		csvStr=csvStr+(i-2)+','+globalArray[i].join(',')+'\r\n';
	}
	csvStr = csvStr.replace(/[\r\n]+$/g,'');
	const lines = csvStr.split("\r\n");
	let result = [];
	const headers = lines[0].split(",");
	for(let i=1;i<lines.length;i++){
		let obj = {};
		let currentline=lines[i].split(",");
			for(let j=0;j<headers.length;j++){
				obj[headers[j]] = currentline[j];
			}
		result.push(obj);
	}
	const jsonStringOut = JSON.stringify(result,undefined,1); 
	return jsonStringOut;
}
function makeCsvB(globalArray,id,statName,statisticsName,statTitle){
"use strict";
	let csvStr = 'No.,' +'統計表ID,' + '統計調査名,' + '名称詳細・集計方法,' + '統計表タイトル,' + globalArray[1].join(',') + '\r\n';
	for(let i=2;i<globalArray.length;i++){
		csvStr=csvStr+(i-2)+','+id+','+statName+','+statisticsName+','+statTitle+','+globalArray[i].join(',')+'\r\n';
	}
	csvStr = csvStr.replace(/[\r\n]+$/g,''); 
	return csvStr;
}
function makeJsonB(globalArray,id,statName,statisticsName,statTitle) {
"use strict";
	let csvStr = 'No.,' +'統計表ID,' + '統計調査名,' + '名称詳細・集計方法,' + '統計表タイトル,' + globalArray[1].join(',') + '\r\n';
	for(let i=2; i<globalArray.length; i++){
		csvStr=csvStr+(i-2)+','+id+','+statName+','+statisticsName+','+statTitle+','+globalArray[i].join(',')+'\r\n';
	}
	csvStr = csvStr.replace(/[\r\n]+$/g,''); 
	const lines = csvStr.split("\r\n");
	let result = [];
	const headers = lines[0].split(",");
	for(let i=1;i<lines.length;i++){
		let obj = {};
		let currentline=lines[i].split(",");
			for(let j=0;j<headers.length;j++){
				obj[headers[j]] = currentline[j];
			}
		result.push(obj);
	}
	const jsonStringOut = JSON.stringify(result,undefined,1); 
	return jsonStringOut;
}
