const sifre="1234";
const accounts = [
    {
        iban: 'trxx yyyy xxxx yyyy',
        balance: 100,
    },
    {
        iban: 'trxx yyyy xxxx yyyx',
        balance: 5040,
    },
    {
        iban: 'trxx yyyy xxxx xyyx',
        balance: 10594,
    }
];

const btn=document.querySelector("#btn");
const gh=document.querySelector("#gonderilenHesap");
const money=document.querySelector("#para");
const moneyValue=Number(money.value);
const iban1=document.querySelector("#iban1").value;
const iban2=document.querySelector("#iban2").value;
const iban3=document.querySelector("#iban3").value;


money.addEventListener("blur",()=> {
    
    const selectedIban=document.querySelector("#ibans");
    
    const selectedAccount= accounts.find(account=>account.iban==selectedIban.value)
    console.log(selectedAccount.balance);

    if(money.value <= selectedAccount.balance ){
        btn.disabled=false;
    }
    else{
        alert("yüksek rakam girdiniz");
            
    }
    
 })




 
function display(){
    
    if(gh.value!=""){
     money.disabled=false;
     
    }
    

}


function izin1(){
    if(iban1<money.value){
        btn.disabled=true;
    }
}

function parasal(){
   
    if (money.value > 400){
        btn.disabled=false;
    }
}

function mesaj(){

}

function x(){

    
    var count=3;


    if( money.value < 500){
        alert("başarılı");
    }
    else{
        btn.disabled=false;
        while (count>0){
            var gelen= prompt("telefonunuza geen 4 haneli şifreyi giriniz");
            if(sifre==gelen){
                alert("başarılı");
            }
            else{
                alert("şifre yanlış");
                count--;
                
            }
        }
        alert("hesap bloke oldu");
      
    }
}