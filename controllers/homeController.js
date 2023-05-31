const homeController = (req, res) => {
    res.render('home', { 'title': 'Home' });
    // res.send('Hello world!');
}


export  { homeController }