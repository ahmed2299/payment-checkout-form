function myTest() {
    if (document.getElementById('pin').value.length!=16){
        if(document.getElementById('pin-valid').innerHTML!='')document.getElementById('pin-valid').innerHTML=''
        document.getElementById('pin-error').innerHTML='Please enter a valid CC number (16 digits)'
    }
    else{
        if(document.getElementById('pin-error').innerHTML!='')document.getElementById('pin-error').innerHTML=''
        document.getElementById('pin-valid').innerHTML='Valid pin'
    }
    let date=document.getElementById('expiry-date').value.split('-')
    if(date[0]=='' ||date[1]==''||date[2]=='') document.getElementById('date-error').innerHTML='Enter a valid date'
    else{
        
        if(date[0]>2030){
            document.getElementById('date-valid').innerHTML=''
            document.getElementById('date-error').innerHTML='Enter a valid year (less than or equal 2030)'
        }
        else if(date[0]<2023){
            document.getElementById('date-valid').innerHTML=''
            document.getElementById('date-error').innerHTML='Enter a valid year (greater than 2022)'
        }
        else{
            document.getElementById('date-error').innerHTML=''
            document.getElementById('date-valid').innerHTML=''
            if(date[0]==2023){
                if(date[1]==1&&date[2]<15){
                    document.getElementById('date-error').innerHTML='Enter a valid day (not less than today)';
                }
                else {
                    document.getElementById('date-valid').innerHTML='Valid date';
                }
            }
            else {
                document.getElementById('date-valid').innerHTML='Valid date';
            }
        }
    }
}
