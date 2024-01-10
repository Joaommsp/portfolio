  const states = {
    elements : {
      body: document.querySelector('body'),
      themeSwitcher: document.querySelector('.themeSwitcher'),
      dropDownControls : {
        container : document.querySelector('.dropDownControl'),
        arrow: document.querySelector('.arrow'),
        dropDown: document.querySelector('.dropDown .points'),
        pointsPt: document.querySelector('.pointsLangPt'),
        pointsEn: document.querySelector('.pointsLangEn')
      },
      profilePic: document.querySelector('.myPfp'),
      title: document.querySelector('h1'),
      h2: document.querySelectorAll('h2'),
      infosIcons: document.querySelectorAll('.information img'),
      infosLinks: document.querySelectorAll('.information a'),
      points : {
        span: document.querySelector('.dropDownControl span')
      },
      githubProfile: document.querySelector('.githubData .profile'),
      githubSkills: document.querySelector('.githubData .gitHubSkills'),
      githubTittle: document.querySelector('.githubData h2'),
      githubAcessLink: document.querySelector('#acessGitHub'),
      skillName: document.querySelectorAll('.gitHubSkill'),
      dioTitle: document.getElementById('dioTitle')
    }
  }
  
  states.elements.themeSwitcher.addEventListener('click', switchTheme)

  function switchTheme() {
    states.elements.body.classList.toggle('bg-dark-color')
    states.elements.body.classList.toggle('bg-light-color')

    if(states.elements.body.classList.contains('bg-dark-color')) {
      states.elements.profilePic.src = 'img/profile-pic.png'

      states.elements.infosIcons[0].src =  'img/svg/map.svg'
      states.elements.infosIcons[1].src =  'img/svg/linkedin.svg'
      states.elements.infosIcons[2].src =  'img/svg/github.svg'

      states.elements.infosLinks.forEach((link) => {
        link.style.color = 'var(--text-ultra-light-color)'
       })

       states.elements.githubAcessLink.src = 'img/svg/acessLink.svg'

       states.elements.githubSkills.style.color = "var(--text-ultra-light-color)"

       states.elements.dioTitle.style.color = "var(--text-ultra-light-color)"
    }
    else {
      states.elements.profilePic.src = 'img/profile-pic-light.png'

      states.elements.infosIcons[0].src =  'img/svg/mapDark.svg'
      states.elements.infosIcons[1].src =  'img/svg/linkedinDark.svg'
      states.elements.infosIcons[2].src =  'img/svg/githubDark.svg'

      states.elements.infosLinks.forEach((link) => {
        link.style.color = 'var(--text-dark)'
       })

       states.elements.githubAcessLink.src = 'img/svg/acessLinkDark.svg'

       states.elements.githubSkills.style.color = "var(--text-dark)"

       states.elements.dioTitle.style.color = "var(--text-dark)"
    }

    states.elements.title.classList.toggle('text-white')

    states.elements.h2.forEach((h2) => {
      h2.classList.toggle('text-light')
    })

   states.elements.points.span.classList.toggle('text-light')
  
   let  githubName = document.querySelector('.userGitHubName')
   githubName.classList.toggle('text-light')

  }

  function typeText(element, texto, delay) {
    let index = 0;
    let interval = setInterval(function() {
      if(index < texto.length) {
        document.querySelector(element).textContent += texto.charAt(index) 
        index++
      }
      else {
        clearInterval(interval)
      }
    }, delay);
  }

  typeText('.myName', 'João Marcos', 100);

  let writeFunction = setInterval(()=> {
    typeText('.function', 'Desenvolvedor Front-End', 100);
    clearInterval(writeFunction)
  },1000)

  function arrowUp() {
    states.elements.dropDownControls.arrow.classList.toggle('arrowUp')
    states.elements.dropDownControls.pointsPt.classList.toggle('closed')
    states.elements.dropDownControls.pointsEn.classList.toggle('closed')

    if(states.elements.dropDownControls.arrow.classList.contains('arrowUp')) {
      states.elements.dropDownControls.dropDown.style.height = '184px'
    }
    else {
      states.elements.dropDownControls.dropDown.style.height = '0px'
    }


  }

  states.elements.dropDownControls.arrow.addEventListener('click', arrowUp)
    
   async function generateGitHubPofile() {
    const profileData = await fetchProfile()

    const userImg = document.querySelector('.userGitHubImg')

    userImg.src = profileData.photo

    states.elements.githubProfile.innerHTML = `
      <p class="userGitHubName text-light">${profileData.name}</p>
      <p class="userGitHubJob">${profileData.job}</p>
      <p class="userGitHubLocal">${profileData.location}</p>
      <p class="userGitHubTel">${profileData.phone}</p>
      <p class="userGitHubEmail">${profileData.email}</p>
    `

    states.elements.githubSkills.innerHTML = `
      <p class="gitHubSkill"> <img src = "img/svg/skills-icons/html-icon.svg" >${profileData.skills.hardSkills[0].name}</p>
      <p class="gitHubSkill"> <img src = "img/svg/skills-icons/css-icon.svg" >${profileData.skills.hardSkills[1].name}</p>
      <p class="gitHubSkill"> <img src = "img/svg/skills-icons/js-icon.svg" >${profileData.skills.hardSkills[2].name}</p>
      <p class="gitHubSkill"> <img src = "img/svg/skills-icons/git-icon.svg" >${profileData.skills.hardSkills[3].name}</p>
      <p class="gitHubSkill"> <img src = "img/svg/skills-icons/mySql-icon.svg" >${profileData.skills.hardSkills[4].name}</p>
    `
  }

  generateGitHubPofile()

  // aviso para ver os videos
  let nextSlideBtn = document.querySelector('.carousel-control-next')
  let alert = document.querySelector('.alertVideos')
  nextSlideBtn.addEventListener('click', () => {
   let timeToAppear = setInterval(() => {
      alert.style.height = "100px"
      clearInterval(timeToAppear)
    }, 2000)
    let timeToDisappear = setInterval(() => {
      alert.style.height = "0"
      clearInterval(timeToDisappear)
    }, 6000)
    let timeToDisplayNone = setInterval(() => {
      alert.classList.add('displayNone')
      clearInterval(timeToDisplayNone)
    }, 6500)
  })