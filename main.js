function showMeSomething() {
  alert(links.instagram)
}

const LinksSocialMedia = {
  github: 'keissiano',
  youtube: 'channel/UCS0RYWmWllnVA8WF2KnIo2Q',
  facebook: 'keissiano.ronconi',
  instagram: 'keissiano',
  twitter: '/i/'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  //Template strings
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()

//i = i + 1
//i++

//ser humano 12345678910
//computador 0123456789

//ARROW FUNCTIONS
