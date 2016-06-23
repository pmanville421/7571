function calculations(){
            
            //Get the Input Values
                
            var profit = parseFloat(document.getElementById("profit").value);
            
            var avgNumShare = parseInt(document.getElementById("avgNumShare").value);
            
            var pricePerShare = parseFloat(document.getElementById("pricePerShare").value);
            
            var intangibleAssets = parseFloat(document.getElementById("intangibleAssets").value);
            
            var totalAssets = parseFloat(document.getElementById("totalAssets").value);
                
            var liabilities = parseFloat(document.getElementById("liabilities").value);    
            
            var egp = parseFloat(document.getElementById("egp").value);
                
                
                
                
            //Declare the Output Variables
                
            var eps; 
            var priceToBook;
            var peRatio;
            var pTeg;    
            
                
                
            //Our Formulas are Calculated 
                
            eps = profit/avgNumShare;
                
            priceToBook = pricePerShare/(totalAssets - (intangibleAssets + liabilities));
                
            peRatio = pricePerShare/eps;
                
            pTeg = peRatio/(egp);    
            
            
                
                
            //Output to Textbox 
            document.getElementById("eps").value = eps;
            
            document.getElementById("priceToBook").value = priceToBook;
                
            document.getElementById("peRatio").value = peRatio;
                
            document.getElementById("pTeg").value = pTeg;    
    
            
            }




function reset(){
    
    document.getElementById("calculatorForm").reset();
}
                