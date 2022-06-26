const retrieveUser = () => {
    try {
      return JSON.parse(localStorage.getItem('User'))
    } catch (e) {
      return null
    }
  }
  
  export default retrieveUser