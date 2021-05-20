var BetterPage = {
    includeHtml: function() {
        var z, i, elmnt, file, xhttp;
        prefix = "BetterPage > ";
        
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            
            file = elmnt.getAttribute("include-html");
            if (file) {
                
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                        if (this.status == 404) {elmnt.innerHTML = prefix + "Page not found";}
                    
                        elmnt.removeAttribute("include-html");
                        BetterPage.includeHtml();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                
                return;
            }
        }
    }
}
