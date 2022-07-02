import js_sha3 from 'js-sha3'
import seedrandom from 'seedrandom'

import siteData from './data/sites.json' assert {type: 'json'}
export { siteData }

export const defaultMinLength = 4
export const defaultMaxLength = 512
export const defaultLength = 16

export const possibleRequirements = {
  cap: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  low: 'abcdefghijklmnopqrstuvwxyz',
  num: '0123456789',
  special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}

/**
 *
 * @param {string} appName Name of the app to generate a password for
 * @param {string} masterPass
 * @param {boolean} presetToggle True if we want to use a preset
 * @param {number} length int - Desired length of the password
 * @returns {string} Output password
 */
export function generate (appName, masterPass, presetToggle = false, length = defaultLength) {
  // Ensure types
  if (typeof appName !== 'string') throw new Error('App name must be a string')
  if (appName.length < 1) throw new Error('App name must be more than 0 characters')
  if (typeof masterPass !== 'string') throw new Error('Master password must be a string')
  if (masterPass.length < 1) throw new Error('Master password must be more than 0 characters')
  if (typeof presetToggle !== 'boolean') throw new Error('presetToggle must be a boolean')
  if (typeof length !== 'number') throw new Error('length must be a number')

  let minLength = defaultMinLength
  let maxLength = defaultMaxLength
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" // Defualt character set (Set here but overwritten if there's a custom one.)
  const requirements = [] // By default we have no requirements but reset it so we don't carry them over
  let regex // Blank for the same reason
  appName = appName.trim()
  length = Math.trunc(length) // Get the desired length of a password and make sure it's an integer
  let result = '' // Has to be here, not in the loop for scope purposes

  // If there's a preset in use
  if (presetToggle) {

    // If it's a site with a preset

    try {
      // If it's an alias for another app
      if (siteData[appName].alias) {
        // Change the name of the app we're using to its alias
        appName = siteData[appName].alias
      }
    } catch (TypeError) {
      throw new Error('Invalid preset')
    }

    // If it has a custom minLength
    if ('minLength' in siteData[appName]) {
      // Replace the default minLength with the supplied one.
      minLength = siteData[appName].minLength
    }

    // If it has a custom maxLength
    if ('maxLength' in siteData[appName]) {
      // Replace the default maxLength with the supplied one.
      maxLength = siteData[appName].maxLength
    }

    // If it has a custom character set
    if ('chars' in siteData[appName]) {
      // Replace the default character set with the supplied one.
      chars = siteData[appName].chars
    }

    // If it has a regex
    if ('regex' in siteData[appName]) {
      // Set the regex to match
      try {
        regex = new RegExp(siteData[appName].regex)
      } catch (SyntaxError) {
        throw new Error(`Invalid regex from ${appName} "${siteData[appName].regex}"`)
      }
    }

    if ('requirements' in siteData[appName]) {
      // TODO This could be a map
      for (let i = 0; i < siteData[appName].requirements.length; i++) {
        requirements.push(
          possibleRequirements[siteData[appName].requirements[i]]
        )
      }
    }

  }

  if (!(minLength <= length && length <= maxLength)) {
    // if the length is invalid
    if (length > maxLength) {
      // Too long
      length = maxLength
    } else if (length < minLength) {
      // Too short
      length = minLength
    }

    // Now we have a sensible value, continue
  }

  // If the appname or password or length are empty
  if (appName === '' || masterPass === '' || length === '') {
    // Empty the output field
    // Stop function from generating new password
    return null
  }

  // Make app name lowercase to make sure
  appName = appName.toLowerCase()

  // Set the generation seed
  let prng = new seedrandom(js_sha3.keccak_512(appName + masterPass))

  // password generation cycle
  let go = true
  while (go) {
    result = ''
    while (result.length < length) {
      // Add one seeded random character at a time
      result += chars[Math.floor(prng() * chars.length)]
    }

    // If there's requirements to forfill
    if (requirements.length !== 0 || regex) {
      let failedTests = false
      for (let j = 0; j < requirements.length; j++) {
        // For each requirement
        for (let c = 0; c < requirements[j].length; c++) {
          // For each character in the requirement group

          // Check all characters
          if (result.indexOf(requirements[j][c]) !== -1) {
            // If that character is in the password
            break
          }

          // If we're on the last character
          if (
            requirements[j].indexOf(requirements[j][c]) === requirements[j].length - 1
          ) {
            failedTests = true
            break
          }
        }

        // If it's already failed a requirement
        if (failedTests) {
          // Don't bother checking the rest
          break
        }
      }

      // If there's a regex and we've not already failed
      if (regex && !failedTests) {
        // See if the generated password fails the regex
        if (!regex.test(result)) {
          failedTests = true
        }
      }

      if (!failedTests) {
        // If all tests passed
        go = false
        // Stop trying new passwords
      }
    } else {
      // No requirements, including regexes
      go = false
      // Stop trying new passwords
    }
  }

  // The password has been generated
  return result
}
