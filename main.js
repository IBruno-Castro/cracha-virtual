const links = {
    github: "IBruno-Castro",
    youtube: "maykbrito",
    facebook: "maykbrito",
    instagram: "lbrunocastro",
    twitter: "lbrunocastro",
    //objeto com váriaveis de dados de cada rede social
  }

  function changeSocialMedia() {
    for(let li of SocialMedia.children) {
      //pra cada filho do ul de class Social media...

      const social = li.getAttribute('class')
      
      li.children[0].href = `https://${social}.com/${links[social]}`
      //a função pega o href do a de cada li, o a estando na posição 0 e redefine, utilizando da const social que copia a class para ela mesma, para o site e o usuário pra cada um dos a
      //social armazena a class de cada li por rodada e se usa para procurar dentro do objeto links o usuário

    }
  }

changeSocialMedia();

function getGitHubInfo (){
    const url = `https://api.github.com/users/${links.github}`

    fetch(url).then(responde => responde.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        GitHubLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubInfo()