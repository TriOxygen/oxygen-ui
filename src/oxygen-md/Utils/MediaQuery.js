class MediaQuery {
  constructor() {
    const tabletWidth = 768;
    const desktopWidth = 1024;

    this.tabletQuery = `(min-width : ${tabletWidth}px) and (max-width: ${desktopWidth}px)`;
    this.tabletDesktopQuery = `(min-width : ${tabletWidth}px)`;
    this.desktopQuery = `(min-width : ${desktopWidth}px)`;
    this.phoneQuery = `(max-width : ${tabletWidth - 1}px)`;
    this.portraitPhoneQuery = `(max-width : ${tabletWidth - 1}px) and (orientation: portrait)`;
  }

  detect() {
    if (this.phone()) {
      return 'phone';
    } else if (this.tablet()) {
      return 'tablet';
    } else if (this.desktop()) {
      return 'desktop';
    }
  }

  tablet() {
    return window.matchMedia(this.tabletQuery).matches;
  }

  tabletOrDesktop() {
    return window.matchMedia(this.tabletDesktopQuery).matches;
  }

  desktop() {
    return window.matchMedia(this.desktopQuery).matches;
  }

  phone() {
    return window.matchMedia(this.phoneQuery).matches;
  }

  portraitPhone() {
    return window.matchMedia(this.portraitPhoneQuery).matches;
  }
}

export default new MediaQuery();
