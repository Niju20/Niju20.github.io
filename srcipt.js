
function checkCookie() {
  let cookie = document.cookie;
  if (cookie == "") {
    alert("ようこそw");
  document.cookie = "we=ehe; path=/; secure"
  }
}
// 噗哈哈哈好w 因為 因為實在沒人用fb了苦無安利歌單途徑所以 嗯 這算 某種自介嗎hhhh
// 會跑去view page source的stalker君安安w

function checkCookie_() {
  let cookie_ = document.cookie_;
  if (cookie_ == "") {
    alert(""お帰り？w");
  // document.cookie_ = "we=ehe; path=/; secure"
  }
}

function doOnce() {
  if (
    !document.cookie
      .split("; ")
      .find((row) => row.startsWith("doSomethingOnlyOnce"))
  ) {
    // Note that we are setting `SameSite=None;` in this example because the example
    // needs to work cross-origin.
    // It is more common not to set the `SameSite` attribute, which results in the default,
    // and more secure, value of `SameSite=Lax;`
    document.cookie =
      "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";

    const output = document.getElementById("do-once");
alert("ようこそw");  
}

function clearOutputDoOnce() {
  const output = document.getElementById("do-once");
  output.textContent = "";
}
}













































//          &****//***/////////////////////////////////////////////////*/**////******///////(###%%&&&     &/*(##%&@@&@@@@@@@@@&&&@@@@@@@@@@@@@@@@@@&@@@@&@@@@@@@@&@@@@@@@@@@@@@@@&@@&&&&@@@@@@@@@&,        
//          &/****//////////////////////////////////////////////////////////////////////////////////@.    &//////////////////////////////////////////////////////////////////////////////////////&%        
//          &*/////***//////////////////////////////////////////////////////////////////////////////@.    &//////////////////////////////////////////////////////////////////////////////////////&/        
//          &//**//****/////////////////////////////////////////////////////////////////////////////@.   .&//////////////////////////////////////////////////////////////////////////////////////&,        
//          &/****/****/////////////////////////////////////////////////////////////////////////////@,   ,&//////////////////////////////////////////////////////////////////////////////////////&.        
//          &//**////*//////////////////////////////////////////////////////////////////////////////@,   *&//////////////////////////////////////////////////////////////////////////////////////&*        
//          &//***//////////////////////////////////////////////////////////////////////////////////@,   .&//////////////////////////////////////////////////////////////////////////////////////&(        
//          &*/*****//////////////////////////////////////////////////***/**********///////////////*@.   ,&//////////////////////////////////////////////////////////////////////////////////////@,        
//          &//******/////////////////////////////////////***********************************///////&.   *&//////////////////////////////////////////////////////////////////////////////////////&.        
//          &//********/////////////////////////***************************************************/&    /&//////////////////////////////////////////////////////////////////////////////////////@.        
//          &//********/****///***/*****//*********************************************************/&.   #&/**///////////////////////////////////////////////////////////////////////////////////&*        
//          &***************************************************************************************&    #&***********************///////////////////////////////////////////////////////////////&/        
//          &***************************************************************************************&.   #&*******************************///////////////////////////////////////////////////////@*        
//          &***************************************************************************************&.   (&************************************/****/////////////////////////////////////////////@(        
//          &********************************************/#&%%%#(***********************************&    (&***********************************************/**//*/////////////////////////////////@#        
//          &**************************************%%%***/#(((((((((****/%%&%#**********************&    (&***********************************************************///////////////////////////@%        
//          &**********************************%%#**(((((((((((((((((((((((((/**#%%#****************&    #&*******************************************************************/**////////////////&%        
//          &*******************************#%**(((((((((((((((((((((((((((((((((((**%%*************&.   %&*************************************************************************/////////////@#        
//          &****************************/&/*((((((((((((((((((((((((((((((((((((((((#*%&***********&.   %&***************************************************************************///////////@%        
//          &**************************&%*/(%#(((((((((((((((((((((((((((((((((((((((((((*%%********&,   #&*********************************************************************************/****@&        
//          &************************&#*#((((((((((%%((((((((((((((((((((((((((((((((((((((*&%******&*   #&*************************************************************************************/@&        
//          &**********************%%*#(##((#%((((#&(((((((((((((((((((((((((((((((((((((((((*%(****&#   #&*************************************************************************************/@&        
//          &********************(%*((##((((((((((((%(((((((((((((((((((((((((((((((((((#((%(#*%&***%&   %&*************************************************************************************/@&        
//          &*******************%(/((((#%((((%((((%((((((((((((((((((((((((((((((#&&(((((((((((//%**&&   %&***********************#&&%%%%%%%%#/*************************************************/@&        
//          &******************&*(((((##(((((((((#%%(((((((((((((((((((((((((((((#&%((((((((((((/(&*&&   %&****************%%&(**(((((((((((((/***%%%#*******************************************@&        
//          &/****************%*((((((((#%(((%((((#%(((((((((((((((((((((((((((((((((((((((((((((*%*&&   &&************%%/*/((((((((((((((((((((((((#**%%%***************************************&&        
//          &***************#%*#(((%((((((((((((((#((((((((((((((((((((((((((((((((((((((((((((%&%&*&&   &&********%%//((((#(((((((((((((((((((((((((((((**&&************************************@&        
//          &**************%#*((((((((#%(((##(%((((#(((((((((((((((((((((((((((((((((((((((((&&&&%&&&&   &&*****#%*#(((((((((((((((((((((((((((((((((((((((((/%**********************************&&        
//          &*************%#*(##((((((((((#((((((((%%((((((((((((((((((((((((((((((((((((((&%&&&%%&&&&   &%*****(((((((((((((((((((((((((((((((((((((((((((((((*&*******************************/&&        
//          &/***********%#*((#(((%(((%((((((#((%#((%&((((((((((((((((((((((###((%((((((((((#(&&&&&%&&   &#*%&%%%((((((((((((((&%#((((((((((((((((((((((((((((((*%(******************************&&        
//          &#**********%#*#((((#((((#((((((%#((#(((((((%#((((((((((((((((((((%((#(((((((((***&&%(**&&   &&&%%&&%%(((((((((((((#(((((((((((((((((((((((((((((((#(/(%*****************************&&        
//          &%*********&%/(((((#((((((((#%((((#(((((((((((&&%(((#((((((((((((((((((#(/%%%%&%********&&   &&&&&&%%%#(((((((((((((((((((((((((((((((((((((((((#%((((#*%****************************%&        
//          &@********#&*(((((#%((((((((((((((#((((#%(((%#((((((#&%&&&%%##((*/%%%%&%%(**************&&   &#%&%##%(((((((((((((((((((((((((((((((((((((((((##((((#(%(*%/**************************#&        
//          &@*******(%*(((#((%(((%((#(((((((((((((#((((%(((((#%((((((((((((*%**********************&&   &#**%*/(((((((((((((((((((((((((((((((((((((((((%(((((((((((/%%*************************(&        
//          &@******%%*((((((((((((((%((((#(((##(#(((((((((%(((##(((((((%(((*&**********************&&   &%****%%*#(((((((((((((((((((((((((((((((((((((#%(((((#((((%(((%************************#&        
//          &@*****%%*((((%(((((((((((((((((((((((((((((((((((((((#((##((##(*%,*****************....&%   &#..*****%/(#(((((((((#(((((((((((((((((((((((%#(((#(((#(#(#(((//***********************#&        
//          &@*****%*((#((((%#((%(((%(((((((((((((((((#(((%((#((((((((((((((*%****************......&#   &#....,****(&/*(((((#(((((((((((((((((((((((((((%#(((((#(((((((((#**********************#&        
//          &@****%*((#(((((((((#((((((%(((((%#(%((((((((#(((#(#%#(#((((%((//%**************........&(   &#......*******%&%**(((((((((((((((((((((%%#((((((((%(((((#%(((((#%*********************#&        
//          &@***&&((((##(((((((((((((#(((%(((((%(((#((((((((((((((((((((((/#&**************........&(   &#......************#%%%#((((((((((((#(###((((((#((((((%((#((((((/(&********************(&        
//          &&///%*((#%((((((%(#%(((((((((((((((((((((((((%(((#((((((%((((%*%%**************..%%#&//@(   &&%/....*************%*(((((((((((((((((((((((((((((#((#(#(((((#%(/#%///////////////////#&        
//          &@//%##((((((#(((((#((((%((((#((((((((#(((((((((#%(((&&#((((((((%%***(##(%#((**/*(%%%#%(@/   %@(*%&&//////////////%*((#(((%#((((#((%((#((%(((%(((%(((((#(#((#(((/%%//////////////////#&        
//          &@/(%*((((((((#(((((((((((((%((##((#(#%(((%((%((((((((((((#%&&%&&&%%&%%%%%%&%%***((((##(@/   (@#(##&*%&*//////////%*(((((#%#(#(%((#%((%((#(((#((((((%(#(((%(((#((*%%/////////////////#&        
//          &@/%(#(((%((((((((#((((((((((((((((((((((((((#(((%#((%%(%((((((((((((((((((((((#((((((((@/   /@((#(#**%&**(%&&#///%/((%(((((((((((((((%(((%(((((#(((#(#%(((((((%((*&#////////////////(&        
//          %@(%*((##%((((((((&(((%(((%(((#(##(((%(((%((#(((((((((((((((((((((%#(((##(((#(((%(((((((@(   ,@((((((#%(/*%%%%%#/(%(((((((((((#((#((#(((((((((((#(((#(((((((%((((((*%/////////////////@        
//          %&&*/(#(((#((##(((#(((#(((((((#(%((((((((((((#((##&(((((((((#%%(((((((#((((((((((#(((#*&@(   ,@((#(((((((((#(#/***/&%%%%(((((((((((#(((((#((%(((((((%(##(#(((((((##*%#////////////////@        
//          %@%*(((((%(##(#((#(((((((%(((((((((((%%((((((%#(((((((((((((((((((((#((((((((((#((#*%%(.&/   .@**((((#(#((%((((##(((((((((#(((((%%(((%((((#(((((((#(((((((((((%((((//%////////////////@        
//          %@*(((((((((((%((((((((((%((((#((((#(%(((((((((((%(#((((#((((((#(((((((((%#((((**%%/////@*   .&//%%(*((%(((%(((((((((((((((((((((%&&#(((%((##%((#((((((#(((%((((((((*%////////////////@        
//          %@*((%(((((((((((((((((((((((((((((((((((((&(((%((##(%((((((((&(((%((((#((/*#%%#///,....&*    %...//%%**##((((((((((((((%%#(((((((((((((((#((%(((((((((#((#(((#((#((/%////////////////@        
//          %@(((#(((((((((#(((((#%((((#((%((((((#%(((#((((((%(((((((%((((((((#(**/&%%%/////////////@*   .%////////%%**(##(((((#((((((((((%((((((##(((((#%((((#(#((##((((#(((##((*%///////////////@        
//          #@((((((((((((((((((((#(((%(((%((((((((%%%%%%((#%((#(((((((#(%&&%%%///////////////////..&*    %../////////%&**((((((((((((((&((((((((((##(((#((((((((((((((((#((((((%(/%//////////////@        
//          %@(((((((((((((((((((((((((((((((#(((((((((((#(&%(%#(##(((##((((*(%/////////////////////@*    %//////////////%%&*((%((%((((%((((((((((((((##((((((#(((#(%#((((((%((#((*%(/////////////@        
//          (@((((%(((#((((##((%(((((((((((((%((&(((%#(#(((%((((((#((%(((#((/(%/////////////////////&*    %//////////////////%%%((((((%(((#(%#(#((((((#%#((#((((((((((((((((((((((*/%/////////////@        
//          /@((((((((#((((&(((#(%((((%((%((#(((((((#(%#(((#(((#((#(((((((((*(%/////////////////////@,    %//////////////////%*((#%##((((((#((((((((((%(((((((((((((((#(%(#(((((((#*&#////////////@        
//          *&((((((((((#((((((((##((((((%((%(((((((((((((%(((#((((((#((((##*/&/////////////////////@.   .%/////////////////&(((((((((&%&%#(((((((((#((((((((%(%(%(((%(#(((((((((#(*#&////////////@        
//          #@((%((((((((((#((((((((((((((((((((((%((##(((#((((((#((#((%((%(*/%/////////////////////@.   ,%/////////////////%*(((((#((((((((%(((((((((%(#((((%(((((((((((((((%#%(%#(*%////////////@        
//          %@((#((##(((((##(%((((((((#((((((%((((#((%((((((((((((((((((((((*%&/////////////////////@    /%/////////////////%*(((((((#((((%((((((%(((((((((((((((((##%((((#(((((((((*%#///////////@        
//          #&(((((#((((#((((((((((((#(((((((#(((%(((((#((((#((#(((#((#(#(((*%%/////////////////////@.   /%////////////////%%/((((((((((((%((((((%(#(((((((%(((#(((((%((((((#((#(%(((%%///////////@        
//          /&((((((((((((%((((((((((((((%(((((((#((((#(((((%(#%(((#(#((((((*&%/////////////////////@    /&////////////////%*((((%((%((%(((((((((#((#(#((((#((###(((((((((%((((((((((*%///////////@        
//          *@((((((((((((#((((%((#((%#((((((((((((((((((((((((((((((((((##(*&%/////////////////////@    ,%////////////////%*((((((((((#(((((((#((((%(%(((((#((((((#%((%((%(((#(#(#(#*%#//////////@        
//          (@((((%(((((((((((((((((((((##(((((%(#((((#(((%((%((((%(#((%(#((*#&/////////////////////@    ,%////////////////%*((####((((((((#((%(#((((((((((((((%(#((%((%((((((#((((##*%&//////////@        
//          &&((#((#((((((#(((((#(((%((((((((((((%((((%(((((((((((((((((((((/*%/////////////////////&    ,&////////////////%*(((((#(#((((%(#(((((((((#((%(((%((%((((((((((((#((((%(#(*#%//////////@        
//          *%@&&%%%%%%%&&@@@@@&@@&&&&@@&&&&&&@@@@@@@@@&&&&@@@@@@@@@@@@@@@@@@@@@@&@&&&&&@@@@@@&%&#//@    ,&&@@@%%%##(//****#*/((####(((((((((#((((##((((((((((((((##(#####((#(((#(((#*/%////////*,& 

//          source: https://twitter.com/abetamio/status/1483782183630544896?s=20&t=PcljTpe6cjwjv61URXm9aw
