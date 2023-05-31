const skillController = (req, res) => {
    res.render('skill', { 'title': 'Skills' });
    // res.send('Hello world!');
}


export  { skillController }