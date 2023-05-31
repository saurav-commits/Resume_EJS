const serviceController = (req, res) => {
    res.render('services', { 'title': 'Services' });
    // res.send('Hello world!');
}


export  { serviceController }