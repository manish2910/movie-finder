const size = {
    mobileS: '320px',
    mobileL: '480px',
    tabletS: '675px',
    tablet: '768px',
    laptop: '1024px'
}

export const deviceLessThan = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`
};

export const deviceGreaterThan = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tabletS: `(min-width: ${size.tabletS})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`
};
