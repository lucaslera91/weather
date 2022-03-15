import React from 'react'

function AuthError({user, noAuth}) {
  return (
    <div>
        <div className='text-light p-3'>
            <h2 className='auth'>{user} {noAuth}</h2>
            <h5>En caso de Iphone - Instrucciones:</h5>
            <p>{'1- Ve a Ajustes > Privacidad > Localización.'}</p>

            <p>2- Asegúrate de que esté habilitada la Localización.</p>
            <p>3- Desplázate hacia abajo hasta encontrar la app.</p>
            <p>4- Púlsala y selecciona una opción:</p>
            <p>- Nunca: evita que pueda acceder a la información de Localización.</p>
            <p>- Preguntar la próxima vez: permite elegir Siempre, Cuando se use la app, Permitir una vez o No permitir.</p>
            <p>- Siempre: permite acceso a tu ubicación incluso mientras la app está en segundo plano.</p>
            <p>Ayuda adicional: <a href='https://support.apple.com/es-es/HT207092'>https://support.apple.com/es-es/HT207092</a></p>
            <p>Otros posibilidades:</p>
            <p><a href={'https://support.google.com/nexus/answer/3467281?hl=es'}>Adnroid</a></p>
            <p><a href={'https://help.headspace.com/hc/es-419/articles/360046918374-Habilitar-la-configuraci%C3%B3n-de-ubicaci%C3%B3n-en-navegadores-de-dispositivos-m%C3%B3viles'}>Chrome</a></p>
            <p><a href={'FireFox:https://support.mozilla.org/en-US/kb/does-firefox-share-my-location-websites'}>FireFox</a></p>
            <p><a href={'https://support.apple.com/es-lamr/guide/mac-help/mh35873/mac'}>Safari</a></p>
        </div>
    </div>
  )
}

export default AuthError