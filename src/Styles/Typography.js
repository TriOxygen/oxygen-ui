const LIGHT = 300;
const REGULAR = 400;
const SEMI_BOLD = 500;
const BOLD = 700;

const caption = {
  fontSize: 12,
  fontWeight: REGULAR,
};

const body1 = {
  fontSize: 14,
  fontWeight: LIGHT
};

const body2 = {
  fontSize: 14,
  fontWeight: LIGHT
};

const subheading = {
  fontSize: 16,
  fontWeight: REGULAR
};

const title = {
  fontSize: 20,
  fontWeight: BOLD
};
const display1 = {
  fontSize: 34,
  fontWeight: REGULAR
};
const display2 = {
  fontSize: 45,
  fontWeight: REGULAR
};
const display3 = {
  fontSize: 56,
  fontWeight: REGULAR
};
const display4 = {
  fontSize: 112,
  fontWeight: LIGHT
};

const base = {
  fontSize: 14,
  fontFamily: 'Arial',
};


const phone = {
  base,
  caption,
  body1,
  body2,
  subheading,
  title,
  display1,
  display2,
  display3,
  display4
};

const tablet = {
  base,
  caption,
  body1,
  body2,
  subheading,
  title,
  display1,
  display2,
  display3,
  display4
};

const desktop = {
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
