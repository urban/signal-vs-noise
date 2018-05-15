export const mediaSizes = {
  desktop: 1440,
  mobile: 690,
  tablet: 995,
}

export default {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  xSmall: '(min-width:320px)',
  /* smartphones, Android phones, landscape iPhone */
  small: '(min-width:480px)',
  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  medium: '(min-width:600px)',
  /* tablet, landscape iPad, lo-res laptops ands desktops */
  large: '(min-width:801px)',
  /* big landscape tablets, laptops, and desktops */
  xLarge: '(min-width:1025px)',
  /* hi-res laptops and desktops */
  xxLarge: '(min-width:1281px)',
}

export const screen = 'only screen'
export const mobile = `only screen and (max-width:${mediaSizes.mobile}px)`
export const tablet = `only screen and (min-width:${
  mediaSizes.mobile
}px) and (max-width: ${mediaSizes.tablet}px)`
export const desktop = `only screen and (min-width:${mediaSizes.tablet}px)`
export const landscape = 'only screen and (orientation: landscape)'
export const portrait = 'only screen and (orientation: portrait)'
