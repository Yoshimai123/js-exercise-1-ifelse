let userUrl = prompt("Type a URL");

if((userUrl.startsWith( "http://") || userUrl.startsWith("https://")) && userUrl.endsWith(".com")){
    console.log("This is a valid URL");
} else {
    console.log("This isn't a valid URL");
}