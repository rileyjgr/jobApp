const Job = require("../models/Job");

module.exports = {
    addNewJob: async(req, res) => {
        console.log(req);
        
        const {company, title, salary, location} = req.body;
        const newJob = new Job({company, title, salary, location});

        await newJob.save();
        return res.json({job: 'saved'});
    },
    getJobData: async(req, res)=>{
        await Job.find({}, (err, jobs)=>{
            console.log(jobs);
            let api = {};
            jobs.forEach((job)=>{
                api[job.title] = job;
            });
           res.json(api);
        })
    },
    updateJobData: async(req, res)=>{
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