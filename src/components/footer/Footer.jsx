import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div >
      <footer>
        <div className='main-div-footer'>
          <a className='my-auto' href={'https://github.com/lucaslera91'}><i className="fa-brands fa-github"></i></a>
          <a className='my-auto' href={'https://www.google.com/search?q=Lucas+Lera+Ingeniero&rlz=1C5CHFA_enAR990AR990&sxsrf=APq-WBsuoUZwbdr4yk9N7V2_HRhSACBTSA%3A1647358566753&ei=ZrIwYtbILcjL1sQPhq680AY&ved=0ahUKEwjWk8HxuMj2AhXIpZUCHQYXD2oQ4dUDCA4&uact=5&oq=Lucas+Lera+Ingeniero&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgATIECCEQFToHCCMQsAMQJzoHCAAQsAMQHjoJCAAQsAMQChAeOgkIABCwAxAFEB46CQgAELADEAgQHjoGCAAQFhAeOgcIIRAKEKABSgQIQRgBSgQIRhgAUPkBWIAOYMoRaAFwAHgAgAGTAogBsQuSAQUwLjkuMZgBAKABAcgBBsABAQ&sclient=gws-wiz'}><i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
          <a className='my-auto' href={'https://www.linkedin.com/in/lucas-lera-lls5/'}><i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3"></i></a>
          
        </div>
      </footer>
    </div>
  )
}

export default Footer