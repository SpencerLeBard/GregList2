import { ProxyState } from "../AppState.js";
import Jobs from "../Models/Jobs.js";
import { api } from "./AxiosService.js";

//Public
class JobsService {

  async getJobs() {
    let res = await api.get('jobs')
    ProxyState.jobs = res.data.data.map(c => new Jobs(c))
  }

  async removeJob(id) {
    await api.delete(`jobs/${id}`)
    ProxyState.jobs = ProxyState.jobs.filter(c => c.id !== id)
  }

  async bid(id) {
    let jobs = ProxyState.jobs.find(c => c.id === id)
    if (!jobs) {
      throw new Error("Job Not found")
    }
    jobs.rate -= 100
    let res = await api.put(`jobs/${id}`, { price: jobs.rate })
    ProxyState.jobs = ProxyState.jobs
  }

  async createJob(rawJob) {
    let res = await api.post('jobs', rawJob)
    let job = new Jobs(res.data.data)
    ProxyState.jobs = [...ProxyState.jobs, job]
  }
}

const SERVICE = new JobsService();
export default SERVICE;
