import Layout from 'components/Layout'

const ResourceCreate = () => {
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add New Respurce</h1>
              <form action="">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Learn Next JS and Sanity IO"
                    />
                  </div>
                </div>
                <div class="field">
                  <label className="label">Description</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Textarea"
                      placeholder="Learn these technologies because they are very popular and enable better SEO"
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="https://academy.eincode.com"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">TimeToFinish</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="60 (Time is in minutes)"
                    />
                  </div>
                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                      <button className="button is-link is-light">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResourceCreate
