
const FIRST_NAME = "DAVID";
const LAST_NAME = "ANDREEA";
const GRUPA = "1077";

/**
 * Make the implementation here
 */
function initCaching() {
  
   var a={};
   a['about']=0;
   a['home']=0;
   a['contact']=0;
   a.pageAccessCounter=function(z){
	   if(z===undefined)
	   {a['home']++;}
   if(z==='about' || z==='ABOUT')
   {a['about']++;}
if(z==='contact')
{a['contact']++;}   
   }
   a.getCache=function()
   {return a;}
  return a;
}

module.exports = {
    FIRST_NAME,
    LAST_NAME,
    GRUPA,
    initCaching
}

