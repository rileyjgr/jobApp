const Job = require("../models/Job");

module.exports = {
    addNewJob: async(req, res, next) => {
        console.log(req);

        const {comapny, title, salary, location} = req.body;

        const newJob = new Job({company, title, salary, location});

        await newJob.save();

        res.json({job: 'saved'});
        next();
    },

    getJobData: async(req, res, next)=>{
        await Job.find({}, (err, jobs)=>{
            console.log(jobs);
            let api = {};

            jobs.forEach((job)=>{
                api[job.name] = job;
            });
           res.json(api);
        })

    },
    updateJobData: async(req, res, next)=>{
        const {company, responded, interview, accepted, offer} = req.body;
        const newData = {
            responded: responded,
            interview: interview,
            accepted: accepted,
            offer: offer
        }
        await Jobs.findOneAndUpdate(company, newData, {upsert:true}, (err, doc)=>{
            if (err) return res.send(500, { error: err });
            return res.send("succesfully saved");
        });

    }

}