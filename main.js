x = 0;
y = 0;
drawCircle = "";
drawRect = "";

var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechReecognition();

function start()
{
    document.getElementById("status").innerHTML = "O sitema está ouvindo. Por favor, fale.";
    recognition.start();
}

recognition.onresult = function(event) {
    
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida como: " + content;
    if(content =="círculo")
    {
        x = math.floor(math.random() * 900);
        y = math.floor(math.random() * 600);
        document.getElementById("status").innerHTML = "Desenhando um círculo.";
        drawCircle = "set";       
    }
    if(content =="retãngulo")
    {
        x = math.floor(math.random() * 900);
        y = math.floor(math.random() * 600);
        document.getElementById("status").innerHTML = "Desenhado um retãngulo.";
        drawRect = "set";
    }
}

function setup() {
    canvas = createCanvas(900, 600)
}

function draw() {
    if(drawCircle == "set")
    {
        radius = Math.floor(Math.random() + 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Círculo desenhado. ";
        drawCircle = "";
    }

    if(drawRect == "set")
    {
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Retângulo desenhado.";
        drawRect = "";
    }
}