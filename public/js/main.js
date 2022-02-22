const testAccessibility = async (e) => {
    e.preventDefault()
    const url = document.querySelector('#url').value
    if (url === '') {
      issuesOutput.innerHTML = emptyUrl
    } else {
      setLoading()
  
      const response = await fetch(`/api/test?url=${url}`)
  
      if (response.status !== 200) {
        setLoading(false)
        issuesOutput.innerHTML = alertMessage
      } else {
        const { issues } = await response.json()
        addIssueToDOM(issues)
        setLoading(false)
        document.getElementById("clearResults").classList.remove("hideButton")
        document.getElementById("csvBtn").classList.remove("hideButton")
      }
    }
  }
  

const addIssueToDOM = (issues) => {
    const issuesOutput = document.querySelector('#issues')

    issuesOutput.innerHTML = ''

    if(issues.length === 0){
        issuesOutput.innerHTML = '<h4> No Issues Found </h4>'
    }else {
        issues.forEach((issue) => {
            const output = `
              <div class="card mb-5">
                <div class="card-body">
                  <h4>${issue.message}</h4>
      
                  <p class="bg-light p-3 my-3">
                    ${escapeHTML(issue.context)}
                  </p>
      
                  <p class="bg-secondary text-light p-2">
                    CODE: ${issue.code}
                  </p>
                </div>
              </div>
            `
            issuesOutput.innerHTML += output
        });
    }
}

const setLoading = (isLoading = true) => {
    const loader = document.querySelector('.loader')
    if(isLoading){
        loader.style.display ='block'
    }else {
        loader.style.display = 'none'
    }
}

function escapeHTML(html) {
    return html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }
document.querySelector('#form').addEventListener('submit', testAccessibility)