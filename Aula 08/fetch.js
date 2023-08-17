async function obterDadosApi() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    //console.log(response);
    if(!response.ok) {
      throw new Error("Erro na requisição")
    }
    const data = await response.json(); 
    console.log(data.userId);
    console.log(data);
  } catch(err) {
    console.log(err)
    console.error(err.message)
  }
}

obterDadosApi()