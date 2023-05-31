const contactController = (req, res) => {
    res.render('contact', { 'title': 'Contact' });
    // res.send('Hello world!');
}


export  { contactController }
