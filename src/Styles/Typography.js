const LIGHT = 300;
const REGULAR = 400;
const SEMI_BOLD = 500;
const BOLD = 700;

const caption = {
  fontSize: 12,
  fontWeight: REGULAR,
  lineHeight: '20px',
  letterSpacing: '0.2px'
};
const body1 = {
  fontSize: 14,
  fontWeight: LIGHT,
  lineHeight: '24pxpx',
  letterSpacing: '0.1px'
};
const body2 = {
  fontSize: 14,
  fontWeight: REGULAR,
  lineHeight: '24px',
  letterSpacing: '0.1px'
};
const headline = {
  fontSize: 24,
  fontWeight: LIGHT,
  lineHeight: '32px',
  letterSpacing: '0px',
};
const subheading = {
  fontSize: 16,
  fontWeight: REGULAR,
  lineHeight: '24px',
  letterSpacing: '0.1px',
};
const title = {
  fontSize: 20,
  fontWeight: LIGHT,
  lineHeight: '28px',
  letterSpacing: '0.05px',
};
const display1 = {
  fontSize: 34,
  fontWeight: REGULAR,
  lineHeight: '40px',
  letterSpacing: '0px',
};
const display2 = {
  fontSize: 45,
  fontWeight: REGULAR,
  lineHeight: '48px',
  letterSpacing: '0px',
};
const display3 = {
  fontSize: 56,
  fontWeight: REGULAR,
  lineHeight: '84px',
  letterSpacing: '0.05px',
};
const display4 = {
  fontSize: 112,
  fontWeight: LIGHT,
  lineHeight: '128px',
  letterSpacing: '0.1px',
};

const base = {
  fontSize: 14,
  fontFamily: 'Arial',
};

const button = {
  fontSize: 14,
  lineHeight: '20px',
  letterSpacing: '0.1px',
  fontWeight: SEMI_BOLD,
};


const phone = {
  button,
  base,
  caption,
  body1,
  body2,
  headline,
  subheading,
  title,
  display1,
  display2,
  display3,
  display4
};

const tablet = {
  button,
  base,
  caption,
  body1,
  body2,
  headline,
  subheading,
  title,
  display1,
  display2,
  display3,
  display4
};

const desktop = {
  button,
  base,
  caption,
  body1: {
    ...body1,
    fontSize: 13
  },
  body2: {
    ...body2,
    fontSize: 13
  },
  subheading: {
    ...subheading,
    fontSize: 15
  },
  headline,
  title,
  display1,
  display2,
  display3,
  display4
};

export default {
  phone,
  tablet,
  desktop,
};
