// ======== Configurações ========
const adminPassword = "sistemavoto"; 
const chapas = ["NOVA UNIÃO","CHAPA MÁXIMA","VOZ ATIVA","FÚRIA EM PISTA","Nulo"];
let votos = JSON.parse(localStorage.getItem("votos_pc1")) || {
  "NOVA UNIÃO":0,"CHAPA MÁXIMA":0,"VOZ ATIVA":0,"FÚRIA EM PISTA":0,"Nulo":0
};
let usedPasswords = JSON.parse(localStorage.getItem("usedpasswords_pc3")) || {};

// ======== Senhas Pré-definidas (500 senhas exemplo) ========
const passwords_pc3 = [
    "WHX298EC",
    "SGX602PQ",
    "RYY211YC",
    "OYU662BV",
    "EPP851DK",
    "TEE393BW",
    "VWJ726WO",
    "APV830MJ",
    "JIK996XS",
    "BBI986HP",
    "BPM501HZ",
    "AMZ262BR",
    "DJZ160YZ",
    "YUS328VA",
    "IWN725NP",
    "WSA203FP",
    "DCD118CL",
    "VJC853KL",
    "ZJP760VB",
    "JZP424DO",
    "NVQ870XM",
    "SUD542UB",
    "XZO757UE",
    "MIZ201PK",
    "NEY815CO",
    "LCI609TQ",
    "RTB294QO",
    "AVD449JH",
    "UGI044DS",
    "FKJ102TW",
    "SGT128ND",
    "SEJ125QV",
    "DTD234SP",
    "HPO214GO",
    "TZC941DH",
    "MNY839JS",
    "FFS202GA",
    "JJN713JK",
    "ZYE742RB",
    "AUJ585MW",
    "FRT482LJ",
    "TGM082VH",
    "UBI205YK",
    "SMY137MP",
    "NNL349IJ",
    "SRU465YT",
    "NEL316PG",
    "DKO810AG",
    "HKY644KR",
    "LNP933IB",
    "EPG713BF",
    "ZZL973QY",
    "KVC173WG",
    "WXI253PI",
    "NWW282GQ",
    "SVR716YR",
    "ORK739NU",
    "VLW868EZ",
    "XYO243QX",
    "SBM953KV",
    "FEN540GK",
    "NPM516KB",
    "MWP763AL",
    "VCW005QF",
    "NMU243AS",
    "AIO429ZC",
    "DDN967WM",
    "UOO794NP",
    "JWC066NH",
    "IHG543NR",
    "XRM256PE",
    "URJ025JH",
    "GQS438BH",
    "NOG776IF",
    "JZY363CG",
    "WJI499GW",
    "OCV803ET",
    "QGX256ZR",
    "YFG241LS",
    "PZM720BK",
    "AGV849ZG",
    "ASE591VD",
    "OLV915IE",
    "JMI444YP",
    "XQJ293YT",
    "JNG389WZ",
    "GQW207AF",
    "XCV687KT",
    "PNC469UY",
    "YLN862AY",
    "DMH791TC",
    "OVE762RR",
    "VGO006GN",
    "HKF819PR",
    "FPR811ET",
    "ZDT317RD",
    "VDU021SU",
    "QLV361EX",
    "LBN867WI",
    "JDF127RB",
    "OPY362UI",
    "UDE015XB",
    "YUI913IT",
    "VVU657HM",
    "ZCB528VL",
    "SRK737AU",
    "WJZ186RH",
    "PQR863PP",
    "LIQ269CE",
    "WCZ072EY",
    "NRY095JN",
    "WAX429DX",
    "DJL876VG",
    "OFD714VM",
    "BPH240YQ",
    "VIN669WB",
    "NXQ801PU",
    "AMF307SE",
    "AOB004CC",
    "POT138ZF",
    "UUZ828ZI",
    "YWE698BA",
    "RCQ583JL",
    "XMR142AZ",
    "EUC503XJ",
    "HHA477MF",
    "XGV243EI",
    "DBK510NK",
    "AFC733VM",
    "DHD594SA",
    "EIS027DV",
    "GSH658VZ",
    "AUK730XU",
    "BNL923FN",
    "SPK947LD",
    "XPM716BA",
    "VLW753EF",
    "BWC810EC",
    "ZPN927YS",
    "JFV917LX",
    "NTU539TJ",
    "OXR421CV",
    "ZYX502EB",
    "NKM361SG",
    "FPG874PN",
    "FYQ215VO",
    "IOX799FL",
    "QYQ618EL",
    "LOD885IW",
    "QMN796TF",
    "LVM657MT",
    "QSW702KR",
    "WLD251KT",
    "ZEI566IZ",
    "HPU625MV",
    "FPP429UM",
    "YNM950WP",
    "PDL995NB",
    "OWS891ZR",
    "UZB950TU",
    "GBE906RU",
    "ATA230AQ",
    "DDN020WU",
    "XDL200OY",
    "IQF822QZ",
    "GNS071TW",
    "YYI039VL",
    "WRC673FE",
    "HCE223SS",
    "ZXD693TP",
    "BNW837AJ",
    "IZS509LB",
    "NJW771OG",
    "KPF905SY",
    "TYL177ZN",
    "KGQ512DH",
    "FER652OO",
    "PRM256MK",
    "XXX041CS",
    "ULD471FF",
    "FVO726DQ",
    "IOP506RC",
    "EMT082AL",
    "POR689ZZ",
    "DNB328DU",
    "VKP493GT",
    "TJN341IS",
    "VZI474SO",
    "ZEI629AN",
    "GUP638ZW",
    "XNM940HG",
    "MLN132IE",
    "MQO310YC",
    "JQE258OG",
    "PXL338KS",
    "BGE335TA",
    "DCP213FX",
    "MFB463BC",
    "CTN977MV",
    "VQG971KC",
    "MHV648CD",
    "IVI127JZ",
    "WNZ517BF",
    "UBX687CP",
    "RZK859KN",
    "EDY650FH",
    "SQD182QT",
    "JVV216JG",
    "NDT177IV",
    "CKR981UO",
    "XWN852EA",
    "IFY025BH",
    "ZJQ418GP",
    "VVZ048ZM",
    "IDT241LU",
    "PBK446FO",
    "ELP003PR",
    "PIL491KQ",
    "YTN367ZJ",
    "LHO311JN",
    "VYM302EH",
    "PYP827EQ",
    "WXK222RE",
    "JAI298XP",
    "XSU848TV",
    "EOY157FL",
    "FIA157VY",
    "LGJ875RR",
    "OYC520VM",
    "SLY903SL",
    "PZW358TC",
    "XYP763RY",
    "AVA098FQ",
    "JLM988SU",
    "KMW276BQ",
    "YDQ065HB",
    "DAZ265YK",
    "NYM473MP",
    "QFT730VB",
    "WZG849WF",
    "BLT367CZ",
    "BUF101PQ",
    "HGZ483HF",
    "RSA473IX",
    "KIU505KL",
    "SHV338TN",
    "ZSP374HD",
    "TYS682YI",
    "KMX863LH",
    "SRJ215BA",
    "GFD514YH",
    "ACW365DA",
    "MHF640DE",
    "XEB165AB",
    "QBX222MM",
    "HVX031WV",
    "NVA930GE",
    "OPG195DC",
    "NHI048NZ",
    "EWN169VZ",
    "TYP375PY",
    "OXE139XU",
    "SJS923VA",
    "SHI174QS",
    "ITE593DW",
    "FJI617OB",
    "TZY923JY",
    "ZIE632JW",
    "ANA172XC",
    "VBW142EJ",
    "KYE536WR",
    "END146JZ",
    "MND746MU",
    "GJX056AH",
    "ALW236EK",
    "UZJ573OR",
    "UQO871FF",
    "FLO599QQ",
    "IVW301XL",
    "STP731SU",
    "EAE972CW",
    "PJC012HZ",
    "SEH114FI",
    "NDH063WN",
    "QGX479EG",
    "VHZ295CZ",
    "FDB208MO",
    "WCB158WL",
    "JCE072ON",
    "CAR090HV",
    "YVG776UC",
    "UVH532UQ",
    "HWZ374MU",
    "CXC781RO",
    "ZFY771LJ",
    "QAJ730FZ",
    "ZDN436ET",
    "VUM185KX",
    "LRV318NH",
    "WMN476YJ",
    "PNV557RQ",
    "RGZ961FR",
    "ZJH985HS",
    "MWB204CD",
    "IYV836KP",
    "RSE272IX",
    "XDA839SC",
    "LNW505LZ",
    "AVF604XM",
    "ZAE485HK",
    "ZKJ414LQ",
    "UCO543VN",
    "IDG431DO",
    "WHV774MK",
    "JFN062UZ",
    "LZJ957JR",
    "XWS630YP",
    "MRQ408KW",
    "VNQ641GE",
    "PDW618VC",
    "SPP629BU",
    "KZT984JV",
    "OZS761TZ",
    "HPI582MP",
    "LBO765BQ",
    "PZW964CL",
    "VIC099IF",
    "NIP666CT",
    "NBO802YN",
    "GRJ005QE",
    "BZY994GF",
    "PCS541NJ",
    "UHZ272AI",
    "LOP686SH",
    "CZX559FH",
    "SLY817GW",
    "HMG839RX",
    "XNV931ZU",
    "SSA430AG",
    "OSY626AR",
    "EGA937PY",
    "ERV698CY",
    "LZZ546ME",
    "CNS614IL",
    "AST173WY",
    "ZNY320GU",
    "BRK789UI",
    "ZRI757CG",
    "EFN663IX",
    "IMI061KZ",
    "HFY542SS",
    "EYP596MR",
    "POU132JJ",
    "ZFF202XP",
    "GRM362CS",
    "DIV531HJ",
    "UJI275KW",
    "AEH396KW",
    "TFT088CY",
    "XLA590YY",
    "WIU454UG",
    "CNE314GN",
    "GJE670SH",
    "OFF875BM",
    "CIG108ZZ",
    "ZYU902KU",
    "PCI131MA",
    "MPV446RP",
    "IGN695RY",
    "HZF435DD",
    "HUA831GT",
    "USH233SG",
    "QJG982XJ",
    "PYO699IY",
    "EBB425ZN",
    "FIB301NU",
    "FXH211IN",
    "JWS682QV",
    "KOZ591BX",
    "JJR765JD",
    "YNQ432ZR",
    "KRN881ES",
    "WGV432RH",
    "XWM588WC",
    "KVI910NE",
    "RHH912TX",
    "AUX855DR",
    "KPV714OV",
    "EZP225OC",
    "COU364SV",
    "EIQ517SP",
    "LXM522EC",
    "LRN943UE",
    "AYR427VS",
    "FUP766BY",
    "LHH243RS",
    "MSB960VL",
    "EJZ722JA",
    "COD571KF",
    "HCL471RT",
    "LNQ194XJ",
    "DSJ827OI",
    "FNN532UQ",
    "SDL000FO",
    "IQZ814WT",
    "GQW362TV",
    "FWI929AZ",
    "HFN037PK",
    "EGY886BW",
    "VJU973LD",
    "JCM550WP",
    "TSB483NU",
    "VPM530CL",
    "AGM276SI",
    "EAM862MZ",
    "DEM972JR",
    "IQT578KT",
    "LPZ421MH",
    "ONU205MX",
    "HOX085KO",
    "JET649TC",
    "YVR959JV",
    "PML237PF",
    "CUM434YR",
    "GBE784RU",
    "NSI009XA",
    "EDJ151ID",
    "NUI038EY",
    "ADZ029RK",
    "ELV594PI",
    "KDA042BW",
    "YFR669ZW",
    "EAI210HL",
    "MAQ454XL",
    "BKI501IE",
    "MML673HH",
    "XLT263KV",
    "XQE658OZ",
    "ZSR653TG",
    "HFY775ZY",
    "WZQ839GF",
    "ICR090PY",
    "MEW754MB",
    "RKQ559UZ",
    "JJY381BO",
    "KDU858LM",
    "BFV048JO",
    "OYG307ID",
    "AJS431QI",
    "HDA418AA",
    "WPP741JB",
    "TQA678EO",
    "DXY124HK",
    "ZRZ784QW",
    "JLJ538SE",
    "ROG044EU",
    "HUE808SV",
    "PLG022RZ",
    "EZM045LC",
    "ASF026BB",
    "DMK913QA",
    "KQG508CC",
    "SDD856BQ",
    "AKM253EQ",
    "PAF406GF",
    "DDO554LL",
    "DXP876DL",
    "XVU223YQ",
    "UIV484PH",
    "ZOV646LJ",
    "GXO787AK",
    "EPM658IJ",
    "NNB367XE",
    "UZT287CW",
    "TOW468QE",
    "GKZ248OK",
    "ZOA752SQ",
    "XEG215TS",
    "QTY971WU",
    "DSW844PJ",
    "OLZ170JY",
    "PNI549QL",
    "NRO822BU",
    "QKJ154GM",
    "BXA431FU",
    "IJV939TF",
    "RTK618RQ",
    "WMO647PO",
    "MRV512GZ",
    "OUP662ES",
    "YYG582YR",
    "ZJV861SN",
    "KAX234NN",
    "DGT715IZ",
    "EUR414ZO",
    "EQR768IT",
    "UVQ003FQ",
    "IPK285FK",
    "RZK421HU",
    "WUD213FN"
    ];

// Salvar senhas no localStorage caso não exista
if(!localStorage.getItem("passwords_pc3")) {
  localStorage.setItem("passwords_pc3", JSON.stringify(passwords_pc3));
  localStorage.removeItem("usedpasswords_pc3");
}

// ======== Login ========
function login() {
  const username=document.getElementById("username").value.trim();
  const password=document.getElementById("password").value.trim();
  const error=document.getElementById("login-error");

  if(username.toUpperCase()==="COMPUTADOR 3" && password===adminPassword){
    document.getElementById("login-container").style.display="none";
    document.getElementById("resultado-container").style.display="block";
    renderChart();
    renderPasswords();
    return;
  }

  if(passwords_pc3.includes(password) && !usedPasswords[password]){
    usedPasswords[password]=true;
    localStorage.setItem("usedpasswords_pc3",JSON.stringify(usedPasswords));
    document.getElementById("login-container").style.display="none";
    document.getElementById("voto-container").style.display="block";
    error.textContent="";
  } else error.textContent="Usuário ou senha inválidos, ou senha já usada.";
}

// ======== Votação ========
function confirmVote(chapa){
  if(confirm(`Você tem certeza que deseja votar nesta chapa: ${chapa}?`)){
    votos[chapa]++;
    localStorage.setItem("votos_pc1",JSON.stringify(votos));
    alert("Obrigado por votar!");
    setTimeout(()=>{
      document.getElementById("voto-container").style.display="none";
      document.getElementById("login-container").style.display="block";
      document.getElementById("username").value="COMPUTADOR 3";
      document.getElementById("password").value="";
      document.getElementById("voto-msg").textContent="";
      document.getElementById("login-error").textContent="";
    },500);
  }
  tocarSom();
}
function tocarSom() {
  const audio = document.getElementById("som");
  audio.currentTime = 0; // Reinicia o áudio se já estiver tocando
  audio.play();
}

// ======== Resultados ========
let chart;
function renderChart(){
  const ctx=document.getElementById('chart').getContext('2d');
  chart=new Chart(ctx,{
    type:'bar',
    data:{
      labels:chapas,
      datasets:[{
        label:'Votos',
        data:chapas.map(ch=>votos[ch]),
        backgroundColor:['#0d6efd','#198754','#ffc107','#6f42c1','#d32f2f']
      }]
    },
    options:{
      responsive:true,
      plugins:{legend:{display:false}},
      animation:false,
      scales:{y:{beginAtZero:true,precision:0}}
    }
  });
  updateTable();
}

function updateTable(){
  const tbody=document.getElementById("tabela-resultados");
  tbody.innerHTML="";
  chapas.forEach(ch=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td style="color:${getChapaColor(ch)}">${ch}</td><td>${votos[ch]}</td>`;
    tbody.appendChild(tr);
  });
}

function getChapaColor(chapa){
  switch(chapa){
    case "NOVA UNIÃO": return "#0d6efd";
    case "CHAPA MÁXIMA": return "#198754";
    case "VOZ ATIVA": return "#ffc107";
    case "FÚRIA EM PISTA": return "#6f42c1";
    case "Nulo": return "#d32f2f";
    default: return "#000";
  }
}

// Atualizar gráfico em tempo real
setInterval(()=>{
  votos=JSON.parse(localStorage.getItem("votos_pc1")) || {
    "NOVA UNIÃO":0,"CHAPA MÁXIMA":0,"VOZ ATIVA":0,"FÚRIA EM PISTA":0,"Nulo":0
  };
  if(chart){
    chart.data.datasets[0].data=chapas.map(ch=>votos[ch]);
    chart.update();
    updateTable();
  }
},1000);

// ======== Limpar votos com confirmação ========
function limparVotos(){
  if(confirm("Tem certeza que deseja limpar todos os votos deste computador?")){
    votos={"NOVA UNIÃO":0,"CHAPA MÁXIMA":0,"VOZ ATIVA":0,"FÚRIA EM PISTA":0,"Nulo":0};
    localStorage.setItem("votos_pc1",JSON.stringify(votos));
    if(chart){
      chart.data.datasets[0].data=chapas.map(ch=>votos[ch]);
      chart.update();
      updateTable();
    }
  }
}

// ======== Limpar senhas usadas ========
function limparSenhasUsadas(){
  if(confirm("Tem certeza que deseja resetar todas as senhas usadas?")){
    localStorage.removeItem("usedpasswords_pc3");
    usedPasswords={};
    alert("Senhas usadas foram limpas.");
    renderPasswords();
  }
}

// ======== Senhas ========
function toggleSenhas(){
  const section=document.getElementById("senhas-section");
  section.style.display=section.style.display==="none"?"block":"none";
}

function renderPasswords(){
  const div=document.getElementById("senhas-div");
  div.innerHTML="<h3>Senhas de Votação (COMPUTADOR 3)</h3>";

  let table=document.createElement("table");
  table.style.width="100%";
  table.style.borderCollapse="collapse";
  table.style.textAlign="center";

  let thead=document.createElement("thead");
  thead.innerHTML="<tr><th>Senha</th><th>Usada?</th></tr>";
  table.appendChild(thead);

  let tbody=document.createElement("tbody");
  passwords_pc3.forEach(p=>{
    let tr=document.createElement("tr");
    tr.innerHTML=`<td>${p}</td><td>${usedPasswords[p]?"Sim":"Não"}</td>`;
    tr.style.border="1px solid #ccc";
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  div.appendChild(table);
}

