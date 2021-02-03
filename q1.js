var num=['1','3','4','6','8','9']
        document.write(num + "<br><br>");
        var b=num.filter(even);
        
        function even(num){
            if(num%2==0){
                document.write( num+"even number")
            }
        }