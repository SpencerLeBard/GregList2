import { ProxyState } from "../AppState.js";
import JobsService from "../Services/JobsService.js";

function _drawJobs() {
  let jobs = ProxyState.jobs
  let templates = ''
  // @ts-ignore
  jobs.forEach(c => templates += c.JobsTemplate)
  document.getElementById('draw-jobs').innerHTML = templates
}

export default class JobsController {
  constructor() {
    ProxyState.on('jobs', _drawJobs)
    this.getJobs();
  }

  getJobs() {
    try {
      JobsService.getJobs();
    } catch (error) {
      console.log(error);
    }
  }

  createJob() {
    event.preventDefault();
    let form = event.target
    let rawJob = {
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      jobTitle: form.jobTitle.value,
      // @ts-ignore
      hours: form.hours.value,
      // @ts-ignore
      rate: form.rate.value,
    }
    try {
      JobsService.createJob(rawJob)
    } catch (error) {
      console.error(error)
    }
  }

  removeJob(id) {
    try {
      JobsService.removeJob(id)
    } catch (error) {
      console.error(error)
    }
  }
  bid(id) {
    try {
      JobsService.bid(id)
    } catch (error) {
      console.error(error)
    }
  }

}


