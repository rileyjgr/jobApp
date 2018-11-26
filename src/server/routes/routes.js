const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controllers = require('../controllers/controllers')
module.exports ={
    html: async(app)=>{
        app.use(express.static(`${__dirname}/../../dist`));
        app.use(express.static(`${__dirname}/../../dist/js/contact.js`));
        app.get('*', (req, res) => {
            res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
        });
    },
    job: async(app)=>{

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        app.get('/api/jobs', controllers.getJobData);
        app.post('/api/jobs', controllers.addNewJob);
        app.get('/api/updateJobs');
        app.post('/api/updateJobs', controllers.updateJobData);
    }
};
