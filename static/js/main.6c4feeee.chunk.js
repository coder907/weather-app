(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t(91)},38:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n,i,r=t(0),o=t.n(r),s=t(11),c=t.n(s),u=(t(38),t(4)),l=t(5),d=t(8),m=t(7),h=t(9),f=function(){function e(a,t,n,i){Object(u.a)(this,e),this.id=a,this.countryCode=t&&t.toUpperCase(),this.region=n,this.city=i}return Object(l.a)(e,[{key:"countryName",value:function(){return p.countryCodeToName(this.countryCode)}},{key:"flagUrl",value:function(){return"img/flags/".concat(this.countryCode.toLowerCase(),".svg")}},{key:"equals",value:function(e){return!!e&&(this.id===e.id&&this.countryCode===e.countryCode&&this.region===e.region&&this.city===e.city)}}]),e}(),p={requestLocation:function(){return new Promise(function(e,a){fetch("https://api.ipdata.co/?api-key=test").then(function(e){return e.json()}).then(function(a){var t=new f(void 0,a.country_code,void 0,a.city);e(t)}).catch(function(e){return a(e)})})},searchCities:function e(a,t){n?t(function(e){var a=0;return n.filter(function(t){return t.n.toLowerCase().startsWith(e.toLowerCase())&&a++<5}).map(function(e){return new f(e.i,(a=e.c,function(){if(!i){i={};for(var e=Object.keys(v),a=0;a<e.length;a++){var t=v[e[a]].toLowerCase();i[t]=e[a]}}}(),i[a.toLowerCase()]||a),e.r,e.n);var a})}(a)):fetch("data/cities.json").then(function(e){return e.json()}).then(function(i){n=i,e(a,t)})},countryCodeToName:function(e){return e=e.toUpperCase(),v[e]||e}};var v={AD:"Andorra",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Aland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthelemy",BM:"Bermuda",BN:"Brunei",BO:"Bolivia",BQ:"Bonaire, Saint Eustatius and Saba ",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos Islands",CD:"Democratic Republic of the Congo",CF:"Central African Republic",CG:"Republic of the Congo",CH:"Switzerland",CI:"Ivory Coast",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Cape Verde",CW:"Curacao",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Micronesia",FO:"Faroe Islands",FR:"France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin",MG:"Madagascar",MH:"Marshall Islands",MK:"Macedonia",ML:"Mali",MM:"Myanmar",MN:"Mongolia",MO:"Macao",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"New Zealand",OM:"Oman",PA:"Panama",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn",PR:"Puerto Rico",PS:"Palestinian Territory",PT:"Portugal",PW:"Palau",PY:"Paraguay",QA:"Qatar",RE:"Reunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",SS:"South Sudan",ST:"Sao Tome and Principe",SV:"El Salvador",SX:"Sint Maarten",SY:"Syria",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"East Timor",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Vatican",VC:"Saint Vincent and the Grenadines",VE:"Venezuela",VG:"British Virgin Islands",VI:"U.S. Virgin Islands",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WS:"Samoa",XK:"Kosovo",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe"},g=function(){function e(a,t,n,i){Object(u.a)(this,e),this.id=a,this.main=t,this.description=n,this.icon=i}return Object(l.a)(e,[{key:"iconUrl",value:function(){return"https://openweathermap.org/img/w/".concat(this.icon,".png")}},{key:"equals",value:function(e){return!!e&&(this.id===e.id&&this.main===e.main&&this.description===e.description&&this.icon===e.icon)}}]),e}(),y=function(){function e(a,t){Object(u.a)(this,e),this.speed=a,this.direction=t}return Object(l.a)(e,[{key:"equals",value:function(e){return!!e&&(this.speed===e.speed&&this.direction===e.direction)}}]),e}(),S=function(){function e(a,t,n,i,r,o){Object(u.a)(this,e),this.temperature=a,this.pressure=t,this.humidity=n,this.wind=new y(i,r),this.clouds=o}return Object(l.a)(e,[{key:"equals",value:function(e){return!!e&&(this.temperature===e.temperature&&this.pressure===e.pressure&&this.humidity===e.humidity&&this.wind.equals(e.wind)&&this.clouds===e.clouds)}}]),e}(),E=function(){function e(a){Object(u.a)(this,e),this.id=a.id,this.timestamp=1e3*a.dt,this.location=new f(a.id,a.sys.country,void 0,a.name),this.measurements=new S(a.main.temp,a.main.pressure,a.main.humidity,a.wind.speed,a.wind.deg,a.clouds.all),this.conditions=a.weather.map(function(e){return new g(e.id,e.main.toLowerCase(),e.description.toLowerCase(),e.icon)})}return Object(l.a)(e,[{key:"equals",value:function(e){return!!e&&(this.timestamp===e.timestamp&&this.id===e.id&&this.location.equals(e.location)&&this.measurements.equals(e.measurements)&&this.__conditionsEqual(e.conditions))}},{key:"__conditionsEqual",value:function(e){if(!e)return!1;var a=this.conditions,t=a.length;if(t!==e.length)return!1;for(var n=0;n<t;n++)if(!a[n].equals(e[n]))return!1;return!0}}]),e}(),b={requestData:function(e){return new Promise(function(a,t){if(e){var n,i;if(e.id)i=e.id,n="".concat(C,"?id=").concat(i,"&appid=").concat(M);else{if(!e.city)return void t("Either location id or city must be specified.");n=function(e){return"".concat(C,"?q=").concat(e,"&appid=").concat(M)}(e.city)}fetch(n).then(function(e){return e.json()}).then(function(n){if(n.cod&&(n.cod=parseInt(n.cod)),200===n.cod){var i=new E(n);a(i)}else n.location=e,t(n)}).catch(function(e){return t(e)})}else t("Parameter 'location' must be defined.")})}},C="https://api.openweathermap.org/data/2.5/weather",M="3ccbdea52230974079124e584dbbbb86";var w=t(30),N=t.n(w),I=t(12),T=t.n(I),O=function(e){return o.a.createElement(T.a,e,(a=e.data,e.options.filter(function(e){return e.city.toLowerCase()===a.city.toLowerCase()}).length>=2?"".concat(a.city,", ").concat(a.region):a.city),function(e){var a=e.countryName();return o.a.createElement("img",{className:"search-item-icon",src:e.flagUrl(),title:a,alt:a})}(e.data));var a};var G=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).timeoutId=null,t.state={location:null},t.loadOptions=function(e,a){p.searchCities(e,a)},t.onChange=function(e){t.clearTimeout(),e.equals(t.state.location)||(t.setState({location:e}),t.props.onSelect(e))},t.onKeyDown=function(e){if("enter"===e.key.toLowerCase()){var a=new f(void 0,void 0,void 0,e.target.value);t.selectRef.blur(),t.selectRef.focus(),t.scheduleChange(a)}},t.scheduleChange=function(e){t.timeoutId=window.setTimeout(function(){return t.onChange(e)},100)},t.clearTimeout=function(){t.timeoutId&&(window.clearTimeout(t.timeoutId),t.timeoutId=null)},t.noOptionsMessage=function(e){return""===e.inputValue?"Start typing ...":"Press Enter to load data."},t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-container"},o.a.createElement(N.a,{ref:function(a){e.selectRef=a},components:{Option:O},loadOptions:this.loadOptions,onChange:this.onChange,onKeyDown:this.onKeyDown,value:null,placeholder:"Select city ...",noOptionsMessage:this.noOptionsMessage,autoFocus:!0}))}}]),a}(r.Component),A={toWeekdayMonthDay:function(e){"number"===typeof e&&(e=new Date(e));return e.toLocaleDateString(navigator.language,{weekday:"long",month:"long",day:"numeric"})},toHourMinute24:function(e){"number"===typeof e&&(e=new Date(e));return e.toLocaleTimeString(navigator.language,{hour:"numeric",minute:"numeric",hour12:!1})}};var B=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={dt:new Date},t.__tick=function(){t.setState({dt:new Date})},t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.__intervalId=window.setInterval(this.__tick,250)}},{key:"shouldComponentUpdate",value:function(e,a){return this.state.dt.getMinutes()!==a.dt.getMinutes()}},{key:"componentWillUnmount",value:function(){this.__clearInterval()}},{key:"__clearInterval",value:function(){this.__intervalId&&(window.clearInterval(this.__intervalId),this.__intervalId=null)}},{key:"render",value:function(){var e=this.state.dt,a=A.toWeekdayMonthDay(e),t=A.toHourMinute24(e);return o.a.createElement("div",{className:"clock-container"},o.a.createElement("div",{className:"clock-day"},a),o.a.createElement("div",{className:"clock-hour"},t))}}]),a}(r.Component),k=t(31);function L(e){var a=e.location,t=a.countryName();return o.a.createElement("div",{className:"condition-flexbox"},o.a.createElement("div",{className:"condition-inlinebox"},o.a.createElement("span",{className:"location-city"},a.city),o.a.createElement("img",{className:"location-flag",src:a.flagUrl(),title:t,alt:t})))}var R={capitalizeWords:function(e){return e.replace(/\b\w/g,function(e){return e.toUpperCase()})}};function P(e){var a=e.condition,t=R.capitalizeWords(a.main),n=R.capitalizeWords(a.description);return o.a.createElement("div",{className:"condition-inlinebox"},o.a.createElement("div",{className:"condition-flexbox"},o.a.createElement("img",{className:"condition-icon",src:a.iconUrl(),title:t,alt:t}),o.a.createElement("span",{className:"condition-description"},n)))}function j(e){return o.a.createElement(r.Fragment,null,e.conditions.map(function(e,a){return o.a.createElement(P,{key:e.id,condition:e})}))}function D(e){return o.a.createElement("div",{className:"measurement-container"},o.a.createElement("div",{className:"measurement-inlinebox"},o.a.createElement("div",{className:"measurement-flexbox"},o.a.createElement("img",{className:"measurement-icon",src:(a=e.icon,"img/weather/".concat(a)),title:e.description,alt:e.description}),o.a.createElement("span",{className:"measurement-value"},e.value))));var a}function K(e){var a,t=e.measurements;return o.a.createElement(r.Fragment,null,o.a.createElement(D,{description:"Temperature",icon:"wi-thermometer.svg",value:(a=t.temperature,Math.round(a-273.15)+"\xb0C")}),o.a.createElement(D,{description:"Pressure",icon:"wi-barometer.svg",value:U(t.pressure)}),o.a.createElement(D,{description:"Humidity",icon:"wi-humidity.svg",value:_(t.humidity)}),o.a.createElement(D,{description:"Wind",icon:"wi-small-craft-advisory.svg",value:W(t.wind)}),o.a.createElement(D,{description:"Cloud Cover",icon:"wi-cloudy.svg",value:x(t.clouds)}))}function U(e){return e+" hPa"}function _(e){return e+"%"}function W(e){return function(e){return Math.round(3.6*e)+" km/h "}(e.speed)+function(e){if(!e)return"";var a=Math.floor(e/22.5+.5)%16;return F[a]}(e.direction)}var F=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function x(e){return e+"%"}function q(e){return o.a.createElement("div",{className:"update-inlinebox"},o.a.createElement("div",{className:"update-flexbox"},o.a.createElement("span",{className:"update-description"},"Measured at ",A.toHourMinute24(e.updated)),o.a.createElement("img",{className:"update-icon",src:"img/weather/wi-refresh.svg",title:"Refresh",alt:"Refresh",onClick:e.onRefresh})))}var H=function(e){function a(){return Object(u.a)(this,a),Object(d.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.snapshot,a=this.props.loading;return a||e?o.a.createElement("div",{className:"weather-flexbox-container"},a?o.a.createElement("div",{className:"weather-spinner-container"},o.a.createElement(k.ClipLoader,{size:100,color:"rgb(4, 16, 48)",loading:a})):o.a.createElement(r.Fragment,null,o.a.createElement("div",{className:"weather-flexbox-header"},o.a.createElement("div",{className:"weather-flexbox-left"},o.a.createElement(L,{location:e.location}),o.a.createElement(j,{conditions:e.conditions})),o.a.createElement("div",{className:"weather-flexbox-right"},o.a.createElement(K,{measurements:e.measurements}))),o.a.createElement("div",{className:"weather-flexbox-footer"},o.a.createElement(q,{updated:e.timestamp,onRefresh:this.props.onRefresh})))):o.a.createElement(r.Fragment,null)}}]),a}(r.Component),V=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={snapshot:null,message:null,loading:!1},t.__handleSelect=function(e){t.__requestData(e)},t.__requestData=function(e){t.state.loading||e&&(t.setState({loading:!0}),b.requestData(e).then(function(e){e.equals(t.state.snapshot)||t.setState({snapshot:e,message:null})}).catch(function(e){console.log("Error",e),404===e.cod?t.setState({snapshot:null,message:"City '".concat(e.location.city,"' was not found.")}):e.message&&t.setState({snapshot:null,message:e.message})}).then(function(){t.setState({loading:!1})}))},t.onRefresh=function(){var e=t.state.snapshot;e&&t.__requestData(e.location)},t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.requestLocation().then(function(a){return e.__handleSelect(a)})}},{key:"render",value:function(){var e=this.state.message;return o.a.createElement("div",{className:"app-container"},o.a.createElement("div",{className:"app-inlinebox"},o.a.createElement("div",{className:"app-flexbox"},o.a.createElement(B,null),o.a.createElement(G,{onSelect:this.__handleSelect}),null===e?o.a.createElement(H,{snapshot:this.state.snapshot,loading:this.state.loading,onRefresh:this.onRefresh}):o.a.createElement("div",{className:"app-error"},e))))}}]),a}(r.Component);c.a.render(o.a.createElement(V,null),document.getElementById("root"))}},[[33,2,1]]]);
//# sourceMappingURL=main.6c4feeee.chunk.js.map