import requestParameters from './requestParameters'

export default (document) => {
  const { language, landingPage } = requestParameters(document)
  const mc = document.location.href.match(/mc=(.*)/)
  const attributes = [
    `mc=${mc ? mc[1] : ''}`,
    `referer=${document.referrer}`,
    `language=${language}`,
    `landing_page=${landingPage}`
  ].join('&')

  const appDomain = document.location.origin.replace(/(.*factorialhr\.)(.*)$/, '$1com') // We need to set the cookie to the app domain, so we see it everywhere.
  return `${appDomain}/internal/pixel?${attributes}`
}
