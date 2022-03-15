/* flat Structure-of-Arrays representation (https://en.wikipedia.org/wiki/AoS_and_SoA#Structure_of_arrays), beats previous JSON
   15k vs 35k (4.8k vs 7.6k gzipped).
*/
/* prettier-ignore */
/* eslint-disable */
export const countries = ['Schweiz','Switzerland','Suisse','Svizzera','Deutschland','Germany','Allemagne','Germania','Frankreich','France','France','Francia','Österreich','Austria','Autriche','Austria','Italien','Italy','Italie','Italia','Liechtenstein','Liechtenstein','Liechtenstein','Liechtenstein','Afghanistan','Afghanistan','Afghanistan','Afganistan','Albanien','Albania','Albanie','Albania','Algerien','Algeria','Algérie','Algeria','Amerikanische Überseeinseln, kleinere','United States Minor Outlying Islands','Iles mineures éloignées des Etats-Unis','Isole Minori (USA)','Andorra','Andorra','Andorre','Andorra','Angola','Angola','Angola','Angola','Anguilla','Anguilla','Anguilla','Anguilla','Antigua und Barbuda','Antigua and Barbuda','Antigua et Barbuda','Antigua e Barbuda','Argentinien','Argentina','Argentine','Argentina','Armenien','Armenia','Arménie','Armenia','Aruba','Aruba','Aruba','Aruba','Aserbaidschan','Azerbaijan','Azerbaïdjan','Azerbaigian','Australien','Australia','Australie','Australia','Bahamas','Bahamas','Bahamas','Bahama','Bahrain','Bahrain','Bahrain','Bahrein','Bangladesh','Bangladesh','Bangladesh','Bangladesh','Barbados','Barbados','Barbade','Barbados','Belarus','Belarus','Bélarus','Bielorussia','Belgien','Belgium','Belgique','Belgio','Belize','Belize','Belize','Belize','Benin','Benin','Bénin','Benin','Bermuda','Bermuda','Bermudes','Bermude','Bhutan','Bhutan','Bhoutan','Bhutan','Bolivien','Bolivia','Bolivie','Bolivia','Bonaire, Sint Eustatius und Saba','Bonaire, Sint Eustatius and Saba','Bonaire, Saint-Eustache et Saba','Bonaire, Sint-Eustache e Saba','Bosnien-Herzegowina','Bosnia-Herzegovina','Bosnie-Herzégovine','Bosnia-Erzegovina','Botswana','Botswana','Botswana','Botswana','Brasilien','Brazil','Brésil','Brasile','Britische Jungferninseln','British Virgin Islands','IIes Vierges britanniques','Isole Vergini britanniche','Britisches Territorium im Indischen Ozean','British Indian Ocean Territory',"Territoire britannique de l'océan Indien","Territorio britannico dell'Oceano Indiano",'Brunei','Brunei','Brunéi','Brunei','Bulgarien','Bulgaria','Bulgarie','Bulgaria','Burkina Faso','Burkina Faso','Burkina Faso','Burkina Faso','Burundi','Burundi','Burundi','Burundi','Cayman','Cayman Islands','Cayman','Cayman','Chile','Chile','Chili','Cile','China (Volksrepublik)',"China (People's Republic)",'Chine (République populaire)','Cina (Repubblica Popolare)','Cook-Inseln','Cook Islands','Cook, Iles','Cook, Isole','Costa Rica','Costa Rica','Costa Rica','Costa Rica','Curaçao','Curaçao','Curaçao','Curaçao','Djibouti','Djibouti','Djibouti','Gibuti','Dominica','Dominica','Dominique','Dominica','Dominikanische Republik','Dominican Republic','Dominicaine (République)','Dominicana (Repubblica)','Dänemark','Denmark','Danemark','Danimarca','Ekuador','Ecuador','Equateur','Equatore','El Salvador','El Salvador','El Salvador','El Salvador','Elfenbeinküste','Ivory Coast',"Côte d'Ivoire","Costa d'Avorio",'Eritrea','Eritrea','Erythrée','Eritrea','Estland','Estonia','Estonie','Estonia','Falkland-Inseln','Falkland Islands','Falkland, Iles','Falkland, Isole','Fidschi','Fiji','Fidji','Figi','Finnland','Finland','Finlande','Finlandia','Französisch-Guyana','French Guiana','Guyane française','Guiana Francese','Französisch-Polynesien','French Polynesia','Polynésie Française','Polinesia francese','Französische Süd- und Antarktisgebiete','French Southern and Antarctic Lands','Terres australes et antarctiques françaises','Terre australi e antartiche francesi','Färöer-Inseln','Faroe Islands','Féroé, Iles','Faeröer, Isole','Gabun','Gabon','Gabon','Gabon','Gambia','Gambia','Gambie','Gambia','Georgien','Georgia','Géorgie','Georgia','Ghana','Ghana','Ghana','Ghana','Gibraltar','Gibraltar','Gibraltar','Gibilterra','Grenada','Grenada','Grenade','Grenada','Griechenland','Greece','Grèce','Grecia','Grossbritannien und Nordirland','Great Britain and Northern Ireland','Grande-Bretagne et Irlande du Nord','Gran Bretagna e Irlanda del Nord','Grönland','Greenland','Groenland','Groenlandia','Guadeloupe','Guadeloupe','Guadeloupe','Guadalupa','Guam','Guam','Guam','Guam','Guatemala','Guatemala','Guatemala','Guatemala','Guernsey','Guernsey','Guernsey','Guernsey','Guinea (Republik)','Guinea (Republic)','Guinée (République)','Guinea (Repubblica)','Guinea-Bissau','Guinea-Bissau','Guinée-Bissau','Guinea-Bissau','Guyana','Guyana','Guyane','Guiana','Haiti','Haiti','Haïti','Haiti','Honduras','Honduras','Honduras','Honduras','Hongkong','Hong Kong','Hong-Kong','Hongkong','Indien','India','Inde','India','Indonesien','Indonesia','Indonésie','Indonesia','Irak','Iraq','Iraq','Iraq','Iran','Iran','Iran','Iran','Irland','Ireland','Irlande','Irlanda','Island','Iceland','Islande','Islanda','Israel','Israel','Israël','Israele','Jamaika','Jamaica','Jamaïque','Giamaica','Japan','Japan','Japon','Giappone','Jemen','Yemen','Yémen','Yemen','Jersey','Jersey','Jersey','Jersey','Jordanien','Jordan','Jordanie','Giordania','Jungferninseln (USA)','Virgin Islands (USA)','Iles Vierges (Etats-Unis)','Isole Vergini (USA)','Kambodscha','Cambodia','Cambodge','Cambogia','Kamerun','Cameroon','Cameroun','Camerun','Kanada','Canada','Canada','Canada','Kapverdische Inseln','Cape Verde','Cap-Vert, Iles du','Capo Verde, Isole del','Kasachstan','Kazakhstan','Kazakhstan','Kazakistan','Kenia','Kenya','Kenya','Kenya','Kirgisistan','Kyrgyzstan','Kirghizistan','Kirghizistan','Kiribati','Kiribati','Kiribati','Kiribati','Kokos-Insel (Keeling)','Cocos (Keeling) Island','Cocos (Keeling), Ile des','Cocos, Isola','Kolumbien','Colombia','Colombie','Colombia','Komoren','Comoros','Comores','Comore','Kongo (Republik)','Congo (Republic)','Congo (République)','Congo (Repubblica)','Kongo, Demokratische Republik','Congo, Democratic Republic','Congo, République démocratique','Congo, Repubblica Democratica','Korea, Republik (Südkorea)','Korea, Republic of (South Korea)','Corée, République (Corée du Sud)','Corea, Repubblica (Corea del Sud)','Korea, demokratische Volksrepublik (Nordkorea)',"Korea, Democratic People's Republic of (North Korea)",'Corée, République populaire démocratique (Corée du Nord)','Corea, Repubblica popolare democratica (Corea del Nord)','Kosovo','Kosovo','Kosovo','Kosovo','Kroatien','Croatia','Croatie','Croazia','Kuba','Cuba','Cuba','Cuba','Kuwait','Kuwait','Kuwait','Kuwait','Laos','Laos','Laos','Laos','Lesotho','Lesotho','Lesotho','Lesotho','Lettland','Latvia','Lettonie','Lettonia','Libanon','Lebanon','Liban','Libano','Liberia','Liberia','Libéria','Liberia','Libyen','Libya','Libye','Libia','Litauen','Lithuania','Lituanie','Lituania','Luxemburg','Luxembourg','Luxembourg','Lussemburgo','Macao','Macao','Macao','Macao','Madagaskar','Madagascar','Madagascar','Madagascar','Malawi','Malawi','Malawi','Malawi','Malaysia','Malaysia','Malaisie','Malaisia','Malediven','Maldives','Maldives','Maldive, Isole','Mali','Mali','Mali','Mali','Malta','Malta','Malte','Malta','Man, Insel','Isle of Man','Man, Ile de','Man, Isola di','Marianen-Inseln','Mariana Islands','Mariannes, Iles','Marianne, Isole','Marokko','Morocco','Maroc','Marocco','Marshall-Inseln','Marshall Islands','Marshall, Iles','Marshall, Isole','Martinique','Martinique','Martinique','Martinica','Mauretanien','Mauritania','Mauritanie','Mauritania','Mauritius, Insel','Mauritius Island','Maurice, Ile','Maurizio, Isola','Mayotte','Mayotte','Mayotte','Mayotte','Mazedonien, ehemalige jugoslawische Republik','Macedonia, Former Yugoslav Republic of','Macedoine, ex-République yougoslave de','Macedonia, ex Repubblica iugoslava','Mexiko','Mexico','Mexique','Messico','Mikronesien (Föderierte Staaten von)','Micronesia (Federated States OF)','Micronésie (Etats fédérés)','Micronesia (Stati federati)','Moldova','Moldova','Moldova','Moldova','Monaco','Monaco','Monaco','Monaco','Mongolei','Mongolia','Mongolie','Mongolia','Montenegro','Montenegro','Monténégro','Montenegro','Montserrat','Montserrat','Montserrat','Montserrat','Mosambik','Mozambique','Mozambique','Mozambico','Myanmar (Union)','Myanmar (Union of)','Myanmar (Union de)','Myanmar (Unione)','Namibia','Namibia','Namibie','Namibia','Nauru','Nauru','Nauru','Nauru','Nepal','Nepal','Népal','Nepal','Neukaledonien','New Caledonia','Nouvelle-Calédonie','Nuova Caledonia','Neuseeland','New Zealand','Nouvelle-Zélande','Nuova Zelanda','Nicaragua','Nicaragua','Nicaragua','Nicaragua','Niederlande','Netherlands','Pays-Bas','Paesi Bassi','Niger','Niger','Niger','Niger','Nigeria','Nigeria','Nigeria','Nigeria','Niue','Niue','Niue','Niue','Norfolk-Insel','Norfolk Island','Norfolk, Ile','Norfolk, Isola','Norwegen','Norway','Norvège','Norvegia','Oman','Oman','Oman','Oman','Pakistan','Pakistan','Pakistan','Pakistan','Palau','Palau','Palau','Palau','Palästina','Palestine','Palestine','Palestina','Panama','Panama','Panama','Panama','Papua-Neuguinea','Papua New Guinea','Papouasie-Nouvelle-Guinée','Papua-Nuova Guinea','Paraguay','Paraguay','Paraguay','Paraguay','Peru','Peru','Pérou','Perù','Philippinen','Philippines','Philippines','Filippine','Pitcairninseln','Pitcairn Islands','Pitcairn, Îles','Pitcairn, Isole','Polen','Poland','Pologne','Polonia','Portugal','Portugal','Portugal','Portogallo','Puerto Rico','Puerto Rico','Porto Rico','Porto Rico','Qatar','Qatar','Qatar','Qatar','Rumänien','Romania','Roumanie','Romania','Russische Föderation','Russian Federation','Russie (Fédération de)','Russia (Federazione di)','Rwanda','Rwanda','Rwanda','Rwanda','Réunion','Réunion','Réunion','Riunione','Saint-Barthélemy','Saint-Barthélemy','Saint-Barthélemy','Saint-Barthélemy','Saint-Martin (FR)','Saint-Martin (FR)','Saint-Martin (FR)','Saint-Martin (FR)','Saint-Pierre und Miquelon','Saint Pierre and Miquelon','Saint-Pierre-et-Miquelon','Saint-Pierre e Miquelon','Salomon-Inseln','Salomon Islands','Salomon, Iles','Salomone, Isole','Sambia','Zambia','Zambie','Zambia','Samoa','Samoa','Samoa','Samoa','Samoa, amerikanischer Teil','American Samoa','Samoa, partie américaine','Samoa, parte statunitense','San Marino','San Marino','St-Marin','San Marino','Saudi-Arabien','Saudi Arabia','Arabie Saoudite','Arabia Saudita','Schweden','Sweden','Suède','Svezia','Senegal','Senegal','Sénégal','Senegal','Serbien','Serbia','Serbie','Serbia','Seychellen','Seychelles','Seychelles','Seicelle','Sierra Leone','Sierra Leone','Sierra Leone','Sierra Leone','Singapur','Singapore','Singapour','Singapore','Sint Maarten (NL)','Sint Maarten (NL)','Sint Maarten (NL)','Sint Maarten (NL)','Slowakei','Slovakia','Slovaquie','Slovacchia','Slowenien','Slovenia','Slovénie','Slovenia','Somalia','Somalia','Somalie','Somalia','Spanien','Spain','Espagne','Spagna','Sri Lanka','Sri Lanka','Sri Lanka','Sri Lanka','St. Christoph (St. Kitts) und Nevis','St. Christopher (St. Kitts) and Nevis','St. Christophe (St. Kitts) et Nevis','San Cristoforo (St. Kitts) e Nevis','St. Helena, Ascension und Tristan da Cunha','Saint Helena, Ascension and Tristan da Cunha','Sainte-Hélène, Ascension et Tristan da Cunha',"Sant'Elena, Ascensione e Tristan da Cunha",'St. Lucia','St. Lucia','St. Lucie','St. Lucia','St. Vincent und die Grenadinen','Saint Vincent and the Grenadines','Saint-Vincent-et-les-Grenadines','Saint Vincent e Grenadine','Sudan','Sudan','Soudan','Sudan','Suriname','Suriname','Suriname','Suriname','Swasiland','Swaziland','Swaziland','Swaziland','Syrien','Syria','Syrie','Siria','São Tomé und Príncipe','São Tomé and Príncipe','Sao Tomé-et-Principe','São Tomé e Príncipe','Südafrika','South Africa','Afrique du Sud','Sudafrica','Südgeorgien und die südlichen Sandwichinseln','South Georgia and the south Sandwich Islands','Géorgie du sud et les îles Sandwich du sud','Georgia australe e le isole Sandwich australe','Südsudan','South Sudan','Soudan du Sud','Sudan del Sud','Tadschikistan','Tajikistan','Tadjikistan','Tagiskistan','Taiwan (Chinesisches Taipeh)','Taiwan (Chinese Taipei)','Taiwan (Taipei chinois)','Taiwan (Cina Taipei)','Tansania','Tanzania','Tanzanie','Tanzania','Thailand','Thailand','Thaïlande','Tailandia','Timor-Leste','Timor-Leste','Timor-Leste','Timor-Leste','Togo','Togo','Togo','Togo','Tokelau','Tokelau','Tokélaou','Tokelau','Tonga','Tonga','Tonga','Tonga','Trinidad und Tobago','Trinidad and Tobago','Trinité et Tobago','Trinidad e Tobago','Tschad','Chad','Tchad','Ciad','Tschechische Republik','Czech Republic','Tchèque (République)','Ceca (Repubblica)','Tunesien','Tunisia','Tunisie','Tunisia','Turkmenistan','Turkmenistan','Turkménistan','Turkmenistan','Turks und Caicos','Turks and Caicos','Turques et Caïques','Turks e Caicos','Tuvalu','Tuvalu','Tuvalu','Tuvalu','Türkei','Turkey','Turquie','Turchia','Uganda','Uganda','Ouganda','Uganda','Ukraine','Ukraine','Ukraine','Ucraina','Ungarn','Hungary','Hongrie','Ungheria','Uruguay','Uruguay','Uruguay','Uruguay','Usbekistan','Uzbekistan','Ouzbékistan','Uzbekistan','Vanuatu','Vanuatu','Vanuatu','Vanuatu','Vatikanstadt','Vatican City','Cité du Vatican','Città del Vaticano','Venezuela','Venezuela','Venezuela','Venezuela','Vereinigte Arabische Emirate','United Arab Emirates','Emirats Arabes Unis','Emirati Arabi Uniti','Vereinigte Staaten von Amerika','United States of America',"Etats-Unis d'Amérique","Stati Uniti d'America",'Vietnam','Vietnam','Viêt-Nam','Vietnam','Wallis und Futuna','Wallis and Futuna Islands','Wallis et Futuna','Wallis e Futuna','Weihnachtsinseln (indischer Ozean)','Christmas Island (Indian Ocean)','Christmas, Ile (Océan indien)','Christmas, Isola (Oceano indiano)','Westsahara','Western Sahara','Sahara occidental','Sahara Occidentale','Zentralafrika','Central African Republic','Centrafrique','Centrafrica','Zimbabwe','Zimbabwe','Zimbabwe','Zimbabwe','Zypern','Cyprus','Chypre','Cipro','Ägypten','Egypt','Egypte','Egitto','Äquatorial-Guinea','Equatorial Guinea','Guinée équatoriale','Guinea equatoriale','Äthiopien','Ethiopia','Ethiopie','Etiopia','Åland','Åland','Åland','Åland'];
/* prettier-ignore */
export const dialCodes = [41,49,33,43,39,417,93,355,213,246,376,244,1264,1268,54,374,297,994,61,1242,973,880,1246,375,32,501,229,1441,975,591,599,387,267,55,84,246,673,359,226,257,1345,56,86,682,506,599,253,1809,1809,45,593,503,225,291,372,500,679,358,594,689,672,298,241,220,7880,233,350,1473,30,44,299,590,671,502,44,224,245,592,509,504,852,91,62,964,98,353,354,972,1876,81,969,44,962,84,855,237,1,238,7,254,996,686,61,57,269,242,243,82,850,383,385,53,965,856,266,371,961,231,218,370,352,853,261,265,60,960,223,356,44,1,212,692,596,222,230,269,389,52,691,373,377,976,382,1664,258,95,264,674,977,687,64,505,31,227,234,683,672,47,968,92,680,970,507,675,595,51,63,64,48,351,1787,974,40,7,250,262,590,590,508,677,260,685,685,378,966,46,221,381,248,232,65,721,421,386,252,34,94,1869,290,1,1,249,597,268,963,239,27,500,211,7,886,255,66,670,228,690,676,1868,235,42,216,7,1649,688,90,256,380,36,598,7,678,379,58,971,1,84,681,61,212,236,263,90392,20,240,251,358];
