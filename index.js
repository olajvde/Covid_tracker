var express = require('express');


const track = require('novelcovid');
//const track = new NovelCovid()
track.settings({
    baseUrl: 'https://disease.sh'
})

var app = express();




var handlebars = require('express3-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);


app.use(express.static(__dirname + '/public'));




app.get('/', (req, res)=>{
   
    track.countries({country:['Nigeria','Ghana','Togo','Cameroon']}).then((response)=>{
        res.render('home', {info:response});
    });
    
    


});

app.get('/about', (req ,res)=>{
    res.render('about');
})
app.listen(app.get('port'), function(){
    console.log('now listening on port '+app.get('port') );
});