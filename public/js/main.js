const testAccessibility= async (e) => {
    e.preventDefault()

    const url = document.querySelector('#url').value

    if(url === ''){
        alert('Please add a url');
    }else {
        setLoading()

        const response = await fetch(`/api/test?url=${url}`)

        if(response.status !== 200 ){
            setLoading(false)
            alert('Something went wrong')
        }else {
            const {issue} = await response.json()
            addIssueToDOM(issues)
            setLoading(false)
        }
    }
}

const addIssueToDOM = (issues) => {
    console.log(issues)
}

const setLoading = (isLoading = true) => {
    const loader = document.querySelector('.loader')
    if(isLoading){
        loader.style.display ='block'
    }else {
        loader.style.display = 'none'
    }
}
document.querySelector('#form').addEventListener('submit', testAccessibility)